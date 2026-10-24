// Used laptop value model for /laptop-price-calculator.
// Rough Indian second-hand market numbers (₹). Tune any value here; the page updates.
//
// value = (processor base × generation + RAM + storage + graphics) × brand × age × condition
//         − battery/charger deductions, + bill & box and warranty bonuses
// The fair price shown is value ±8%; a shop offer is about 80% of value.

export type Option = { id: string; label: string; value: number };

export const BRANDS: Option[] = [
  { id: "dell", label: "Dell", value: 1 },
  { id: "hp", label: "HP", value: 1 },
  { id: "lenovo", label: "Lenovo", value: 1 },
  { id: "asus", label: "ASUS", value: 0.97 },
  { id: "acer", label: "Acer", value: 0.93 },
  { id: "msi", label: "MSI", value: 0.95 },
  { id: "apple", label: "Apple (MacBook)", value: 1 },
  { id: "samsung", label: "Samsung", value: 0.95 },
  { id: "other", label: "Other", value: 0.85 },
];

export type Make = "intel" | "amd" | "apple";

export const MAKES: { id: Make; label: string }[] = [
  { id: "intel", label: "Intel" },
  { id: "amd", label: "AMD" },
  { id: "apple", label: "Apple" },
];

// Base value of a recent used laptop with this processor (8GB RAM, 256GB SSD, no graphics card),
// before the generation factor. Apple chips have no generation, so their value is final.
export const PROCESSORS: Record<Make, Option[]> = {
  intel: [
    { id: "celeron", label: "Celeron / Pentium", value: 12000 },
    { id: "i3", label: "Core i3", value: 24000 },
    { id: "i5", label: "Core i5", value: 39000 },
    { id: "i7", label: "Core i7", value: 50000 },
    { id: "i9", label: "Core i9", value: 65000 },
    { id: "u5", label: "Core Ultra 5", value: 42000 },
    { id: "u7", label: "Core Ultra 7", value: 54000 },
    { id: "u9", label: "Core Ultra 9", value: 68000 },
  ],
  amd: [
    { id: "athlon", label: "Athlon", value: 12000 },
    { id: "r3", label: "Ryzen 3", value: 24000 },
    { id: "r5", label: "Ryzen 5", value: 39000 },
    { id: "r7", label: "Ryzen 7", value: 50000 },
    { id: "r9", label: "Ryzen 9", value: 65000 },
  ],
  apple: [
    { id: "intel-mac", label: "Intel MacBook (2020 or older)", value: 25000 },
    { id: "m1", label: "M1", value: 50000 },
    { id: "m1p", label: "M1 Pro / Max", value: 70000 },
    { id: "m2", label: "M2", value: 65000 },
    { id: "m2p", label: "M2 Pro / Max", value: 90000 },
    { id: "m3", label: "M3", value: 80000 },
    { id: "m3p", label: "M3 Pro / Max", value: 110000 },
    { id: "m4", label: "M4", value: 95000 },
    { id: "m4p", label: "M4 Pro / Max", value: 130000 },
  ],
};

const INTEL_GENS: Option[] = [
  { id: "6", label: "6th Gen", value: 0.3 },
  { id: "7", label: "7th Gen", value: 0.36 },
  { id: "8", label: "8th Gen", value: 0.45 },
  { id: "9", label: "9th Gen", value: 0.5 },
  { id: "10", label: "10th Gen", value: 0.6 },
  { id: "11", label: "11th Gen", value: 0.72 },
  { id: "12", label: "12th Gen", value: 0.85 },
  { id: "13", label: "13th Gen", value: 0.95 },
  { id: "14", label: "14th Gen", value: 1 },
];
const ULTRA_GENS: Option[] = [
  { id: "s1", label: "Series 1 (Meteor Lake)", value: 1 },
  { id: "s2", label: "Series 2 (Lunar / Arrow Lake)", value: 1.08 },
];
const AMD_GENS: Option[] = [
  { id: "2000", label: "Ryzen 2000 series", value: 0.4 },
  { id: "3000", label: "Ryzen 3000 series", value: 0.45 },
  { id: "4000", label: "Ryzen 4000 series", value: 0.6 },
  { id: "5000", label: "Ryzen 5000 series", value: 0.72 },
  { id: "6000", label: "Ryzen 6000 series", value: 0.85 },
  { id: "7000", label: "Ryzen 7000 series", value: 0.95 },
  { id: "8000", label: "Ryzen 8000 series", value: 1 },
  { id: "ai300", label: "Ryzen AI 300 series", value: 1.1 },
];

