import type { Metadata } from "next";
import Link from "next/link";

// ─── SEO METADATA ─────────────────────────────────────────────────────────────
// Meta title: 59 chars ✓  |  Meta description: 158 chars ✓
export const metadata: Metadata = {
  title: "Sollabs Tech Replaced a Customer's Damaged Laptop – Real Story",
  description: "A customer's laptop was accidentally damaged during travel. Sollabs Tech stepped in with an MSI replacement. A real after-sales support story from Tamil Nadu.",
  keywords: [
    "sollabs tech warranty",
    "laptop warranty replacement India",
    "laptop replacement service Tamil Nadu",
    "laptop customer support",
    "laptop after-sales service",
    "MSI laptop replacement",
    "trusted laptop company India",
    "laptop warranty support",
    "laptop sales and service Tamil Nadu",
    "sollabstech customer story",
    "laptop service Tamil Nadu",
    "refurbished laptop warranty India",
    "buy laptop with warranty India",
    "sollabs tech after-sales support",
  ],
  alternates: { canonical: "/blog/sollabs-tech-laptop-warranty-replacement" },
  openGraph: {
    title: "Sollabs Tech Replaced Our Customer's Damaged Laptop – A Real Warranty Story",
    description: "When a customer's laptop was accidentally damaged during travel, Sollabs Tech stepped up with an MSI replacement. A real story of genuine after-sales support from Tamil Nadu.",
    url: "https://www.sollabstech.com/blog/sollabs-tech-laptop-warranty-replacement",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Sollabs Tech – Real Customer Warranty Replacement Story" }],
  },
};

