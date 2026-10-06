import { collection, getDocs, query, orderBy, where, limit } from "firebase/firestore";
import { db } from "./firebase";

// ─── Types ────────────────────────────────────────────────────────────────────

export type ServiceType = "mobile" | "website" | "windows" | "custom" | "ecommerce" | "admin";
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
    createdAt: data.createdAt || null,
  };
}

// ─── Firestore fetch functions ────────────────────────────────────────────────

export async function fetchAllClients(): Promise<ClientProject[]> {
  try {
    const q = query(collection(db, "clients"), orderBy("createdAt", "desc"));
    const snap = await getDocs(q);
    if (snap.empty) return sortedByDate(SEED_CLIENTS);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const all = snap.docs.map((d) => mapFirestoreDoc(d.id, d.data() as Record<string, any>));
    const published = all.filter((c) => c.published !== false);
    return published.length > 0 ? sortedByDate(published) : sortedByDate(SEED_CLIENTS);
  } catch {
    return sortedByDate(SEED_CLIENTS);
  }
}

export async function fetchClientBySlug(slug: string): Promise<ClientProject | null> {
  try {
    const q = query(collection(db, "clients"), where("slug", "==", slug), limit(1));
    const snap = await getDocs(q);
    if (!snap.empty) {
      const d = snap.docs[0];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return mapFirestoreDoc(d.id, d.data() as Record<string, any>);
    }
  } catch { /* fall through */ }
  return SEED_CLIENTS.find((c) => c.slug === slug) ?? null;
}

export async function fetchFeaturedClients(max = 6): Promise<ClientProject[]> {
  try {
    const q = query(collection(db, "clients"), orderBy("createdAt", "desc"), limit(max * 3));
    const snap = await getDocs(q);
    if (!snap.empty) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const all = snap.docs.map((d) => mapFirestoreDoc(d.id, d.data() as Record<string, any>));
      const featured = all.filter((c) => c.published !== false && c.featured === true);
      if (featured.length > 0) return sortedByDate(featured).slice(0, max);
    }
  } catch { /* fall through */ }
  return sortedByDate(SEED_CLIENTS.filter((c) => c.featured)).slice(0, max);
}

export async function fetchRelatedClients(
  slug: string,
  serviceTypes: ServiceType[],
  max = 3
): Promise<ClientProject[]> {
  try {
    const all = await fetchAllClients();
    return all
      .filter((c) => c.slug !== slug && c.serviceTypes.some((s) => serviceTypes.includes(s)))
      .slice(0, max);
  } catch {
    return getRelatedClients(slug, serviceTypes, max);
  }
}

// ─── Legacy sync functions (use static seed as fallback) ──────────────────────

export function getAllClients(): ClientProject[] {
  return sortedByDate(SEED_CLIENTS);
}

export function getClientsByService(service?: string | null): ClientProject[] {
  if (!service || service === "all") return sortedByDate(SEED_CLIENTS);
  return sortedByDate(SEED_CLIENTS.filter((c) => c.serviceTypes.includes(service as ServiceType)));
}

export function getClientBySlug(slug: string): ClientProject | undefined {
  return SEED_CLIENTS.find((c) => c.slug === slug);
}

export function getFeaturedClients(max = 6): ClientProject[] {
  return sortedByDate(SEED_CLIENTS.filter((c) => c.featured)).slice(0, max);
}

export function getRelatedClients(slug: string, serviceTypes: ServiceType[], max = 3): ClientProject[] {
  return sortedByDate(
    SEED_CLIENTS.filter((c) => c.slug !== slug && c.serviceTypes.some((s) => serviceTypes.includes(s)))
  ).slice(0, max);
}

export function getClientsStats() {
  const totalProjects = SEED_CLIENTS.length;
  const happyClients = SEED_CLIENTS.filter((c) => c.rating >= 4).length;
  const cities = new Set(SEED_CLIENTS.map((c) => c.location.split(",")[0].trim())).size;
  const avgRating = (SEED_CLIENTS.reduce((s, c) => s + c.rating, 0) / SEED_CLIENTS.length).toFixed(1);
  return { totalProjects, happyClients, cities, avgRating };
}

// ─── Seed data (used as fallback when Firestore is empty) ─────────────────────

