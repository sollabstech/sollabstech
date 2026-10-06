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
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
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
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  );
}
function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  );
}

// ─── Config ───────────────────────────────────────────────────────────────────

const SERVICE_CONFIG: Record<ServiceType, { label: string; color: string; bg: string; border: string }> = {
  mobile:    { label: "Mobile App",      color: "#00AAFF", bg: "rgba(0,170,255,0.1)",   border: "rgba(0,170,255,0.25)" },
  website:   { label: "Website",         color: "#22C55E", bg: "rgba(34,197,94,0.1)",   border: "rgba(34,197,94,0.25)" },
  windows:   { label: "Windows App",     color: "#A855F7", bg: "rgba(168,85,247,0.1)",  border: "rgba(168,85,247,0.25)" },
  custom:    { label: "Custom Software", color: "#F59E0B", bg: "rgba(245,158,11,0.1)",  border: "rgba(245,158,11,0.25)" },
  ecommerce: { label: "E-Commerce",      color: "#F97316", bg: "rgba(249,115,22,0.1)",  border: "rgba(249,115,22,0.25)" },
  admin:     { label: "Admin Panel",     color: "#8B5CF6", bg: "rgba(139,92,246,0.1)",  border: "rgba(139,92,246,0.25)" },
  vendor:    { label: "Vendor Website",  color: "#10B981", bg: "rgba(16,185,129,0.1)",  border: "rgba(16,185,129,0.25)" },
};

const LINK_CONFIG = {
  playstore: { label: "Get it on Google Play",  color: "#34D399", bg: "rgba(52,211,153,0.08)",  border: "rgba(52,211,153,0.25)",  Icon: PlayStoreIcon },
  appstore:  { label: "Download on App Store",  color: "#60A5FA", bg: "rgba(96,165,250,0.08)",  border: "rgba(96,165,250,0.25)",  Icon: AppStoreIcon },
  website:   { label: "Visit Website",          color: "#00AAFF", bg: "rgba(0,170,255,0.08)",   border: "rgba(0,170,255,0.25)",   Icon: GlobeIcon },
  windows:   { label: "Get for Windows",        color: "#A78BFA", bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.25)", Icon: WindowsIcon },
  other:     { label: "Private Project",        color: "#475569", bg: "rgba(71,85,105,0.08)",   border: "rgba(71,85,105,0.2)",    Icon: LockIcon },
};

// ─── Reveal helper ────────────────────────────────────────────────────────────

function revealAnim(delay = 0): React.CSSProperties {
  return { animation: `fadeInUp 0.55s cubic-bezier(0.4,0,0.2,1) ${delay}s both` };
}

// ─── Stars ────────────────────────────────────────────────────────────────────

function Stars({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24"
          fill={i <= rating ? "#F59E0B" : "rgba(255,255,255,0.1)"}
          style={{ filter: i <= rating ? "drop-shadow(0 0 4px rgba(245,158,11,0.6))" : "none" }}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

// ─── ClientLogo ───────────────────────────────────────────────────────────────

function ClientLogo({ project }: { project: ClientProject }) {
  const initials = project.companyName.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  if (project.logo) {
    return (
      <div style={{
        width: 80, height: 80, borderRadius: 20, flexShrink: 0, overflow: "hidden",
        background: project.logoBackground === "dark" ? "#1E293B" : project.logoBackground === "white" ? "white" : "rgba(255,255,255,0.05)",
        border: "2px solid rgba(255,255,255,0.12)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
        display: "flex", alignItems: "center", justifyContent: "center", padding: 6,
      }}>
        <Image src={project.logo} alt={project.companyName} width={80} height={80} style={{ objectFit: "contain", width: "100%", height: "100%" }} />
      </div>
    );
  }
  return (
    <div style={{
      width: 80, height: 80, borderRadius: 20, flexShrink: 0,
      background: "linear-gradient(135deg, #0066FF, #00AAFF)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontWeight: 900, fontSize: 26, color: "white",
      border: "2px solid rgba(0,102,255,0.4)",
      boxShadow: "0 8px 32px rgba(0,102,255,0.35)",
    }}>{initials}</div>
  );
}

// ─── Meta chip ────────────────────────────────────────────────────────────────

function MetaChip({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 7,
      padding: "8px 14px", borderRadius: 10,
      background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
      fontSize: 13, color: "#8A9BB8", fontWeight: 500,
    }}>
      {icon}<span>{text}</span>
    </div>
  );
}

// ─── Related card ─────────────────────────────────────────────────────────────

