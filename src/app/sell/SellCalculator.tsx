"use client";

import { useState } from "react";
import LaptopCalculator from "../laptop-price-calculator/Calculator";
import PhoneCalculator from "../mobile-price-calculator/Calculator";

// The sell form: pick laptop or mobile, fill the price calculator, add your details and send.
export default function SellCalculator({ initial }: { initial: "laptop" | "mobile" }) {
  const [kind, setKind] = useState(initial);
  return (
    <>
      <div style={{ display: "flex", gap: 8, marginBottom: 22 }}>
        {(["laptop", "mobile"] as const).map((k) => (
          <button key={k} type="button" onClick={() => setKind(k)} aria-pressed={kind === k} style={{
            padding: "11px 26px", borderRadius: 100, fontSize: 15, fontWeight: 700, cursor: "pointer",
            background: kind === k ? "linear-gradient(135deg,#16A34A,#22C55E)" : "rgba(255,255,255,0.04)",
            color: kind === k ? "white" : "#8193AB",
            border: kind === k ? "1px solid transparent" : "1px solid rgba(255,255,255,0.1)",
          }}>
            {k === "laptop" ? "💻 Laptop" : "📱 Mobile"}
          </button>
        ))}
      </div>
      {kind === "laptop" ? <LaptopCalculator sell /> : <PhoneCalculator sell />}
    </>
  );
}
