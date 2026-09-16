import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ASUS ROG Phone 5s Pro: For Sale With Box & Bill",
  description:
    "An ASUS ROG Phone 5s Pro gaming phone in brand-new condition (no scratches) is available through Sollabs Tech Phones for ₹25,000, complete with its original box and bill.",
  keywords: [
    "asus rog phone 5s pro price",
    "asus rog phone 5s pro used",
    "buy asus rog phone 5s pro madurai",
    "rog phone 5s pro for sale india",
    "second hand rog phone madurai",
    "gaming phone for sale madurai",
    "sollabs tech phones",
  ],
  alternates: { canonical: "/blog/asus-rog-phone-5s-pro-price-madurai" },
  openGraph: {
    title: "ASUS ROG Phone 5s Pro: For Sale With Box & Bill",
    description:
      "An ASUS ROG Phone 5s Pro in brand-new condition — no scratches — is available through Sollabs Tech Phones for ₹25,000, with box and original bill.",
    url: "https://www.sollabstech.com/blog/asus-rog-phone-5s-pro-price-madurai",
    type: "article",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Sollabs Tech" }],
  },
};

const PUBLISHED_ISO = "2026-09-16";
const PUBLISHED_HUMAN = "16 September 2026";
const CANONICAL = "https://www.sollabstech.com/blog/asus-rog-phone-5s-pro-price-madurai";
const PRICE_INR = 25000;
const WHATSAPP = "https://wa.me/919003850743?text=Hi, I'm interested in the ASUS ROG Phone 5s Pro listed on your blog";

const pStyle = { fontSize: 15, color: "#94A3B8", lineHeight: 1.85, marginBottom: 12 } as const;
const h2Style = { fontSize: "1.4rem", fontWeight: 700, color: "#ffffff", marginTop: 40, marginBottom: 14 } as const;

const specs: { label: string; value: string }[] = [
  { label: "Chipset", value: "Snapdragon 8 Gen 1 (enhanced binning)" },
  { label: "Display", value: "6.78\" AMOLED, 144Hz refresh rate" },
  { label: "Battery", value: "6000 mAh with 65W fast charging" },
  { label: "Rear display", value: "ROG Vision — the 5s Pro's signature mini display" },
  { label: "Gaming extras", value: "AirTriggers shoulder buttons, front stereo speakers" },
];

const highlights: { title: string; desc: string }[] = [
  {
    title: "Brand-new condition",
    desc: "Not a single scratch, dent or speck of dust — this unit looks and feels exactly like a factory-new phone.",
  },
  {
    title: "Complete box",
    desc: "The original retail box is included — useful if you ever want to resell the phone yourself.",
  },
  {
    title: "Original bill",
    desc: "Comes with the purchase invoice, which confirms the phone is genuine, not reported lost or stolen, and helps establish any remaining manufacturer warranty.",
  },
  {
    title: "One unit only",
    desc: "This is a single specific phone, not open stock — first serious enquiry on WhatsApp gets it.",
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Is this ASUS ROG Phone 5s Pro new or used?",
    a: "This unit is in brand-new condition — not a single scratch, dent or speck of dust. It is available through Sollabs Tech Phones with its original box and bill (purchase invoice).",
  },
  {
    q: "What does “with box and bill” mean?",
    a: "The phone comes with its original retail packaging and the invoice from its first purchase — two things that confirm the unit is genuine and complete, not just the phone on its own.",
  },
  {
    q: "What is the price?",
    a: "It is listed at ₹25,000, including the original box and bill. Message us on WhatsApp to confirm it is still available before you travel or pay anything.",
  },
  {
    q: "How do I buy or reserve it?",
    a: "Message Sollabs Tech on WhatsApp at +91 90038 50743. Since it is a single unit, we recommend reaching out as soon as possible if you are interested.",
  },
  {
    q: "Is there a warranty on this phone?",
    a: "The original bill is included, which can be used to check any remaining ASUS manufacturer warranty. Ask us on WhatsApp to confirm the warranty status before you buy.",
  },
  {
    q: "Is this related to Sollabs Tech Phones?",
    a: "Yes. This is one of the first units moving through Sollabs Tech Phones, the upcoming used-phone venture from Sollabs Tech, ahead of its full launch.",
  },
];

