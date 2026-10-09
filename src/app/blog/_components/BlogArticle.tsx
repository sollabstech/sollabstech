import Link from "next/link";

const SITE = "https://www.sollabstech.com";
const WHATSAPP = "https://wa.me/919003850743";

export interface Faq { q: string; a: string }

export interface BlogArticleProps {
  slug: string;
  tag: string;
  datePublished: string; // ISO, e.g. "2026-10-09"
  title: string;
  description: string;
  breadcrumb: string;
  intro: React.ReactNode;
  faqs: Faq[];
  cta: { title: string; text: string; whatsappText: string; primary: { href: string; label: string } };
  children: React.ReactNode;
}

export const h2: React.CSSProperties = { fontSize: "1.45rem", fontWeight: 800, color: "white", margin: "48px 0 14px", lineHeight: 1.3 };
export const h3: React.CSSProperties = { fontSize: "1.1rem", fontWeight: 700, color: "white", margin: "28px 0 10px" };
export const p: React.CSSProperties = { fontSize: 15.5, color: "#94A3B8", lineHeight: 1.85, margin: "0 0 18px" };
export const strong: React.CSSProperties = { color: "#E2E8F0" };
export const link: React.CSSProperties = { color: "#00AAFF", textDecoration: "underline", textUnderlineOffset: 3 };
export const list: React.CSSProperties = { paddingLeft: 22, fontSize: 15.5, color: "#94A3B8", lineHeight: 2, margin: "0 0 22px" };

export function Callout({ icon, title, children, color = "#00AAFF" }: { icon: string; title: string; children: React.ReactNode; color?: string }) {
  return (
    <div style={{ padding: "20px 22px", borderRadius: 16, margin: "8px 0 26px", background: `${color}12`, border: `1px solid ${color}40` }}>
      <div style={{ fontSize: 15, fontWeight: 800, color: "white", marginBottom: 6 }}>{icon} {title}</div>
      <div style={{ fontSize: 14.5, color: "#A8B6CA", lineHeight: 1.75 }}>{children}</div>
    </div>
  );
}

export function CardGrid({ items }: { items: { icon: string; title: string; text: string; color?: string }[] }) {
  return (
    <div className="blog-card-grid">
      {items.map((it) => (
        <div key={it.title} style={{ padding: "18px 20px", borderRadius: 14, background: "rgba(255,255,255,0.03)", border: `1px solid ${it.color ? `${it.color}40` : "rgba(255,255,255,0.07)"}` }}>
          <div style={{ fontSize: 22, marginBottom: 8 }}>{it.icon}</div>
          <div style={{ fontSize: 15, fontWeight: 700, color: it.color ?? "white", marginBottom: 6 }}>{it.title}</div>
          <div style={{ fontSize: 13.5, color: "#8193AB", lineHeight: 1.65 }}>{it.text}</div>
        </div>
      ))}
    </div>
  );
}

export function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div style={{ overflowX: "auto", margin: "8px 0 26px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.08)" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, minWidth: 480 }}>
        <thead>
          <tr style={{ background: "rgba(0,102,255,0.1)" }}>
            {head.map((h) => <th key={h} style={{ textAlign: "left", padding: "12px 16px", color: "white", fontWeight: 700 }}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              {r.map((c, j) => <td key={j} style={{ padding: "12px 16px", color: j === 0 ? "#E2E8F0" : "#94A3B8", fontWeight: j === 0 ? 600 : 400, verticalAlign: "top" }}>{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function BlogArticle({ slug, tag, datePublished, title, description, breadcrumb, intro, faqs, cta, children }: BlogArticleProps) {
  const url = `${SITE}/blog/${slug}`;
  const displayDate = new Date(datePublished).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: title,
      description,
      datePublished,
      dateModified: datePublished,
      mainEntityOfPage: url,
      url,
      image: `${SITE}/logo.png`,
      author: { "@type": "Organization", name: "Sollabs Tech", url: SITE },
      publisher: { "@type": "Organization", name: "Sollabs Tech", logo: { "@type": "ImageObject", url: `${SITE}/logo.png` } },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
        { "@type": "ListItem", position: 3, name: breadcrumb, item: url },
      ],
    },
  ];

  return (
    <article style={{ padding: "100px 24px 80px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "#475569", marginBottom: 28, display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "#475569", textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <Link href="/blog" style={{ color: "#475569", textDecoration: "none" }}>Blog</Link>
          <span>›</span>
          <span style={{ color: "#94A3B8" }}>{breadcrumb}</span>
        </nav>

        <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 18 }}>
          <span style={{ padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600, background: "rgba(0,102,255,0.15)", border: "1px solid rgba(0,102,255,0.3)", color: "#00AAFF" }}>{tag}</span>
          <time dateTime={datePublished} style={{ fontSize: 13, color: "#475569" }}>{displayDate}</time>
        </div>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.7rem)", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: 20 }}>{title}</h1>

        <div style={{ fontSize: 17, color: "#A8B6CA", lineHeight: 1.8, marginBottom: 36, borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 30 }}>{intro}</div>

        {children}

        <h2 style={h2}>Frequently Asked Questions</h2>
        {faqs.map(({ q, a }) => (
          <details key={q} style={{ marginBottom: 12, padding: "16px 20px", borderRadius: 12, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <summary style={{ fontSize: 15, fontWeight: 700, color: "white", cursor: "pointer" }}>{q}</summary>
            <p style={{ fontSize: 14.5, color: "#94A3B8", lineHeight: 1.75, margin: "10px 0 0" }}>{a}</p>
          </details>
        ))}

        <div style={{ marginTop: 52, padding: 32, borderRadius: 20, background: "linear-gradient(135deg, rgba(0,102,255,0.15), rgba(0,153,255,0.06))", border: "1px solid rgba(0,102,255,0.3)", textAlign: "center" }}>
          <h2 style={{ fontSize: 21, fontWeight: 800, color: "white", margin: "0 0 8px" }}>{cta.title}</h2>
          <p style={{ fontSize: 14.5, color: "#94A3B8", margin: "0 0 22px", lineHeight: 1.7 }}>{cta.text}</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={cta.primary.href} style={{ padding: "12px 26px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "linear-gradient(135deg,#0066FF,#0099FF)", color: "white", textDecoration: "none" }}>
              {cta.primary.label}
            </Link>
            <a href={`${WHATSAPP}?text=${encodeURIComponent(cta.whatsappText)}`} target="_blank" rel="noopener noreferrer"
              style={{ padding: "12px 26px", borderRadius: 10, fontSize: 14, fontWeight: 700, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "white", textDecoration: "none" }}>
              💬 WhatsApp +91 90038 50743
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .blog-card-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin: 8px 0 26px; }
        @media (max-width: 560px) { .blog-card-grid { grid-template-columns: 1fr; } }
      `}</style>
    </article>
  );
}
