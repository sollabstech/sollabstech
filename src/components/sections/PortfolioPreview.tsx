"use client";

import { useState } from "react";
import Link from "next/link";
import { portfolioProjects } from "@/lib/data";

const categories = ["All", "Mobile Apps", "Websites", "E-commerce", "Dashboard", "AI Projects", "CRM"];

export default function PortfolioPreview() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? portfolioProjects : portfolioProjects.filter((p) => p.category === active);

  return (
    <section style={{ padding: "100px 24px", background: "rgba(0,0,0,0.2)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="section-tag" style={{ marginBottom: 16, display: "inline-flex" }}>Portfolio</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, marginBottom: 12 }}>
            Work That Speaks <span className="gradient-text-blue">For Itself</span>
          </h2>
          <p style={{ color: "#6B7A94", fontSize: 16 }}>Real projects. Real results. Real clients.</p>
        </div>

        {/* Category filter */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: "8px 18px",
                borderRadius: 100,
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                border: active === cat ? "1px solid #0066FF" : "1px solid rgba(255,255,255,0.1)",
                background: active === cat ? "rgba(0,102,255,0.2)" : "rgba(255,255,255,0.04)",
                color: active === cat ? "#00AAFF" : "#6B7A94",
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
          {filtered.map((project) => (
            <div
              key={project.id}
              className="card-hover"
              style={{
                borderRadius: 16,
                overflow: "hidden",
                background: "rgba(10,22,40,0.7)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Image placeholder */}
              <div style={{
                height: 200,
                background: `linear-gradient(135deg, rgba(0,102,255,0.2), rgba(0,170,255,0.1))`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{ fontSize: 60, opacity: 0.6 }}>
                  {project.category === "Mobile Apps" ? "📱" :
                   project.category === "E-commerce" ? "🛒" :
                   project.category === "Dashboard" ? "📊" :
                   project.category === "AI Projects" ? "🤖" :
                   project.category === "CRM" ? "👥" : "🌐"}
                </div>
                <div style={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  padding: "4px 12px",
                  borderRadius: 100,
                  fontSize: 11,
                  fontWeight: 600,
                  background: "rgba(0,102,255,0.3)",
                  border: "1px solid rgba(0,102,255,0.4)",
                  color: "#00AAFF",
                }}>{project.category}</div>
              </div>

              <div style={{ padding: "20px 24px 24px" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "white", marginBottom: 6 }}>{project.title}</h3>
                <p style={{ fontSize: 12, color: "#4A5F7A", marginBottom: 10 }}>Client: {project.client}</p>
                <p style={{ fontSize: 13, color: "#6B7A94", lineHeight: 1.6, marginBottom: 16 }}>{project.description}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                  {project.tech.map((t) => (
                    <span key={t} style={{
                      padding: "3px 10px", borderRadius: 100, fontSize: 11,
                      background: "rgba(0,102,255,0.1)", border: "1px solid rgba(0,102,255,0.2)", color: "#7AA8FF",
                    }}>{t}</span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: 10 }}>
                  <a href={project.liveUrl} className="btn-primary" style={{ fontSize: 12, padding: "8px 16px" }}>Live Site</a>
                  <button className="btn-outline" style={{ fontSize: 12, padding: "8px 16px" }}>Case Study</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Link href="/portfolio" className="btn-outline">View All Projects →</Link>
        </div>
      </div>
    </section>
  );
}
