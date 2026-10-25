"use client";

import Link from "next/link";

// Shared pieces for the laptop and mobile price calculators.

const WHATSAPP = "919003850743";

export const formatINR = (n: number) => "₹" + n.toLocaleString("en-IN");

export function CalcTabs({ active }: { active: "laptop" | "mobile" }) {
  const tab = (id: "laptop" | "mobile", href: string, label: string) => (
    <Link href={href} aria-current={active === id ? "page" : undefined} className={active === id ? "on" : ""}>{label}</Link>
  );
  return (
    <nav className="pc-tabs" aria-label="Calculator type">
      {tab("laptop", "/laptop-price-calculator", "💻 Laptop")}
      {tab("mobile", "/mobile-price-calculator", "📱 Mobile phone")}
    </nav>
  );
}

export function Step({ children }: { children: React.ReactNode }) {
  return <div className="lp-step">{children}</div>;
}

export function Grid({ children }: { children: React.ReactNode }) {
  return <div className="lp-grid">{children}</div>;
}

export function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="lp-field">
      <span>{label}</span>
      {children}
    </label>
  );
}

export function Select({ value, options, onChange }: { value: string; options: { id: string; label: string }[]; onChange: (id: string) => void }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
    </select>
  );
}

export function MonthsInput({ value, onChange, warranty, warrantyMonths }: { value: string; onChange: (v: string) => void; warranty: boolean; warrantyMonths: number }) {
  return (
    <>
      <input inputMode="numeric" value={value} onChange={(e) => onChange(e.target.value.replace(/\D/g, "").slice(0, 3))} placeholder="e.g. 18" />
      {warranty && <em className="lp-warranty">🛡️ Under {warrantyMonths} months: brand warranty usually still active</em>}
    </>
  );
}

export function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="lp-toggle">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span>{label}</span>
    </label>
  );
}

export type Estimate = { low: number; high: number; shopLow: number; shopHigh: number };

// The form on the left, the price card on the right (below on phones), and a price bar on phones.
// With `extra` and `action` (sell mode), extra fields go under the form and `action` replaces the buttons.
export function CalcLayout({ form, result, warranty, summary, device, extra, action }: {
  form: React.ReactNode;
  result: Estimate;
  warranty: boolean;
  summary: string;
  device: "laptop" | "phone";
  extra?: React.ReactNode;
  action?: React.ReactNode;
}) {
  const range = `${formatINR(result.low)} – ${formatINR(result.high)}`;
  const waText = encodeURIComponent(`Hi Sollabs Tech, I want to sell my ${device}: ${summary}. The calculator says ${formatINR(result.low)}–${formatINR(result.high)}. What's your offer?`);

  return (
    <div className="lp-wrap">
      <div className="lp-form">{form}{extra}</div>

      <aside id="lp-result" className="lp-result" aria-live="polite">
        <div style={{ fontSize: 12.5, fontWeight: 700, color: "#8193AB", letterSpacing: 0.6, textTransform: "uppercase" }}>Estimated value</div>
        <div className="lp-price">{range}</div>
        <div style={{ fontSize: 13.5, color: "#8193AB", marginBottom: 16 }}>Fair price between two people</div>

        {warranty && <div className="lp-badge">🛡️ Still under brand warranty</div>}

        <p style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.6, margin: "14px 0 18px" }}>{summary}</p>

        {action ?? (
          <>
            <Link href={`/sell?type=${device === "phone" ? "mobile" : "laptop"}`} className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "13px", fontSize: 15, background: "linear-gradient(135deg,#16A34A,#22C55E)" }}>
              💰 Sell it to Sollabs Tech
            </Link>
            <a href={`https://wa.me/${WHATSAPP}?text=${waText}`} target="_blank" rel="noopener noreferrer" className="lp-wa">
              💬 Ask our price on WhatsApp
            </a>
          </>
        )}
        <p style={{ fontSize: 11.5, color: "#64748B", lineHeight: 1.5, margin: "14px 0 0" }}>
          This is an estimate from typical Indian second-hand prices. The real price depends on the exact model and how the {device} tests.
        </p>
      </aside>

      <a href="#lp-result" className="lp-mini">
        <span>Estimated value</span>
        <strong>{range}</strong>
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
        .lp-field [aria-invalid="true"] { border-color: #F87171; }
        .lp-field select:disabled { opacity: 0.5; }
        .lp-field select option { background: #0B1526; color: white; }
        .lp-warranty { font-style: normal; font-size: 12.5px; color: #4ADE80; }
        .lp-toggle { display: flex; align-items: center; gap: 10px; font-size: 14px; color: #C4D0E0; cursor: pointer; }
        .lp-toggle input { width: 18px; height: 18px; accent-color: #0066FF; flex-shrink: 0; }
        .lp-result { position: sticky; top: 96px; padding: 24px 22px; border-radius: 22px; background: linear-gradient(160deg, rgba(0,102,255,0.16), rgba(10,22,40,0.92)); border: 1px solid rgba(0,170,255,0.35); }
        .lp-price { font-size: clamp(1.45rem, 3.4vw, 1.75rem); font-weight: 800; color: white; margin: 6px 0 2px; line-height: 1.2; white-space: nowrap; }
        .lp-badge { margin-top: 2px; padding: 8px 12px; border-radius: 10px; font-size: 13px; font-weight: 600; color: #4ADE80; background: rgba(34,197,94,0.08); border: 1px solid rgba(34,197,94,0.3); }
        .lp-wa { display: block; text-align: center; margin-top: 10px; padding: 11px; border-radius: 12px; font-size: 14px; font-weight: 600; color: #4ADE80; border: 1px solid rgba(34,197,94,0.35); text-decoration: none; }
        @media (max-width: 860px) {
          .lp-wrap { grid-template-columns: 1fr; }
          .lp-result { position: static; scroll-margin-top: 90px; }
          .lp-mini { display: flex; justify-content: space-between; align-items: center; gap: 10px; position: fixed; left: 12px; right: 12px; bottom: 12px; z-index: 50; padding: 12px 16px; border-radius: 16px; background: rgba(6,14,28,0.96); border: 1px solid rgba(0,170,255,0.45); box-shadow: 0 16px 40px rgba(0,0,0,0.5); text-decoration: none; backdrop-filter: blur(10px); }
          .lp-mini span { font-size: 12.5px; color: #8193AB; white-space: nowrap; }
          .lp-mini strong { font-size: 17px; color: white; white-space: nowrap; }
        }
        @media (max-width: 520px) {
          .lp-form { padding: 18px 16px; }
          .lp-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}

export function CalcTabsStyles() {
  return (
    <style>{`
      .pc-tabs { display: inline-flex; gap: 4px; padding: 4px; border-radius: 14px; background: rgba(10,22,40,0.8); border: 1px solid rgba(255,255,255,0.08); margin-bottom: 22px; }
      .pc-tabs a { padding: 9px 18px; border-radius: 10px; font-size: 14px; font-weight: 700; color: #8193AB; text-decoration: none; }
      .pc-tabs a.on { color: white; background: linear-gradient(135deg,#0066FF,#00AAFF); }
    `}</style>
  );
}
