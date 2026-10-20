import type { Metadata } from "next";
import Link from "next/link";
import SellForm from "./SellForm";

export const metadata: Metadata = {
  title: "Sell Your Laptop or Phone in Madurai | Sollabs Tech",
  description: "Sell your used laptop or mobile to Sollabs Tech, Madurai. Fill in a few details and get a free quote by call or WhatsApp, usually the same day.",
  alternates: { canonical: "/sell" },
  openGraph: {
    title: "Sell Your Laptop or Phone in Madurai | Sollabs Tech",
    description: "Get a free quote for your used laptop or phone from Sollabs Tech, Madurai.",
    url: "https://www.sollabstech.com/sell",
  },
};

const steps = [
  { icon: "📝", title: "Tell us about it", text: "Brand, model, condition and your expected price." },
  { icon: "📞", title: "Get a quote", text: "We call or WhatsApp you, usually the same day." },
  { icon: "🤝", title: "Get paid", text: "Agree on the price and hand over your device." },
];

export default function SellPage() {
  return (
    <section style={{ padding: "110px 20px 90px" }}>
      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "#475569", marginBottom: 20, display: "flex", gap: 6 }}>
          <Link href="/" style={{ color: "#475569", textDecoration: "none" }}>Home</Link><span>›</span>
          <Link href="/products" style={{ color: "#475569", textDecoration: "none" }}>Products</Link><span>›</span>
          <span style={{ color: "#94A3B8" }}>Sell your device</span>
        </nav>
        <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, color: "white", lineHeight: 1.2, margin: "0 0 10px" }}>
          Sell your laptop or phone
        </h1>
        <p style={{ fontSize: 16, color: "#94A3B8", lineHeight: 1.7, margin: "0 0 26px" }}>
          Got a laptop or mobile you no longer need? Tell us about it and Sollabs Tech, Madurai will send you a free quote.
        </p>

        <div className="sell-steps" style={{ marginBottom: 26 }}>
          {steps.map((s, i) => (
            <div key={s.title} style={{ padding: "14px 16px", borderRadius: 14, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ fontSize: 22 }}>{s.icon}</div>
              <div style={{ fontSize: 14.5, fontWeight: 700, color: "white", margin: "6px 0 3px" }}>{i + 1}. {s.title}</div>
              <div style={{ fontSize: 13, color: "#8193AB", lineHeight: 1.6 }}>{s.text}</div>
            </div>
          ))}
        </div>

        <SellForm />
      </div>
      <style>{`
        .sell-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        @media (max-width: 640px) { .sell-steps { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
