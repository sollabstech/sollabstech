"use client";

import { useState } from "react";
import { fetchPublicWarranty, type PublicWarranty } from "@/lib/warranty";

type State =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "not-found"; serial: string }
  | { kind: "error" }
  | { kind: "found"; record: PublicWarranty; checkedAt: number };

const DAY = 86400000;

function addMonths(iso: string, months: number) {
  const d = new Date(iso);
  d.setMonth(d.getMonth() + months);
  return d;
}

function fmt(d: Date | string) {
  return new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

function Result({ record, now }: { record: PublicWarranty; now: number }) {
  const start = new Date(record.purchaseDate).getTime();
  const end = new Date(record.warrantyEndDate).getTime();
  const daysLeft = Math.ceil((end - now) / DAY);
  const active = daysLeft >= 0;
  const used = Math.min(100, Math.max(0, ((now - start) / (end - start)) * 100));
  const color = !active ? "#F87171" : daysLeft <= 30 ? "#FBBF24" : "#4ADE80";

  const benefits = [
    { label: "7-day full refund", until: new Date(start + 7 * DAY) },
    { label: "1-month exchange", until: addMonths(record.purchaseDate, 1) },
    { label: "6-month upgrade offer (90% of parts)", until: addMonths(record.purchaseDate, 6) },
    { label: "1-year free service", until: addMonths(record.purchaseDate, 12) },
  ];

  const whatsapp = `https://wa.me/919003850743?text=${encodeURIComponent(`Hi Sollabs Tech, I need help with my warranty. Serial: ${record.serialNumber}`)}`;

  return (
    <div style={{ marginTop: 20, borderRadius: 18, overflow: "hidden", border: `1px solid ${color}55`, background: "rgba(10,22,40,0.85)", animation: "fadeInUp 0.4s ease both", textAlign: "left" }}>
      <div style={{ padding: "18px 22px", background: `${color}14`, borderBottom: `1px solid ${color}33`, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 28 }}>{record.deviceType === "mobile" ? "📱" : "💻"}</span>
          <div>
            <div style={{ fontSize: 16, fontWeight: 800, color: "white" }}>{record.deviceName}</div>
            <div style={{ fontSize: 12.5, color: "#8193AB" }}>{record.brand ? `${record.brand} · ` : ""}Serial {record.serialNumber}</div>
          </div>
        </div>
        <span style={{ padding: "6px 14px", borderRadius: 100, fontSize: 13, fontWeight: 800, color, background: `${color}1f`, border: `1px solid ${color}55` }}>
          {active ? `Active · ${daysLeft} day${daysLeft === 1 ? "" : "s"} left` : "Expired"}
        </span>
      </div>

      <div style={{ padding: "18px 22px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 16 }} className="wc-grid">
          {[
            ["Purchased", fmt(record.purchaseDate)],
            ["Warranty", `${record.warrantyMonths} months`],
            [active ? "Valid until" : "Ended on", fmt(record.warrantyEndDate)],
          ].map(([k, v]) => (
            <div key={k} style={{ padding: "10px 12px", borderRadius: 10, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontSize: 11, color: "#64748B", marginBottom: 3 }}>{k}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#E2E8F0" }}>{v}</div>
            </div>
          ))}
        </div>

        <div style={{ height: 6, borderRadius: 100, background: "rgba(255,255,255,0.06)", overflow: "hidden", marginBottom: 20 }} aria-hidden>
          <div style={{ width: `${used}%`, height: "100%", background: color, borderRadius: 100 }} />
        </div>

        <div style={{ fontSize: 12, fontWeight: 700, color: "#94A3B8", letterSpacing: 0.4, marginBottom: 8 }}>AFTER-SALES BENEFITS</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 18 }}>
          {benefits.map((b) => {
            const open = b.until.getTime() >= now;
            return (
              <div key={b.label} style={{ display: "flex", justifyContent: "space-between", gap: 10, fontSize: 13.5, padding: "8px 12px", borderRadius: 8, background: open ? "rgba(74,222,128,0.06)" : "rgba(255,255,255,0.02)" }}>
                <span style={{ color: open ? "#E2E8F0" : "#475569" }}>{open ? "✅" : "⏹️"} {b.label}</span>
                <span style={{ color: open ? "#4ADE80" : "#475569", whiteSpace: "nowrap" }}>{open ? `until ${fmt(b.until)}` : "ended"}</span>
              </div>
            );
          })}
        </div>

        <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 14, padding: "11px 22px" }}>
          💬 Claim or ask on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function WarrantyChecker() {
  const [serial, setSerial] = useState("");
  const [state, setState] = useState<State>({ kind: "idle" });

  async function check(e: React.FormEvent) {
    e.preventDefault();
    const s = serial.trim();
    if (!s) return;
    setState({ kind: "loading" });
    try {
      const record = await fetchPublicWarranty(s);
      setState(record ? { kind: "found", record, checkedAt: Date.now() } : { kind: "not-found", serial: s });
    } catch {
      setState({ kind: "error" });
    }
  }

  return (
    <section id="check" style={{ padding: "0 24px 64px" }}>
      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
        <div style={{ padding: "28px 24px", borderRadius: 22, background: "linear-gradient(160deg, rgba(0,102,255,0.12), rgba(10,22,40,0.8))", border: "1px solid rgba(0,102,255,0.3)" }}>
          <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 1.7rem)", fontWeight: 800, color: "white", margin: "0 0 6px" }}>Check your warranty</h2>
          <p style={{ fontSize: 14, color: "#8193AB", margin: "0 0 18px" }}>
            Enter the serial number on your Sollabs Tech warranty sticker.
          </p>
          <form onSubmit={check} style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <input
              value={serial}
              onChange={(e) => setSerial(e.target.value)}
              placeholder="e.g. 197979"
              aria-label="Serial number"
              autoComplete="off"
              style={{ flex: "1 1 220px", minWidth: 0, height: 48, padding: "0 16px", borderRadius: 12, fontSize: 16, fontFamily: "monospace", color: "white", background: "rgba(3,7,18,0.6)", border: "1px solid rgba(255,255,255,0.12)", outline: "none" }}
            />
            <button type="submit" className="btn-primary" disabled={state.kind === "loading" || !serial.trim()}
              style={{ height: 48, padding: "0 26px", justifyContent: "center", flex: "0 0 auto", opacity: state.kind === "loading" || !serial.trim() ? 0.6 : 1 }}>
              {state.kind === "loading" ? "Checking…" : "Check →"}
            </button>
          </form>

          {state.kind === "not-found" && (
            <div style={{ marginTop: 16, padding: "14px 16px", borderRadius: 12, fontSize: 14, lineHeight: 1.6, color: "#FBBF24", background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.25)" }}>
              No warranty found for <strong style={{ fontFamily: "monospace" }}>{state.serial}</strong>. Check the number on your sticker, or{" "}
              <a href={`https://wa.me/919003850743?text=${encodeURIComponent(`Hi Sollabs Tech, my warranty serial ${state.serial} isn't found online.`)}`} target="_blank" rel="noopener noreferrer" style={{ color: "#00AAFF" }}>
                message us on WhatsApp
              </a>.
            </div>
          )}
          {state.kind === "error" && (
            <div style={{ marginTop: 16, fontSize: 14, color: "#F87171" }}>Couldn&apos;t check right now. Please try again in a moment.</div>
          )}
          {state.kind === "found" && <Result record={state.record} now={state.checkedAt} />}
        </div>
      </div>
      <style>{`@media (max-width: 520px) { .wc-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
