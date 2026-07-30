"use client";

import { useState } from "react";
import Link from "next/link";
import { computerProducts } from "@/lib/data";

const categories = ["All", "Gaming Laptops", "Business Laptops", "Student Laptops", "Custom PCs", "Workstations"];

const categoryEmoji: Record<string, string> = {
  "Gaming Laptops": "🎮",
  "Business Laptops": "💼",
  "Student Laptops": "📚",
  "Custom PCs": "🖥️",
  "Workstations": "⚡",
  "Accessories": "🔌",
};

export default function ComputersPreview() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? computerProducts : computerProducts.filter((p) => p.category === active);

  return (
    <section style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="section-tag" style={{ marginBottom: 16, display: "inline-flex" }}>Laptops & Computers</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, marginBottom: 12 }}>
            Premium Machines,
            <br />
            <span className="gradient-text-blue">Trusted Quality</span>
          </h2>
          <p style={{ color: "#6B7A94", fontSize: 16 }}>Shipped across India with warranty & support.</p>
        </div>

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

        {/* Product grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {filtered.map((product) => (
            <div key={product.id} className="card-hover" style={{
              borderRadius: 16,
              background: "rgba(10,22,40,0.7)",
              border: "1px solid rgba(255,255,255,0.06)",
              overflow: "hidden",
              position: "relative",
            }}>
              {!product.available && (
                <div style={{
                  position: "absolute", top: 12, right: 12, zIndex: 2,
                  padding: "4px 10px", borderRadius: 100, fontSize: 11, fontWeight: 600,
                  background: "rgba(255,60,60,0.2)", border: "1px solid rgba(255,60,60,0.4)", color: "#FF6060",
                }}>Sold Out</div>
              )}
              {product.available && (
                <div style={{
                  position: "absolute", top: 12, right: 12, zIndex: 2,
                  padding: "4px 10px", borderRadius: 100, fontSize: 11, fontWeight: 600,
                  background: "rgba(0,200,80,0.15)", border: "1px solid rgba(0,200,80,0.3)", color: "#00C850",
                }}>Available</div>
              )}

              {/* Image */}
              <div style={{
                height: 180,
                background: "linear-gradient(135deg, rgba(0,102,255,0.15), rgba(0,170,255,0.08))",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64,
              }}>
                {categoryEmoji[product.category] ?? "💻"}
              </div>

              <div style={{ padding: "20px 22px 24px" }}>
                <div style={{ fontSize: 11, color: "#4A5F7A", marginBottom: 6, fontWeight: 500 }}>{product.category}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "white", marginBottom: 12 }}>{product.name}</h3>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 12px", marginBottom: 16 }}>
                  {[
                    ["CPU", product.specs.cpu],
                    ["RAM", product.specs.ram],
                    ["Storage", product.specs.storage],
                    ["GPU", product.specs.gpu],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <div style={{ fontSize: 10, color: "#3D4F6B", marginBottom: 2 }}>{k}</div>
                      <div style={{ fontSize: 12, color: "#C4D0E0", fontWeight: 500 }}>{v}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <div>
                    <div style={{ fontSize: 11, color: "#3D4F6B" }}>Condition: <span style={{ color: "#6B7A94" }}>{product.condition}</span></div>
                    <div style={{ fontSize: 11, color: "#3D4F6B" }}>Warranty: <span style={{ color: "#6B7A94" }}>{product.warranty}</span></div>
                  </div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "white" }}>
                    ₹{product.price.toLocaleString("en-IN")}
                  </div>
                </div>

                <div style={{ display: "flex", gap: 8 }}>
                  <a
                    href={`https://wa.me/91XXXXXXXXXX?text=Hi, I'm interested in ${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ fontSize: 13, padding: "8px 16px", flex: 1, textAlign: "center", justifyContent: "center" }}
                  >Buy Now</a>
                  <a
                    href={`https://wa.me/91XXXXXXXXXX?text=Hi, I need more info about ${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                    style={{ fontSize: 13, padding: "8px 16px" }}
                  >💬</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Link href="/computers" className="btn-outline">Browse All Machines →</Link>
        </div>
      </div>
    </section>
  );
}
