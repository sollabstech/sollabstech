import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sollabs Tech Mobile – New & Second Hand Phones | Madurai",
  description:
    "Sollabs Tech Mobile is the phone-sales division of Sollabs Tech, Madurai. We sell new and second-hand iPhones, ASUS ROG gaming phones, and rugged phones. Quality-checked, with box & bill. WhatsApp: +91 90038 50743.",
  keywords: [
    "sollabs tech mobile",
    "sollabs tech mobile madurai",
    "sollabs tech new mobile",
    "sollabs tech second hand mobile",
    "sollabs tech used phones",
    "sollabs tech mobile phones",
    "sollabs tech mobile phone",
    "sollabstech mobile",
    "sollabstech phones",
    "buy mobile madurai",
    "new mobile madurai",
    "second hand mobile madurai",
    "used phone madurai",
    "iphone madurai",
    "rog phone madurai",
    "rugged phone india",
  ],
  alternates: { canonical: "/mobile" },
  openGraph: {
    title: "Sollabs Tech Mobile – New & Second Hand Phones | Madurai",
    description:
      "New and second-hand iPhones, ASUS ROG gaming phones, and rugged phones. Quality-checked, honestly priced, with box & bill. Sollabs Tech Mobile — Madurai, Tamil Nadu.",
    url: "https://www.sollabstech.com/mobile",
    type: "website",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Sollabs Tech Mobile" }],
  },
};

const WHATSAPP = "https://wa.me/919003850743?text=Hi, I'm interested in a phone from Sollabs Tech Mobile";

const pStyle = { fontSize: 15, color: "#94A3B8", lineHeight: 1.85, marginBottom: 12 } as const;
const h2Style = { fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 700, color: "#ffffff", marginTop: 0, marginBottom: 16 } as const;
const GREEN = "#00E676";
const GREEN_DIM = "rgba(0,230,118,0.12)";
const GREEN_BORDER = "rgba(0,230,118,0.25)";

const brands = [
  {
    icon: "🍎",
    name: "Apple iPhone",
    desc: "The most trusted premium phone in India. Excellent resale value, long software support, and strong demand for both new and second-hand units.",
    tags: ["New", "Second-hand", "Refurbished"],
  },
  {
    icon: "🎮",
    name: "ASUS ROG Gaming Phones",
    desc: "Built for mobile gaming — Snapdragon flagship processors, 144Hz+ AMOLED displays, 6000mAh batteries, AirTrigger shoulder buttons, and ROG Vision rear display.",
    tags: ["New", "Second-hand"],
  },
  {
    icon: "🛡️",
    name: "Rugged / Tank Phones",
    desc: "Military-grade shockproof, waterproof and dustproof phones with oversized batteries — built for outdoor fieldwork, construction sites, and anyone hard on a device.",
    tags: ["New", "Second-hand"],
  },
];

const categoryCards = [
  {
    href: "/mobile/new",
    icon: "✨",
    label: "New Phones",
    desc: "Brand-new phones — sealed box, full manufacturer warranty, unused.",
    cta: "Browse New Phones →",
  },
  {
    href: "/mobile/second-hand",
    icon: "🔄",
    label: "Second-Hand Phones",
    desc: "Quality-checked used, refurbished and demo phones — honestly graded, with box & bill where available.",
    cta: "Browse Second-Hand →",
  },
];

const whyCards = [
  { icon: "✅", title: "Quality-checked first", desc: "Every phone is inspected — screen, battery, buttons, camera, speakers — before it reaches you." },
  { icon: "📄", title: "Box & bill included", desc: "Original invoice confirms the phone is genuine, not stolen, and helps establish remaining warranty." },
  { icon: "🔍", title: "Honest condition grading", desc: "Brand-new means brand-new. We never describe a scratched phone as 'excellent condition'." },
  { icon: "💬", title: "WhatsApp support", desc: "Direct conversation with our team — not a bot. Confirm condition, price and shipping before you pay." },
  { icon: "🚚", title: "Ships across India", desc: "We courier phones pan-India from Madurai, Tamil Nadu." },
  { icon: "🏢", title: "Real business, real address", desc: "Sollabs Tech has been operating in Madurai since 2020 — 500+ laptops sold, same trust now for phones." },
];

