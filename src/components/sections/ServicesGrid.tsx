"use client";

import { useState } from "react";
import Link from "next/link";
import { softwareServices } from "@/lib/data";

export default function ServicesGrid() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section style={{ padding: "100px 24px", position: "relative" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-tag" style={{ marginBottom: 16, display: "inline-flex" }}>Our Services</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.5px", marginBottom: 16 }}>
            Software Solutions
            <br />
            <span className="gradient-text">Built for Growth</span>
          </h2>
          <p style={{ color: "#6B7A94", fontSize: 17, maxWidth: 520, margin: "0 auto" }}>
            From idea to launch — we build software that scales with your business.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {softwareServices.map((service) => (
            <div
              key={service.id}
              className="glass card-hover"
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderRadius: 16,
                padding: "28px",
                border: hovered === service.id ? "1px solid rgba(0,102,255,0.4)" : "1px solid rgba(255,255,255,0.06)",
                background: hovered === service.id ? "rgba(0,102,255,0.06)" : "rgba(10,22,40,0.5)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 14 }}>{service.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "white", marginBottom: 8 }}>{service.title}</h3>
              <p style={{ color: "#6B7A94", fontSize: 14, lineHeight: 1.65, marginBottom: 16 }}>{service.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                {service.tech.map((t) => (
                  <span key={t} style={{
                    padding: "3px 10px",
                    borderRadius: 100,
                    fontSize: 11,
                    background: "rgba(0,102,255,0.12)",
                    border: "1px solid rgba(0,102,255,0.2)",
                    color: "#00AAFF",
                  }}>{t}</span>
                ))}
              </div>
              <Link href="/contact" style={{
                color: "#00AAFF",
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}>
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
