import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "T Bala Murugan: The Founder Story Behind Sollabs Tech",
  description:
    "T Bala Murugan, known as Bala, started Sollabs Tech in Madurai in 2020 as a one-person web studio. Today he runs two technology ventures with a team of around 40. This is his founder story.",
  keywords: [
    "T Bala Murugan",
    "T Bala Murugan story",
    "Bala Murugan Sollabs Tech",
    "Sollabs Tech founder story",
    "who is T Bala Murugan",
    "Sollabs Tech founder",
    "Sollabs Tech owner",
    "Madurai entrepreneur",
    "young entrepreneur Madurai",
    "how Sollabs Tech started",
  ],
  alternates: { canonical: "/blog/bala-murugan-founder-story" },
  openGraph: {
    title: "T Bala Murugan: The Founder Story Behind Sollabs Tech",
    description:
      "From a one-person web studio in Madurai in 2020 to two technology ventures and a 40-person team. The story of Sollabs Tech founder T Bala Murugan.",
    url: "https://www.sollabstech.com/blog/bala-murugan-founder-story",
    type: "article",
    images: [
      {
        url: "/founder/t-bala-murugan-sollabs-tech-founder.jpg",
        width: 1536,
        height: 1229,
        alt: "T Bala Murugan, founder of Sollabs Tech, Madurai",
      },
    ],
  },
};

const PUBLISHED_ISO = "2026-09-02";
const PUBLISHED_HUMAN = "2 September 2026";
const CANONICAL = "https://www.sollabstech.com/blog/bala-murugan-founder-story";
const FOUNDER_IMG = "/founder/t-bala-murugan-sollabs-tech-founder.jpg";

const pStyle = { fontSize: 15, color: "#94A3B8", lineHeight: 1.85, marginBottom: 14 } as const;
const h2Style = { fontSize: "1.4rem", fontWeight: 700, color: "#ffffff", marginTop: 40, marginBottom: 14 } as const;

const story: { h: string; p: string[] }[] = [
  {
    h: "Growing up in Madurai",
    p: [
      "Bala was born in 2004 in Madurai, Tamil Nadu, the son of Thandapani and Murugeswari. Madurai — one of Tamil Nadu's oldest cities, and a long-standing centre for trade, textiles and, more recently, IT — is where he still lives and runs both of his companies today.",
      "He did not come from a business family or start with capital. What he had was an interest in how software and websites are actually built, and a willingness to learn it the hard way.",
    ],
  },
  {
    h: "2020: starting Sollabs Tech alone",
    p: [
      "In 2020, Bala started Sollabs Tech on his own. There was no team and no outside funding — just website and e-commerce projects, taken on one at a time.",
      "Every project doubled as a lesson: how to scope work properly, how to keep a client informed, how to ship on a deadline without cutting corners. In his own words, the difficult projects became stepping stones rather than setbacks.",
    ],
  },
  {
    h: "Growing the work beyond websites",
    p: [
      "As referrals came in and early clients returned with new work, Sollabs Tech expanded past websites into full software development — custom business tools, admin dashboards and automation for small and mid-sized companies.",
      "Around the same time, Bala moved into computer hardware: sourcing and quality-checking laptops, and building custom PCs to order. To keep up with the demand, he built a small team that shared his standard for doing the work properly the first time.",
    ],
  },
  {
    h: "2024: recognition",
    p: [
      "In 2024, Bala's work was recognised with an award. More than the trophy itself, it was a signal that the direction was right and that the effort was being noticed outside his own client list.",
    ],
  },
  {
    h: "Where things stand in 2026",
    p: [
      "Today the business runs as two ventures under one name:",
      "• Sollabs Tech — websites, e-commerce stores and custom software for businesses across India.",
      "• Sollabs Tech Laptop & Custom PC — quality-checked laptops, custom PC builds and related support.",
      "Between the two, close to 40 people now work on Sollabs Tech projects — a long way from one person taking on single website jobs in 2020.",
    ],
  },
  {
    h: "What he credits the growth to",
    p: [
      "Bala is direct about how the company grew: not overnight, and not because of one lucky break. He credits consistency, a habit of learning from every project, resilience when things went wrong, and the willingness to keep going when progress felt slow.",
      "He treats the current setup as a starting point rather than a finish line. His stated goal is to keep building stronger businesses from Madurai, create more jobs locally, and show other first-time founders that a real company can be built from little more than an idea and the discipline to work at it.",
    ],
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Who is T Bala Murugan?",
    a: "T Bala Murugan, known as Bala, is the founder of Sollabs Tech, a software and computer company based in Madurai, Tamil Nadu, India. He started the company in 2020 and today runs two ventures covering website development, e-commerce, custom software, laptops and custom PC building.",
  },
  {
    q: "When was Sollabs Tech founded?",
    a: "Sollabs Tech was founded in 2020 by T Bala Murugan in Madurai, Tamil Nadu. It began as a one-person web development studio and has since grown into a two-part technology business with a team of around 40 people.",
  },
  {
    q: "Where is T Bala Murugan from?",
    a: "T Bala Murugan is from Madurai, Tamil Nadu, India. He was born there in 2004, and he still lives in the city and runs both of his companies from it.",
  },
  {
    q: "What companies does T Bala Murugan run?",
    a: "He runs Sollabs Tech, which handles websites, e-commerce and custom software, and Sollabs Tech Laptop & Custom PC, which handles quality-checked laptops and custom PC builds.",
  },
  {
    q: "How can I contact T Bala Murugan or Sollabs Tech?",
    a: "Sollabs Tech can be reached by phone or WhatsApp on +91 90038 50743 and by email at sollabstech@gmail.com. There is more detail on the Sollabs Tech About page.",
  },
];