const faqs = [
  {
    q: "What is Sollabs Tech Mobile?",
    a: "Sollabs Tech Mobile is the mobile-phone sales division of Sollabs Tech, the Madurai-based technology company. It sells new and second-hand phones — iPhones, ASUS ROG gaming phones, and rugged models — separate from the IT/software and laptop/PC businesses.",
  },
  {
    q: "Does Sollabs Tech Mobile sell new phones?",
    a: "Yes. Sollabs Tech Mobile sells brand-new phones — sealed box, full manufacturer warranty. Contact us on WhatsApp at +91 90038 50743 to check current new-phone stock.",
  },
  {
    q: "Does Sollabs Tech Mobile sell second-hand phones?",
    a: "Yes. Second-hand, used, refurbished and demo phones are a core part of what Sollabs Tech Mobile sells. Every unit is quality-checked before sale. Original bill is provided where available.",
  },
  {
    q: "Which phone brands does Sollabs Tech Mobile carry?",
    a: "Apple iPhone, ASUS ROG gaming phones, and rugged 'tank' phones. We focus on high-end models only — phones worth owning whether new or second-hand.",
  },
  {
    q: "Is Sollabs Tech Mobile the same as Sollabs Tech Laptops?",
    a: "No. Sollabs Tech Mobile is a completely separate business identity from the laptop and PC division. They share the Sollabs Tech parent brand but operate independently with separate inventory, separate Instagram presence, and separate WhatsApp conversations.",
  },
  {
    q: "Where is Sollabs Tech Mobile located?",
    a: "Sollabs Tech Mobile is based in Madurai, Tamil Nadu, India. We ship phones across India by courier.",
  },
  {
    q: "How do I buy a phone from Sollabs Tech Mobile?",
    a: "Message us on WhatsApp at +91 90038 50743. Tell us which phone model you want — new or second-hand — and we will confirm availability, condition details, and price before you commit to anything.",
  },
];

