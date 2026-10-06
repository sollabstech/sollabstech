// ─── Types ────────────────────────────────────────────────────────────────────

export type ServiceType = "mobile" | "website" | "windows" | "custom";
export type LinkType = "playstore" | "appstore" | "website" | "windows" | "other";

export interface ProjectLink {
  url: string;
  type?: LinkType; // auto-detected from URL if omitted
}

export interface ClientProject {
  id: string;
  slug: string;
  clientName: string;
  companyName: string;
  logo?: string;        // path under public/images/clients/
  location: string;     // e.g. "Madurai, Tamil Nadu"
  serviceTypes: ServiceType[];
  links: ProjectLink[]; // empty = private project
  rating: number;       // 1–5
  review: string;
  duration: string;     // e.g. "6 weeks"
  completedDate: string; // ISO "2025-11-01"
  features: string[];
  techStack: string[];
  description: string;
  screenshots: string[]; // paths under public/images/clients/
  featured: boolean;
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
  return new Date(iso).toLocaleDateString("en-IN", { month: "short", year: "numeric" });
}

function sortedByDate(arr: ClientProject[]): ClientProject[] {
  return [...arr].sort(
    (a, b) => new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime()
  );
}

export function getAllClients(): ClientProject[] {
  return sortedByDate(clients);
}

export function getClientsByService(service?: string | null): ClientProject[] {
  if (!service || service === "all") return sortedByDate(clients);
  return sortedByDate(clients.filter((c) => c.serviceTypes.includes(service as ServiceType)));
}

export function getClientBySlug(slug: string): ClientProject | undefined {
  return clients.find((c) => c.slug === slug);
}

export function getFeaturedClients(max = 6): ClientProject[] {
  return sortedByDate(clients.filter((c) => c.featured)).slice(0, max);
}

export function getRelatedClients(slug: string, serviceTypes: ServiceType[], max = 3): ClientProject[] {
  return sortedByDate(
    clients.filter((c) => c.slug !== slug && c.serviceTypes.some((s) => serviceTypes.includes(s)))
  ).slice(0, max);
}

export function getClientsStats() {
  const totalProjects = clients.length;
  const happyClients = clients.filter((c) => c.rating >= 4).length;
  const cities = new Set(clients.map((c) => c.location.split(",")[0].trim())).size;
  const avgRating = (clients.reduce((s, c) => s + c.rating, 0) / clients.length).toFixed(1);
  return { totalProjects, happyClients, cities, avgRating };
}

// ─── Data (replace with real clients) ────────────────────────────────────────

