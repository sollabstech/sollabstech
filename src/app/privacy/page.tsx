import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy – Sollabs Tech",
  description:
    "How Sollabs Tech collects, uses, and protects your personal information when you use our website, contact us, or buy laptops, PCs, and software services.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy – Sollabs Tech",
    description:
      "How Sollabs Tech collects, uses, and protects your personal information.",
    url: "https://www.sollabstech.com/privacy",
  },
};

const LAST_UPDATED = "31 August 2026";

const pStyle = { fontSize: 15, color: "#94A3B8", lineHeight: 1.8, marginBottom: 12 } as const;
const h2Style = { fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: 10, marginTop: 4 } as const;

const sections: { h: string; p: string[] }[] = [
  {
    h: "1. Who we are",
    p: [
      "Sollabs Tech (“Sollabs Tech”, “we”, “us”, “our”) is a software development and computer hardware business based in Madurai, Tamil Nadu, India.",
      "This Privacy Policy explains how we handle personal information for people who visit www.sollabstech.com, contact us, or buy products and services from us. If you have any questions, email sollabstech@gmail.com.",
    ],
  },
  {
    h: "2. Information you give us",
    p: [
      "When you submit our contact form, or message us on WhatsApp or email, we collect the details you choose to share: your name, email address, phone number, the type of enquiry, and your message.",
      "If you order a laptop, PC, accessory, or software project, we also collect the information needed to fulfil it, such as your delivery address and a payment reference.",
    ],
  },
  {
    h: "3. Information collected automatically",
    p: [
      "Like most websites, our hosting provider and the tools we use record basic technical data when you visit — for example IP address, browser and device type, pages viewed, and the date and time of your visit. This is used for security, troubleshooting, and understanding how the site is used.",
    ],
  },
  {
    h: "4. Cookies and browser storage",
    p: [
      "We do not use advertising cookies. Some cookies or browser storage may be set by services we rely on:",
      "• Google Firebase, which powers our contact form and site content;",
      "• YouTube, when a page shows an embedded video (for example on product and project pages);",
      "• our hosting provider, for security and performance.",
      "You can block or delete cookies in your browser settings. The main pages of the site will still work.",
    ],
  },
  {
    h: "5. How we use your information",
    p: [
      "• To respond to your enquiries and prepare quotes;",
      "• To deliver the products and services you order;",
      "• To provide after-sales, warranty, and support;",
      "• To keep records of orders and communication;",
      "• To keep the website secure and working properly;",
      "• To meet our legal, accounting, and tax obligations.",
      "We do not sell or rent your personal information.",
    ],
  },
  {
    h: "6. Who we share it with",
    p: [
      "We share information only with service providers that help us operate — for example Google Firebase (which stores contact messages), our hosting provider, courier and delivery partners, and payment providers — and with authorities or advisers where required by law.",
      "These providers process data on our behalf and may store it outside India, including in the United States.",
    ],
  },
  {
    h: "7. How long we keep it",
    p: [
      "We keep contact messages and order records for as long as needed for the purpose they were collected, and for any period required by law or for warranty and accounting. You can ask us to delete information we no longer need to keep.",
    ],
  },
  {
    h: "8. Your rights",
    p: [
      "You can ask us to give you a copy of the personal information we hold about you, correct information that is wrong, or delete information we no longer need. Email sollabstech@gmail.com and we will respond within a reasonable time.",
    ],
  },
  {
    h: "9. Security",
    p: [
      "We take reasonable steps to protect personal information. However, no method of transmission over the internet or method of storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    h: "10. Children",
    p: [
      "Our website and services are intended for adults and businesses. We do not knowingly collect personal information from children.",
    ],
  },
  {
    h: "11. Changes to this policy",
    p: [
      "We may update this policy from time to time. The “last updated” date at the top of this page shows when it last changed.",
    ],
  },
  {
    h: "12. Contact us",
    p: [
      "Sollabs Tech, Madurai, Tamil Nadu, India.",
      "Email: sollabstech@gmail.com · Phone / WhatsApp: +91 90038 50743",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <article style={{ paddingTop: 100, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <nav style={{ fontSize: 13, color: "#475569", marginBottom: 28, display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "#475569", textDecoration: "none" }}>Home</Link>
          <span>&rsaquo;</span>
          <span style={{ color: "#94A3B8" }}>Privacy Policy</span>
        </nav>

        <span className="section-tag" style={{ marginBottom: 16, display: "inline-flex" }}>Privacy</span>
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: 12 }}>
          Privacy Policy
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
          <Link href="/terms" style={{ color: "#00AAFF", textDecoration: "none" }}>Terms &amp; Conditions</Link>
          <span style={{ color: "#475569" }}> &middot; </span>
          <Link href="/contact" style={{ color: "#00AAFF", textDecoration: "none" }}>Contact us</Link>
        </div>
      </div>
    </article>
  );
}