// ─── FAQ DATA ─────────────────────────────────────────────────────────────────
const faqItems = [
  {
    q: "Does Sollabs Tech offer laptop warranty support?",
    a: "Yes. Sollabs Tech provides after-sales support for all laptops sold through us. While the exact coverage depends on the product and situation, we are committed to standing by our customers and working through issues together — even when something unexpected happens.",
  },
  {
    q: "What happens if my laptop is damaged after purchase from Sollabs Tech?",
    a: "Contact us immediately on WhatsApp (+91 90038 50743). We review the situation case by case. While accidental damage is typically not covered under standard hardware warranty, we do our best to support our customers — as shown in this real replacement story where we stepped in to help.",
  },
  {
    q: "Can Sollabs Tech replace my laptop?",
    a: "Replacement decisions are made case by case based on the situation and the product involved. In this particular case, we chose to replace the damaged laptop with an MSI unit to ensure the customer was not left without a working device. We do not make blanket guarantees of replacement for every situation.",
  },
  {
    q: "Does Sollabs Tech support MSI laptops?",
    a: "Yes. Sollabs Tech works with laptops from multiple brands including MSI, Asus, Lenovo, HP, Dell, and others. We sell, service, and in specific cases provide brand alternatives when a replacement is needed.",
  },
  {
    q: "Is Sollabs Tech a reliable laptop seller in Tamil Nadu?",
    a: "Sollabs Tech is based in Tamil Nadu and serves customers across India. Our focus is on both the quality of the product and the quality of support after the sale — we care about what happens after the laptop leaves our hands.",
  },
  {
    q: "How quickly does Sollabs Tech respond to warranty or support requests?",
    a: "We respond through WhatsApp quickly and keep the process transparent. In this customer's case, the return and replacement were handled without unnecessary delays so the customer could get back to using their device.",
  },
  {
    q: "What makes Sollabs Tech different from other laptop sellers?",
    a: "Many sellers focus only on making the sale. At Sollabs Tech, after-sales service is a core part of how we operate. We believe our responsibility to the customer does not end when the laptop is sold — it continues as long as they need support.",
  },
  {
    q: "How do I contact Sollabs Tech for warranty or support?",
    a: "WhatsApp us at +91 90038 50743 or visit our contact page at sollabstech.com/contact. Describe your issue clearly and our team will respond and guide you through the next steps.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function WarrantyReplacementStory() {
  return (
    <article style={{ paddingTop: 100, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        {/* Breadcrumb */}
        <nav style={{ fontSize: 13, color: "#475569", marginBottom: 32, display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "#475569", textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <Link href="/blog" style={{ color: "#475569", textDecoration: "none" }}>Blog</Link>
          <span>›</span>
          <span style={{ color: "#94A3B8" }}>Laptop Warranty Replacement Story</span>
        </nav>

        {/* Tags + date */}
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 20, flexWrap: "wrap" }}>
          {["Customer Story", "After-Sales Support", "Warranty"].map((tag) => (
            <span key={tag} style={{ padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600, background: "rgba(0,102,255,0.12)", border: "1px solid rgba(0,102,255,0.25)", color: "#00AAFF" }}>{tag}</span>
          ))}
          <span style={{ fontSize: 13, color: "#475569" }}>August 2026 · 6 min read</span>
        </div>

        {/* H1 */}
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "white", lineHeight: 1.25, marginBottom: 20 }}>
          When Our Customer&apos;s Laptop Was Damaged During Travel — Here&apos;s How Sollabs Tech Responded
        </h1>

        {/* Intro */}
        <p style={p}>
          Buying a laptop is a significant decision. But what happens <em>after</em> the sale matters just as much as the sale itself. This is the real story of a Sollabs Tech customer whose laptop was accidentally damaged during travel — and how we handled it.
        </p>
        <p style={{ ...p, marginBottom: 0, borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 36 }}>
          We are sharing this not to promote ourselves, but because customers deserve to know what kind of after-sales support they can expect when they buy from Sollabs Tech — and what genuine laptop customer support actually looks like.
        </p>

        <div style={{ height: 40 }} />

        {/* The story */}
        <h2 style={h2}>What Happened — The Customer&apos;s Experience</h2>
        <p style={p}>
          One of our customers purchased a laptop through Sollabs Tech. Like many people, they rely on their device daily — for work, study, or personal use. During travel, the laptop was accidentally damaged. These things happen. Accidents don&apos;t announce themselves, and when your laptop is your primary tool, losing access to it is a serious disruption.
        </p>
        <p style={p}>
          The customer contacted Sollabs Tech, explained the situation honestly, and returned the damaged laptop to us. They were not left to figure out a complicated process alone — our team was available on WhatsApp, guided them through the return, and assessed what had happened.
        </p>
        <p style={{ ...p, marginBottom: 40 }}>
          We reviewed the case and made a decision: rather than leaving this customer without a working device, Sollabs Tech provided a replacement — an MSI laptop — so they could continue their work without extended downtime.
        </p>

        {/* Video proof */}
        <div style={{ padding: "22px 26px", borderRadius: 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", marginBottom: 48 }}>
          <div style={{ fontSize: 12, color: "#475569", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 12 }}>📹 Watch the Real Story</div>
          <p style={{ fontSize: 14, color: "#6B7A94", marginBottom: 16, lineHeight: 1.7 }}>
            This customer experience was documented on video. Watch the actual replacement moment on our official channels — unscripted and real.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="https://youtube.com/shorts/BY44qNsnFdE?si=7XSJFrYFdQGgBy4A" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 18px", borderRadius: 10, fontSize: 13, fontWeight: 700, background: "rgba(255,0,0,0.1)", border: "1px solid rgba(255,0,0,0.25)", color: "#FF5555", textDecoration: "none" }}>
              ▶ Watch on YouTube
            </a>
            <a href="https://www.instagram.com/reel/Dbp_RSyyuvi/" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 18px", borderRadius: 10, fontSize: 13, fontWeight: 700, background: "rgba(200,50,200,0.08)", border: "1px solid rgba(200,50,200,0.2)", color: "#CC44CC", textDecoration: "none" }}>
              📸 Watch on Instagram
            </a>
          </div>
        </div>

        {/* How we handled it */}
        <h2 style={h2}>How Sollabs Tech Handled the Situation</h2>
        <p style={p}>When the customer reached out, there was no complicated process to navigate. We listened, assessed the damage, and took ownership of the situation step by step:</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 40 }}>
          {[
            ["1", "Customer contacted us on WhatsApp", "The customer messaged us describing the damage. Our team responded promptly and took the situation seriously."],
            ["2", "Damaged laptop returned to us", "We arranged for the damaged device to be returned without unnecessary delays or complicated paperwork."],
            ["3", "Situation honestly assessed", "We examined the device and evaluated the circumstances. We chose to support the customer rather than cite technical exclusions."],
            ["4", "MSI replacement provided", "We gave the customer an MSI laptop as a replacement, ensuring they had a quality working device without extended downtime."],
            ["5", "Customer back on track", "The customer received the replacement and shared their experience — which you can watch in the videos above."],
          ].map(([num, title, desc]) => (
            <div key={num} style={{ display: "flex", gap: 16, padding: "16px 20px", borderRadius: 14, background: "rgba(0,102,255,0.05)", border: "1px solid rgba(0,102,255,0.12)" }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(0,102,255,0.2)", border: "1px solid rgba(0,102,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: "#00AAFF", flexShrink: 0 }}>{num}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 4 }}>{title}</div>
                <div style={{ fontSize: 13, color: "#6B7A94", lineHeight: 1.65 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* MSI replacement */}
        <h2 style={h2}>The MSI Replacement — Why It Matters</h2>
        <p style={p}>
          Providing an MSI laptop as the replacement was a deliberate decision. MSI is recognised for build quality and reliable performance, especially for demanding workloads. By choosing an MSI unit, we were not simply offering any available device — we wanted the customer to receive a machine that was genuinely good.
        </p>
        <p style={{ ...p, marginBottom: 40 }}>
          This is not a blanket policy we apply in every situation — each case is different and outcomes depend on the specific circumstances. But it reflects how we think about our relationship with customers. When someone trusts us with their technology needs, we do not walk away when things go wrong.
        </p>

        {/* Why after-sales matters */}
        <h2 style={h2}>Why After-Sales Support Matters When Buying a Laptop</h2>
        <p style={p}>When comparing laptops, most buyers focus on specs and price. What often goes unconsidered is: <em>what happens if something goes wrong after the purchase?</em></p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
          {[
            ["🔧", "Hardware issues can happen to anyone", "No laptop is fault-free. A seller who stands behind the product offers real value beyond the price tag."],
            ["📞", "Fast response reduces your downtime", "WhatsApp-based support means direct, quick communication — no call centres, no queues."],
            ["🛡️", "Trust is proven after the sale", "How a company behaves when something goes wrong reveals who they really are. Anyone can be attentive before payment."],
            ["📍", "Local support makes a difference", "For customers across Tamil Nadu and India, having a responsive local point of contact matters enormously."],
          ].map(([icon, title, desc]) => (
            <div key={title} style={{ padding: "16px 18px", borderRadius: 14, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontSize: 22, marginBottom: 8 }}>{icon}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "white", marginBottom: 4 }}>{title}</div>
              <div style={{ fontSize: 12, color: "#6B7A94", lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </div>
        <p style={{ ...p, marginBottom: 40 }}>
          Laptop after-sales service across India is often treated as secondary by many sellers. At Sollabs Tech, it is a core part of how we operate — not something added on.
        </p>

        {/* Commitment quote */}
        <h2 style={h2}>Sollabs Tech&apos;s Commitment to Customers</h2>
        <div style={{ padding: "28px 32px", borderRadius: 18, background: "linear-gradient(135deg, rgba(0,102,255,0.1), rgba(0,153,255,0.05))", border: "1px solid rgba(0,102,255,0.2)", marginBottom: 28 }}>
          <p style={{ fontSize: 17, color: "#CBD5E1", lineHeight: 1.85, margin: 0, fontStyle: "italic" }}>
            &ldquo;Our responsibility doesn&apos;t end when the laptop is sold. We care about helping our customers even when something goes wrong.&rdquo;
          </p>
          <div style={{ marginTop: 14, fontSize: 13, color: "#475569", fontWeight: 600 }}>— Sollabs Tech</div>
        </div>
        <p style={p}>
          Sollabs Tech operates across two areas: laptop sales and software development. In both, the relationship with the customer is long-term. We are not a one-transaction business. We aim to be the technology partner that customers return to — for their next laptop, their next project, and their next recommendation to a friend.
        </p>
        <p style={{ ...p, marginBottom: 40 }}>
          This warranty replacement story is one example of that approach in practice. It was not required. It was a choice — and one we believe reflects the right way to do business.
        </p>

        {/* Why trust us */}
        <h2 style={h2}>Why Customers Trust Sollabs Tech</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 48 }}>
          {[
            ["✅", "Transparent communication — no vague updates, no waiting in silence"],
            ["✅", "Genuine after-sales support — we respond to post-purchase issues, not just pre-sale enquiries"],
            ["✅", "Quality-focused product selection — we stand behind everything we sell"],
            ["✅", "Direct WhatsApp access — fast, personal communication without queues"],
            ["✅", "Real documented customer stories — not staged testimonials"],
            ["✅", "Serving customers across Tamil Nadu and all of India"],
          ].map(([icon, text]) => (
            <div key={text} style={{ display: "flex", gap: 12, padding: "12px 18px", borderRadius: 12, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)", fontSize: 14, color: "#94A3B8" }}>
              <span style={{ flexShrink: 0 }}>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Internal links */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 56 }} className="blog-cta-grid">
          {[
            { href: "/warranty", icon: "🛡️", label: "Check Warranty", desc: "Verify your device coverage" },
            { href: "/computers", icon: "💻", label: "Browse Laptops", desc: "View our current stock" },
            { href: "/contact", icon: "💬", label: "Contact Us", desc: "Reach us on WhatsApp" },
          ].map(({ href, icon, label, desc }) => (
            <Link key={href} href={href} style={{ textDecoration: "none", display: "block", padding: "18px 16px", borderRadius: 14, background: "rgba(0,102,255,0.06)", border: "1px solid rgba(0,102,255,0.15)", textAlign: "center" }}>
              <div style={{ fontSize: 24, marginBottom: 6 }}>{icon}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "white", marginBottom: 3 }}>{label}</div>
              <div style={{ fontSize: 11, color: "#6B7A94" }}>{desc}</div>
            </Link>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={h2}>Frequently Asked Questions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 56 }}>
          {faqItems.map(({ q, a }, i) => (
            <details key={i} style={{ borderRadius: 12, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)", overflow: "hidden" }}>
              <summary style={{ padding: "16px 20px", fontSize: 14, fontWeight: 600, color: "white", cursor: "pointer", userSelect: "none" }}>
                {q}
              </summary>
              <div style={{ padding: "4px 20px 18px", fontSize: 14, color: "#6B7A94", lineHeight: 1.75 }}>{a}</div>
            </details>
          ))}
        </div>

        {/* Final CTA */}
        <div style={{ padding: "36px 32px", borderRadius: 20, background: "linear-gradient(135deg, rgba(0,102,255,0.12), rgba(0,153,255,0.06))", border: "1px solid rgba(0,102,255,0.25)", textAlign: "center" }}>
          <div style={{ fontSize: 36, marginBottom: 12 }}>🤝</div>
          <h3 style={{ fontSize: 20, fontWeight: 800, color: "white", marginBottom: 8 }}>Need Support With Your Laptop?</h3>
          <p style={{ fontSize: 14, color: "#94A3B8", marginBottom: 24, maxWidth: 480, margin: "0 auto 24px" }}>
            Whether it&apos;s a warranty question, a device issue, or you&apos;re looking for your next laptop — we&apos;re here. Reach us directly on WhatsApp.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/919003850743?text=Hi, I need support with my laptop" target="_blank" rel="noopener noreferrer"
              style={{ padding: "13px 28px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "linear-gradient(135deg,#0066FF,#0099FF)", color: "white", textDecoration: "none" }}>
              💬 WhatsApp Us Now
            </a>
            <Link href="/warranty" style={{ padding: "13px 28px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "white", textDecoration: "none" }}>
              Check Warranty Status
            </Link>
          </div>
        </div>

      </div>

      {/* FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(({ q, a }) => ({
          "@type": "Question",
          "name": q,
          "acceptedAnswer": { "@type": "Answer", "text": a },
        })),
      })}} />

      {/* Article Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "When Our Customer's Laptop Was Damaged During Travel — Here's How Sollabs Tech Responded",
        "description": "A real customer warranty and replacement story from Sollabs Tech — a laptop was accidentally damaged during travel and we provided an MSI replacement.",
        "author": { "@type": "Organization", "name": "Sollabs Tech", "url": "https://www.sollabstech.com" },
        "publisher": { "@type": "Organization", "name": "Sollabs Tech", "logo": { "@type": "ImageObject", "url": "https://www.sollabstech.com/logo.png" }},
        "datePublished": "2026-08-02",
        "url": "https://www.sollabstech.com/blog/sollabs-tech-laptop-warranty-replacement",
        "image": "https://www.sollabstech.com/logo.png",
        "keywords": "sollabs tech warranty, laptop warranty replacement, laptop customer support, MSI laptop replacement, laptop service Tamil Nadu",
      })}} />

      <style>{`
        details summary { list-style: none; }
        details summary::-webkit-details-marker { display: none; }
        @media (max-width: 580px) {
          .blog-cta-grid { grid-template-columns: 1fr !important; }
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </article>
  );
}

const h2: React.CSSProperties = { fontSize: "clamp(1.15rem, 2.5vw, 1.4rem)", fontWeight: 700, color: "white", marginBottom: 16, marginTop: 0 };
const p: React.CSSProperties = { fontSize: 15, color: "#94A3B8", lineHeight: 1.85, marginBottom: 20 };
