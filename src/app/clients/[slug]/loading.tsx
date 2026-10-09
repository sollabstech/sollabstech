const block = (h: number, w: number | string = "100%", r = 14): React.CSSProperties => ({
  height: h, width: w, borderRadius: r,
  background: "linear-gradient(100deg, rgba(14,26,48,0.8) 30%, rgba(30,48,80,0.8) 50%, rgba(14,26,48,0.8) 70%)",
  backgroundSize: "200% 100%",
  animation: "shimmer 1.6s linear infinite",
});

export default function Loading() {
  return (
    <div style={{ padding: "92px 24px 96px" }} aria-busy="true" aria-label="Loading project">
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={block(14, 180, 8)} />
        <div style={{ ...block(220, "100%", 24), display: "flex", alignItems: "center", gap: 20, padding: 28 }} />
        <div className="detail-skeleton-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={block(320, "100%", 20)} />
            <div style={block(180, "100%", 20)} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={block(240, "100%", 20)} />
            <div style={block(160, "100%", 20)} />
          </div>
        </div>
      </div>
      <style>{`
        .detail-skeleton-grid { display: grid; grid-template-columns: 1fr 380px; gap: 28px; }
        @media (max-width: 1100px) { .detail-skeleton-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
