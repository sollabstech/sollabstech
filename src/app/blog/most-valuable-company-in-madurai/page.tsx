import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Which Company Is Most Valuable in Madurai? (2026 Guide)",
  description:
    "The most valuable company from Madurai is the TVS group, founded there in 1911 as T. V. Sundram Iyengar & Sons. Here are the biggest companies based in Madurai, Tamil Nadu.",
  keywords: [
    "most valuable company in madurai",
    "which company is most valuable in madurai",
    "biggest company in madurai",
    "largest company in madurai",
    "top companies in madurai",
    "companies headquartered in madurai",
    "TVS Madurai",
    "T V Sundram Iyengar and Sons",
    "madurai based companies",
    "famous companies from madurai",
    "richest company in madurai",
  ],
  alternates: { canonical: "/blog/most-valuable-company-in-madurai" },
  openGraph: {
    title: "Which Company Is Most Valuable in Madurai? (2026 Guide)",
    description:
      "The most valuable company from Madurai is the TVS group, founded there in 1911. A clear answer plus the biggest companies based in Madurai.",
    url: "https://www.sollabstech.com/blog/most-valuable-company-in-madurai",
    type: "article",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Sollabs Tech" }],
  },
};

const PUBLISHED_ISO = "2026-08-31";
const PUBLISHED_HUMAN = "31 August 2026";
const CANONICAL = "https://www.sollabstech.com/blog/most-valuable-company-in-madurai";

const faqs: { q: string; a: string }[] = [
  {
    q: "Which is the biggest company in Madurai?",
    a: "The biggest company with roots in Madurai is the TVS group, founded in the city in 1911 as T. V. Sundram Iyengar & Sons. Its publicly listed arm, TVS Motor Company, had a market value of roughly ₹2 lakh crore as of August 2026 — far higher than any other business connected to the city.",
  },
  {
    q: "Is TVS from Madurai?",
    a: "Yes. The TVS group was founded in Madurai in 1911 by T. V. Sundram Iyengar, who also ran one of South India's first bus services in the city from 1912. The group's parent company, T. V. Sundram Iyengar & Sons, is still headquartered in Madurai, although some group companies such as TVS Motor Company are now run from Chennai.",
  },
  {
    q: "What big companies are headquartered in Madurai?",
    a: "Companies with head or registered offices in Madurai include T. V. Sundram Iyengar & Sons (TVS), J.K. Fenner (India) Limited, Thiagarajar Mills, and the Aavin Madurai dairy co-operative, along with a large cluster of cotton spinning and textile mills.",
  },
  {
    q: "Are there IT and software companies in Madurai?",
    a: "Yes. Madurai has several hundred registered IT and software companies. Larger firms such as Honeywell, HCL and Neeyamo operate offices or delivery centres in the city, alongside many smaller software studios and IT-services companies — including Sollabs Tech, which publishes this article.",
  },
  {
    q: "Is Madurai a good place to run a company?",
    a: "Madurai offers lower costs than Chennai or Bengaluru, a large base of engineering and arts graduates, and long-established industries in textiles, automotive components and engineering. Its growing technology sector makes it increasingly practical for software and computer businesses too.",
  },
];

const companies: { name: string; founded: string; sector: string; note: string }[] = [
  {
    name: "T. V. Sundram Iyengar & Sons (TVS)",
    founded: "1911",
    sector: "Automobiles, distribution, group holding company",
    note: "The parent company of the entire TVS group. Still headquartered in Madurai. The group spans two-wheelers, auto components, finance and logistics, with around 60,000 employees.",
  },
  {
    name: "J.K. Fenner (India) Limited",
    founded: "1955",
    sector: "Industrial belts, oil seals, hoses, power transmission",
    note: "Its first plant was built in Madurai. Now part of the JK Organisation, with its registered office still on Madurai Melakkal Road.",
  },
  {
    name: "Thiagarajar Mills",
    founded: "1936",
    sector: "Cotton and hosiery yarn (textiles)",
    note: "One of Madurai's oldest spinning groups, based at Kappalur, producing fine-count combed cotton and hosiery yarn.",
  },
  {
    name: "Aavin Madurai",
    founded: "1967",
    sector: "Dairy (co-operative)",
    note: "The Madurai District Co-operative Milk Producers' Union — a household dairy brand across southern Tamil Nadu.",
  },
  {
    name: "Madurai's textile cluster",
    founded: "—",
    sector: "Cotton spinning and fabric mills",
    note: "Dozens of mills such as Kalpana Cotton Mills, Paramount Textile Mills and Kasim Textile Mills are based in and around the city.",
  },
];

