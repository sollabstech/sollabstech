import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "New Mobile Phones – Sollabs Tech Mobile | Madurai",
  description:
    "Buy brand-new mobile phones from Sollabs Tech Mobile, Madurai — sealed box, full warranty, genuine stock. iPhones, ASUS ROG gaming phones, and rugged phones. WhatsApp: +91 90038 50743.",
  keywords: [
    "sollabs tech new mobile",
    "new mobile madurai",
    "new iphone madurai",
    "buy new phone madurai",
    "new rog phone india",
    "new mobile phone madurai",
    "brand new mobile madurai",
    "sollabs tech mobile new phone",
    "new phone buy online madurai",
  ],
  alternates: { canonical: "/mobile/new" },
  openGraph: {
    title: "New Mobile Phones – Sollabs Tech Mobile | Madurai",
    description:
      "Brand-new phones — sealed box, full manufacturer warranty. iPhones, ASUS ROG gaming phones, rugged phones. Sollabs Tech Mobile, Madurai.",
    url: "https://www.sollabstech.com/mobile/new",
    type: "website",
  },
};

const WHATSAPP = "https://wa.me/919003850743?text=Hi, I'm interested in a new phone from Sollabs Tech Mobile";
const GREEN = "#00E676";
const GREEN_DIM = "rgba(0,230,118,0.10)";
const GREEN_BORDER = "rgba(0,230,118,0.22)";
const pStyle = { fontSize: 15, color: "#94A3B8", lineHeight: 1.85, marginBottom: 12 } as const;
const h2Style = { fontSize: "1.35rem", fontWeight: 700, color: "#ffffff", marginTop: 40, marginBottom: 14 } as const;

const newPhoneCategories = [
  {
    icon: "🍎",
    title: "New iPhones",
    desc: "Brand-new Apple iPhones — sealed box, full Apple warranty, genuine Indian stock. We carry the latest models and selected older models with great value.",
    enquiry: "Ask about new iPhone stock",
  },
  {
    icon: "🎮",
    title: "New ASUS ROG Gaming Phones",
    desc: "Factory-sealed ASUS ROG gaming phones — Snapdragon flagship, 144Hz+ display, AirTrigger controls, 6000mAh+ battery. Best-in-class for mobile gaming.",
    enquiry: "Ask about new ROG phone stock",
  },
  {
    icon: "🛡️",
    title: "New Rugged / Tank Phones",
    desc: "Brand-new shockproof, waterproof and dustproof phones — military-grade build, oversized batteries, and extreme durability for outdoor and industrial use.",
    enquiry: "Ask about new rugged phone stock",
  },
];

const benefits = [
  { icon: "📦", title: "Sealed box", desc: "Factory-sealed packaging — never opened before you." },
  { icon: "🛡️", title: "Full manufacturer warranty", desc: "Complete warranty from Apple, ASUS or the phone brand — not a third-party cover." },
  { icon: "📄", title: "Original bill", desc: "Purchase invoice provided — proof of genuine, authorised stock." },
  { icon: "💬", title: "WhatsApp purchase", desc: "Confirm stock, pay, and arrange delivery entirely on WhatsApp — no website checkout risk." },
];

const faqs = [
  {
    q: "Does Sollabs Tech Mobile sell brand-new phones?",
    a: "Yes. Sollabs Tech Mobile sells brand-new, factory-sealed phones with full manufacturer warranty. New iPhones, ASUS ROG gaming phones, and rugged phones are currently available.",
  },
  {
    q: "Are the new phones genuine and not refurbished?",
    a: "Yes. New phones from Sollabs Tech Mobile are genuinely brand-new — sealed box, never opened, with the full original manufacturer warranty. They are not refurbished or demo units.",
  },
  {
    q: "How do I check which new phones are currently in stock?",
    a: "Message Sollabs Tech Mobile on WhatsApp at +91 90038 50743. We will send you the current new-phone stock list with prices.",
  },
  {
    q: "Can I get an invoice for a new phone?",
    a: "Yes. Every new phone comes with a purchase invoice. This is important for warranty claims and for confirming the phone is genuine stock.",
  },
  {
    q: "Does Sollabs Tech Mobile deliver new phones across India?",
    a: "Yes. We courier new phones pan-India from our base in Madurai, Tamil Nadu.",
  },
];

