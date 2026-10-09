"use client";

import { useState, useMemo, useEffect, useCallback, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { fetchProducts, formatINR, type Product } from "@/lib/products";

function ProductCardSkeleton() {
  return (
    <div style={{ borderRadius: 14, overflow: "hidden", background: "rgba(10,22,40,0.7)", border: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="sk" style={{ width: "100%", aspectRatio: "4/3" }} />
      <div style={{ padding: "12px" }}>
        <div className="sk" style={{ width: "80%", height: 14, borderRadius: 6, marginBottom: 6 }} />
        <div className="sk" style={{ width: "60%", height: 12, borderRadius: 6, marginBottom: 10 }} />
        <div className="sk" style={{ width: "50%", height: 20, borderRadius: 6 }} />
      </div>
    </div>
  );
}

const CATEGORIES = [
  { key: "", label: "All Products" },
  { key: "laptop", label: "💻 Laptops" },
  { key: "mobile", label: "📱 Mobiles" },
];

const SORT_OPTIONS = [
  { key: "default", label: "Default" },
  { key: "price-asc", label: "Price: Low → High" },
  { key: "price-desc", label: "Price: High → Low" },
];

function ProductImage({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false);
  const gradient = product.category === "laptop"
    ? "linear-gradient(135deg, rgba(0,102,255,0.3) 0%, rgba(0,170,255,0.15) 100%)"
    : "linear-gradient(135deg, rgba(124,58,237,0.3) 0%, rgba(0,170,255,0.15) 100%)";
  const icon = product.category === "laptop" ? "💻" : "📱";

  if (imgError || !product.images[0]) {
    return (
      <div style={{
        width: "100%", aspectRatio: "4/3",
        background: gradient,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        fontSize: 40,
      }}>
        {icon}
      </div>
    );
  }

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", overflow: "hidden" }}>
      <Image
        src={product.images[0]}
        alt={product.name}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        style={{ objectFit: "cover" }}
        onError={() => setImgError(true)}
        loading="lazy"
      />
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <Link href={`/products/${product.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
      <article
        className="card-hover product-card"
        style={{
          borderRadius: 14,
          background: "rgba(10,22,40,0.7)",
          border: "1px solid rgba(255,255,255,0.07)",
          overflow: "hidden",
          cursor: "pointer",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Image with overlaid condition badge */}
        <div style={{ position: "relative" }}>
          <ProductImage product={product} />
          <span style={{
            position: "absolute", top: 8, left: 8,
            padding: "3px 8px", borderRadius: 100, fontSize: 10, fontWeight: 700,
            background: product.condition === "New" ? "rgba(34,197,94,0.85)" : "rgba(0,102,255,0.85)",
            color: "white", backdropFilter: "blur(4px)",
          }}>
            {product.condition}
          </span>
          {discount && (
            <span style={{
              position: "absolute", top: 8, right: 8,
              padding: "3px 8px", borderRadius: 100, fontSize: 10, fontWeight: 700,
              background: "rgba(34,197,94,0.85)", color: "white", backdropFilter: "blur(4px)",
            }}>
              -{discount}%
            </span>
          )}
        </div>

        <div className="product-card-body" style={{ padding: "14px 16px 18px", flex: 1, display: "flex", flexDirection: "column" }}>
          <p style={{ fontSize: 10, color: "#475569", marginBottom: 3, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase" }}>
            {product.brand}
          </p>
          <h3 className="product-card-name" style={{
            fontSize: 14, fontWeight: 700, color: "white", marginBottom: 4, lineHeight: 1.3,
            overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
          }}>
            {product.name}
          </h3>
          <p style={{
            fontSize: 11, color: "#6B7A94", marginBottom: 10, lineHeight: 1.4,
            overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis",
          }}>
            {product.shortSpecs}
          </p>

          <div style={{ marginTop: "auto" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 10, flexWrap: "wrap" }}>
              <span style={{ fontSize: 18, fontWeight: 800, color: "white", lineHeight: 1 }}>
                ₹{formatINR(product.price)}
              </span>
              {product.originalPrice && (
                <span style={{ fontSize: 12, color: "#475569", textDecoration: "line-through" }}>
                  ₹{formatINR(product.originalPrice)}
                </span>
              )}
            </div>

            {/* View Details: shown on tablet/desktop, hidden on mobile */}
            <div className="product-card-cta" style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "7px 14px", borderRadius: 8, fontSize: 12, fontWeight: 600,
              background: "rgba(0,102,255,0.12)", border: "1px solid rgba(0,102,255,0.25)",
              color: "#00AAFF", width: "100%", justifyContent: "center",
            }}>
              View Details →
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

// Isolated so useSearchParams doesn't force the whole product grid to client-only rendering.
function CategoryFromUrl({ onChange }: { onChange: (category: string) => void }) {
  const category = useSearchParams().get("category") ?? "";
  useEffect(() => { onChange(category); }, [category, onChange]);
  return null;
}

export default function ProductsClient({ initialProducts }: { initialProducts: Product[] | null }) {
  const router = useRouter();

  const [categoryParam, setCategoryParam] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [allProducts, setAllProducts] = useState<Product[]>(initialProducts ?? []);
  const [loading, setLoading] = useState(initialProducts === null);
  const [error, setError] = useState(false);
  const [slow, setSlow] = useState(false);
  const [offline, setOffline] = useState(false);

  const load = useCallback(async (attempt = 0) => {
    setLoading(true);
    setError(false);
    setSlow(false);
    const slowTimer = setTimeout(() => setSlow(true), 5000);
    try {
      const p = await fetchProducts();
      setAllProducts(p);
    } catch {
      if (attempt < 2) {
        await new Promise(r => setTimeout(r, 1000));
        clearTimeout(slowTimer);
        return load(attempt + 1);
      }
      setError(true);
    } finally {
      clearTimeout(slowTimer);
      setLoading(false);
      setSlow(false);
    }
  }, []);

  useEffect(() => {
    setOffline(!navigator.onLine);
    const goOnline = () => { setOffline(false); load(); };
    const goOffline = () => setOffline(true);
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);
    if (initialProducts === null) load();
    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, [load, initialProducts]);

  const filtered = useMemo(() => {
    let list = [...allProducts];
    if (categoryParam) list = list.filter((p) => p.category === categoryParam);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.shortSpecs.toLowerCase().includes(q)
      );
    }
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    return list;
  }, [allProducts, categoryParam, search, sort]);

  const setCategory = (key: string) => {
    const params = new URLSearchParams(window.location.search);
    if (key) params.set("category", key);
    else params.delete("category");
    router.push(`/products${params.size ? `?${params}` : ""}`, { scroll: false });
  };

  return (
    <>
      <Suspense fallback={null}>
        <CategoryFromUrl onChange={setCategoryParam} />
      </Suspense>
      <section style={{ paddingTop: 100, padding: "100px 16px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Toolbar */}
          <div className="products-toolbar" style={{ marginBottom: 24 }}>
            {/* Category chips: horizontal scroll on mobile */}
            <div style={{
              display: "flex", gap: 8,
              overflowX: "auto", WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
              flexWrap: "nowrap" as const, paddingBottom: 4,
              scrollbarWidth: "none" as const,
              msOverflowStyle: "none" as const,
            }} className="chip-row">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setCategory(cat.key)}
                  style={{
                    flexShrink: 0,
                    padding: "8px 18px", borderRadius: 100, fontSize: 13, fontWeight: 600,
                    border: "1px solid",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    background: categoryParam === cat.key ? "linear-gradient(135deg,#0066FF,#00AAFF)" : "rgba(10,22,40,0.6)",
                    borderColor: categoryParam === cat.key ? "transparent" : "rgba(255,255,255,0.1)",
                    color: categoryParam === cat.key ? "white" : "#8A9BB8",
                    boxShadow: categoryParam === cat.key ? "0 4px 16px rgba(0,102,255,0.35)" : "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search + sort row */}
            <div style={{ display: "flex", gap: 8, marginTop: 10, alignItems: "center" }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <input
                  type="text"
                  placeholder="Search products…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{
                    width: "100%", padding: "9px 14px", borderRadius: 10, fontSize: 14,
                    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                    color: "white", outline: "none", boxSizing: "border-box",
                  }}
                />
              </div>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                style={{
                  flexShrink: 0,
                  padding: "9px 10px", borderRadius: 10, fontSize: 13,
                  background: "rgba(10,22,40,0.9)", border: "1px solid rgba(255,255,255,0.1)",
                  color: "#C4D0E0", outline: "none", cursor: "pointer",
                }}
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.key} value={o.key}>
                    {o.key === "default" ? "Sort by" : o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Count */}
          {!loading && !error && (
            <p style={{ fontSize: 13, color: "#475569", marginBottom: 16 }}>
              {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
            </p>
          )}

          {/* Skeleton */}
          {loading && (
            <>
              <div className="products-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: 16 }}>
                {Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)}
              </div>
              {slow && (
                <p style={{ textAlign: "center", marginTop: 24, color: "#475569", fontSize: 13 }}>
                  Taking longer than usual… please check your internet connection.
                </p>
              )}
            </>
          )}

          {/* Error */}
          {error && !loading && (
            <div style={{ textAlign: "center", padding: "80px 24px", background: "rgba(10,22,40,0.4)", borderRadius: 20, border: "1px solid rgba(239,68,68,0.15)" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>⚠️</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "white", marginBottom: 8 }}>Couldn&apos;t load products</h3>
              <p style={{ color: "#6B7A94", marginBottom: 20 }}>Please check your connection and try again.</p>
              <button onClick={() => load()} className="btn-primary" style={{ fontSize: 14 }}>Try Again</button>
            </div>
          )}

          {/* Grid */}
          {!loading && !error && filtered.length > 0 && (
            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: 20 }}
              className="products-grid"
            >
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}

          {/* Empty */}
          {!loading && !error && filtered.length === 0 && (
            <div style={{
              textAlign: "center", padding: "80px 24px",
              background: "rgba(10,22,40,0.4)", borderRadius: 20,
              border: "1px solid rgba(255,255,255,0.06)",
            }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>🔍</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "white", marginBottom: 8 }}>No products found</h3>
              <p style={{ color: "#6B7A94" }}>Try a different search term or category.</p>
              <button
                onClick={() => { setSearch(""); setCategory(""); }}
                className="btn-outline"
                style={{ marginTop: 20 }}
              >
                Clear filters
              </button>
            </div>
          )}

          {/* WhatsApp CTA */}
          <div style={{
            marginTop: 64, padding: "40px 24px", borderRadius: 20, textAlign: "center",
            background: "linear-gradient(135deg, rgba(0,102,255,0.1) 0%, rgba(0,170,255,0.06) 100%)",
            border: "1px solid rgba(0,102,255,0.2)",
          }}>
            <h3 style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", fontWeight: 700, marginBottom: 10 }}>
              Can&apos;t find what you&apos;re looking for?
            </h3>
            <p style={{ color: "#6B7A94", marginBottom: 24, fontSize: "clamp(0.85rem, 2vw, 1rem)" }}>
              Tell us your budget and requirements — we&apos;ll source the best option for you.
            </p>
            <a
              href="https://wa.me/919003850743?text=Hi%20Sollabs%20Tech%2C%20I%27m%20looking%20for%20a%20product%20and%20need%20your%20help!"
              target="_blank" rel="noopener noreferrer"
              className="btn-primary"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {offline && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999,
          background: "rgba(239,68,68,0.92)", backdropFilter: "blur(8px)",
          color: "white", textAlign: "center", padding: "10px 16px",
          fontSize: 13, fontWeight: 600,
        }}>
          📡 You&apos;re offline — reconnect to load products
        </div>
      )}

      <style>{`
        input::placeholder { color: #3D4F6B; }
        .chip-row::-webkit-scrollbar { display: none; }

        /* Desktop grid */
        .products-grid { grid-template-columns: repeat(4, minmax(0,1fr)) !important; gap: 20px !important; }

        /* Compact card body on mobile */
        @media (max-width: 640px) {
          .product-card-body { padding: 10px 10px 12px !important; }
          .product-card-name { font-size: 12px !important; }
          .product-card-cta  { display: none !important; }
        }

        /* Tablet: 3 columns */
        @media (max-width: 1100px) { .products-grid { grid-template-columns: repeat(3, minmax(0,1fr)) !important; } }
        /* Tablet narrow: 2 columns */
        @media (max-width: 768px)  { .products-grid { grid-template-columns: repeat(2, minmax(0,1fr)) !important; gap: 12px !important; } }
        /* Mobile: 2 columns */
        @media (max-width: 640px)  { .products-grid { grid-template-columns: repeat(2, minmax(0,1fr)) !important; gap: 12px !important; } }

        .sk {
          background: linear-gradient(90deg, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.09) 50%, rgba(255,255,255,0.04) 75%);
          background-size: 200% 100%;
          animation: shimmer 1.6s infinite;
        }
        @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
      `}</style>
    </>
  );
}
