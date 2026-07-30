"use client";

import { useState } from "react";
import Link from "next/link";
import { computerProducts } from "@/lib/data";

const categories = ["All", "Gaming Laptops", "Business Laptops", "Student Laptops", "Custom PCs", "Workstations"];

const categoryEmoji: Record<string, string> = {
  "Gaming Laptops": "🎮", "Business Laptops": "💼", "Student Laptops": "📚",
  "Custom PCs": "🖥️", "Workstations": "⚡",
};

const services = [
  { icon: "🔧", title: "Laptop Repairs", desc: "Screen, keyboard, battery, motherboard — all repairs covered." },
  { icon: "💾", title: "SSD & RAM Upgrades", desc: "Boost your laptop speed with SSD and RAM upgrades." },
  { icon: "🛡️", title: "Warranty Support", desc: "All laptops come with 3–12 month warranty." },
  { icon: "🚚", title: "Shipping Across India", desc: "Safe, insured delivery to every Indian city." },
  { icon: "🎮", title: "Custom Gaming PCs", desc: "Build your dream PC with parts you choose." },
  { icon: "🔌", title: "Accessories", desc: "Bags, mice, keyboards, cooling pads and more." },
];

export default function ComputersPage() {
  const [active, setActive] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<null | typeof computerProducts[0]>(null);
  const filtered = active === "All" ? computerProducts : computerProducts.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 80, paddingLeft: 24, paddingRight: 24, textAlign: "center", position: "relative" }}>
        <div style={{
          position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
          width: 600, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,170,255,0.1) 0%, transparent 70%)",
          filter: "blur(60px)", zIndex: 0,
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
          <span className="section-tag" style={{ marginBottom: 20, display: "inline-flex" }}>🖥️ Sollabs Tech Computers</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", fontWeight: 800, marginBottom: 20, letterSpacing: "-1px" }}>
            Premium Machines,
            <br /><span className="gradient-text">Unbeatable Prices</span>
          </h1>
          <p style={{ color: "#6B7A94", fontSize: 18, lineHeight: 1.7, marginBottom: 36 }}>
            Second-hand laptops, custom gaming PCs, workstations — all tested, graded, and shipped across India.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="btn-primary">
              💬 WhatsApp to Order
            </a>
            <a href="#products" className="btn-outline">Browse Products</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "60px 24px", background: "rgba(0,0,0,0.2)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, marginBottom: 36 }}>
            What We <span className="gradient-text-blue">Offer</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
            {services.map((s) => (
              <div key={s.title} className="glass" style={{
                borderRadius: 14, padding: "20px",
                border: "1px solid rgba(255,255,255,0.06)",
                display: "flex", gap: 14, alignItems: "flex-start",
              }}>
                <span style={{ fontSize: 26, flexShrink: 0 }}>{s.icon}</span>
                <div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 4 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: "#6B7A94", lineHeight: 1.5 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, marginBottom: 36 }}>
            Available <span className="gradient-text-blue">Machines</span>
          </h2>

          <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 36 }}>
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)} style={{
                padding: "8px 18px", borderRadius: 100, fontSize: 13, fontWeight: 500, cursor: "pointer",
                border: active === cat ? "1px solid #0066FF" : "1px solid rgba(255,255,255,0.1)",
                background: active === cat ? "rgba(0,102,255,0.2)" : "rgba(255,255,255,0.04)",
                color: active === cat ? "#00AAFF" : "#6B7A94", transition: "all 0.2s",
              }}>{cat}</button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {filtered.map((product) => (
              <div key={product.id} className="card-hover" style={{
                borderRadius: 16, background: "rgba(10,22,40,0.7)",
                border: "1px solid rgba(255,255,255,0.06)", overflow: "hidden", position: "relative",
              }}>
                {product.available ? (
                  <div style={{
                    position: "absolute", top: 12, right: 12, zIndex: 2,
                    padding: "4px 10px", borderRadius: 100, fontSize: 11, fontWeight: 600,
                    background: "rgba(0,200,80,0.15)", border: "1px solid rgba(0,200,80,0.3)", color: "#00C850",
                  }}>✓ Available</div>
                ) : (
                  <div style={{
                    position: "absolute", top: 12, right: 12, zIndex: 2,
                    padding: "4px 10px", borderRadius: 100, fontSize: 11, fontWeight: 600,
                    background: "rgba(255,60,60,0.15)", border: "1px solid rgba(255,60,60,0.3)", color: "#FF6060",
                  }}>Sold Out</div>
                )}

                <div style={{
                  height: 180, background: "linear-gradient(135deg, rgba(0,102,255,0.12), rgba(0,170,255,0.06))",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 70,
                }}>
                  {categoryEmoji[product.category] ?? "💻"}
                </div>

                <div style={{ padding: "20px 22px 24px" }}>
                  <div style={{ fontSize: 11, color: "#4A5F7A", marginBottom: 4, fontWeight: 500 }}>{product.category}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "white", marginBottom: 12 }}>{product.name}</h3>

                  <div style={{ marginBottom: 12 }}>
                    {[
                      ["CPU", product.specs.cpu], ["RAM", product.specs.ram],
                      ["Storage", product.specs.storage], ["Display", product.specs.display],
                    ].map(([k, v]) => (
                      <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                        <span style={{ fontSize: 12, color: "#3D4F6B" }}>{k}</span>
                        <span style={{ fontSize: 12, color: "#C4D0E0", fontWeight: 500 }}>{v}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                    <div>
                      <div style={{ fontSize: 11, color: "#3D4F6B" }}>Condition: <span style={{ color: "#6B7A94" }}>{product.condition}</span></div>
                      <div style={{ fontSize: 11, color: "#3D4F6B" }}>Warranty: <span style={{ color: "#00C850" }}>{product.warranty}</span></div>
                    </div>
                    <div style={{ fontSize: 24, fontWeight: 800, color: "white" }}>
                      ₹{product.price.toLocaleString("en-IN")}
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 8 }}>
                    <a
                      href={`https://wa.me/91XXXXXXXXXX?text=Hi, I'm interested in buying the ${product.name} for ₹${product.price.toLocaleString("en-IN")}`}
                      target="_blank" rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ fontSize: 13, padding: "9px 16px", flex: 1, textAlign: "center", justifyContent: "center" }}
                    >
                      Buy Now
                    </a>
                    <a
                      href={`https://wa.me/91XXXXXXXXXX?text=Hi, I need more details about ${product.name}`}
                      target="_blank" rel="noopener noreferrer"
                      className="btn-outline"
                      style={{ fontSize: 13, padding: "9px 14px" }}
                    >💬 Inquire</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sold Gallery teaser */}
      <section style={{ padding: "60px 24px", background: "rgba(0,0,0,0.2)", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, marginBottom: 12 }}>
            Trusted by <span className="gradient-text-blue">Hundreds of Customers</span>
          </h2>
          <p style={{ color: "#6B7A94", marginBottom: 24 }}>500+ laptops delivered across India. Every customer loved it.</p>
          <Link href="/reviews" className="btn-outline">View Customer Reviews →</Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, marginBottom: 12 }}>
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p style={{ color: "#6B7A94", marginBottom: 24 }}>Tell us your budget and requirements — we&apos;ll source the perfect machine for you.</p>
          <a href="https://wa.me/91XXXXXXXXXX?text=Hi, I need a custom laptop recommendation" target="_blank" rel="noopener noreferrer" className="btn-primary">
            💬 Get Custom Recommendation
          </a>
        </div>
      </section>
    </>
  );
}
