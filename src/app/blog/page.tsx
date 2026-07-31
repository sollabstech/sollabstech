export const metadata = {
  title: "Blog – Sollabs Tech",
  description: "Tech insights, laptop buying guides, software development tutorials, and business tips from the Sollabs Tech team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog – Sollabs Tech",
    description: "Practical tech guides, laptop tips, and software development insights for Indian businesses.",
    url: "https://www.sollabstech.com/blog",
  },
};

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

      <section style={{ padding: "0 24px 120px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 64, marginBottom: 24 }}>✍️</div>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "white", marginBottom: 12 }}>
            Articles Coming Soon
          </h2>
          <p style={{ color: "#6B7A94", fontSize: 15, lineHeight: 1.7 }}>
            We&apos;re writing real guides — laptop buying tips, software development insights, and tech for Indian businesses. Check back soon.
          </p>
          <a
            href="https://wa.me/919384199108?text=Hi, notify me when the Sollabs Tech blog is live!"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 28, padding: "12px 24px", borderRadius: 10, fontSize: 14, fontWeight: 600, background: "linear-gradient(135deg,#0066FF,#0099FF)", color: "white", textDecoration: "none", boxShadow: "0 4px 16px rgba(0,102,255,0.35)" }}
          >
            💬 Notify me on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
