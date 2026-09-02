import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions – Sollabs Tech",
  description:
    "The terms that apply when you use the Sollabs Tech website or buy laptops, custom PCs, accessories, or software development services from us.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms & Conditions – Sollabs Tech",
    description:
      "Terms for using the Sollabs Tech website and buying our products and services.",
    url: "https://www.sollabstech.com/terms",
  },
};

const LAST_UPDATED = "31 August 2026";

const pStyle = { fontSize: 15, color: "#94A3B8", lineHeight: 1.8, marginBottom: 12 } as const;
const h2Style = { fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: 10, marginTop: 4 } as const;

const sections: { h: string; p: string[] }[] = [
  {
    h: "1. About these terms",
    p: [
      "These Terms & Conditions govern your use of www.sollabstech.com and any purchase of products or services from Sollabs Tech (“Sollabs Tech”, “we”, “us”, “our”), a software development and computer hardware business based in Madurai, Tamil Nadu, India.",
      "By using this website or placing an order with us, you accept these terms. If you do not agree, please do not use the site.",
    ],
  },
  {
    h: "2. Our products and services",
    p: [
      "Software development — mobile apps, websites, e-commerce, ERP and CRM systems, and custom software. The exact scope, price, timeline, and ownership for each software project are set out in a separate written quote or agreement, which takes priority over these terms for that project.",
      "Computer hardware — new and quality-checked pre-owned laptops, custom-built PCs, and accessories, delivered across India.",
    ],
  },
  {
    h: "3. Enquiries, quotes, and orders",
    p: [
      "Information on the website is an invitation to enquire, not a binding offer. Product availability, specifications, images, and prices may change without notice, and typographical errors may be corrected.",
      "An order is confirmed only when we accept it in writing (for example by WhatsApp or email) and, where applicable, the agreed payment or advance has been received.",
    ],
  },
  {
    h: "4. Prices and payment",
    p: [
      "Prices are in Indian Rupees (₹). Unless stated otherwise, a hardware price is for the item as described. Payment method and timing are as agreed at the time of the order.",
    ],
  },
  {
    h: "5. Shipping and delivery",
    p: [
      "We ship across India using third-party courier partners. Delivery timelines given to you are estimates and may vary. Risk in a product passes to you on delivery.",
      "Please inspect items on arrival and report any transit damage or missing items to us immediately.",
    ],
  },
  {
    h: "6. Hardware warranty",
    p: [
      "Laptops and PCs are covered by the warranty period stated for that product at the time of sale (typically 3 to 12 months). Warranty covers hardware faults under normal use.",
      "It does not cover physical or liquid damage, unauthorised repair or modification, software problems, consumable wear such as batteries beyond normal degradation, or normal cosmetic wear on pre-owned devices.",
      "To make a claim, contact us with your serial number and a description of the fault. You can check your coverage on our warranty page.",
    ],
  },
  {
    h: "7. Software support",
    p: [
      "Maintenance, support, updates, and any service levels for a software project are provided as described in that project’s agreement.",
    ],
  },
  {
    h: "8. Returns and replacements",
    p: [
      "If a product is faulty or not as described, contact us promptly and we will arrange a repair, replacement, or other resolution as appropriate.",
      "Custom-built PCs and custom software are produced to your specification and cannot be returned for a change of mind.",
    ],
  },
  {
    h: "9. Your responsibilities",
    p: [
      "You agree not to misuse the website, attempt to gain unauthorised access to it, or use it for any unlawful purpose.",
      "You are responsible for backing up your own data before handing any device to us for repair or upgrade.",
    ],
  },
  {
    h: "10. Intellectual property",
    p: [
      "All content on this website — text, graphics, logos, and design — belongs to Sollabs Tech unless stated otherwise, and may not be copied or reused without our permission.",
      "Ownership of software delivered to a client is governed by the relevant project agreement.",
    ],
  },
  {
    h: "11. Limitation of liability",
    p: [
      "To the extent permitted by law, Sollabs Tech is not liable for indirect or consequential loss, loss of data, or loss of profit arising from use of the website, products, or services. Nothing in these terms limits liability that cannot be limited by law.",
    ],
  },
  {
    h: "12. Third-party links",
    p: [
      "The website links to third-party services such as WhatsApp and YouTube. We are not responsible for their content, policies, or practices.",
    ],
  },
  {
    h: "13. Governing law",
    p: [
      "These terms are governed by the laws of India. Any dispute is subject to the exclusive jurisdiction of the courts of Madurai, Tamil Nadu.",
    ],
  },
  {
    h: "14. Changes",
    p: [
      "We may update these terms from time to time. The “last updated” date at the top of this page shows when they last changed.",
    ],
  },
  {
    h: "15. Contact",
    p: [
      "Sollabs Tech, Madurai, Tamil Nadu, India.",
      "Email: sollabstech@gmail.com · Phone / WhatsApp: +91 90038 50743",
    ],
  },
];

export default function TermsPage() {
  return (
    <article style={{ paddingTop: 100, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <nav style={{ fontSize: 13, color: "#475569", marginBottom: 28, display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "#475569", textDecoration: "none" }}>Home</Link>
          <span>&rsaquo;</span>
          <span style={{ color: "#94A3B8" }}>Terms &amp; Conditions</span>
        </nav>

        <span className="section-tag" style={{ marginBottom: 16, display: "inline-flex" }}>Legal</span>
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: 12 }}>
          Terms &amp; Conditions
        </h1>
        <p style={{ fontSize: 14, color: "#475569", marginBottom: 36, paddingBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          Last updated: {LAST_UPDATED}
        </p>

        {sections.map((s) => (
          <section key={s.h} style={{ marginBottom: 28 }}>
            <h2 style={h2Style}>{s.h}</h2>
            {s.p.map((para, i) => (
              <p key={i} style={pStyle}>{para}</p>
            ))}
          </section>
        ))}

        <div style={{ marginTop: 8, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.06)", fontSize: 14 }}>
          <span style={{ color: "#475569" }}>Related: </span>
          <Link href="/warranty" style={{ color: "#00AAFF", textDecoration: "none" }}>Warranty checker</Link>
          <span style={{ color: "#475569" }}> &middot; </span>
          <Link href="/privacy" style={{ color: "#00AAFF", textDecoration: "none" }}>Privacy Policy</Link>
          <span style={{ color: "#475569" }}> &middot; </span>
          <Link href="/contact" style={{ color: "#00AAFF", textDecoration: "none" }}>Contact us</Link>
        </div>
      </div>
    </article>
  );
}