export const SEED_CLIENTS: ClientProject[] = [
  {
    id: "1",
    slug: "spice-garden-restaurant",
    clientName: "Raj Kumar",
    contactPerson: "Raj Kumar",
    companyName: "Spice Garden Restaurant",
    location: "Madurai, Tamil Nadu",
    city: "Madurai",
    state: "Tamil Nadu",
    country: "India",
    serviceTypes: ["website"],
    links: [{ url: "https://spicegarden-madurai.example.com" }],
    rating: 5,
    review: "Sollabs Tech built us a beautiful website with an online menu and reservation system. Our customers love the new look and we've seen a 40% increase in online enquiries. Truly professional team — they delivered on time and were always available for changes.",
    reviewApproved: true,
    duration: "3 weeks",
    completedDate: "2025-09-15",
    features: ["Online Menu", "Table Reservation", "Photo Gallery", "Google Maps", "WhatsApp Ordering", "Mobile Responsive"],
    techStack: ["Next.js", "TailwindCSS", "Firebase"],
    description: "A modern restaurant website for Spice Garden, one of Madurai's popular South Indian dining spots. The site features a dynamic digital menu with category tabs, an online table reservation system with time-slot selection, a photo gallery showcasing dishes and ambience, embedded Google Maps for directions, and direct WhatsApp ordering integration. Built mobile-first with local SEO optimisation.",
    screenshots: [],
    featured: true,
    published: true,
    showCompanyInfo: true,
  },
  {
    id: "2",
    slug: "kidsmart-academy-app",
    clientName: "Priya Nair",
    contactPerson: "Priya Nair",
    companyName: "KidSmart Academy",
    location: "Coimbatore, Tamil Nadu",
    city: "Coimbatore",
    state: "Tamil Nadu",
    country: "India",
    serviceTypes: ["mobile"],
    links: [
      { url: "https://play.google.com/store/apps/details?id=com.kidsmart.academy" },
      { url: "https://apps.apple.com/in/app/kidsmart-academy/id1234567890" },
    ],
    rating: 5,
    review: "The app has transformed how we communicate with parents. Attendance, fee payment, homework — everything is in one place now. Parents love it and it saves our staff 2–3 hours every day. Sollabs Tech was patient with every revision and delivered a polished product.",
    reviewApproved: true,
    duration: "8 weeks",
    completedDate: "2025-10-01",
    features: ["Attendance Tracking", "Parent Notifications", "Fee Payment", "Homework Portal", "Class Schedule", "Report Cards"],
    techStack: ["Flutter", "Firebase", "Dart", "Razorpay"],
    description: "KidSmart Academy needed a cross-platform mobile app to bridge communication between school staff and parents. The app covers daily attendance with instant push notifications to parents, online fee payment via Razorpay, homework assignment uploads, live class schedules, and downloadable report cards — all in a simple, child-friendly UI. Available on both Android (Google Play) and iOS (App Store).",
    screenshots: [],
    featured: true,
    published: true,
    showCompanyInfo: true,
  },
  {
    id: "3",
    slug: "fastbill-pos-windows",
    clientName: "Senthil Murugan",
    contactPerson: "Senthil Murugan",
    companyName: "FastBill POS",
    location: "Chennai, Tamil Nadu",
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    serviceTypes: ["windows"],
    links: [{ url: "https://fastbillpos.example.com/download", type: "windows" }],
    rating: 4,
    review: "This billing software has made our shop operations so much faster. The barcode scanner and GST reports work perfectly. Sollabs Tech also provided great training and after-delivery support. Highly recommended for retail businesses.",
    reviewApproved: true,
    duration: "10 weeks",
    completedDate: "2025-08-20",
    features: ["Invoice Generation", "Inventory Management", "Customer Database", "GST Reports", "Barcode Scanner", "Daily Sales Report"],
    techStack: ["Electron.js", "React", "SQLite", "Node.js"],
    description: "A Windows desktop billing and point-of-sale (POS) application built for retail shops. FastBill POS handles GST-compliant invoice generation, real-time inventory tracking with low-stock alerts, a customer database with purchase history, barcode scanner integration, and end-of-day sales reports. Works fully offline using a local SQLite database, with optional cloud backup.",
    screenshots: [],
    featured: false,
    published: true,
    showCompanyInfo: true,
  },
  {
    id: "4",
    slug: "textile-hub-ecommerce",
    clientName: "Vijay Annamalai",
    contactPerson: "Vijay Annamalai",
    companyName: "Textile Hub",
    location: "Tiruppur, Tamil Nadu",
    city: "Tiruppur",
    state: "Tamil Nadu",
    country: "India",
    serviceTypes: ["website", "mobile"],
    links: [
      { url: "https://textilehub-india.example.com" },
      { url: "https://play.google.com/store/apps/details?id=com.textilehub.shop" },
    ],
    rating: 5,
    review: "We now have a complete online presence — a fast website and a customer app. Our B2B wholesale orders have increased significantly and the admin dashboard is easy for our non-technical team to use. Really happy with the quality delivered.",
    reviewApproved: true,
    duration: "12 weeks",
    completedDate: "2025-11-10",
    features: ["Product Catalogue", "Wholesale Portal", "Shopping Cart", "Order Tracking", "Razorpay Payments", "Admin Dashboard"],
    techStack: ["React Native", "Next.js", "Node.js", "MongoDB", "Razorpay"],
    description: "A complete e-commerce solution for Textile Hub, a fabric and garments wholesaler in Tiruppur. Includes a Next.js website with a B2B wholesale enquiry portal, a React Native Android app for retail customers with a shopping cart and order tracking, an admin dashboard for inventory and order management, and Razorpay integration for online payments.",
    screenshots: [],
    featured: true,
    published: true,
    showCompanyInfo: true,
  },
  {
    id: "5",
    slug: "logitrack-erp-system",
    clientName: "Arun Krishnamurthy",
    contactPerson: "Arun Krishnamurthy",
    companyName: "LogiTrack Solutions",
    location: "Bangalore, Karnataka",
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
    serviceTypes: ["custom"],
    links: [],
    rating: 5,
    review: "Sollabs Tech delivered a robust logistics ERP that our entire team adopted quickly. Route optimisation alone saves us 2–3 hours of planning daily. The real-time GPS tracking and automated GST invoicing were exactly what we needed. Exceptional work.",
    reviewApproved: true,
    duration: "16 weeks",
    completedDate: "2025-07-01",
    features: ["Route Optimisation", "Driver Management", "Real-time GPS", "Invoice Automation", "Customer Portal", "Analytics Dashboard"],
    techStack: ["React", "Node.js", "PostgreSQL", "Google Maps API", "WebSockets"],
    description: "A private logistics ERP system built for LogiTrack Solutions, a freight and last-mile delivery company in Bangalore. The system covers fleet and driver management, live shipment tracking via Google Maps, automated GST-compliant invoicing, a customer self-service portal for tracking their shipments, and a management analytics dashboard for route performance and cost reporting.",
    screenshots: [],
    featured: false,
    published: true,
    showCompanyInfo: true,
  },
  {
    id: "6",
    slug: "freshmart-grocery-app",
    clientName: "Meena Sundarajan",
    contactPerson: "Meena Sundarajan",
    companyName: "FreshMart",
    location: "Salem, Tamil Nadu",
    city: "Salem",
    state: "Tamil Nadu",
    country: "India",
    serviceTypes: ["mobile"],
    links: [{ url: "https://play.google.com/store/apps/details?id=com.freshmart.grocery" }],
    rating: 4,
    review: "Our grocery delivery app was ready in just 6 weeks and works smoothly even with high order volumes. The slot-based delivery and loyalty points features are a big hit with our customers. Great value for money from the Sollabs team.",
    reviewApproved: true,
    duration: "6 weeks",
    completedDate: "2025-12-01",
    features: ["Grocery Catalogue", "Slot-based Delivery", "Real-time Tracking", "Loyalty Points", "Offer Management", "WhatsApp Alerts"],
    techStack: ["Flutter", "Firebase", "Razorpay", "Dart"],
    description: "A hyperlocal grocery delivery Android app for FreshMart, a neighbourhood supermarket in Salem. Customers browse the full catalogue with search and category filters, schedule deliveries in hourly slots, track orders in real time on a map, and earn loyalty points on every purchase. A separate admin app lets the team manage inventory, flash offers, and delivery scheduling from their phones.",
    screenshots: [],
    featured: true,
    published: true,
    showCompanyInfo: true,
  },
];
