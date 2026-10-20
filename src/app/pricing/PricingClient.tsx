"use client";

import { useRef, useState } from "react";
import { CATEGORIES, WHATSAPP, formatINR, type Cell } from "./packages";

const BLUE = "linear-gradient(135deg,#0066FF,#00AAFF)";

function Value({ v }: { v: Cell }) {
  if (v === true) return <span aria-label="Included" style={{ color: "#22C55E", fontSize: 17, fontWeight: 800 }}>✓</span>;
  if (v === false) return <span aria-label="Not included" style={{ color: "#334155", fontSize: 15, fontWeight: 700 }}>✕</span>;
  return <span style={{ color: "#C4D0E0", fontSize: 13.5, fontWeight: 600 }}>{v}</span>;
}

export default function PricingClient() {
  const [catId, setCatId] = useState(CATEGORIES[0].id);
  const [tab, setTab] = useState(1);
  const [selected, setSelected] = useState<{ cat: string; tier: number } | null>(null);
  const packagesRef = useRef<HTMLDivElement>(null);

  const cat = CATEGORIES.find((c) => c.id === catId) ?? CATEGORIES[0];
  const picked = selected ? CATEGORIES.find((c) => c.id === selected.cat) : undefined;
  const pickedTier = picked && selected ? picked.tiers[selected.tier] : undefined;
  const isPicked = (i: number) => selected?.cat === cat.id && selected.tier === i;

  function chooseCategory(id: string, scroll: boolean) {
    setCatId(id);
    setTab(1);
    if (scroll) requestAnimationFrame(() => packagesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  function choose(i: number) {
    setSelected(isPicked(i) ? null : { cat: cat.id, tier: i });
  }

  const waText = picked && pickedTier
    ? `Hi Sollabs Tech, I'm interested in the ${picked.name} ${pickedTier.name} package (${pickedTier.title}, ${formatINR(pickedTier.price)}). Please share the details.`
    : "";

  const selectBtn = (i: number, full = true): React.CSSProperties => ({
    width: full ? "100%" : undefined, padding: "12px 18px", borderRadius: 12, fontSize: 14.5, fontWeight: 700, cursor: "pointer",
    color: "white", border: isPicked(i) ? "1px solid #22C55E" : "1px solid transparent",
    background: isPicked(i) ? "rgba(34,197,94,0.15)" : cat.tiers[i].popular ? BLUE : "rgba(0,102,255,0.18)",
  });

  return (
    <>
      <section ref={packagesRef} style={{ padding: "100px 16px 0", scrollMarginTop: 70 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h1 className="sr-only">Website, Mobile App &amp; Software Development Pricing</h1>
          <div className="pr-menu" role="tablist" aria-label="Service type">
            {CATEGORIES.map((c) => {
              const active = c.id === cat.id;
              return (
                <button key={c.id} role="tab" aria-selected={active} onClick={() => chooseCategory(c.id, false)} style={{
                  flexShrink: 0, padding: "8px 18px", borderRadius: 100, fontSize: 13, fontWeight: 600, cursor: "pointer",
                  border: "1px solid", whiteSpace: "nowrap", transition: "all 0.2s",
                  background: active ? BLUE : "rgba(10,22,40,0.6)",
                  borderColor: active ? "transparent" : "rgba(255,255,255,0.1)",
                  color: active ? "white" : "#8A9BB8",
                  boxShadow: active ? "0 4px 16px rgba(0,102,255,0.35)" : "none",
                }}>
                  <span aria-hidden style={{ marginRight: 6 }}>{c.icon}</span>{c.short}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Step 2: packages */}
      <section style={{ padding: "24px 16px 100px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 className="pr-title" style={{ fontWeight: 800, color: "white", textAlign: "center", margin: "0 0 6px" }}>
            {cat.name} packages
          </h2>
          <p style={{ textAlign: "center", color: "#6B7A94", fontSize: 14.5, margin: "0 0 26px" }}>Tap <strong style={{ color: "#C4D0E0" }}>Select</strong> on the package you like.</p>

          {/* Desktop: comparison table */}
          <div className="pr-table" role="table" aria-label={`${cat.name} package comparison`}>
            <div className="pr-row pr-head" role="row">
              <div role="columnheader" className="pr-label" style={{ alignSelf: "end", paddingBottom: 18, color: "#64748B", fontSize: 13 }}>Package</div>
              {cat.tiers.map((t, i) => (
                <div key={t.name} role="columnheader" className={`pr-col${t.popular ? " pr-pop" : ""}${isPicked(i) ? " pr-picked" : ""}`} style={{ padding: "22px 20px 18px" }}>
                  {t.popular && <span className="pr-badge">⭐ Most popular</span>}
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#00AAFF", letterSpacing: 0.5, textTransform: "uppercase" }}>{t.name}</div>
                  <div style={{ fontSize: 30, fontWeight: 800, color: "white", margin: "4px 0 6px" }}>{formatINR(t.price)}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "white", marginBottom: 8 }}>{t.title}</div>
                  <div style={{ fontSize: 13.5, color: "#8193AB", lineHeight: 1.6 }}>{t.summary}</div>
                </div>
              ))}
            </div>
            {cat.features.map((f, r) => (
              <div key={f.label} className="pr-row" role="row" style={{ background: r % 2 === 0 ? "rgba(255,255,255,0.025)" : "transparent" }}>
                <div role="rowheader" className="pr-label">{f.label}</div>
                {f.values.map((v, i) => (
                  <div key={i} role="cell" className={`pr-col pr-cell${cat.tiers[i].popular ? " pr-pop" : ""}${isPicked(i) ? " pr-picked" : ""}`}><Value v={v} /></div>
                ))}
              </div>
            ))}
            <div className="pr-row" role="row">
              <div role="rowheader" className="pr-label" style={{ fontWeight: 700, color: "white" }}>Total</div>
              {cat.tiers.map((t, i) => (
                <div key={t.name} role="cell" className={`pr-col${t.popular ? " pr-pop" : ""}${isPicked(i) ? " pr-picked" : ""}`} style={{ padding: "18px 20px 22px", textAlign: "center" }}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "white", marginBottom: 12 }}>{formatINR(t.price)}</div>
                  <button type="button" onClick={() => choose(i)} aria-pressed={isPicked(i)} style={selectBtn(i)}>
                    {isPicked(i) ? "✓ Selected" : "Select"}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: one package at a time */}
          <div className="pr-mobile">
            <div className="pr-tabs" role="tablist" aria-label="Package">
              {cat.tiers.map((t, i) => (
                <button key={t.name} role="tab" aria-selected={tab === i} onClick={() => setTab(i)} style={{
                  flex: 1, padding: "10px 4px", borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer", border: "none",
                  background: tab === i ? BLUE : "transparent", color: tab === i ? "white" : "#8193AB",
                }}>
                  {t.name}{isPicked(i) ? " ✓" : ""}
                </button>
              ))}
            </div>
            {(() => {
              const t = cat.tiers[tab];
              return (
                <div className={`pr-mcard${isPicked(tab) ? " pr-picked" : ""}`}>
                  {t.popular && <span className="pr-badge" style={{ position: "static", display: "inline-block", marginBottom: 10 }}>⭐ Most popular</span>}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10 }}>
                    <div style={{ fontSize: 17, fontWeight: 700, color: "white" }}>{t.title}</div>
                    <div style={{ fontSize: 24, fontWeight: 800, color: "white", whiteSpace: "nowrap" }}>{formatINR(t.price)}</div>
                  </div>
                  <p style={{ fontSize: 14, color: "#8193AB", lineHeight: 1.6, margin: "8px 0 14px" }}>{t.summary}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 18px" }}>
                    {cat.features.map((f) => {
                      const v = f.values[tab];
                      return (
                        <li key={f.label} style={{ display: "flex", justifyContent: "space-between", gap: 12, padding: "10px 0", borderTop: "1px solid rgba(255,255,255,0.06)", opacity: v === false ? 0.45 : 1 }}>
                          <span style={{ fontSize: 14, color: v === false ? "#64748B" : "#C4D0E0" }}>{f.label}</span>
                          <span style={{ textAlign: "right" }}><Value v={v} /></span>
                        </li>
                      );
                    })}
                  </ul>
                  <button type="button" onClick={() => choose(tab)} aria-pressed={isPicked(tab)} style={selectBtn(tab)}>
                    {isPicked(tab) ? "✓ Selected" : `Select ${t.name} · ${formatINR(t.price)}`}
                  </button>
                </div>
              );
            })()}
          </div>

        </div>
      </section>

      {/* Step 3: selected package bar */}
      {picked && pickedTier && selected && (
        <div className="pr-bar" role="region" aria-label="Selected package">
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12, color: "#8193AB", whiteSpace: "nowrap" }}>
              {pickedTier.name} · <strong style={{ color: "#00AAFF", fontSize: 13 }}>{formatINR(pickedTier.price)}</strong>
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "white", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {picked.icon} {pickedTier.title}
            </div>
          </div>
          <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(waText)}`} target="_blank" rel="noopener noreferrer" className="btn-primary"
            style={{ padding: "11px 20px", fontSize: 14.5, whiteSpace: "nowrap", background: "linear-gradient(135deg,#16A34A,#22C55E)" }}>
            💬 Enquire now
          </a>
          <button type="button" onClick={() => setSelected(null)} aria-label="Clear selection" style={{ background: "none", border: "none", color: "#64748B", fontSize: 20, cursor: "pointer", padding: 4 }}>✕</button>
        </div>
      )}
      {selected && <div style={{ height: 80 }} aria-hidden />}

      <style>{`
        .pr-menu { display: flex; gap: 8px; overflow-x: auto; flex-wrap: nowrap; padding-bottom: 4px; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
        .pr-menu::-webkit-scrollbar { display: none; }
        .pr-title { font-size: 22px; }

        .pr-table { border-radius: 22px; border: 1px solid rgba(255,255,255,0.08); background: rgba(10,22,40,0.75); overflow: hidden; }
        .pr-row { display: grid; grid-template-columns: 1.15fr repeat(3, 1fr); }
        .pr-label { padding: 14px 22px; font-size: 14px; color: #94A3B8; display: flex; align-items: center; }
        .pr-col { position: relative; border-left: 1px solid rgba(255,255,255,0.06); }
        .pr-cell { display: flex; align-items: center; justify-content: center; padding: 14px 12px; text-align: center; }
        .pr-pop { background: rgba(0,102,255,0.07); }
        .pr-picked { background: rgba(34,197,94,0.09) !important; }
        .pr-badge { position: absolute; top: 0; right: 14px; transform: translateY(-1px); font-size: 11px; font-weight: 700; color: white; background: ${BLUE}; padding: 4px 10px; border-radius: 0 0 8px 8px; }
        .pr-head .pr-col { border-bottom: 1px solid rgba(255,255,255,0.08); }

        .pr-mobile { display: none; }
        .pr-tabs { display: flex; gap: 4px; padding: 4px; border-radius: 14px; background: rgba(10,22,40,0.8); border: 1px solid rgba(255,255,255,0.08); margin-bottom: 14px; }
        .pr-mcard { padding: 20px 18px; border-radius: 20px; background: rgba(10,22,40,0.8); border: 1px solid rgba(255,255,255,0.08); }
        .pr-mcard.pr-picked { border-color: rgba(34,197,94,0.5); }


        .pr-bar { position: fixed; left: 0; right: 0; margin: 0 auto; bottom: 16px; z-index: 60; width: min(680px, calc(100% - 24px)); display: flex; align-items: center; gap: 12px; padding: 12px 14px 12px 18px; border-radius: 18px; background: rgba(6,14,28,0.96); border: 1px solid rgba(34,197,94,0.4); box-shadow: 0 20px 50px rgba(0,0,0,0.5); backdrop-filter: blur(12px); animation: fadeInUp .3s ease both; box-sizing: border-box; }

        @media (max-width: 860px) {
          .pr-menu > button { flex: 1 1 0; padding: 9px 6px !important; font-size: 13px !important; }
          .pr-title { font-size: 18px; }
          .pr-table { display: none; }
          .pr-mobile { display: block; }
          .pr-bar { gap: 8px; padding-left: 14px; }
          .pr-bar a { padding: 11px 14px !important; }
        }
      `}</style>
    </>
  );
}
