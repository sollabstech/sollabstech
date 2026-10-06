export default function ProductsLoading() {
  return (
    <section style={{ paddingTop: 100, padding: "100px 24px 80px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Toolbar skeleton */}
        <div style={{ display: "flex", gap: 10, marginBottom: 32, flexWrap: "wrap" }}>
          {[80, 90, 80].map((w, i) => (
            <div key={i} className="skeleton" style={{ width: w, height: 36, borderRadius: 100 }} />
          ))}
          <div className="skeleton" style={{ flex: 1, minWidth: 180, maxWidth: 280, height: 36, borderRadius: 10 }} />
          <div className="skeleton" style={{ width: 120, height: 36, borderRadius: 10 }} />
        </div>
        <div className="skeleton" style={{ width: 120, height: 16, borderRadius: 8, marginBottom: 24 }} />
        {/* Product card skeletons */}
        <div className="products-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} style={{ borderRadius: 18, overflow: "hidden", background: "rgba(10,22,40,0.7)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="skeleton" style={{ width: "100%", aspectRatio: "4/3" }} />
              <div style={{ padding: "20px 20px 24px" }}>
                <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
                  <div className="skeleton" style={{ width: 70, height: 22, borderRadius: 100 }} />
                  <div className="skeleton" style={{ width: 70, height: 22, borderRadius: 100 }} />
                </div>
                <div className="skeleton" style={{ width: "40%", height: 12, borderRadius: 6, marginBottom: 8 }} />
                <div className="skeleton" style={{ width: "80%", height: 18, borderRadius: 6, marginBottom: 6 }} />
                <div className="skeleton" style={{ width: "60%", height: 14, borderRadius: 6, marginBottom: 20 }} />
                <div className="skeleton" style={{ width: "45%", height: 26, borderRadius: 6, marginBottom: 16 }} />
                <div className="skeleton" style={{ width: "100%", height: 36, borderRadius: 8 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .skeleton {
          background: linear-gradient(90deg, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.09) 50%, rgba(255,255,255,0.04) 75%);
          background-size: 200% 100%;
          animation: shimmer 1.6s infinite;
        }
        @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
        .products-grid { grid-template-columns: repeat(4,1fr) !important; }
        @media (max-width: 1100px) { .products-grid { grid-template-columns: repeat(3,1fr) !important; } }
        @media (max-width: 800px)  { .products-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 500px)  { .products-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
