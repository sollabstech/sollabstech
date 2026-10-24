// Used laptop value model for /laptop-price-calculator.
// Rough Indian second-hand market numbers (₹). Tune any value here; the page updates.
//
// value = (processor base × generation + RAM + storage + graphics) × brand × age × condition
//         − battery/charger deductions, + bill & box bonus
// The fair price shown is value ±8%; a shop offer is about 80% of value.

export type Option = { id: string; label: string };
export type Valued = Option & { value: number };

export const BRANDS: Valued[] = [
  { id: "dell", label: "Dell", value: 1 },
  { id: "hp", label: "HP", value: 1 },
  { id: "lenovo", label: "Lenovo", value: 1 },
  { id: "asus", label: "ASUS", value: 0.97 },
  { id: "acer", label: "Acer", value: 0.93 },
  { id: "msi", label: "MSI", value: 0.95 },
  { id: "apple", label: "Apple MacBook", value: 1 },
  { id: "other", label: "Other", value: 0.85 },
];

// Base value of a recent, good used laptop with this processor (8GB RAM, 256GB SSD, no GPU).
export const PROCESSORS: Valued[] = [
  { id: "entry", label: "Celeron / Pentium / Athlon", value: 12000 },
  { id: "i3", label: "Intel i3 / Ryzen 3", value: 24000 },
  { id: "i5", label: "Intel i5 / Ryzen 5", value: 39000 },
  { id: "i7", label: "Intel i7 / Ryzen 7", value: 50000 },
  { id: "i9", label: "Intel i9 / Ryzen 9", value: 65000 },
];

// Apple chips replace processor + generation. Value includes the base 8GB / 256GB.
export const APPLE_CHIPS: Valued[] = [
  { id: "intel-mac", label: "Intel MacBook (2020 or older)", value: 25000 },
  { id: "m1", label: "M1", value: 50000 },
  { id: "m2", label: "M2", value: 65000 },
  { id: "m3", label: "M3", value: 80000 },
  { id: "m4", label: "M4", value: 95000 },
];

export const GENERATIONS: Valued[] = [
  { id: "g8", label: "Intel 8th Gen or older / Ryzen 3000", value: 0.45 },
  { id: "g10", label: "Intel 10th Gen / Ryzen 4000", value: 0.6 },
  { id: "g11", label: "Intel 11th Gen / Ryzen 5000", value: 0.72 },
  { id: "g12", label: "Intel 12th Gen / Ryzen 6000", value: 0.85 },
  { id: "g13", label: "Intel 13th Gen / Ryzen 7000", value: 0.95 },
  { id: "g14", label: "Intel 14th Gen, Core Ultra / Ryzen 8000+", value: 1.05 },
];

export const RAM: Valued[] = [
  { id: "4", label: "4GB", value: -3000 },
  { id: "8", label: "8GB", value: 0 },
  { id: "16", label: "16GB", value: 3500 },
  { id: "32", label: "32GB", value: 8000 },
  { id: "64", label: "64GB", value: 14000 },
];

export const STORAGE: Valued[] = [
  { id: "hdd", label: "Hard disk (HDD)", value: -2500 },
  { id: "128", label: "128GB SSD", value: -1500 },
  { id: "256", label: "256GB SSD", value: 0 },
  { id: "512", label: "512GB SSD", value: 2500 },
  { id: "1tb", label: "1TB SSD", value: 5500 },
  { id: "2tb", label: "2TB SSD", value: 10000 },
];

export const GRAPHICS: Valued[] = [
  { id: "none", label: "No graphics card", value: 0 },
  { id: "entry", label: "MX / GTX 1650", value: 6000 },
  { id: "rtx50", label: "RTX 2050 / 3050", value: 12000 },
  { id: "rtx60", label: "RTX 3060 / 4050", value: 20000 },
  { id: "rtx4060", label: "RTX 4060 / 3070", value: 28000 },
  { id: "rtx70", label: "RTX 4070 or higher", value: 40000 },
];

export const AGES: Valued[] = [
  { id: "0", label: "Under 1 year", value: 1 },
  { id: "1", label: "1–2 years", value: 0.9 },
  { id: "2", label: "2–3 years", value: 0.8 },
  { id: "3", label: "3–4 years", value: 0.72 },
  { id: "4", label: "4+ years", value: 0.64 },
];

export const CONDITIONS: (Valued & { hint: string })[] = [
  { id: "new", label: "Like new", hint: "No marks, everything works", value: 1 },
  { id: "good", label: "Good", hint: "Light scratches, works fine", value: 0.9 },
  { id: "fair", label: "Fair", hint: "Visible wear or small issues", value: 0.76 },
  { id: "repair", label: "Needs repair", hint: "Screen, keyboard or hinge problem", value: 0.55 },
];

export const BATTERY_WEAK_DEDUCTION = 2500;
export const NO_CHARGER_DEDUCTION = 1200;
export const BILL_BOX_BONUS = 0.05;
export const SHOP_OFFER_SHARE = 0.8;
export const RANGE = 0.08;

export type Inputs = {
  brand: string;
  processor: string;
  chip: string;
  generation: string;
  ram: string;
  storage: string;
  graphics: string;
  age: string;
  condition: string;
  batteryWeak: boolean;
  noCharger: boolean;
  billAndBox: boolean;
};

export const DEFAULTS: Inputs = {
  brand: "dell", processor: "i5", chip: "m1", generation: "g11", ram: "8", storage: "512", graphics: "none",
  age: "2", condition: "good", batteryWeak: false, noCharger: false, billAndBox: false,
};

const pick = (list: Valued[], id: string) => (list.find((o) => o.id === id) ?? list[0]).value;
const round500 = (n: number) => Math.max(0, Math.round(n / 500) * 500);

export function estimate(i: Inputs) {
  const isMac = i.brand === "apple";
  const core = isMac ? pick(APPLE_CHIPS, i.chip) : pick(PROCESSORS, i.processor) * pick(GENERATIONS, i.generation);
  const specs = core + pick(RAM, i.ram) + pick(STORAGE, i.storage) + (isMac ? 0 : pick(GRAPHICS, i.graphics));
  let value = specs * pick(BRANDS, i.brand) * pick(AGES, i.age) * pick(CONDITIONS, i.condition);
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
