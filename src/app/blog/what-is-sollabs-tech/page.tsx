import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Sollabs Tech? (Also Known as Sollab Tech, Solabs Tech) – Madurai, India",
  description:
    "Searching for Sollab Tech, Solabs Tech, Sollabstech, or Solartec Madurai? You've found us. Sollabs Tech is a software development and laptop company based in Madurai, Tamil Nadu.",
  keywords: [
    "sollabs tech",
    "sollab tech",
    "solabs tech",
    "sollabstech",
    "sollab tech madurai",
    "solabs tech madurai",
    "sollabs tech laptop",
    "sollab tech laptop madurai",
    "sollabs tech software",
    "solar tech madurai",
    "solartec madurai",
    "laptop company madurai",
    "software company madurai",
    "sollabs tech india",
    "who is sollabs tech",
    "what is sollabs tech",
    "sollabs tech contact",
  ],
  alternates: { canonical: "/blog/what-is-sollabs-tech" },
  openGraph: {
    title: "What Is Sollabs Tech? (Sollab Tech, Solabs Tech) – Madurai",
    description:
      "Searching for Sollab Tech or Solabs Tech in Madurai? This is the correct page. Sollabs Tech is a software development and laptop sales company serving all of India.",
    url: "https://www.sollabstech.com/blog/what-is-sollabs-tech",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is 'Sollab Tech' the same as 'Sollabs Tech'?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sollabs Tech (officially spelled S-O-L-L-A-B-S T-E-C-H) is often misheard or mistyped as 'Sollab Tech'. Both refer to the same company — a software development and laptop sales company based in Madurai, Tamil Nadu, India.",
      },
    },
    {
      "@type": "Question",
      name: "Is 'Solabs Tech' the same as 'Sollabs Tech'?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. 'Solabs Tech' is a common misspelling of 'Sollabs Tech'. The correct spelling has two L's: Sollabs Tech. We're based in Madurai and deliver laptops and software services across India.",
      },
    },
    {
      "@type": "Question",
      name: "What does Sollabs Tech do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sollabs Tech is a dual-service technology company in Madurai, India. We build custom software (mobile apps, websites, ERP, CRM) for businesses, and we sell quality-checked refurbished and budget laptops & custom PCs delivered across India.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Sollabs Tech located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sollabs Tech is based in Madurai, Tamil Nadu, India. We serve customers across all of India for both laptop delivery and software development projects.",
      },
    },
    {
      "@type": "Question",
      name: "How do I contact Sollabs Tech?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can reach Sollabs Tech at: Phone/WhatsApp: +91 90038 50743, Email: sollabstech@gmail.com, Website: www.sollabstech.com",
      },
    },
  ],
};

