import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Second-Hand & Used Phones – Sollabs Tech Mobile | Madurai",
  description:
    "Buy quality-checked second-hand and used mobile phones from Sollabs Tech Mobile, Madurai. Used iPhones, ASUS ROG gaming phones, rugged phones — with box & bill. WhatsApp: +91 90038 50743.",
  keywords: [
    "sollabs tech second hand mobile",
    "sollabs tech used phones",
    "sollabs tech second hand phone",
    "second hand mobile madurai",
    "used phone madurai",
    "used iphone madurai",
    "second hand iphone madurai",
    "buy used phone madurai",
    "old mobile madurai",
    "refurbished phone madurai",
    "demo phone madurai",
    "second hand rog phone",
    "used gaming phone madurai",
    "buy second hand phone india",
  ],
  alternates: { canonical: "/mobile/second-hand" },
  openGraph: {
    title: "Second-Hand & Used Phones – Sollabs Tech Mobile | Madurai",
    description:
      "Quality-checked used, second-hand, refurbished and demo phones in Madurai. iPhones, ASUS ROG, rugged phones — box & bill where available. Sollabs Tech Mobile.",
    url: "https://www.sollabstech.com/mobile/second-hand",
    type: "website",
  },
};

const WHATSAPP = "https://wa.me/919003850743?text=Hi, I'm looking for a second-hand phone from Sollabs Tech Mobile";
const GREEN = "#00E676";
const GREEN_DIM = "rgba(0,230,118,0.10)";
const GREEN_BORDER = "rgba(0,230,118,0.22)";
const h2Style = { fontSize: "1.35rem", fontWeight: 700, color: "#ffffff", marginTop: 40, marginBottom: 14 } as const;

const conditionTypes = [
  {
    label: "Used",
    desc: "Pre-owned phone from a previous owner. Fully working, inspected, priced below market.",
  },
  {
    label: "Second-hand",
    desc: "Same as used — a phone that had one owner before you. Inspected and confirmed working before sale.",
  },
  {
    label: "Refurbished",
    desc: "A used phone that has been professionally tested part-by-part, with faulty components replaced (battery, screen, etc.) before resale.",
  },
  {
    label: "Demo / display unit",
    desc: "Showroom phone used to demonstrate the model in-store. Lightly used, often at a significant discount.",
  },
];

const phoneCategories = [
  {
    icon: "🍎",
    title: "Second-Hand iPhones",
    desc: "Used and refurbished Apple iPhones — the most in-demand second-hand phone in India. Long software support, strong build quality, excellent resale value.",
    note: "iCloud lock removed and IMEI verified before every sale.",
  },
  {
    icon: "🎮",
    title: "Second-Hand ASUS ROG Gaming Phones",
    desc: "Used ASUS ROG phones — Snapdragon flagship performance, 144Hz+ displays, 6000mAh+ batteries, and gaming extras like AirTrigger shoulder buttons.",
    note: "Current listing: ROG Phone 5s Pro at ₹25,000 — brand-new condition, with box & bill.",
    link: { label: "View ROG Phone 5s Pro listing →", href: "/blog/asus-rog-phone-5s-pro-price-madurai" },
  },
  {
    icon: "🛡️",
    title: "Second-Hand Rugged / Tank Phones",
    desc: "Used heavy-duty phones built for harsh environments — shockproof, waterproof, with oversized batteries. Great for fieldwork, construction, or outdoor use.",
    note: "Ask us on WhatsApp for current rugged phone stock.",
  },
];

const buyerChecklist = [
  { step: "1", text: "Ask for the original bill (purchase invoice) — it confirms the phone is genuine and not reported lost or stolen." },
  { step: "2", text: "Dial *#06# and verify the IMEI matches the box and bill. Check IMEI on ceir.gov.in to confirm it is not blacklisted." },
  { step: "3", text: "For iPhones: confirm the previous owner's Apple ID (iCloud) is removed before you pay." },
  { step: "4", text: "Test screen, camera, battery, buttons, speakers, and mic before purchase." },
  { step: "5", text: "Buy from a seller who gives you a WhatsApp contact and is reachable after the sale." },
];

