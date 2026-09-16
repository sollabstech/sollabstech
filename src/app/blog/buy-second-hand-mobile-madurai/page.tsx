import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Buy Second Hand Mobile in Madurai – Used iPhones, ROG Phones & More",
  description:
    "Looking to buy a second hand mobile in Madurai? Sollabs Tech sells quality-checked used iPhones, ASUS ROG gaming phones, and rugged phones — with box & bill. WhatsApp +91 90038 50743.",
  keywords: [
    "second hand mobile madurai",
    "used phone madurai",
    "old mobile for sale madurai",
    "buy used mobile madurai",
    "second hand iphone madurai",
    "used iphone madurai",
    "buy iphone madurai",
    "second hand rog phone india",
    "used gaming phone madurai",
    "old phone buy india",
    "refurbished phone madurai",
    "second hand mobile india",
    "used mobile india",
    "old mobile india",
    "demo phone sale madurai",
    "buy mobile madurai",
  ],
  alternates: { canonical: "/blog/buy-second-hand-mobile-madurai" },
  openGraph: {
    title: "Buy Second Hand Mobile in Madurai – Used iPhones, ROG Phones & More",
    description:
      "Quality-checked used, second-hand, refurbished and demo phones in Madurai — iPhones, ASUS ROG gaming phones, rugged phones. With box & bill. Contact Sollabs Tech on WhatsApp.",
    url: "https://www.sollabstech.com/blog/buy-second-hand-mobile-madurai",
    type: "article",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Sollabs Tech" }],
  },
};

const PUBLISHED_ISO = "2026-09-16";
const PUBLISHED_HUMAN = "16 September 2026";
const CANONICAL = "https://www.sollabstech.com/blog/buy-second-hand-mobile-madurai";
const WHATSAPP = "https://wa.me/919003850743?text=Hi, I'm looking to buy a second hand mobile";

const pStyle = { fontSize: 15, color: "#94A3B8", lineHeight: 1.85, marginBottom: 12 } as const;
const h2Style = { fontSize: "1.4rem", fontWeight: 700, color: "#ffffff", marginTop: 40, marginBottom: 14 } as const;

const whyBuy: { title: string; desc: string }[] = [
  {
    title: "Quality-checked before every sale",
    desc: "Every phone is inspected before it leaves us — screen, battery, buttons, camera, speakers. No surprises after you pay.",
  },
  {
    title: "Box & bill included wherever possible",
    desc: "Original packaging and the first purchase invoice confirm the phone is genuine, not reported stolen, and help with any remaining manufacturer warranty.",
  },
  {
    title: "Honest condition grading",
    desc: "We describe each phone exactly as it is — brand-new, like-new, good condition. No 'excellent condition' labels on phones with scratches.",
  },
  {
    title: "Direct WhatsApp support",
    desc: "You talk to the team directly on WhatsApp — not a bot, not a call centre. Confirm condition, price, and shipping before you pay anything.",
  },
  {
    title: "Shipped pan-India from Madurai",
    desc: "Same delivery reach as our laptop business — courier across India from our base in Madurai, Tamil Nadu.",
  },
];

