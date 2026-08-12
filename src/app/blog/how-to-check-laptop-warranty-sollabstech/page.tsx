import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Check Laptop Warranty – Sollabs Tech Step-by-Step Guide",
  description: "Learn how to check your Sollabs Tech laptop warranty online in seconds. Enter your serial number at sollabstech.com/warranty. Watch our video guide for full instructions.",
  keywords: [
    "how to check laptop warranty sollabstech",
    "sollabstech warranty check",
    "how to check warranty sollabstech laptop",
    "laptop warranty check online India",
    "how do i find out if my laptop is still under warranty",
    "check laptop warranty online",
    "sollabstech warranty status",
    "how to claim laptop warranty India",
    "sollabstech warranty checker",
    "laptop warranty check serial number",
    "sollabs tech warranty",
    "check laptop warranty Tamil Nadu",
    "laptop warranty check by serial number India",
  ],
  alternates: { canonical: "/blog/how-to-check-laptop-warranty-sollabstech" },
  openGraph: {
    title: "How to Check Laptop Warranty – Sollabs Tech Step-by-Step Guide",
    description: "Check your Sollabs Tech laptop warranty in seconds using your serial number. Watch our video guide and visit sollabstech.com/warranty.",
    url: "https://www.sollabstech.com/blog/how-to-check-laptop-warranty-sollabstech",
    images: [{ url: "https://www.sollabstech.com/logo.png", width: 512, height: 512, alt: "Sollabs Tech Warranty Check" }],
  },
};