const faqs = [
  {
    q: "Does Sollabs Tech Mobile sell second-hand phones?",
    a: "Yes. Second-hand, used, refurbished, and demo phones are a core part of what Sollabs Tech Mobile sells. Every unit is quality-checked before sale. Contact us on WhatsApp: +91 90038 50743.",
  },
  {
    q: "Are the second-hand phones from Sollabs Tech Mobile genuine?",
    a: "Yes. All second-hand phones from Sollabs Tech Mobile are verified before sale. We check the IMEI, provide the original bill where available, and remove iCloud lock on iPhones before delivery.",
  },
  {
    q: "What second-hand phones does Sollabs Tech Mobile have in stock?",
    a: "Current stock varies. Message us on WhatsApp at +91 90038 50743 for the latest availability. Current listings include an ASUS ROG Phone 5s Pro at ₹25,000 in brand-new condition with box and bill.",
  },
  {
    q: "Does Sollabs Tech Mobile sell second-hand iPhones?",
    a: "Yes. Used and refurbished iPhones are one of the primary products at Sollabs Tech Mobile. Message +91 90038 50743 on WhatsApp to ask about specific iPhone models and current pricing.",
  },
  {
    q: "What is the difference between second-hand and refurbished?",
    a: "Second-hand means a phone used by one owner before you, sold as-is after inspection. Refurbished means that phone was additionally repaired — faulty components like the battery or screen replaced — before resale. Refurbished phones typically cost slightly more but are in better condition.",
  },
  {
    q: "Will the second-hand phone come with a box and bill?",
    a: "Where the original box and invoice are available, we include them. This is specified for each listing. Ask us on WhatsApp to confirm box/bill availability for any specific model.",
  },
  {
    q: "Can I return a second-hand phone if there is a problem?",
    a: "All phones are quality-checked and condition is confirmed on WhatsApp before you pay. If there is a discrepancy between what was described and what you receive, contact us on WhatsApp immediately. We handle issues directly.",
  },
];