export default function MobileHubPage() {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sollabs Tech Mobile",
    url: "https://www.sollabstech.com/mobile",
    logo: "https://www.sollabstech.com/logo.png",
    description:
      "Sollabs Tech Mobile is the mobile-phone sales division of Sollabs Tech, Madurai — selling new and second-hand iPhones, ASUS ROG gaming phones, and rugged phones across India.",
    parentOrganization: {
      "@type": "Organization",
      name: "Sollabs Tech",
      url: "https://www.sollabstech.com",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Madurai",
      addressRegion: "Tamil Nadu",
      postalCode: "625402",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+91-90038-50743",
      availableLanguage: ["English", "Tamil"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sollabs Tech Mobile Phone Catalogue",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "New iPhones" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "New ASUS ROG Gaming Phones" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Second-hand iPhones" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Second-hand ASUS ROG Phones" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Rugged / Tank Phones" } },
      ],
    },
  };

  const localBizLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.sollabstech.com/mobile#business",
    name: "Sollabs Tech Mobile",
    image: "https://www.sollabstech.com/logo.png",
    description:
      "Mobile phone shop in Madurai selling new and second-hand iPhones, ASUS ROG gaming phones, and rugged phones.",
    url: "https://www.sollabstech.com/mobile",
    telephone: "+91-90038-50743",
    priceRange: "₹₹–₹₹₹",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Madurai",
      addressRegion: "Tamil Nadu",
      postalCode: "625402",
      addressCountry: "IN",
    },
    areaServed: { "@type": "Country", name: "India" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Phone Categories",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "New Phones", url: "https://www.sollabstech.com/mobile/new" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Second-Hand Phones", url: "https://www.sollabstech.com/mobile/second-hand" } },
      ],
    },
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

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sollabstech.com" },
      { "@type": "ListItem", position: 2, name: "Sollabs Tech Mobile", item: "https://www.sollabstech.com/mobile" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* ── HERO ── */}
      <section style={{ paddingTop: 120, paddingBottom: 80, paddingLeft: 24, paddingRight: 24, textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: 700, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,230,118,0.08) 0%, transparent 70%)", filter: "blur(60px)", zIndex: 0 }} />
        <div className="grid-bg" style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.3 }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 820, margin: "0 auto" }}>
          {/* Parent brand badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <Link href="/" style={{ fontSize: 13, color: "#6B7A94", textDecoration: "none" }}>Sollabs Tech</Link>
            <span style={{ color: "#6B7A94" }}>›</span>
            <span style={{ padding: "4px 14px", borderRadius: 100, fontSize: 12, fontWeight: 600, background: GREEN_DIM, border: `1px solid ${GREEN_BORDER}`, color: GREEN }}>
              📱 Sollabs Tech Mobile
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 4.2rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1px", marginBottom: 20 }}>
            <span style={{ color: "white" }}>Sollabs Tech</span>{" "}
            <span style={{ background: `linear-gradient(135deg, ${GREEN} 0%, #00AAFF 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Mobile</span>
          </h1>

          <p style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "#8A9BB8", maxWidth: 580, margin: "0 auto 16px", lineHeight: 1.7 }}>
            A dedicated phone-sales business under the Sollabs Tech brand — selling{" "}
            <strong style={{ color: "white" }}>new</strong> and{" "}
            <strong style={{ color: "white" }}>second-hand</strong> mobile phones.
          </p>
          <p style={{ fontSize: 14, color: "#6B7A94", marginBottom: 48 }}>
            iPhones · ASUS ROG Gaming Phones · Rugged Phones · Madurai, Tamil Nadu
          </p>

          {/* Category cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 680, margin: "0 auto 48px" }} className="mob-hero-cards">
            {categoryCards.map((c) => (
              <Link key={c.href} href={c.href} style={{ textDecoration: "none" }}>
                <div className="glass card-hover" style={{ borderRadius: 20, padding: "32px 28px", textAlign: "left", border: `1px solid ${GREEN_BORDER}`, background: GREEN_DIM, cursor: "pointer" }}>
                  <div style={{ fontSize: 38, marginBottom: 12 }}>{c.icon}</div>
                  <h3 style={{ fontSize: 19, fontWeight: 700, color: "white", marginBottom: 8 }}>{c.label}</h3>
                  <p style={{ fontSize: 14, color: "#6B7A94", lineHeight: 1.6, marginBottom: 18 }}>{c.desc}</p>
                  <span style={{ color: GREEN, fontWeight: 600, fontSize: 14 }}>{c.cta}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA row */}
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              style={{ padding: "12px 28px", borderRadius: 12, fontSize: 15, fontWeight: 700, background: `linear-gradient(135deg, ${GREEN}, #00AAFF)`, color: "#050A18", textDecoration: "none" }}>
              💬 WhatsApp Us
            </a>
            <Link href="/mobile/second-hand"
              style={{ padding: "12px 28px", borderRadius: 12, fontSize: 15, fontWeight: 600, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "white", textDecoration: "none" }}>
              View Second-Hand Phones
            </Link>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${GREEN_BORDER}, transparent)` }} />

      {/* ── SEPARATE IDENTITY NOTICE ── */}
      <section style={{ padding: "56px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "28px 32px", borderRadius: 18, background: "rgba(0,230,118,0.04)", border: `1px solid ${GREEN_BORDER}`, display: "grid", gridTemplateColumns: "auto 1fr", gap: 24, alignItems: "start" }} className="identity-notice">
          <div style={{ fontSize: 40, paddingTop: 4 }}>📱</div>
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "white", marginBottom: 10 }}>Sollabs Tech Mobile — A Separate Business</h2>
            <p style={{ fontSize: 14, color: "#6B7A94", lineHeight: 1.75, margin: 0 }}>
              Sollabs Tech Mobile is a <strong style={{ color: "#C4D0E0" }}>standalone phone-sales identity</strong> under the Sollabs Tech brand.
              It is <strong style={{ color: "#C4D0E0" }}>not the same as</strong> Sollabs Tech IT (software / websites / apps) or
              Sollabs Tech Laptops & Custom PCs. Mobile phones are not mixed with laptops, software, or any other product.{" "}
              <Link href="/" style={{ color: GREEN, textDecoration: "none" }}>Sollabs Tech</Link>{" → "}
              <Link href="/computers" style={{ color: "#00AAFF", textDecoration: "none" }}>Laptops & PCs</Link>{" · "}
              <Link href="/software" style={{ color: "#0099FF", textDecoration: "none" }}>Software</Link>{" · "}
              <span style={{ color: GREEN }}>Mobile (this page)</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ padding: "4px 14px", borderRadius: 100, fontSize: 12, fontWeight: 600, background: GREEN_DIM, border: `1px solid ${GREEN_BORDER}`, color: GREEN, display: "inline-block", marginBottom: 16 }}>
              Brands We Carry
            </span>
            <h2 style={h2Style}>High-End Phones Only</h2>
            <p style={{ color: "#6B7A94", fontSize: 15, maxWidth: 520, margin: "0 auto" }}>
              Sollabs Tech Mobile focuses on phones that are worth owning — new or second-hand. No budget or mid-range models.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="mob-brands-grid">
            {brands.map((b) => (
              <div key={b.name} className="glass card-hover" style={{ borderRadius: 18, padding: "28px 24px", border: `1px solid ${GREEN_BORDER}` }}>
                <div style={{ fontSize: 42, marginBottom: 14 }}>{b.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "white", marginBottom: 8 }}>{b.name}</h3>
                <p style={{ fontSize: 14, color: "#6B7A94", lineHeight: 1.7, marginBottom: 14 }}>{b.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {b.tags.map((t) => (
                    <span key={t} style={{ padding: "3px 10px", borderRadius: 100, fontSize: 11, fontWeight: 600, background: GREEN_DIM, border: `1px solid ${GREEN_BORDER}`, color: GREEN }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${GREEN_BORDER}, transparent)` }} />

      {/* ── CURRENT LISTING SPOTLIGHT ── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span style={{ padding: "4px 14px", borderRadius: 100, fontSize: 12, fontWeight: 600, background: "rgba(255,170,0,0.1)", border: "1px solid rgba(255,170,0,0.3)", color: "#FFAA00", display: "inline-block", marginBottom: 14 }}>
              Now Available
            </span>
            <h2 style={h2Style}>Current Phone Listing</h2>
          </div>
          <div style={{ padding: "28px 30px", borderRadius: 20, background: "rgba(0,102,255,0.07)", border: "1px solid rgba(0,102,255,0.25)" }}>
            <div style={{ display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
              <div style={{ fontSize: 52 }}>🎮</div>
              <div style={{ flex: 1, minWidth: 240 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#00AAFF", letterSpacing: "0.08em", marginBottom: 6 }}>FOR SALE</div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: "white", marginBottom: 6 }}>ASUS ROG Phone 5s Pro</h3>
                <div style={{ fontSize: 28, fontWeight: 800, color: "white", marginBottom: 8 }}>₹25,000</div>
                <p style={{ fontSize: 14, color: "#CBD5E1", lineHeight: 1.7, marginBottom: 18 }}>
                  Brand-new condition — no scratches, no dents, no dust. Original box and bill included.
                  Snapdragon 8 Gen 1, 6.78&quot; 144Hz AMOLED, 6000mAh battery, ROG Vision rear display.
                </p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <Link href="/blog/asus-rog-phone-5s-pro-price-madurai"
                    style={{ padding: "9px 18px", borderRadius: 10, fontSize: 13, fontWeight: 700, background: "linear-gradient(135deg,#0066FF,#0099FF)", color: "white", textDecoration: "none" }}>
                    View Full Listing →
                  </Link>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                    style={{ padding: "9px 18px", borderRadius: 10, fontSize: 13, fontWeight: 700, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "white", textDecoration: "none" }}>
                    💬 Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p style={{ fontSize: 13, color: "#475569", textAlign: "center", marginTop: 14 }}>
            More phones added regularly. Message us on WhatsApp to ask about specific models not listed here.
          </p>
        </div>
      </section>

      <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${GREEN_BORDER}, transparent)` }} />

      {/* ── WHY SOLLABS TECH MOBILE ── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={h2Style}>Why Sollabs Tech Mobile?</h2>
            <p style={{ color: "#6B7A94", fontSize: 15 }}>The same standards as our laptops, now for phones.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }} className="mob-why-grid">
            {whyCards.map((w) => (
              <div key={w.title} className="glass" style={{ borderRadius: 16, padding: "24px 20px", border: `1px solid ${GREEN_BORDER}` }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{w.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "white", marginBottom: 6 }}>{w.title}</h3>
                <p style={{ fontSize: 13, color: "#6B7A94", lineHeight: 1.7, margin: 0 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 700, color: "white", textAlign: "center", marginBottom: 36 }}>
            Frequently Asked Questions
          </h2>
          {faqs.map((f) => (
            <div key={f.q} style={{ marginBottom: 12, padding: "18px 20px", borderRadius: 12, background: "rgba(255,255,255,0.02)", border: `1px solid ${GREEN_BORDER}` }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 8 }}>{f.q}</div>
              <div style={{ fontSize: 14, color: "#6B7A94", lineHeight: 1.75 }}>{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "0 24px 100px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "40px 36px", borderRadius: 24, background: `linear-gradient(135deg, ${GREEN_DIM}, rgba(0,170,255,0.05))`, border: `1px solid ${GREEN_BORDER}`, textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>📱</div>
          <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 800, color: "white", marginBottom: 12 }}>
            Looking for a Phone?
          </h2>
          <p style={{ fontSize: 15, color: "#CBD5E1", lineHeight: 1.8, marginBottom: 28, maxWidth: 480, margin: "0 auto 28px" }}>
            Message Sollabs Tech Mobile on WhatsApp. Tell us which phone — new or second-hand — and we&apos;ll confirm stock, condition, price and delivery.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              style={{ padding: "12px 28px", borderRadius: 12, fontSize: 15, fontWeight: 700, background: `linear-gradient(135deg, ${GREEN}, #00AAFF)`, color: "#050A18", textDecoration: "none" }}>
              💬 WhatsApp: +91 90038 50743
            </a>
            <Link href="/mobile/second-hand"
              style={{ padding: "12px 28px", borderRadius: 12, fontSize: 15, fontWeight: 600, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "white", textDecoration: "none" }}>
              Second-Hand Phones
            </Link>
            <Link href="/mobile/new"
              style={{ padding: "12px 28px", borderRadius: 12, fontSize: 15, fontWeight: 600, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "white", textDecoration: "none" }}>
              New Phones
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .mob-hero-cards { grid-template-columns: 1fr 1fr !important; }
        .mob-brands-grid { grid-template-columns: repeat(3, 1fr) !important; }
        .mob-why-grid   { grid-template-columns: repeat(3, 1fr) !important; }
        .identity-notice { grid-template-columns: auto 1fr !important; }
        @media (max-width: 768px) {
          .mob-brands-grid { grid-template-columns: 1fr 1fr !important; }
          .mob-why-grid   { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 500px) {
          .mob-hero-cards  { grid-template-columns: 1fr !important; }
          .mob-brands-grid { grid-template-columns: 1fr !important; }
          .mob-why-grid    { grid-template-columns: 1fr !important; }
          .identity-notice { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
