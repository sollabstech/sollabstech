import type { Metadata } from "next";
import Link from "next/link";
import PhoneCalculator from "./Calculator";
import { CalcTabs, CalcTabsStyles } from "@/components/price-calc/ui";

const title = "Used Mobile Price Calculator India – Second-Hand Phone Value | Sollabs Tech";
const description =
  "Free used mobile price calculator: pick your iPhone, Samsung, OnePlus, Pixel or any phone, its storage, age, condition and battery to see what it's worth in India.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/mobile-price-calculator" },
  keywords: [
    "used mobile price calculator",
    "second hand phone price calculator india",
    "old iphone price checker",
    "how much is my phone worth",
    "sell old mobile price",
    "second hand iphone price madurai",
  ],
  openGraph: { title, description, url: "https://www.sollabstech.com/mobile-price-calculator" },
};

const faqs = [
  {
    q: "How is the used phone price calculated?",
    a: "For popular models (iPhone, Samsung Galaxy, OnePlus, Pixel, ROG) we start from the model's typical second-hand price and adjust for storage, condition and battery health. For other phones we use the price when new and how many months old it is. What's included matters too: a phone with its box, bill and charger is worth more than the phone alone. A replaced screen or battery, or broken Face ID or fingerprint, lowers it.",
  },
  {
    q: "Does warranty change the price?",
    a: "Yes. A phone under 10 months old usually still has its brand warranty, which adds a little to its value.",
  },
  {
    q: "Is this the price Sollabs Tech will pay?",
    a: "It's an estimate. Send us the details or photos on WhatsApp, or use the Sell page, and we'll give you a real offer, usually the same day.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function MobilePriceCalculatorPage() {
  return (
    <section style={{ padding: "110px 16px 100px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <CalcTabsStyles />
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "#475569", marginBottom: 18, display: "flex", gap: 6 }}>
          <Link href="/" style={{ color: "#475569", textDecoration: "none" }}>Home</Link><span>›</span>
          <span style={{ color: "#94A3B8" }}>Mobile price calculator</span>
        </nav>
        <CalcTabs active="mobile" />
        <h1 style={{ fontSize: "clamp(1.7rem, 4.5vw, 2.6rem)", fontWeight: 800, color: "white", lineHeight: 1.2, margin: "0 0 10px" }}>
          Used mobile <span className="gradient-text">price calculator</span>
        </h1>
        <p style={{ fontSize: 16, color: "#94A3B8", lineHeight: 1.7, margin: "0 0 28px", maxWidth: 720 }}>
          Selling your old phone, or buying a second-hand one? Pick the details below to see what it&apos;s worth in India today.
        </p>

        <PhoneCalculator />

        <p style={{ fontSize: 14.5, color: "#94A3B8", marginTop: 40 }}>
          Guides:{" "}
          <Link href="/blog/second-hand-iphone-price-india" style={{ color: "#00AAFF" }}>Second-hand iPhone price list 2026</Link>{" · "}
          <Link href="/blog/sell-old-laptop-phone-madurai" style={{ color: "#00AAFF" }}>How to sell your old laptop or phone</Link>
        </p>

        <div style={{ maxWidth: 760, marginTop: 56 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "white", margin: "0 0 16px" }}>Questions</h2>
          {faqs.map((f) => (
            <details key={f.q} style={{ padding: "14px 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <summary style={{ cursor: "pointer", fontSize: 15.5, fontWeight: 700, color: "#E2E8F0" }}>{f.q}</summary>
              <p style={{ fontSize: 14.5, color: "#94A3B8", lineHeight: 1.7, margin: "10px 0 0" }}>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