export default function SecondHandPhonesPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sollabstech.com" },
      { "@type": "ListItem", position: 2, name: "Sollabs Tech Mobile", item: "https://www.sollabstech.com/mobile" },
      { "@type": "ListItem", position: 3, name: "Second-Hand Phones", item: "https://www.sollabstech.com/mobile/second-hand" },
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

  const localBizLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sollabs Tech Mobile — Second-Hand Phones",
    url: "https://www.sollabstech.com/mobile/second-hand",
    telephone: "+91-90038-50743",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Madurai",
      addressRegion: "Tamil Nadu",
      postalCode: "625402",
      addressCountry: "IN",
    },
    areaServed: { "@type": "Country", name: "India" },
    description: "Quality-checked second-hand and used mobile phones — iPhones, ASUS ROG, rugged phones — sold with original bill from Madurai.",
  };

  return (
    <article style={{ paddingTop: 100, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizLd) }} />

      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: 13, color: "#475569", marginBottom: 28, display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "#475569", textDecoration: "none" }}>Home</Link>
          <span>&rsaquo;</span>
          <Link href="/mobile" style={{ color: "#475569", textDecoration: "none" }}>Sollabs Tech Mobile</Link>
          <span>&rsaquo;</span>
          <span style={{ color: GREEN }}>Second-Hand Phones</span>
        </nav>

        <div style={{ display: "inline-flex", gap: 8, alignItems: "center", marginBottom: 18 }}>
          <span style={{ padding: "4px 14px", borderRadius: 100, fontSize: 12, fontWeight: 600, background: GREEN_DIM, border: `1px solid ${GREEN_BORDER}`, color: GREEN }}>
            🔄 Second-Hand Phones
          </span>
        </div>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: 20 }}>
          Second-Hand & Used Phones —{" "}
          <span style={{ background: `linear-gradient(135deg, ${GREEN}, #00AAFF)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Sollabs Tech Mobile
          </span>
        </h1>

        <p style={{ fontSize: 17, color: "#94A3B8", lineHeight: 1.85, marginBottom: 8 }}>
          {"Quality-checked used, second-hand, refurbished and demo phones from "}
          <Link href="/mobile" style={{ color: GREEN, textDecoration: "none" }}>Sollabs Tech Mobile</Link>
          {" — iPhones, ASUS ROG gaming phones, and rugged phones. Box and bill included where available."}
        </p>

        {/* Contact box */}
        <div style={{ padding: "20px 24px", borderRadius: 14, background: GREEN_DIM, border: `1px solid ${GREEN_BORDER}`, margin: "24px 0 8px" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: GREEN, marginBottom: 8, letterSpacing: "0.05em" }}>CHECK CURRENT STOCK</div>
          <p style={{ fontSize: 14, color: "#CBD5E1", lineHeight: 1.8, margin: 0 }}>
            WhatsApp: <strong style={{ color: "white" }}>+91 90038 50743</strong> — tell us which phone model you want and
            we&apos;ll confirm availability, condition, price and delivery details.
          </p>
        </div>

        {/* Condition types */}
        <h2 style={h2Style}>What we mean by used, second-hand, refurbished and demo</h2>
        <p style={{ fontSize: 15, color: "#94A3B8", lineHeight: 1.7, marginBottom: 16 }}>
          These terms get used loosely. Here is exactly what each one means at Sollabs Tech Mobile:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 8 }} className="condition-grid">
          {conditionTypes.map((c) => (
            <div key={c.label} style={{ padding: "16px 18px", borderRadius: 13, background: "rgba(255,255,255,0.02)", border: `1px solid ${GREEN_BORDER}` }}>
              <span style={{ padding: "3px 10px", borderRadius: 100, fontSize: 11, fontWeight: 700, background: GREEN_DIM, border: `1px solid ${GREEN_BORDER}`, color: GREEN, display: "inline-block", marginBottom: 8 }}>
                {c.label}
              </span>
              <p style={{ fontSize: 13, color: "#6B7A94", lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Phone categories */}
        <h2 style={h2Style}>Second-hand phones we sell</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {phoneCategories.map((p) => (
            <div key={p.title} style={{ padding: "22px 24px", borderRadius: 16, background: "rgba(255,255,255,0.02)", border: `1px solid ${GREEN_BORDER}` }}>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span style={{ fontSize: 36, flexShrink: 0 }}>{p.icon}</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "white", marginBottom: 6 }}>{p.title}</h3>
                  <p style={{ fontSize: 14, color: "#6B7A94", lineHeight: 1.7, marginBottom: 8 }}>{p.desc}</p>
                  <p style={{ fontSize: 13, color: "#64748B", fontStyle: "italic", marginBottom: p.link ? 10 : 0 }}>{p.note}</p>
                  {p.link && (
                    <Link href={p.link.href} style={{ fontSize: 13, fontWeight: 600, color: "#00AAFF", textDecoration: "none" }}>
                      {p.link.label}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Buyer checklist */}
        <h2 style={h2Style}>What to check before buying any second-hand phone</h2>
        <p style={{ fontSize: 15, color: "#94A3B8", lineHeight: 1.7, marginBottom: 16 }}>
          We check all of these ourselves — but if you ever buy from anyone else, verify these:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {buyerChecklist.map((item) => (
            <div key={item.step} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 18px", borderRadius: 12, background: GREEN_DIM, border: `1px solid ${GREEN_BORDER}` }}>
              <span style={{ fontSize: 13, fontWeight: 800, color: GREEN, flexShrink: 0, width: 20, paddingTop: 1 }}>{item.step}.</span>
              <span style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.7 }}>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Current listing */}
        <div style={{ marginTop: 40, padding: "24px 26px", borderRadius: 18, background: "rgba(0,102,255,0.07)", border: "1px solid rgba(0,102,255,0.25)" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#FFAA00", letterSpacing: "0.08em", marginBottom: 8 }}>NOW AVAILABLE</div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "white", marginBottom: 4 }}>ASUS ROG Phone 5s Pro — ₹25,000</div>
          <p style={{ fontSize: 14, color: "#CBD5E1", lineHeight: 1.7, marginBottom: 16 }}>
            Brand-new condition — no scratches, no dents, no dust. Original box & bill included. One unit only.
          </p>
          <Link href="/blog/asus-rog-phone-5s-pro-price-madurai"
            style={{ display: "inline-block", padding: "9px 18px", borderRadius: 10, fontSize: 13, fontWeight: 700, background: "linear-gradient(135deg,#0066FF,#0099FF)", color: "white", textDecoration: "none" }}>
            View Full Listing →
          </Link>
        </div>

        {/* FAQ */}
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
            Looking for a second-hand phone in Madurai?
          </h2>
          <p style={{ fontSize: 14, color: "#CBD5E1", lineHeight: 1.8, marginBottom: 16 }}>
            Message Sollabs Tech Mobile on WhatsApp — tell us the model and we&apos;ll confirm stock, condition, and price.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              style={{ padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: `linear-gradient(135deg, ${GREEN}, #00AAFF)`, color: "#050A18", textDecoration: "none" }}>
              💬 WhatsApp: +91 90038 50743
            </a>
            <Link href="/mobile/new"
              style={{ padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 600, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "white", textDecoration: "none" }}>
              View New Phones
            </Link>
            <Link href="/mobile"
              style={{ padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 600, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "white", textDecoration: "none" }}>
              ← Sollabs Tech Mobile
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .condition-grid { grid-template-columns: 1fr 1fr !important; }
        @media (max-width: 500px) {
          .condition-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </article>
  );
}
