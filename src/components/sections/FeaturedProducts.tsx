import Link from "next/link";
import Image from "next/image";
import { fetchFeaturedProducts, formatINR, type Product } from "@/lib/products";

function CardImage({ product }: { product: Product }) {
  const gradient = product.category === "laptop"
    ? "linear-gradient(135deg, rgba(0,102,255,0.25) 0%, rgba(0,170,255,0.12) 100%)"
    : "linear-gradient(135deg, rgba(124,58,237,0.25) 0%, rgba(0,170,255,0.12) 100%)";

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", background: gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 56 }}>
      {product.category === "laptop" ? "💻" : "📱"}
    </div>
  );
}

export default async function FeaturedProducts() {
  const featured = await fetchFeaturedProducts(4);
  if (featured.length === 0) return null;

  return (
    <section style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="section-tag" style={{ display: "inline-flex", marginBottom: 16 }}>🛍️ Featured Products</span>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, marginBottom: 14 }}>
            Laptops &amp; Mobiles <span className="gradient-text">For Sale</span>
          </h2>
          <p style={{ color: "#6B7A94", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
            Quality-checked with warranty — new and refurbished devices at honest prices.
          </p>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginBottom: 40 }}
          className="featured-products-grid"
        >
          {featured.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`} style={{ textDecoration: "none", display: "block" }}>
              <article
                className="card-hover"
                style={{
                  borderRadius: 18, overflow: "hidden",
                  background: "rgba(10,22,40,0.7)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  height: "100%", display: "flex", flexDirection: "column",
                  cursor: "pointer",
                }}
              >
                <CardImage product={product} />

                <div style={{ padding: "18px 18px 22px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
                    <span style={{
                      padding: "2px 8px", borderRadius: 100, fontSize: 10, fontWeight: 700,
                      background: product.condition === "New" ? "rgba(34,197,94,0.12)" : "rgba(0,170,255,0.12)",
                      border: `1px solid ${product.condition === "New" ? "rgba(34,197,94,0.3)" : "rgba(0,170,255,0.3)"}`,
                      color: product.condition === "New" ? "#22C55E" : "#00AAFF",
                    }}>
                      {product.condition}
                    </span>
                  </div>

                  <p style={{ fontSize: 10, color: "#475569", fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", marginBottom: 4 }}>
                    {product.brand}
                  </p>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "white", marginBottom: 6, lineHeight: 1.3 }}>
                    {product.name}
                  </h3>
                  <p style={{ fontSize: 12, color: "#6B7A94", marginBottom: 14, lineHeight: 1.5 }}>
                    {product.shortSpecs}
                  </p>

                  <div style={{ marginTop: "auto" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 12 }}>
                      <span style={{ fontSize: 20, fontWeight: 800, color: "white" }}>
                        ₹{formatINR(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span style={{ fontSize: 12, color: "#475569", textDecoration: "line-through" }}>
                          ₹{formatINR(product.originalPrice)}
                        </span>
                      )}
                    </div>
                    <div style={{
                      fontSize: 13, fontWeight: 600, color: "#00AAFF", display: "flex", alignItems: "center", gap: 4
                    }}>
                      View details →
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link
            href="/products"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "12px 28px", borderRadius: 12,
              border: "1px solid rgba(0,170,255,0.3)",
              color: "#00AAFF", textDecoration: "none", fontSize: 14,
              fontWeight: 600, background: "rgba(0,170,255,0.06)",
              transition: "all 0.2s",
            }}
          >
            View all products →
          </Link>
        </div>
      </div>

      <style>{`
        .featured-products-grid { grid-template-columns: repeat(4, 1fr) !important; }
        @media (max-width: 1100px) { .featured-products-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 500px)  { .featured-products-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
