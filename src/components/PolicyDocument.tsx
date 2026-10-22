import Link from "next/link";
import { CONTACT } from "@/lib/config";

export type Block = string | { list: string[] } | { links: { label: string; href: string }[] } | { note: string };
export type Section = { h: string; id?: string; body: Block[] };

export type PolicyProps = {
  tag: string;
  title: string;
  appName: string;
  packageName: string;
  path: string;
  effectiveDate: string;
  effectiveIso: string;
  intro: string;
  sections: Section[];
  /** Text of the small closing note, e.g. "This policy applies only to the SolAttend app." */
  scopeNote: string;
  otherLinks: { label: string; href: string }[];
  schemaDescription: string;
  schemaCategory?: string;
};

const pStyle = { fontSize: 15, color: "#94A3B8", lineHeight: 1.8, marginBottom: 12 } as const;
const h2Style = { fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: 10, marginTop: 4 } as const;
const linkStyle = { color: "#00AAFF", textDecoration: "underline", textUnderlineOffset: 3 } as const;
const BASE = CONTACT.siteUrl;

function renderBlock(b: Block, i: number) {
  if (typeof b === "string") return <p key={i} style={pStyle}>{b}</p>;
  if ("note" in b) {
    return (
      <div key={i} style={{ ...pStyle, padding: "14px 18px", borderRadius: 12, background: "rgba(0,170,255,0.07)", border: "1px solid rgba(0,170,255,0.25)", color: "#CBD5E1" }}>
        {b.note}
      </div>
    );
  }
  if ("list" in b) {
    return (
      <ul key={i} style={{ ...pStyle, paddingLeft: 22 }}>
        {b.list.map((li) => <li key={li} style={{ marginBottom: 4 }}>{li}</li>)}
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

/** Shared layout for the SolAttend app policy and account-deletion pages. */
export default function PolicyDocument(p: PolicyProps) {
  const url = `${BASE}${p.path}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: p.title,
      url,
      datePublished: p.effectiveIso,
      dateModified: p.effectiveIso,
      publisher: { "@type": "Organization", name: "Sollabs Tech", url: BASE },
      about: {
        "@type": "MobileApplication",
        name: p.appName,
        operatingSystem: "Android",
        applicationCategory: p.schemaCategory ?? "BusinessApplication",
        description: p.schemaDescription,
        author: { "@type": "Organization", name: "Sollabs Tech" },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: p.title, item: url },
      ],
    },
  ];

  return (
    <article style={{ paddingTop: 100, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "#475569", marginBottom: 28, display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "#475569", textDecoration: "none" }}>Home</Link>
          <span>&rsaquo;</span>
          <span style={{ color: "#94A3B8" }}>{p.title}</span>
        </nav>

        <span className="section-tag" style={{ marginBottom: 16, display: "inline-flex" }}>{p.tag}</span>
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: 16 }}>
          {p.title}
        </h1>

        <div style={{ padding: "16px 20px", borderRadius: 14, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", marginBottom: 28, fontSize: 14, color: "#94A3B8", lineHeight: 1.9 }}>
          <div><strong style={{ color: "#E2E8F0" }}>Effective date:</strong> <time dateTime={p.effectiveIso}>{p.effectiveDate}</time></div>
          <div><strong style={{ color: "#E2E8F0" }}>App name:</strong> {p.appName} (package: {p.packageName})</div>
          <div><strong style={{ color: "#E2E8F0" }}>Developer:</strong> Sollabs Tech, Madurai, Tamil Nadu, India</div>
          <div><strong style={{ color: "#E2E8F0" }}>Contact:</strong> <a href={`mailto:${CONTACT.email}`} style={linkStyle}>{CONTACT.email}</a></div>
        </div>

        <p style={{ ...pStyle, marginBottom: 24, paddingBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>{p.intro}</p>

        {p.sections.length > 3 && (
          <nav aria-label="Contents" style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 13, color: "#E2E8F0", fontWeight: 700, marginBottom: 8 }}>Contents</div>
            <ol style={{ ...pStyle, paddingLeft: 22, marginBottom: 0 }}>
              {p.sections.map((s) => (
                <li key={s.h} style={{ marginBottom: 2 }}>
                  <a href={`#${s.id ?? ""}`} style={{ ...linkStyle, textDecoration: "none" }}>{s.h.replace(/^\d+\.\s*/, "")}</a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {p.sections.map((s) => (
          <section key={s.h} id={s.id} style={{ marginBottom: 28, scrollMarginTop: 90 }}>
            <h2 style={h2Style}>{s.h}</h2>
            {s.body.map(renderBlock)}
          </section>
        ))}

        <section style={{ marginBottom: 28 }}>
          <h2 style={h2Style}>Contact us</h2>
          <p style={pStyle}>
            Sollabs Tech, Madurai, Tamil Nadu, India<br />
            Email: <a href={`mailto:${CONTACT.email}`} style={linkStyle}>{CONTACT.email}</a><br />
            Phone / WhatsApp: <a href={`tel:+${CONTACT.phoneRaw}`} style={linkStyle}>{CONTACT.phone}</a>
          </p>
        </section>

        <p style={{ fontSize: 13, color: "#475569", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 20, lineHeight: 1.9 }}>
          {p.scopeNote}{" "}
          {p.otherLinks.map((l, i) => (
            <span key={l.href}>
              {i > 0 && " · "}
              <Link href={l.href} style={linkStyle}>{l.label}</Link>
            </span>
          ))}
        </p>
      </div>
    </article>
  );
}
