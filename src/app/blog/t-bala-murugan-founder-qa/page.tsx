import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "T Bala Murugan on Building Sollabs Tech: A Founder Q&A",
  description:
    "Sollabs Tech founder T Bala Murugan on starting solo in Madurai in 2020, growing into software and hardware, the 2024 award, and what he would tell first-time founders.",
  keywords: [
    "T Bala Murugan interview",
    "T Bala Murugan Q&A",
    "Sollabs Tech founder interview",
    "Bala Murugan founder",
    "young entrepreneur Madurai",
    "T Bala Murugan advice",
    "Sollabs Tech founder",
    "how Sollabs Tech started",
  ],
  alternates: { canonical: "/blog/t-bala-murugan-founder-qa" },
  openGraph: {
    title: "T Bala Murugan on Building Sollabs Tech: A Founder Q&A",
    description:
      "A condensed Q&A with Sollabs Tech founder T Bala Murugan — from a one-person web studio in Madurai to two technology ventures and a team of around 40.",
    url: "https://www.sollabstech.com/blog/t-bala-murugan-founder-qa",
    type: "article",
    images: [
      {
        url: "/founder/t-bala-murugan-founder-madurai-02.jpg",
        width: 1100,
        height: 880,
        alt: "T Bala Murugan, founder of Sollabs Tech, Madurai",
      },
    ],
  },
};

const PUBLISHED_ISO = "2026-09-02";
const PUBLISHED_HUMAN = "2 September 2026";
const CANONICAL = "https://www.sollabstech.com/blog/t-bala-murugan-founder-qa";
const HERO = "/founder/t-bala-murugan-founder-madurai-02.jpg";

type Photo = { src: string; w: number; h: number; alt: string };

const qa: { q: string; a: string[]; photo?: Photo }[] = [
  {
    q: "Take us back to the start — how did Sollabs Tech begin?",
    a: [
      "I was born in 2004 in Madurai, Tamil Nadu — my parents are Thandapani and Murugeswari — and I still live and work here.",
      "I started Sollabs Tech in 2020, on my own. There was no team and no outside money. It was just website and e-commerce projects, taken on one at a time.",
    ],
    photo: {
      src: "/founder/t-bala-murugan-founder-madurai-01.jpg",
      w: 732,
      h: 1100,
      alt: "T Bala Murugan, founder of Sollabs Tech",
    },
  },
  {
    q: "What did those early solo years teach you?",
    a: [
      "Every project was also a lesson — how to scope work properly, how to keep a client informed, how to ship on a deadline without cutting corners.",
      "The difficult projects, the ones that went wrong, taught me the most. I started treating them as stepping stones instead of setbacks.",
    ],
  },
  {
    q: "How did the work grow beyond websites?",
    a: [
      "Referrals came in, and early clients came back with new work. That pulled Sollabs Tech into full software development — custom business tools, admin dashboards, automation for small and mid-sized companies.",
      "Around the same time I moved into computer hardware: sourcing and quality-checking laptops, and building custom PCs to order. To keep up, I built a small team that shares the same standard for doing the work properly the first time.",
    ],
    photo: {
      src: "/founder/t-bala-murugan-founder-madurai-03.jpg",
      w: 732,
      h: 1100,
      alt: "Bala Murugan, founder of Sollabs Tech, Madurai",
    },
  },
  {
    q: "2024 was a milestone year. Tell us about the award.",
    a: [
      "In 2024 my work was recognised with an award. The trophy itself matters less than what it signalled — that the direction was right, and that the effort was being noticed beyond my own client list.",
    ],
    photo: {
      src: "/founder/t-bala-murugan-founder-madurai-04.jpg",
      w: 619,
      h: 1100,
      alt: "T Bala Murugan, Sollabs Tech founder",
    },
  },
  {
    q: "Where does Sollabs Tech stand today?",
    a: [
      "In 2026 the business runs as two ventures under one name.",
      "Sollabs Tech handles websites, e-commerce stores and custom software for businesses across India. Sollabs Tech Laptop & Custom PC handles quality-checked laptops, custom PC builds and support.",
      "Between the two, close to 40 people now work on Sollabs Tech projects.",
    ],
  },
  {
    q: "What do you credit the growth to?",
    a: [
      "It was not overnight, and it was not one lucky break. Consistency, learning from every project, staying steady when things went wrong, and the willingness to keep going when progress felt slow — that is what actually moved things forward.",
    ],
    photo: {
      src: "/founder/t-bala-murugan-founder-madurai-05.jpg",
      w: 732,
      h: 1100,
      alt: "T Bala Murugan, founder of the Sollabs Tech software and computer company",
    },
  },
  {
    q: "What would you tell someone starting with nothing but an idea?",
    a: [
      "That a real company can be built from little more than an idea and the discipline to work at it. I am proof that you do not need to start with capital or connections.",
      "Start with the work in front of you, do it properly, and let it compound.",
    ],
  },
  {
    q: "What is next?",
    a: [
      "I treat where we are now as a starting point, not a finish line. The goal is to keep building stronger businesses from Madurai, create more jobs locally, and show other first-time founders what is possible.",
    ],
    photo: {
      src: "/founder/t-bala-murugan-founder-madurai-06.jpg",
      w: 732,
      h: 1100,
      alt: "Bala Murugan, Sollabs Tech founder, Tamil Nadu",
    },
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Who is T Bala Murugan?",
    a: "T Bala Murugan, known as Bala, is the founder of Sollabs Tech, a software and computer company based in Madurai, Tamil Nadu, India. He started the company in 2020 and now runs two ventures covering website development, e-commerce, custom software, laptops and custom PC building.",
  },
  {
    q: "When did T Bala Murugan start Sollabs Tech?",
    a: "He started Sollabs Tech in 2020 in Madurai, working alone on website and e-commerce projects before expanding into software development and computer hardware.",
  },
  {
    q: "How big is Sollabs Tech now?",
    a: "As of 2026, close to 40 people work across the two Sollabs Tech ventures — one focused on software and one on laptops and custom PCs.",
  },
  {
    q: "How can I contact T Bala Murugan or Sollabs Tech?",
    a: "Sollabs Tech can be reached by phone or WhatsApp on +91 90038 50743 and by email at sollabstech@gmail.com. There is more detail on the Sollabs Tech About page.",
  },
];

