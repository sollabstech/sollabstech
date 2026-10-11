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