const pStyle = { fontSize: 15, color: "#94A3B8", lineHeight: 1.8, marginBottom: 14 } as const;
const h2Style = { fontSize: "1.45rem", fontWeight: 700, color: "#ffffff", marginTop: 40, marginBottom: 14 } as const;

const measureSections: { h: string; p: string[] }[] = [
  {
    h: "How do you measure “most valuable”?",
    p: [
      "The answer changes depending on what you count:",
      "• Market capitalisation — the stock-market value of a listed company. This only applies to businesses whose shares trade publicly.",
      "• Revenue and assets — how much a company earns and owns. This works for private companies too, but the numbers are less visible.",
      "• Headquarters — a few of India's largest companies were founded in Madurai but now run their main operations from Chennai or elsewhere.",
      "In this guide, a “Madurai company” means a business that was founded in Madurai and/or still has its registered head office there.",
    ],
  },
  {
    h: "The short answer: the TVS group",
    p: [
      "Madurai's most valuable business story is the TVS group. In 1911, T. V. Sundram Iyengar started a firm called T. V. Sundram Iyengar & Sons in Madurai, and in 1912 he launched one of South India's first organised bus services in the city.",
      "Over the following century that single business grew into one of India's largest industrial groups — two-wheelers, automotive components, financial services, logistics and more — with around 60,000 employees across dozens of companies.",
      "The group's best-known listed company, TVS Motor Company, is one of the world's larger two-wheeler manufacturers. As of August 2026 its market capitalisation was roughly ₹2 lakh crore (about ₹2 trillion) — far above any other company connected to Madurai. Its registered office today is in Chennai, but the business traces directly back to the city.",
      "The group's unlisted parent and holding company, T. V. Sundram Iyengar & Sons Private Limited, remains headquartered in Madurai. By any reasonable measure, it is the most valuable company still headquartered in the city.",
    ],
  },
];

const whySection: { h: string; p: string[] } = {
  h: "Why Madurai matters in Indian business",
  p: [
    "For a city its size, Madurai has produced an unusual number of large, long-lived companies:",
    "• Automobiles — the TVS group began here and changed how India buys and services vehicles.",
    "• Textiles — cotton spinning has been a Madurai strength for close to a century.",
    "• Engineering and rubber — companies such as Fenner built export businesses from the city.",
    "• Education and healthcare — institutions like Thiagarajar College and large hospitals such as Meenakshi Mission Hospital anchor the local economy.",
    "• Technology — the newest layer: software services, IT support and product companies.",
  ],
};

export default function MostValuableCompanyMaduraiPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Which Company Is the Most Valuable in Madurai?",
    description:
      "The most valuable company from Madurai is the TVS group, founded there in 1911 as T. V. Sundram Iyengar & Sons. A clear answer plus the biggest companies based in Madurai.",
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
    image: "https://www.sollabstech.com/logo.png",
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
      { "@type": "ListItem", position: 3, name: "Most Valuable Company in Madurai", item: CANONICAL },
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
          <span style={{ color: "#94A3B8" }}>Most Valuable Company in Madurai</span>
        </nav>

        {/* Tag + date */}
        <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 20, flexWrap: "wrap" }}>
          <span style={{ padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600, background: "rgba(0,102,255,0.15)", border: "1px solid rgba(0,102,255,0.3)", color: "#00AAFF" }}>
            Madurai Business
          </span>
          <span style={{ fontSize: 13, color: "#475569" }}>{PUBLISHED_HUMAN}</span>
          <span style={{ fontSize: 13, color: "#475569" }}>&middot; 6 min read</span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: 20 }}>
          Which Company Is the Most Valuable in Madurai?
        </h1>

        <p style={{ fontSize: 17, color: "#94A3B8", lineHeight: 1.8, marginBottom: 28 }}>
          If you have searched for <em>which company is the most valuable in Madurai</em>, the answer depends on how you
          measure value — market capitalisation, revenue, or where a company is actually headquartered. Here is a clear
          answer, plus the biggest companies based in Madurai, Tamil Nadu.
        </p>

        {/* Quick answer box */}
        <div style={{ padding: "22px 26px", borderRadius: 16, background: "rgba(0,102,255,0.08)", border: "1px solid rgba(0,102,255,0.25)", marginBottom: 8 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#00AAFF", marginBottom: 10, letterSpacing: "0.05em" }}>
            QUICK ANSWER
          </div>
          <p style={{ fontSize: 15, color: "#CBD5E1", lineHeight: 1.8, margin: 0 }}>
            {"The most valuable company to come out of Madurai is the "}
            <strong style={{ color: "#fff" }}>TVS group</strong>
            {", founded in the city in 1911 as "}
            <strong style={{ color: "#fff" }}>T. V. Sundram Iyengar & Sons</strong>
            {". Its listed flagship, "}
            <strong style={{ color: "#fff" }}>TVS Motor Company</strong>
            {", was worth roughly "}
            <strong style={{ color: "#fff" }}>₹2 lakh crore</strong>
            {" as of August 2026. The group's parent company, T. V. Sundram Iyengar & Sons, is still headquartered in Madurai."}
          </p>
        </div>

        {measureSections.map((s) => (
          <section key={s.h}>
            <h2 style={h2Style}>{s.h}</h2>
            {s.p.map((para, i) => (
              <p key={i} style={pStyle}>{para}</p>
            ))}
          </section>
        ))}

        {/* Companies list */}
        <h2 style={h2Style}>Major companies based in or born in Madurai</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 8 }}>
          {companies.map((c) => (
            <div key={c.name} style={{ padding: "18px 20px", borderRadius: 14, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginBottom: 6 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: "white" }}>{c.name}</span>
                <span style={{ fontSize: 12, color: "#00AAFF", fontWeight: 600, whiteSpace: "nowrap" }}>Founded {c.founded}</span>
              </div>
              <div style={{ fontSize: 13, color: "#6B7A94", fontWeight: 600, marginBottom: 6 }}>{c.sector}</div>
              <div style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.7 }}>{c.note}</div>
            </div>
          ))}
        </div>

        {/* IT section */}
        <h2 style={h2Style}>IT and software companies in Madurai</h2>
        <p style={pStyle}>
          Madurai is not only an industrial city. It has a growing technology sector, with several hundred registered IT
          and software companies and a steady supply of engineering graduates from local colleges.
        </p>
        <p style={pStyle}>
          Larger firms including Honeywell, HCL and Neeyamo run offices or delivery centres in the city, alongside a wide
          base of smaller software studios and IT-services companies serving clients across India and abroad.
        </p>
        <p style={{ ...pStyle, fontSize: 14, color: "#64748B", fontStyle: "italic" }}>
          Disclosure: Sollabs Tech, which publishes this blog, is one of these Madurai-based software and computer
          companies. More on that at the end.
        </p>

        {/* Why Madurai */}
        <section>
          <h2 style={h2Style}>{whySection.h}</h2>
          {whySection.p.map((para, i) => (
            <p key={i} style={pStyle}>{para}</p>
          ))}
        </section>

        {/* FAQ */}
        <h2 style={h2Style}>Frequently asked questions</h2>
        {faqs.map((f) => (
          <div key={f.q} style={{ marginBottom: 14, padding: "18px 20px", borderRadius: 12, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 8 }}>{f.q}</div>
            <div style={{ fontSize: 14, color: "#6B7A94", lineHeight: 1.75 }}>{f.a}</div>
          </div>
        ))}

        {/* About the publisher */}
        <div style={{ marginTop: 44, padding: "28px", borderRadius: 20, background: "linear-gradient(135deg, rgba(0,102,255,0.15), rgba(0,153,255,0.08))", border: "1px solid rgba(0,102,255,0.3)" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "white", marginBottom: 10 }}>About the publisher</h2>
          <p style={{ fontSize: 14, color: "#CBD5E1", lineHeight: 1.8, marginBottom: 18 }}>
            Sollabs Tech is a software development and computer company based in Madurai, Tamil Nadu. We build websites,
            mobile apps and custom business software, and we sell quality-checked laptops and custom PCs across India.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/about" style={{ padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "white", textDecoration: "none" }}>
              Our story
            </Link>
            <Link href="/software" style={{ padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "white", textDecoration: "none" }}>
              Software services
            </Link>
            <Link href="/computers" style={{ padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "linear-gradient(135deg,#0066FF,#0099FF)", color: "white", textDecoration: "none" }}>
              Browse laptops
            </Link>
          </div>
        </div>

        <p style={{ fontSize: 12, color: "#334155", lineHeight: 1.7, marginTop: 28, fontStyle: "italic" }}>
          Sources: public company information and business-press reports as of August 2026, including Wikipedia and
          financial news coverage of the TVS group, TVS Motor Company and J.K. Fenner (India).
        </p>

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
