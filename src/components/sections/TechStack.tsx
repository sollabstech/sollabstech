"use client";

import { techStack } from "@/lib/data";

export default function TechStack() {
  const doubled = [...techStack, ...techStack];

  return (
    <section style={{ padding: "80px 0", overflow: "hidden", position: "relative" }}>
      <div style={{ textAlign: "center", marginBottom: 48, padding: "0 24px" }}>
        <span className="section-tag" style={{ marginBottom: 12, display: "inline-flex" }}>Technology</span>
        <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800 }}>
          Built With <span className="gradient-text-blue">Best-in-Class</span> Tools
        </h2>
      </div>

      {/* Marquee row 1 */}
      <div style={{ position: "relative", marginBottom: 16 }}>
        <div style={{
          display: "flex",
          gap: 16,
          animation: "marquee 30s linear infinite",
          width: "max-content",
        }}>
          {doubled.map((tech, i) => (
            <div key={i} style={{
              padding: "10px 22px",
              borderRadius: 100,
              background: "rgba(10,22,40,0.8)",
              border: "1px solid rgba(255,255,255,0.08)",
              fontSize: 14,
              fontWeight: 500,
              color: tech.color,
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: tech.color, display: "inline-block" }} />
              {tech.name}
            </div>
          ))}
        </div>
      </div>

      {/* Marquee row 2 reversed */}
      <div style={{ position: "relative" }}>
        <div style={{
          display: "flex",
          gap: 16,
          animation: "marquee-reverse 25s linear infinite",
          width: "max-content",
        }}>
          {[...doubled].reverse().map((tech, i) => (
            <div key={i} style={{
              padding: "10px 22px",
              borderRadius: 100,
              background: "rgba(10,22,40,0.8)",
              border: "1px solid rgba(255,255,255,0.08)",
              fontSize: 14,
              fontWeight: 500,
              color: tech.color,
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: tech.color, display: "inline-block" }} />
              {tech.name}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
