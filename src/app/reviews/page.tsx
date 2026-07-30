"use client";

import { useState } from "react";
import { reviews } from "@/lib/data";

export default function ReviewsPage() {
  const [activeTab, setActiveTab] = useState<"software" | "laptop" | "all">("all");
  const filtered = activeTab === "all" ? reviews : reviews.filter((r) => r.type === activeTab);

  return (
    <>
      <section style={{ paddingTop: 120, paddingBottom: 60, paddingLeft: 24, paddingRight: 24, textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <span className="section-tag" style={{ marginBottom: 16, display: "inline-flex" }}>⭐ Reviews</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", fontWeight: 800, marginBottom: 16 }}>
            Real People,<br /><span className="gradient-text">Real Results</span>
          </h1>
          <p style={{ color: "#6B7A94", fontSize: 17, lineHeight: 1.7, marginBottom: 24 }}>
            150+ software clients. 500+ laptop customers. One consistent rating: 5 stars.
          </p>

          {/* Overall rating */}
          <div style={{ display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { value: "4.9/5", label: "Software Rating" },
              { value: "5.0/5", label: "Laptop Rating" },
              { value: "650+", label: "Total Reviews" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800 }} className="gradient-text-blue">{s.value}</div>
                <div style={{ fontSize: 13, color: "#6B7A94" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 100px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Tabs */}
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 40 }}>
            {[
              { key: "all", label: "All Reviews" },
              { key: "software", label: "💻 Software" },
              { key: "laptop", label: "🖥️ Laptops" },
            ].map((tab) => (
              <button key={tab.key} onClick={() => setActiveTab(tab.key as "software" | "laptop" | "all")} style={{
                padding: "10px 24px", borderRadius: 10, fontSize: 14, fontWeight: 500, cursor: "pointer",
                border: activeTab === tab.key ? "1px solid #0066FF" : "1px solid rgba(255,255,255,0.1)",
                background: activeTab === tab.key ? "rgba(0,102,255,0.15)" : "transparent",
                color: activeTab === tab.key ? "#00AAFF" : "#6B7A94", transition: "all 0.2s",
              }}>{tab.label}</button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {filtered.map((review) => (
              <div key={review.id} className="glass card-hover" style={{
                borderRadius: 16, padding: "28px",
                border: "1px solid rgba(255,255,255,0.06)",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                  <div style={{ display: "flex", gap: 2 }}>
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i} style={{ color: "#FFB800", fontSize: 16 }}>★</span>
                    ))}
                  </div>
                  <span style={{
                    padding: "3px 10px", borderRadius: 100, fontSize: 10, fontWeight: 600,
                    background: review.type === "software" ? "rgba(0,102,255,0.15)" : "rgba(0,170,255,0.1)",
                    border: `1px solid ${review.type === "software" ? "rgba(0,102,255,0.3)" : "rgba(0,170,255,0.2)"}`,
                    color: "#00AAFF",
                  }}>
                    {review.type === "software" ? "💻 Software" : "🖥️ Laptop"}
                  </span>
                </div>

                <p style={{ color: "#8A9BB8", fontSize: 14, lineHeight: 1.75, marginBottom: 20, fontStyle: "italic" }}>
                  &ldquo;{review.review}&rdquo;
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: "50%",
                    background: "linear-gradient(135deg, #0066FF, #00AAFF)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, fontSize: 14, color: "white", flexShrink: 0,
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
        </div>
      </section>
    </>
  );
}
