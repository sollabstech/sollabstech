"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  getLinkType,
  formatCompletedDate,
  type ClientProject,
  type ServiceType,
} from "@/lib/clients";

// ─── Icons ────────────────────────────────────────────────────────────────────

function PlayStoreIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.18 23.76c.37.21.8.23 1.19.08l12.53-7.22L13.5 13.2 3.18 23.76zM21.5 10.34l-2.8-1.62L13.5 12l5.2 3.28 2.8-1.62c.8-.46.8-1.44 0-1.9V10.34zM4.37.24A1.49 1.49 0 003.18.24C2.46.64 2 1.4 2 2.28v19.44l11.5-11.5L4.37.24zM16.7 7.38l-3.2-1.84L4.37.24l9.13 12.96 3.2-5.82z"/>
    </svg>
  );
}

function AppStoreIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}

function WindowsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 3.449L9.75 2.1v9.451H0V3.449zm10.949-1.51L24 0v11.4H10.949V1.939zM0 12.6h9.75v9.451L0 20.699V12.6zm10.949 0H24V24l-13.051-1.939V12.6z"/>
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  );
}

// ─── Config ───────────────────────────────────────────────────────────────────

const SERVICE_CONFIG: Record<ServiceType, { label: string; color: string; bg: string; border: string }> = {
  mobile:  { label: "Mobile App",      color: "#00AAFF", bg: "rgba(0,170,255,0.1)",   border: "rgba(0,170,255,0.25)" },
  website: { label: "Website",         color: "#22C55E", bg: "rgba(34,197,94,0.1)",   border: "rgba(34,197,94,0.25)" },
  windows: { label: "Windows App",     color: "#A855F7", bg: "rgba(168,85,247,0.1)",  border: "rgba(168,85,247,0.25)" },
  custom:  { label: "Custom Software", color: "#F59E0B", bg: "rgba(245,158,11,0.1)",  border: "rgba(245,158,11,0.25)" },
};

const LINK_CONFIG = {
  playstore: { label: "Get it on Google Play",    color: "#34D399", bg: "rgba(52,211,153,0.08)",  border: "rgba(52,211,153,0.25)",  Icon: PlayStoreIcon },
  appstore:  { label: "Download on App Store",    color: "#60A5FA", bg: "rgba(96,165,250,0.08)",  border: "rgba(96,165,250,0.25)",  Icon: AppStoreIcon },
  website:   { label: "Visit Website",            color: "#00AAFF", bg: "rgba(0,170,255,0.08)",   border: "rgba(0,170,255,0.25)",   Icon: GlobeIcon },
  windows:   { label: "Get for Windows",          color: "#A78BFA", bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.25)", Icon: WindowsIcon },
  other:     { label: "Private Project",          color: "#475569", bg: "rgba(71,85,105,0.08)",   border: "rgba(71,85,105,0.2)",    Icon: LockIcon },
};

// ─── Stars ────────────────────────────────────────────────────────────────────

