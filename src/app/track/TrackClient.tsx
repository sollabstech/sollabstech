"use client";

import { useState } from "react";
import { projectRecords, ProjectStatus } from "@/lib/data";

type ProjectRecord = typeof projectRecords[string];

const STATUS_CONFIG: Record<ProjectStatus, { label: string; emoji: string; color: string; bg: string; border: string }> = {
  planning:    { label: "Planning",       emoji: "📋", color: "#F59E0B", bg: "rgba(245,158,11,0.08)",  border: "rgba(245,158,11,0.25)"  },
  development: { label: "In Development", emoji: "🛠️", color: "#0066FF", bg: "rgba(0,102,255,0.08)",  border: "rgba(0,102,255,0.25)"   },
  testing:     { label: "Testing",        emoji: "🧪", color: "#7C3AED", bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.25)"  },
  delivered:   { label: "Delivered ✓",   emoji: "🚀", color: "#22C55E", bg: "rgba(34,197,94,0.08)",  border: "rgba(34,197,94,0.25)"   },
  maintenance: { label: "Maintenance",   emoji: "🔧", color: "#00AAFF", bg: "rgba(0,170,255,0.08)",  border: "rgba(0,170,255,0.25)"   },
};

const STAGES: ProjectStatus[] = ["planning", "development", "testing", "delivered"];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export default function TrackClient() {
  const [projectId, setProjectId] = useState("");
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState<ProjectRecord | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    if (!projectId.trim()) return;
    setLoading(true);
    setSearched(false);
    await new Promise((r) => setTimeout(r, 900));
    setResult(projectRecords[projectId.trim().toUpperCase()] ?? null);
    setSearched(true);
    setLoading(false);
  };

  const sc = result ? STATUS_CONFIG[result.status] : null;
  const stageIndex = result ? STAGES.indexOf(result.status === "maintenance" ? "delivered" : result.status) : -1;

  return (
    <>
      <section className="track-hero" style={{ paddingTop: 120, paddingBottom: 60, paddingLeft: 24, paddingRight: 24, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: 700, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,102,255,0.12) 0%, transparent 70%)", filter: "blur(60px)", zIndex: 0 }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
          <span className="section-tag" style={{ marginBottom: 20, display: "inline-flex" }}>📦 Project Tracker</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", fontWeight: 800, letterSpacing: "-1px", marginBottom: 16 }}>
            Track Your <span className="gradient-text">Software Project</span>
          </h1>
          <p style={{ color: "#6B7A94", fontSize: 17, lineHeight: 1.7, marginBottom: 40 }}>
            Enter your Project ID to instantly view build status, progress, milestones, and demo — for your app, website, or custom software.
          </p>

          <div className="track-search" style={{ display: "flex", gap: 10, maxWidth: 520, margin: "0 auto", background: "rgba(10,22,40,0.7)", border: "1px solid rgba(0,102,255,0.3)", borderRadius: 16, padding: "6px 6px 6px 20px", backdropFilter: "blur(20px)" }}>
            <input type="text" placeholder="Enter Project ID (e.g. PRJ001)" value={projectId} onChange={(e) => setProjectId(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleCheck()} style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "white", fontSize: 15, padding: "8px 0" }} />
            <button onClick={handleCheck} disabled={loading || !projectId.trim()} className="btn-primary" style={{ padding: "10px 24px", fontSize: 14, borderRadius: 10, opacity: loading || !projectId.trim() ? 0.6 : 1 }}>
              {loading ? (
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 14, height: 14, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "white", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
                  Loading...
                </span>
              ) : "Track →"}
            </button>
          </div>
          <p style={{ fontSize: 12, color: "#3D4F6B", marginTop: 12 }}>Demo IDs: PRJ001 · PRJ002 · PRJ003 · PRJ004</p>
        </div>
      </section>

      {searched && (
        <section className="track-results" style={{ padding: "0 24px 100px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            {!result && (
              <div style={{ textAlign: "center", padding: "60px 24px", background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 20 }}>
                <div style={{ fontSize: 60, marginBottom: 16 }}>🔍</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "white", marginBottom: 8 }}>Project Not Found</h3>
                <p style={{ color: "#6B7A94", fontSize: 15 }}>No project found for ID <strong style={{ color: "#F87171" }}>{projectId}</strong>. Please check your Project ID or contact us.</p>
                <a href="https://wa.me/919003850743?text=Hi, I need help tracking my project." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 24, display: "inline-flex" }}>💬 Contact Support</a>
              </div>
            )}

            {result && sc && (
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ padding: "16px 24px", borderRadius: 14, background: sc.bg, border: `1px solid ${sc.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 24 }}>{sc.emoji}</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15, color: sc.color }}>{sc.label}</div>
                      <div style={{ fontSize: 13, color: "#6B7A94" }}>{result.currentMilestone}</div>
                    </div>
                  </div>
                  <div style={{ padding: "6px 16px", borderRadius: 100, background: `${result.accentColor}15`, border: `1px solid ${result.accentColor}40`, fontSize: 13, fontWeight: 700, color: result.accentColor }}>{result.typeEmoji} {result.projectType}</div>
                </div>

                <div className="glass" style={{ borderRadius: 16, padding: "24px 28px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontSize: 11, color: "#3D4F6B", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 20 }}>Project Stages</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 0 }} className="stages-row">
                    {STAGES.map((stage, idx) => {
                      const done = idx < stageIndex || (idx === stageIndex && (result.status === "delivered" || result.status === "maintenance"));
                      const current = idx === stageIndex && result.status !== "delivered" && result.status !== "maintenance";
                      const cfg = STATUS_CONFIG[stage];
                      return (
                        <div key={stage} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, flex: 1 }}>
                            <div style={{ width: 40, height: 40, borderRadius: "50%", background: done ? cfg.color : current ? `${cfg.color}20` : "rgba(255,255,255,0.05)", border: `2px solid ${done || current ? cfg.color : "rgba(255,255,255,0.08)"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, boxShadow: current ? `0 0 16px ${cfg.color}60` : "none" }}>
                              {done ? "✓" : cfg.emoji}
                            </div>
                            <div style={{ fontSize: 11, color: done || current ? cfg.color : "#3D4F6B", fontWeight: done || current ? 700 : 400, textAlign: "center" }}>{cfg.label.replace(" ✓", "")}</div>
                          </div>
                          {idx < STAGES.length - 1 && <div style={{ height: 2, flex: 1, maxWidth: 60, background: idx < stageIndex ? STATUS_CONFIG[STAGES[idx + 1]].color : "rgba(255,255,255,0.06)", transition: "background 0.5s" }} />}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="track-grid">
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div className="glass" style={{ borderRadius: 18, padding: "28px", border: `1px solid ${result.accentColor}30`, background: `linear-gradient(135deg, rgba(10,22,40,0.8), ${result.accentColor}08)` }}>
                      <div style={{ fontSize: 11, color: "#3D4F6B", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>Client</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                        <div style={{ width: 72, height: 72, borderRadius: "50%", flexShrink: 0, background: `linear-gradient(135deg, ${result.accentColor}, #00AAFF)`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 24, color: "white", boxShadow: `0 8px 24px ${result.accentColor}50`, position: "relative" }}>
                          {result.clientInitials}
                          <div style={{ position: "absolute", bottom: 2, right: 2, width: 18, height: 18, borderRadius: "50%", background: result.status === "delivered" ? "#4ADE80" : result.accentColor, border: "2px solid #050A18" }} />
                        </div>
                        <div>
                          <div style={{ fontSize: 20, fontWeight: 800, color: "white" }}>{result.clientName}</div>
                          <div style={{ fontSize: 13, color: "#6B7A94", marginTop: 2 }}>📍 {result.clientCity}</div>
                          <div style={{ fontSize: 11, color: "#3D4F6B", marginTop: 4 }}>Project ID: {result.projectId}</div>
                        </div>
                      </div>
                      <div style={{ height: 1, background: "rgba(255,255,255,0.05)", marginBottom: 16 }} />
                      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {[
                          { label: "Start Date", value: formatDate(result.startDate) },
                          { label: "Delivery Date", value: formatDate(result.deliveryDate) },
                          { label: "Platform", value: result.platform },
                          { label: "Tech Stack", value: result.stack },
                        ].map(({ label, value }) => (
                          <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                            <span style={{ fontSize: 12, color: "#3D4F6B", flexShrink: 0 }}>{label}</span>
                            <span style={{ fontSize: 12, fontWeight: 600, color: "#C4D0E0", textAlign: "right" }}>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="glass" style={{ borderRadius: 18, padding: "24px", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <div style={{ fontSize: 11, color: "#3D4F6B", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>Features Included</div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {result.features.map((feature) => (
                          <div key={feature} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <div style={{ width: 20, height: 20, borderRadius: "50%", flexShrink: 0, background: `${result.accentColor}20`, border: `1px solid ${result.accentColor}50`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: result.accentColor, fontWeight: 700 }}>✓</div>
                            <span style={{ fontSize: 13, color: "#C4D0E0" }}>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div className="glass" style={{ borderRadius: 18, padding: "28px", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <div style={{ fontSize: 11, color: "#3D4F6B", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 20 }}>Build Progress</div>
                      <div style={{ textAlign: "center", marginBottom: 28 }}>
                        <div style={{ fontSize: "3.5rem", fontWeight: 900, background: `linear-gradient(135deg, ${result.accentColor}, #00AAFF)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1 }}>{result.progress}%</div>
                        <div style={{ fontSize: 14, color: "#6B7A94", marginTop: 6 }}>Complete</div>
                        <div style={{ fontSize: 12, color: "#3D4F6B", marginTop: 2 }}>{result.currentMilestone}</div>
                      </div>
                      <div style={{ marginBottom: 20 }}>
                        <div style={{ height: 12, borderRadius: 100, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
                          <div style={{ height: "100%", width: `${result.progress}%`, borderRadius: 100, background: `linear-gradient(90deg, ${result.accentColor}, #00AAFF)`, transition: "width 1.2s ease", boxShadow: `0 0 12px ${result.accentColor}60` }} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
                          <span style={{ fontSize: 10, color: "#3D4F6B" }}>Started {formatDate(result.startDate)}</span>
                          <span style={{ fontSize: 10, color: "#3D4F6B" }}>Due {formatDate(result.deliveryDate)}</span>
                        </div>
                      </div>
                      <div style={{ padding: "16px 20px", borderRadius: 12, background: `${result.accentColor}08`, border: `1px solid ${result.accentColor}20` }}>
                        <div style={{ fontSize: 20, marginBottom: 6 }}>{result.typeEmoji}</div>
                        <div style={{ fontSize: 16, fontWeight: 800, color: "white", marginBottom: 4 }}>{result.projectName}</div>
                        <div style={{ fontSize: 12, color: "#6B7A94" }}>{result.projectType} · {result.platform}</div>
                      </div>
                      <div style={{ marginTop: 20, textAlign: "center" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", borderRadius: 100, background: sc.bg, border: `1px solid ${sc.border}` }}>
                          <span style={{ fontSize: 14 }}>{sc.emoji}</span>
                          <span style={{ fontSize: 13, fontWeight: 700, color: sc.color }}>{sc.label} · Sollabs Tech</span>
                        </div>
                      </div>
                    </div>

                    <div className="glass" style={{ borderRadius: 18, overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <div style={{ padding: "16px 20px 12px", fontSize: 11, color: "#3D4F6B", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>📹 Project Demo</div>
                      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
                        <iframe src={`https://www.youtube.com/embed/${result.demoVideoId}?rel=0&modestbranding=1`} title="Project Demo Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ padding: "20px 24px", borderRadius: 14, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, background: "rgba(10,22,40,0.5)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "white" }}>Have questions about your project?</div>
                    <div style={{ fontSize: 13, color: "#6B7A94" }}>Share your Project ID and our team will respond immediately.</div>
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    <a href={`https://wa.me/919003850743?text=Hi, I have a question about my project ${result.projectId} (${result.projectName})`} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 13, padding: "9px 20px" }}>💬 WhatsApp Us</a>
                    <a href="mailto:sollabstech@gmail.com" className="btn-outline" style={{ fontSize: 13, padding: "9px 20px" }}>📧 Email</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {!searched && (
        <section style={{ padding: "0 24px 100px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 18, fontWeight: 700, color: "white", marginBottom: 12 }}>We Build <span className="gradient-text-blue">Everything Digital</span></h2>
            <p style={{ textAlign: "center", color: "#6B7A94", fontSize: 14, marginBottom: 36 }}>Enter your Project ID above to track your custom software&apos;s live status</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }} className="what-grid">
              {[
                { emoji: "📱", title: "Mobile Apps", desc: "Flutter & React Native apps for iOS and Android with real-time features, payments, and push notifications.", color: "#00AAFF" },
                { emoji: "🌐", title: "Websites & Web Apps", desc: "Modern Next.js websites, e-commerce platforms, and web apps with blazing-fast performance.", color: "#0066FF" },
                { emoji: "🖥️", title: "Windows Software", desc: "Desktop applications for Windows using Electron, built for offline use and enterprise workflows.", color: "#7C3AED" },
                { emoji: "⚙️", title: "Custom Software", desc: "Tailored ERP, CRM, inventory, and automation solutions for any industry or business process.", color: "#F59E0B" },
              ].map((item) => (
                <div key={item.title} className="glass card-hover" style={{ borderRadius: 16, padding: "28px 24px", border: `1px solid ${item.color}20`, background: `linear-gradient(135deg, rgba(10,22,40,0.8), ${item.color}06)` }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `${item.color}15`, border: `1px solid ${item.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 16 }}>{item.emoji}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "white", marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: "#6B7A94", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .track-hero    { padding-top: 120px !important; padding-bottom: 60px !important; }
        .track-grid    { grid-template-columns: 1fr 1fr !important; }
        .what-grid     { grid-template-columns: repeat(2,1fr) !important; }
        .stages-row    { gap: 0 !important; }
        .track-search  { flex-direction: row !important; }
        .track-results { padding: 0 24px 100px !important; }
        @media (max-width: 900px) {
          .track-grid { grid-template-columns: 1fr !important; }
          .what-grid  { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .track-hero    { padding-top: 100px !important; padding-bottom: 40px !important; }
          .track-search  { flex-direction: column !important; padding: 10px !important; }
          .track-search input  { font-size: 16px !important; padding: 10px !important; }
          .track-search button { width: 100% !important; justify-content: center !important; }
          .stages-row    { flex-wrap: wrap !important; gap: 8px !important; }
          .track-results { padding: 0 16px 60px !important; }
        }
        input::placeholder { color: #3D4F6B; }
      `}</style>
    </>
  );
}
