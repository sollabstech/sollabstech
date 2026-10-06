"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  fetchAllClients,
  SEED_CLIENTS,
  getLinkType,
  formatCompletedDate,
  type ClientProject,
  type ServiceType,
} from "@/lib/clients";

// ─── Icons ────────────────────────────────────────────────────────────────────

function PlayStoreIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.18 23.76c.37.21.8.23 1.19.08l12.53-7.22L13.5 13.2 3.18 23.76zM21.5 10.34l-2.8-1.62L13.5 12l5.2 3.28 2.8-1.62c.8-.46.8-1.44 0-1.9V10.34zM4.37.24A1.49 1.49 0 003.18.24C2.46.64 2 1.4 2 2.28v19.44l11.5-11.5L4.37.24zM16.7 7.38l-3.2-1.84L4.37.24l9.13 12.96 3.2-5.82z"/>
    </svg>
  );
}
function AppStoreIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );
}
function GlobeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}
function WindowsIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 3.449L9.75 2.1v9.451H0V3.449zm10.949-1.51L24 0v11.4H10.949V1.939zM0 12.6h9.75v9.451L0 20.699V12.6zm10.949 0H24V24l-13.051-1.939V12.6z"/>
    </svg>
  );
}
function LockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  );
}

// ─── Config ───────────────────────────────────────────────────────────────────

const SERVICE_TABS = [
  { key: "all",       label: "All Projects",    icon: "◈" },
  { key: "mobile",    label: "Mobile Apps",     icon: "📱" },
  { key: "website",   label: "Websites",        icon: "🌐" },
  { key: "windows",   label: "Windows Apps",    icon: "🖥️" },
  { key: "custom",    label: "Custom Software", icon: "⚙️" },
  { key: "ecommerce", label: "E-Commerce",      icon: "🛒" },
  { key: "admin",     label: "Admin Panels",    icon: "🔧" },
  { key: "vendor",    label: "Vendor Websites", icon: "🏪" },
];

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
  playstore: { label: "Google Play", color: "#34D399", bg: "rgba(52,211,153,0.08)",  border: "rgba(52,211,153,0.2)",  Icon: PlayStoreIcon },
  appstore:  { label: "App Store",   color: "#60A5FA", bg: "rgba(96,165,250,0.08)",  border: "rgba(96,165,250,0.2)",  Icon: AppStoreIcon },
  website:   { label: "Visit Site",  color: "#00AAFF", bg: "rgba(0,170,255,0.08)",   border: "rgba(0,170,255,0.2)",   Icon: GlobeIcon },
  windows:   { label: "For Windows", color: "#A78BFA", bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.2)", Icon: WindowsIcon },
  other:     { label: "Private",     color: "#475569", bg: "rgba(71,85,105,0.08)",   border: "rgba(71,85,105,0.2)",   Icon: LockIcon },
};

// ─── Reveal helper ────────────────────────────────────────────────────────────

function revealAnim(delay = 0): React.CSSProperties {
  return { animation: `fadeInUp 0.55s cubic-bezier(0.4,0,0.2,1) ${delay}s both` };
}

// ─── Stars ────────────────────────────────────────────────────────────────────

function Stars({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24"
          fill={i <= rating ? "#F59E0B" : "rgba(255,255,255,0.1)"}
          style={{ filter: i <= rating ? "drop-shadow(0 0 3px rgba(245,158,11,0.7))" : "none" }}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
      <span style={{ fontSize: 11, color: "#F59E0B", marginLeft: 4, fontWeight: 700 }}>{rating}.0</span>
    </div>
  );
}

// ─── ClientLogo ───────────────────────────────────────────────────────────────

