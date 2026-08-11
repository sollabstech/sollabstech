"use client";

import { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

// ── Firebase fields (what admin saves) ────────────────────────────────────────
interface WarrantyRecord {
  serialNumber: string;
  laptopName: string;
  brand: string;
  specs: string;
  clientName: string;
  clientPhone: string;
  clientCity: string;
  purchaseDate: string;
  warrantyMonths: number;
  warrantyEndDate: string;
  price?: string;
  notes?: string;
  // Computed display fields
  stickerColor: string;
  brandEmoji: string;
  clientInitials: string;
}

// ── Derive display properties from Firebase data ──────────────────────────────
function buildDisplayRecord(data: Record<string, unknown>): WarrantyRecord {
  const brandLower = String(data.brand ?? "").toLowerCase();

  const brandMap: Record<string, { color: string; emoji: string }> = {
    dell:    { color: "#007DB8", emoji: "💻" },
    hp:      { color: "#0096D6", emoji: "🖥️" },
    asus:    { color: "#1F8AC0", emoji: "⚡" },
    lenovo:  { color: "#E2231A", emoji: "🖱️" },
    msi:     { color: "#FF0000", emoji: "🎮" },
    acer:    { color: "#83B81A", emoji: "💡" },
    apple:   { color: "#555555", emoji: "🍎" },
    samsung: { color: "#1428A0", emoji: "📱" },
  };

  const matched = Object.entries(brandMap).find(([k]) => brandLower.includes(k));
  const stickerColor = matched ? matched[1].color : "#0066FF";
  const brandEmoji   = matched ? matched[1].emoji  : "💻";

  const nameParts = String(data.clientName ?? "?").split(" ").filter(Boolean);
  const clientInitials = nameParts.length >= 2
    ? `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase()
    : nameParts[0].substring(0, 2).toUpperCase();

  return {
    serialNumber:   String(data.serialNumber   ?? ""),
    laptopName:     String(data.laptopName     ?? ""),
    brand:          String(data.brand          ?? ""),
    specs:          String(data.specs          ?? ""),
    clientName:     String(data.clientName     ?? ""),
    clientPhone:    String(data.clientPhone    ?? ""),
    clientCity:     String(data.clientCity     ?? ""),
    purchaseDate:   String(data.purchaseDate   ?? ""),
    warrantyMonths: Number(data.warrantyMonths ?? 0),
    warrantyEndDate:String(data.warrantyEndDate ?? ""),
    price:          String(data.price          ?? ""),
    notes:          String(data.notes          ?? ""),
    stickerColor,
    brandEmoji,
    clientInitials,
  };
}

// ── Warranty status helpers ───────────────────────────────────────────────────
function getWarrantyStatus(record: WarrantyRecord) {
  const now        = new Date();
  const end        = new Date(record.warrantyEndDate);
  const start      = new Date(record.purchaseDate);
  const totalMs    = end.getTime()     - start.getTime();
  const usedMs     = now.getTime()     - start.getTime();
  const remainMs   = end.getTime()     - now.getTime();
  const totalDays  = Math.floor(totalMs / 86400000);
  const remainDays = Math.max(0, Math.floor(remainMs / 86400000));
  const remainMons = Math.max(0, Math.floor(remainDays / 30));
  const progress   = Math.min(100, Math.floor((usedMs / totalMs) * 100));
  const isExpired      = remainDays === 0;
  const isExpiringSoon = remainDays > 0 && remainDays <= 30;
  return { totalDays, remainDays, remainMons, progress, isExpired, isExpiringSoon };
}

function formatDate(dateStr: string) {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric", month: "long", year: "numeric",
  });
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function WarrantyClient() {
  const [serial,   setSerial  ] = useState("");
  const [searched, setSearched] = useState(false);
  const [result,   setResult  ] = useState<WarrantyRecord | null>(null);
  const [loading,  setLoading ] = useState(false);

  const handleCheck = async () => {
    if (!serial.trim()) return;
    setLoading(true);
    setSearched(false);
    setResult(null);
    try {
      const q    = query(collection(db, "warranty"), where("serialNumber", "==", serial.trim()));
      const snap = await getDocs(q);
      if (!snap.empty) {
        setResult(buildDisplayRecord(snap.docs[0].data()));
      }
    } catch (err) {
      console.error("Warranty lookup error:", err);
    }
    setSearched(true);
    setLoading(false);
  };

  const status = result ? getWarrantyStatus(result) : null;

  return (
    <>
      {/* ── Hero ── */}
      <section className="warranty-hero" style={{ paddingTop: 120, paddingBottom: 60, paddingLeft: 24, paddingRight: 24, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: 700, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,102,255,0.14) 0%, transparent 70%)", filter: "blur(60px)", zIndex: 0 }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
          <span className="section-tag" style={{ marginBottom: 20, display: "inline-flex" }}>🛡️ Warranty Checker</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", fontWeight: 800, letterSpacing: "-1px", marginBottom: 16 }}>
            Check Your <span className="gradient-text">Laptop Warranty</span>
          </h1>
          <p style={{ color: "#6B7A94", fontSize: 17, lineHeight: 1.7, marginBottom: 40 }}>
            Enter your serial number to instantly view your warranty status, remaining coverage, and purchase details.
          </p>

          <div className="search-box" style={{ display: "flex", gap: 10, maxWidth: 520, margin: "0 auto", background: "rgba(10,22,40,0.7)", border: "1px solid rgba(0,102,255,0.3)", borderRadius: 16, padding: "6px 6px 6px 20px", backdropFilter: "blur(20px)" }}>
            <input
              type="text"
              placeholder="Enter your serial number"
              value={serial}
              onChange={(e) => setSerial(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCheck()}
              style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "white", fontSize: 15, padding: "8px 0" }}
            />
            <button
              onClick={handleCheck}
              disabled={loading || !serial.trim()}
              className="btn-primary"
              style={{ padding: "10px 24px", fontSize: 14, borderRadius: 10, opacity: loading || !serial.trim() ? 0.6 : 1 }}
            >
              {loading ? (
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 14, height: 14, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "white", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
                  Checking...
                </span>
              ) : "Check →"}
            </button>
          </div>
          <p style={{ fontSize: 12, color: "#3D4F6B", marginTop: 12 }}>Find your serial number on the sticker at the bottom of your laptop</p>
        </div>
      </section>

      {/* ── Results ── */}
      {searched && (
        <section className="search-results" style={{ padding: "0 24px 100px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>

            {/* Not found */}
            {!result && (
              <div style={{ textAlign: "center", padding: "60px 24px", background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 20 }}>
                <div style={{ fontSize: 60, marginBottom: 16 }}>❌</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "white", marginBottom: 8 }}>Serial Number Not Found</h3>
                <p style={{ color: "#6B7A94", fontSize: 15 }}>
                  No warranty record found for <strong style={{ color: "#F87171" }}>{serial}</strong>.
                  Please check the sticker on your laptop or contact us.
                </p>
                <a href="https://wa.me/919003850743?text=Hi, I need help checking my warranty." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 24, display: "inline-flex" }}>
                  💬 Contact Support
                </a>
              </div>
            )}

            {/* Found */}
            {result && status && (
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                {/* Status banner */}
                <div style={{ padding: "16px 24px", borderRadius: 14, background: status.isExpired ? "rgba(239,68,68,0.08)" : status.isExpiringSoon ? "rgba(251,191,36,0.08)" : "rgba(34,197,94,0.08)", border: `1px solid ${status.isExpired ? "rgba(239,68,68,0.25)" : status.isExpiringSoon ? "rgba(251,191,36,0.25)" : "rgba(34,197,94,0.25)"}`, display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: 24 }}>{status.isExpired ? "⚠️" : status.isExpiringSoon ? "⏳" : "✅"}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: status.isExpired ? "#F87171" : status.isExpiringSoon ? "#FDE047" : "#4ADE80" }}>
                      {status.isExpired ? "Warranty Expired" : status.isExpiringSoon ? "Warranty Expiring Soon!" : "Warranty Active"}
                    </div>
                    <div style={{ fontSize: 13, color: "#6B7A94" }}>
                      {status.isExpired
                        ? `Expired on ${formatDate(result.warrantyEndDate)}`
                        : `${status.remainDays} days (${status.remainMons} months) remaining · Expires ${formatDate(result.warrantyEndDate)}`}
                    </div>
                  </div>
                </div>

                {/* Main grid */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="warranty-grid">

                  {/* Left column */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

                    {/* Customer card */}
                    <div className="glass" style={{ borderRadius: 18, padding: "28px", border: `1px solid ${result.stickerColor}30`, background: `linear-gradient(135deg, rgba(10,22,40,0.8), ${result.stickerColor}08)` }}>
                      <div style={{ fontSize: 11, color: "#3D4F6B", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>Customer</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                        <div style={{ width: 72, height: 72, borderRadius: "50%", flexShrink: 0, background: `linear-gradient(135deg, ${result.stickerColor}, #00AAFF)`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 24, color: "white", boxShadow: `0 8px 24px ${result.stickerColor}50`, position: "relative" }}>
                          {result.clientInitials}
                          <div style={{ position: "absolute", bottom: 2, right: 2, width: 18, height: 18, borderRadius: "50%", background: "#4ADE80", border: "2px solid #050A18" }} />
                        </div>
                        <div>
                          <div style={{ fontSize: 20, fontWeight: 800, color: "white" }}>{result.clientName}</div>
                          {result.clientCity && <div style={{ fontSize: 13, color: "#6B7A94", marginTop: 2 }}>📍 {result.clientCity}</div>}
                          <div style={{ fontSize: 11, color: "#3D4F6B", marginTop: 4 }}>Serial: {result.serialNumber}</div>
                        </div>
                      </div>
                      <div style={{ height: 1, background: "rgba(255,255,255,0.05)", marginBottom: 16 }} />
                      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {[
                          { label: "Purchase Date",    value: formatDate(result.purchaseDate) },
                          { label: "Warranty Period",  value: `${result.warrantyMonths} Months` },
                          { label: "Expiry Date",      value: formatDate(result.warrantyEndDate) },
                          ...(result.price ? [{ label: "Sale Price", value: result.price }] : []),
                        ].map(({ label, value }) => (
                          <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span style={{ fontSize: 12, color: "#3D4F6B" }}>{label}</span>
                            <span style={{ fontSize: 13, fontWeight: 600, color: "#C4D0E0" }}>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Device card */}
                    <div className="glass" style={{ borderRadius: 18, padding: "24px", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <div style={{ fontSize: 11, color: "#3D4F6B", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 14 }}>Device</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                        <div style={{ width: 52, height: 52, borderRadius: 12, background: `${result.stickerColor}15`, border: `1px solid ${result.stickerColor}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>
                          {result.brandEmoji}
                        </div>
                        <div>
                          <div style={{ fontSize: 18, fontWeight: 800, color: "white" }}>{result.laptopName}</div>
                          {result.brand && <div style={{ fontSize: 12, color: "#3D4F6B" }}>{result.brand}</div>}
                        </div>
                      </div>
                      {result.specs && (
                        <div style={{ padding: "12px 14px", borderRadius: 10, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", fontSize: 12, color: "#6B7A94", lineHeight: 1.6 }}>
                          {result.specs}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right column */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

                    {/* Coverage card */}
                    <div className="glass" style={{ borderRadius: 18, padding: "28px", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <div style={{ fontSize: 11, color: "#3D4F6B", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 20 }}>Warranty Coverage</div>
                      <div style={{ textAlign: "center", marginBottom: 24 }}>
                        <div style={{ fontSize: "3.5rem", fontWeight: 900, background: status.isExpired ? "#F87171" : status.isExpiringSoon ? "linear-gradient(135deg,#FDE047,#F59E0B)" : `linear-gradient(135deg,${result.stickerColor},#00AAFF)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1 }}>
                          {status.isExpired ? "0" : status.remainMons}
                        </div>
                        <div style={{ fontSize: 14, color: "#6B7A94", marginTop: 4 }}>
                          {status.isExpired ? "Months — Expired" : `Month${status.remainMons !== 1 ? "s" : ""} Warranty Left`}
                        </div>
                        {!status.isExpired && <div style={{ fontSize: 12, color: "#3D4F6B", marginTop: 2 }}>({status.remainDays} days remaining)</div>}
                      </div>

                      <div style={{ marginBottom: 12 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                          <span style={{ fontSize: 11, color: "#3D4F6B" }}>Warranty used</span>
                          <span style={{ fontSize: 11, color: "#3D4F6B" }}>{status.progress}%</span>
                        </div>
                        <div style={{ height: 10, borderRadius: 100, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
                          <div style={{ height: "100%", width: `${status.progress}%`, borderRadius: 100, background: status.isExpired ? "#EF4444" : status.isExpiringSoon ? "linear-gradient(90deg,#F59E0B,#EF4444)" : `linear-gradient(90deg,${result.stickerColor},#00AAFF)`, transition: "width 1s ease", boxShadow: `0 0 10px ${result.stickerColor}60` }} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
                          <span style={{ fontSize: 10, color: "#3D4F6B" }}>{formatDate(result.purchaseDate)}</span>
                          <span style={{ fontSize: 10, color: "#3D4F6B" }}>{formatDate(result.warrantyEndDate)}</span>
                        </div>
                      </div>

                      {/* Month bubbles */}
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center", marginTop: 16 }}>
                        {Array.from({ length: result.warrantyMonths }).map((_, i) => {
                          const monthsPassed = Math.floor((status.progress / 100) * result.warrantyMonths);
                          const isUsed    = i < monthsPassed;
                          const isCurrent = i === monthsPassed;
                          return (
                            <div key={i} style={{ width: 28, height: 28, borderRadius: 6, background: isUsed ? "rgba(255,255,255,0.08)" : isCurrent ? result.stickerColor : `${result.stickerColor}20`, border: `1px solid ${isUsed ? "rgba(255,255,255,0.05)" : isCurrent ? result.stickerColor : `${result.stickerColor}40`}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: isUsed ? "#3D4F6B" : isCurrent ? "white" : "#00AAFF", fontWeight: 600, boxShadow: isCurrent ? `0 0 10px ${result.stickerColor}80` : "none" }}>
                              {i + 1}
                            </div>
                          );
                        })}
                      </div>

                      <div style={{ marginTop: 20, textAlign: "center" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", borderRadius: 100, background: status.isExpired ? "rgba(239,68,68,0.1)" : "rgba(34,197,94,0.1)", border: `1px solid ${status.isExpired ? "rgba(239,68,68,0.3)" : "rgba(34,197,94,0.3)"}` }}>
                          <span style={{ fontSize: 14 }}>{status.isExpired ? "🔴" : "🟢"}</span>
                          <span style={{ fontSize: 13, fontWeight: 700, color: status.isExpired ? "#F87171" : "#4ADE80" }}>
                            {status.isExpired ? "Warranty Expired" : "Warranty Active · Sollabs Tech"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Notes card (if present) */}
                    {result.notes && (
                      <div className="glass" style={{ borderRadius: 18, padding: "20px 24px", border: "1px solid rgba(255,255,255,0.07)" }}>
                        <div style={{ fontSize: 11, color: "#3D4F6B", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 10 }}>📋 Notes</div>
                        <p style={{ fontSize: 13, color: "#6B7A94", lineHeight: 1.65, margin: 0 }}>{result.notes}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Support footer */}
                <div style={{ padding: "20px 24px", borderRadius: 14, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, background: "rgba(10,22,40,0.5)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "white" }}>Need warranty support?</div>
                    <div style={{ fontSize: 13, color: "#6B7A94" }}>Contact us with your serial number and we&apos;ll help immediately.</div>
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    <a href={`https://wa.me/919003850743?text=Hi, I need warranty support for serial ${result.serialNumber} (${result.laptopName})`} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 13, padding: "9px 20px" }}>💬 WhatsApp Support</a>
                    <a href="mailto:sollabstech@gmail.com" className="btn-outline" style={{ fontSize: 13, padding: "9px 20px" }}>📧 Email</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── How-to section (shown before search) ── */}
      {!searched && (
        <section style={{ padding: "0 24px 100px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 18, fontWeight: 700, color: "white", marginBottom: 32 }}>
              How to <span className="gradient-text-blue">Find Your Serial Number</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="steps-grid">
              {[
                { icon: "🔍", step: "1", title: "Find the sticker", desc: "Look at the bottom of your laptop for the Sollabs Tech warranty sticker." },
                { icon: "🔢", step: "2", title: "Read the number",  desc: "Your serial number is printed on the sticker, e.g. 197979." },
                { icon: "✅", step: "3", title: "Check warranty",   desc: "Enter it above to instantly see your coverage status and details." },
              ].map((s) => (
                <div key={s.step} className="glass" style={{ borderRadius: 16, padding: "24px 20px", textAlign: "center", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontSize: 32, marginBottom: 10 }}>{s.icon}</div>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(0,102,255,0.2)", border: "1px solid rgba(0,102,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#00AAFF", margin: "0 auto 10px" }}>{s.step}</div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 6 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: "#6B7A94", lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .warranty-hero  { padding-top: 120px !important; padding-bottom: 60px !important; }
        .warranty-grid  { grid-template-columns: 1fr 1fr !important; }
        .steps-grid     { grid-template-columns: repeat(3,1fr) !important; }
        .search-box     { flex-direction: row !important; }
        .search-results { padding: 0 24px 100px !important; }
        @media (max-width: 900px) {
          .warranty-grid { grid-template-columns: 1fr !important; }
          .steps-grid    { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 640px) {
          .warranty-hero { padding-top: 100px !important; padding-bottom: 40px !important; }
          .search-box    { flex-direction: column !important; padding: 10px !important; }
          .search-box input  { font-size: 16px !important; padding: 10px !important; }
          .search-box button { width: 100% !important; justify-content: center !important; }
          .steps-grid    { grid-template-columns: 1fr !important; }
          .search-results { padding: 0 16px 60px !important; }
        }
        input::placeholder { color: #3D4F6B; }
      `}</style>
    </>
  );
}