export function generationsFor(make: Make, processor: string): Option[] {
  if (make === "apple") return [];
  if (make === "amd") return AMD_GENS;
  return processor.startsWith("u") ? ULTRA_GENS : INTEL_GENS;
}

export const RAM: Option[] = [
  { id: "4", label: "4GB", value: -3000 },
  { id: "8", label: "8GB", value: 0 },
  { id: "12", label: "12GB", value: 1500 },
  { id: "16", label: "16GB", value: 3500 },
  { id: "24", label: "24GB", value: 5500 },
  { id: "32", label: "32GB", value: 8000 },
  { id: "64", label: "64GB", value: 14000 },
];

export type StorageType = "ssd" | "hdd" | "both";

export const STORAGE_TYPES: { id: StorageType; label: string }[] = [
  { id: "ssd", label: "SSD" },
  { id: "hdd", label: "Hard disk (HDD)" },
  { id: "both", label: "SSD + Hard disk" },
];

const SSD_SIZES: Option[] = [
  { id: "128", label: "128GB", value: -1500 },
  { id: "256", label: "256GB", value: 0 },
  { id: "512", label: "512GB", value: 2500 },
  { id: "1tb", label: "1TB", value: 5500 },
  { id: "2tb", label: "2TB", value: 10000 },
];
const HDD_SIZES: Option[] = [
  { id: "500", label: "500GB", value: -3000 },
  { id: "1tb", label: "1TB", value: -2000 },
  { id: "2tb", label: "2TB", value: -1000 },
];
// An extra hard disk next to the SSD adds a little.
export const EXTRA_HDD_BONUS = 1500;

export function storageSizesFor(type: StorageType): Option[] {
  return type === "hdd" ? HDD_SIZES : SSD_SIZES;
}

export type GpuType = "none" | "mx" | "gtx" | "rtx";

export const GPU_TYPES: { id: GpuType; label: string }[] = [
  { id: "none", label: "No graphics card (integrated)" },
  { id: "mx", label: "NVIDIA MX" },
  { id: "gtx", label: "NVIDIA GTX" },
  { id: "rtx", label: "NVIDIA RTX" },
];

export const GPUS: Record<Exclude<GpuType, "none">, Option[]> = {
  mx: [
    { id: "mx", label: "MX 130 / 250 / 350 / 450 / 550", value: 2500 },
  ],
  gtx: [
    { id: "1050", label: "GTX 1050", value: 4000 },
    { id: "1050ti", label: "GTX 1050 Ti", value: 5000 },
    { id: "1060", label: "GTX 1060", value: 7000 },
    { id: "1070", label: "GTX 1070", value: 9000 },
    { id: "1650", label: "GTX 1650", value: 6000 },
    { id: "1660ti", label: "GTX 1660 Ti", value: 9000 },
  ],
  rtx: [
    { id: "2050", label: "RTX 2050", value: 9000 },
    { id: "2060", label: "RTX 2060", value: 13000 },
    { id: "2070", label: "RTX 2070", value: 17000 },
    { id: "2080", label: "RTX 2080", value: 22000 },
    { id: "3050", label: "RTX 3050", value: 12000 },
    { id: "3060", label: "RTX 3060", value: 20000 },
    { id: "3070", label: "RTX 3070", value: 26000 },
    { id: "3080", label: "RTX 3080", value: 34000 },
    { id: "4050", label: "RTX 4050", value: 18000 },
    { id: "4060", label: "RTX 4060", value: 27000 },
    { id: "4070", label: "RTX 4070", value: 36000 },
    { id: "4080", label: "RTX 4080", value: 50000 },
    { id: "4090", label: "RTX 4090", value: 65000 },
    { id: "5050", label: "RTX 5050", value: 24000 },
    { id: "5060", label: "RTX 5060", value: 34000 },
    { id: "5070", label: "RTX 5070", value: 45000 },
    { id: "5080", label: "RTX 5080", value: 62000 },
    { id: "5090", label: "RTX 5090", value: 80000 },
  ],
};

