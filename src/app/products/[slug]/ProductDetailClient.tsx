"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { formatINR, type Product } from "@/lib/products";
import { CONTACT, whatsappLink } from "@/lib/config";

/* ─── Image Carousel ──────────────────────────────────────────── */

function ImageCarousel({ images, name }: { images: string[]; name: string }) {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const paused = useRef(false);
  const thumbRef = useRef<HTMLDivElement>(null);

  const count = images.length;

  const go = useCallback((idx: number) => {
    const next = ((idx % count) + count) % count;
    setCurrent(next);
    // Auto-scroll active thumbnail into view
    if (thumbRef.current) {
      const btn = thumbRef.current.children[next] as HTMLElement;
      if (btn) btn.scrollIntoView({ inline: "center", behavior: "smooth", block: "nearest" });
    }
  }, [count]);

  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      if (!paused.current) setCurrent(c => {
        const next = (c + 1) % count;
        if (thumbRef.current) {
          const btn = thumbRef.current.children[next] as HTMLElement;
          if (btn) btn.scrollIntoView({ inline: "center", behavior: "smooth", block: "nearest" });
        }
        return next;
      });
    }, 3500);
  }, [count]);

  useEffect(() => {
    if (count > 1) startAuto();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [count, startAuto]);

  const pause = () => { paused.current = true; };
  const resume = () => { paused.current = false; };

  const onTouchStart = (e: React.TouchEvent) => {
    pause();
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) go(current + (delta < 0 ? 1 : -1));
    setTimeout(resume, 2000);
  };

  const openLightbox = (idx: number) => {
    pause();
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  if (count === 0) return (
    <div style={{ width: "100%", aspectRatio: "4/3", borderRadius: 20, background: "linear-gradient(135deg,rgba(0,102,255,0.2),rgba(0,170,255,0.1))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 80 }}>
      💻
    </div>
  );

  return (
    <>
      {/* Main image */}
      <div
        style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: 20, overflow: "hidden", cursor: "zoom-in", border: "1px solid rgba(255,255,255,0.07)", userSelect: "none", background: "#08111f" }}
        onMouseEnter={pause}
        onMouseLeave={resume}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onClick={() => openLightbox(current)}
      >
        <Image
          src={images[current]}
          alt={`${name} – image ${current + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "contain", transition: "opacity 0.3s" }}
          priority={current === 0}
          loading={current === 0 ? "eager" : "lazy"}
        />

        {/* Arrow buttons — hidden on mobile via CSS */}
        {count > 1 && (
          <>
            <button
              className="carousel-arrow"
              onClick={(e) => { e.stopPropagation(); pause(); go(current - 1); setTimeout(resume, 2000); }}
              style={arrowStyle("left")}
              aria-label="Previous image"
            >‹</button>
            <button
              className="carousel-arrow"
              onClick={(e) => { e.stopPropagation(); pause(); go(current + 1); setTimeout(resume, 2000); }}
              style={arrowStyle("right")}
              aria-label="Next image"
            >›</button>
          </>
        )}

        {/* Counter badge */}
        {count > 1 && (
          <div style={{
            position: "absolute", bottom: 10, right: 12,
            background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)",
            color: "white", fontSize: 11, fontWeight: 700,
            padding: "3px 9px", borderRadius: 100, pointerEvents: "none",
          }}>
            {current + 1} / {count}
          </div>
        )}

        {/* Zoom hint */}
        <div style={{ position: "absolute", top: 10, right: 12, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)", borderRadius: 8, padding: "3px 8px", fontSize: 11, color: "rgba(255,255,255,0.7)", pointerEvents: "none" }}>
          🔍 Tap
        </div>
      </div>

      {/* Dot indicators */}
      {count > 1 && (
        <div style={{ display: "flex", justifyContent: "center", gap: 5, marginTop: 10 }}>
          {images.map((_, i) => (
            <button
              key={i}
              className="dot-btn"
              onClick={() => { pause(); go(i); setTimeout(resume, 2000); }}
              style={{
                width: i === current ? 18 : 6,
                height: 6,
                borderRadius: 100,
                border: "none",
                cursor: "pointer",
                background: i === current ? "#0066FF" : "rgba(255,255,255,0.2)",
                transition: "all 0.3s",
                padding: 0,
                flexShrink: 0,
              }}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Thumbnail strip */}
      {count > 1 && (
        <div
          ref={thumbRef}
          style={{ display: "flex", gap: 8, marginTop: 10, overflowX: "auto", paddingBottom: 4, width: "100%" }}
          className="thumb-strip"
        >
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => { pause(); go(i); setTimeout(resume, 2000); }}
              style={{
                flexShrink: 0, width: 60, height: 45, borderRadius: 8,
                overflow: "hidden", cursor: "pointer", padding: 0, border: "none",
                outline: i === current ? "2px solid #0066FF" : "2px solid transparent",
                outlineOffset: 2, transition: "outline 0.2s",
                position: "relative", background: "#08111f",
              }}
            >
              <Image src={src} alt={`Thumbnail ${i + 1}`} fill sizes="60px" style={{ objectFit: "cover" }} loading="lazy" />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => { setLightboxOpen(false); setTimeout(resume, 500); }}
        slides={images.map(src => ({ src }))}
        index={lightboxIndex}
        on={{ view: ({ index }) => setLightboxIndex(index) }}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 4, doubleTapDelay: 300, scrollToZoom: true }}
        styles={{ container: { backgroundColor: "rgba(3,7,18,0.97)" } }}
      />
    </>
  );
}

function arrowStyle(side: "left" | "right"): React.CSSProperties {
  return {
    position: "absolute",
    top: "50%",
    [side]: 12,
    transform: "translateY(-50%)",
    zIndex: 10,
    background: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(6px)",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: 38,
    height: 38,
    fontSize: 22,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.2s",
    paddingBottom: 2,
  };
}

/* ─── Main component ──────────────────────────────────────────── */

export default function ProductDetailClient({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const productUrl = `${CONTACT.siteUrl}/products/${product.slug}`;
  const waMessage = `Hi Sollabs Tech, I'm interested in this product 👇\n\n*${product.name}*\nPrice: ₹${formatINR(product.price)}\n${productUrl}\n\nPlease share availability and details.`;

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <>
      {/* Breadcrumb */}
      <div style={{ paddingTop: 92, paddingLeft: 16, paddingRight: 16 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <nav style={{ display: "flex", gap: 6, alignItems: "center", fontSize: 13, color: "#475569", flexWrap: "wrap" }}>
            <Link href="/" style={{ color: "#475569", textDecoration: "none" }}>Home</Link>
            <span>›</span>
            <Link href="/products" style={{ color: "#475569", textDecoration: "none" }}>Products</Link>
            <span>›</span>
            <Link
              href={`/products?category=${product.category}`}
              style={{ color: "#475569", textDecoration: "none", textTransform: "capitalize" }}
            >
              {product.category === "laptop" ? "Laptops" : "Mobiles"}
            </Link>
            <span>›</span>
            <span style={{ color: "#8A9BB8", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "180px" }}>{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main detail section */}
      <section className="product-page-section" style={{ padding: "20px 16px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Two-column grid — minmax(0,1fr) prevents thumb-strip from inflating the column */}
          <div
            style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 48, alignItems: "start" }}
            className="product-detail-grid"
          >
            {/* Left: Carousel */}
            <div style={{ minWidth: 0 }}>
              <ImageCarousel images={product.images} name={product.name} />
            </div>

            {/* Right: Info */}
            <div style={{ minWidth: 0 }}>
              {/* Badges */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                <span style={{
                  padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600,
                  background: product.condition === "New" ? "rgba(34,197,94,0.12)" : "rgba(0,170,255,0.12)",
                  border: `1px solid ${product.condition === "New" ? "rgba(34,197,94,0.3)" : "rgba(0,170,255,0.3)"}`,
                  color: product.condition === "New" ? "#22C55E" : "#00AAFF",
                }}>
                  {product.condition}
                </span>
                <span style={{
                  padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600,
                  background: product.inStock ? "rgba(34,197,94,0.08)" : "rgba(239,68,68,0.08)",
                  border: `1px solid ${product.inStock ? "rgba(34,197,94,0.2)" : "rgba(239,68,68,0.2)"}`,
                  color: product.inStock ? "#22C55E" : "#EF4444",
                }}>
                  {product.inStock ? "✓ In Stock" : "Out of Stock"}
                </span>
                <span style={{
                  padding: "4px 12px", borderRadius: 100, fontSize: 12, fontWeight: 600,
                  background: "rgba(0,102,255,0.08)", border: "1px solid rgba(0,102,255,0.2)", color: "#8A9BB8",
                }}>
                  {product.category === "laptop" ? "💻 Laptop" : "📱 Mobile"}
                </span>
              </div>

              <p style={{ fontSize: 12, color: "#475569", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>
                {product.brand}
              </p>
              <h1 style={{ fontSize: "clamp(1.3rem, 4vw, 2.2rem)", fontWeight: 800, color: "white", marginBottom: 12, lineHeight: 1.2 }}>
                {product.name}
              </h1>
              <p style={{ fontSize: 14, color: "#6B7A94", marginBottom: 20, lineHeight: 1.6 }}>
                {product.shortSpecs}
              </p>

              {/* Price */}
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
                <span style={{ fontSize: "clamp(1.7rem, 6vw, 2.3rem)", fontWeight: 900, color: "white", letterSpacing: -0.5, lineHeight: 1 }}>
                  ₹{formatINR(product.price)}
                </span>
                {product.originalPrice && (
                  <span style={{ fontSize: "clamp(0.9rem, 3vw, 1.1rem)", color: "#475569", textDecoration: "line-through" }}>
                    ₹{formatINR(product.originalPrice)}
                  </span>
                )}
              </div>
              {discount && (
                <p style={{ fontSize: 13, color: "#22C55E", fontWeight: 700, marginBottom: 20 }}>
                  You save ₹{formatINR(product.originalPrice! - product.price)} ({discount}% off)
                </p>
              )}

              {/* Warranty */}
              <div style={{
                display: "flex", alignItems: "center", gap: 10, padding: "10px 14px",
                background: "rgba(0,102,255,0.07)", border: "1px solid rgba(0,102,255,0.15)",
                borderRadius: 10, marginBottom: 24,
              }}>
                <span style={{ fontSize: 18 }}>🛡️</span>
                <span style={{ fontSize: 13, color: "#C4D0E0" }}>{product.warranty || "Sollabs Tech warranty"}</span>
              </div>

              {/* CTAs — hidden on mobile by .desktop-cta class (sticky bar used instead) */}
              <div className="desktop-cta" style={{ flexDirection: "column", gap: 10 }}>
                <a
                  href={whatsappLink(waMessage)}
                  target="_blank" rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ justifyContent: "center", fontSize: 15, padding: "14px" }}
                >
                  💬 Enquire on WhatsApp
                </a>
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="btn-outline"
                  style={{ justifyContent: "center", fontSize: 15, padding: "14px" }}
                >
                  📞 Call Us — {CONTACT.phone}
                </a>
                <Link
                  href="/warranty"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    padding: "13px", borderRadius: 12, fontSize: 14, fontWeight: 600,
                    background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.2)",
                    color: "#F59E0B", textDecoration: "none", transition: "all 0.2s",
                  }}
                >
                  🛡️ See Warranty Info
                </Link>
              </div>

              <p className="desktop-cta" style={{ fontSize: 12, color: "#3D4F6B", marginTop: 14, textAlign: "center", display: "block" }}>
                Fastest response via WhatsApp · We reply within 2 hours
              </p>
            </div>
          </div>

          {/* Description + Specs */}
          <div
            style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 32, marginTop: 48 }}
            className="product-specs-grid"
          >
            {/* Description */}
            <div className="glass" style={{ borderRadius: 18, padding: "24px" }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "white", marginBottom: 16 }}>About this product</h2>
              <p style={{ fontSize: 15, color: "#8A9BB8", lineHeight: 1.8 }}>{product.description}</p>
            </div>

            {/* Specs table */}
            <div className="glass" style={{ borderRadius: 18, padding: "24px" }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "white", marginBottom: 16 }}>Full Specifications</h2>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  {Object.entries(product.specs).map(([key, val], i) => (
                    <tr key={key} style={{ borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.05)" }}>
                      <td style={{ padding: "9px 0", fontSize: 13, color: "#475569", fontWeight: 600, width: "38%", verticalAlign: "top", paddingRight: 12 }}>
                        {key}
                      </td>
                      <td style={{ padding: "9px 0", fontSize: 13, color: "#C4D0E0", lineHeight: 1.5, wordBreak: "break-word" }}>
                        {val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <div style={{ marginTop: 64 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
                <h2 style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", fontWeight: 700, color: "white" }}>
                  Related {product.category === "laptop" ? "Laptops" : "Phones"}
                </h2>
                <Link href={`/products?category=${product.category}`} style={{ fontSize: 13, color: "#00AAFF", textDecoration: "none", fontWeight: 600 }}>
                  View all →
                </Link>
              </div>
              {/* Horizontal scroll on mobile, grid on desktop */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 20 }}
                className="related-grid">
                {related.map((p) => (
                  <Link key={p.id} href={`/products/${p.slug}`} style={{ textDecoration: "none" }}>
                    <article className="card-hover" style={{
                      borderRadius: 16, background: "rgba(10,22,40,0.7)",
                      border: "1px solid rgba(255,255,255,0.07)", overflow: "hidden",
                    }}>
                      <RelatedImage product={p} />
                      <div style={{ padding: "14px" }}>
                        <p style={{ fontSize: 10, color: "#475569", fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", marginBottom: 4 }}>{p.brand}</p>
                        <h3 style={{ fontSize: 13, fontWeight: 700, color: "white", marginBottom: 4, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>{p.name}</h3>
                        <p style={{ fontSize: 11, color: "#6B7A94", marginBottom: 8, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{p.shortSpecs}</p>
                        <span style={{ fontSize: 15, fontWeight: 800, color: "white" }}>₹{formatINR(p.price)}</span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Sticky CTA bar — mobile only */}
      <div className="sticky-cta" style={{
        position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 200,
        background: "rgba(5,10,24,0.96)", backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        alignItems: "center", gap: 10,
        padding: "10px 16px",
        paddingBottom: "calc(10px + env(safe-area-inset-bottom))",
      }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 20, fontWeight: 900, color: "white", lineHeight: 1.1 }}>
            ₹{formatINR(product.price)}
          </div>
          {discount && (
            <div style={{ fontSize: 11, color: "#22C55E", fontWeight: 700 }}>
              {discount}% off
            </div>
          )}
        </div>
        <a
          href={whatsappLink(waMessage)}
          target="_blank" rel="noopener noreferrer"
          style={{
            padding: "10px 16px", borderRadius: 10, fontSize: 13, fontWeight: 700,
            background: "linear-gradient(135deg,#0066FF,#00AAFF)", color: "white",
            textDecoration: "none", display: "flex", alignItems: "center", gap: 5,
            whiteSpace: "nowrap", minHeight: 44,
          }}>
          💬 WhatsApp
        </a>
        <a
          href={`tel:${CONTACT.phoneRaw}`}
          style={{
            padding: "10px 14px", borderRadius: 10, fontSize: 13, fontWeight: 700,
            border: "1px solid rgba(0,102,255,0.4)", color: "#00AAFF",
            textDecoration: "none", display: "flex", alignItems: "center", gap: 5,
            whiteSpace: "nowrap", minHeight: 44,
          }}>
          📞 Call
        </a>
      </div>

      <style>{`
        /* Dot buttons: override globals.css min-height:44px */
        .dot-btn {
          min-height: unset !important;
          min-width: unset !important;
          background: none;
          display: inline-block;
        }

        /* Arrow buttons: hide on mobile (swipe is enough) */
        .carousel-arrow { display: flex; }

        /* Sticky bar: hidden on desktop */
        .sticky-cta { display: none !important; }

        /* Desktop CTAs always visible on desktop */
        div.desktop-cta { display: flex !important; }
        p.desktop-cta   { display: block !important; }

        .product-detail-grid  { grid-template-columns: minmax(0,1fr) minmax(0,1fr) !important; }
        .product-specs-grid   { grid-template-columns: minmax(0,1fr) minmax(0,1fr) !important; }
        .related-grid         { grid-template-columns: repeat(3, minmax(0,1fr)) !important; }

        .thumb-strip { scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.1) transparent; }
        .thumb-strip::-webkit-scrollbar { height: 4px; }
        .thumb-strip::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }

        /* ── Tablet (≤ 900px) ── */
        @media (max-width: 900px) {
          .product-detail-grid { grid-template-columns: minmax(0,1fr) !important; }
          .product-specs-grid  { grid-template-columns: minmax(0,1fr) !important; }
          .related-grid        { grid-template-columns: repeat(2, minmax(0,1fr)) !important; }
        }

        /* ── Mobile (≤ 768px) ── */
        @media (max-width: 768px) {
          /* Hide desktop arrows; sticky bar replaces CTAs */
          .carousel-arrow  { display: none !important; }
          .sticky-cta      { display: flex !important; }
          div.desktop-cta  { display: none !important; }
          p.desktop-cta    { display: none !important; }

          /* Extra bottom padding so sticky bar doesn't cover content */
          .product-page-section {
            padding-bottom: calc(80px + env(safe-area-inset-bottom)) !important;
          }
        }

        /* ── Small mobile (≤ 500px) ── */
        @media (max-width: 500px) {
          .related-grid {
            grid-template-columns: unset !important;
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory;
            gap: 12px !important;
            padding-bottom: 4px;
            scrollbar-width: none;
          }
          .related-grid::-webkit-scrollbar { display: none; }
          .related-grid > * {
            flex-shrink: 0;
            width: 180px;
            scroll-snap-align: start;
          }
        }
      `}</style>
    </>
  );
}

function RelatedImage({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false);
  const gradient = product.category === "laptop"
    ? "linear-gradient(135deg, rgba(0,102,255,0.25), rgba(0,170,255,0.12))"
    : "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(0,170,255,0.12))";

  if (imgError || !product.images[0]) {
    return (
      <div style={{ width: "100%", aspectRatio: "4/3", background: gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40 }}>
        {product.category === "laptop" ? "💻" : "📱"}
      </div>
    );
  }
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "4/3" }}>
      <Image src={product.images[0]} alt={product.name} fill sizes="(max-width: 500px) 180px, 33vw" style={{ objectFit: "cover" }} onError={() => setImgError(true)} loading="lazy" />
    </div>
  );
}