export default function WhatIsSollabsTech() {
  return (
    <article style={{ paddingTop: 100, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ maxWidth: 760, margin: "0 auto" }}>

        {/* Breadcrumb */}
        <nav style={{ fontSize: 13, color: "#475569", marginBottom: 32, display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "#475569", textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <Link href="/blog" style={{ color: "#475569", textDecoration: "none" }}>Blog</Link>
          <span>›</span>
          <span style={{ color: "#94A3B8" }}>What Is Sollabs Tech?</span>
        </nav>

        {/* Tag + Date */}
        <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 20, flexWrap: "wrap" }}>
          <span style={{ padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600, background: "rgba(0,102,255,0.15)", border: "1px solid rgba(0,102,255,0.3)", color: "#00AAFF" }}>
            About Us
          </span>
          <span style={{ fontSize: 13, color: "#475569" }}>August 17, 2026</span>
          <span style={{ fontSize: 13, color: "#475569" }}>· 5 min read</span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: 20 }}>
          What Is Sollabs Tech?<br />
          <span style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", fontWeight: 600, color: "#64748B" }}>
            (Also searched as: Sollab Tech, Solabs Tech, Sollabstech)
          </span>
        </h1>

        <p style={{ fontSize: 17, color: "#94A3B8", lineHeight: 1.8, marginBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 32 }}>
          If you searched for <strong style={{ color: "#CBD5E1" }}>"Sollab Tech"</strong>, <strong style={{ color: "#CBD5E1" }}>"Solabs Tech"</strong>, <strong style={{ color: "#CBD5E1" }}>"Sollabstech"</strong>, or even <strong style={{ color: "#CBD5E1" }}>"Solar Tech Madurai"</strong> — you found the right place. Here's exactly who we are, what we do, and why there's only one correct spelling.
        </p>

        {/* Name clarification box */}
        <div style={{ padding: "24px 28px", borderRadius: 16, background: "rgba(0,102,255,0.08)", border: "1px solid rgba(0,102,255,0.25)", marginBottom: 48 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#00AAFF", marginBottom: 16, letterSpacing: "0.05em" }}>
            🔤 HOW TO SPELL OUR NAME
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              ["✅ Correct", "Sollabs Tech", "#22c55e"],
              ["✅ Also fine", "SollabsTech / Sollabstech", "#22c55e"],
              ["❌ Close but wrong", "Sollab Tech (missing an S)", "#f59e0b"],
              ["❌ Close but wrong", "Solabs Tech (missing an L)", "#f59e0b"],
              ["❌ Different company", "Solar Tech / Solartec", "#ef4444"],
            ].map(([label, name, color]) => (
              <div key={name} style={{ display: "flex", alignItems: "center", gap: 14, padding: "10px 14px", borderRadius: 10, background: "rgba(255,255,255,0.03)" }}>
                <span style={{ fontSize: 13, color: color as string, fontWeight: 700, flexShrink: 0, minWidth: 140 }}>{label}</span>
                <span style={{ fontSize: 15, color: "white", fontWeight: 600 }}>{name}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: "#64748B", marginTop: 16, marginBottom: 0 }}>
            The correct name is <strong style={{ color: "#CBD5E1" }}>Sollabs Tech</strong> — short for <em>Sollabs Technology</em>. Two L's, ends with an S before "Tech".
          </p>
        </div>

        {/* Who we are */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "white", marginBottom: 14 }}>
          Who Is Sollabs Tech?
        </h2>
        <p style={{ fontSize: 15, color: "#94A3B8", lineHeight: 1.8, marginBottom: 20 }}>
          <strong style={{ color: "#CBD5E1" }}>Sollabs Tech</strong> (also written as <em>Sollabstech</em>) is a technology company founded and based in <strong style={{ color: "#CBD5E1" }}>Madurai, Tamil Nadu, India</strong>. We operate two divisions under one trusted brand:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 40 }}>
          {[
            {
              icon: "💻",
              title: "Sollabs Tech – Software",
              desc: "Custom software development for Indian businesses — mobile apps, websites, ERP systems, CRM platforms, and automation tools.",
              link: "/software",
            },
            {
              icon: "🖥️",
              title: "Sollabs Tech – Laptops",
              desc: "Quality-checked refurbished and budget laptops, gaming rigs, and custom PCs — delivered across all of India.",
              link: "/computers",
            },
          ].map((item) => (
            <Link key={item.title} href={item.link} style={{ textDecoration: "none" }}>
              <div style={{ padding: "20px 22px", borderRadius: 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", height: "100%", cursor: "pointer", transition: "border-color 0.2s" }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "white", marginBottom: 8 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: "#6B7A94", lineHeight: 1.7 }}>{item.desc}</div>
                <div style={{ marginTop: 14, fontSize: 13, color: "#00AAFF", fontWeight: 600 }}>Learn more →</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Why the confusion */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "white", marginBottom: 14 }}>
          Why Do People Spell It Differently?
        </h2>
        <p style={{ fontSize: 15, color: "#94A3B8", lineHeight: 1.8, marginBottom: 16 }}>
          When people hear <strong style={{ color: "#CBD5E1" }}>SOLLABS TECH</strong>, it can sound like several things depending on how fast it's spoken or how it's heard over a phone call. Here are the most common search variations we see — and why each happens:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
          {[
            {
              heard: "Sollab Tech",
              why: "The trailing 'S' in 'Sollabs' gets dropped when spoken fast. Very common — and both lead to the same place.",
            },
            {
              heard: "Solabs Tech",
              why: "One 'L' instead of two. The double-L is easy to miss when hearing the name for the first time.",
            },
            {
              heard: "Sollabstech (one word)",
              why: "Our domain is sollabstech.com (no space), so many people type it as one word. Totally correct!",
            },
            {
              heard: "Sollab Tech Madurai",
              why: "Customers searching locally add 'Madurai' — smart! We're based here and this search leads right to us.",
            },
            {
              heard: "Sollabs tech laptop / Sollab tech laptop",
              why: "People who bought or are looking to buy a laptop from us search with 'laptop' added. All variations of this find us.",
            },
            {
              heard: "Solar Tech / Solartec",
              why: "If the name is heard in a noisy place, 'Sollabs' can sound like 'Solar'. Note: Solar Tech and Solartec are different companies — we are Sollabs Tech.",
            },
          ].map((item) => (
            <div key={item.heard} style={{ padding: "16px 20px", borderRadius: 12, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: 16 }}>
              <div style={{ flexShrink: 0, paddingTop: 2 }}>
                <span style={{ padding: "3px 10px", borderRadius: 6, fontSize: 12, fontWeight: 700, background: "rgba(0,102,255,0.15)", color: "#00AAFF", whiteSpace: "nowrap" }}>
                  "{item.heard}"
                </span>
              </div>
              <div style={{ fontSize: 14, color: "#6B7A94", lineHeight: 1.7 }}>{item.why}</div>
            </div>
          ))}
        </div>

        {/* Contact section */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "white", marginBottom: 14 }}>
          Sollabs Tech – Official Contact Details
        </h2>
        <p style={{ fontSize: 15, color: "#94A3B8", lineHeight: 1.8, marginBottom: 20 }}>
          Whether you typed <em>Sollab Tech</em>, <em>Solabs Tech</em>, or the correct <strong style={{ color: "#CBD5E1" }}>Sollabs Tech</strong> — here's how to reach us directly:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 40 }}>
          {[
            { icon: "📞", label: "Phone / WhatsApp", value: "+91 90038 50743", href: "tel:+919003850743" },
            { icon: "📧", label: "Email", value: "sollabstech@gmail.com", href: "mailto:sollabstech@gmail.com" },
            { icon: "🌐", label: "Website", value: "www.sollabstech.com", href: "https://www.sollabstech.com" },
            { icon: "📍", label: "Location", value: "Madurai, Tamil Nadu, India", href: "https://maps.google.com/?q=Madurai,Tamil+Nadu" },
          ].map((item) => (
            <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>
              <div style={{ padding: "16px 18px", borderRadius: 14, background: "rgba(0,102,255,0.06)", border: "1px solid rgba(0,102,255,0.15)", transition: "border-color 0.2s" }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>{item.icon}</div>
                <div style={{ fontSize: 12, color: "#6B7A94", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>{item.label}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#00AAFF" }}>{item.value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "white", marginBottom: 20 }}>
          Frequently Asked Questions
        </h2>
        {[
          {
            q: "Is 'Sollab Tech Madurai' the same as Sollabs Tech?",
            a: "Yes — 'Sollab Tech Madurai' is simply a common misspelling of our full name, Sollabs Tech. We're based in Madurai, Tamil Nadu, and the correct spelling is Sollabs Tech (with two L's and an S at the end).",
          },
          {
            q: "Does Sollabs Tech only serve Madurai customers?",
            a: "No. While we're headquartered in Madurai, we deliver laptops and custom PCs across all of India. Our software development services also serve clients nationwide and internationally.",
          },
          {
            q: "Is Sollabs Tech a registered company?",
            a: "Yes. Sollabs Tech is a registered business entity operating in Madurai, Tamil Nadu, India, with a dedicated team handling software development and laptop sales.",
          },
          {
            q: "Why does Google show wrong results when I search 'Sollab Tech'?",
            a: "Because 'Sollab Tech' is a misspelling, Google may show unrelated companies. For best results, search 'Sollabs Tech' (with two L's and an S) or go directly to www.sollabstech.com.",
          },
          {
            q: "Are Solar Tech and Sollabs Tech the same company?",
            a: "No. Solar Tech (or Solartec) is a completely different company. Sollabs Tech is a software & laptop company in Madurai. If you were looking for us, you're in the right place!",
          },
        ].map(({ q, a }) => (
          <div key={q} style={{ marginBottom: 16, padding: "18px 20px", borderRadius: 12, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 8 }}>Q: {q}</div>
            <div style={{ fontSize: 14, color: "#6B7A94", lineHeight: 1.7 }}>A: {a}</div>
          </div>
        ))}

        {/* Final CTA */}
        <div style={{ marginTop: 48, padding: "32px", borderRadius: 20, background: "linear-gradient(135deg, rgba(0,102,255,0.15), rgba(0,153,255,0.08))", border: "1px solid rgba(0,102,255,0.3)", textAlign: "center" }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🚀</div>
          <h3 style={{ fontSize: 20, fontWeight: 800, color: "white", marginBottom: 8 }}>
            You found the right Sollabs Tech
          </h3>
          <p style={{ fontSize: 14, color: "#94A3B8", marginBottom: 24 }}>
            Whether you need software built for your business or a quality laptop delivered to your door — we're here.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/computers"
              style={{ padding: "12px 24px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "linear-gradient(135deg,#0066FF,#0099FF)", color: "white", textDecoration: "none" }}
            >
              🖥️ Browse Laptops
            </Link>
            <Link
              href="/software"
              style={{ padding: "12px 24px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "white", textDecoration: "none" }}
            >
              💡 Our Software Services
            </Link>
            <a
              href="https://wa.me/919003850743?text=Hi Sollabs Tech, I found you via search"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "12px 24px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.3)", color: "#25D366", textDecoration: "none" }}
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 560px) {
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </article>
  );
}
