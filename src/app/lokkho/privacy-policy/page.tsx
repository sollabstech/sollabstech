import type { Metadata } from "next";
import Link from "next/link";

const URL = "https://www.sollabstech.com/lokkho/privacy-policy";
const EFFECTIVE_DATE = "11 October 2026";
const EFFECTIVE_ISO = "2026-10-11";

export const metadata: Metadata = {
  title: "Lokkho Privacy Policy – Learning App for Classes 1–12",
  description:
    "Privacy Policy for Lokkho, the Sollabs Tech learning app for Classes 1–12: what data we collect, why, and how to delete your account and data.",
  alternates: { canonical: "/lokkho/privacy-policy" },
  openGraph: {
    title: "Lokkho Privacy Policy",
    description: "What the Lokkho learning app collects, how it is used, and how to delete your account and data.",
    url: URL,
    type: "article",
  },
};

type Block = string | { list: string[] } | { links: { label: string; href: string }[] };

const sections: { h: string; body: Block[] }[] = [
  {
    h: "1. Information We Collect",
    body: [
      "Information you provide, or that comes from Google Sign-In:",
      { list: ["Name, email address and profile photo from your Google account", "The class you select (for example, Class 10)"] },
      "Information generated while you use the app:",
      { list: [
        "Test results, scores, accuracy and time taken",
        "Coin balance and coin history (earned and spent)",
        "Leaderboard ranking and activity such as videos watched",
      ] },
      "Device and usage information (collected automatically):",
      { list: [
        "Device type, operating system version and app version",
        "Advertising ID, used for ads",
        "App usage and crash information, collected through Firebase Analytics",
        "Push notification token, if notifications are enabled",
      ] },
      "We do not collect your precise location, contacts, SMS, call logs or microphone data.",
    ],
  },
  {
    h: "2. How We Use Your Information",
    body: [
      { list: [
        "To create your account and sign you in",
        "To show tests, videos and materials for your class",
        "To track your coins, scores and leaderboard position",
        "To improve app performance, fix bugs and understand how features are used",
        "To show advertisements",
        "To send notifications about the app, if you allow them",
      ] },
    ],
  },
  {
    h: "3. Third-Party Services",
    body: [
      "We use these services, which have their own privacy policies:",
      { links: [
        { label: "Google Sign-In and Firebase (Authentication, Firestore, Storage, Analytics, Cloud Messaging)", href: "https://policies.google.com/privacy" },
        { label: "Google AdMob, for ads. It may use the advertising ID to show ads", href: "https://policies.google.com/technologies/ads" },
        { label: "YouTube, for study videos opened from the app", href: "https://policies.google.com/privacy" },
      ] },
    ],
  },
  {
    h: "4. Advertising",
    body: [
      "The app shows ads through Google AdMob. You can reset or delete your advertising ID, or opt out of ad personalisation, in your device settings under Google, then Ads.",
    ],
  },
  {
    h: "5. Data Sharing",
    body: [
      "We do not sell your personal information. We share data only with the service providers listed above, who process it for us, or when required by law.",
      "Leaderboards: your name, profile photo, score, number of tests taken and coin total appear on Lokkho leaderboards, which other signed-in Lokkho users can see.",
    ],
  },
  {
    h: "6. Data Storage and Security",
    body: [
      "Your data is stored on Google Firebase servers and protected by Firebase security rules, so each user can access only their own account data. Your leaderboard entry is the only information other users can see. No method of transmission or storage is completely secure, but we take reasonable steps to protect your information.",
    ],
  },
  {
    h: "7. Children’s Privacy",
    body: [
      "Lokkho is intended for students, which may include children under 18. We collect only the information needed to run the app. We do not knowingly collect more personal data than necessary, and we do not sell it. Parents or guardians can contact us at the email below to review or delete a child’s data.",
    ],
  },
  {
    h: "8. Data Retention and Account Deletion",
    body: [
      "We keep your data while your account is active. You can delete your account and all associated data (profile, coin history, test history and leaderboard entries) directly in the app from the Profile screen. You can also email us to request deletion, and we will process it within 30 days.",
    ],
  },
  {
    h: "9. Your Rights",
    body: [
      "You can access, correct or delete your personal data, and withdraw consent for notifications or ads personalisation at any time, by using the in-app options or contacting us.",
    ],
  },
  {
    h: "10. Changes to This Policy",
    body: [
      "We may update this policy from time to time. The latest version will always be available at this page, and the effective date above will change.",
    ],
  },
];

