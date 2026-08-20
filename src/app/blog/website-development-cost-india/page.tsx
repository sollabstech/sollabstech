import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much Does Website Development Cost in India? (2025 Guide) – Sollabs Tech",
  description: "Get clear pricing for website development in India. From simple landing pages to full web apps — what you actually pay and what you get. By Sollabs Tech, Madurai.",
  keywords: ["website development cost India", "web development price India", "how much website cost India", "website development Madurai", "website development Tamil Nadu", "web app cost India", "custom website price"],
  alternates: { canonical: "/blog/website-development-cost-india" },
  openGraph: {
    title: "How Much Does Website Development Cost in India? (2025 Guide)",
    description: "Clear, honest pricing for website development in India — from simple landing pages to full web apps. No jargon, no surprises.",
    url: "https://www.sollabstech.com/blog/website-development-cost-india",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Sollabs Tech" }],
  },
};

export default function WebDevCostBlog() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Much Does Website Development Cost in India? (2025 Guide)",
    "description": "Clear, honest pricing for website development in India — from simple landing pages to full web apps.",
    "author": { "@type": "Organization", "name": "Sollabs Tech", "url": "https://www.sollabstech.com" },
    "publisher": { "@type": "Organization", "name": "Sollabs Tech", "logo": { "@type": "ImageObject", "url": "https://www.sollabstech.com/logo.png" } },
    "datePublished": "2026-08-20",
    "dateModified": "2026-08-20",
    "url": "https://www.sollabstech.com/blog/website-development-cost-india",
    "mainEntityOfPage": "https://www.sollabstech.com/blog/website-development-cost-india",
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does website development cost in India?",
        "acceptedAnswer": { "@type": "Answer", "text": "Website development in India ranges from ₹8,000–₹25,000 for a basic landing page, ₹25,000–₹80,000 for a business website, ₹80,000–₹2,00,000 for an e-commerce site, and ₹1,50,000+ for custom web applications. Prices vary by complexity, features, and the development team you choose." }
      },
      {
        "@type": "Question",
        "name": "How much does Sollabs Tech charge for a website?",
        "acceptedAnswer": { "@type": "Answer", "text": "At Sollabs Tech in Madurai, Tamil Nadu, website pricing starts from ₹15,000 for a basic business website and goes up based on features. We offer free consultations and transparent, no-surprise pricing. Contact us at +91 90038 50743 or sollabstech@gmail.com for a free quote." }
      },
      {
        "@type": "Question",
        "name": "What affects the cost of a website in India?",
        "acceptedAnswer": { "@type": "Answer", "text": "The main factors are: number of pages, design complexity, features required (booking, payments, login, admin panel), mobile responsiveness, SEO optimization, ongoing maintenance, and whether you need a CMS to update content yourself." }
      },
      {
        "@type": "Question",
        "name": "Is it cheaper to use a website builder or hire a developer in India?",
        "acceptedAnswer": { "@type": "Answer", "text": "Website builders (Wix, Squarespace) seem cheaper upfront but have monthly fees (₹1,000–₹5,000/month), limited customization, and slow loading on Indian networks. A custom-built website has a one-time cost and is faster, fully yours, and better for SEO." }
      },
    ]
  };

  const pricingTiers = [
    {
      icon: "📄",
      type: "Landing Page / Portfolio",
      range: "₹8,000 – ₹25,000",
      time: "1–2 weeks",
      includes: ["1–3 pages", "Mobile responsive", "Contact form", "Basic SEO setup", "Google Maps integration"],
      best: "Freelancers, coaches, small shops wanting an online presence"
    },
    {
      icon: "🏢",
      type: "Business Website",
      range: "₹25,000 – ₹80,000",
      time: "2–4 weeks",
      includes: ["5–10 pages", "Professional design", "Service/product pages", "WhatsApp chat button", "Full SEO optimization", "Blog section", "Contact & inquiry forms"],
      best: "SMEs, clinics, schools, restaurants, agencies"
    },
    {
      icon: "🛒",
      type: "E-commerce Website",
      range: "₹80,000 – ₹2,00,000",
      time: "4–8 weeks",
      includes: ["Product catalog", "Cart & checkout", "Payment gateway (Razorpay/UPI)", "Order management", "Admin dashboard", "GST invoice generation"],
      best: "Online shops, product brands, retailers going digital"
    },
    {
      icon: "⚙️",
      type: "Custom Web Application",
      range: "₹1,50,000+",
      time: "6–16 weeks",
      includes: ["User login & roles", "Custom database", "Real-time features", "API integrations", "Admin panel", "Mobile-ready PWA", "Booking/scheduling systems"],
      best: "Startups, businesses needing a unique digital platform"
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <article style={{ paddingTop: 120, paddingBottom: 100, paddingLeft: 24, paddingRight: 24 }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>

          {/* Breadcrumb */}
          <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: "#475569", marginBottom: 32 }}>
            <Link href="/blog" style={{ color: "#00AAFF", textDecoration: "none" }}>Blog</Link>
            <span>›</span>
            <span>Website Development Cost India</span>
          </div>

          {/* Tag + Date */}
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20, flexWrap: "wrap" }}>
            <span style={{ padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600, background: "rgba(0,102,255,0.15)", border: "1px solid rgba(0,102,255,0.3)", color: "#00AAFF" }}>
              🌐 Web Development
            </span>
            <span style={{ fontSize: 13, color: "#475569" }}>August 20, 2026 · 8 min read</span>
          </div>

          {/* Title */}
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: 20, color: "white" }}>
            How Much Does Website Development Cost in India?{" "}
            <span className="gradient-text-blue">(2025 Complete Guide)</span>
          </h1>

          <p style={{ fontSize: 18, color: "#8A9BB8", lineHeight: 1.8, marginBottom: 32 }}>
            One of the most searched questions by Indian business owners: <strong style={{ color: "white" }}>&quot;How much does a website cost?&quot;</strong> The honest answer is — it depends. But this guide breaks it down clearly so you know exactly what you&apos;ll pay and what you&apos;ll get.
          </p>

          <div style={{ borderLeft: "3px solid #0066FF", paddingLeft: 20, marginBottom: 48 }}>
            <p style={{ color: "#64748B", fontSize: 14, margin: 0, lineHeight: 1.8 }}>
              <strong style={{ color: "white" }}>Sollabs Tech</strong> is a software development company in Madurai, Tamil Nadu. We build websites and web applications for Indian businesses — from simple landing pages to full custom platforms. This guide reflects our real pricing and experience.
            </p>
          </div>

          {/* Quick Summary */}
          <div style={{ padding: "24px 28px", borderRadius: 16, background: "rgba(0,102,255,0.08)", border: "1px solid rgba(0,102,255,0.2)", marginBottom: 48 }}>
            <div style={{ fontWeight: 700, color: "white", fontSize: 16, marginBottom: 12 }}>📊 Quick Price Summary</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
              {[
                { type: "Landing Page", price: "₹8K – ₹25K" },
                { type: "Business Website", price: "₹25K – ₹80K" },
                { type: "E-commerce", price: "₹80K – ₹2L" },
                { type: "Web Application", price: "₹1.5L+" },
              ].map((p, i) => (
                <div key={i} style={{ textAlign: "center", padding: "12px 8px", borderRadius: 10, background: "rgba(0,0,0,0.2)" }}>
                  <div style={{ color: "#8A9BB8", fontSize: 12, marginBottom: 4 }}>{p.type}</div>
                  <div style={{ color: "#00AAFF", fontWeight: 800, fontSize: 16 }}>{p.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Tiers */}
          <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 700, color: "white", marginBottom: 24, marginTop: 48 }}>
            Website Types & Prices Explained
          </h2>

          {pricingTiers.map((tier, i) => (
            <div key={i} style={{ marginBottom: 32, padding: "28px 32px", borderRadius: 18, background: "rgba(10,22,40,0.7)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16, flexWrap: "wrap" }}>
                <div style={{ fontSize: 36 }}>{tier.icon}</div>
                <div>
                  <div style={{ fontWeight: 800, color: "white", fontSize: 18 }}>{tier.type}</div>
                  <div style={{ color: "#00AAFF", fontWeight: 700, fontSize: 20, marginTop: 2 }}>{tier.range}</div>
                  <div style={{ color: "#475569", fontSize: 13, marginTop: 2 }}>⏱ Timeline: {tier.time}</div>
                </div>
              </div>
              <div style={{ color: "#8A9BB8", fontSize: 14, marginBottom: 12 }}>
                <strong style={{ color: "#94A3B8" }}>What&apos;s included:</strong>
              </div>
              <ul style={{ color: "#8A9BB8", fontSize: 14, lineHeight: 2, paddingLeft: 20, marginBottom: 12 }}>
                {tier.includes.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
              <div style={{ fontSize: 13, color: "#475569" }}>
                <strong style={{ color: "#64748B" }}>Best for:</strong> {tier.best}
              </div>
            </div>
          ))}

          {/* What affects price */}
          <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 700, color: "white", marginBottom: 16, marginTop: 48 }}>
            What Affects the Price of a Website?
          </h2>
          <p style={{ color: "#8A9BB8", lineHeight: 1.9, fontSize: 16, marginBottom: 20 }}>
            Two websites can look similar but cost very different amounts. Here&apos;s why:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginBottom: 40 }}>
            {[
              { factor: "Number of pages", impact: "More pages = more design + development time" },
              { factor: "Custom design", impact: "Template = cheaper. Unique brand design = more investment" },
              { factor: "Features", impact: "Login, payments, bookings, admin panels add cost" },
              { factor: "SEO setup", impact: "Proper SEO from day 1 requires extra technical work" },
              { factor: "CMS (edit content yourself)", impact: "Requires a content management system to be built in" },
              { factor: "Mobile optimization", impact: "All our sites are mobile-first — required in India" },
            ].map((f, i) => (
              <div key={i} style={{ padding: "16px 18px", borderRadius: 12, background: "rgba(0,102,255,0.05)", border: "1px solid rgba(0,102,255,0.1)" }}>
                <div style={{ fontWeight: 700, color: "white", fontSize: 14, marginBottom: 6 }}>📌 {f.factor}</div>
                <div style={{ color: "#64748B", fontSize: 13, lineHeight: 1.6 }}>{f.impact}</div>
              </div>
            ))}
          </div>

          {/* Website Builder vs Custom */}
          <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 700, color: "white", marginBottom: 16, marginTop: 48 }}>
            Website Builder (Wix/Squarespace) vs. Custom Website
          </h2>
          <div style={{ overflowX: "auto", marginBottom: 40 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, minWidth: 480 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#94A3B8", fontWeight: 600 }}>Factor</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#94A3B8", fontWeight: 600 }}>Website Builder</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#00AAFF", fontWeight: 600 }}>Custom Website</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Cost", "₹1,000–₹5,000/month forever", "One-time payment, you own it"],
                  ["Speed", "Slow — affects SEO & UX", "Optimized for Indian mobile networks"],
                  ["Customization", "Limited to templates", "Built exactly how you want"],
                  ["SEO", "Basic, limited control", "Full SEO control from day 1"],
                  ["Support", "Self-service only", "Direct support from our team"],
                  ["Domain & hosting", "Locked to their platform", "Your domain, your hosting"],
                ].map(([factor, builder, custom], i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <td style={{ padding: "12px 16px", color: "#8A9BB8", fontWeight: 600 }}>{factor}</td>
                    <td style={{ padding: "12px 16px", color: "#64748B" }}>{builder}</td>
                    <td style={{ padding: "12px 16px", color: "#94A3B8" }}>{custom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* FAQ */}
          <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 700, color: "white", marginBottom: 24, marginTop: 48 }}>
            Frequently Asked Questions
          </h2>
          {[
            { q: "How much does website development cost in India?", a: "It ranges from ₹8,000 for a basic landing page to ₹2,00,000+ for a full e-commerce or web application. The right price depends on what your business actually needs." },
            { q: "How much does Sollabs Tech charge for a website?", a: "We start from ₹15,000 for a basic business website. Every project is quoted after understanding your requirements — no generic pricing, no surprises. WhatsApp us at +91 90038 50743 for a free consultation." },
            { q: "What affects the cost of a website in India?", a: "The main factors are: number of pages, design complexity, features (booking, payments, login, admin panel), SEO optimization, mobile responsiveness, and content management requirements." },
            { q: "Is it cheaper to use a website builder or hire a developer?", a: "Website builders look cheaper upfront but have monthly fees (₹12,000–₹60,000/year), are slow, and limit customization. A custom-built website is a one-time investment you fully own, with better SEO and performance." },
          ].map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 24, marginBottom: 24 }}>
              <div style={{ fontWeight: 700, color: "white", fontSize: 16, marginBottom: 10 }}>Q: {faq.q}</div>
              <div style={{ color: "#8A9BB8", fontSize: 15, lineHeight: 1.8 }}>{faq.a}</div>
            </div>
          ))}

          {/* CTA */}
          <div style={{ marginTop: 56, padding: "40px 32px", borderRadius: 20, background: "linear-gradient(135deg, rgba(0,102,255,0.12) 0%, rgba(0,170,255,0.06) 100%)", border: "1px solid rgba(0,102,255,0.2)", textAlign: "center" }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>🌐</div>
            <h3 style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)", fontWeight: 800, color: "white", marginBottom: 12 }}>
              Get a Free Website Quote
            </h3>
            <p style={{ color: "#8A9BB8", fontSize: 15, marginBottom: 24, lineHeight: 1.7 }}>
              Tell us what you need — we&apos;ll give you a clear price and timeline. No jargon, no hidden charges.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">Get Free Quote</Link>
              <a href="https://wa.me/919003850743" target="_blank" rel="noopener noreferrer" className="btn-outline">💬 WhatsApp Us</a>
            </div>
            <p style={{ color: "#475569", fontSize: 13, marginTop: 16 }}>📞 +91 90038 50743 · 📧 sollabstech@gmail.com · Madurai, Tamil Nadu</p>
          </div>

          {/* Back link */}
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
