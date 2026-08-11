import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sollabs Tech Warranty Policy – How to Check Your Laptop Warranty Status",
  description: "Sollabs Tech offers 3–12 month warranty on all refurbished and used laptops. Learn how to check your Sollabs Tech laptop warranty status, what's covered, and how to claim it.",
  keywords: [
    "sollabs tech warranty",
    "sollabstech warranty",
    "sollabstech laptop warranty",
    "sollabstech warranty checker",
    "sollabstech warranty check",
    "sollabstech warranty status",
    "sollabstech warranty policy",
    "sollabs tech laptop warranty check",
    "check sollabstech warranty",
    "sollabs tech refurbished laptop warranty India",
  ],
  alternates: { canonical: "/blog/sollabstech-warranty-policy" },
  openGraph: {
    title: "Sollabs Tech Warranty Policy – How to Check Your Laptop Warranty Status",
    description: "Sollabs Tech offers 3–12 month warranty on all laptops. Check your warranty status instantly using your serial number.",
    url: "https://www.sollabstech.com/blog/sollabstech-warranty-policy",
  },
};

export default function WarrantyBlogPost() {
  return (
    <article style={{ paddingTop: 100, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>

        {/* Breadcrumb */}
        <nav style={{ fontSize: 13, color: "#475569", marginBottom: 32, display: "flex", gap: 6, alignItems: "center" }}>
          <Link href="/" style={{ color: "#475569", textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <Link href="/blog" style={{ color: "#475569", textDecoration: "none" }}>Blog</Link>
          <span>›</span>
          <span style={{ color: "#94A3B8" }}>Sollabs Tech Warranty Policy</span>
        </nav>

        {/* Tag + Date */}
        <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 20 }}>
          <span style={{ padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600, background: "rgba(0,102,255,0.15)", border: "1px solid rgba(0,102,255,0.3)", color: "#00AAFF" }}>
            Warranty
          </span>
          <span style={{ fontSize: 13, color: "#475569" }}>August 2, 2026</span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: 20 }}>
          Sollabs Tech Warranty Policy –<br />How to Check Your Laptop Warranty Status
        </h1>

        <p style={{ fontSize: 17, color: "#94A3B8", lineHeight: 1.8, marginBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 32 }}>
          Every laptop sold by Sollabs Tech comes with a warranty — no questions asked. Here's everything you need to know about our warranty coverage, what's included, and how to check your Sollabs Tech warranty status right now.
        </p>

        {/* CTA Box */}
        <div style={{ padding: "24px 28px", borderRadius: 16, background: "rgba(0,102,255,0.08)", border: "1px solid rgba(0,102,255,0.25)", marginBottom: 48, display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "white" }}>🔍 Check Your Sollabs Tech Warranty Right Now</div>
          <p style={{ fontSize: 14, color: "#94A3B8", margin: 0 }}>
            Enter your laptop serial number on our warranty checker page to instantly see your coverage, remaining months, and purchase details.
          </p>
          <Link
            href="/warranty"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 22px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "linear-gradient(135deg,#0066FF,#0099FF)", color: "white", textDecoration: "none", width: "fit-content" }}
          >
            Check My Warranty →
          </Link>
        </div>

        {/* Section 1 */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "white", marginBottom: 14, marginTop: 0 }}>
          What Is the Sollabs Tech Warranty?
        </h2>
        <p style={{ fontSize: 15, color: "#94A3B8", lineHeight: 1.8, marginBottom: 28 }}>
          The <strong style={{ color: "#CBD5E1" }}>Sollabs Tech warranty</strong> is a hardware protection plan that comes with every laptop we sell — whether it's a refurbished gaming laptop, a business laptop, or a student machine. Our warranty covers manufacturing defects, hardware failures, and component issues for a period of <strong style={{ color: "#CBD5E1" }}>3 to 12 months</strong> depending on the product.
        </p>
        <p style={{ fontSize: 15, color: "#94A3B8", lineHeight: 1.8, marginBottom: 40 }}>
          Unlike big retail stores, we personally stand behind every laptop we sell. If anything goes wrong during the warranty period, you reach us directly on WhatsApp and we fix it — fast.
        </p>

        {/* Section 2 */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "white", marginBottom: 14 }}>
          What's Covered Under Sollabs Tech Laptop Warranty?
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 40 }}>
          {[
            ["✅", "Hardware failures", "Motherboard, RAM, storage, and other internal components"],
            ["✅", "Display issues", "Screen defects, backlight problems, dead pixels"],
            ["✅", "Keyboard & trackpad", "Key failures, unresponsive trackpad"],
            ["✅", "Battery performance", "Significant capacity drop below advertised level"],
            ["✅", "Charging ports", "Loose or broken charging connectors"],
            ["❌", "Physical damage", "Drops, cracks, liquid spills — not covered"],
            ["❌", "Software issues", "OS crashes, virus damage — not covered under hardware warranty"],
          ].map(([icon, title, desc]) => (
            <div key={title as string} style={{ display: "flex", gap: 14, padding: "14px 18px", borderRadius: 12, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <span style={{ fontSize: 16, flexShrink: 0 }}>{icon}</span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "white", marginBottom: 2 }}>{title as string}</div>
                <div style={{ fontSize: 13, color: "#6B7A94" }}>{desc as string}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Section 3 */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "white", marginBottom: 14 }}>
          How to Check Your Sollabs Tech Warranty Status
        </h2>
        <p style={{ fontSize: 15, color: "#94A3B8", lineHeight: 1.8, marginBottom: 16 }}>
          Checking your <strong style={{ color: "#CBD5E1" }}>Sollabs Tech warranty</strong> is simple. We have a dedicated online warranty checker at <strong style={{ color: "#00AAFF" }}>sollabstech.com/warranty</strong>. Here's how to use it:
        </p>
        <ol style={{ paddingLeft: 20, fontSize: 15, color: "#94A3B8", lineHeight: 2, marginBottom: 28 }}>
          <li>Go to <Link href="/warranty" style={{ color: "#00AAFF" }}>sollabstech.com/warranty</Link></li>
          <li>Enter your laptop's serial number (found on the bottom sticker or in Settings → About)</li>
          <li>Click <strong style={{ color: "#CBD5E1" }}>Check Warranty</strong></li>
          <li>Your warranty status, coverage period, and purchase details appear instantly</li>
        </ol>
        <p style={{ fontSize: 15, color: "#94A3B8", lineHeight: 1.8, marginBottom: 40 }}>
          If you don't have your serial number, WhatsApp us at <strong style={{ color: "#CBD5E1" }}>+91 90038 50743</strong> with your order details and we'll look it up for you.
        </p>

        {/* Section 4 */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "white", marginBottom: 14 }}>
          How to Claim Your Sollabs Tech Warranty
        </h2>
        <p style={{ fontSize: 15, color: "#94A3B8", lineHeight: 1.8, marginBottom: 16 }}>
          Claiming your Sollabs Tech laptop warranty is straightforward:
        </p>
        <ol style={{ paddingLeft: 20, fontSize: 15, color: "#94A3B8", lineHeight: 2, marginBottom: 40 }}>
          <li>WhatsApp us at <strong style={{ color: "#CBD5E1" }}>+91 90038 50743</strong> describing the issue</li>
          <li>Send photos or a short video of the problem</li>
          <li>We'll guide you to either: ship the laptop to us, or visit our service center</li>
          <li>We repair or replace the faulty component at no cost within the warranty period</li>
        </ol>

        {/* Section 5 */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "white", marginBottom: 14 }}>
          How Long Is the Sollabs Tech Warranty?
        </h2>
        <p style={{ fontSize: 15, color: "#94A3B8", lineHeight: 1.8, marginBottom: 16 }}>
          Warranty duration depends on the laptop's condition and category:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 40 }}>
          {[
            ["Gaming Laptops", "6–12 months"],
            ["Business Laptops", "6–12 months"],
            ["Student Laptops", "3–6 months"],
            ["Budget Refurbished", "3 months"],
          ].map(([cat, dur]) => (
            <div key={cat} style={{ padding: "16px 20px", borderRadius: 12, background: "rgba(0,102,255,0.06)", border: "1px solid rgba(0,102,255,0.15)", textAlign: "center" }}>
              <div style={{ fontSize: 13, color: "#6B7A94", marginBottom: 6 }}>{cat}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#00AAFF" }}>{dur}</div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "white", marginBottom: 20 }}>
          Frequently Asked Questions About Sollabs Tech Warranty
        </h2>
        {[
          {
            q: "How do I know if my Sollabs Tech laptop is still under warranty?",
            a: "Use our online warranty checker at sollabstech.com/warranty — enter your serial number and see your status instantly.",
          },
          {
            q: "Can I extend my Sollabs Tech warranty?",
            a: "Yes! Contact us on WhatsApp and we can discuss extended warranty options for your laptop.",
          },
          {
            q: "Does Sollabs Tech warranty cover the whole of India?",
            a: "Yes. We offer doorstep pickup for warranty repairs across all major Indian cities. Shipping costs for warranty claims are covered by us.",
          },
          {
            q: "What if my issue isn't covered under warranty?",
            a: "We still fix it — just at a transparent, affordable service charge. Contact us on WhatsApp for a quote.",
          },
        ].map(({ q, a }) => (
          <div key={q} style={{ marginBottom: 20, padding: "18px 20px", borderRadius: 12, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 8 }}>Q: {q}</div>
            <div style={{ fontSize: 14, color: "#6B7A94", lineHeight: 1.7 }}>A: {a}</div>
          </div>
        ))}

        {/* Final CTA */}
        <div style={{ marginTop: 48, padding: "32px", borderRadius: 20, background: "linear-gradient(135deg, rgba(0,102,255,0.15), rgba(0,153,255,0.08))", border: "1px solid rgba(0,102,255,0.3)", textAlign: "center" }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🛡️</div>
          <h3 style={{ fontSize: 20, fontWeight: 800, color: "white", marginBottom: 8 }}>Check Your Sollabs Tech Warranty Now</h3>
          <p style={{ fontSize: 14, color: "#94A3B8", marginBottom: 20 }}>
            Enter your serial number and see your coverage in seconds.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/warranty"
              style={{ padding: "12px 28px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "linear-gradient(135deg,#0066FF,#0099FF)", color: "white", textDecoration: "none" }}
            >
              Check Warranty Status
            </Link>
            <a
              href="https://wa.me/919003850743?text=Hi, I need help with my Sollabs Tech laptop warranty"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "12px 28px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "white", textDecoration: "none" }}
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 520px) {
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </article>
  );
}