const models: { icon: string; title: string; desc: string; price?: string }[] = [
  {
    icon: "🍎",
    title: "Used iPhones",
    desc: "Apple iPhone — the most trusted second-hand phone in India. Holds its value, gets long software support, and has a huge resale market. We stock quality-checked units.",
  },
  {
    icon: "🎮",
    title: "ASUS ROG Gaming Phones (Used)",
    desc: "High-performance gaming phones with Snapdragon processors, 144Hz+ displays, 6000mAh+ batteries, and gaming-first extras like shoulder triggers. Ideal for BGMI, COD Mobile, and other high-frame-rate games.",
    price: "Current listing: ROG Phone 5s Pro at ₹25,000 (brand-new condition, with box & bill)",
  },
  {
    icon: "🛡️",
    title: "Rugged & Tank Phones",
    desc: "Heavy-duty phones built for construction sites, outdoor fieldwork, or anyone rough on a device — shockproof, waterproof, with oversized batteries. Built to survive where a regular phone would not.",
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Where can I buy a second hand mobile in Madurai?",
    a: "Sollabs Tech Phones in Madurai sells quality-checked second-hand, used, refurbished and demo phones — high-end models only: iPhone, ASUS ROG gaming phones, and rugged phones. Contact on WhatsApp: +91 90038 50743.",
  },
  {
    q: "Is it safe to buy a second hand phone in Madurai?",
    a: "It is safe when you buy from a verified seller who provides the original bill (invoice). The bill confirms the phone is genuine and not reported lost or stolen. Sollabs Tech provides the original bill with every phone where available.",
  },
  {
    q: "What is the difference between second hand, used, and refurbished phones?",
    a: "Second hand and used mean the same thing — a phone owned by someone before you. Refurbished means a used phone that was cleaned, tested part-by-part, and had faulty components (battery, screen, etc.) replaced before resale. Demo phones are showroom/display units used to show a phone in a store — lightly used with a steeper discount.",
  },
  {
    q: "How do I check if a second hand phone is genuine?",
    a: "Ask for the original bill (invoice) and verify the IMEI number matches the phone and is not blacklisted. You can check IMEI status on the government CEIR portal (ceir.gov.in). Sollabs Tech provides the original bill and confirms IMEI before every sale.",
  },
  {
    q: "Does Sollabs Tech sell second hand iPhones in Madurai?",
    a: "Yes. Sollabs Tech Phones sells quality-checked used and second-hand iPhones in Madurai. Message +91 90038 50743 on WhatsApp to ask about current stock and pricing.",
  },
  {
    q: "What is the price of a second hand iPhone in Madurai?",
    a: "Prices vary by model and condition. Message Sollabs Tech on WhatsApp at +91 90038 50743 to get the current price for the specific iPhone model you want.",
  },
  {
    q: "Does Sollabs Tech sell second hand ROG phones?",
    a: "Yes. ASUS ROG gaming phones are one of the three categories Sollabs Tech Phones stocks. There is currently an ASUS ROG Phone 5s Pro listed at ₹25,000 in brand-new condition with box and bill.",
  },
  {
    q: "Can I return a second hand phone if there is a problem?",
    a: "Sollabs Tech checks every phone before shipping. Condition details are confirmed on WhatsApp before payment. Ask about the return and support policy when you message us — we handle issues directly, not through a call centre.",
  },
];

export default function BuySecondHandMobileMaduraiPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Buy Second Hand Mobile in Madurai – Used iPhones, ROG Phones & More",
    description:
      "Where to buy quality-checked second hand and used phones in Madurai — iPhones, ASUS ROG gaming phones, and rugged models. Box & bill included. Sollabs Tech Phones.",
    author: { "@type": "Organization", name: "Sollabs Tech", url: "https://www.sollabstech.com" },
    publisher: {
      "@type": "Organization",
      name: "Sollabs Tech",
      logo: { "@type": "ImageObject", url: "https://www.sollabstech.com/logo.png" },
    },
    datePublished: PUBLISHED_ISO,
    dateModified: PUBLISHED_ISO,
    mainEntityOfPage: CANONICAL,
    url: CANONICAL,
    keywords:
      "second hand mobile madurai, used phone madurai, buy second hand phone madurai, used iphone madurai, second hand rog phone india",
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
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.sollabstech.com/blog" },
      { "@type": "ListItem", position: 3, name: "Buy Second Hand Mobile in Madurai", item: CANONICAL },
    ],
  };

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sollabs Tech Phones",
    image: "https://www.sollabstech.com/logo.png",
    description: "Quality-checked used, second-hand, refurbished and demo high-end phones — iPhone, ASUS ROG, and rugged models — sold from Madurai, Tamil Nadu.",
    url: "https://www.sollabstech.com/blog/sollabs-tech-phones-coming-soon",
    telephone: "+91-90038-50743",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Madurai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    areaServed: { "@type": "Country", name: "India" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Used & Second Hand Phones",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Used iPhones" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "ASUS ROG Gaming Phones" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Rugged / Tank Phones" } },
      ],
    },
  };

  return (
    <article style={{ paddingTop: 100, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }} />

      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: 13, color: "#475569", marginBottom: 28, display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "#475569", textDecoration: "none" }}>Home</Link>
          <span>&rsaquo;</span>
          <Link href="/blog" style={{ color: "#475569", textDecoration: "none" }}>Blog</Link>
          <span>&rsaquo;</span>
          <span style={{ color: "#94A3B8" }}>Second Hand Mobile Madurai</span>
        </nav>

        {/* Tag + date */}
        <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 20, flexWrap: "wrap" }}>
          <span style={{ padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600, background: "rgba(0,255,170,0.1)", border: "1px solid rgba(0,255,170,0.3)", color: "#00FFAA" }}>
            Phones
          </span>
          <span style={{ fontSize: 13, color: "#475569" }}>{PUBLISHED_HUMAN}</span>
          <span style={{ fontSize: 13, color: "#475569" }}>&middot; 5 min read</span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: 20 }}>
          Buy Second Hand Mobile in Madurai
        </h1>

        <p style={{ fontSize: 17, color: "#94A3B8", lineHeight: 1.85, marginBottom: 8 }}>
          {"Looking for a "}
          <strong style={{ color: "#fff" }}>second hand mobile in Madurai</strong>
          {"? "}
          <Link href="/blog/sollabs-tech-phones-coming-soon" style={{ color: "#00FFAA", textDecoration: "none" }}>
            Sollabs Tech Phones
          </Link>
          {" sells quality-checked used, second-hand, refurbished, and demo phones — high-end models only: iPhone, ASUS ROG gaming phones, and rugged phones. With box and bill wherever available."}
        </p>

        {/* Quick answer box */}
        <div style={{ padding: "22px 26px", borderRadius: 16, background: "rgba(0,255,170,0.05)", border: "1px solid rgba(0,255,170,0.2)", margin: "24px 0 8px" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#00FFAA", marginBottom: 10, letterSpacing: "0.05em" }}>
            CONTACT TO BUY
          </div>
          <p style={{ fontSize: 15, color: "#CBD5E1", lineHeight: 1.8, margin: 0 }}>
            <strong style={{ color: "#fff" }}>Sollabs Tech Phones</strong>{" · "}
            <strong style={{ color: "#fff" }}>Madurai, Tamil Nadu</strong>{" · Ships across India · "}
            {"WhatsApp: "}<strong style={{ color: "#fff" }}>+91 90038 50743</strong>
            <br />
            Phones: <strong style={{ color: "#fff" }}>Used iPhones · ASUS ROG · Rugged phones</strong>
          </p>
        </div>

        <h2 style={h2Style}>What second hand phones does Sollabs Tech sell?</h2>
        <p style={pStyle}>
          Sollabs Tech Phones stocks high-end models only. No budget phones, no mid-range models — only
          phones that are worth owning second-hand:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 8 }}>
          {models.map((m) => (
            <div key={m.title} style={{ padding: "20px 22px", borderRadius: 14, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span style={{ fontSize: 32, flexShrink: 0 }}>{m.icon}</span>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "white", marginBottom: 6 }}>{m.title}</div>
                  <div style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.7 }}>{m.desc}</div>
                  {m.price && (
                    <div style={{ marginTop: 8, fontSize: 13, fontWeight: 600, color: "#00FFAA" }}>{m.price}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={h2Style}>Why buy a second hand phone from Sollabs Tech?</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 8 }}>
          {whyBuy.map((w) => (
            <div key={w.title} style={{ padding: "16px 20px", borderRadius: 14, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 6 }}>{w.title}</div>
              <div style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.7 }}>{w.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={h2Style}>What to check before buying a second hand phone</h2>
        <p style={pStyle}>
          Whether you buy from us or anywhere else, always verify these before paying:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 12 }}>
          {[
            { num: "1", text: "Ask for the original bill (invoice) — it confirms the phone is genuine and not stolen." },
            { num: "2", text: "Check the IMEI number. Dial *#06# on the phone and verify it matches the box and bill. Check the IMEI on ceir.gov.in to confirm it is not blacklisted." },
            { num: "3", text: "Test screen, camera, battery health, all buttons, speakers, and mic before you pay." },
            { num: "4", text: "Check iCloud lock (for iPhone) — the previous owner must remove their Apple ID before you can use it." },
            { num: "5", text: "Buy from a seller who has a WhatsApp contact and stands behind what they sell." },
          ].map((item) => (
            <div key={item.num} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 18px", borderRadius: 12, background: "rgba(0,255,170,0.03)", border: "1px solid rgba(0,255,170,0.1)" }}>
              <span style={{ fontSize: 13, fontWeight: 800, color: "#00FFAA", flexShrink: 0, width: 20, paddingTop: 1 }}>{item.num}.</span>
              <span style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.7 }}>{item.text}</span>
            </div>
          ))}
        </div>

        <h2 style={h2Style}>Current phone available</h2>
        <div style={{ padding: "22px 26px", borderRadius: 16, background: "rgba(0,102,255,0.08)", border: "1px solid rgba(0,102,255,0.25)", marginBottom: 8 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#00AAFF", marginBottom: 10, letterSpacing: "0.05em" }}>NOW AVAILABLE</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 6 }}>ASUS ROG Phone 5s Pro — ₹25,000</div>
          <p style={{ fontSize: 14, color: "#CBD5E1", lineHeight: 1.7, margin: "0 0 16px" }}>
            Brand-new condition — no scratches, no dents, no dust. Complete with original box and bill.
            Snapdragon 8 Gen 1, 6.78&quot; 144Hz AMOLED, 6000mAh battery. One unit only.
          </p>
          <Link
            href="/blog/asus-rog-phone-5s-pro-price-madurai"
            style={{ display: "inline-block", padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "linear-gradient(135deg,#0066FF,#0099FF)", color: "white", textDecoration: "none" }}
          >
            View Full Listing →
          </Link>
        </div>

        {/* FAQ */}
        <h2 style={h2Style}>Frequently asked questions</h2>
        {faqs.map((f) => (
          <div key={f.q} style={{ marginBottom: 14, padding: "18px 20px", borderRadius: 12, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 8 }}>{f.q}</div>
            <div style={{ fontSize: 14, color: "#6B7A94", lineHeight: 1.75 }}>{f.a}</div>
          </div>
        ))}

        {/* CTA */}
        <div style={{ marginTop: 44, padding: "28px", borderRadius: 20, background: "linear-gradient(135deg, rgba(0,255,170,0.08), rgba(0,170,255,0.06))", border: "1px solid rgba(0,255,170,0.2)" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "white", marginBottom: 10 }}>
            Ready to buy a second hand phone in Madurai?
          </h2>
          <p style={{ fontSize: 14, color: "#CBD5E1", lineHeight: 1.8, marginBottom: 18 }}>
            Message Sollabs Tech on WhatsApp. Tell us which phone model you want and we will check current stock,
            confirm condition details, and share price — before you travel or pay anything.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "linear-gradient(135deg,#00FFAA,#00AAFF)", color: "#050A18", textDecoration: "none" }}
            >
              💬 WhatsApp: +91 90038 50743
            </a>
            <Link href="/blog/asus-rog-phone-5s-pro-price-madurai" style={{ padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "white", textDecoration: "none" }}>
              ROG Phone 5s Pro — ₹25,000
            </Link>
            <Link href="/computers" style={{ padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "white", textDecoration: "none" }}>
              Browse Laptops & PCs
            </Link>
          </div>
        </div>

        <div style={{ marginTop: 24, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <Link href="/blog" style={{ color: "#00AAFF", textDecoration: "none", fontSize: 14, fontWeight: 600 }}>
            &larr; Back to all articles
          </Link>
        </div>
      </div>
    </article>
  );
}
