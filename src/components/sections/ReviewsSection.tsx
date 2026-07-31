"use client";

import { useState } from "react";
import Link from "next/link";
import { reviews } from "@/lib/data";

export default function ReviewsSection() {
  const [activeTab, setActiveTab] = useState<"software" | "laptop">("software");
  const filtered = reviews.filter((r) => r.type === activeTab);

  return (
    <section className="resp-section" style={{ padding: "100px 24px", background: "rgba(0,0,0,0.2)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="section-tag" style={{ marginBottom: 16, display: "inline-flex" }}>Reviews</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, marginBottom: 12 }}>
            What Our <span className="gradient-text-blue">Clients Say</span>
          </h2>
          <p style={{ color: "#6B7A94" }}>Real feedback from real customers across India.</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 40, flexWrap: "wrap" }}>
          {[
            { key: "software", label: "💻 Software Clients" },
            { key: "laptop", label: "🖥️ Laptop Customers" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as "software" | "laptop")}
              style={{
                padding: "10px 24px", borderRadius: 10, fontSize: 14, fontWeight: 500, cursor: "pointer",
                border: activeTab === tab.key ? "1px solid #0066FF" : "1px solid rgba(255,255,255,0.1)",
                background: activeTab === tab.key ? "rgba(0,102,255,0.15)" : "transparent",
                color: activeTab === tab.key ? "#00AAFF" : "#6B7A94", transition: "all 0.2s",
              }}
            >{tab.label}</button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {filtered.map((review) => (
            <div key={review.id} className="glass card-hover" style={{
              borderRadius: 16,
              padding: "28px",
              border: "1px solid rgba(255,255,255,0.06)",
            }}>
              {/* Stars */}
              <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} style={{ color: "#FFB800", fontSize: 16 }}>★</span>
                ))}
              </div>

              <p style={{ color: "#8A9BB8", fontSize: 14, lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>
                &ldquo;{review.review}&rdquo;
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "linear-gradient(135deg, #0066FF, #00AAFF)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, fontSize: 14, color: "white",
                  flexShrink: 0,
                }}>{review.avatar}</div>
                <div>
                  <div style={{ fontWeight: 600, color: "white", fontSize: 14 }}>{review.name}</div>
                  <div style={{ fontSize: 12, color: "#3D4F6B" }}>
                    {review.city} · {review.type === "software" ? (review as {project?: string}).project : (review as {product?: string}).product}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link href="/reviews" className="btn-outline">View All Reviews →</Link>
        </div>
      </div>
    </section>
  );
}