export const CONDITIONS: Option[] = [
  { id: "new", label: "Like new – no marks, everything works", value: 1 },
  { id: "good", label: "Good – light scratches, works fine", value: 0.9 },
  { id: "fair", label: "Fair – visible wear or small issues", value: 0.76 },
  { id: "repair", label: "Needs repair – screen, keyboard or hinge problem", value: 0.55 },
];

// Age: loses about 0.85% a month, never below 60%.
export const MONTHLY_DROP = 0.0085;
export const MIN_AGE_FACTOR = 0.6;
// Laptops younger than this usually still have the brand's 1-year warranty.
export const WARRANTY_MONTHS = 10;
export const WARRANTY_BONUS = 0.05;

export const BATTERY_WEAK_DEDUCTION = 2500;
export const NO_CHARGER_DEDUCTION = 1200;
export const BILL_BOX_BONUS = 0.05;
export const SHOP_OFFER_SHARE = 0.8;
export const RANGE = 0.08;

export type Inputs = {
  brand: string;
  make: Make;
  processor: string;
  generation: string;
  ram: string;
  storageType: StorageType;
  storageSize: string;
  gpuType: GpuType;
  gpu: string;
  months: string;
  condition: string;
  batteryWeak: boolean;
  noCharger: boolean;
  billAndBox: boolean;
};

export const DEFAULTS: Inputs = {
  brand: "dell", make: "intel", processor: "i5", generation: "11", ram: "8",
  storageType: "ssd", storageSize: "512", gpuType: "none", gpu: "",
  months: "24", condition: "good", batteryWeak: false, noCharger: false, billAndBox: false,
};

export const find = (list: Option[], id: string) => list.find((o) => o.id === id) ?? list[0];

export function ageMonths(i: Inputs) {
  const n = Math.floor(Number(i.months));
  return Number.isFinite(n) && n >= 0 ? Math.min(n, 180) : 0;
}

export function underWarranty(i: Inputs) {
  return i.months.trim() !== "" && ageMonths(i) < WARRANTY_MONTHS;
}

const round500 = (n: number) => Math.max(0, Math.round(n / 500) * 500);

export function estimate(i: Inputs) {
  const proc = find(PROCESSORS[i.make], i.processor).value;
  const gens = generationsFor(i.make, i.processor);
  const core = gens.length ? proc * find(gens, i.generation).value : proc;
  const storage = find(storageSizesFor(i.storageType), i.storageSize).value + (i.storageType === "both" ? EXTRA_HDD_BONUS : 0);
  const gpu = i.gpuType === "none" || i.make === "apple" ? 0 : find(GPUS[i.gpuType], i.gpu).value;
  const age = Math.max(MIN_AGE_FACTOR, 1 - MONTHLY_DROP * ageMonths(i));

  let value = (core + find(RAM, i.ram).value + storage + gpu) * find(BRANDS, i.brand).value * age * find(CONDITIONS, i.condition).value;
  if (underWarranty(i)) value *= 1 + WARRANTY_BONUS;
  if (i.batteryWeak) value -= BATTERY_WEAK_DEDUCTION;
  if (i.noCharger) value -= NO_CHARGER_DEDUCTION;
  if (i.billAndBox) value *= 1 + BILL_BOX_BONUS;
  value = Math.max(value, 3000);
  return {
    low: round500(value * (1 - RANGE)),
    high: round500(value * (1 + RANGE)),
    shopLow: round500(value * SHOP_OFFER_SHARE * (1 - RANGE)),
    shopHigh: round500(value * SHOP_OFFER_SHARE * (1 + RANGE)),
  };
}

export const formatINR = (n: number) => "₹" + n.toLocaleString("en-IN");
