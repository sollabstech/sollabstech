import { collection, getDocs, query, where, orderBy, limit } from "firebase/firestore";
import { db } from "./firebase";

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: "laptop" | "mobile";
  productType: "laptop" | "mobile";
  price: number;
  originalPrice?: number;
  condition: string;
  images: string[];
  shortSpecs: string;
  specs: Record<string, string>;
  description: string;
  inStock: boolean;
  featured: boolean;
  accessories?: string;
  videoUrl?: string;
  warranty?: string;
  // mobile-specific
  network?: string;
  mobileRam?: string;
  mobileStorage?: string;
  mobileColor?: string;
  batteryHealth?: string;
  physicalCondition?: string;
  screenCondition?: string;
  biometricWorking?: string;
  warrantyRemaining?: string;
  partsReplaced?: string;
  purchaseDate?: string;
}

export function formatINR(price: number): string {
  return new Intl.NumberFormat("en-IN").format(price);
}

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function categoryFromAdmin(cat: string): "laptop" | "mobile" {
  const lower = (cat || "").toLowerCase();
  if (lower.includes("mobile") || lower.includes("phone") || lower.includes("smartphone")) return "mobile";
  return "laptop";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function buildShortSpecs(data: Record<string, any>): string {
  const isMobile =
    data.productType === "mobile" ||
    categoryFromAdmin(data.category || "") === "mobile";

  if (isMobile) {
    const parts: string[] = [];
    const chip = data.chipset || data.processor || "";
    if (chip) {
      const match =
        chip.match(/Snapdragon \d+/i) ||
        chip.match(/Apple [A-Z]\d+/i) ||
        chip.match(/Dimensity \d+/i) ||
        chip.match(/Exynos \d+/i) ||
        chip.match(/Kirin \d+/i);
      parts.push(match ? match[0] : chip.split(" ").slice(0, 3).join(" "));
    }
    if (data.mobileRam) parts.push(data.mobileRam + " RAM");
    if (data.mobileStorage) parts.push(data.mobileStorage);
    if (data.network) parts.push(data.network);
    return parts.join(" · ");
  }

  const parts: string[] = [];
  if (data.processor) {
    const match =
      data.processor.match(/i[3579]-\d+/i) ||
      data.processor.match(/Ryzen \d/i) ||
      data.processor.match(/Apple [A-Z]\d+/i) ||
      data.processor.match(/Snapdragon \d+/i);
    parts.push(match ? match[0] : data.processor.split(" ").slice(0, 3).join(" "));
  }
  if (data.ram) parts.push(data.ram.split(" ")[0] + " RAM");
  if (data.storageSize)
    parts.push(data.storageSize + (data.storageType ? " " + data.storageType : ""));
  if (data.graphicsCard)
    parts.push(
      data.graphicsCard
        .replace("NVIDIA ", "")
        .replace("AMD ", "")
        .split(" ")
        .slice(0, 3)
        .join(" ")
    );
  return parts.join(" · ");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function buildSpecs(data: Record<string, any>): Record<string, string> {
  const isMobile =
    data.productType === "mobile" ||
    categoryFromAdmin(data.category || "") === "mobile";

  const specs: Record<string, string> = {};

  if (isMobile) {
    if (data.chipset) specs["Processor"] = data.chipset;
    else if (data.processor) specs["Processor"] = data.processor;
    if (data.mobileRam) specs["RAM"] = data.mobileRam;
    if (data.mobileStorage) specs["Storage"] = data.mobileStorage;
    if (data.network) specs["Network"] = data.network;
    if (data.display) specs["Display"] = data.display;
    if (data.rearCamera) specs["Rear Camera"] = data.rearCamera;
    if (data.frontCamera) specs["Front Camera"] = data.frontCamera;
    if (data.battery) specs["Battery"] = data.battery;
    if (data.fastCharging) specs["Fast Charging"] = data.fastCharging;
    if (data.os) specs["OS"] = data.os;
    if (data.simType) specs["SIM"] = data.simType;
    if (data.refreshRate) specs["Refresh Rate"] = data.refreshRate;
    if (data.ipRating) specs["IP Rating"] = data.ipRating;
    if (data.mobileColor) specs["Color"] = data.mobileColor;
    if (data.condition) specs["Condition"] = data.condition;
    if (data.accessories) specs["In The Box"] = data.accessories;
    if (data.batteryHealth) specs["Battery Health"] = data.batteryHealth;
    if (data.physicalCondition) specs["Physical Condition"] = data.physicalCondition;
    if (data.screenCondition) specs["Screen Condition"] = data.screenCondition;
    if (data.biometricWorking) specs["Face ID / Fingerprint"] = data.biometricWorking;
    if (data.warrantyRemaining) specs["Warranty Remaining"] = data.warrantyRemaining;
    if (data.purchaseDate) specs["Purchase Date"] = data.purchaseDate;
  } else {
    if (data.processor) specs["Processor"] = data.processor;
    if (data.ram) specs["RAM"] = data.ram;
    const storage = [data.storageSize, data.storageType].filter(Boolean).join(" ");
    if (storage) specs["Storage"] = storage;
    if (data.graphicsCard) specs["Graphics Card"] = data.graphicsCard;
    if (data.display) specs["Display"] = data.display;
    if (data.os) specs["OS"] = data.os;
    if (data.battery) specs["Battery"] = data.battery;
    if (data.ports) specs["Ports"] = data.ports;
    if (data.weight) specs["Weight"] = data.weight;
    if (data.condition) specs["Condition"] = data.condition;
    if (data.accessories) specs["Accessories"] = data.accessories;
  }
  return specs;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapDoc(id: string, data: Record<string, any>): Product {
  const slug: string = data.slug || slugify(data.name || id);
  const images: string[] =
    Array.isArray(data.images) && data.images.length
      ? data.images
      : data.image
      ? [data.image]
      : [];
  const productType: "laptop" | "mobile" =
    data.productType === "mobile" || categoryFromAdmin(data.category || "") === "mobile"
      ? "mobile"
      : "laptop";
  return {
    id,
    slug,
    name: data.name || "",
    brand: data.brand || (data.name || "").split(" ")[0],
    category: categoryFromAdmin(data.category || ""),
    productType,
    price: data.price || 0,
    originalPrice: data.originalPrice || undefined,
    condition: data.condition || "Refurbished",
    images,
    shortSpecs: buildShortSpecs(data),
    specs: buildSpecs(data),
    description: data.description || "",
    inStock:
      data.status === "available" ||
      (typeof data.stock === "number" && data.stock > 0),
    featured: data.featured === true,
    accessories: data.accessories || undefined,
    videoUrl: data.videoUrl || undefined,
    warranty: data.warranty || undefined,
    network: data.network || undefined,
    mobileRam: data.mobileRam || undefined,
    mobileStorage: data.mobileStorage || undefined,
    mobileColor: data.mobileColor || undefined,
    batteryHealth: data.batteryHealth || undefined,
    physicalCondition: data.physicalCondition || undefined,
    screenCondition: data.screenCondition || undefined,
    biometricWorking: data.biometricWorking || undefined,
    warrantyRemaining: data.warrantyRemaining || undefined,
    partsReplaced: data.partsReplaced || undefined,
    purchaseDate: data.purchaseDate || undefined,
  };
}

export async function fetchProducts(): Promise<Product[]> {
  const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return snap.docs.map((d) => mapDoc(d.id, d.data() as Record<string, any>));
}

export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  const q = query(collection(db, "products"), where("slug", "==", slug));
  const snap = await getDocs(q);
  if (!snap.empty) {
    const d = snap.docs[0];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return mapDoc(d.id, d.data() as Record<string, any>);
  }
  // Fallback: match by computed slug (for products saved before slug field existed)
  const all = await fetchProducts();
  return all.find((p) => p.slug === slug) ?? null;
}

export async function fetchFeaturedProducts(count = 4): Promise<Product[]> {
  // Single-field orderBy only — no composite index needed
  const q = query(
    collection(db, "products"),
    orderBy("createdAt", "desc"),
    limit(count * 3)
  );
  const snap = await getDocs(q);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const results = snap.docs.map((d) => mapDoc(d.id, d.data() as Record<string, any>));
  const available = results.filter((p) => p.inStock);
  return (available.length >= count ? available : results).slice(0, count);
}

export async function fetchRelatedProducts(current: Product, count = 3): Promise<Product[]> {
  const all = await fetchProducts();
  return all
    .filter((p) => p.category === current.category && p.id !== current.id)
    .slice(0, count);
}

export async function fetchAllSlugs(): Promise<string[]> {
  const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = d.data() as Record<string, any>;
    return (data.slug as string) || slugify((data.name as string) || d.id);
  });
}
