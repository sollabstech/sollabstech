import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sollabs Tech Official Social Media – LinkedIn, Facebook & Instagram",
  description: "Find Sollabs Tech on LinkedIn, Facebook, and Instagram. These are the ONLY official Sollabs Tech social media pages. Direct links and contact info inside.",
  keywords: [
    "sollabstech linkedin", "sollabs tech linkedin", "sollabstech facebook", "sollabs tech facebook",
    "sollabstech instagram", "sollabs tech instagram", "sollabstech social media",
    "sollabs tech official page", "sollabstech official", "sollab tech linkedin",
    "sollabstech contact", "sollabs tech madurai social media"
  ],
  alternates: { canonical: "/blog/sollabs-tech-social-media" },
  openGraph: {
    title: "Sollabs Tech Official Social Media – LinkedIn, Facebook & Instagram",
    description: "These are the ONLY official Sollabs Tech social media profiles. Software development company based in Madurai, Tamil Nadu, India.",
    url: "https://www.sollabstech.com/blog/sollabs-tech-social-media",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Sollabs Tech" }],
  },
};

export default function SocialMediaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Sollabs Tech Official Social Media – LinkedIn, Facebook & Instagram",
    "description": "Official social media profiles for Sollabs Tech — software development company in Madurai, Tamil Nadu, India.",
    "author": { "@type": "Organization", "name": "Sollabs Tech", "url": "https://www.sollabstech.com" },
    "publisher": { "@type": "Organization", "name": "Sollabs Tech", "logo": { "@type": "ImageObject", "url": "https://www.sollabstech.com/logo.png" } },
    "datePublished": "2026-08-20",
    "dateModified": "2026-08-20",
    "url": "https://www.sollabstech.com/blog/sollabs-tech-social-media",
  };

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sollabs Tech",
    "alternateName": ["Sollab Tech", "Solabs Tech", "Sollabstech", "SollabsTech"],
    "url": "https://www.sollabstech.com",
    "logo": "https://www.sollabstech.com/logo.png",
    "description": "Sollabs Tech is a software development company based in Madurai, Tamil Nadu, India. We build web applications, mobile apps, billing software, ERP systems, and more for Indian businesses.",
    "foundingLocation": { "@type": "Place", "name": "Madurai, Tamil Nadu, India" },
    "address": { "@type": "PostalAddress", "addressLocality": "Madurai", "addressRegion": "Tamil Nadu", "addressCountry": "IN" },
    "telephone": "+919003850743",
    "email": "sollabstech@gmail.com",
    "sameAs": [
      "https://www.linkedin.com/company/sollabstech/",
      "https://www.facebook.com/sollabstech/",
      "https://www.facebook.com/profile.php?id=61561012517343",
      "https://www.instagram.com/sollabstech",
      "https://www.instagram.com/sollabs_tech_laptop__custom_pc/"
    ]
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Sollabs Tech's official LinkedIn page?",
        "acceptedAnswer": { "@type": "Answer", "text": "The official Sollabs Tech LinkedIn company page is at https://www.linkedin.com/company/sollabstech/ — this is the ONLY official LinkedIn profile for Sollabs Tech, the software development company based in Madurai, Tamil Nadu, India." }
      },
      {
        "@type": "Question",
        "name": "What is Sollabs Tech's official Facebook page?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sollabs Tech's official Facebook page for software development is at https://www.facebook.com/sollabstech/ — and the laptop/PC page is at https://www.facebook.com/profile.php?id=61561012517343" }
      },
      {
        "@type": "Question",
        "name": "Is Sollabs Tech on Instagram?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Sollabs Tech has two Instagram accounts: @sollabstech for software development content, and @sollabs_tech_laptop__custom_pc for laptop and custom PC content." }
      },
      {
        "@type": "Question",
        "name": "How do I contact Sollabs Tech directly?",
        "acceptedAnswer": { "@type": "Answer", "text": "You can contact Sollabs Tech via WhatsApp at +91 90038 50743, email at sollabstech@gmail.com, or through the contact form at www.sollabstech.com/contact" }
      },
    ]
  };

  const profiles = [
    {
      platform: "LinkedIn",
      icon: "💼",
      color: "#0077B5",
      handle: "Sollabs Tech (Company Page)",
      url: "https://www.linkedin.com/company/sollabstech/",
      display: "linkedin.com/company/sollabstech",
      desc: "Our official LinkedIn company page for Sollabs Tech — software development updates, tech articles, job posts, and company news. This is the ONLY official Sollabs Tech LinkedIn page.",
      type: "Software Development & Tech"
    },
    {
      platform: "Facebook (Tech Page)",
      icon: "📘",
      color: "#1877F2",
      handle: "Sollabs Tech",
      url: "https://www.facebook.com/sollabstech/",
      display: "facebook.com/sollabstech",
      desc: "Official Sollabs Tech Facebook page for software development content — web apps, mobile apps, billing software, ERP systems, and tech tips for Indian businesses.",
      type: "Software Development & Tech"
    },
    {
      platform: "Facebook (Laptop Page)",
      icon: "📘",
      color: "#1877F2",
      handle: "Sollabs Tech – Laptops & Custom PC",
      url: "https://www.facebook.com/profile.php?id=61561012517343",
      display: "facebook.com/profile.php?id=61561012517343",
      desc: "Our second Facebook page dedicated to laptop sales, custom PC builds, refurbished laptops, and hardware content for Indian buyers.",
      type: "Laptops & Custom PCs"
    },
    {
      platform: "Instagram (Tech)",
      icon: "📸",
      color: "#E1306C",
      handle: "@sollabstech",
      url: "https://www.instagram.com/sollabstech",
      display: "instagram.com/sollabstech",
      desc: "Instagram for Sollabs Tech's software development work — project highlights, tech content, and behind-the-scenes from our Madurai team.",
      type: "Software Development & Tech"
    },
    {
      platform: "Instagram (Laptops)",
      icon: "📸",
      color: "#E1306C",
      handle: "@sollabs_tech_laptop__custom_pc",
      url: "https://www.instagram.com/sollabs_tech_laptop__custom_pc/",
      display: "instagram.com/sollabs_tech_laptop__custom_pc",
      desc: "Instagram dedicated to our laptop and custom PC business — product photos, customer unboxings, build showcases, and deals.",
      type: "Laptops & Custom PCs"
    },
    {
      platform: "WhatsApp",
      icon: "💬",
      color: "#25D366",
      handle: "+91 90038 50743",
      url: "https://wa.me/919003850743",
      display: "wa.me/919003850743",
      desc: "Chat directly with the Sollabs Tech team on WhatsApp. Fastest way to get a quote, ask a question, or start a project.",
      type: "Direct Contact"
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <article style={{ paddingTop: 120, paddingBottom: 100, paddingLeft: 24, paddingRight: 24 }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>

          {/* Breadcrumb */}
          <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: "#475569", marginBottom: 32 }}>
            <Link href="/blog" style={{ color: "#00AAFF", textDecoration: "none" }}>Blog</Link>
            <span>›</span>
            <span>Social Media Profiles</span>
          </div>

          {/* Tag + Date */}
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20, flexWrap: "wrap" }}>
            <span style={{ padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600, background: "rgba(0,102,255,0.15)", border: "1px solid rgba(0,102,255,0.3)", color: "#00AAFF" }}>
              📲 Official Profiles
            </span>
            <span style={{ fontSize: 13, color: "#475569" }}>August 20, 2026 · Updated regularly</span>
          </div>

          {/* Title */}
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: 20, color: "white" }}>
            Sollabs Tech Official Social Media —{" "}
            <span className="gradient-text-blue">LinkedIn, Facebook & Instagram</span>
          </h1>

          <p style={{ fontSize: 17, color: "#8A9BB8", lineHeight: 1.8, marginBottom: 20 }}>
            Looking for <strong style={{ color: "white" }}>Sollabs Tech on LinkedIn</strong>, <strong style={{ color: "white" }}>Facebook</strong>, or <strong style={{ color: "white" }}>Instagram</strong>? This page lists every official Sollabs Tech social media profile with direct links. If you found other pages under similar names, these below are the real ones.
          </p>

          {/* Important notice */}
          <div style={{ padding: "16px 20px", borderRadius: 14, background: "rgba(234,179,8,0.08)", border: "1px solid rgba(234,179,8,0.2)", marginBottom: 40, fontSize: 14, color: "#94A3B8", lineHeight: 1.7 }}>
            <strong style={{ color: "white" }}>⚠️ Note:</strong> Our company name is <strong style={{ color: "white" }}>Sollabs Tech</strong> — sometimes misspelled as Sollab Tech, Solabs Tech, or SolTech. We are NOT affiliated with SOLTECH (Atlanta, USA) or SolTech InfoLabs. We are a software development company based in <strong style={{ color: "white" }}>Madurai, Tamil Nadu, India</strong>.
          </div>

          {/* Social profiles */}
          <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 700, color: "white", marginBottom: 24 }}>
            All Official Sollabs Tech Social Media Profiles
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 56 }}>
            {profiles.map((p, i) => (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", display: "block" }}
              >
                <div
                  className="card-hover"
                  style={{
                    padding: "24px 28px",
                    borderRadius: 18,
                    background: "rgba(10,22,40,0.7)",
                    border: `1px solid ${p.color}22`,
                    display: "flex",
                    gap: 20,
                    alignItems: "flex-start",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ fontSize: 36, flexShrink: 0 }}>{p.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", marginBottom: 6 }}>
                      <span style={{ fontWeight: 800, color: "white", fontSize: 16 }}>{p.platform}</span>
                      <span style={{ padding: "2px 8px", borderRadius: 100, fontSize: 11, fontWeight: 600, background: `${p.color}22`, color: p.color }}>
                        {p.type}
                      </span>
                    </div>
                    <div style={{ fontWeight: 600, color: p.color, fontSize: 14, marginBottom: 8 }}>{p.handle}</div>
                    <div style={{ color: "#64748B", fontSize: 13, marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</div>
                    <div style={{ fontSize: 12, color: "#475569", display: "flex", alignItems: "center", gap: 6 }}>
                      🔗 {p.display} <span style={{ color: p.color, fontSize: 11 }}>→ Visit</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Who are we */}
          <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 700, color: "white", marginBottom: 16 }}>
            Who Is Sollabs Tech?
          </h2>
          <p style={{ color: "#8A9BB8", lineHeight: 1.9, fontSize: 16, marginBottom: 16 }}>
            <strong style={{ color: "white" }}>Sollabs Tech</strong> is a software development company founded in Madurai, Tamil Nadu, India. We build custom digital solutions for Indian businesses — from small shops to growing enterprises.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14, marginBottom: 40 }}>
            {[
              { icon: "🌐", label: "Web Applications" },
              { icon: "📱", label: "Mobile Apps (Android & iOS)" },
              { icon: "🧾", label: "Billing & Invoicing Software" },
              { icon: "🪟", label: "Windows Desktop Tools" },
              { icon: "📊", label: "ERP & CRM Systems" },
              { icon: "🔗", label: "API & Integrations" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "14px 16px", borderRadius: 12, background: "rgba(0,102,255,0.06)", border: "1px solid rgba(0,102,255,0.1)", fontSize: 14, color: "#8A9BB8" }}>
                <span style={{ marginRight: 8 }}>{s.icon}</span>{s.label}
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 700, color: "white", marginBottom: 24 }}>
            Frequently Asked Questions
          </h2>
          {[
            { q: "What is Sollabs Tech's official LinkedIn page?", a: <>The official Sollabs Tech LinkedIn is at <a href="https://www.linkedin.com/company/sollabstech/" target="_blank" rel="noopener noreferrer" style={{ color: "#0077B5" }}>linkedin.com/company/sollabstech</a> — a software development company page based in Madurai, Tamil Nadu, India. This is NOT related to SOLTECH (Atlanta, USA) or any other company.</> },
            { q: "What is Sollabs Tech's official Facebook page?", a: <>Software/tech content: <a href="https://www.facebook.com/sollabstech/" target="_blank" rel="noopener noreferrer" style={{ color: "#1877F2" }}>facebook.com/sollabstech</a>. Laptop content: <a href="https://www.facebook.com/profile.php?id=61561012517343" target="_blank" rel="noopener noreferrer" style={{ color: "#1877F2" }}>facebook.com/profile.php?id=61561012517343</a></> },
            { q: "Is Sollabs Tech LinkedIn 'coming soon'?", a: "No — that was outdated information from when we were setting up the page. Our LinkedIn company page is fully live at linkedin.com/company/sollabstech/ with our full company profile, services, and location." },
            { q: "How do I contact Sollabs Tech directly?", a: <>WhatsApp: <a href="https://wa.me/919003850743" target="_blank" rel="noopener noreferrer" style={{ color: "#25D366" }}>+91 90038 50743</a> · Email: <a href="mailto:sollabstech@gmail.com" style={{ color: "#00AAFF" }}>sollabstech@gmail.com</a> · Contact page: <Link href="/contact" style={{ color: "#00AAFF" }}>sollabstech.com/contact</Link></> },
          ].map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 24, marginBottom: 24 }}>
              <div style={{ fontWeight: 700, color: "white", fontSize: 16, marginBottom: 10 }}>Q: {faq.q}</div>
              <div style={{ color: "#8A9BB8", fontSize: 15, lineHeight: 1.8 }}>{faq.a}</div>
            </div>
          ))}

          {/* CTA */}
          <div style={{ marginTop: 48, padding: "36px 32px", borderRadius: 20, background: "linear-gradient(135deg, rgba(0,102,255,0.12) 0%, rgba(0,170,255,0.06) 100%)", border: "1px solid rgba(0,102,255,0.2)", textAlign: "center" }}>
            <h3 style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)", fontWeight: 800, color: "white", marginBottom: 12 }}>
              Get in Touch with Sollabs Tech
            </h3>
            <p style={{ color: "#8A9BB8", fontSize: 15, marginBottom: 24, lineHeight: 1.7 }}>
              Based in Madurai, Tamil Nadu — serving clients across India.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">Contact Us</Link>
              <a href="https://wa.me/919003850743" target="_blank" rel="noopener noreferrer" className="btn-outline">💬 WhatsApp</a>
            </div>
            <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", fontSize: 13, color: "#475569" }}>
              <span>📞 +91 90038 50743</span>
              <span>📧 sollabstech@gmail.com</span>
              <span>📍 Madurai, Tamil Nadu</span>
            </div>
          </div>

          <div style={{ marginTop: 48, textAlign: "center" }}>
            <Link href="/blog" style={{ color: "#00AAFF", textDecoration: "none", fontSize: 14, fontWeight: 600 }}>
              ← Back to Blog
            </Link>
          </div>

        </div>
      </article>
    </>
  );
}
