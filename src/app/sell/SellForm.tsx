"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

type Kind = "laptop" | "mobile";

const CONDITIONS = ["Like new", "Good", "Fair", "Has issues"];
const WHATSAPP = "919003850743";

const field: React.CSSProperties = {
  width: "100%", height: 46, padding: "0 14px", borderRadius: 12, fontSize: 15, color: "white",
  background: "rgba(3,7,18,0.6)", border: "1px solid rgba(255,255,255,0.1)", outline: "none", boxSizing: "border-box",
};
const label: React.CSSProperties = { fontSize: 12.5, fontWeight: 600, color: "#8193AB", marginBottom: 6, display: "block" };

const empty = { name: "", phone: "", brand: "", model: "", specs: "", age: "", condition: "Good", accessories: "", price: "", city: "" };

export default function SellForm() {
  const [kind, setKind] = useState<Kind>("laptop");
  const [v, setV] = useState(empty);
  const [state, setState] = useState<"idle" | "saving" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setV((x) => ({ ...x, [k]: e.target.value }));

  const phoneDigits = v.phone.replace(/\D/g, "").replace(/^91(?=\d{10}$)/, "");
  const phoneOk = /^[6-9]\d{9}$/.test(phoneDigits);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!v.name.trim() || !v.brand.trim() || !v.model.trim()) { setError("Please fill in your name, brand and model."); return; }
    if (!phoneOk) { setError("Please enter a valid 10-digit mobile number."); return; }
    setError("");
    setState("saving");
    try {
      await addDoc(collection(db, "sellRequests"), {
        deviceType: kind,
        name: v.name.trim().slice(0, 100),
        phone: phoneDigits,
        brand: v.brand.trim().slice(0, 80),
        model: v.model.trim().slice(0, 120),
        specs: v.specs.trim().slice(0, 200),
        age: v.age.trim().slice(0, 50),
        condition: v.condition,
        accessories: v.accessories.trim().slice(0, 200),
        expectedPrice: v.price.replace(/\D/g, "").slice(0, 9),
        city: v.city.trim().slice(0, 80),
        status: "new",
        createdAt: serverTimestamp(),
      });
      setState("done");
    } catch {
      setState("error");
    }
  }

  const waText = encodeURIComponent(
    `Hi Sollabs Tech, I just sent a request to sell my ${kind} (${v.brand} ${v.model}). Here are the photos:`
  );

  if (state === "done") {
    return (
      <div style={{ textAlign: "center", padding: "40px 20px", borderRadius: 22, background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.3)" }}>
        <div style={{ fontSize: 44, marginBottom: 10 }}>✅</div>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "white", margin: "0 0 8px" }}>Request received!</h2>
        <p style={{ color: "#94A3B8", fontSize: 15, lineHeight: 1.7, margin: "0 0 22px" }}>
          Thanks {v.name.split(" ")[0]}. We&apos;ll call or WhatsApp you on <strong style={{ color: "white" }}>{phoneDigits}</strong>{" "}with a quote.
          Sending a few photos now gets you a faster, more accurate price.
        </p>
        <a href={`https://wa.me/${WHATSAPP}?text=${waText}`} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 15, padding: "13px 28px", background: "linear-gradient(135deg,#16A34A,#22C55E)" }}>
          📷 Send photos on WhatsApp
        </a>
        <div style={{ marginTop: 16 }}>
          <button type="button" onClick={() => { setV(empty); setState("idle"); }} style={{ background: "none", border: "none", color: "#00AAFF", cursor: "pointer", fontSize: 14, fontWeight: 600 }}>
            Sell another device
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "28px 22px", borderRadius: 22, background: "linear-gradient(160deg, rgba(34,197,94,0.08), rgba(10,22,40,0.85))", border: "1px solid rgba(34,197,94,0.25)" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 22 }}>
        {(["laptop", "mobile"] as const).map((k) => (
          <button key={k} type="button" onClick={() => setKind(k)} aria-pressed={kind === k} style={{
            padding: "10px 24px", borderRadius: 100, fontSize: 14.5, fontWeight: 700, cursor: "pointer",
            background: kind === k ? "linear-gradient(135deg,#16A34A,#22C55E)" : "rgba(255,255,255,0.04)",
            color: kind === k ? "white" : "#8193AB",
            border: kind === k ? "1px solid transparent" : "1px solid rgba(255,255,255,0.1)",
          }}>
            {k === "laptop" ? "💻 Laptop" : "📱 Mobile"}
          </button>
        ))}
      </div>

      <form onSubmit={submit} noValidate>
        <div className="sell-grid">
          <div><label style={label}>Your name *</label><input style={field} value={v.name} onChange={set("name")} placeholder="e.g. Karthik" autoComplete="name" /></div>
          <div><label style={label}>Mobile number *</label><input type="tel" style={field} value={v.phone} onChange={set("phone")} placeholder="e.g. 98765 43210" autoComplete="tel" /></div>
          <div><label style={label}>Brand *</label><input style={field} value={v.brand} onChange={set("brand")} placeholder={kind === "laptop" ? "e.g. Dell, HP, ASUS" : "e.g. Apple, Samsung"} /></div>
          <div><label style={label}>Model *</label><input style={field} value={v.model} onChange={set("model")} placeholder={kind === "laptop" ? "e.g. Latitude 5420" : "e.g. iPhone 13"} /></div>
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

        {error && <p style={{ color: "#F87171", fontSize: 14, textAlign: "center", margin: "16px 0 0" }}>{error}</p>}
        {state === "error" && <p style={{ color: "#F87171", fontSize: 14, textAlign: "center", margin: "16px 0 0" }}>Couldn&apos;t send your request. Please try again, or WhatsApp us on +91 90038 50743.</p>}

        <div style={{ textAlign: "center", marginTop: 22 }}>
          <button type="submit" disabled={state === "saving"} className="btn-primary" style={{ fontSize: 15.5, padding: "14px 34px", opacity: state === "saving" ? 0.6 : 1, background: "linear-gradient(135deg,#16A34A,#22C55E)" }}>
            {state === "saving" ? "Sending…" : "Get my quote →"}
          </button>
          <p style={{ fontSize: 12.5, color: "#64748B", marginTop: 10 }}>Free, no obligation. We usually reply the same day.</p>
        </div>
      </form>
      <style>{`
        .sell-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        @media (max-width: 600px) { .sell-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
