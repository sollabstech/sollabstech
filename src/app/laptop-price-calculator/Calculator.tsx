"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BRANDS, CONDITIONS, DEFAULTS, GPUS, GPU_TYPES, MAKES, PROCESSORS, RAM, STORAGE_TYPES, WARRANTY_MONTHS,
  ageMonths, estimate, find, formatINR, generationsFor, storageSizesFor, underWarranty,
  type GpuType, type Inputs, type Make, type StorageType,
} from "./valuation";

const WHATSAPP = "919003850743";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="lp-field">
      <span>{label}</span>
      {children}
    </label>
  );
}

function Select({ value, options, onChange }: { value: string; options: { id: string; label: string }[]; onChange: (id: string) => void }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
    </select>
  );
}

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="lp-toggle">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span>{label}</span>
    </label>
  );
}

export default function Calculator() {
  const [v, setV] = useState<Inputs>(DEFAULTS);
  const set = <K extends keyof Inputs>(k: K) => (val: Inputs[K]) => setV((x) => ({ ...x, [k]: val }));

  // Each choice resets the dropdowns that depend on it.
  const setBrand = (brand: string) =>
    setV((x) => {
      if (brand === "apple") return { ...x, brand, make: "apple", processor: "m1", generation: "", gpuType: "none", gpu: "" };
      if (x.make === "apple") return { ...x, brand, make: "intel", processor: "i5", generation: "11" };
      return { ...x, brand };
    });
  const setMake = (make: Make) =>
    setV((x) => {
      const processor = make === "apple" ? "m1" : make === "amd" ? "r5" : "i5";
      const gens = generationsFor(make, processor);
      return {
        ...x, make, processor, generation: gens[Math.floor(gens.length / 2)]?.id ?? "",
        brand: make === "apple" ? "apple" : x.brand === "apple" ? "dell" : x.brand,
        ...(make === "apple" ? { gpuType: "none" as GpuType, gpu: "" } : {}),
      };
    });
  const setProcessor = (processor: string) =>
    setV((x) => {
      const gens = generationsFor(x.make, processor);
      const keep = gens.some((g) => g.id === x.generation);
      return { ...x, processor, generation: keep ? x.generation : gens[gens.length - 1]?.id ?? "" };
    });
  const setStorageType = (storageType: StorageType) =>
    setV((x) => {
      const sizes = storageSizesFor(storageType);
      return { ...x, storageType, storageSize: sizes.some((s) => s.id === x.storageSize) ? x.storageSize : sizes[1]?.id ?? sizes[0].id };
    });
  const setGpuType = (gpuType: GpuType) =>
    setV((x) => ({ ...x, gpuType, gpu: gpuType === "none" ? "" : GPUS[gpuType][0].id }));

  const isMac = v.make === "apple";
  const gens = generationsFor(v.make, v.processor);
  const r = estimate(v);
  const warranty = underWarranty(v);
  const months = ageMonths(v);

  const summary = [
    find(BRANDS, v.brand).label,
    [find(PROCESSORS[v.make], v.processor).label, gens.length ? find(gens, v.generation).label : ""].filter(Boolean).join(" "),
    `${find(RAM, v.ram).label} RAM`,
    v.storageType === "hdd"
      ? `${find(storageSizesFor("hdd"), v.storageSize).label} HDD`
      : `${find(storageSizesFor("ssd"), v.storageSize).label} SSD${v.storageType === "both" ? " + HDD" : ""}`,
    !isMac && v.gpuType !== "none" ? find(GPUS[v.gpuType], v.gpu).label : "",
    `${months} month${months === 1 ? "" : "s"} old`,
    `${find(CONDITIONS, v.condition).label.split(" –")[0]} condition`,
  ].filter(Boolean).join(", ");
  const waText = encodeURIComponent(`Hi Sollabs Tech, I want to sell my laptop: ${summary}. The calculator says ${formatINR(r.low)}–${formatINR(r.high)}. What's your offer?`);

  return (
    <div className="lp-wrap">
      <div className="lp-form">
        <div className="lp-step">1 · Laptop & processor</div>
        <div className="lp-grid">
          <Field label="Brand"><Select value={v.brand} options={BRANDS} onChange={setBrand} /></Field>
          <Field label="Processor make"><Select value={v.make} options={MAKES} onChange={(id) => setMake(id as Make)} /></Field>
          <Field label={isMac ? "Chip" : "Processor model"}><Select value={v.processor} options={PROCESSORS[v.make]} onChange={setProcessor} /></Field>
          {gens.length > 0 && <Field label="Generation"><Select value={v.generation} options={gens} onChange={set("generation")} /></Field>}
        </div>

        <div className="lp-step">2 · RAM & storage</div>
        <div className="lp-grid">
          <Field label="RAM"><Select value={v.ram} options={RAM} onChange={set("ram")} /></Field>
          <Field label="Storage type"><Select value={v.storageType} options={STORAGE_TYPES} onChange={(id) => setStorageType(id as StorageType)} /></Field>
          <Field label={v.storageType === "hdd" ? "Hard disk size" : "SSD size"}>
            <Select value={v.storageSize} options={storageSizesFor(v.storageType)} onChange={set("storageSize")} />
          </Field>
        </div>

        {!isMac && (
          <>
            <div className="lp-step">3 · Graphics card</div>
            <div className="lp-grid">
              <Field label="Graphics"><Select value={v.gpuType} options={GPU_TYPES} onChange={(id) => setGpuType(id as GpuType)} /></Field>
              {v.gpuType !== "none" && (
                <Field label="Graphics model"><Select value={v.gpu} options={GPUS[v.gpuType]} onChange={set("gpu")} /></Field>
              )}
            </div>
          </>
        )}

        <div className="lp-step">{isMac ? "3" : "4"} · Age & condition</div>
        <div className="lp-grid">
          <Field label="How many months old?">
            <input inputMode="numeric" value={v.months} onChange={(e) => set("months")(e.target.value.replace(/\D/g, "").slice(0, 3))} placeholder="e.g. 18" />
            {warranty && <em className="lp-warranty">🛡️ Under {WARRANTY_MONTHS} months: brand warranty usually still active</em>}
          </Field>
          <Field label="Condition"><Select value={v.condition} options={CONDITIONS} onChange={set("condition")} /></Field>
        </div>

        <div className="lp-step">Anything else?</div>
        <div style={{ display: "grid", gap: 10 }}>
          <Toggle label="Battery is weak (lasts under 1 hour)" checked={v.batteryWeak} onChange={set("batteryWeak")} />
          <Toggle label="Original charger is missing" checked={v.noCharger} onChange={set("noCharger")} />
          <Toggle label="Has the original bill and box" checked={v.billAndBox} onChange={set("billAndBox")} />
        </div>
      </div>

      <aside id="lp-result" className="lp-result" aria-live="polite">
        <div style={{ fontSize: 12.5, fontWeight: 700, color: "#8193AB", letterSpacing: 0.6, textTransform: "uppercase" }}>Estimated value</div>
        <div className="lp-price">{formatINR(r.low)} – {formatINR(r.high)}</div>
        <div style={{ fontSize: 13.5, color: "#8193AB", marginBottom: 16 }}>Fair price between two people</div>

        <div className="lp-shop">
          <span>A shop may offer</span>
          <strong>{formatINR(r.shopLow)} – {formatINR(r.shopHigh)}</strong>
        </div>
        {warranty && <div className="lp-badge">🛡️ Still under brand warranty</div>}

        <p style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.6, margin: "14px 0 18px" }}>{summary}</p>

        <Link href="/sell" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "13px", fontSize: 15, background: "linear-gradient(135deg,#16A34A,#22C55E)" }}>
          💰 Sell it to Sollabs Tech
        </Link>
        <a href={`https://wa.me/${WHATSAPP}?text=${waText}`} target="_blank" rel="noopener noreferrer" className="lp-wa">
          💬 Ask our price on WhatsApp
        </a>
        <p style={{ fontSize: 11.5, color: "#64748B", lineHeight: 1.5, margin: "14px 0 0" }}>
          This is an estimate from typical Indian second-hand prices. The real price depends on the exact model, display and how the laptop tests.
        </p>
      </aside>

      <a href="#lp-result" className="lp-mini">
        <span>Estimated value</span>
        <strong>{formatINR(r.low)} – {formatINR(r.high)}</strong>
      </a>

      <style>{`
        .lp-mini { display: none; }
        .lp-wrap { display: grid; grid-template-columns: minmax(0, 1fr) 340px; gap: 24px; align-items: start; }
        .lp-form { padding: 24px; border-radius: 22px; background: rgba(10,22,40,0.75); border: 1px solid rgba(255,255,255,0.08); }
        .lp-step { font-size: 12px; font-weight: 800; color: #60A5FA; letter-spacing: 1px; text-transform: uppercase; margin: 24px 0 12px; }
        .lp-step:first-child { margin-top: 0; }
        .lp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .lp-field { display: grid; gap: 7px; min-width: 0; align-content: start; }
        .lp-field > span { font-size: 13px; font-weight: 600; color: #C4D0E0; }
        .lp-field select, .lp-field input { width: 100%; height: 46px; padding: 0 12px; border-radius: 12px; font-size: 15px; color: white; background: rgba(3,7,18,0.6); border: 1px solid rgba(255,255,255,0.12); outline: none; font-family: inherit; box-sizing: border-box; }
        .lp-field select:focus, .lp-field input:focus { border-color: rgba(0,170,255,0.7); }
        .lp-field select option { background: #0B1526; color: white; }
        .lp-warranty { font-style: normal; font-size: 12.5px; color: #4ADE80; }
        .lp-toggle { display: flex; align-items: center; gap: 10px; font-size: 14px; color: #C4D0E0; cursor: pointer; }
        .lp-toggle input { width: 18px; height: 18px; accent-color: #0066FF; flex-shrink: 0; }
        .lp-result { position: sticky; top: 96px; padding: 24px 22px; border-radius: 22px; background: linear-gradient(160deg, rgba(0,102,255,0.16), rgba(10,22,40,0.92)); border: 1px solid rgba(0,170,255,0.35); }
        .lp-price { font-size: clamp(1.45rem, 3.4vw, 1.75rem); font-weight: 800; color: white; margin: 6px 0 2px; line-height: 1.2; white-space: nowrap; }
        .lp-shop { display: flex; justify-content: space-between; gap: 10px; flex-wrap: wrap; padding: 12px 14px; border-radius: 12px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); font-size: 13.5px; color: #8193AB; }
        .lp-shop strong { color: #E2E8F0; }
        .lp-badge { margin-top: 10px; padding: 8px 12px; border-radius: 10px; font-size: 13px; font-weight: 600; color: #4ADE80; background: rgba(34,197,94,0.08); border: 1px solid rgba(34,197,94,0.3); }
        .lp-wa { display: block; text-align: center; margin-top: 10px; padding: 11px; border-radius: 12px; font-size: 14px; font-weight: 600; color: #4ADE80; border: 1px solid rgba(34,197,94,0.35); text-decoration: none; }
        @media (max-width: 860px) {
          .lp-wrap { grid-template-columns: 1fr; }
          .lp-result { position: static; scroll-margin-top: 90px; }
          .lp-mini { display: flex; justify-content: space-between; align-items: center; gap: 10px; position: fixed; left: 12px; right: 12px; bottom: 12px; z-index: 50; padding: 12px 16px; border-radius: 16px; background: rgba(6,14,28,0.96); border: 1px solid rgba(0,170,255,0.45); box-shadow: 0 16px 40px rgba(0,0,0,0.5); text-decoration: none; backdrop-filter: blur(10px); }
          .lp-mini span { font-size: 12.5px; color: #8193AB; }
          .lp-mini strong { font-size: 17px; color: white; }
        }
        @media (max-width: 520px) {
          .lp-form { padding: 18px 16px; }
          .lp-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
