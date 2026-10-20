// All prices, packages and features for /pricing live here.
// To change a price, edit the `price` number. To add a feature row, add it to
// `features` with one value per tier: true (included), false (not included) or text.

export type Cell = boolean | string;

export interface Tier {
  name: string;
  price: number;
  title: string;
  summary: string;
  popular?: boolean;
}

export interface Category {
  id: string;
  icon: string;
  name: string;
  blurb: string;
  tiers: [Tier, Tier, Tier];
  features: { label: string; values: [Cell, Cell, Cell] }[];
  services: string[];
}

export const WHATSAPP = "919003850743";

export const CATEGORIES: Category[] = [
  {
    id: "website",
    icon: "🌐",
    name: "Website & E-commerce",
    blurb: "Business websites, online stores and multi-vendor marketplaces.",
    tiers: [
      { name: "Basic", price: 10000, title: "Website", summary: "A fast, mobile-friendly website for your business with WhatsApp and contact form." },
      { name: "Standard", price: 20000, title: "Website + Admin Panel + App", summary: "Website, admin panel to manage everything, and an Android app for your customers.", popular: true },
      { name: "Premium", price: 35000, title: "Multi-vendor Marketplace", summary: "Website, admin panel and app where many sellers list and sell, with commission." },
    ],
    features: [
      { label: "Mobile-friendly website", values: [true, true, true] },
      { label: "Pages", values: ["Up to 5", "Up to 10", "Unlimited"] },
      { label: "Domain & hosting setup", values: [true, true, true] },
      { label: "WhatsApp & contact form", values: [true, true, true] },
      { label: "Google SEO setup", values: [true, true, true] },
      { label: "Admin panel", values: [false, true, true] },
      { label: "Android mobile app", values: [false, true, true] },
      { label: "Online payments (UPI / cards)", values: [false, true, true] },
      { label: "Multi-vendor (many sellers)", values: [false, false, true] },
      { label: "Seller dashboard & commission", values: [false, false, true] },
      { label: "Revisions", values: ["2", "5", "Unlimited"] },
      { label: "Free support", values: ["1 month", "3 months", "6 months"] },
      { label: "Delivery time", values: ["7 days", "20 days", "35 days"] },
    ],
    services: ["Business website", "Portfolio website", "E-commerce store", "Multi-vendor marketplace", "Booking website", "Landing page"],
  },
  {
    id: "app",
    icon: "📱",
    name: "Mobile Apps",
    blurb: "Android and iPhone apps with an admin panel to run them.",
    tiers: [
      { name: "Basic", price: 12000, title: "Android App", summary: "A clean Android app for your business, published on the Play Store." },
      { name: "Standard", price: 22000, title: "App + Admin Panel", summary: "Android app with login, payments, notifications and an admin panel.", popular: true },
      { name: "Premium", price: 38000, title: "Android + iPhone + Admin", summary: "One app for Android and iPhone, with admin panel and every feature." },
    ],
    features: [
      { label: "Android app", values: [true, true, true] },
      { label: "iPhone (iOS) app", values: [false, false, true] },
      { label: "Screens", values: ["Up to 6", "Up to 15", "Unlimited"] },
      { label: "Login (phone OTP / Google)", values: [true, true, true] },
      { label: "Play Store publishing", values: [true, true, true] },
      { label: "Admin panel", values: [false, true, true] },
      { label: "Push notifications", values: [false, true, true] },
      { label: "Online payments (UPI / cards)", values: [false, true, true] },
      { label: "App Store publishing", values: [false, false, true] },
      { label: "Revisions", values: ["2", "5", "Unlimited"] },
      { label: "Free support", values: ["1 month", "3 months", "6 months"] },
      { label: "Delivery time", values: ["10 days", "25 days", "40 days"] },
    ],
    services: ["Android app", "iPhone app", "Flutter app", "Delivery app", "Education app", "Booking app"],
  },
  {
    id: "software",
    icon: "🖥️",
    name: "Custom Software & ERP",
    blurb: "Billing, ERP, CRM and custom software for web, Windows and mobile.",
    tiers: [
      { name: "Basic", price: 15000, title: "Billing / Single Module", summary: "Billing, stock or any one module, on the web or as Windows software." },
      { name: "Standard", price: 30000, title: "ERP / CRM", summary: "A complete ERP or CRM for your business with users, roles and reports.", popular: true },
      { name: "Premium", price: 50000, title: "Full ERP: Web + Windows + Mobile", summary: "Your whole business on every device, across branches, with a staff app." },
    ],
    features: [
      { label: "Modules", values: ["1", "Up to 4", "Unlimited"] },
      { label: "Runs on", values: ["Web or Windows", "Web + Windows", "Web + Windows + Mobile"] },
      { label: "Users", values: ["Up to 2", "Up to 10", "Unlimited"] },
      { label: "GST billing & invoices", values: [true, true, true] },
      { label: "Reports & Excel export", values: [true, true, true] },
      { label: "Cloud backup", values: [true, true, true] },
      { label: "Inventory & stock", values: [false, true, true] },
      { label: "Staff, attendance & payroll", values: [false, true, true] },
      { label: "Mobile app for staff", values: [false, false, true] },
      { label: "Multi-branch", values: [false, false, true] },
      { label: "Revisions", values: ["2", "5", "Unlimited"] },
      { label: "Free support", values: ["1 month", "3 months", "6 months"] },
      { label: "Delivery time", values: ["10 days", "30 days", "45 days"] },
    ],
    services: ["ERP software", "CRM software", "Billing & POS", "Windows desktop software", "Inventory management", "School management", "HR & payroll", "Custom software"],
  },
];

export const formatINR = (n: number) => "₹" + n.toLocaleString("en-IN");

export const startingPrice = (c: Category) => Math.min(...c.tiers.map((t) => t.price));
