// Used phone value model for /mobile-price-calculator.
// Rough Indian second-hand market numbers (₹). Tune any value here; the page updates.
//
// Known model: value = model price × storage × condition × battery (age is built into the model)
// Other model: value = price when new × age drop × brand × storage × condition × battery
// Then: warranty, what's included, replaced parts and broken biometrics adjust it.
// The fair price shown is value ±8%; a shop offer is about 80% of value.

export type Option = { id: string; label: string; value: number };

// Picking "Other model" (or a brand without a model list) uses the price-when-new tiers below.
export const OTHER_MODEL = "other";

// Model values: a good used phone with the base storage, at its usual age today.
const IPHONES: Option[] = [
  { id: "xr", label: "iPhone XR / XS or older", value: 9000 },
  { id: "se", label: "iPhone SE (2020 / 2022)", value: 9000 },
  { id: "11", label: "iPhone 11", value: 14000 },
  { id: "11p", label: "iPhone 11 Pro / 11 Pro Max", value: 18000 },
  { id: "12", label: "iPhone 12 / 12 mini", value: 19000 },
  { id: "12p", label: "iPhone 12 Pro", value: 25000 },
  { id: "12pm", label: "iPhone 12 Pro Max", value: 28000 },
  { id: "13", label: "iPhone 13 / 13 mini", value: 27000 },
  { id: "13p", label: "iPhone 13 Pro", value: 35000 },
  { id: "13pm", label: "iPhone 13 Pro Max", value: 39000 },
  { id: "14", label: "iPhone 14 / 14 Plus", value: 34000 },
  { id: "14p", label: "iPhone 14 Pro", value: 46000 },
  { id: "14pm", label: "iPhone 14 Pro Max", value: 51000 },
  { id: "15", label: "iPhone 15 / 15 Plus", value: 44000 },
  { id: "15p", label: "iPhone 15 Pro", value: 58000 },
  { id: "15pm", label: "iPhone 15 Pro Max", value: 64000 },
  { id: "16e", label: "iPhone 16e", value: 40000 },
  { id: "16", label: "iPhone 16 / 16 Plus", value: 54000 },
  { id: "16p", label: "iPhone 16 Pro", value: 74000 },
  { id: "16pm", label: "iPhone 16 Pro Max", value: 82000 },
  { id: "17", label: "iPhone 17", value: 66000 },
  { id: "air", label: "iPhone Air", value: 72000 },
  { id: "17p", label: "iPhone 17 Pro", value: 95000 },
  { id: "17pm", label: "iPhone 17 Pro Max", value: 105000 },
];

const SAMSUNG: Option[] = [
  { id: "m", label: "Galaxy M / F series", value: 8000 },
  { id: "a", label: "Galaxy A series (A35, A55…)", value: 14000 },
  { id: "s21", label: "Galaxy S21 / S21 FE", value: 13000 },
  { id: "s21u", label: "Galaxy S21 Ultra", value: 20000 },
  { id: "s22", label: "Galaxy S22 / S22+", value: 16000 },
  { id: "s22u", label: "Galaxy S22 Ultra", value: 28000 },
  { id: "s23fe", label: "Galaxy S23 FE", value: 20000 },
  { id: "s23", label: "Galaxy S23 / S23+", value: 26000 },
  { id: "s23u", label: "Galaxy S23 Ultra", value: 45000 },
  { id: "s24fe", label: "Galaxy S24 FE", value: 30000 },
  { id: "s24", label: "Galaxy S24 / S24+", value: 38000 },
  { id: "s24u", label: "Galaxy S24 Ultra", value: 62000 },
  { id: "s25", label: "Galaxy S25 / S25+", value: 50000 },
  { id: "s25e", label: "Galaxy S25 Edge", value: 55000 },
  { id: "s25u", label: "Galaxy S25 Ultra", value: 80000 },
  { id: "flip5", label: "Galaxy Z Flip 5", value: 30000 },
  { id: "flip6", label: "Galaxy Z Flip 6", value: 42000 },
  { id: "flip7", label: "Galaxy Z Flip 7", value: 55000 },
  { id: "fold5", label: "Galaxy Z Fold 5", value: 55000 },
  { id: "fold6", label: "Galaxy Z Fold 6", value: 75000 },
  { id: "fold7", label: "Galaxy Z Fold 7", value: 100000 },
];

