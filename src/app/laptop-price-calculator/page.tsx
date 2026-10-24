import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "./Calculator";
import { CalcTabs, CalcTabsStyles } from "@/components/price-calc/ui";

const title = "Used Laptop Price Calculator India – Second-Hand Laptop Value | Sollabs Tech";
const description =
  "Free used laptop price calculator: pick the brand, processor, RAM, storage, graphics, age and condition to see what your second-hand laptop is worth in India.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/laptop-price-calculator" },
  keywords: [
    "used laptop price calculator",
    "second hand laptop price calculator india",
    "old laptop value checker",
    "how much is my laptop worth",
    "sell old laptop price",
    "second hand laptop price madurai",
  ],
  openGraph: { title, description, url: "https://www.sollabstech.com/laptop-price-calculator" },
};

const faqs = [
  {
    q: "How is the used laptop price calculated?",
    a: "We start from a typical second-hand price for the processor and its generation, add value for more RAM, a bigger SSD and a graphics card, then adjust for the brand, the laptop's age and its condition. A weak battery lowers the price, and what's included matters: a laptop with its charger, box and bill is worth more than the laptop alone. A laptop under 10 months old usually still has its brand warranty, which adds a little more.",
  },
  {
    q: "Is this the price Sollabs Tech will pay?",
    a: "It's an estimate. Send us the details or photos on WhatsApp, or use the Sell page, and we'll give you a real offer, usually the same day.",
  },
  {
    q: "Can I use it before buying a second-hand laptop?",
    a: "Yes. Enter the seller's laptop details to check whether the asking price is fair before you buy.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function LaptopPriceCalculatorPage() {
  return (
    <section style={{ padding: "110px 16px 100px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <CalcTabsStyles />
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "#475569", marginBottom: 18, display: "flex", gap: 6 }}>
          <Link href="/" style={{ color: "#475569", textDecoration: "none" }}>Home</Link><span>›</span>
          <span style={{ color: "#94A3B8" }}>Laptop price calculator</span>
        </nav>
        <CalcTabs active="laptop" />
        <h1 style={{ fontSize: "clamp(1.7rem, 4.5vw, 2.6rem)", fontWeight: 800, color: "white", lineHeight: 1.2, margin: "0 0 10px" }}>
          Used laptop <span className="gradient-text">price calculator</span>
        </h1>
        <p style={{ fontSize: 16, color: "#94A3B8", lineHeight: 1.7, margin: "0 0 28px", maxWidth: 720 }}>
          Selling your old laptop, or buying a second-hand one? Pick the details below to see what it&apos;s worth in India today.
        </p>

        <Calculator />

        <p style={{ fontSize: 14.5, color: "#94A3B8", marginTop: 40 }}>
          Guides:{" "}
          <Link href="/blog/used-laptop-price-india" style={{ color: "#00AAFF" }}>Used laptop price guide 2026</Link>{" · "}
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