const pStyle = { fontSize: 15, color: "#94A3B8", lineHeight: 1.8, marginBottom: 12 } as const;
const h2Style = { fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: 10, marginTop: 4 } as const;
const linkStyle = { color: "#00AAFF", textDecoration: "underline", textUnderlineOffset: 3 } as const;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Lokkho Privacy Policy",
    url: URL,
    datePublished: EFFECTIVE_ISO,
    dateModified: EFFECTIVE_ISO,
    publisher: { "@type": "Organization", name: "Sollabs Tech", url: "https://www.sollabstech.com" },
    about: {
      "@type": "MobileApplication",
      name: "Lokkho",
      operatingSystem: "Android",
      applicationCategory: "EducationalApplication",
      description: "Learning app for students in Classes 1 to 12 with MCQ tests, study videos, study materials, coins and leaderboards.",
      author: { "@type": "Organization", name: "Sollabs Tech" },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sollabstech.com" },
      { "@type": "ListItem", position: 2, name: "Lokkho Privacy Policy", item: URL },
    ],
  },
];

function renderBlock(b: Block, i: number) {
  if (typeof b === "string") return <p key={i} style={pStyle}>{b}</p>;
  if ("list" in b) {
    return (
      <ul key={i} style={{ ...pStyle, paddingLeft: 22 }}>
        {b.list.map((li) => <li key={li}>{li}</li>)}
      </ul>
    );
  }
  return (
    <ul key={i} style={{ ...pStyle, paddingLeft: 22 }}>
      {b.links.map((l) => (
        <li key={l.label} style={{ marginBottom: 6 }}>
          {l.label}:{" "}
          <a href={l.href} target="_blank" rel="noopener noreferrer" style={linkStyle}>{l.href}</a>
        </li>
      ))}
    </ul>
  );
}

export default function LokkhoPrivacyPolicyPage() {
  return (
    <article style={{ paddingTop: 100, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "#475569", marginBottom: 28, display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "#475569", textDecoration: "none" }}>Home</Link>
          <span>&rsaquo;</span>
          <span style={{ color: "#94A3B8" }}>Lokkho Privacy Policy</span>
        </nav>

        <span className="section-tag" style={{ marginBottom: 16, display: "inline-flex" }}>Lokkho App</span>
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: 16 }}>
          Privacy Policy for Lokkho
        </h1>

        <div style={{ padding: "16px 20px", borderRadius: 14, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", marginBottom: 28, fontSize: 14, color: "#94A3B8", lineHeight: 1.9 }}>
          <div><strong style={{ color: "#E2E8F0" }}>Effective date:</strong> <time dateTime={EFFECTIVE_ISO}>{EFFECTIVE_DATE}</time></div>
          <div><strong style={{ color: "#E2E8F0" }}>App name:</strong> Lokkho (package: lokkho.sollabstech.lokkho)</div>
          <div><strong style={{ color: "#E2E8F0" }}>Developer:</strong> Sollabs Tech</div>
          <div><strong style={{ color: "#E2E8F0" }}>Contact:</strong> <a href="mailto:sollabstech@gmail.com" style={linkStyle}>sollabstech@gmail.com</a></div>
        </div>

        <p style={{ ...pStyle, marginBottom: 32, paddingBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          Lokkho (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is an educational app for students in Classes 1 to 12. It offers MCQ tests, study videos, study materials, coins and leaderboards. This policy explains what information we collect, how we use it, and your choices.
        </p>

        {sections.map((s) => (
          <section key={s.h} style={{ marginBottom: 28 }}>
            <h2 style={h2Style}>{s.h}</h2>
            {s.body.map(renderBlock)}
          </section>
        ))}

        <section style={{ marginBottom: 28 }}>
          <h2 style={h2Style}>11. Contact Us</h2>
          <p style={pStyle}>
            Sollabs Tech<br />
            Email: <a href="mailto:sollabstech@gmail.com" style={linkStyle}>sollabstech@gmail.com</a>
          </p>
        </section>

        <p style={{ fontSize: 13, color: "#475569", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 20 }}>
          Looking for the Sollabs Tech website policy? See the <Link href="/privacy" style={linkStyle}>Sollabs Tech Privacy Policy</Link>.
        </p>
      </div>
    </article>
  );
}
