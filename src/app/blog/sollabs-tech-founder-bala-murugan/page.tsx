import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Who Founded Sollabs Tech? Meet T Bala Murugan – Madurai",
  description: "Sollabs Tech was founded by T Bala Murugan in Madurai, Tamil Nadu. Learn about the founder, the company's story, and why Sollabs Tech is Madurai's trusted software & laptop brand.",
  keywords: [
    "T Bala Murugan", "Sollabs Tech founder", "who owns Sollabs Tech",
    "Sollabs Tech owner", "Bala Murugan Sollabs Tech", "Sollabstech founder",
    "who is the founder of Sollabs Tech", "Sollabs Tech CEO", "Madurai tech founder",
    "T Bala Murugan Madurai"
  ],
  alternates: { canonical: "/blog/sollabs-tech-founder-bala-murugan" },
  openGraph: {
    title: "Who Founded Sollabs Tech? Meet T Bala Murugan",
    description: "T Bala Murugan founded Sollabs Tech in Madurai, Tamil Nadu. The story behind India's trusted tech brand.",
    url: "https://www.sollabstech.com/blog/sollabs-tech-founder-bala-murugan",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Sollabs Tech" }],
  },
};

export default function FounderBlogPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Who Founded Sollabs Tech? Meet T Bala Murugan – Madurai, Tamil Nadu",
    "description": "Sollabs Tech was founded by T Bala Murugan in Madurai, Tamil Nadu. Learn about the founder's vision and the company's story.",
    "author": {
      "@type": "Person",
      "name": "T Bala Murugan",
      "jobTitle": "Founder & CEO",
      "worksFor": { "@type": "Organization", "name": "Sollabs Tech" }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sollabs Tech",
      "logo": { "@type": "ImageObject", "url": "https://www.sollabstech.com/logo.png" }
    },
    "datePublished": "2026-08-20",
    "dateModified": "2026-08-20",
    "url": "https://www.sollabstech.com/blog/sollabs-tech-founder-bala-murugan",
    "mainEntityOfPage": "https://www.sollabstech.com/blog/sollabs-tech-founder-bala-murugan",
  };

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "T Bala Murugan",
    "givenName": "Bala Murugan",
    "description": "T Bala Murugan, son of Thandapani, is the Founder & CEO of Sollabs Tech, based in Madurai, Tamil Nadu, India.",
    "image": "https://www.sollabstech.com/t-bala-murugan-founder-sollabs-tech.jpg",
    "jobTitle": "Founder & CEO",
    "worksFor": {
      "@type": "Organization",
      "name": "Sollabs Tech",
      "url": "https://www.sollabstech.com",
      "sameAs": [
        "https://www.linkedin.com/company/sollabstech/",
        "https://www.facebook.com/sollabstech/"
      ]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Madurai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "url": "https://www.sollabstech.com/blog/sollabs-tech-founder-bala-murugan",
    "sameAs": [
      "https://www.linkedin.com/in/sollabstech/",
      "https://www.facebook.com/bala.murugan.sollabstech"
    ]
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the founder of Sollabs Tech?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sollabs Tech was founded by T Bala Murugan in Madurai, Tamil Nadu, India. He is the Founder & CEO of the company."
        }
      },
      {
        "@type": "Question",
        "name": "Who owns Sollabs Tech?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sollabs Tech is owned and operated by T Bala Murugan, who founded the company in Madurai, Tamil Nadu in 2020."
        }
      },
      {
        "@type": "Question",
        "name": "Where is T Bala Murugan from?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "T Bala Murugan is from Madurai, Tamil Nadu, India — where he founded and runs Sollabs Tech."
        }
      },
      {
        "@type": "Question",
        "name": "What does T Bala Murugan do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "T Bala Murugan is the Founder & CEO of Sollabs Tech — a software development and laptop company based in Madurai, Tamil Nadu. He leads the company's software projects, client partnerships, and overall operations."
        }
      },
      {
        "@type": "Question",
        "name": "When was Sollabs Tech founded?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sollabs Tech was founded in 2020 by T Bala Murugan in Madurai, Tamil Nadu, India."
        }
      },
      {
        "@type": "Question",
        "name": "Who is T Bala Murugan's father?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "T Bala Murugan is the son of Thandapani. He is the Founder & CEO of Sollabs Tech, based in Madurai, Tamil Nadu."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 60, paddingLeft: 24, paddingRight: 24 }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <Link href="/blog" style={{ color: "#00AAFF", textDecoration: "none", fontSize: 14, display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 32 }}>
            ← Back to Blog
          </Link>
          <span style={{ display: "inline-block", padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600, background: "rgba(0,102,255,0.15)", border: "1px solid rgba(0,102,255,0.3)", color: "#00AAFF", marginBottom: 20 }}>
            About the Founder
          </span>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: 20 }}>
            Who Founded Sollabs Tech?<br />
            <span className="gradient-text">Meet T Bala Murugan</span>
          </h1>
          <p style={{ color: "#6B7A94", fontSize: 17, lineHeight: 1.8, marginBottom: 32 }}>
            Sollabs Tech was founded by <strong style={{ color: "#C4D0E0" }}>T Bala Murugan</strong> in Madurai, Tamil Nadu. He started the company with one goal: build honest, high-quality technology that actually helps Indian businesses grow.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", fontSize: 13, color: "#475569" }}>
            <span>👤 Written by T Bala Murugan</span>
            <span>·</span>
            <span>📍 Madurai, Tamil Nadu</span>
            <span>·</span>
            <span>📅 August 20, 2026</span>
          </div>
        </div>
      </section>

      {/* Founder Card */}
      <section style={{ padding: "0 24px 60px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap",
            padding: "36px 32px", borderRadius: 20,
            background: "rgba(0,102,255,0.06)", border: "1px solid rgba(0,102,255,0.2)",
          }}>
            <div style={{ width: 80, height: 80, borderRadius: "50%", flexShrink: 0, overflow: "hidden", border: "3px solid rgba(0,102,255,0.4)" }}>
              <Image
                src="/t-bala-murugan-founder-sollabs-tech.jpg"
                alt="T Bala Murugan – Founder & CEO of Sollabs Tech"
                width={80}
                height={80}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "white" }}>T Bala Murugan</div>
              <div style={{ fontSize: 14, color: "#00AAFF", fontWeight: 600, marginBottom: 4 }}>Founder & CEO — Sollabs Tech</div>
              <div style={{ fontSize: 13, color: "#6B7A94", marginBottom: 4 }}>Son of Thandapani &nbsp;·&nbsp; Madurai, Tamil Nadu</div>
              <div style={{ fontSize: 13, color: "#6B7A94" }}>📍 Madurai, Tamil Nadu, India &nbsp;|&nbsp; 🌐 sollabstech.com</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>

          {/* Section 1 */}
          <h2 style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 800, color: "white", marginBottom: 16, marginTop: 48 }}>
            The Story of Sollabs Tech
          </h2>
          <p style={{ color: "#6B7A94", fontSize: 16, lineHeight: 1.85, marginBottom: 16 }}>
            Sollabs Tech was founded in <strong style={{ color: "#C4D0E0" }}>2020 by T Bala Murugan</strong> in Madurai, Tamil Nadu, India. The idea was simple: Indian businesses deserved better software — not expensive imported tools, not generic off-the-shelf products, but technology built specifically for how Indian businesses actually work.
          </p>
          <p style={{ color: "#6B7A94", fontSize: 16, lineHeight: 1.85, marginBottom: 16 }}>
            Starting from Madurai, T Bala Murugan built Sollabs Tech into a dual-brand technology company — offering custom software development on one side and quality laptops & custom PCs on the other.
          </p>

          {/* Section 2 */}
          <h2 style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 800, color: "white", marginBottom: 16, marginTop: 48 }}>
            What T Bala Murugan Built at Sollabs Tech
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginBottom: 32 }}>
            {[
              { icon: "💻", title: "Web Development", desc: "Custom websites and web applications for Indian businesses" },
              { icon: "📱", title: "Mobile Apps", desc: "Android & iOS apps built for real-world Indian use cases" },
              { icon: "🧾", title: "Billing Software", desc: "GST-ready billing systems for shops and businesses" },
              { icon: "📊", title: "ERP & CRM", desc: "Enterprise systems tailored for Indian SMEs" },
              { icon: "🖥️", title: "Laptop Sales", desc: "Quality-checked laptops delivered across India" },
              { icon: "🔧", title: "Custom PC Builds", desc: "Built-to-order desktop PCs for every budget" },
            ].map((item) => (
              <div key={item.title} style={{
                padding: "20px", borderRadius: 14,
                background: "rgba(10,22,40,0.7)", border: "1px solid rgba(255,255,255,0.07)",
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: "#6B7A94" }}>{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Section 3 */}
          <h2 style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 800, color: "white", marginBottom: 16, marginTop: 48 }}>
            Why T Bala Murugan Started Sollabs Tech
          </h2>
          <p style={{ color: "#6B7A94", fontSize: 16, lineHeight: 1.85, marginBottom: 16 }}>
            Most software companies in India charge high prices for tools that don't fit how local businesses actually work. T Bala Murugan saw this problem firsthand and decided to build something different — a company that listens first, builds for the client's real workflow, and stands behind its products with real after-sales support.
          </p>
          <div style={{ padding: "24px 28px", borderRadius: 16, background: "rgba(0,170,255,0.06)", border: "1px solid rgba(0,170,255,0.2)", marginBottom: 32 }}>
            <p style={{ color: "#C4D0E0", fontSize: 16, lineHeight: 1.85, margin: 0, fontStyle: "italic" }}>
              "I started Sollabs Tech because I wanted to build technology that actually makes a difference for Indian businesses — not just sell a product, but solve a real problem."
            </p>
            <p style={{ color: "#00AAFF", fontSize: 13, fontWeight: 600, marginTop: 12, marginBottom: 0 }}>— T Bala Murugan, Founder & CEO, Sollabs Tech</p>
          </div>

          {/* FAQ */}
          <h2 style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 800, color: "white", marginBottom: 24, marginTop: 48 }}>
            Frequently Asked Questions
          </h2>
          {[
            { q: "Who is the founder of Sollabs Tech?", a: "Sollabs Tech was founded by T Bala Murugan in Madurai, Tamil Nadu, India. He is the Founder & CEO of the company." },
            { q: "Who owns Sollabs Tech?", a: "Sollabs Tech is owned and operated by T Bala Murugan, who founded the company in Madurai, Tamil Nadu in 2020." },
            { q: "Where is T Bala Murugan from?", a: "T Bala Murugan is from Madurai, Tamil Nadu, India — where he founded and continues to run Sollabs Tech." },
            { q: "When was Sollabs Tech founded?", a: "Sollabs Tech was founded in 2020 by T Bala Murugan in Madurai, Tamil Nadu, India." },
            { q: "Is Sollabs Tech the same as SolTech InfoLabs or SOLTECH?", a: "No. Sollabs Tech (sollabstech.com), founded by T Bala Murugan in Madurai, is a completely separate company from SolTech InfoLabs, SOLTECH (Atlanta), or any other similarly named company." },
          ].map((faq) => (
            <div key={faq.q} style={{ marginBottom: 20, padding: "20px 24px", borderRadius: 14, background: "rgba(10,22,40,0.6)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "white", marginBottom: 8 }}>{faq.q}</h3>
              <p style={{ fontSize: 14, color: "#6B7A94", lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
            </div>
          ))}

          {/* CTA */}
          <div style={{ marginTop: 56, padding: "36px 32px", borderRadius: 20, background: "linear-gradient(135deg, rgba(0,102,255,0.1), rgba(0,170,255,0.05))", border: "1px solid rgba(0,102,255,0.2)", textAlign: "center" }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: "white", marginBottom: 10 }}>
              Want to work with T Bala Murugan's team?
            </h3>
            <p style={{ color: "#6B7A94", fontSize: 15, marginBottom: 24 }}>
              Get in touch with Sollabs Tech for software development, laptops, or any tech needs.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" style={{ padding: "12px 28px" }}>Contact Us →</Link>
              <a href="https://wa.me/919003850743" target="_blank" rel="noopener noreferrer"
                style={{ padding: "12px 28px", borderRadius: 12, border: "1px solid rgba(34,197,94,0.4)", color: "#22c55e", textDecoration: "none", fontSize: 14, fontWeight: 600, background: "rgba(34,197,94,0.08)" }}>
                WhatsApp: +91 90038 50743
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
