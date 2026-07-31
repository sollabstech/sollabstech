import Link from "next/link";
import { softwareServices, techStack } from "@/lib/data";

export const metadata = {
  title: "Software Development Services – Sollabs Tech",
  description: "Mobile apps, websites, e-commerce, AI integration, ERP, CRM, and custom software built by Sollabs Tech. Clean code. On-time delivery. Free consultation.",
  keywords: ["mobile app development India", "website development", "ERP software India", "CRM development", "AI integration", "custom software"],
  alternates: { canonical: "/software" },
  openGraph: {
    title: "Software Development Services – Sollabs Tech",
    description: "From mobile apps to AI systems — software that transforms businesses. Free consultation.",
    url: "https://www.sollabstech.com/software",
  },
};

export default function SoftwarePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 80, paddingLeft: 24, paddingRight: 24, textAlign: "center", position: "relative" }}>
        <div style={{
          position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
          width: 600, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,102,255,0.12) 0%, transparent 70%)",
          filter: "blur(60px)", zIndex: 0,
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
          <span className="section-tag" style={{ marginBottom: 20, display: "inline-flex" }}>💻 Sollabs Tech Labs</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", fontWeight: 800, marginBottom: 20, letterSpacing: "-1px" }}>
            Software That <span className="gradient-text">Powers Growth</span>
          </h1>
          <p style={{ color: "#6B7A94", fontSize: 18, lineHeight: 1.7, marginBottom: 36 }}>
            From mobile apps to AI systems — we engineer digital products that transform businesses.
            Clean code, premium design, on-time delivery.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
            <Link href="/portfolio" className="btn-outline">View Our Work</Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, marginBottom: 48 }}>
            All <span className="gradient-text-blue">Services</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {softwareServices.map((s) => (
              <div key={s.id} className="glass card-hover" style={{
                borderRadius: 16, padding: "28px",
                border: "1px solid rgba(255,255,255,0.06)",
              }}>
                <div style={{ fontSize: 36, marginBottom: 14 }}>{s.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "white", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: "#6B7A94", fontSize: 14, lineHeight: 1.65, marginBottom: 14 }}>{s.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {s.tech.map((t) => (
                    <span key={t} style={{
                      padding: "3px 10px", borderRadius: 100, fontSize: 11,
                      background: "rgba(0,102,255,0.1)", border: "1px solid rgba(0,102,255,0.2)", color: "#00AAFF",
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section style={{ padding: "60px 24px", background: "rgba(0,0,0,0.2)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, marginBottom: 36 }}>
            Our <span className="gradient-text-blue">Technology Stack</span>
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {techStack.map((t) => (
              <div key={t.name} style={{
                padding: "10px 22px", borderRadius: 100,
                background: "rgba(10,22,40,0.8)",
                border: "1px solid rgba(255,255,255,0.08)",
                fontSize: 14, fontWeight: 500, color: t.color,
                display: "flex", alignItems: "center", gap: 8,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: t.color, display: "inline-block" }} />
                {t.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <span className="section-tag" style={{ marginBottom: 16, display: "inline-flex" }}>Our Process</span>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, marginBottom: 48 }}>
            How We <span className="gradient-text-blue">Work</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 20 }}>
            {[
              { step: "01", title: "Discovery", desc: "We learn your business, goals, and technical requirements." },
              { step: "02", title: "Design", desc: "UI/UX wireframes and prototypes reviewed by your team." },
              { step: "03", title: "Development", desc: "Agile sprints with regular demos and feedback loops." },
              { step: "04", title: "Launch", desc: "Deployment, testing, and go-live with full handover." },
              { step: "05", title: "Support", desc: "Ongoing maintenance, updates, and scaling as you grow." },
            ].map((p) => (
              <div key={p.step} style={{
                padding: "24px 20px", borderRadius: 16,
                background: "rgba(10,22,40,0.6)",
                border: "1px solid rgba(255,255,255,0.06)",
                textAlign: "left",
              }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: "rgba(0,102,255,0.4)", marginBottom: 10 }}>{p.step}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "white", marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: "#6B7A94", lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, marginBottom: 16 }}>
            Ready to Build Your <span className="gradient-text-blue">Next Project?</span>
          </h2>
          <p style={{ color: "#6B7A94", marginBottom: 28 }}>Free consultation. No commitment. Just great ideas.</p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: 16, padding: "14px 36px" }}>
            Start a Conversation →
          </Link>
        </div>
      </section>
    </>
  );
}