const ONEPLUS: Option[] = [
  { id: "nord", label: "OnePlus Nord series", value: 12000 },
  { id: "9", label: "OnePlus 9 / 9R", value: 12000 },
  { id: "9p", label: "OnePlus 9 Pro", value: 16000 },
  { id: "10p", label: "OnePlus 10 Pro / 10R / 10T", value: 18000 },
  { id: "11", label: "OnePlus 11 / 11R", value: 25000 },
  { id: "12r", label: "OnePlus 12R", value: 26000 },
  { id: "12", label: "OnePlus 12", value: 36000 },
  { id: "13r", label: "OnePlus 13R", value: 32000 },
  { id: "13", label: "OnePlus 13", value: 50000 },
];

const PIXEL: Option[] = [
  { id: "6", label: "Pixel 6 / 6a", value: 10000 },
  { id: "6p", label: "Pixel 6 Pro", value: 14000 },
  { id: "7", label: "Pixel 7 / 7a", value: 15000 },
  { id: "7p", label: "Pixel 7 Pro", value: 22000 },
  { id: "8", label: "Pixel 8 / 8a", value: 25000 },
  { id: "8p", label: "Pixel 8 Pro", value: 35000 },
  { id: "9", label: "Pixel 9 / 9a", value: 40000 },
  { id: "9p", label: "Pixel 9 Pro / 9 Pro XL", value: 58000 },
  { id: "10", label: "Pixel 10", value: 55000 },
  { id: "10p", label: "Pixel 10 Pro / Pro XL", value: 75000 },
];

const ROG: Option[] = [
  { id: "5", label: "ROG Phone 5 / 5s / 5s Pro", value: 22000 },
  { id: "6", label: "ROG Phone 6 / 6 Pro", value: 28000 },
  { id: "7", label: "ROG Phone 7 / 7 Ultimate", value: 35000 },
  { id: "8", label: "ROG Phone 8 / 8 Pro", value: 50000 },
  { id: "9", label: "ROG Phone 9 / 9 Pro", value: 65000 },
];

const other: Option = { id: OTHER_MODEL, label: "Other model (choose by price when new)", value: 0 };

// value = brand factor, used only for "Other model" pricing.
export const BRANDS: (Option & { models: Option[] })[] = [
  { id: "apple", label: "Apple (iPhone)", value: 1.15, models: [...IPHONES, other] },
  { id: "samsung", label: "Samsung", value: 0.95, models: [...SAMSUNG, other] },
  { id: "oneplus", label: "OnePlus", value: 0.95, models: [...ONEPLUS, other] },
  { id: "google", label: "Google Pixel", value: 0.95, models: [...PIXEL, other] },
  { id: "rog", label: "ASUS ROG", value: 0.95, models: [...ROG, other] },
  { id: "xiaomi", label: "Xiaomi / Redmi / Poco", value: 0.88, models: [other] },
  { id: "vivo", label: "Vivo / iQOO", value: 0.88, models: [other] },
  { id: "oppo", label: "Oppo / Realme", value: 0.86, models: [other] },
  { id: "motorola", label: "Motorola", value: 0.85, models: [other] },
  { id: "nothing", label: "Nothing / CMF", value: 0.92, models: [other] },
  { id: "other", label: "Other brand", value: 0.8, models: [other] },
];

// Price when new, for phones without a model in the list.
export const NEW_PRICE_TIERS: Option[] = [
  { id: "t1", label: "Under ₹15,000", value: 12000 },
  { id: "t2", label: "₹15,000 – ₹25,000", value: 20000 },
  { id: "t3", label: "₹25,000 – ₹40,000", value: 32000 },
  { id: "t4", label: "₹40,000 – ₹60,000", value: 50000 },
  { id: "t5", label: "₹60,000 – ₹90,000", value: 75000 },
  { id: "t6", label: "Above ₹90,000", value: 110000 },
];
// "Other model" phones keep 72% of their new price on day one, then lose 1.4% a month (never below 18%).
export const OTHER_START = 0.72;
export const OTHER_MONTHLY_DROP = 0.014;
export const OTHER_MIN = 0.18;