export default function NewPhonesPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sollabstech.com" },
      { "@type": "ListItem", position: 2, name: "Sollabs Tech Mobile", item: "https://www.sollabstech.com/mobile" },
      { "@type": "ListItem", position: 3, name: "New Phones", item: "https://www.sollabstech.com/mobile/new" },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "New Phones — Sollabs Tech Mobile",
    description: "Brand-new mobile phones available from Sollabs Tech Mobile, Madurai.",
    itemListElement: newPhoneCategories.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.title,
      description: c.desc,
    })),
  };

  return (
    <article style={{ paddingTop: 100, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />

      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: 13, color: "#475569", marginBottom: 28, display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "#475569", textDecoration: "none" }}>Home</Link>
          <span>&rsaquo;</span>
          <Link href="/mobile" style={{ color: "#475569", textDecoration: "none" }}>Sollabs Tech Mobile</Link>
          <span>&rsaquo;</span>
          <span style={{ color: GREEN }}>New Phones</span>
        </nav>

        <div style={{ display: "inline-flex", gap: 8, alignItems: "center", marginBottom: 18 }}>
          <span style={{ padding: "4px 14px", borderRadius: 100, fontSize: 12, fontWeight: 600, background: GREEN_DIM, border: `1px solid ${GREEN_BORDER}`, color: GREEN }}>
            ✨ New Phones
          </span>
        </div>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: 20 }}>
          New Mobile Phones —{" "}
          <span style={{ background: `linear-gradient(135deg, ${GREEN}, #00AAFF)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Sollabs Tech Mobile
          </span>
        </h1>

        <p style={{ fontSize: 17, color: "#94A3B8", lineHeight: 1.85, marginBottom: 8 }}>
          {"Brand-new, factory-sealed phones with full manufacturer warranty — from "}
          <Link href="/mobile" style={{ color: GREEN, textDecoration: "none" }}>Sollabs Tech Mobile</Link>
          {", Madurai. iPhones, ASUS ROG gaming phones, and rugged phones."}
        </p>

        {/* Quick answer */}
        <div style={{ padding: "20px 24px", borderRadius: 14, background: GREEN_DIM, border: `1px solid ${GREEN_BORDER}`, margin: "24px 0 8px" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: GREEN, marginBottom: 8, letterSpacing: "0.05em" }}>HOW TO ORDER</div>
          <p style={{ fontSize: 14, color: "#CBD5E1", lineHeight: 1.8, margin: 0 }}>
            Message us on WhatsApp at{" "}
            <strong style={{ color: "white" }}>+91 90038 50743</strong>{" "}
            — tell us which phone model you want, and we will confirm availability, price, and delivery details.
          </p>
        </div>

        <h2 style={h2Style}>New phones we carry</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {newPhoneCategories.map((c) => (
            <div key={c.title} style={{ padding: "22px 24px", borderRadius: 16, background: "rgba(255,255,255,0.02)", border: `1px solid ${GREEN_BORDER}` }}>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span style={{ fontSize: 36, flexShrink: 0 }}>{c.icon}</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "white", marginBottom: 6 }}>{c.title}</h3>
                  <p style={{ fontSize: 14, color: "#6B7A94", lineHeight: 1.7, marginBottom: 12 }}>{c.desc}</p>
                  <a href={`${WHATSAPP.split("?")[0]}?text=Hi, I'm interested in: ${encodeURIComponent(c.enquiry)}`}
                    target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: 13, fontWeight: 600, color: GREEN, textDecoration: "none" }}>
                    💬 {c.enquiry} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={h2Style}>What you get with a new phone from us</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="new-benefits-grid">
          {benefits.map((b) => (
            <div key={b.title} style={{ padding: "18px 20px", borderRadius: 14, background: "rgba(255,255,255,0.02)", border: `1px solid ${GREEN_BORDER}` }}>
              <div style={{ fontSize: 26, marginBottom: 8 }}>{b.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 4 }}>{b.title}</div>
              <div style={{ fontSize: 13, color: "#6B7A94", lineHeight: 1.65 }}>{b.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={h2Style}>Frequently asked questions</h2>
        {faqs.map((f) => (
          <div key={f.q} style={{ marginBottom: 12, padding: "16px 18px", borderRadius: 12, background: "rgba(255,255,255,0.02)", border: `1px solid ${GREEN_BORDER}` }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 6 }}>{f.q}</div>
            <div style={{ fontSize: 14, color: "#6B7A94", lineHeight: 1.75 }}>{f.a}</div>
          </div>
        ))}

        {/* CTA */}
        <div style={{ marginTop: 44, padding: "28px", borderRadius: 20, background: `linear-gradient(135deg, ${GREEN_DIM}, rgba(0,170,255,0.05))`, border: `1px solid ${GREEN_BORDER}` }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "white", marginBottom: 10 }}>
            Want a new phone? Ask us on WhatsApp
          </h2>
          <p style={{ fontSize: 14, color: "#CBD5E1", lineHeight: 1.8, marginBottom: 16 }}>
            Tell us the model — we&apos;ll confirm availability and price before anything is committed.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              style={{ padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: `linear-gradient(135deg, ${GREEN}, #00AAFF)`, color: "#050A18", textDecoration: "none" }}>
              💬 WhatsApp Us
            </a>
            <Link href="/mobile/second-hand"
              style={{ padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 600, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "white", textDecoration: "none" }}>
              View Second-Hand Phones
            </Link>
            <Link href="/mobile"
              style={{ padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 600, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "white", textDecoration: "none" }}>
              ← Back to Sollabs Tech Mobile
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .new-benefits-grid { grid-template-columns: 1fr 1fr !important; }
        @media (max-width: 500px) {
          .new-benefits-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </article>
  );
}
