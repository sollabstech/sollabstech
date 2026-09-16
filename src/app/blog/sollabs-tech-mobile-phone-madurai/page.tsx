import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sollabs Tech Mobile & Phone Sales – Used iPhones, ROG & More | Madurai",
  description:
    "Yes — Sollabs Tech now sells phones. Used iPhones, ASUS ROG gaming phones, and rugged mobiles. Quality-checked, honestly priced, with box & bill. Based in Madurai, ships across India.",
  keywords: [
    "sollabstech mobile",
    "sollabs tech phone",
    "sollabstech phone",
    "sollabs tech mobile",
    "sollabstech selling phones",
    "sollabs tech mobile sale",
    "sollabstech iphone",
    "sollabstech rog phone",
    "sollabs tech used mobile",
    "sollabstech second hand phone",
    "sollabs tech phones madurai",
    "buy phone from sollabs tech",
  ],
  alternates: { canonical: "/blog/sollabs-tech-mobile-phone-madurai" },
  openGraph: {
    title: "Sollabs Tech Mobile & Phone Sales – Used iPhones, ROG & More",
    description:
      "Sollabs Tech now sells phones — used iPhones, ASUS ROG gaming phones, and rugged mobiles. Quality-checked, with box & bill, shipped across India from Madurai.",
    url: "https://www.sollabstech.com/blog/sollabs-tech-mobile-phone-madurai",
    type: "article",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Sollabs Tech" }],
  },
};

const PUBLISHED_ISO = "2026-09-16";
const PUBLISHED_HUMAN = "16 September 2026";
const CANONICAL = "https://www.sollabstech.com/blog/sollabs-tech-mobile-phone-madurai";
const WHATSAPP = "https://wa.me/919003850743?text=Hi, I'm looking for a phone from Sollabs Tech";

const pStyle = { fontSize: 15, color: "#94A3B8", lineHeight: 1.85, marginBottom: 12 } as const;
const h2Style = { fontSize: "1.4rem", fontWeight: 700, color: "#ffffff", marginTop: 40, marginBottom: 14 } as const;

const phones: { icon: string; title: string; desc: string }[] = [
  {
    icon: "🍎",
    title: "Used iPhones",
    desc: "Apple iPhone models — the most in-demand used phone in India. We stock quality-checked units with original bill where available.",
  },
  {
    icon: "🎮",
    title: "ASUS ROG Gaming Phones",
    desc: "High-refresh-rate gaming phones with Snapdragon processors, giant batteries, and gaming-first features. Ideal for serious mobile gamers.",
  },
  {
    icon: "🛡️",
    title: "Rugged / Tank Phones",
    desc: "Shockproof, waterproof, heavy-duty phones built for outdoor and industrial use — massive batteries and military-grade build quality.",
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Does Sollabs Tech sell mobile phones?",
    a: "Yes. Sollabs Tech Phones is the mobile-sales venture from Sollabs Tech. It sells quality-checked used, second-hand, refurbished and demo high-end phones — iPhone, ASUS ROG gaming phones, and rugged models.",
  },
  {
    q: "What is Sollabs Tech Mobile or Sollabs Tech Phone?",
    a: "When people search for 'Sollabs Tech mobile' or 'Sollabs Tech phone', they are looking for Sollabs Tech Phones — the phone-sales arm of Sollabs Tech, the Madurai-based technology company. It sells used and new high-end mobiles.",
  },
  {
    q: "Which phone brands does Sollabs Tech sell?",
    a: "Sollabs Tech focuses on high-end brands only: Apple iPhone, ASUS ROG gaming phones, and rugged 'tank' phones built for durability. Low-end or budget models are not sold.",
  },
  {
    q: "Are Sollabs Tech phones new or used?",
    a: "Both. Sollabs Tech sells used, second-hand, refurbished and demo phones — as well as brand-new units where available. Every phone is quality-checked before sale. Some units come with original box and bill.",
  },
  {
    q: "How do I buy a phone from Sollabs Tech?",
    a: "Message Sollabs Tech directly on WhatsApp at +91 90038 50743. Tell them which model you want and they will confirm availability, price, and condition details.",
  },
  {
    q: "Does Sollabs Tech ship phones across India?",
    a: "Yes. Sollabs Tech ships phones pan-India from its base in Madurai, Tamil Nadu — the same delivery reach as its existing laptop business.",
  },
  {
    q: "Is Sollabs Tech a real company?",
    a: "Yes. Sollabs Tech is a real technology company based in Madurai, Tamil Nadu, founded in 2020 by T Bala Murugan. It operates three ventures: software development, laptop & PC sales, and phone sales.",
  },
];