export default function HowToCheckWarrantyBlog() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Check Your Laptop Warranty – Sollabs Tech Step-by-Step Guide",
    "description": "Learn how to check your Sollabs Tech laptop warranty online in seconds using your serial number. Includes video guide.",
    "image": "https://www.sollabstech.com/logo.png",
    "datePublished": "2026-08-12",
    "dateModified": "2026-08-12",
    "author": { "@type": "Organization", "name": "Sollabs Tech", "url": "https://www.sollabstech.com" },
    "publisher": { "@type": "Organization", "name": "Sollabs Tech", "logo": { "@type": "ImageObject", "url": "https://www.sollabstech.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.sollabstech.com/blog/how-to-check-laptop-warranty-sollabstech" },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Check Your Sollabs Tech Laptop Warranty",
    "description": "Step-by-step guide to check your Sollabs Tech laptop warranty status online.",
    "totalTime": "PT2M",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Find Your Serial Number", "text": "Look at the bottom of your laptop for the Sollabs Tech warranty sticker. The serial number is printed on it (e.g., 197979, 205610)." },
      { "@type": "HowToStep", "position": 2, "name": "Visit the Warranty Page", "text": "Open your browser and go to https://www.sollabstech.com/warranty" },
      { "@type": "HowToStep", "position": 3, "name": "Enter Your Serial Number", "text": "Type your serial number into the input box and click 'Check →'" },
      { "@type": "HowToStep", "position": 4, "name": "View Your Warranty Details", "text": "Your warranty status, expiry date, purchase date, and remaining days will appear instantly." },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I check my Sollabs Tech laptop warranty?",
        "acceptedAnswer": { "@type": "Answer", "text": "Go to sollabstech.com/warranty, enter the serial number from the sticker on the bottom of your laptop, and click Check. Your warranty status shows instantly." }
      },
      {
        "@type": "Question",
        "name": "Where is the serial number on my Sollabs Tech laptop?",
        "acceptedAnswer": { "@type": "Answer", "text": "The serial number is printed on the Sollabs Tech warranty sticker attached to the bottom of your laptop." }
      },
      {
        "@type": "Question",
        "name": "How do I find out if my laptop is still under warranty?",
        "acceptedAnswer": { "@type": "Answer", "text": "Visit sollabstech.com/warranty and enter your serial number. The checker will show whether your warranty is Active or Expired, along with the exact expiry date." }
      },
      {
        "@type": "Question",
        "name": "How do I claim my Sollabs Tech laptop warranty?",
        "acceptedAnswer": { "@type": "Answer", "text": "First check your warranty status at sollabstech.com/warranty. If it is active, WhatsApp us at +91 90038 50743 with your serial number and a description of the issue. Our team will guide you through the claim process." }
      },
      {
        "@type": "Question",
        "name": "What does the Sollabs Tech warranty cover?",
        "acceptedAnswer": { "@type": "Answer", "text": "The warranty covers hardware defects and internal component failures. It does not cover physical damage, liquid damage, or accidental breakage." }
      },
      {
        "@type": "Question",
        "name": "How long is the Sollabs Tech laptop warranty?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sollabs Tech laptops come with 3 to 12 months warranty depending on the model and condition. Your exact warranty period is shown on the warranty checker page." }
      },
      {
        "@type": "Question",
        "name": "My laptop is showing warranty expired. What should I do?",
        "acceptedAnswer": { "@type": "Answer", "text": "Contact Sollabs Tech on WhatsApp at +91 90038 50743. Even after warranty expiry, we offer affordable repair services and support for all laptops we have sold." }
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article style={{ paddingTop: 100, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>

          {/* Breadcrumb */}
          <nav style={{ marginBottom: 24, fontSize: 13, color: "#475569" }}>
            <Link href="/" style={{ color: "#475569", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 8px" }}>›</span>
            <Link href="/blog" style={{ color: "#475569", textDecoration: "none" }}>Blog</Link>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#00AAFF" }}>How to Check Laptop Warranty</span>
          </nav>

          {/* Tags */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
            <span style={{ padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600, background: "rgba(0,102,255,0.15)", border: "1px solid rgba(0,102,255,0.3)", color: "#00AAFF" }}>🛡️ Warranty Guide</span>
            <span style={{ padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600, background: "rgba(0,200,80,0.1)", border: "1px solid rgba(0,200,80,0.3)", color: "#00C850" }}>📹 Video Guide</span>
            <span style={{ fontSize: 12, color: "#475569", display: "flex", alignItems: "center" }}>August 12, 2026 · 4 min read</span>
          </div>

          {/* H1 */}
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: 20 }}>
            How to Check Your Laptop Warranty –{" "}
            <span className="gradient-text">Sollabs Tech Guide</span>
          </h1>

          <p style={{ fontSize: 18, color: "#94A3B8", lineHeight: 1.8, marginBottom: 32 }}>
            Every laptop sold by Sollabs Tech comes with a warranty — and checking yours takes less than 10 seconds. This guide (with video) shows you exactly how to check your warranty status, find your serial number, and claim your warranty if needed.
          </p>

          {/* YouTube Video */}
          <div style={{ marginBottom: 40, borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,0,0,0.2)", background: "rgba(255,0,0,0.04)" }}>
            <div style={{ padding: "14px 20px", borderBottom: "1px solid rgba(255,0,0,0.15)", display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 20 }}>▶</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: "#FF4444" }}>Watch: How to Check Your Sollabs Tech Warranty</span>
            </div>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
              <iframe
                src="https://www.youtube.com/embed/YCevUGl3EMM"
                title="How to Check Laptop Warranty – Sollabs Tech"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
              />
            </div>
          </div>

          {/* Instagram Reel Link */}
          <div style={{
            marginBottom: 40, padding: "18px 24px", borderRadius: 14,
            background: "linear-gradient(135deg, rgba(131,58,180,0.08), rgba(253,29,29,0.06), rgba(252,176,69,0.08))",
            border: "1px solid rgba(131,58,180,0.25)",
            display: "flex", alignItems: "center", gap: 16,
          }}>
            <span style={{ fontSize: 36, flexShrink: 0 }}>📱</span>
            <div>
              <div style={{ fontSize: 13, color: "#94A3B8", marginBottom: 4 }}>Also on Instagram Reels</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "white", marginBottom: 8 }}>Watch the warranty check tutorial on Instagram</div>
              <a
                href="https://www.instagram.com/reel/Dbze5Bav9uX/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 13, fontWeight: 700, color: "#E1306C", textDecoration: "none" }}
              >
                @sollabstech on Instagram →
              </a>
            </div>
          </div>

          {/* Step by Step */}
          <h2 style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "white", marginBottom: 20, marginTop: 48 }}>
            Step-by-Step: How to Check Your Warranty
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
            {[
              {
                step: "1",
                title: "Find Your Serial Number",
                desc: "Flip your laptop over. Look for the Sollabs Tech warranty sticker on the bottom. Your serial number is printed on it — it's usually a short number like 197979 or 205610.",
                icon: "🔍",
              },
              {
                step: "2",
                title: "Visit the Warranty Checker",
                desc: "Open your browser and go to sollabstech.com/warranty — you can click the link below. This works on mobile and desktop.",
                icon: "🌐",
              },
              {
                step: "3",
                title: "Enter Your Serial Number",
                desc: "Type your serial number exactly as it appears on the sticker into the input box. Then click the \"Check →\" button.",
                icon: "⌨️",
              },
              {
                step: "4",
                title: "View Your Warranty Status",
                desc: "Your full warranty details appear instantly — status (Active / Expired), purchase date, warranty period, and exact expiry date.",
                icon: "✅",
              },
            ].map((s) => (
              <div key={s.step} style={{
                display: "flex", gap: 20, alignItems: "flex-start",
                padding: "20px 24px", borderRadius: 16,
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                  background: "rgba(0,102,255,0.15)", border: "1px solid rgba(0,102,255,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 18, fontWeight: 800, color: "#00AAFF",
                }}>
                  {s.step}
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "white", marginBottom: 6 }}>
                    {s.icon} {s.title}
                  </div>
                  <p style={{ fontSize: 14, color: "#6B7A94", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Check Now CTA */}
          <div style={{
            padding: "28px 32px", borderRadius: 20, marginBottom: 48,
            background: "rgba(0,102,255,0.08)", border: "1px solid rgba(0,102,255,0.25)",
            textAlign: "center",
          }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>🛡️</div>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: "white", marginBottom: 8 }}>Check Your Warranty Now</h3>
            <p style={{ fontSize: 14, color: "#6B7A94", marginBottom: 20 }}>Takes less than 10 seconds. Just enter your serial number.</p>
            <Link
              href="/warranty"
              className="btn-primary"
              style={{ display: "inline-block", padding: "14px 32px", fontSize: 15, textDecoration: "none" }}
            >
              → Check Warranty at sollabstech.com/warranty
            </Link>
          </div>

          {/* How to Claim */}
          <h2 style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "white", marginBottom: 20 }}>
            How to Claim Your Laptop Warranty
          </h2>
          <p style={{ fontSize: 15, color: "#6B7A94", lineHeight: 1.8, marginBottom: 16 }}>
            If your laptop has a hardware issue and your warranty is still active, here's how to raise a claim with Sollabs Tech:
          </p>
          <ol style={{ paddingLeft: 24, display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
            {[
              "Check your warranty status at sollabstech.com/warranty — make sure it shows \"Active\"",
              "Note down your serial number from the sticker on the bottom of your laptop",
              "WhatsApp us at +91 90038 50743 with your serial number and a description of the issue",
              "Our team will confirm your warranty and guide you through the next steps",
              "Drop off or courier your laptop to us — we'll fix it and return it to you",
            ].map((item, i) => (
              <li key={i} style={{ fontSize: 15, color: "#94A3B8", lineHeight: 1.7 }}>
                <span style={{ color: "#00AAFF", fontWeight: 700 }}>{i + 1}.</span> {item}
              </li>
            ))}
          </ol>

          {/* What is Covered */}
          <h2 style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "white", marginBottom: 20 }}>
            What Does the Sollabs Tech Warranty Cover?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 48 }} className="warranty-grid">
            <div style={{ padding: "16px 20px", borderRadius: 14, background: "rgba(0,200,80,0.06)", border: "1px solid rgba(0,200,80,0.2)" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#00C850", marginBottom: 10 }}>✅ COVERED</div>
              {["Display issues (not due to physical damage)", "Battery not charging", "Keyboard / trackpad failure", "RAM or storage hardware faults", "Motherboard component failures", "Overheating / shutdown issues"].map(item => (
                <div key={item} style={{ fontSize: 13, color: "#94A3B8", marginBottom: 6 }}>• {item}</div>
              ))}
            </div>
            <div style={{ padding: "16px 20px", borderRadius: 14, background: "rgba(255,60,60,0.06)", border: "1px solid rgba(255,60,60,0.2)" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#FF6060", marginBottom: 10 }}>❌ NOT COVERED</div>
              {["Physical damage (cracks, dents)", "Liquid / water damage", "Accidental drops", "Charger or accessories", "Software issues / viruses", "Damage due to misuse"].map(item => (
                <div key={item} style={{ fontSize: 13, color: "#94A3B8", marginBottom: 6 }}>• {item}</div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <h2 style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "white", marginBottom: 20 }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 48 }}>
            {[
              { q: "How do I check my Sollabs Tech laptop warranty?", a: "Go to sollabstech.com/warranty, enter the serial number from the sticker at the bottom of your laptop, and click Check. Your warranty status shows instantly — no login needed." },
              { q: "Where is the serial number on my Sollabs Tech laptop?", a: "The serial number is on the Sollabs Tech warranty sticker stuck to the bottom of your laptop. It is usually a short numeric code." },
              { q: "How do I find out if my laptop is still under warranty?", a: "Visit sollabstech.com/warranty and enter your serial number. The page will show whether your warranty is Active or Expired, along with the exact expiry date and days remaining." },
              { q: "How do I claim my Sollabs Tech laptop warranty?", a: "First verify your warranty is active at sollabstech.com/warranty. Then WhatsApp us at +91 90038 50743 with your serial number and issue description. We will guide you through the repair process." },
              { q: "How long is the Sollabs Tech laptop warranty?", a: "Sollabs Tech laptops come with 3 to 12 months warranty depending on the model. Your exact warranty period is shown on the warranty checker page after you enter your serial number." },
              { q: "My warranty is expired — can Sollabs Tech still help?", a: "Yes. Even after warranty expiry, Sollabs Tech offers affordable laptop repair and service. Contact us on WhatsApp at +91 90038 50743 for a quote." },
              { q: "Can I watch a video on how to check my warranty?", a: "Yes! Watch our step-by-step video guide on YouTube at youtube.com/shorts/YCevUGl3EMM or on Instagram at @sollabstech." },
            ].map(({ q, a }) => (
              <details key={q} style={{
                padding: "18px 20px", borderRadius: 14,
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
              }}>
                <summary style={{ fontSize: 15, fontWeight: 700, color: "white", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {q}
                  <span style={{ color: "#00AAFF", flexShrink: 0, marginLeft: 12 }}>＋</span>
                </summary>
                <p style={{ fontSize: 14, color: "#6B7A94", lineHeight: 1.8, marginTop: 12, marginBottom: 0 }}>{a}</p>
              </details>
            ))}
          </div>

          {/* Internal Links */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 48 }} className="warranty-grid">
            <Link href="/warranty" style={{ textDecoration: "none", padding: "18px 20px", borderRadius: 14, background: "rgba(0,102,255,0.08)", border: "1px solid rgba(0,102,255,0.2)", display: "block" }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>🛡️</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 4 }}>Check My Warranty</div>
              <div style={{ fontSize: 12, color: "#475569" }}>sollabstech.com/warranty →</div>
            </Link>
            <Link href="/computers" style={{ textDecoration: "none", padding: "18px 20px", borderRadius: 14, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", display: "block" }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>💻</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 4 }}>Buy a Laptop</div>
              <div style={{ fontSize: 12, color: "#475569" }}>All laptops come with warranty →</div>
            </Link>
          </div>

          {/* Final CTA */}
          <div style={{
            padding: "32px", borderRadius: 20, textAlign: "center",
            background: "rgba(0,102,255,0.08)", border: "1px solid rgba(0,102,255,0.2)",
          }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>💬</div>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: "white", marginBottom: 8 }}>Need Warranty Support?</h3>
            <p style={{ fontSize: 14, color: "#6B7A94", marginBottom: 20 }}>
              WhatsApp us with your serial number — we'll respond instantly.
            </p>
            <a
              href="https://wa.me/919003850743?text=Hi, I need help with my Sollabs Tech laptop warranty"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: "inline-block", fontSize: 15, padding: "14px 32px", textDecoration: "none" }}
            >
              💬 WhatsApp +91 90038 50743
            </a>
          </div>

        </div>
      </article>

      <style>{`
        @media (max-width: 600px) {
          .warranty-grid { grid-template-columns: 1fr !important; }
        }
        details summary::-webkit-details-marker { display: none; }
      `}</style>
    </>
  );
}