export default function BalaMuruganFounderStoryPage() {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "T Bala Murugan",
    alternateName: ["Bala", "Bala Murugan"],
    givenName: "Bala Murugan",
    familyName: "T",
    birthDate: "2004",
    birthPlace: { "@type": "Place", name: "Madurai, Tamil Nadu, India" },
    jobTitle: "Founder",
    description:
      "T Bala Murugan, known as Bala, is the founder of Sollabs Tech, a software development and computer company based in Madurai, Tamil Nadu, India. He started the company in 2020 and now runs two technology ventures with a team of around 40 people.",
    image: `https://www.sollabstech.com${FOUNDER_IMG}`,
    url: CANONICAL,
    parent: [
      { "@type": "Person", name: "Thandapani" },
      { "@type": "Person", name: "Murugeswari" },
    ],
    worksFor: {
      "@type": "Organization",
      name: "Sollabs Tech",
      url: "https://www.sollabstech.com",
    },
    homeLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Madurai",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
    },
    sameAs: [
      "https://www.linkedin.com/company/sollabstech/",
      "https://www.facebook.com/sollabstech/",
    ],
  };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "T Bala Murugan: The Founder Story Behind Sollabs Tech",
    description:
      "The story of how T Bala Murugan started Sollabs Tech in Madurai in 2020 and grew it into two technology ventures with a team of around 40.",
    image: `https://www.sollabstech.com${FOUNDER_IMG}`,
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
    about: { "@type": "Person", name: "T Bala Murugan" },
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
      { "@type": "ListItem", position: 3, name: "T Bala Murugan: Founder Story", item: CANONICAL },
    ],
  };

  return (
    <article style={{ paddingTop: 100, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
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
          <span style={{ color: "#94A3B8" }}>T Bala Murugan: Founder Story</span>
        </nav>

        {/* Tag + date */}
        <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 20, flexWrap: "wrap" }}>
          <span style={{ padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600, background: "rgba(0,102,255,0.15)", border: "1px solid rgba(0,102,255,0.3)", color: "#00AAFF" }}>
            Founder Story
          </span>
          <span style={{ fontSize: 13, color: "#475569" }}>{PUBLISHED_HUMAN}</span>
          <span style={{ fontSize: 13, color: "#475569" }}>&middot; 5 min read</span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: 20 }}>
          T Bala Murugan: The Founder Story Behind Sollabs Tech
        </h1>

        <p style={{ fontSize: 17, color: "#94A3B8", lineHeight: 1.85, marginBottom: 24 }}>
          {"T Bala Murugan — known to most people simply as Bala — is the founder of "}
          <Link href="/about" style={{ color: "#00AAFF", textDecoration: "none" }}>Sollabs Tech</Link>
          {", a technology company based in Madurai, Tamil Nadu. He started the business in 2020 as a one-person web development studio. Today he runs two ventures under the Sollabs Tech name, covering software and computer hardware, with a team of close to 40 people."}
        </p>

        {/* Founder image */}
        <figure style={{ margin: "0 0 8px" }}>
          <Image
            src={FOUNDER_IMG}
            alt="T Bala Murugan, founder of Sollabs Tech, Madurai, Tamil Nadu"
            width={1536}
            height={1229}
            priority
            sizes="(max-width: 800px) 100vw, 760px"
            style={{ width: "100%", height: "auto", borderRadius: 16, border: "1px solid rgba(255,255,255,0.08)" }}
          />
          <figcaption style={{ fontSize: 12, color: "#475569", marginTop: 8, textAlign: "center" }}>
            T Bala Murugan, founder of Sollabs Tech, Madurai
          </figcaption>
        </figure>

        {story.map((s) => (
          <section key={s.h}>
            <h2 style={h2Style}>{s.h}</h2>
            {s.p.map((para, i) => (
              <p key={i} style={pStyle}>{para}</p>
            ))}
          </section>
        ))}

        {/* FAQ */}
        <h2 style={h2Style}>Frequently asked questions</h2>
        {faqs.map((f) => (
          <div key={f.q} style={{ marginBottom: 14, padding: "18px 20px", borderRadius: 12, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 8 }}>{f.q}</div>
            <div style={{ fontSize: 14, color: "#6B7A94", lineHeight: 1.75 }}>{f.a}</div>
          </div>
        ))}

        {/* Related / CTA */}
        <div style={{ marginTop: 44, padding: "28px", borderRadius: 20, background: "linear-gradient(135deg, rgba(0,102,255,0.15), rgba(0,153,255,0.08))", border: "1px solid rgba(0,102,255,0.3)" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "white", marginBottom: 10 }}>More about Sollabs Tech</h2>
          <p style={{ fontSize: 14, color: "#CBD5E1", lineHeight: 1.8, marginBottom: 18 }}>
            Sollabs Tech builds websites, mobile apps and custom software, and supplies quality-checked laptops and
            custom PCs across India — all from Madurai.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/about" style={{ padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "white", textDecoration: "none" }}>
              About the company
            </Link>
            <Link href="/blog/sollabs-tech-founder-bala-murugan" style={{ padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "white", textDecoration: "none" }}>
              Who founded Sollabs Tech
            </Link>
            <Link href="/software" style={{ padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "linear-gradient(135deg,#0066FF,#0099FF)", color: "white", textDecoration: "none" }}>
              Software services
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
