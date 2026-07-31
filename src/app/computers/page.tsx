"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { computerProducts } from "@/lib/data";

interface DisplayProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  condition: string;
  image: string;
  available: boolean;
  stock?: number;
  specs?: { cpu: string; ram: string; storage: string; display?: string; gpu?: string };
  warranty?: string;
}

const categories = ["All", "Gaming Laptops", "Business Laptops", "Student Laptops", "Custom PCs", "Workstations"];

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
  const [firebaseProducts, setFirebaseProducts] = useState<DisplayProduct[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      if (!snap.empty) {
        setFirebaseProducts(snap.docs.map((d) => {
          const data = d.data();
          return {
            id: d.id,
            name: data.name,
            category: data.category,
            price: data.price,
            condition: data.condition,
            image: data.image,
            available: data.status === "available" && data.stock > 0,
            stock: data.stock,
          } as DisplayProduct;
        }));
      } else {
        setFirebaseProducts(null);
      }
      setLoading(false);
    }, () => setLoading(false));
    return () => unsub();
  }, []);

  const products: DisplayProduct[] = firebaseProducts ?? computerProducts.map((p) => ({
    id: String(p.id),
    name: p.name,
    category: p.category,
    price: p.price,
    condition: p.condition,
    image: p.image,
    available: p.available,
    specs: p.specs,
    warranty: p.warranty,
  }));

  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <>

      {/* Products */}
      <section id="products" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, marginBottom: 8 }}>
            Available <span className="gradient-text-blue">Machines</span>
          </h2>
          {!loading && (
            <p style={{ textAlign: "center", fontSize: 12, color: "#334155", marginBottom: 28 }}>
              {firebaseProducts ? `${products.length} products · live from Firebase` : `${products.length} products`}
            </p>
          )}

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

          {loading ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} style={{ borderRadius: 16, background: "rgba(10,22,40,0.7)", border: "1px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
                  <div style={{ height: 180, background: "rgba(0,102,255,0.06)", animation: "pulse 1.5s ease-in-out infinite" }} />
                  <div style={{ padding: "20px 22px 24px" }}>
                    <div style={{ height: 12, background: "rgba(255,255,255,0.04)", borderRadius: 4, marginBottom: 8 }} />
                    <div style={{ height: 18, background: "rgba(255,255,255,0.06)", borderRadius: 4, marginBottom: 12, width: "70%" }} />
                  </div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 24px" }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>🔄</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "white", marginBottom: 8 }}>Real Products Coming Soon</h3>
              <p style={{ color: "#475569", fontSize: 15, marginBottom: 24 }}>We're uploading our actual inventory right now. WhatsApp us to see what's available today.</p>
              <a href="https://wa.me/919384199108?text=Hi, what laptops do you have available?" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 14, padding: "10px 24px" }}>
                💬 Ask on WhatsApp
              </a>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
              {filtered.map((product) => (
                <div key={product.id} className="card-hover" style={{
                  borderRadius: 16, background: "rgba(10,22,40,0.7)",
                  border: "1px solid rgba(255,255,255,0.06)", overflow: "hidden", position: "relative",
                }}>
                  <div style={{
                    position: "absolute", top: 12, right: 12, zIndex: 2,
                    padding: "4px 10px", borderRadius: 100, fontSize: 11, fontWeight: 600,
                    background: product.available ? "rgba(0,200,80,0.15)" : "rgba(255,60,60,0.15)",
                    border: product.available ? "1px solid rgba(0,200,80,0.3)" : "1px solid rgba(255,60,60,0.3)",
                    color: product.available ? "#00C850" : "#FF6060",
                  }}>{product.available ? "✓ Available" : "Sold Out"}</div>

                  <div style={{ height: 180, overflow: "hidden", background: "rgba(0,102,255,0.08)" }}>
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease", display: "block" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                      />
                    ) : (
                      <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48 }}>💻</div>
                    )}
                  </div>

                  <div style={{ padding: "20px 22px 24px" }}>
                    <div style={{ fontSize: 11, color: "#4A5F7A", marginBottom: 4, fontWeight: 500 }}>{product.category}</div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "white", marginBottom: 12 }}>{product.name}</h3>

                    {product.specs && (
                      <div style={{ marginBottom: 12 }}>
                        {([
                          ["CPU", product.specs.cpu],
                          ["RAM", product.specs.ram],
                          ["Storage", product.specs.storage],
                          product.specs.display ? ["Display", product.specs.display] : product.specs.gpu ? ["GPU", product.specs.gpu] : null,
                        ].filter(Boolean) as [string, string][]).map(([k, v]) => (
                          <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                            <span style={{ fontSize: 12, color: "#3D4F6B" }}>{k}</span>
                            <span style={{ fontSize: 12, color: "#C4D0E0", fontWeight: 500 }}>{v}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                      <div>
                        <div style={{ fontSize: 11, color: "#3D4F6B" }}>Condition: <span style={{ color: "#6B7A94" }}>{product.condition}</span></div>
                        {product.warranty && <div style={{ fontSize: 11, color: "#3D4F6B" }}>Warranty: <span style={{ color: "#00C850" }}>{product.warranty}</span></div>}
                        {product.stock !== undefined && !product.warranty && <div style={{ fontSize: 11, color: "#3D4F6B" }}>Stock: <span style={{ color: "#6B7A94" }}>{product.stock}</span></div>}
                      </div>
                      <div style={{ fontSize: 24, fontWeight: 800, color: "white" }}>
                        ₹{product.price.toLocaleString("en-IN")}
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: 8 }}>
                      <a
                        href={`https://wa.me/919384199108?text=Hi, I'm interested in buying the ${product.name} for ₹${product.price.toLocaleString("en-IN")}`}
                        target="_blank" rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ fontSize: 13, padding: "9px 16px", flex: 1, textAlign: "center", justifyContent: "center" }}
                      >Buy Now</a>
                      <a
                        href={`https://wa.me/919384199108?text=Hi, I need more details about ${product.name}`}
                        target="_blank" rel="noopener noreferrer"
                        className="btn-outline"
                        style={{ fontSize: 13, padding: "9px 14px" }}
                      >💬 Inquire</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
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

      {/* Trust section */}
      <section style={{ padding: "60px 24px", background: "rgba(0,0,0,0.2)", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, marginBottom: 12 }}>
            Trusted by <span className="gradient-text-blue">Hundreds of Customers</span>
          </h2>
          <p style={{ color: "#6B7A94", marginBottom: 24 }}>500+ laptops delivered across India. Every customer loved it.</p>
          <Link href="/reviews" className="btn-outline">View Customer Reviews →</Link>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, marginBottom: 12 }}>
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p style={{ color: "#6B7A94", marginBottom: 24 }}>Tell us your budget and requirements — we&apos;ll source the perfect machine for you.</p>
          <a href="https://wa.me/919384199108?text=Hi, I need a custom laptop recommendation" target="_blank" rel="noopener noreferrer" className="btn-primary">
            💬 Get Custom Recommendation
          </a>
        </div>
      </section>
      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }`}</style>
    </>
  );
}
