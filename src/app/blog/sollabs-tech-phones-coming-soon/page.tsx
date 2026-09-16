import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sollabs Tech Phones: Coming Soon — iPhone, ROG & Rugged Phones",
  description:
    "Sollabs Tech is launching Sollabs Tech Phones — quality-checked used, second-hand, refurbished and demo phones. Curated to high-end models only: iPhone, ASUS ROG gaming phones and rugged phones.",
  keywords: [
    "sollabs tech phones",
    "used iphone madurai",
    "second hand iphone india",
    "refurbished iphone madurai",
    "buy used phone madurai",
    "rog phone india",
    "gaming phone madurai",
    "rugged phone india",
    "tank phone india",
    "demo phone sale india",
    "second hand mobile madurai",
  ],
  alternates: { canonical: "/blog/sollabs-tech-phones-coming-soon" },
  openGraph: {
    title: "Sollabs Tech Phones: Coming Soon — iPhone, ROG & Rugged Phones",
    description:
      "A new venture from Sollabs Tech: quality-checked used, refurbished and demo phones — iPhone, ASUS ROG gaming phones and rugged phones only. Launching soon.",
    url: "https://www.sollabstech.com/blog/sollabs-tech-phones-coming-soon",
    type: "article",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Sollabs Tech" }],
  },
};

const PUBLISHED_ISO = "2026-09-16";
const PUBLISHED_HUMAN = "16 September 2026";
const CANONICAL = "https://www.sollabstech.com/blog/sollabs-tech-phones-coming-soon";

const pStyle = { fontSize: 15, color: "#94A3B8", lineHeight: 1.85, marginBottom: 12 } as const;
const h2Style = { fontSize: "1.4rem", fontWeight: 700, color: "#ffffff", marginTop: 40, marginBottom: 14 } as const;

const conditions: { title: string; desc: string }[] = [
  {
    title: "Used",
    desc: "Pre-owned phones traded in by a previous owner. Fully working, quality-checked, and priced well below new.",
  },
  {
    title: "Second-hand",
    desc: "The same as used — a phone that already had one owner before it reaches you, inspected before resale.",
  },
  {
    title: "Refurbished",
    desc: "A used phone that has been cleaned, tested part-by-part, and had any faulty component (battery, screen, etc.) replaced before resale.",
  },
  {
    title: "Demo units",
    desc: "Display or showroom pieces used to demonstrate a phone in-store. Lightly used, often at a steeper discount than used stock.",
  },
];

const models: { title: string; desc: string }[] = [
  {
    title: "iPhone",
    desc: "Apple's iPhone lineup — the most requested used and refurbished phone in India, and the one we will stock the most.",
  },
  {
    title: "ASUS ROG Phone",
    desc: "High-refresh-rate gaming phones built for serious mobile gaming — strong processors, big batteries, and dedicated cooling.",
  },
  {
    title: "Rugged (“tank”) phones",
    desc: "Shockproof, water-resistant, heavy-duty phones with oversized batteries — built for outdoor work, industrial use, or anyone hard on a device.",
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "What is Sollabs Tech Phones?",
    a: "Sollabs Tech Phones is an upcoming phone-sales venture from Sollabs Tech, the Madurai-based company that already sells quality-checked laptops and custom PCs. It will sell used, second-hand, refurbished and demo phones.",
  },
  {
    q: "Will Sollabs Tech Phones sell brand-new phones?",
    a: "No. The focus is entirely on used, second-hand, refurbished and demo units — not new stock. The idea is to make high-end phones affordable, the same way Sollabs Tech already does with laptops.",
  },
  {
    q: "Which phone brands and models will be available?",
    a: "At launch, the focus is on high-end models only: iPhone, ASUS ROG gaming phones, and rugged “tank” phones built for durability. The lineup may expand once the store is live.",
  },
  {
    q: "Will these phones come with a warranty?",
    a: "The plan is to carry over the same approach used for Sollabs Tech laptops: every unit quality-checked before sale, with warranty coverage. Final warranty terms will be confirmed at launch.",
  },
  {
    q: "When does Sollabs Tech Phones launch?",
    a: "Soon — an exact date has not been announced yet. The fastest way to know the moment it opens is to message Sollabs Tech on WhatsApp and ask to be notified.",
  },
  {
    q: "Where will Sollabs Tech Phones deliver to?",
    a: "The same footprint as Sollabs Tech's existing laptop business: shipping across India, based out of Madurai, Tamil Nadu.",
  },
];

export default function SollabsTechPhonesComingSoonPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Sollabs Tech Phones: Coming Soon — iPhone, ROG & Rugged Phones",
    description:
      "Sollabs Tech is launching a phone-sales venture: quality-checked used, second-hand, refurbished and demo phones, curated to high-end models like iPhone, ASUS ROG and rugged phones.",
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
      { "@type": "ListItem", position: 3, name: "Sollabs Tech Phones: Coming Soon", item: CANONICAL },
    ],
  };

  return (
    <article style={{ paddingTop: 100, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: 13, color: "#475569", marginBottom: 28, display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "#475569", textDecoration: "none" }}>Home</Link>
          <span>&rsaquo;</span>
          <Link href="/blog" style={{ color: "#475569", textDecoration: "none" }}>Blog</Link>
          <span>&rsaquo;</span>
          <span style={{ color: "#94A3B8" }}>Sollabs Tech Phones</span>
        </nav>

        {/* Tag + date */}
        <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 20, flexWrap: "wrap" }}>
          <span style={{ padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600, background: "rgba(0,102,255,0.15)", border: "1px solid rgba(0,102,255,0.3)", color: "#00AAFF" }}>
            Coming Soon
          </span>
          <span style={{ fontSize: 13, color: "#475569" }}>{PUBLISHED_HUMAN}</span>
          <span style={{ fontSize: 13, color: "#475569" }}>&middot; 4 min read</span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: 20 }}>
          Sollabs Tech Phones Is Coming Soon
        </h1>

        <p style={{ fontSize: 17, color: "#94A3B8", lineHeight: 1.85, marginBottom: 8 }}>
          Sollabs Tech is opening a new chapter: <strong style={{ color: "#fff" }}>Sollabs Tech Phones</strong>. Same
          promise as our laptops — quality-checked, honestly priced hardware — now for mobile phones too.
        </p>

        {/* Quick answer box */}
        <div style={{ padding: "22px 26px", borderRadius: 16, background: "rgba(0,102,255,0.08)", border: "1px solid rgba(0,102,255,0.25)", margin: "24px 0 8px" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#00AAFF", marginBottom: 10, letterSpacing: "0.05em" }}>
            WHAT&apos;S COMING
          </div>
          <p style={{ fontSize: 15, color: "#CBD5E1", lineHeight: 1.8, margin: 0 }}>
            Sollabs Tech Phones will sell <strong style={{ color: "#fff" }}>used, second-hand, refurbished and demo
            phones</strong> — but only high-end models: <strong style={{ color: "#fff" }}>iPhone</strong>,{" "}
            <strong style={{ color: "#fff" }}>ASUS ROG gaming phones</strong>, and{" "}
            <strong style={{ color: "#fff" }}>rugged &ldquo;tank&rdquo; phones</strong>. No new phones, and no
            low-end models — the same curated, quality-first approach we already use for laptops.
          </p>
        </div>

        <h2 style={h2Style}>What we mean by used, second-hand, refurbished and demo</h2>
        <p style={pStyle}>
          These terms get used loosely, so here is exactly what each one means at Sollabs Tech:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 8 }}>
          {conditions.map((c) => (
            <div key={c.title} style={{ padding: "16px 20px", borderRadius: 14, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: "white", marginBottom: 6 }}>{c.title}</div>
              <div style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.7 }}>{c.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={h2Style}>Only high-end models — on purpose</h2>
        <p style={pStyle}>
          We are not trying to stock every phone under the sun. Sollabs Tech Phones will focus on a short list of
          models worth buying used in the first place:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 8 }}>
          {models.map((m) => (
            <div key={m.title} style={{ padding: "16px 20px", borderRadius: 14, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: "white", marginBottom: 6 }}>{m.title}</div>
              <div style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.7 }}>{m.desc}</div>
            </div>
          ))}
        </div>
        <p style={pStyle}>
          The lineup may grow once the store is live, but the standard stays the same: if it is not worth owning
          second-hand, we will not sell it.
        </p>

        <h2 style={h2Style}>Why buy a phone from Sollabs Tech</h2>
        <p style={pStyle}>
          This is the same playbook that already works for our laptops and custom PCs: every unit checked before it
          ships, honest condition grading instead of vague labels, warranty coverage, and support on WhatsApp instead
          of a call centre. Sollabs Tech Phones will follow the same standard.
        </p>

        <h2 style={h2Style}>Want to know the moment it launches?</h2>
        <p style={pStyle}>
          We have not announced an exact date yet. The fastest way to hear first — and to tell us which model you
          are waiting for — is to message us on WhatsApp.
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
        <div style={{ marginTop: 44, padding: "28px", borderRadius: 20, background: "linear-gradient(135deg, rgba(0,102,255,0.15), rgba(0,153,255,0.08))", border: "1px solid rgba(0,102,255,0.3)" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "white", marginBottom: 10 }}>
            Be first to know when we launch
          </h2>
          <p style={{ fontSize: 14, color: "#CBD5E1", lineHeight: 1.8, marginBottom: 18 }}>
            Message us on WhatsApp and tell us whether you are after an iPhone, a ROG gaming phone, or a rugged
            phone — we will let you know as soon as Sollabs Tech Phones opens.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="https://wa.me/919003850743?text=Hi, I'd like to know when Sollabs Tech Phones launches"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "linear-gradient(135deg,#0066FF,#0099FF)", color: "white", textDecoration: "none" }}
            >
              💬 Notify me on WhatsApp
            </a>
            <Link href="/computers" style={{ padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "white", textDecoration: "none" }}>
              Browse laptops & PCs
            </Link>
            <Link href="/contact" style={{ padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "white", textDecoration: "none" }}>
              Contact us
            </Link>
          </div>
        </div>

        {/* Back to blog */}
        <div style={{ marginTop: 24, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <Link href="/blog" style={{ color: "#00AAFF", textDecoration: "none", fontSize: 14, fontWeight: 600 }}>
            &larr; Back to all articles
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 560px) {
          article h1 { font-size: 1.7rem !important; }
        }
      `}</style>
    </article>
  );
}
