"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  condition: string;
  image: string;
  status: string;
  stock: number;
  ram?: string;
  processor?: string;
  storageType?: string;
  storageSize?: string;
  graphicsCard?: string;
  accessories?: string;
  videoUrl?: string;
}

export default function LaptopDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    getDoc(doc(db, "products", id)).then((snap) => {
      if (snap.exists()) {
        setProduct({ id: snap.id, ...snap.data() } as Product);
      }
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>💻</div>
          <p style={{ color: "#475569" }}>Loading...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 24 }}>
        <div>
          <div style={{ fontSize: 56, marginBottom: 16 }}>🔍</div>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "white", marginBottom: 8 }}>Product not found</h2>
          <Link href="/computers" className="btn-primary" style={{ marginTop: 16, display: "inline-block" }}>← Back to Computers</Link>
        </div>
      </div>
    );
  }

  const available = product.status === "available" && product.stock > 0;

  const specs = [
    { label: "Processor", value: product.processor, icon: "⚙️" },
    { label: "RAM", value: product.ram, icon: "🧠" },
    { label: "Storage Type", value: product.storageType, icon: "💾" },
    { label: "Storage Size", value: product.storageSize, icon: "📦" },
    { label: "Graphics Card", value: product.graphicsCard, icon: "🎮" },
    { label: "Condition", value: product.condition, icon: "⭐" },
  ].filter((s) => s.value);

  return (
    <div style={{ minHeight: "100vh", paddingTop: 80 }}>
      {/* Back button */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "16px 24px 0" }}>
        <button
          onClick={() => router.back()}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "8px 16px", borderRadius: 100, fontSize: 13, fontWeight: 600,
            background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
            color: "#94A3B8", cursor: "pointer",
          }}
        >
          ← Back
        </button>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 24px 80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }}
        className="detail-grid">

        {/* Left — Image */}
        <div>
          <div style={{ aspectRatio: "3/2", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(0,102,255,0.06)", position: "relative" }}>
            {product.image ? (
              <img src={product.image} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 72 }}>💻</div>
            )}
            <div style={{
              position: "absolute", top: 14, left: 14,
              padding: "5px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700,
              background: available ? "rgba(0,200,80,0.2)" : "rgba(255,60,60,0.2)",
              border: available ? "1px solid rgba(0,200,80,0.4)" : "1px solid rgba(255,60,60,0.4)",
              color: available ? "#00C850" : "#FF6060",
            }}>{available ? "✓ Available" : "Sold Out"}</div>
          </div>

          {/* YouTube Video */}
          {product.videoUrl && (
            <a
              href={product.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: 16, display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                padding: "14px 20px", borderRadius: 14,
                background: "rgba(255,0,0,0.08)", border: "1px solid rgba(255,0,0,0.2)",
                color: "#FF4444", textDecoration: "none", fontSize: 15, fontWeight: 700,
              }}
            >
              ▶ Watch Product Video on YouTube
            </a>
          )}
        </div>

        {/* Right — Details */}
        <div>
          <div style={{ fontSize: 12, color: "#00AAFF", fontWeight: 600, marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5 }}>{product.category}</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "white", marginBottom: 16, lineHeight: 1.2 }}>{product.name}</h1>

          <div style={{ fontSize: 36, fontWeight: 800, color: "white", marginBottom: 24 }}>
            ₹{product.price.toLocaleString("en-IN")}
          </div>

          {/* Specs */}
          {specs.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <h3 style={{ fontSize: 12, color: "#475569", fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 12 }}>Specifications</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {specs.map((s) => (
                  <div key={s.label} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "11px 16px", borderRadius: 12,
                    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
                  }}>
                    <span style={{ fontSize: 13, color: "#6B7A94", display: "flex", alignItems: "center", gap: 8 }}>
                      <span>{s.icon}</span>{s.label}
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "white" }}>{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Accessories */}
          {product.accessories && (
            <div style={{
              padding: "14px 16px", borderRadius: 12, marginBottom: 20,
              background: "rgba(0,102,255,0.06)", border: "1px solid rgba(0,102,255,0.2)",
            }}>
              <div style={{ fontSize: 11, color: "#475569", fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 6 }}>Accessories Included</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#00AAFF" }}>📦 {product.accessories}</div>
            </div>
          )}

          {/* CTA */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <a
              href={`https://wa.me/919003850743?text=Hi, I'm interested in buying the ${product.name} for ₹${product.price.toLocaleString("en-IN")}`}
              target="_blank" rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: 15, padding: "14px 24px", textAlign: "center", justifyContent: "center" }}
            >
              Buy Now on WhatsApp
            </a>
            <a
              href={`https://wa.me/919003850743?text=Hi, I need more details about the ${product.name}`}
              target="_blank" rel="noopener noreferrer"
              className="btn-outline"
              style={{ fontSize: 15, padding: "13px 24px", textAlign: "center", justifyContent: "center" }}
            >
              💬 Ask a Question
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .detail-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </div>
  );
}