// Multipliers on the base-storage price.
export const STORAGE: Option[] = [
  { id: "64", label: "64GB", value: 0.9 },
  { id: "128", label: "128GB", value: 1 },
  { id: "256", label: "256GB", value: 1.1 },
  { id: "512", label: "512GB", value: 1.2 },
  { id: "1tb", label: "1TB", value: 1.32 },
];

export const CONDITIONS: Option[] = [
  { id: "new", label: "Like new – no scratches", value: 1 },
  { id: "good", label: "Good – light scratches", value: 0.9 },
  { id: "fair", label: "Fair – visible scratches or dents", value: 0.78 },
  { id: "cracked", label: "Cracked screen or back glass", value: 0.6 },
  { id: "faulty", label: "Not working properly", value: 0.4 },
];

export const BATTERY: Option[] = [
  { id: "90", label: "90% or more / lasts a full day", value: 1 },
  { id: "85", label: "85–89%", value: 0.97 },
  { id: "80", label: "80–84%", value: 0.93 },
  { id: "low", label: "Below 80% / drains fast", value: 0.88 },
];

// What comes with the phone (multiplier).
export const KITS: Option[] = [
  { id: "only", label: "Only phone", value: 0.97 },
  { id: "charger", label: "Phone + charger / cable", value: 1 },
  { id: "box", label: "Phone + box", value: 1.02 },
  { id: "full", label: "Full kit (box, bill, charger)", value: 1.05 },
  { id: "all", label: "Everything (full kit + case, extras)", value: 1.06 },
];

export const WARRANTY_MONTHS = 10;
export const WARRANTY_BONUS = 0.05;
export const PART_REPLACED = 0.9; // screen or battery not original
export const BIOMETRIC_BROKEN = 0.8; // Face ID / fingerprint not working
export const SHOP_OFFER_SHARE = 0.8;
export const RANGE = 0.08;

export type Inputs = {
  brand: string;
  model: string;
  tier: string;
  storage: string;
  months: string;
  condition: string;
  battery: string;
  kit: string;
  partReplaced: boolean;
  biometricBroken: boolean;
};

export const DEFAULTS: Inputs = {
  brand: "apple", model: "13", tier: "t3", storage: "128", months: "24",
  condition: "good", battery: "85", kit: "charger", partReplaced: false, biometricBroken: false,
};

export const find = (list: Option[], id: string) => list.find((o) => o.id === id) ?? list[0];
export const brandOf = (id: string) => BRANDS.find((b) => b.id === id) ?? BRANDS[0];

export function ageMonths(i: Inputs) {
  const n = Math.floor(Number(i.months));
  return Number.isFinite(n) && n >= 0 ? Math.min(n, 180) : 0;
}

export function underWarranty(i: Inputs) {
  return i.months.trim() !== "" && ageMonths(i) < WARRANTY_MONTHS;
}

const round500 = (n: number) => Math.max(0, Math.round(n / 500) * 500);

export function estimate(i: Inputs) {
  const brand = brandOf(i.brand);
  const model = find(brand.models, i.model);
  const base = model.id === OTHER_MODEL
    ? find(NEW_PRICE_TIERS, i.tier).value * Math.max(OTHER_MIN, OTHER_START - OTHER_MONTHLY_DROP * ageMonths(i)) * brand.value
    : model.value;

  let value = base * find(STORAGE, i.storage).value * find(CONDITIONS, i.condition).value * find(BATTERY, i.battery).value;
  if (underWarranty(i)) value *= 1 + WARRANTY_BONUS;
  value *= find(KITS, i.kit).value;
  if (i.partReplaced) value *= PART_REPLACED;
  if (i.biometricBroken) value *= BIOMETRIC_BROKEN;
  value = Math.max(value, 1500);
  return {
    low: round500(value * (1 - RANGE)),
    high: round500(value * (1 + RANGE)),
    shopLow: round500(value * SHOP_OFFER_SHARE * (1 - RANGE)),
    shopHigh: round500(value * SHOP_OFFER_SHARE * (1 + RANGE)),
  };
}