function RelatedCard({ project, index }: { project: ClientProject; index: number }) {
  const [hovered, setHovered] = useState(false);
  const primaryService = project.serviceTypes[0];
  const primaryColor = SERVICE_CONFIG[primaryService]?.color ?? "#0066FF";
  const initials = project.companyName.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();

  return (
    <div style={revealAnim(index * 0.08)}>
      <Link href={`/clients/${project.slug}`} style={{ textDecoration: "none" }}>
        <article
          style={{
            borderRadius: 18, background: "rgba(10,22,40,0.8)",
            border: `1px solid ${hovered ? `${primaryColor}40` : "rgba(255,255,255,0.07)"}`,
            padding: "20px",
            transform: hovered ? "translateY(-4px)" : "translateY(0)",
            boxShadow: hovered ? `0 16px 48px rgba(0,0,0,0.4), 0 0 0 1px ${primaryColor}18` : "0 4px 16px rgba(0,0,0,0.2)",
            transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
            overflow: "hidden",
            position: "relative",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${primaryColor}, transparent)`, opacity: hovered ? 1 : 0, transition: "opacity 0.25s" }} />
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
            <div style={{
              width: 42, height: 42, borderRadius: 11, flexShrink: 0,
              background: "linear-gradient(135deg, #0066FF, #00AAFF)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 800, fontSize: 13, color: "white",
            }}>{initials}</div>
            <div>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: hovered ? primaryColor : "white", transition: "color 0.2s" }}>{project.companyName}</h3>
              <p style={{ fontSize: 11, color: "#3D5068" }}>{project.location}</p>
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
          <p style={{ fontSize: 12, color: "#6B7A94", lineHeight: 1.55, marginBottom: 10 }}>
            {project.review.slice(0, 80)}&hellip;
          </p>
          <span style={{ fontSize: 12, color: primaryColor, fontWeight: 600 }}>View project →</span>
        </article>
      </Link>
    </div>
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
  const [screenshotAnimating, setScreenshotAnimating] = useState(false);

  const primaryService = project.serviceTypes[0];
  const primaryColor = SERVICE_CONFIG[primaryService]?.color ?? "#0066FF";

  function switchScreenshot(i: number) {
    if (i === activeScreenshot || screenshotAnimating) return;
    setScreenshotAnimating(true);
    setTimeout(() => {
      setActiveScreenshot(i);
      setScreenshotAnimating(false);
    }, 220);
  }

  return (
    <>
      {/* Breadcrumb */}
      <div style={{ paddingTop: 92, paddingLeft: 24, paddingRight: 24, paddingBottom: 0 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <nav style={{ display: "flex", gap: 6, alignItems: "center", fontSize: 13, color: "#3D5068", flexWrap: "wrap" }}>
            <Link href="/" style={{ color: "#3D5068", textDecoration: "none" }} className="breadcrumb-link">Home</Link>
            <span>›</span>
            <Link href="/clients" style={{ color: "#3D5068", textDecoration: "none" }} className="breadcrumb-link">Clients</Link>
            <span>›</span>
            <span style={{ color: "#8A9BB8" }}>{project.companyName}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section style={{ padding: "28px 24px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="detail-grid">

            {/* ── Left column ── */}
            <div style={revealAnim(0)}>

              {/* Logo + name */}
              <div style={{
                display: "flex", alignItems: "flex-start", gap: 22, marginBottom: 28,
                padding: "28px", borderRadius: 22,
                background: "rgba(10,22,40,0.7)", border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: `0 0 80px ${primaryColor}0a`,
                position: "relative", overflow: "hidden",
              }}>
                {/* background glow */}
                <div style={{
                  position: "absolute", top: -40, left: -40, width: 180, height: 180,
                  borderRadius: "50%", background: `radial-gradient(circle, ${primaryColor}18 0%, transparent 70%)`,
                  pointerEvents: "none",
                }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <ClientLogo project={project} />
                </div>
                <div style={{ position: "relative", zIndex: 1, flex: 1 }}>
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
                  <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 900, color: "white", lineHeight: 1.15, marginBottom: 6 }}>
                    {project.companyName}
                  </h1>
                  <p style={{ fontSize: 14, color: "#475569", marginBottom: 14 }}>{project.clientName}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <Stars rating={project.rating} />
                    <span style={{ fontSize: 13, color: "#64748B", fontWeight: 600 }}>{project.rating}.0 / 5.0</span>
                  </div>
                </div>
              </div>

              {/* Meta chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
                <MetaChip
                  icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5A7090" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>}
                  text={project.location}
                />
                <MetaChip
                  icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5A7090" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
                  text={project.duration}
                />
                <MetaChip
                  icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5A7090" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>}
                  text={`Completed ${formatCompletedDate(project.completedDate)}`}
                />
              </div>

              {/* About */}
              <div className="glass" style={{ borderRadius: 18, padding: "24px 26px" }}>
                <h2 style={{ fontSize: 16, fontWeight: 700, color: "white", marginBottom: 14 }}>About this project</h2>
                <p style={{ fontSize: 14, color: "#8A9BB8", lineHeight: 1.85 }}>{project.description}</p>
              </div>
            </div>

            {/* ── Right column (sticky sidebar) ── */}
            <div style={revealAnim(0.1)}>
              <div className="sticky-sidebar">

                {/* Project links */}
                <div className="glass" style={{ borderRadius: 18, padding: "22px 24px", marginBottom: 16 }}>
                  <h2 style={{ fontSize: 15, fontWeight: 700, color: "white", marginBottom: 16 }}>Project Links</h2>
                  {project.links.length === 0 ? (
                    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 16px", borderRadius: 12, background: "rgba(71,85,105,0.08)", border: "1px solid rgba(71,85,105,0.2)" }}>
                      <span style={{ color: "#475569" }}><LockIcon /></span>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: "#475569" }}>Private Project</div>
                        <div style={{ fontSize: 11, color: "#334155" }}>Internal / custom system, not publicly accessible.</div>
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
                            className="link-btn"
                            style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 18px", borderRadius: 12, color: cfg.color, background: cfg.bg, border: `1px solid ${cfg.border}`, textDecoration: "none", fontWeight: 700, fontSize: 14, transition: "opacity 0.15s, transform 0.15s" }}
                            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.82"; e.currentTarget.style.transform = "translateX(3px)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateX(0)"; }}
                          >
                            <Icon />
                            {cfg.label}
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: "auto", opacity: 0.45 }}>
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                            </svg>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Tech stack */}
                <div className="glass" style={{ borderRadius: 18, padding: "22px 24px", marginBottom: 16 }}>
                  <h2 style={{ fontSize: 15, fontWeight: 700, color: "white", marginBottom: 14 }}>Tech Stack</h2>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                    {project.techStack.map((t) => (
                      <span key={t} style={{ fontSize: 12, fontWeight: 600, padding: "5px 13px", borderRadius: 8, background: `${primaryColor}0d`, border: `1px solid ${primaryColor}22`, color: "#8A9BB8" }}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div style={{
                  borderRadius: 18, padding: "24px", textAlign: "center",
                  background: `linear-gradient(135deg, ${primaryColor}12, ${primaryColor}06)`,
                  border: `1px solid ${primaryColor}28`,
                }}>
                  <p style={{ fontSize: 14, color: "#8A9BB8", marginBottom: 16, lineHeight: 1.65 }}>
                    Want something similar for your business?
                  </p>
                  <Link href="/contact" className="btn-primary" style={{ fontSize: 14, padding: "12px 24px", justifyContent: "center" }}>
                    Start a Similar Project →
                  </Link>
                </div>

              </div>
            </div>
          </div>

          {/* ── Screenshots ── */}
          {project.screenshots.length > 0 && (
            <div style={{ ...revealAnim(0.2), marginTop: 52 }}>
              <h2 style={{ fontSize: "clamp(1.1rem,2vw,1.4rem)", fontWeight: 700, color: "white", marginBottom: 20 }}>Screenshots</h2>
              <div style={{
                borderRadius: 20, overflow: "hidden", marginBottom: 14,
                aspectRatio: "16/9", position: "relative",
                background: "rgba(10,22,40,0.7)", border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
              }}>
                <Image
                  src={project.screenshots[activeScreenshot]}
                  alt={`${project.companyName} screenshot`}
                  fill
                  style={{ objectFit: "contain", opacity: screenshotAnimating ? 0 : 1, transition: "opacity 0.22s ease" }}
                />
                {/* Nav arrows */}
                {project.screenshots.length > 1 && (
                  <>
                    <button onClick={() => switchScreenshot((activeScreenshot - 1 + project.screenshots.length) % project.screenshots.length)}
                      className="screenshot-arrow" style={{ left: 12 }}>
                      <ChevronLeft />
                    </button>
                    <button onClick={() => switchScreenshot((activeScreenshot + 1) % project.screenshots.length)}
                      className="screenshot-arrow" style={{ right: 12 }}>
                      <ChevronRight />
                    </button>
                  </>
                )}
                {/* Dot indicators */}
                {project.screenshots.length > 1 && (
                  <div style={{ position: "absolute", bottom: 14, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6 }}>
                    {project.screenshots.map((_, i) => (
                      <button key={i} onClick={() => switchScreenshot(i)}
                        style={{
                          width: i === activeScreenshot ? 20 : 6, height: 6, borderRadius: 3, border: "none", cursor: "pointer",
                          background: i === activeScreenshot ? primaryColor : "rgba(255,255,255,0.3)",
                          transition: "all 0.25s ease", padding: 0,
                        }} />
                    ))}
                  </div>
                )}
              </div>
              {/* Thumbnails */}
              {project.screenshots.length > 1 && (
                <div style={{ display: "flex", gap: 10, overflowX: "auto" }} className="hide-scrollbar">
                  {project.screenshots.map((src, i) => (
                    <button key={i} onClick={() => switchScreenshot(i)}
                      style={{
                        width: 80, height: 54, borderRadius: 10, overflow: "hidden", border: "none", cursor: "pointer",
                        flexShrink: 0, padding: 0,
                        outline: i === activeScreenshot ? `2px solid ${primaryColor}` : "2px solid transparent",
                        opacity: i === activeScreenshot ? 1 : 0.5,
                        transition: "outline 0.2s, opacity 0.2s",
                      }}>
                      <Image src={src} alt={`thumb-${i}`} width={80} height={54} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ── Features + Review ── */}
          <div style={{ display: "grid", gap: 24, marginTop: 40 }} className="detail-bottom">

            {/* Features */}
            <div style={revealAnim(0.25)}>
              <div className="glass" style={{ borderRadius: 20, padding: "28px 30px", height: "100%" }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: "white", marginBottom: 20 }}>Key Features</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {project.features.map((f, i) => (
                    <div key={f}
                      style={{
                        display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "#C4D0E0",
                        opacity: 1, animation: `featureIn 0.4s ease ${i * 0.06}s both`,
                      }}>
                      <span style={{
                        width: 22, height: 22, borderRadius: 6, flexShrink: 0,
                        background: `${primaryColor}18`, border: `1px solid ${primaryColor}35`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: primaryColor, fontSize: 13,
                      }}>✓</span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Review */}
            <div style={revealAnim(0.32)}>
              <div className="glass" style={{ borderRadius: 20, padding: "28px 30px", height: "100%", position: "relative", overflow: "hidden" }}>
                {/* Big quote mark */}
                <div style={{
                  position: "absolute", top: 12, right: 20, fontSize: 80, color: primaryColor,
                  opacity: 0.07, fontFamily: "Georgia, serif", lineHeight: 1, pointerEvents: "none",
                  userSelect: "none",
                }}>"</div>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: "white", marginBottom: 16 }}>Client Review</h2>
                <Stars rating={project.rating} size={18} />
                <p style={{
                  fontSize: 15, color: "#8A9BB8", lineHeight: 1.85, fontStyle: "italic",
                  margin: "16px 0 22px", position: "relative",
                }}>
                  &ldquo;{project.review}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}aa)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 800, fontSize: 14, color: "white",
                  }}>
                    {project.clientName.split(" ").map((w) => w[0]).join("").toUpperCase()}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "white" }}>{project.clientName}</div>
                    <div style={{ fontSize: 12, color: "#3D5068" }}>{project.companyName} · {project.location}</div>
                  </div>
                  <div style={{ marginLeft: "auto" }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#F59E0B" }}>{project.rating}.0 / 5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Related ── */}
          {related.length > 0 && (
            <div style={{ ...revealAnim(0.15), marginTop: 64 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
                <h2 style={{ fontSize: "clamp(1.1rem,2.5vw,1.5rem)", fontWeight: 700, color: "white" }}>Related Projects</h2>
                <Link href="/clients" style={{ fontSize: 13, color: "#00AAFF", textDecoration: "none", fontWeight: 600 }}>View all →</Link>
              </div>
              <div className="related-grid">
                {related.map((r, i) => <RelatedCard key={r.id} project={r} index={i} />)}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Bottom spacer */}
      <div style={{ height: 80 }} />

      <style>{`
        .detail-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 28px;
          align-items: start;
        }
        .sticky-sidebar { position: sticky; top: 88px; }
        .detail-bottom { grid-template-columns: 1fr 1fr; }
        .related-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }

        .breadcrumb-link:hover { color: #8A9BB8 !important; }

        .screenshot-arrow {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 36px; height: 36px; border-radius: 50%; border: none; cursor: pointer;
          background: rgba(0,0,0,0.55); color: white; display: flex; align-items: center; justify-content: center;
          transition: background 0.2s, transform 0.2s;
          backdrop-filter: blur(4px);
        }
        .screenshot-arrow:hover { background: rgba(0,0,0,0.82); transform: translateY(-50%) scale(1.08); }

        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        @media (max-width: 1100px) {
          .detail-grid { grid-template-columns: 1fr !important; }
          .sticky-sidebar { position: static !important; }
        }
        @media (max-width: 900px) {
          .detail-bottom { grid-template-columns: 1fr !important; }
          .related-grid  { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 560px) {
          .related-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
