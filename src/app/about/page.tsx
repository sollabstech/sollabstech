import Link from "next/link";

export const metadata = {
  title: "About Us – Sollabs Tech",
  description: "Learn about Sollabs Tech — who we are, our mission, values, and the team behind the brand.",
};

const timeline = [
  { year: "2020", title: "Founded", desc: "Sollabs Tech was born with a mission to build world-class software for Indian businesses." },
  { year: "2021", title: "First 50 Clients", desc: "Reached 50 software clients and launched the laptop division to serve hardware needs." },
  { year: "2022", title: "100+ Projects", desc: "Delivered 100+ software projects including mobile apps, e-commerce platforms, and CRMs." },
  { year: "2023", title: "Expansion", desc: "Expanded to custom PC builds, pan-India shipping, and AI-powered software solutions." },
  { year: "2024", title: "500+ Laptops Sold", desc: "Crossed 500 laptops sold with a 5-star average rating across all platforms." },
  { year: "2025", title: "200+ Software Projects", desc: "Serving 150+ software clients with dedicated support teams and 99% satisfaction rate." },
];

const values = [
  { icon: "🎯", title: "Quality First", desc: "We never compromise on the quality of our software or hardware." },
  { icon: "🤝", title: "Client Partnership", desc: "We treat every client as a long-term partner, not a transaction." },
  { icon: "⚡", title: "Speed & Reliability", desc: "Fast delivery without cutting corners — always." },
  { icon: "🌱", title: "Continuous Growth", desc: "We evolve with technology to bring you the best solutions." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 80, paddingLeft: 24, paddingRight: 24, textAlign: "center", position: "relative" }}>
        <div style={{
          position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
          width: 600, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,102,255,0.1) 0%, transparent 70%)",
          filter: "blur(60px)", zIndex: 0,
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 780, margin: "0 auto" }}>
          <span className="section-tag" style={{ marginBottom: 20, display: "inline-flex" }}>About Us</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", fontWeight: 800, marginBottom: 20 }}>
            We&apos;re Builders.
            <br /><span className="gradient-text">We&apos;re Dreamers.</span>
          </h1>
          <p style={{ color: "#6B7A94", fontSize: 18, lineHeight: 1.8, maxWidth: 620, margin: "0 auto" }}>
            Sollabs Tech is a dual-brand technology company from India — combining world-class software development
            with premium laptop & custom PC services under one trusted roof.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: "60px 24px", background: "rgba(0,0,0,0.2)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
          className="mv-grid">
          <div className="glass" style={{ borderRadius: 20, padding: "36px 32px", border: "1px solid rgba(0,102,255,0.2)" }}>
            <div style={{ fontSize: 36, marginBottom: 14 }}>🎯</div>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: "white", marginBottom: 12 }}>Our Mission</h2>
            <p style={{ color: "#6B7A94", fontSize: 16, lineHeight: 1.75 }}>
              To empower Indian businesses with premium technology — whether through software that automates growth
              or hardware that powers productivity — making cutting-edge tech accessible to everyone.
            </p>
          </div>
          <div className="glass" style={{ borderRadius: 20, padding: "36px 32px", border: "1px solid rgba(0,170,255,0.2)" }}>
            <div style={{ fontSize: 36, marginBottom: 14 }}>🔭</div>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: "white", marginBottom: 12 }}>Our Vision</h2>
            <p style={{ color: "#6B7A94", fontSize: 16, lineHeight: 1.75 }}>
              To become India&apos;s most trusted technology brand — the go-to partner for software solutions
              and premium computing hardware, known for exceptional quality and unmatched support.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, marginBottom: 48 }}>
            What We <span className="gradient-text-blue">Stand For</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 }}>
            {values.map((v) => (
              <div key={v.title} className="glass card-hover" style={{
                borderRadius: 16, padding: "28px", textAlign: "center",
                border: "1px solid rgba(255,255,255,0.06)",
              }}>
                <div style={{ fontSize: 40, marginBottom: 14 }}>{v.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "white", marginBottom: 8 }}>{v.title}</h3>
                <p style={{ color: "#6B7A94", fontSize: 14, lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: "80px 24px", background: "rgba(0,0,0,0.2)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, marginBottom: 56 }}>
            Our <span className="gradient-text-blue">Journey</span>
          </h2>
          <div style={{ position: "relative", paddingLeft: 32 }}>
            {/* Line */}
            <div style={{
              position: "absolute", left: 8, top: 8, bottom: 8, width: 2,
              background: "linear-gradient(to bottom, #0066FF, rgba(0,102,255,0.1))",
              borderRadius: 1,
            }} />

            {timeline.map((item, i) => (
              <div key={i} style={{ position: "relative", marginBottom: 40, paddingLeft: 24 }}>
                {/* Dot */}
                <div style={{
                  position: "absolute", left: -24, top: 4,
                  width: 16, height: 16, borderRadius: "50%",
                  background: "linear-gradient(135deg, #0066FF, #00AAFF)",
                  boxShadow: "0 0 12px rgba(0,102,255,0.5)",
                }} />
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                  <span style={{
                    fontSize: 11, fontWeight: 700, color: "#00AAFF",
                    background: "rgba(0,102,255,0.1)", border: "1px solid rgba(0,102,255,0.3)",
                    padding: "2px 10px", borderRadius: 100,
                  }}>{item.year}</span>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "white" }}>{item.title}</h3>
                </div>
                <p style={{ color: "#6B7A94", fontSize: 14, lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, textAlign: "center" }}
          className="stats-grid">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "200+", label: "Software Projects" },
            { value: "500+", label: "Laptops Sold" },
            { value: "150+", label: "Happy Clients" },
          ].map((s) => (
            <div key={s.label} style={{
              padding: "28px 20px", borderRadius: 14,
              background: "rgba(10,22,40,0.6)", border: "1px solid rgba(255,255,255,0.06)",
            }}>
              <div style={{ fontSize: "2rem", fontWeight: 800 }} className="gradient-text-blue">{s.value}</div>
              <div style={{ fontSize: 13, color: "#6B7A94", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, marginBottom: 12 }}>
            Let&apos;s Work <span className="gradient-text-blue">Together</span>
          </h2>
          <p style={{ color: "#6B7A94", marginBottom: 24 }}>
            Whether you need software, a laptop, or just some tech advice — we&apos;re here.
          </p>
          <Link href="/contact" className="btn-primary">Get in Touch →</Link>
        </div>
      </section>

      <style>{`
        .mv-grid { grid-template-columns: 1fr 1fr !important; }
        .stats-grid { grid-template-columns: repeat(4, 1fr) !important; }
        @media (max-width: 768px) {
          .mv-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}
