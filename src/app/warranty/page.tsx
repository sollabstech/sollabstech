import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Warranty Policy – Sollabs Tech",
  description:
    "Sollabs Tech warranty policy — 1 week refund, 1 month exchange, 6 month upgrade, 1 year free service. Full after-sales protection on every laptop and mobile we sell.",
  alternates: { canonical: "/warranty" },
  openGraph: {
    title: "Warranty Policy – Sollabs Tech",
    description:
      "1 week refund · 1 month exchange · 6 month upgrade · 1 year free service. Every product we sell is backed by our full after-sales warranty.",
    url: "https://www.sollabstech.com/warranty",
  },
};

const warrantyTiers = [
  {
    period: "1 Week",
    icon: "↩️",
    title: "Full Refund",
    color: "#22C55E",
    bg: "rgba(34,197,94,0.08)",
    border: "rgba(34,197,94,0.2)",
    description:
      "Not satisfied? Return the product within 7 days of purchase and get a 100% refund of the amount you paid — no questions asked.",
    points: [
      "Product must be in original condition",
      "All accessories & box must be included",
      "Refund processed within 2–3 business days",
    ],
  },
  {
    period: "1 Month",
    icon: "🔄",
    title: "Exchange",
    color: "#00AAFF",
    bg: "rgba(0,170,255,0.08)",
    border: "rgba(0,170,255,0.2)",
    description:
      "Within 1 month, exchange your product for another device. If the same product isn't available, choose a higher model and pay only the difference — or pick a lower model and we'll refund you the balance amount.",
    points: [
      "Upgrade to a higher model — pay only the price difference",
      "Downgrade to a lower model — we refund the balance to you",
      "Exchange within the same category (laptop or mobile)",
    ],
  },
  {
    period: "6 Months",
    icon: "⚡",
    title: "Upgrade Support",
    color: "#A855F7",
    bg: "rgba(168,85,247,0.08)",
    border: "rgba(168,85,247,0.2)",
    description:
      "Want more RAM or a bigger SSD? Within 6 months, upgrade your device's hardware — you pay only 90% of the parts cost. We cover 10% of parts + our service charge is completely free.",
    points: [
      "RAM upgrade — pay only 90% of parts cost",
      "SSD / storage upgrade — pay only 90% of parts cost",
      "Labour & installation charge: completely free",
    ],
  },
  {
    period: "1 Year",
    icon: "🛡️",
    title: "Free Service Warranty",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.2)",
    description:
      "For a full year, any servicing, diagnostics, or general maintenance on your device is completely free of charge at the Sollabs Tech service centre.",
    points: [
      "Free diagnostics & checkup",
      "Free software servicing",
      "Hardware repair — only parts cost applies",
    ],
  },
];

export default function WarrantyPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 60, paddingLeft: 24, paddingRight: 24, textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <span className="section-tag" style={{ marginBottom: 16, display: "inline-flex" }}>🛡️ Warranty Policy</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)", fontWeight: 800, marginBottom: 16 }}>
            After-Sales <span className="gradient-text">Protection</span>
          </h1>
          <p style={{ color: "#6B7A94", fontSize: 17, lineHeight: 1.7 }}>
            Every product sold by Sollabs Tech is backed by our 4-tier warranty. We stand behind what we sell.
          </p>
        </div>
      </section>

      {/* Timeline cards */}
      <section style={{ padding: "0 24px 100px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>

          {/* Timeline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {warrantyTiers.map((tier, i) => (
              <div key={tier.period} style={{ display: "flex", gap: 0 }} className="warranty-row">

                {/* Left: period label */}
                <div style={{ width: 120, flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 32 }}
                  className="warranty-period-col">
                  <div style={{
                    width: 56, height: 56, borderRadius: "50%",
                    background: tier.bg, border: `2px solid ${tier.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24,
                    flexShrink: 0, zIndex: 1,
                  }}>
                    {tier.icon}
                  </div>
                  {i < warrantyTiers.length - 1 && (
                    <div style={{ width: 2, flex: 1, minHeight: 40, background: "rgba(255,255,255,0.05)", marginTop: 8 }} />
                  )}
                </div>

                {/* Right: card */}
                <div style={{ flex: 1, paddingBottom: 28, paddingLeft: 24 }}>
                  <div
                    style={{
                      borderRadius: 18,
                      background: "rgba(10,22,40,0.7)",
                      border: `1px solid ${tier.border}`,
                      padding: "28px 28px",
                      marginTop: 16,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                      <span style={{
                        padding: "4px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700,
                        background: tier.bg, border: `1px solid ${tier.border}`, color: tier.color,
                      }}>
                        {tier.period}
                      </span>
                      <h2 style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)", fontWeight: 800, color: "white", margin: 0 }}>
                        {tier.title}
                      </h2>
                    </div>

                    <p style={{ fontSize: 15, color: "#8A9BB8", lineHeight: 1.7, marginBottom: 18 }}>
                      {tier.description}
                    </p>

                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                      {tier.points.map((pt) => (
                        <li key={pt} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#C4D0E0" }}>
                          <span style={{ color: tier.color, flexShrink: 0, marginTop: 1 }}>✓</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary strip */}
          <div style={{
            marginTop: 48, borderRadius: 18, overflow: "hidden",
            background: "linear-gradient(135deg, rgba(0,102,255,0.12), rgba(0,170,255,0.06))",
            border: "1px solid rgba(0,102,255,0.2)",
          }}>
            <div style={{ padding: "12px 20px", borderBottom: "1px solid rgba(0,102,255,0.15)", background: "rgba(0,102,255,0.08)" }}>
              <p style={{ fontWeight: 700, fontSize: 13, color: "#00AAFF", margin: 0, letterSpacing: 0.5 }}>QUICK SUMMARY</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }} className="summary-grid">
              {warrantyTiers.map((tier, i) => (
                <div key={tier.period} style={{
                  padding: "20px 20px", textAlign: "center",
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
                }}>
                  <div style={{ fontSize: 26, marginBottom: 6 }}>{tier.icon}</div>
                  <div style={{ fontSize: 15, fontWeight: 800, color: tier.color, marginBottom: 4 }}>{tier.period}</div>
                  <div style={{ fontSize: 12, color: "#6B7A94", fontWeight: 600 }}>{tier.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ marginTop: 48, textAlign: "center" }}>
            <p style={{ color: "#6B7A94", marginBottom: 20, fontSize: 15 }}>
              Have a warranty claim or question? Contact us on WhatsApp — we respond within 2 hours.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/919003850743?text=Hi%20Sollabs%20Tech%2C%20I%20have%20a%20warranty%20query."
                target="_blank" rel="noopener noreferrer"
                className="btn-primary"
              >
                💬 WhatsApp Us
              </a>
              <Link href="/products" className="btn-outline">
                Browse Products →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .warranty-row { flex-direction: row; }
        .warranty-period-col { display: flex; }
        @media (max-width: 600px) {
          .warranty-row { flex-direction: column; gap: 0; }
          .warranty-period-col { flex-direction: row; width: 100%; padding-top: 0; padding-bottom: 8px; align-items: center; gap: 12px; }
          .warranty-period-col > div:last-child { display: none; }
        }
        .summary-grid { grid-template-columns: repeat(4,1fr) !important; }
        @media (max-width: 640px) { .summary-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </>
  );
}
