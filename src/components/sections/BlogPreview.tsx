import Link from "next/link";

const latestPosts = [
  {
    slug: "sollabs-tech-social-media",
    icon: "📲",
    tag: "Official Profiles",
    title: "Sollabs Tech Official Social Media – LinkedIn, Facebook & Instagram",
    excerpt: "Looking for Sollabs Tech on LinkedIn or Facebook? Here are all official links and profiles.",
  },
  {
    slug: "website-development-cost-india",
    icon: "🌐",
    tag: "Web Development",
    title: "How Much Does Website Development Cost in India? (2025 Guide)",
    excerpt: "Clear, honest pricing for every website type — from ₹8,000 landing pages to ₹1.5L+ web apps.",
  },
  {
    slug: "custom-software-development-india",
    icon: "💻",
    tag: "Software Development",
    title: "Why Indian Businesses Need Custom Software in 2025",
    excerpt: "Still using WhatsApp and Excel? Here are 5 signs your business is ready for custom software.",
  },
];

export default function BlogPreview() {
  return (
    <section style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="section-tag" style={{ display: "inline-flex", marginBottom: 16 }}>📝 Latest from Blog</span>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, marginBottom: 14 }}>
            Tech Tips &amp; <span className="gradient-text">Business Guides</span>
          </h2>
          <p style={{ color: "#6B7A94", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
            Practical guides for Indian businesses — website costs, custom software, and more.
          </p>
        </div>

        {/* Posts grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 40 }}>
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: "none", display: "block" }}
            >
              <article
                className="card-hover"
                style={{
                  padding: "28px 24px",
                  borderRadius: 18,
                  background: "rgba(10,22,40,0.7)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  height: "100%",
                  cursor: "pointer",
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 16 }}>{post.icon}</div>
                <span style={{
                  display: "inline-block",
                  padding: "3px 10px",
                  borderRadius: 100,
                  fontSize: 11,
                  fontWeight: 600,
                  background: "rgba(0,102,255,0.15)",
                  border: "1px solid rgba(0,102,255,0.3)",
                  color: "#00AAFF",
                  marginBottom: 12,
                }}>
                  {post.tag}
                </span>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "white", marginBottom: 10, lineHeight: 1.4 }}>
                  {post.title}
                </h3>
                <p style={{ fontSize: 13, color: "#6B7A94", lineHeight: 1.7, margin: 0 }}>
                  {post.excerpt}
                </p>
                <div style={{ marginTop: 16, fontSize: 13, fontWeight: 600, color: "#00AAFF" }}>
                  Read article →
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div style={{ textAlign: "center" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 28px",
              borderRadius: 12,
              border: "1px solid rgba(0,170,255,0.3)",
              color: "#00AAFF",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 600,
              background: "rgba(0,170,255,0.06)",
              transition: "all 0.2s",
            }}
          >
            View all articles →
          </Link>
        </div>

      </div>
    </section>
  );
}