const pStyle = { fontSize: 15, color: "#94A3B8", lineHeight: 1.85, marginBottom: 12 } as const;

function InlinePhoto({ photo }: { photo: Photo }) {
  return (
    <figure style={{ margin: "24px auto", maxWidth: photo.w >= photo.h ? 620 : 380 }}>
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.w}
        height={photo.h}
        sizes="(max-width: 800px) 90vw, 620px"
        style={{ width: "100%", height: "auto", borderRadius: 14, border: "1px solid rgba(255,255,255,0.08)" }}
      />
    </figure>
  );
}

export default function BalaMuruganFounderQAPage() {
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
    image: `https://www.sollabstech.com${HERO}`,
    url: CANONICAL,
    parent: [
      { "@type": "Person", name: "Thandapani" },
      { "@type": "Person", name: "Murugeswari" },
    ],
    worksFor: { "@type": "Organization", name: "Sollabs Tech", url: "https://www.sollabstech.com" },
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
    headline: "T Bala Murugan on Building Sollabs Tech: A Founder Q&A",
    description:
      "A condensed Q&A with Sollabs Tech founder T Bala Murugan about starting the company in Madurai in 2020 and growing it into two technology ventures.",
    image: `https://www.sollabstech.com${HERO}`,
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
      { "@type": "ListItem", position: 3, name: "T Bala Murugan: Founder Q&A", item: CANONICAL },
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
          <span style={{ color: "#94A3B8" }}>T Bala Murugan: Founder Q&amp;A</span>
        </nav>

        {/* Tag + date */}
        <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 20, flexWrap: "wrap" }}>
          <span style={{ padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600, background: "rgba(0,102,255,0.15)", border: "1px solid rgba(0,102,255,0.3)", color: "#00AAFF" }}>
            Founder Q&amp;A
          </span>
          <span style={{ fontSize: 13, color: "#475569" }}>{PUBLISHED_HUMAN}</span>
          <span style={{ fontSize: 13, color: "#475569" }}>&middot; 6 min read</span>
        </div>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: 20 }}>
          T Bala Murugan on Building Sollabs Tech: A Founder Q&amp;A
        </h1>

        {/* Hero image */}
        <figure style={{ margin: "0 0 20px" }}>
          <Image
            src={HERO}
            alt="T Bala Murugan, founder of Sollabs Tech, Madurai, Tamil Nadu"
            width={1100}
            height={880}
            priority
            sizes="(max-width: 800px) 100vw, 760px"
            style={{ width: "100%", height: "auto", borderRadius: 16, border: "1px solid rgba(255,255,255,0.08)" }}
          />
        </figure>

        <p style={{ fontSize: 14, color: "#64748B", fontStyle: "italic", lineHeight: 1.7, marginBottom: 32, paddingBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          {"This Q&A is condensed and lightly edited from T Bala Murugan's own written account of how Sollabs Tech started. Photos courtesy of Sollabs Tech."}
        </p>

        {qa.map((item) => (
          <section key={item.q} style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#ffffff", marginBottom: 12 }}>{item.q}</h2>
            {item.a.map((para, i) => (
              <p key={i} style={pStyle}>{para}</p>
            ))}
            {item.photo && <InlinePhoto photo={item.photo} />}
          </section>
        ))}

        {/* FAQ */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#ffffff", marginTop: 24, marginBottom: 14 }}>
          Frequently asked questions
        </h2>
        {faqs.map((f) => (
          <div key={f.q} style={{ marginBottom: 14, padding: "18px 20px", borderRadius: 12, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 8 }}>{f.q}</div>
            <div style={{ fontSize: 14, color: "#6B7A94", lineHeight: 1.75 }}>{f.a}</div>
          </div>
        ))}

        {/* Related */}
        <div style={{ marginTop: 44, padding: "28px", borderRadius: 20, background: "linear-gradient(135deg, rgba(0,102,255,0.15), rgba(0,153,255,0.08))", border: "1px solid rgba(0,102,255,0.3)" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "white", marginBottom: 10 }}>Read more</h2>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/blog/bala-murugan-founder-story" style={{ padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "white", textDecoration: "none" }}>
              The founder story
            </Link>
            <Link href="/blog/sollabs-tech-founder-bala-murugan" style={{ padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "white", textDecoration: "none" }}>
              Who founded Sollabs Tech
            </Link>
            <Link href="/about" style={{ padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "linear-gradient(135deg,#0066FF,#0099FF)", color: "white", textDecoration: "none" }}>
              About the company
            </Link>
          </div>
        </div>

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