export const clients: ClientProject[] = [
  // ── 1. Website ──────────────────────────────────────────────────────────────
  {
    id: "1",
    slug: "spice-garden-restaurant",
    clientName: "Raj Kumar",
    companyName: "Spice Garden Restaurant",
    location: "Madurai, Tamil Nadu",
    serviceTypes: ["website"],
    links: [{ url: "https://spicegarden-madurai.example.com" }],
    rating: 5,
    review:
      "Sollabs Tech built us a beautiful website with an online menu and reservation system. Our customers love the new look and we've seen a 40% increase in online enquiries. Truly professional team — they delivered on time and were always available for changes.",
    duration: "3 weeks",
    completedDate: "2025-09-15",
    features: ["Online Menu", "Table Reservation", "Photo Gallery", "Google Maps", "WhatsApp Ordering", "Mobile Responsive"],
    techStack: ["Next.js", "TailwindCSS", "Firebase"],
    description:
      "A modern restaurant website for Spice Garden, one of Madurai's popular South Indian dining spots. The site features a dynamic digital menu with category tabs, an online table reservation system with time-slot selection, a photo gallery showcasing dishes and ambience, embedded Google Maps for directions, and direct WhatsApp ordering integration. Built mobile-first with local SEO optimisation.",
    screenshots: [],
    featured: true,
  },

  // ── 2. Mobile App (Play Store + App Store) ──────────────────────────────────
  {
    id: "2",
    slug: "kidsmart-academy-app",
    clientName: "Priya Nair",
    companyName: "KidSmart Academy",
    location: "Coimbatore, Tamil Nadu",
    serviceTypes: ["mobile"],
    links: [
      { url: "https://play.google.com/store/apps/details?id=com.kidsmart.academy" },
      { url: "https://apps.apple.com/in/app/kidsmart-academy/id1234567890" },
    ],
    rating: 5,
    review:
      "The app has transformed how we communicate with parents. Attendance, fee payment, homework — everything is in one place now. Parents love it and it saves our staff 2–3 hours every day. Sollabs Tech was patient with every revision and delivered a polished product.",
    duration: "8 weeks",
    completedDate: "2025-10-01",
    features: ["Attendance Tracking", "Parent Notifications", "Fee Payment", "Homework Portal", "Class Schedule", "Report Cards"],
    techStack: ["Flutter", "Firebase", "Dart", "Razorpay"],
    description:
      "KidSmart Academy needed a cross-platform mobile app to bridge communication between school staff and parents. The app covers daily attendance with instant push notifications to parents, online fee payment via Razorpay, homework assignment uploads, live class schedules, and downloadable report cards — all in a simple, child-friendly UI. Available on both Android (Google Play) and iOS (App Store).",
    screenshots: [],
    featured: true,
  },

  // ── 3. Windows App ──────────────────────────────────────────────────────────
  {
    id: "3",
    slug: "fastbill-pos-windows",
    clientName: "Senthil Murugan",
    companyName: "FastBill POS",
    location: "Chennai, Tamil Nadu",
    serviceTypes: ["windows"],
    links: [{ url: "https://fastbillpos.example.com/download", type: "windows" }],
    rating: 4,
    review:
      "This billing software has made our shop operations so much faster. The barcode scanner and GST reports work perfectly. Sollabs Tech also provided great training and after-delivery support. Highly recommended for retail businesses.",
    duration: "10 weeks",
    completedDate: "2025-08-20",
    features: ["Invoice Generation", "Inventory Management", "Customer Database", "GST Reports", "Barcode Scanner", "Daily Sales Report"],
    techStack: ["Electron.js", "React", "SQLite", "Node.js"],
    description:
      "A Windows desktop billing and point-of-sale (POS) application built for retail shops. FastBill POS handles GST-compliant invoice generation, real-time inventory tracking with low-stock alerts, a customer database with purchase history, barcode scanner integration, and end-of-day sales reports. Works fully offline using a local SQLite database, with optional cloud backup.",
    screenshots: [],
    featured: false,
  },

  // ── 4. Website + Mobile App ─────────────────────────────────────────────────
  {
    id: "4",
    slug: "textile-hub-ecommerce",
    clientName: "Vijay Annamalai",
    companyName: "Textile Hub",
    location: "Tiruppur, Tamil Nadu",
    serviceTypes: ["website", "mobile"],
    links: [
      { url: "https://textilehub-india.example.com" },
      { url: "https://play.google.com/store/apps/details?id=com.textilehub.shop" },
    ],
    rating: 5,
    review:
      "We now have a complete online presence — a fast website and a customer app. Our B2B wholesale orders have increased significantly and the admin dashboard is easy for our non-technical team to use. Really happy with the quality delivered.",
    duration: "12 weeks",
    completedDate: "2025-11-10",
    features: ["Product Catalogue", "Wholesale Portal", "Shopping Cart", "Order Tracking", "Razorpay Payments", "Admin Dashboard"],
    techStack: ["React Native", "Next.js", "Node.js", "MongoDB", "Razorpay"],
    description:
      "A complete e-commerce solution for Textile Hub, a fabric and garments wholesaler in Tiruppur. Includes a Next.js website with a B2B wholesale enquiry portal, a React Native Android app for retail customers with a shopping cart and order tracking, an admin dashboard for inventory and order management, and Razorpay integration for online payments.",
    screenshots: [],
    featured: true,
  },

  // ── 5. Custom Software (private — no public link) ───────────────────────────
  {
    id: "5",
    slug: "logitrack-erp-system",
    clientName: "Arun Krishnamurthy",
    companyName: "LogiTrack Solutions",
    location: "Bangalore, Karnataka",
    serviceTypes: ["custom"],
    links: [], // private internal system
    rating: 5,
    review:
      "Sollabs Tech delivered a robust logistics ERP that our entire team adopted quickly. Route optimisation alone saves us 2–3 hours of planning daily. The real-time GPS tracking and automated GST invoicing were exactly what we needed. Exceptional work.",
    duration: "16 weeks",
    completedDate: "2025-07-01",
    features: ["Route Optimisation", "Driver Management", "Real-time GPS", "Invoice Automation", "Customer Portal", "Analytics Dashboard"],
    techStack: ["React", "Node.js", "PostgreSQL", "Google Maps API", "WebSockets"],
    description:
      "A private logistics ERP system built for LogiTrack Solutions, a freight and last-mile delivery company in Bangalore. The system covers fleet and driver management, live shipment tracking via Google Maps, automated GST-compliant invoicing, a customer self-service portal for tracking their shipments, and a management analytics dashboard for route performance and cost reporting.",
    screenshots: [],
    featured: false,
  },

  // ── 6. Mobile App (Play Store only) ─────────────────────────────────────────
  {
    id: "6",
    slug: "freshmart-grocery-app",
    clientName: "Meena Sundarajan",
    companyName: "FreshMart",
    location: "Salem, Tamil Nadu",
    serviceTypes: ["mobile"],
    links: [
      { url: "https://play.google.com/store/apps/details?id=com.freshmart.grocery" },
    ],
    rating: 4,
    review:
      "Our grocery delivery app was ready in just 6 weeks and works smoothly even with high order volumes. The slot-based delivery and loyalty points features are a big hit with our customers. Great value for money from the Sollabs team.",
    duration: "6 weeks",
    completedDate: "2025-12-01",
    features: ["Grocery Catalogue", "Slot-based Delivery", "Real-time Tracking", "Loyalty Points", "Offer Management", "WhatsApp Alerts"],
    techStack: ["Flutter", "Firebase", "Razorpay", "Dart"],
    description:
      "A hyperlocal grocery delivery Android app for FreshMart, a neighbourhood supermarket in Salem. Customers browse the full catalogue with search and category filters, schedule deliveries in hourly slots, track orders in real time on a map, and earn loyalty points on every purchase. A separate admin app lets the team manage inventory, flash offers, and delivery scheduling from their phones.",
    screenshots: [],
    featured: true,
  },
];
