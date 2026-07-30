"use client";

const reasons = [
  { icon: "⚡", title: "Fast Delivery", desc: "We ship products and deploy software faster than industry standard — always on time." },
  { icon: "🛡️", title: "Trusted Quality", desc: "Every laptop is tested, graded, and every line of code is reviewed before delivery." },
  { icon: "🤝", title: "Dedicated Support", desc: "24/7 post-delivery support for both software and hardware customers." },
  { icon: "💰", title: "Best Value", desc: "Competitive pricing without compromising on quality or service." },
  { icon: "🌍", title: "Pan-India Shipping", desc: "We ship laptops and PCs to every corner of India with full tracking." },
  { icon: "🔒", title: "Warranty Guarantee", desc: "All products come with warranty. All software comes with maintenance support." },
];

export default function WhyUs() {
  return (
    <section style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="section-tag" style={{ marginBottom: 16, display: "inline-flex" }}>Why Sollabs Tech</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800 }}>
            One Brand. <span className="gradient-text-blue">Endless Trust.</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="why-grid">
          {reasons.map((r) => (
            <div key={r.title} className="glass card-hover" style={{
              borderRadius: 16,
              padding: "28px",
              border: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              gap: 16,
              alignItems: "flex-start",
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                background: "rgba(0,102,255,0.12)",
                border: "1px solid rgba(0,102,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22,
              }}>{r.icon}</div>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "white", marginBottom: 6 }}>{r.title}</h3>
                <p style={{ color: "#6B7A94", fontSize: 14, lineHeight: 1.6 }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-grid { grid-template-columns: repeat(3, 1fr) !important; }
        @media (max-width: 900px) { .why-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .why-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
