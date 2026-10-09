import { collection, getDocs, query, orderBy, where, limit } from "firebase/firestore";
import { cache } from "react";
import { db } from "./firebase";

// ─── Types ────────────────────────────────────────────────────────────────────

export type ServiceType = "mobile" | "website" | "windows" | "custom" | "ecommerce" | "admin" | "vendor";
export type LinkType = "playstore" | "appstore" | "website" | "windows" | "other";

export interface ProjectLink {
  url: string;
  type?: LinkType;
  isPrivate?: boolean;
}

export interface ClientProject {
  id: string;
  slug: string;

  // Company
  companyName: string;
  logo?: string;
  logoBackground?: "transparent" | "white" | "dark";
  clientPhoto?: string;
  clientName: string;         // display name / contact person (backwards compat)
  contactPerson?: string;
  designation?: string;
  industry?: string;
  companyWebsite?: string;

  // Location
  location: string;           // "City, State"
  city?: string;
  state?: string;
  country?: string;

  // Project
  projectName?: string;
  serviceTypes: ServiceType[];
  shortDescription?: string;
  description: string;
  features: string[];
  techStack: string[];
  duration: string;
  completedDate: string;
  startDate?: string;
  projectStatus?: "in-progress" | "completed" | "maintenance" | "on-hold";

  // Links + media
  links: ProjectLink[];
  demoVideo?: string;
  screenshots: string[];

  // Review
  rating: number;
  review: string;             // = reviewText
  reviewText?: string;
  reviewerName?: string;
  reviewerDesignation?: string;
  reviewDate?: string;
  reviewApproved?: boolean;

  // Visibility
  featured: boolean;
  published?: boolean;
  showCompanyInfo?: boolean;
  displayOrder?: number;

  createdAt?: { seconds: number } | null;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function detectLinkType(url: string): LinkType {
  try {
    const host = new URL(url).hostname.toLowerCase();
    if (host.includes("play.google.com")) return "playstore";
    if (host.includes("apps.apple.com")) return "appstore";
    if (host.includes("microsoft.com") || host.includes("apps.microsoft.com")) return "windows";
    return "website";
  } catch {
    return "website";
  }
}

export function getLinkType(link: ProjectLink): LinkType {
  return link.type ?? detectLinkType(link.url);
}

export function formatCompletedDate(iso: string): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-IN", { month: "short", year: "numeric" });
}

export function slugifyClient(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function sortedByDate(arr: ClientProject[]): ClientProject[] {
  return [...arr].sort(
    (a, b) => new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime()
  );
}

// ─── Firestore mapper ─────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapFirestoreDoc(id: string, data: Record<string, any>): ClientProject {
  const contactPerson: string = data.contactPerson || data.clientName || "";
  const city: string = data.city || "";
  const state: string = data.state || "";
  const location: string =
    data.location || [city, state].filter(Boolean).join(", ") || "";
  const reviewText: string = data.reviewText || data.review || "";

  return {
    id,
    slug: data.slug || id,
    companyName: data.companyName || data.name || "",
    logo: data.logo || undefined,
    logoBackground: data.logoBackground || "transparent",
    clientPhoto: data.clientPhoto || undefined,
    clientName: contactPerson,
    contactPerson,
    designation: data.designation || undefined,
    industry: data.industry || undefined,
    companyWebsite: data.companyWebsite || undefined,
    location,
    city,
    state,
    country: data.country || "India",
    projectName: data.projectName || undefined,
    serviceTypes: Array.isArray(data.serviceTypes) ? data.serviceTypes : [],
    shortDescription: data.shortDescription || undefined,
    description: data.fullDescription || data.description || "",
    features: Array.isArray(data.features) ? data.features : [],
    techStack: Array.isArray(data.techStack) ? data.techStack : [],
    duration: data.duration || "",
    completedDate: data.completedDate || "",
    startDate: data.startDate || undefined,
    projectStatus: data.projectStatus || "completed",
    links: Array.isArray(data.links) ? data.links : [],
    demoVideo: data.demoVideo || undefined,
    screenshots: Array.isArray(data.screenshots) ? data.screenshots : [],
    rating: typeof data.rating === "number" ? data.rating : 5,
    review: reviewText,
    reviewText,
    reviewerName: data.reviewerName || contactPerson || undefined,
    reviewerDesignation: data.reviewerDesignation || data.designation || undefined,
    reviewDate: data.reviewDate || data.completedDate || undefined,
    reviewApproved: data.reviewApproved === true,
    featured: data.featured === true,
    published: data.published !== false,
    showCompanyInfo: data.showCompanyInfo !== false,
    displayOrder: typeof data.displayOrder === "number" ? data.displayOrder : 999,
    createdAt: data.createdAt ? { seconds: Number(data.createdAt.seconds) } : null,
  };
}

// ─── Firestore fetch functions ────────────────────────────────────────────────
// Errors propagate so ISR keeps serving the last good page instead of caching an empty one.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toProject = (d: { id: string; data: () => any }) => mapFirestoreDoc(d.id, d.data());

export const fetchAllClients = cache(async (): Promise<ClientProject[]> => {
  const snap = await getDocs(query(collection(db, "clients"), orderBy("createdAt", "desc")));
  return sortedByDate(snap.docs.map(toProject).filter((c) => c.published !== false));
});

export const fetchClientBySlug = cache(async (slug: string): Promise<ClientProject | null> => {
  const snap = await getDocs(query(collection(db, "clients"), where("slug", "==", slug), limit(1)));
  const project = snap.empty ? null : toProject(snap.docs[0]);
  return project && project.published !== false ? project : null;
});

export async function fetchFeaturedClients(max = 6): Promise<ClientProject[]> {
  const all = await fetchAllClients();
  const featured = all.filter((c) => c.featured);
  return (featured.length > 0 ? featured : all).slice(0, max);
}

export async function fetchRelatedClients(
  slug: string,
  serviceTypes: ServiceType[],
  max = 3
): Promise<ClientProject[]> {
  const all = await fetchAllClients();
  return all
    .filter((c) => c.slug !== slug && c.serviceTypes.some((s) => serviceTypes.includes(s)))
    .slice(0, max);
}
