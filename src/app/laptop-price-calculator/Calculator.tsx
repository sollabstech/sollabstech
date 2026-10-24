"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AGES, APPLE_CHIPS, BRANDS, CONDITIONS, DEFAULTS, GENERATIONS, GRAPHICS, PROCESSORS, RAM, STORAGE,
  estimate, formatINR, type Inputs, type Option,
} from "./valuation";

const WHATSAPP = "919003850743";

function Chips({ label, options, value, onChange }: { label: string; options: Option[]; value: string; onChange: (id: string) => void }) {
  return (
    <fieldset className="lp-field">
      <legend>{label}</legend>
      <div className="lp-chips">
        {options.map((o) => (
          <button key={o.id} type="button" aria-pressed={value === o.id} onClick={() => onChange(o.id)} className={value === o.id ? "on" : ""}>
            {o.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function Select({ label, options, value, onChange }: { label: string; options: Option[]; value: string; onChange: (id: string) => void }) {
  return (
    <label className="lp-field">
      <span className="lp-legend">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
      </select>
    </label>
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
  const isMac = v.brand === "apple";
  const r = estimate(v);

  const name = (list: Option[], id: string) => list.find((o) => o.id === id)?.label ?? "";
  const summary = [
    name(BRANDS, v.brand),
    isMac ? name(APPLE_CHIPS, v.chip) : `${name(PROCESSORS, v.processor)} (${name(GENERATIONS, v.generation)})`,
    `${name(RAM, v.ram)} RAM`,
    name(STORAGE, v.storage),
    !isMac && v.graphics !== "none" ? name(GRAPHICS, v.graphics) : "",
    `${name(AGES, v.age)} old`,
    `${name(CONDITIONS, v.condition)} condition`,
  ].filter(Boolean).join(", ");
  const waText = encodeURIComponent(`Hi Sollabs Tech, I want to sell my laptop: ${summary}. The calculator says ${formatINR(r.low)}–${formatINR(r.high)}. What's your offer?`);

  return (
    <div className="lp-wrap">
      <div className="lp-form">
        <Chips label="Brand" options={BRANDS} value={v.brand} onChange={set("brand")} />
        {isMac ? (
          <Chips label="Chip" options={APPLE_CHIPS} value={v.chip} onChange={set("chip")} />
        ) : (
          <>
            <Chips label="Processor" options={PROCESSORS} value={v.processor} onChange={set("processor")} />
            <Select label="Processor generation" options={GENERATIONS} value={v.generation} onChange={set("generation")} />
          </>
        )}
        <Chips label="RAM" options={RAM} value={v.ram} onChange={set("ram")} />
        <Chips label="Storage" options={STORAGE} value={v.storage} onChange={set("storage")} />
        {!isMac && <Chips label="Graphics card" options={GRAPHICS} value={v.graphics} onChange={set("graphics")} />}
        <Chips label="How old is it?" options={AGES} value={v.age} onChange={set("age")} />
        <fieldset className="lp-field">
          <legend>Condition</legend>
          <div className="lp-cond">
            {CONDITIONS.map((c) => (
              <button key={c.id} type="button" aria-pressed={v.condition === c.id} onClick={() => set("condition")(c.id)} className={v.condition === c.id ? "on" : ""}>
                <strong>{c.label}</strong>
                <span>{c.hint}</span>
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset className="lp-field">
          <legend>Anything else?</legend>
          <div style={{ display: "grid", gap: 8 }}>
            <Toggle label="Battery is weak (lasts under 1 hour)" checked={v.batteryWeak} onChange={set("batteryWeak")} />
            <Toggle label="Original charger is missing" checked={v.noCharger} onChange={set("noCharger")} />
            <Toggle label="Has the original bill and box" checked={v.billAndBox} onChange={set("billAndBox")} />
          </div>
        </fieldset>
      </div>

      <aside id="lp-result" className="lp-result" aria-live="polite">
        <div style={{ fontSize: 12.5, fontWeight: 700, color: "#8193AB", letterSpacing: 0.6, textTransform: "uppercase" }}>Estimated value</div>
        <div className="lp-price">{formatINR(r.low)} – {formatINR(r.high)}</div>
        <div style={{ fontSize: 13.5, color: "#8193AB", marginBottom: 16 }}>Fair price between two people</div>

        <div className="lp-shop">
          <span>A shop may offer</span>
          <strong>{formatINR(r.shopLow)} – {formatINR(r.shopHigh)}</strong>
        </div>

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
        .lp-form { display: grid; gap: 20px; padding: 24px; border-radius: 22px; background: rgba(10,22,40,0.75); border: 1px solid rgba(255,255,255,0.08); }
        .lp-field { border: none; padding: 0; margin: 0; min-width: 0; display: block; }
        .lp-field legend, .lp-legend { display: block; font-size: 13px; font-weight: 700; color: #C4D0E0; margin-bottom: 9px; padding: 0; }
        .lp-chips { display: flex; flex-wrap: wrap; gap: 8px; }
        .lp-chips button, .lp-cond button { font-family: inherit; cursor: pointer; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.03); color: #8A9BB8; transition: all .15s; }
        .lp-chips button { padding: 9px 14px; font-size: 13.5px; font-weight: 600; }
        .lp-chips button.on, .lp-cond button.on { background: rgba(0,102,255,0.18); border-color: rgba(0,170,255,0.7); color: white; }
        .lp-cond { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
        .lp-cond button { padding: 11px 13px; text-align: left; display: grid; gap: 2px; }
        .lp-cond strong { font-size: 14px; }
        .lp-cond span { font-size: 12px; color: #64748B; }
        .lp-form select { width: 100%; height: 44px; padding: 0 12px; border-radius: 12px; font-size: 14.5px; color: white; background: rgba(3,7,18,0.6); border: 1px solid rgba(255,255,255,0.12); }
        .lp-toggle { display: flex; align-items: center; gap: 10px; font-size: 14px; color: #C4D0E0; cursor: pointer; }
        .lp-toggle input { width: 18px; height: 18px; accent-color: #0066FF; flex-shrink: 0; }
        .lp-result { position: sticky; top: 96px; padding: 24px 22px; border-radius: 22px; background: linear-gradient(160deg, rgba(0,102,255,0.16), rgba(10,22,40,0.92)); border: 1px solid rgba(0,170,255,0.35); }
        .lp-price { font-size: clamp(1.45rem, 3.4vw, 1.75rem); font-weight: 800; color: white; margin: 6px 0 2px; line-height: 1.2; white-space: nowrap; }
        .lp-shop { display: flex; justify-content: space-between; gap: 10px; flex-wrap: wrap; padding: 12px 14px; border-radius: 12px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); font-size: 13.5px; color: #8193AB; }
        .lp-shop strong { color: #E2E8F0; }
        .lp-wa { display: block; text-align: center; margin-top: 10px; padding: 11px; border-radius: 12px; font-size: 14px; font-weight: 600; color: #4ADE80; border: 1px solid rgba(34,197,94,0.35); text-decoration: none; }
        @media (max-width: 860px) {
          .lp-wrap { grid-template-columns: 1fr; }
          .lp-result { position: static; scroll-margin-top: 90px; }
          .lp-mini { display: flex; justify-content: space-between; align-items: center; gap: 10px; position: fixed; left: 12px; right: 12px; bottom: 12px; z-index: 50; padding: 12px 16px; border-radius: 16px; background: rgba(6,14,28,0.96); border: 1px solid rgba(0,170,255,0.45); box-shadow: 0 16px 40px rgba(0,0,0,0.5); text-decoration: none; backdrop-filter: blur(10px); }
          .lp-mini span { font-size: 12.5px; color: #8193AB; }
          .lp-mini strong { font-size: 17px; color: white; }
        }
        @media (max-width: 480px) {
          .lp-form { padding: 18px 16px; }
          .lp-cond { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