export default function SollabsTechMobilePhonePage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Sollabs Tech Mobile & Phone Sales – Used iPhones, ROG & More",
    description:
      "Sollabs Tech now sells phones. Used iPhones, ASUS ROG gaming phones, and rugged mobiles — quality-checked, honestly priced, shipped across India from Madurai.",
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
    keywords: "sollabstech mobile, sollabs tech phone, used iphone madurai, rog phone madurai, sollabs tech phones",
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
      { "@type": "ListItem", position: 3, name: "Sollabs Tech Mobile & Phones", item: CANONICAL },
    ],
  };

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sollabs Tech",
    url: "https://www.sollabstech.com",
    logo: "https://www.sollabstech.com/logo.png",
    description: "Sollabs Tech is a technology company from Madurai, Tamil Nadu that sells software development services, laptops & custom PCs, and quality-checked mobile phones.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Madurai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "+91-90038-50743",
      availableLanguage: ["English", "Tamil"],
    },
  };

  return (
    <article style={{ paddingTop: 100, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />

      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: 13, color: "#475569", marginBottom: 28, display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "#475569", textDecoration: "none" }}>Home</Link>
          <span>&rsaquo;</span>
          <Link href="/blog" style={{ color: "#475569", textDecoration: "none" }}>Blog</Link>
          <span>&rsaquo;</span>
          <span style={{ color: "#94A3B8" }}>Sollabs Tech Mobile & Phones</span>
        </nav>

        {/* Tag + date */}
        <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 20, flexWrap: "wrap" }}>
          <span style={{ padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600, background: "rgba(0,255,170,0.1)", border: "1px solid rgba(0,255,170,0.3)", color: "#00FFAA" }}>
            Phones
          </span>
          <span style={{ fontSize: 13, color: "#475569" }}>{PUBLISHED_HUMAN}</span>
          <span style={{ fontSize: 13, color: "#475569" }}>&middot; 4 min read</span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: 20 }}>
          Sollabs Tech Now Sells Phones
        </h1>

        <p style={{ fontSize: 17, color: "#94A3B8", lineHeight: 1.85, marginBottom: 8 }}>
          {"If you searched for "}
          <strong style={{ color: "#fff" }}>Sollabs Tech mobile</strong>
          {" or "}
          <strong style={{ color: "#fff" }}>Sollabs Tech phone</strong>
          {" — yes, you found the right place. Sollabs Tech now sells phones through "}
          <Link href="/blog/sollabs-tech-phones-coming-soon" style={{ color: "#00FFAA", textDecoration: "none" }}>
            Sollabs Tech Phones
          </Link>
          {", a dedicated phone-sales venture from the same team that already sells laptops and custom PCs."}
        </p>

        {/* Quick answer box */}
        <div style={{ padding: "22px 26px", borderRadius: 16, background: "rgba(0,255,170,0.05)", border: "1px solid rgba(0,255,170,0.2)", margin: "24px 0 8px" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#00FFAA", marginBottom: 10, letterSpacing: "0.05em" }}>
            QUICK ANSWER
          </div>
          <p style={{ fontSize: 15, color: "#CBD5E1", lineHeight: 1.8, margin: 0 }}>
            <strong style={{ color: "#fff" }}>Sollabs Tech sells used, second-hand, refurbished and new high-end phones</strong>{" "}
            — iPhone, ASUS ROG gaming phones, and rugged &ldquo;tank&rdquo; phones. Quality-checked before every sale.
            Based in <strong style={{ color: "#fff" }}>Madurai, Tamil Nadu</strong>. Ships across India.
            Contact on WhatsApp: <strong style={{ color: "#fff" }}>+91 90038 50743</strong>.
          </p>
        </div>

        <h2 style={h2Style}>Which phones does Sollabs Tech sell?</h2>
        <p style={pStyle}>
          Sollabs Tech Phones focuses on high-end models only — phones that hold their value and are worth
          owning second-hand. No budget or mid-range models.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 8 }}>
          {phones.map((p) => (
            <div key={p.title} style={{ padding: "16px 20px", borderRadius: 14, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", gap: 16, alignItems: "flex-start" }}>
              <span style={{ fontSize: 30, flexShrink: 0 }}>{p.icon}</span>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "white", marginBottom: 6 }}>{p.title}</div>
                <div style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.7 }}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={h2Style}>New or used — what condition are the phones?</h2>
        <p style={pStyle}>
          Sollabs Tech Phones sells both — used, second-hand, refurbished, and demo units, as well as brand-new
          phones where available. Every unit is quality-checked before sale. Condition, box, and bill details are
          confirmed on WhatsApp before you commit to anything.
        </p>
        <p style={pStyle}>
          For example, the current listing is an{" "}
          <Link href="/blog/asus-rog-phone-5s-pro-price-madurai" style={{ color: "#00FFAA", textDecoration: "none" }}>
            ASUS ROG Phone 5s Pro in brand-new condition at ₹25,000
          </Link>
          {" — with original box and bill, no scratches, no dents, no dust."}
        </p>

        <h2 style={h2Style}>Why buy a phone from Sollabs Tech?</h2>
        <p style={pStyle}>
          The same reason people buy laptops from Sollabs Tech: honest condition description, direct WhatsApp
          support, no anonymous marketplace listing. You talk to the team, confirm everything before paying,
          and get the phone with full details — box, bill, warranty status.
        </p>
        <p style={pStyle}>
          Sollabs Tech has been operating in Madurai since 2020, with 500+ laptops sold and a track record of
          direct after-sales support. Phones follow the same standard.
        </p>

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
            Looking for a phone from Sollabs Tech?
          </h2>
          <p style={{ fontSize: 14, color: "#CBD5E1", lineHeight: 1.8, marginBottom: 18 }}>
            Message us on WhatsApp with the model you want — iPhone, ROG, or rugged — and we will confirm
            availability, condition, price, and shipping details.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "linear-gradient(135deg,#00FFAA,#00AAFF)", color: "#050A18", textDecoration: "none" }}
            >
              💬 WhatsApp Us
            </a>
            <Link href="/blog/asus-rog-phone-5s-pro-price-madurai" style={{ padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "white", textDecoration: "none" }}>
              ROG Phone 5s Pro — ₹25,000
            </Link>
            <Link href="/blog/sollabs-tech-phones-coming-soon" style={{ padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "white", textDecoration: "none" }}>
              About Sollabs Tech Phones
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
