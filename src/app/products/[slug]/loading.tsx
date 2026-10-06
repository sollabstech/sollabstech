export default function ProductDetailLoading() {
  return (
    <>
      <div style={{ paddingTop: 92, paddingLeft: 24, paddingRight: 24 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="skeleton" style={{ width: 260, height: 14, borderRadius: 6 }} />
        </div>
      </div>
      <section style={{ padding: "28px 24px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="product-detail-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 48, alignItems: "start" }}>
            {/* Left: image skeleton */}
            <div>
              <div className="skeleton" style={{ width: "100%", aspectRatio: "4/3", borderRadius: 20 }} />
              <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                {[1,2,3,4].map(i => (
                  <div key={i} className="skeleton" style={{ width: 64, height: 48, borderRadius: 8, flexShrink: 0 }} />
                ))}
              </div>
            </div>
            {/* Right: info skeleton */}
            <div>
              <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                <div className="skeleton" style={{ width: 90, height: 26, borderRadius: 100 }} />
                <div className="skeleton" style={{ width: 80, height: 26, borderRadius: 100 }} />
              </div>
              <div className="skeleton" style={{ width: 60, height: 13, borderRadius: 6, marginBottom: 10 }} />
              <div className="skeleton" style={{ width: "75%", height: 36, borderRadius: 8, marginBottom: 8 }} />
              <div className="skeleton" style={{ width: "55%", height: 16, borderRadius: 6, marginBottom: 24 }} />
              <div className="skeleton" style={{ width: "40%", height: 44, borderRadius: 8, marginBottom: 8 }} />
              <div className="skeleton" style={{ width: 180, height: 16, borderRadius: 6, marginBottom: 28 }} />
              <div className="skeleton" style={{ width: "100%", height: 48, borderRadius: 10, marginBottom: 16 }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div className="skeleton" style={{ height: 52, borderRadius: 12 }} />
                <div className="skeleton" style={{ height: 52, borderRadius: 12 }} />
                <div className="skeleton" style={{ height: 52, borderRadius: 12 }} />
              </div>
            </div>
          </div>
          <div className="product-specs-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 32, marginTop: 48 }}>
            <div className="skeleton" style={{ height: 240, borderRadius: 18 }} />
            <div className="skeleton" style={{ height: 240, borderRadius: 18 }} />
          </div>
        </div>
      </section>
      <style>{`
        .skeleton {
          background: linear-gradient(90deg, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.09) 50%, rgba(255,255,255,0.04) 75%);
          background-size: 200% 100%;
          animation: shimmer 1.6s infinite;
        }
        @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
        .product-detail-grid { grid-template-columns: minmax(0,1fr) minmax(0,1fr) !important; }
        .product-specs-grid  { grid-template-columns: minmax(0,1fr) minmax(0,1fr) !important; }
        @media (max-width: 900px) {
          .product-detail-grid { grid-template-columns: 1fr !important; }
          .product-specs-grid  { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
