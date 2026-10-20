"use client";

import { useState } from "react";

type Kind = "laptop" | "mobile";

const CONDITIONS = ["Like new", "Good", "Fair", "Has issues"];

const field: React.CSSProperties = {
  width: "100%", height: 44, padding: "0 14px", borderRadius: 12, fontSize: 14, color: "white",
  background: "rgba(3,7,18,0.6)", border: "1px solid rgba(255,255,255,0.1)", outline: "none", boxSizing: "border-box",
};
const label: React.CSSProperties = { fontSize: 12, fontWeight: 600, color: "#8193AB", marginBottom: 6, display: "block" };

export default function SellDevice() {
  const [kind, setKind] = useState<Kind>("laptop");
  const [v, setV] = useState({ brand: "", model: "", specs: "", age: "", condition: "Good", accessories: "", price: "", city: "" });
  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setV((x) => ({ ...x, [k]: e.target.value }));
  const ready = v.brand.trim() && v.model.trim();

  function send(e: React.FormEvent) {
    e.preventDefault();
    if (!ready) return;
    const lines = [
      `Hi Sollabs Tech, I want to sell my ${kind}.`,
      `Brand: ${v.brand}`,
      `Model: ${v.model}`,
      v.specs && `${kind === "laptop" ? "Specs (CPU/RAM/SSD)" : "RAM/Storage"}: ${v.specs}`,
      v.age && `Age: ${v.age}`,
      `Condition: ${v.condition}`,
      v.accessories && `Accessories: ${v.accessories}`,
      v.price && `Expected price: ₹${v.price}`,
      v.city && `City: ${v.city}`,
      "I'll send photos here.",
    ].filter(Boolean);
    window.open(`https://wa.me/919003850743?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
  }

  return (
    <section id="sell" style={{ marginTop: 64, padding: "32px 24px", borderRadius: 22, background: "linear-gradient(160deg, rgba(34,197,94,0.1), rgba(10,22,40,0.85))", border: "1px solid rgba(34,197,94,0.25)" }}>
      <div style={{ textAlign: "center", marginBottom: 22 }}>
        <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 1.7rem)", fontWeight: 800, color: "white", margin: "0 0 6px" }}>Sell your laptop or phone</h2>
        <p style={{ fontSize: 14.5, color: "#8193AB", margin: 0 }}>Tell us about your device and get a quote from Sollabs Tech on WhatsApp.</p>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 20 }}>
        {(["laptop", "mobile"] as const).map((k) => (
          <button key={k} type="button" onClick={() => setKind(k)} style={{
            padding: "9px 22px", borderRadius: 100, fontSize: 14, fontWeight: 700, cursor: "pointer",
            background: kind === k ? "linear-gradient(135deg,#16A34A,#22C55E)" : "rgba(255,255,255,0.04)",
            color: kind === k ? "white" : "#8193AB",
            border: kind === k ? "1px solid transparent" : "1px solid rgba(255,255,255,0.1)",
          }}>
            {k === "laptop" ? "💻 Sell Laptop" : "📱 Sell Mobile"}
          </button>
        ))}
      </div>

      <form onSubmit={send} style={{ maxWidth: 720, margin: "0 auto" }}>
        <div className="sell-grid">
          <div><label style={label}>Brand *</label><input required style={field} value={v.brand} onChange={set("brand")} placeholder={kind === "laptop" ? "e.g. Dell, HP, ASUS" : "e.g. Apple, Samsung"} /></div>
          <div><label style={label}>Model *</label><input required style={field} value={v.model} onChange={set("model")} placeholder={kind === "laptop" ? "e.g. Latitude 5420" : "e.g. iPhone 13"} /></div>
          <div><label style={label}>{kind === "laptop" ? "Processor / RAM / SSD" : "RAM / Storage"}</label><input style={field} value={v.specs} onChange={set("specs")} placeholder={kind === "laptop" ? "e.g. i5 11th Gen, 16GB, 512GB" : "e.g. 4GB, 128GB"} /></div>
          <div><label style={label}>How old is it?</label><input style={field} value={v.age} onChange={set("age")} placeholder="e.g. 2 years" /></div>
          <div>
            <label style={label}>Condition</label>
            <select style={field} value={v.condition} onChange={set("condition")}>
              {CONDITIONS.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div><label style={label}>Box, bill, charger?</label><input style={field} value={v.accessories} onChange={set("accessories")} placeholder="e.g. Box and charger" /></div>
          <div><label style={label}>Expected price (₹)</label><input inputMode="numeric" style={field} value={v.price} onChange={set("price")} placeholder="e.g. 30000" /></div>
          <div><label style={label}>Your city</label><input style={field} value={v.city} onChange={set("city")} placeholder="e.g. Madurai" /></div>
        </div>
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <button type="submit" disabled={!ready} className="btn-primary" style={{ fontSize: 15, padding: "13px 30px", opacity: ready ? 1 : 0.6, background: "linear-gradient(135deg,#16A34A,#22C55E)" }}>
            💬 Get a quote on WhatsApp
          </button>
          <p style={{ fontSize: 12, color: "#64748B", marginTop: 10 }}>Opens WhatsApp with your details filled in. Nothing is saved on this website.</p>
        </div>
      </form>
      <style>{`
        .sell-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        @media (max-width: 600px) { .sell-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
