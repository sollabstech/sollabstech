import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

// Keep identical to warrantyKey() in the admin panel (src/lib/warrantyPublic.ts).
export function warrantyKey(serial: string): string {
  return serial.trim().toUpperCase().replace(/\s+/g, "").replace(/\//g, "-");
}

export interface PublicWarranty {
  serialNumber: string;
  deviceType: "laptop" | "mobile";
  deviceName: string;
  brand: string;
  purchaseDate: string;
  warrantyMonths: number;
  warrantyEndDate: string;
}

// Reads a single public record by exact serial. The collection holds no customer details.
export async function fetchPublicWarranty(serial: string): Promise<PublicWarranty | null> {
  const key = warrantyKey(serial);
  if (!key) return null;
  const snap = await getDoc(doc(db, "warrantyPublic", key));
  return snap.exists() ? (snap.data() as PublicWarranty) : null;
}

// ── Check by phone ──────────────────────────────────────────────────
// Keep identical to normalisePhone()/phoneKey() in the admin panel (src/lib/warrantyPublic.ts).
export function normalisePhone(phone: string): string {
  return phone.replace(/\D/g, "").slice(-10);
}
async function phoneKey(phone: string): Promise<string> {
  const bytes = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("sollabs-warranty:" + normalisePhone(phone)));
  return [...new Uint8Array(bytes)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export type PhoneWarranty = Omit<PublicWarranty, "serialNumber"> & { serialNumber?: string };

// Reads the devices registered to one phone number. Holds no name, phone or price.
export async function fetchWarrantiesByPhone(phone: string): Promise<PhoneWarranty[]> {
  if (normalisePhone(phone).length !== 10) return [];
  const snap = await getDoc(doc(db, "warrantyByPhone", await phoneKey(phone)));
  return snap.exists() ? ((snap.data().devices ?? []) as PhoneWarranty[]) : [];
}
