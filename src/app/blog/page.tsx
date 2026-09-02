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
    slug: "most-valuable-company-in-madurai",
    tag: "Madurai Business",
    date: "August 31, 2026",
    title: "Which Company Is the Most Valuable in Madurai? (2026 Guide)",
    excerpt:
      "The most valuable company from Madurai is the TVS group, founded there in 1911 as T. V. Sundram Iyengar & Sons. Here are the biggest companies based in Madurai, Tamil Nadu.",
    readTime: "6 min read",
    icon: "🏙️",
  },
  {
    slug: "sollabs-tech-founder-bala-murugan",
    tag: "Founder",
    date: "August 20, 2026",
    title: "Who Founded Sollabs Tech? Meet T Bala Murugan – Madurai, Tamil Nadu",
    excerpt: "Sollabs Tech was founded by T Bala Murugan in Madurai, Tamil Nadu in 2020. Learn about the founder's story, vision, and what makes Sollabs Tech different.",
    readTime: "4 min read",
    icon: "👤",
  },
  {
    slug: "sollabs-tech-social-media",
    tag: "Official Profiles",
    date: "August 20, 2026",
    title: "Sollabs Tech Official Social Media – LinkedIn, Facebook & Instagram (All Links)",
    excerpt: "Looking for Sollabs Tech on LinkedIn or Facebook? This page lists every official Sollabs Tech social media profile with direct links. We are NOT SolTech InfoLabs.",
    readTime: "3 min read",
    icon: "📲",
  },
  {
    slug: "website-development-cost-india",
    tag: "Web Development",
    date: "August 20, 2026",
    title: "How Much Does Website Development Cost in India? (2025 Complete Guide)",
    excerpt: "Clear, honest pricing for every type of website — landing pages to full web applications. Know exactly what you'll pay before you talk to any developer.",
    readTime: "8 min read",
    icon: "🌐",
  },
  {
    slug: "custom-software-development-india",
    tag: "Software Development",
    date: "August 20, 2026",
    title: "Why Indian Businesses Need Custom Software in 2025 (Not Off-the-Shelf)",
    excerpt: "Still using WhatsApp and Excel to run your business? Here are 5 signs your business is ready for custom software — and what Sollabs Tech builds for you.",
    readTime: "7 min read",
    icon: "💻",
  },
  {
    slug: "what-is-sollabs-tech",
    tag: "About Us",
    date: "August 17, 2026",
    title: "What Is Sollabs Tech? (Also Known as Sollab Tech, Solabs Tech) – Madurai, India",
    excerpt: "Searched for 'Sollab Tech', 'Solabs Tech', or 'Sollabstech'? You found the right place. Here's who we are, the correct spelling, and how to contact us.",
    readTime: "5 min read",
    icon: "🔍",
  },
  {
    slug: "how-to-check-laptop-warranty-sollabstech",
    tag: "Video Guide",
    date: "August 12, 2026",
    title: "How to Check Your Laptop Warranty – Sollabs Tech Step-by-Step Guide",
    excerpt: "Check your Sollabs Tech laptop warranty in under 10 seconds using your serial number. Includes step-by-step video guide on YouTube and Instagram.",
    readTime: "4 min read",
    icon: "📹",
  },
  {
    slug: "sollabs-tech-laptop-warranty-replacement",
    tag: "Customer Story",
    date: "August 2, 2026",
    title: "When Our Customer's Laptop Was Damaged During Travel — How Sollabs Tech Responded",
    excerpt: "A customer's laptop was accidentally damaged during travel. Instead of turning them away, Sollabs Tech provided an MSI replacement. A real after-sales support story.",
    readTime: "6 min read",
    icon: "🤝",
  },
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