function Stars({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i <= rating ? "#F59E0B" : "rgba(255,255,255,0.1)"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

function Avatar({ companyName }: { companyName: string }) {
  const initials = companyName.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  return (
    <div style={{
      width: 72, height: 72, borderRadius: 18, flexShrink: 0,
      background: "linear-gradient(135deg, #0066FF, #00AAFF)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontWeight: 900, fontSize: 24, color: "white",
      border: "2px solid rgba(0,102,255,0.4)",
      boxShadow: "0 8px 24px rgba(0,102,255,0.3)",
    }}>{initials}</div>
  );
}

// ─── Related card ─────────────────────────────────────────────────────────────

function RelatedCard({ project }: { project: ClientProject }) {
  return (
    <Link href={`/clients/${project.slug}`} style={{ textDecoration: "none" }}>
      <article className="card-hover" style={{
        borderRadius: 16, background: "rgba(10,22,40,0.7)",
        border: "1px solid rgba(255,255,255,0.07)", padding: "20px",
      }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10, flexShrink: 0,
            background: "linear-gradient(135deg, #0066FF, #00AAFF)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 800, fontSize: 13, color: "white",
          }}>
            {project.companyName.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase()}
          </div>
          <div>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: "white" }}>{project.companyName}</h3>
            <p style={{ fontSize: 11, color: "#475569" }}>{project.location}</p>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 10 }}>
          {project.serviceTypes.map((s) => {
            const cfg = SERVICE_CONFIG[s];
            return (
              <span key={s} style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 100, color: cfg.color, background: cfg.bg, border: `1px solid ${cfg.border}` }}>
                {cfg.label}
              </span>
            );
          })}
        </div>
        <p style={{ fontSize: 12, color: "#6B7A94", lineHeight: 1.5, marginBottom: 8 }}>
          {project.review.slice(0, 80)}…
        </p>
        <span style={{ fontSize: 11, color: "#00AAFF", fontWeight: 600 }}>View project →</span>
      </article>
    </Link>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function ClientDetailClient({
  project,
  related,
}: {
  project: ClientProject;
  related: ClientProject[];
}) {
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  return (
    <>
      {/* Breadcrumb */}
      <div style={{ paddingTop: 92, paddingBottom: 0, paddingLeft: 24, paddingRight: 24 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <nav style={{ display: "flex", gap: 6, alignItems: "center", fontSize: 13, color: "#475569", flexWrap: "wrap" }}>
            <Link href="/" style={{ color: "#475569", textDecoration: "none" }}>Home</Link>
            <span>›</span>
            <Link href="/clients" style={{ color: "#475569", textDecoration: "none" }}>Clients</Link>
            <span>›</span>
            <span style={{ color: "#8A9BB8" }}>{project.companyName}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section style={{ padding: "32px 24px 56px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gap: 48, alignItems: "start" }} className="detail-grid">

            {/* Left */}
            <div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 24 }}>
                <Avatar companyName={project.companyName} />
                <div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
                    {project.serviceTypes.map((s) => {
                      const cfg = SERVICE_CONFIG[s];
                      return (
                        <span key={s} style={{ fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 100, color: cfg.color, background: cfg.bg, border: `1px solid ${cfg.border}` }}>
                          {cfg.label}
                        </span>
                      );
                    })}
                  </div>
                  <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 900, color: "white", lineHeight: 1.2, marginBottom: 6 }}>
                    {project.companyName}
                  </h1>
                  <p style={{ fontSize: 14, color: "#475569" }}>{project.clientName}</p>
                </div>
              </div>

              {/* Meta row */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 20, marginBottom: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span style={{ fontSize: 13, color: "#475569" }}>{project.location}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span style={{ fontSize: 13, color: "#475569" }}>{project.duration}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <span style={{ fontSize: 13, color: "#475569" }}>Completed {formatCompletedDate(project.completedDate)}</span>
                </div>
              </div>

              {/* Rating */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
                <Stars rating={project.rating} />
                <span style={{ fontSize: 13, color: "#64748B" }}>{project.rating}.0 / 5.0</span>
              </div>

              {/* Description */}
              <div className="glass" style={{ borderRadius: 16, padding: "24px" }}>
                <h2 style={{ fontSize: 15, fontWeight: 700, color: "white", marginBottom: 12 }}>About this project</h2>
                <p style={{ fontSize: 14, color: "#8A9BB8", lineHeight: 1.8 }}>{project.description}</p>
              </div>
            </div>

            {/* Right: Links + specs */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Project links */}
              <div className="glass" style={{ borderRadius: 16, padding: "24px" }}>
                <h2 style={{ fontSize: 15, fontWeight: 700, color: "white", marginBottom: 16 }}>Project Links</h2>
                {project.links.length === 0 ? (
                  <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 16px", borderRadius: 12, background: "rgba(71,85,105,0.08)", border: "1px solid rgba(71,85,105,0.2)" }}>
                    <span style={{ color: "#475569" }}><LockIcon /></span>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#475569" }}>Private Project</div>
                      <div style={{ fontSize: 11, color: "#334155" }}>This is an internal / custom system not publicly accessible.</div>
                    </div>
                  </div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {project.links.map((link, i) => {
                      const type = getLinkType(link);
                      const cfg = LINK_CONFIG[type] ?? LINK_CONFIG.website;
                      const Icon = cfg.Icon;
                      return (
                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                          style={{
                            display: "flex", alignItems: "center", gap: 12, padding: "14px 18px",
                            borderRadius: 12, color: cfg.color, background: cfg.bg,
                            border: `1px solid ${cfg.border}`, textDecoration: "none",
                            fontWeight: 700, fontSize: 14, transition: "opacity 0.15s",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                        >
                          <Icon />
                          {cfg.label}
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: "auto", opacity: 0.5 }}>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                          </svg>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Tech stack */}
              <div className="glass" style={{ borderRadius: 16, padding: "24px" }}>
                <h2 style={{ fontSize: 15, fontWeight: 700, color: "white", marginBottom: 14 }}>Tech Stack</h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {project.techStack.map((t) => (
                    <span key={t} style={{
                      fontSize: 12, fontWeight: 600, padding: "5px 13px", borderRadius: 8,
                      background: "rgba(0,102,255,0.08)", border: "1px solid rgba(0,102,255,0.18)",
                      color: "#8A9BB8",
                    }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div style={{
                borderRadius: 16, padding: "24px", textAlign: "center",
                background: "linear-gradient(135deg, rgba(0,102,255,0.1), rgba(0,170,255,0.06))",
                border: "1px solid rgba(0,102,255,0.2)",
              }}>
                <p style={{ fontSize: 14, color: "#8A9BB8", marginBottom: 16, lineHeight: 1.6 }}>
                  Want something similar for your business?
                </p>
                <Link href="/contact" className="btn-primary" style={{ fontSize: 14, padding: "12px 24px", justifyContent: "center" }}>
                  Start a Similar Project →
                </Link>
              </div>
            </div>
          </div>

          {/* Screenshots */}
          {project.screenshots.length > 0 && (
            <div style={{ marginTop: 56 }}>
              <h2 style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 700, color: "white", marginBottom: 24 }}>Screenshots</h2>
              <div style={{ borderRadius: 18, overflow: "hidden", marginBottom: 14, aspectRatio: "16/9", position: "relative", background: "rgba(10,22,40,0.7)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <Image src={project.screenshots[activeScreenshot]} alt={`${project.companyName} screenshot`} fill style={{ objectFit: "contain" }} />
              </div>
              {project.screenshots.length > 1 && (
                <div style={{ display: "flex", gap: 10 }}>
                  {project.screenshots.map((src, i) => (
                    <button key={i} onClick={() => setActiveScreenshot(i)}
                      style={{
                        width: 72, height: 50, borderRadius: 8, overflow: "hidden", border: "none", cursor: "pointer",
                        outline: i === activeScreenshot ? "2px solid #0066FF" : "2px solid transparent",
                        padding: 0, transition: "outline 0.15s",
                      }}>
                      <Image src={src} alt={`thumb-${i}`} width={72} height={50} style={{ objectFit: "cover" }} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Features + Review */}
          <div style={{ display: "grid", gap: 28, marginTop: 48 }} className="detail-bottom">

            {/* Features */}
            <div className="glass" style={{ borderRadius: 18, padding: "28px" }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "white", marginBottom: 18 }}>Key Features</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }} className="features-grid">
                {project.features.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#C4D0E0" }}>
                    <span style={{ color: "#00AAFF", flexShrink: 0, fontSize: 16 }}>✓</span>
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Full review */}
            <div className="glass" style={{ borderRadius: 18, padding: "28px" }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "white", marginBottom: 18 }}>Client Review</h2>
              <div style={{ marginBottom: 16 }}>
                <Stars rating={project.rating} />
              </div>
              <p style={{ fontSize: 15, color: "#8A9BB8", lineHeight: 1.8, fontStyle: "italic" }}>
                "{project.review}"
              </p>
              <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 38, height: 38, borderRadius: 10,
                  background: "linear-gradient(135deg, #0066FF, #00AAFF)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 800, fontSize: 13, color: "white",
                }}>
                  {project.clientName.split(" ").map((w) => w[0]).join("").toUpperCase()}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "white" }}>{project.clientName}</div>
                  <div style={{ fontSize: 12, color: "#475569" }}>{project.companyName} · {project.location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div style={{ marginTop: 64 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
                <h2 style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", fontWeight: 700, color: "white" }}>Related Projects</h2>
                <Link href="/clients" style={{ fontSize: 13, color: "#00AAFF", textDecoration: "none", fontWeight: 600 }}>View all →</Link>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="related-grid">
                {related.map((r) => <RelatedCard key={r.id} project={r} />)}
              </div>
            </div>
          )}
        </div>
      </section>

      <style>{`
        .detail-grid { grid-template-columns: 1fr 1fr; }
        .detail-bottom { grid-template-columns: 1fr 1fr; }
        .related-grid { grid-template-columns: repeat(3,1fr) !important; }
        .features-grid { grid-template-columns: repeat(2,1fr) !important; }
        @media (max-width: 900px) {
          .detail-grid { grid-template-columns: 1fr !important; }
          .detail-bottom { grid-template-columns: 1fr !important; }
          .related-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 580px) {
          .related-grid { grid-template-columns: 1fr !important; }
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
