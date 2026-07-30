import Link from "next/link";

export const metadata = {
  title: "Blog – Sollabs Tech",
  description: "Tech insights, tutorials, and business tips from the Sollabs Tech team.",
};

const posts = [
  {
    id: 1,
    title: "Why Next.js is the Best Choice for Modern Web Development in 2025",
    category: "Web Development",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    excerpt: "Next.js has dominated the web framework landscape. Here&apos;s why we choose it for every client project.",
    emoji: "⚡",
  },
  {
    id: 2,
    title: "Flutter vs React Native: Which Should You Choose for Your App?",
    category: "Mobile Development",
    date: "Jan 8, 2025",
    readTime: "7 min read",
    excerpt: "A deep dive into both frameworks — performance, developer experience, and which one wins for Indian startups.",
    emoji: "📱",
  },
  {
    id: 3,
    title: "How to Buy a Second-Hand Laptop in India Without Getting Scammed",
    category: "Buying Guide",
    date: "Dec 28, 2024",
    readTime: "6 min read",
    excerpt: "A complete checklist to verify specs, battery health, and authenticity before buying a used laptop.",
    emoji: "💻",
  },
  {
    id: 4,
    title: "Building a Custom Gaming PC in India Under ₹80,000",
    category: "PC Building",
    date: "Dec 20, 2024",
    readTime: "8 min read",
    excerpt: "Component selection, benchmarks, and tips for building the best gaming rig within your budget.",
    emoji: "🎮",
  },
  {
    id: 5,
    title: "AI Integration for Small Businesses: A Practical Guide",
    category: "AI & Technology",
    date: "Dec 12, 2024",
    readTime: "9 min read",
    excerpt: "How Indian SMEs can leverage AI tools to automate operations, serve customers better, and reduce costs.",
    emoji: "🤖",
  },
  {
    id: 6,
    title: "Why Your Business Needs a Mobile App in 2025",
    category: "Business Technology",
    date: "Dec 5, 2024",
    readTime: "5 min read",
    excerpt: "Customer engagement, brand loyalty, and revenue — mobile apps deliver ROI that websites alone can&apos;t match.",
    emoji: "🚀",
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
            Tutorials, buying guides, and business technology insights from the Sollabs Tech team.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 24px 100px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
            {posts.map((post) => (
              <article key={post.id} className="glass card-hover" style={{
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.06)",
                overflow: "hidden",
              }}>
                <div style={{
                  height: 160, background: "linear-gradient(135deg, rgba(0,102,255,0.15), rgba(0,170,255,0.05))",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64,
                }}>
                  {post.emoji}
                </div>
                <div style={{ padding: "22px 24px 26px" }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12 }}>
                    <span style={{
                      fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 100,
                      background: "rgba(0,102,255,0.1)", border: "1px solid rgba(0,102,255,0.2)", color: "#00AAFF",
                    }}>{post.category}</span>
                    <span style={{ fontSize: 11, color: "#3D4F6B" }}>{post.date} · {post.readTime}</span>
                  </div>
                  <h2 style={{ fontSize: 16, fontWeight: 700, color: "white", lineHeight: 1.4, marginBottom: 10 }}>
                    {post.title}
                  </h2>
                  <p style={{ fontSize: 13, color: "#6B7A94", lineHeight: 1.65, marginBottom: 16 }}>
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.id}`} style={{
                    color: "#00AAFF", fontSize: 13, fontWeight: 600, textDecoration: "none",
                    display: "inline-flex", alignItems: "center", gap: 4,
                  }}>
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