export default function AsusRogPhone5sProListingPage() {
  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ASUS ROG Phone 5s Pro (Brand-new condition, with box & bill)",
    brand: { "@type": "Brand", name: "ASUS" },
    description:
      "ASUS ROG Phone 5s Pro gaming phone in brand-new condition — no scratches, no dents, no dust — sold with its original box and bill, available through Sollabs Tech Phones.",
    offers: {
      "@type": "Offer",
      price: String(PRICE_INR),
      priceCurrency: "INR",
      availability: "https://schema.org/LimitedAvailability",
      url: CANONICAL,
      seller: { "@type": "Organization", name: "Sollabs Tech" },
    },
  };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "ASUS ROG Phone 5s Pro: For Sale With Box & Bill",
    description:
      "An ASUS ROG Phone 5s Pro in brand-new condition is available through Sollabs Tech Phones for ₹25,000, complete with box and original bill.",
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
      { "@type": "ListItem", position: 3, name: "ASUS ROG Phone 5s Pro", item: CANONICAL },
    ],
  };

  return (
    <article style={{ paddingTop: 100, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
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
          <span style={{ color: "#94A3B8" }}>ASUS ROG Phone 5s Pro</span>
        </nav>

        {/* Tag + date */}
        <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 20, flexWrap: "wrap" }}>
          <span style={{ padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600, background: "rgba(0,102,255,0.15)", border: "1px solid rgba(0,102,255,0.3)", color: "#00AAFF" }}>
            For Sale
          </span>
          <span style={{ fontSize: 13, color: "#475569" }}>{PUBLISHED_HUMAN}</span>
          <span style={{ fontSize: 13, color: "#475569" }}>&middot; 3 min read</span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: 20 }}>
          ASUS ROG Phone 5s Pro — With Box &amp; Bill
        </h1>

        <p style={{ fontSize: 17, color: "#94A3B8", lineHeight: 1.85, marginBottom: 8 }}>
          {"An "}
          <strong style={{ color: "#fff" }}>ASUS ROG Phone 5s Pro</strong>
          {" in brand-new condition — no scratches, no dents, no dust — is available through "}
          <Link href="/blog/sollabs-tech-phones-coming-soon" style={{ color: "#00AAFF", textDecoration: "none" }}>
            Sollabs Tech Phones
          </Link>
          {" — complete with its original box and bill."}
        </p>

        {/* Price / quick answer box */}
        <div style={{ padding: "22px 26px", borderRadius: 16, background: "rgba(0,102,255,0.08)", border: "1px solid rgba(0,102,255,0.25)", margin: "24px 0 8px" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#00AAFF", marginBottom: 10, letterSpacing: "0.05em" }}>
            LISTING SUMMARY
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
            <span style={{ fontSize: 34, fontWeight: 800, color: "#fff" }}>
              ₹{PRICE_INR.toLocaleString("en-IN")}
            </span>
            <span style={{ fontSize: 13, color: "#94A3B8" }}>brand-new condition · box &amp; bill included</span>
          </div>
          <p style={{ fontSize: 14, color: "#CBD5E1", lineHeight: 1.7, margin: 0 }}>
            ASUS ROG Phone 5s Pro in brand-new condition — no scratches, no dents, no dust — sold with the original
            box and bill. One unit only. Message us on WhatsApp to confirm it is still available before you travel
            or pay anything.
          </p>
        </div>

        <h2 style={h2Style}>What comes with this unit</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 8 }}>
          {highlights.map((h) => (
            <div key={h.title} style={{ padding: "16px 20px", borderRadius: 14, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: "white", marginBottom: 6 }}>{h.title}</div>
              <div style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.7 }}>{h.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={h2Style}>About the ASUS ROG Phone 5s Pro</h2>
        <p style={pStyle}>
          The ROG Phone 5s Pro is ASUS&apos;s flagship gaming phone — built for high frame-rate mobile gaming rather
          than everyday specs on paper. Reference specifications for this model:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 12 }}>
          {specs.map((s) => (
            <div key={s.label} style={{ display: "flex", justifyContent: "space-between", gap: 12, padding: "10px 16px", borderRadius: 10, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <span style={{ fontSize: 13, color: "#64748B" }}>{s.label}</span>
              <span style={{ fontSize: 13, color: "#C4D0E0", fontWeight: 500, textAlign: "right" }}>{s.value}</span>
            </div>
          ))}
        </div>
        <p style={{ ...pStyle, fontSize: 13, color: "#64748B", fontStyle: "italic" }}>
          These are the model&apos;s general specifications. This unit is in brand-new condition — no scratches, no
          dents, no dust; exact RAM/storage configuration will be confirmed when you message us.
        </p>

        <h2 style={h2Style}>Why buy through Sollabs Tech</h2>
        <p style={pStyle}>
          This listing is part of Sollabs Tech Phones — the same team behind Sollabs Tech&apos;s laptops and custom
          PCs, now doing the same for phones: honest condition details, direct communication, and support on
          WhatsApp instead of an anonymous marketplace listing.
        </p>

        {/* FAQ */}
        <h2 style={h2Style}>Frequently asked questions</h2>
        {faqs.map((f) => (
          <div key={f.q} style={{ marginBottom: 14, padding: "18px 20px", borderRadius: 12, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 8 }}>{f.q}</div>
            <div style={{ fontSize: 14, color: "#6B7A94", lineHeight: 1.75 }}>{f.a}</div>
          </div>
        ))}

        {/* CTA */}
        <div style={{ marginTop: 44, padding: "28px", borderRadius: 20, background: "linear-gradient(135deg, rgba(0,102,255,0.15), rgba(0,153,255,0.08))", border: "1px solid rgba(0,102,255,0.3)" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "white", marginBottom: 10 }}>
            Interested in this phone?
          </h2>
          <p style={{ fontSize: 14, color: "#CBD5E1", lineHeight: 1.8, marginBottom: 18 }}>
            ₹25,000, brand-new condition — no scratches, no dents, no dust — box and bill included. It is a single
            unit, so message us as soon as you can to confirm availability and pickup/shipping details.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "linear-gradient(135deg,#0066FF,#0099FF)", color: "white", textDecoration: "none" }}
            >
              💬 Ask about this phone
            </a>
            <Link href="/blog/sollabs-tech-phones-coming-soon" style={{ padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "white", textDecoration: "none" }}>
              About Sollabs Tech Phones
            </Link>
            <Link href="/contact" style={{ padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "white", textDecoration: "none" }}>
              Contact us
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
          article h1 { font-size: 1.6rem !important; }
        }
      `}</style>
    </article>
  );
}