function ClientLogo({ project, size = 48 }: { project: ClientProject; size?: number }) {
  const initials = project.companyName.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  if (project.logo) {
    return (
      <div style={{
        width: size, height: size, borderRadius: 13, flexShrink: 0, overflow: "hidden",
        background: project.logoBackground === "dark" ? "#1E293B" : project.logoBackground === "white" ? "white" : "transparent",
        border: "1px solid rgba(255,255,255,0.1)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <Image src={project.logo} alt={project.companyName} width={size} height={size} style={{ objectFit: "contain", width: "100%", height: "100%" }} />
      </div>
    );
  }
  return (
    <div style={{
      width: size, height: size, borderRadius: 13, flexShrink: 0,
      background: "linear-gradient(135deg, #0066FF, #00AAFF)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontWeight: 800, fontSize: Math.round(size * 0.32), color: "white",
      border: "1px solid rgba(0,102,255,0.3)",
      boxShadow: "0 4px 12px rgba(0,102,255,0.25)",
    }}>{initials}</div>
  );
}

// ─── ClientCard ───────────────────────────────────────────────────────────────

function ClientCard({ project, index }: { project: ClientProject; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const SHORT = 110;
  const isLong = project.review.length > SHORT;

  const primaryService = project.serviceTypes[0];
  const primaryCfg = SERVICE_CONFIG[primaryService];
  const primaryColor = primaryCfg?.color ?? "#0066FF";

  return (
    <div style={revealAnim(Math.min(index * 0.07, 0.35))}>
      <article
        style={{
          borderRadius: 20,
          background: hovered ? "rgba(14,26,48,0.95)" : "rgba(10,22,40,0.8)",
          border: `1px solid ${hovered ? `${primaryColor}45` : "rgba(255,255,255,0.07)"}`,
          boxShadow: hovered
            ? `0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px ${primaryColor}18, 0 0 48px ${primaryColor}0d`
            : "0 4px 20px rgba(0,0,0,0.25)",
          transform: hovered ? "translateY(-5px)" : "translateY(0)",
          transition: "transform 0.28s cubic-bezier(0.4,0,0.2,1), box-shadow 0.28s ease, border-color 0.28s ease, background 0.28s ease",
          display: "flex", flexDirection: "column",
          overflow: "hidden",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Top accent bar */}
        <div style={{
          height: 3,
          background: `linear-gradient(90deg, ${primaryColor}, ${primaryColor}60, transparent)`,
          opacity: hovered ? 1 : 0.5,
          transition: "opacity 0.28s ease",
        }} />

        {/* Header */}
        <div style={{ padding: "20px 22px 14px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 14 }}>
            <ClientLogo project={project} />
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap", justifyContent: "flex-end" }}>
              {project.serviceTypes.map((s) => {
                const cfg = SERVICE_CONFIG[s];
                return (
                  <span key={s} style={{
                    fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 100,
                    color: cfg.color, background: cfg.bg, border: `1px solid ${cfg.border}`,
                    letterSpacing: 0.2,
                  }}>{cfg.label}</span>
                );
              })}
            </div>
          </div>

          <Link href={`/clients/${project.slug}`} style={{ textDecoration: "none" }}>
            <h3 style={{
              fontSize: 16, fontWeight: 800, lineHeight: 1.2, marginBottom: 3,
              color: hovered ? primaryColor : "white",
              transition: "color 0.25s ease",
            }}>
              {project.companyName}
            </h3>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <span style={{ fontSize: 12, color: "#475569" }}>{project.clientName}</span>
            <span style={{ fontSize: 10, color: "#2D3E54" }}>·</span>
            <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#3D5068" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span style={{ fontSize: 11, color: "#3D5068" }}>{project.location}</span>
            </div>
          </div>

          <div style={{ marginBottom: 13 }}>
            <Stars rating={project.rating} />
          </div>

          <p style={{ fontSize: 13, color: "#7A8FA8", lineHeight: 1.68, marginBottom: 4 }}>
            &ldquo;{expanded ? project.review : project.review.slice(0, SHORT)}{!expanded && isLong ? "…" : ""}&rdquo;
          </p>
          {isLong && (
            <button
              onClick={(e) => { e.preventDefault(); setExpanded(!expanded); }}
              style={{ fontSize: 12, color: "#00AAFF", background: "none", border: "none", cursor: "pointer", padding: 0, fontWeight: 600 }}>
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>

        {/* Links */}
        <div style={{ padding: "0 22px 14px", display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.links.length === 0 ? (
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 600, padding: "5px 12px", borderRadius: 8, color: LINK_CONFIG.other.color, background: LINK_CONFIG.other.bg, border: `1px solid ${LINK_CONFIG.other.border}` }}>
              <LockIcon /> Private Project
            </span>
          ) : project.links.map((link, i) => {
            const type = getLinkType(link);
            const cfg = LINK_CONFIG[type] ?? LINK_CONFIG.website;
            const Icon = cfg.Icon;
            return (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, fontWeight: 600, padding: "5px 12px", borderRadius: 8, color: cfg.color, background: cfg.bg, border: `1px solid ${cfg.border}`, textDecoration: "none", transition: "opacity 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.72")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <Icon />{cfg.label}
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div style={{
          padding: "12px 22px 18px", marginTop: "auto",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10,
        }}>
          <div>
            <div style={{ fontSize: 11, color: "#2D3E54", marginBottom: 6 }}>
              {project.duration} · {formatCompletedDate(project.completedDate)}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {project.features.slice(0, 3).map((f) => (
                <span key={f} style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 6, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "#3D5068" }}>{f}</span>
              ))}
              {project.features.length > 3 && (
                <span style={{ fontSize: 10, color: "#2D3E54", padding: "2px 4px" }}>+{project.features.length - 3}</span>
              )}
            </div>
          </div>
          <Link href={`/clients/${project.slug}`}
            style={{
              display: "inline-flex", alignItems: "center", gap: 5,
              fontSize: 12, color: primaryColor, textDecoration: "none", fontWeight: 700, flexShrink: 0,
              padding: "7px 14px", borderRadius: 10,
              background: `${primaryColor}12`, border: `1px solid ${primaryColor}28`,
              transition: "background 0.2s",
            }}>
            Details →
          </Link>
        </div>
      </article>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function ClientsClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const serviceParam = searchParams.get("service") ?? "all";
  const [search, setSearch] = useState("");
  const [activeService, setActiveService] = useState(
    SERVICE_TABS.some((t) => t.key === serviceParam) ? serviceParam : "all"
  );
  const [allClients, setAllClients] = useState<ClientProject[]>(SEED_CLIENTS);


  useEffect(() => {
    fetchAllClients().then(setAllClients).catch(() => {});
  }, []);

  const filtered = useMemo(() => {
    let list = activeService === "all"
      ? [...allClients]
      : allClients.filter((c) => c.serviceTypes.includes(activeService as ServiceType));
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (c) => c.clientName.toLowerCase().includes(q) || c.companyName.toLowerCase().includes(q) || c.location.toLowerCase().includes(q)
      );
    }
    return list.sort((a, b) => new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime());
  }, [activeService, search, allClients]);

  // Unique cities count for stats
  const citiesCount = useMemo(() => new Set(allClients.map((c) => c.location.split(",")[0].trim())).size, [allClients]);

  function setTab(key: string) {
    setActiveService(key);
    const params = new URLSearchParams(searchParams.toString());
    if (key === "all") params.delete("service");
    else params.set("service", key);
    router.replace(`/clients${params.size ? `?${params}` : ""}`, { scroll: false });
  }

  return (
    <>
      {/* Spacer */}
      <div style={{ paddingTop: 80 }} />

      {/* Stats bar */}
      <div style={{ ...revealAnim(0), padding: "0 24px 36px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="stats-row">
            {[
              { value: `${allClients.length}+`, label: "Projects Delivered" },
              { value: `${citiesCount}+`,       label: "Cities Served" },
              { value: "5.0",                   label: "Avg Client Rating" },
              { value: "100%",                  label: "On-Time Delivery" },
            ].map((s, i) => (
              <div key={i} className="stat-item" style={{ animationDelay: `${i * 0.08}s` }}>
                <span className="stat-value gradient-text">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter + Search */}
      <section style={{ padding: "0 24px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Tabs row */}
          <div style={{ display: "flex", flexWrap: "nowrap", overflowX: "auto", gap: 8, marginBottom: 20, paddingBottom: 4 }} className="hide-scrollbar">
            {SERVICE_TABS.map((tab) => (
              <button key={tab.key} onClick={() => setTab(tab.key)}
                style={{
                  padding: "8px 18px", borderRadius: 100, fontSize: 13, fontWeight: 600,
                  cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0,
                  transition: "all 0.22s ease",
                  background: activeService === tab.key ? "linear-gradient(135deg,#0066FF,#00AAFF)" : "rgba(255,255,255,0.04)",
                  color: activeService === tab.key ? "white" : "#5A7090",
                  border: activeService === tab.key ? "1px solid transparent" : "1px solid rgba(255,255,255,0.08)",
                  boxShadow: activeService === tab.key ? "0 4px 16px rgba(0,102,255,0.35)" : "none",
                  transform: activeService === tab.key ? "scale(1.02)" : "scale(1)",
                }}>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search + result count */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 32, flexWrap: "wrap" }}>
            <div style={{ position: "relative", flexGrow: 1, maxWidth: 340 }}>
              <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#3D5068", pointerEvents: "none" }}>
                <SearchIcon />
              </span>
              <input
                placeholder="Search client, company or city…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ paddingLeft: 40, width: "100%" }}
              />
            </div>
            <p style={{ fontSize: 13, color: "#3D5068", flexShrink: 0 }}>
              {filtered.length === 0 ? "No results" : `${filtered.length} project${filtered.length !== 1 ? "s" : ""}`}
            </p>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 24px" }}>
              <div style={{ fontSize: 44, marginBottom: 16 }}>🔍</div>
              <p style={{ fontSize: 15, color: "#3D5068" }}>No projects match your search.</p>
              <button onClick={() => { setSearch(""); setTab("all"); }}
                style={{ marginTop: 14, fontSize: 13, color: "#00AAFF", background: "none", border: "none", cursor: "pointer", fontWeight: 600 }}>
                Clear filters
              </button>
            </div>
          ) : (
            <div style={revealAnim(0.1)} className="clients-grid">
              {filtered.map((p, i) => <ClientCard key={p.id} project={p} index={i} />)}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "0 24px 100px" }}>
        <div style={{
          ...revealAnim(0.1),
          maxWidth: 640, margin: "0 auto", textAlign: "center",
          background: "linear-gradient(135deg, rgba(0,102,255,0.12), rgba(0,170,255,0.06))",
          border: "1px solid rgba(0,102,255,0.22)", borderRadius: 24, padding: "52px 40px",
          boxShadow: "0 0 80px rgba(0,102,255,0.06)",
        }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🚀</div>
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 800, color: "white", marginBottom: 12 }}>
            Ready to build your project?
          </h2>
          <p style={{ color: "#6B7A94", marginBottom: 30, lineHeight: 1.75, fontSize: 15 }}>
            Get a free quote in 2 hours. We build mobile apps, websites, Windows software, and custom ERP systems.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: 15, padding: "14px 34px" }}>
            Get a Free Quote →
          </Link>
        </div>
      </section>

      <style>{`
        .clients-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) { .clients-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 640px)  { .clients-grid { grid-template-columns: 1fr !important; } }

        .stats-row {
          display: flex;
          gap: 0;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(10,22,40,0.6);
        }
        .stat-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px 16px;
          border-right: 1px solid rgba(255,255,255,0.06);
          animation: fadeInUp 0.55s cubic-bezier(0.4,0,0.2,1) both;
        }
        .stat-item:last-child { border-right: none; }
        .stat-value { font-size: clamp(1.3rem,2.5vw,1.7rem); font-weight: 900; }
        .stat-label { font-size: 12px; color: #475569; margin-top: 3px; font-weight: 500; text-align:center; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }

        @media (max-width: 640px) {
          .stats-row { flex-wrap: wrap; }
          .stat-item { flex-basis: 50%; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .stat-item:nth-child(2) { border-right: none; }
          .stat-item:nth-child(3), .stat-item:nth-child(4) { border-bottom: none; }
        }
      `}</style>
    </>
  );
}
