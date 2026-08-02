import Link from "next/link";

export const metadata = {
  title: "Blog – Sollabs Tech",
  description: "Tech insights, laptop buying guides, warranty information, and business tips from the Sollabs Tech team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog – Sollabs Tech",
    description: "Practical tech guides, laptop tips, warranty guides, and software development insights for Indian businesses.",
    url: "https://www.sollabstech.com/blog",
  },
};

const posts = [
  {
    slug: "sollabstech-warranty-policy",
    tag: "Warranty",
    date: "August 2, 2026",
    title: "Sollabs Tech Warranty Policy – How to Check Your Laptop Warranty Status",
    excerpt: "Every Sollabs Tech laptop comes with 3–12 month warranty. Learn what's covered, how to check your warranty status online, and how to claim it.",
    readTime: "4 min read",
    icon: "🛡️",
  },
];

export default function BlogPage() {
  return (
    <>
      <section style={{ paddingTop: 120, paddingBottom: 60, paddingLeft: 24, paddingRight: 24, textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <span className="section-tag" style={{ marginBottom: 16, display: "inline-flex" }}>📝 Blog</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", fontWeight: 800, marginBottom: 16 }}>
            Tech Insights &amp; <span className="gradient-text">Practical Tips</span>
          </h1>
          <p style={{ color: "#6B7A94", fontSize: 17, lineHeight: 1.7 }}>
            Tutorials, buying guides, warranty information, and tech insights from the Sollabs Tech team.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 24px 120px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24 }}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: "none", display: "block" }}
            >
              <article
                className="card-hover"
                style={{
                  padding: "28px 32px",
                  borderRadius: 18,
                  background: "rgba(10,22,40,0.7)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  display: "flex",
                  gap: 24,
                  alignItems: "flex-start",
                  cursor: "pointer",
                }}
              >
                <div style={{ fontSize: 40, flexShrink: 0, paddingTop: 4 }}>{post.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12, flexWrap: "wrap" }}>
                    <span style={{ padding: "3px 10px", borderRadius: 100, fontSize: 11, fontWeight: 600, background: "rgba(0,102,255,0.15)", border: "1px solid rgba(0,102,255,0.3)", color: "#00AAFF" }}>
                      {post.tag}
                    </span>
                    <span style={{ fontSize: 12, color: "#475569" }}>{post.date}</span>
                    <span style={{ fontSize: 12, color: "#475569" }}>· {post.readTime}</span>
                  </div>
                  <h2 style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", fontWeight: 700, color: "white", marginBottom: 10, lineHeight: 1.3 }}>
                    {post.title}
                  </h2>
                  <p style={{ fontSize: 14, color: "#6B7A94", lineHeight: 1.7, margin: 0 }}>
                    {post.excerpt}
                  </p>
                  <div style={{ marginTop: 14, fontSize: 13, fontWeight: 600, color: "#00AAFF" }}>
                    Read article →
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
