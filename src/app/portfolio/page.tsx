"use client";

import { useState } from "react";
import { portfolioProjects } from "@/lib/data";
import Link from "next/link";

const categories = ["All", "Mobile Apps", "Websites", "E-commerce", "Dashboard", "CRM", "ERP", "AI Projects"];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? portfolioProjects : portfolioProjects.filter((p) => p.category === active);

  return (
    <>
      <section style={{ paddingTop: 120, paddingBottom: 60, paddingLeft: 24, paddingRight: 24, textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <span className="section-tag" style={{ marginBottom: 16, display: "inline-flex" }}>Portfolio</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", fontWeight: 800, marginBottom: 16 }}>
            Our Work, <span className="gradient-text">Your Proof</span>
          </h1>
          <p style={{ color: "#6B7A94", fontSize: 17, lineHeight: 1.7 }}>
            200+ projects delivered. Each one a story of transformation, innovation, and results.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 24px 100px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Filter */}
          <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)} style={{
                padding: "8px 18px", borderRadius: 100, fontSize: 13, fontWeight: 500, cursor: "pointer",
                border: active === cat ? "1px solid #0066FF" : "1px solid rgba(255,255,255,0.1)",
                background: active === cat ? "rgba(0,102,255,0.2)" : "rgba(255,255,255,0.04)",
                color: active === cat ? "#00AAFF" : "#6B7A94", transition: "all 0.2s",
              }}>{cat}</button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 0", color: "#3D4F6B" }}>
              No projects in this category yet. Check back soon!
            </div>
          )}

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
            {filtered.map((project) => (
              <div key={project.id} className="card-hover" style={{
                borderRadius: 18, overflow: "hidden",
                background: "rgba(10,22,40,0.7)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}>
                <div style={{
                  height: 220,
                  background: `linear-gradient(135deg, rgba(0,${project.id * 30 % 200},255,0.2), rgba(0,170,255,0.1))`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative",
                }}>
                  <div style={{ fontSize: 72, opacity: 0.7 }}>
                    {project.category === "Mobile Apps" ? "📱" :
                     project.category === "E-commerce" ? "🛒" :
                     project.category === "Dashboard" ? "📊" :
                     project.category === "AI Projects" ? "🤖" :
                     project.category === "CRM" ? "👥" : "🌐"}
                  </div>
                  <div style={{
                    position: "absolute", top: 14, left: 14,
                    padding: "4px 12px", borderRadius: 100, fontSize: 11, fontWeight: 600,
                    background: "rgba(0,102,255,0.3)", border: "1px solid rgba(0,102,255,0.5)", color: "#00AAFF",
                  }}>{project.category}</div>
                </div>

                <div style={{ padding: "22px 24px 26px" }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "white", marginBottom: 4 }}>{project.title}</h3>
                  <p style={{ fontSize: 12, color: "#3D4F6B", marginBottom: 10 }}>Client · {project.client}</p>
                  <p style={{ fontSize: 14, color: "#6B7A94", lineHeight: 1.65, marginBottom: 16 }}>{project.description}</p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                    {project.tech.map((t) => (
                      <span key={t} style={{
                        padding: "3px 10px", borderRadius: 100, fontSize: 11,
                        background: "rgba(0,102,255,0.1)", border: "1px solid rgba(0,102,255,0.2)", color: "#7AA8FF",
                      }}>{t}</span>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: 10 }}>
                    <a href={project.liveUrl} className="btn-primary" style={{ fontSize: 13, padding: "8px 16px" }}>
                      🔗 Live Site
                    </a>
                    <button className="btn-outline" style={{ fontSize: 13, padding: "8px 16px" }}>
                      📄 Case Study
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 24px", background: "rgba(0,0,0,0.2)", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, marginBottom: 12 }}>
            Want to Be <span className="gradient-text-blue">Our Next Case Study?</span>
          </h2>
          <p style={{ color: "#6B7A94", marginBottom: 24 }}>Let&apos;s build something remarkable together.</p>
          <Link href="/contact" className="btn-primary">Start Your Project →</Link>
        </div>
      </section>
    </>
  );
}
