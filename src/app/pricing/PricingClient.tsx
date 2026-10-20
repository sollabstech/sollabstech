"use client";

import { useRef, useState } from "react";
import { CATEGORIES, WHATSAPP, formatINR, startingPrice, type Cell } from "./packages";

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
      <section style={{ paddingTop: 120, paddingBottom: 40, paddingLeft: 24, paddingRight: 24, textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <span className="section-tag" style={{ marginBottom: 16, display: "inline-flex" }}>Pricing</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)", fontWeight: 800, marginBottom: 16 }}>
            Simple Packages, <span className="gradient-text" style={{ whiteSpace: "nowrap" }}>Honest Prices</span>
          </h1>
          <p style={{ color: "#6B7A94", fontSize: 17, lineHeight: 1.7 }}>
            Websites, mobile apps and custom software. Choose what you need, compare packages, and pick the one that fits.
          </p>
          <ol className="pr-steps" aria-label="How it works">
            {["Choose a service", "Compare packages", "Select & enquire"].map((s, i) => (
              <li key={s}><span>{i + 1}</span>{s}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* Step 1: category */}
      <section style={{ padding: "0 24px 36px" }}>
        <div className="pr-cats" role="tablist" aria-label="Service type">
          {CATEGORIES.map((c) => {
            const active = c.id === cat.id;
            return (
              <button key={c.id} role="tab" aria-selected={active} onClick={() => chooseCategory(c.id, true)} className="pr-cat" style={{
                background: active ? "linear-gradient(160deg, rgba(0,102,255,0.22), rgba(10,22,40,0.9))" : "rgba(10,22,40,0.7)",
                border: `1px solid ${active ? "rgba(0,170,255,0.6)" : "rgba(255,255,255,0.08)"}`,
                boxShadow: active ? "0 10px 40px rgba(0,102,255,0.18)" : "none",
              }}>
                <span className="pr-cat-icon">{c.icon}</span>
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ display: "block", fontSize: 17, fontWeight: 700, color: "white", marginBottom: 4 }}>{c.name}</span>
                  <span className="pr-cat-blurb">{c.blurb}</span>
                  <span style={{ display: "block", fontSize: 13, color: "#8193AB", marginTop: 8 }}>
                    from <strong style={{ color: active ? "#00AAFF" : "white", fontSize: 16 }}>{formatINR(startingPrice(c))}</strong>
                  </span>
                </span>
                {active && <span className="pr-cat-tick" aria-hidden>✓</span>}
              </button>
            );
          })}
        </div>
      </section>

      {/* Step 2: packages */}
      <section ref={packagesRef} style={{ padding: "0 24px 60px", scrollMarginTop: 90 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "white", textAlign: "center", margin: "0 0 6px" }}>
            {cat.icon} {cat.name} packages
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

          <p style={{ textAlign: "center", fontSize: 13, color: "#64748B", marginTop: 18, lineHeight: 1.6 }}>
            Prices are starting prices. Need something different? We&apos;ll confirm the final quote with you before any work starts.
          </p>
        </div>
      </section>

      {/* Explore everything */}
      <section style={{ padding: "0 24px 100px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: "white", textAlign: "center", margin: "0 0 6px" }}>
            Explore all our <span className="gradient-text">services</span>
          </h2>
          <p style={{ textAlign: "center", color: "#6B7A94", fontSize: 14.5, margin: "0 0 28px" }}>Tap any service to see its packages.</p>
          <div className="pr-explore">
            {CATEGORIES.map((c) => (
              <div key={c.id} style={{ padding: 22, borderRadius: 18, background: "rgba(10,22,40,0.7)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: "white", marginBottom: 14 }}>{c.icon} {c.name}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {c.services.map((s) => (
                    <button key={s} type="button" onClick={() => chooseCategory(c.id, true)} className="pr-chip">{s}</button>
                  ))}
                </div>
              </div>
            ))}
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
        .pr-steps { display: flex; justify-content: center; flex-wrap: wrap; gap: 10px 22px; list-style: none; padding: 0; margin: 26px 0 0; }
        .pr-steps li { display: flex; align-items: center; gap: 8px; font-size: 14px; color: #C4D0E0; font-weight: 600; }
        .pr-steps li span { width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 800; color: white; background: ${BLUE}; }

        .pr-cats { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .pr-cat { position: relative; display: flex; flex-direction: column; gap: 14px; text-align: left; padding: 24px 22px; border-radius: 20px; cursor: pointer; transition: transform .2s, border-color .2s; font: inherit; }
        .pr-cat:hover { transform: translateY(-3px); }
        .pr-cat-icon { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 26px; background: rgba(0,102,255,0.12); border: 1px solid rgba(0,102,255,0.25); flex-shrink: 0; }
        .pr-cat-blurb { display: block; font-size: 13.5px; color: #8193AB; line-height: 1.55; }
        .pr-cat-tick { position: absolute; top: 16px; right: 16px; width: 26px; height: 26px; border-radius: 50%; background: ${BLUE}; color: white; font-size: 14px; font-weight: 800; display: flex; align-items: center; justify-content: center; }

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

        .pr-explore { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .pr-chip { padding: 8px 14px; border-radius: 100px; font-size: 13px; font-weight: 600; color: #C4D0E0; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); cursor: pointer; transition: all .2s; font-family: inherit; }
        .pr-chip:hover { color: white; border-color: rgba(0,170,255,0.6); background: rgba(0,102,255,0.15); }

        .pr-bar { position: fixed; left: 0; right: 0; margin: 0 auto; bottom: 16px; z-index: 60; width: min(680px, calc(100% - 24px)); display: flex; align-items: center; gap: 12px; padding: 12px 14px 12px 18px; border-radius: 18px; background: rgba(6,14,28,0.96); border: 1px solid rgba(34,197,94,0.4); box-shadow: 0 20px 50px rgba(0,0,0,0.5); backdrop-filter: blur(12px); animation: fadeInUp .3s ease both; box-sizing: border-box; }

        @media (max-width: 860px) {
          .pr-cats { grid-template-columns: 1fr; gap: 10px; }
          .pr-cat { flex-direction: row; align-items: center; padding: 16px; }
          .pr-cat-blurb { display: none; }
          .pr-cat-tick { top: 50%; transform: translateY(-50%); }
          .pr-table { display: none; }
          .pr-mobile { display: block; }
          .pr-explore { grid-template-columns: 1fr; }
          .pr-bar { gap: 8px; padding-left: 14px; }
          .pr-bar a { padding: 11px 14px !important; }
        }
      `}</style>
    </>
  );
}
