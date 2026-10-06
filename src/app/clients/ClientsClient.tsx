"use client";

import { useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  clients,
  getLinkType,
  formatCompletedDate,
  type ClientProject,
  type ServiceType,
} from "@/lib/clients";

// ─── Icons ────────────────────────────────────────────────────────────────────

function PlayStoreIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.18 23.76c.37.21.8.23 1.19.08l12.53-7.22L13.5 13.2 3.18 23.76zM21.5 10.34l-2.8-1.62L13.5 12l5.2 3.28 2.8-1.62c.8-.46.8-1.44 0-1.9V10.34zM4.37.24A1.49 1.49 0 003.18.24C2.46.64 2 1.4 2 2.28v19.44l11.5-11.5L4.37.24zM16.7 7.38l-3.2-1.84L4.37.24l9.13 12.96 3.2-5.82z"/>
    </svg>
  );
}

function AppStoreIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}

function WindowsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 3.449L9.75 2.1v9.451H0V3.449zm10.949-1.51L24 0v11.4H10.949V1.939zM0 12.6h9.75v9.451L0 20.699V12.6zm10.949 0H24V24l-13.051-1.939V12.6z"/>
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  );
}

// ─── Config ───────────────────────────────────────────────────────────────────

const SERVICE_TABS = [
  { key: "all", label: "All Projects" },
  { key: "mobile", label: "Mobile Apps" },
  { key: "website", label: "Websites" },
  { key: "windows", label: "Windows Apps" },
  { key: "custom", label: "Custom Software" },
];

const SERVICE_CONFIG: Record<ServiceType, { label: string; color: string; bg: string; border: string }> = {
  mobile: { label: "Mobile App", color: "#00AAFF", bg: "rgba(0,170,255,0.1)", border: "rgba(0,170,255,0.25)" },
  website: { label: "Website", color: "#22C55E", bg: "rgba(34,197,94,0.1)", border: "rgba(34,197,94,0.25)" },
  windows: { label: "Windows App", color: "#A855F7", bg: "rgba(168,85,247,0.1)", border: "rgba(168,85,247,0.25)" },
  custom: { label: "Custom Software", color: "#F59E0B", bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.25)" },
};

const LINK_CONFIG = {
  playstore: { label: "Google Play", color: "#34D399", bg: "rgba(52,211,153,0.08)", border: "rgba(52,211,153,0.2)", Icon: PlayStoreIcon },
  appstore:  { label: "App Store",   color: "#60A5FA", bg: "rgba(96,165,250,0.08)",  border: "rgba(96,165,250,0.2)",  Icon: AppStoreIcon },
  website:   { label: "Visit Site",  color: "#00AAFF", bg: "rgba(0,170,255,0.08)",   border: "rgba(0,170,255,0.2)",   Icon: GlobeIcon },
  windows:   { label: "For Windows", color: "#A78BFA", bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.2)", Icon: WindowsIcon },
  other:     { label: "Private",     color: "#475569", bg: "rgba(71,85,105,0.08)",   border: "rgba(71,85,105,0.2)",   Icon: LockIcon },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function Stars({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i <= rating ? "#F59E0B" : "rgba(255,255,255,0.1)"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
      <span style={{ fontSize: 11, color: "#64748B", marginLeft: 4, fontWeight: 600 }}>{rating}.0</span>
    </div>
  );
}

function Avatar({ companyName }: { companyName: string }) {
  const initials = companyName.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  return (
    <div style={{
      width: 46, height: 46, borderRadius: 12, flexShrink: 0,
      background: "linear-gradient(135deg, #0066FF, #00AAFF)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontWeight: 800, fontSize: 15, color: "white",
      border: "1px solid rgba(0,102,255,0.3)",
    }}>{initials}</div>
  );
}

function ClientCard({ project }: { project: ClientProject }) {
  const [expanded, setExpanded] = useState(false);
  const SHORT = 120;
  const isLong = project.review.length > SHORT;

  return (
    <article style={{
      borderRadius: 18, background: "rgba(10,22,40,0.7)",
      border: "1px solid rgba(255,255,255,0.07)",
      display: "flex", flexDirection: "column",
      transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
    }}
      className="card-hover"
    >
      {/* Top */}
      <div style={{ padding: "22px 22px 16px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 14 }}>
          <Avatar companyName={project.companyName} />
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap", justifyContent: "flex-end" }}>
            {project.serviceTypes.map((s) => {
              const cfg = SERVICE_CONFIG[s];
              return (
                <span key={s} style={{
                  fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 100,
                  color: cfg.color, background: cfg.bg, border: `1px solid ${cfg.border}`,
                  letterSpacing: 0.3,
                }}>{cfg.label}</span>
              );
            })}
          </div>
        </div>

        <div style={{ marginBottom: 4 }}>
          <Link href={`/clients/${project.slug}`} style={{ textDecoration: "none" }}>
            <h3 style={{ fontSize: 16, fontWeight: 800, color: "white", marginBottom: 2, lineHeight: 1.3 }}>
              {project.companyName}
            </h3>
          </Link>
          <p style={{ fontSize: 12, color: "#475569", fontWeight: 500 }}>{project.clientName}</p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 14 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span style={{ fontSize: 12, color: "#475569" }}>{project.location}</span>
        </div>

        {/* Rating */}
        <div style={{ marginBottom: 12 }}>
          <Stars rating={project.rating} />
        </div>

        {/* Review */}
        <p style={{ fontSize: 13, color: "#8A9BB8", lineHeight: 1.65, marginBottom: 4 }}>
          "{expanded ? project.review : project.review.slice(0, SHORT)}
          {!expanded && isLong ? "…" : ""}"
        </p>
        {isLong && (
          <button onClick={() => setExpanded(!expanded)}
            style={{ fontSize: 12, color: "#00AAFF", background: "none", border: "none", cursor: "pointer", padding: 0, fontWeight: 600 }}>
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>

      {/* Links */}
      <div style={{ padding: "0 22px 16px", display: "flex", flexWrap: "wrap", gap: 7 }}>
        {project.links.length === 0 ? (
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 11, fontWeight: 600, padding: "5px 12px", borderRadius: 8,
            color: LINK_CONFIG.other.color, background: LINK_CONFIG.other.bg,
            border: `1px solid ${LINK_CONFIG.other.border}`,
          }}>
            <LockIcon /> Private Project
          </span>
        ) : project.links.map((link, i) => {
          const type = getLinkType(link);
          const cfg = LINK_CONFIG[type] ?? LINK_CONFIG.website;
          const Icon = cfg.Icon;
          return (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: 11, fontWeight: 600, padding: "5px 12px", borderRadius: 8,
                color: cfg.color, background: cfg.bg, border: `1px solid ${cfg.border}`,
                textDecoration: "none", transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <Icon />{cfg.label}
            </a>
          );
        })}
      </div>

      {/* Footer */}
      <div style={{
        padding: "14px 22px", marginTop: "auto",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10,
      }}>
        <div>
          <div style={{ fontSize: 11, color: "#334155", marginBottom: 6 }}>
            {project.duration} · {formatCompletedDate(project.completedDate)}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
            {project.features.slice(0, 4).map((f) => (
              <span key={f} style={{
                fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 6,
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)",
                color: "#475569",
              }}>{f}</span>
            ))}
            {project.features.length > 4 && (
              <span style={{ fontSize: 10, color: "#334155", padding: "2px 6px" }}>
                +{project.features.length - 4} more
              </span>
            )}
          </div>
        </div>
        <Link href={`/clients/${project.slug}`}
          style={{ fontSize: 12, color: "#00AAFF", textDecoration: "none", fontWeight: 700, flexShrink: 0 }}>
          Details →
        </Link>
      </div>
    </article>
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

  const filtered = useMemo(() => {
    let list = activeService === "all"
      ? [...clients]
      : clients.filter((c) => c.serviceTypes.includes(activeService as ServiceType));

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (c) =>
          c.clientName.toLowerCase().includes(q) ||
          c.companyName.toLowerCase().includes(q) ||
          c.location.toLowerCase().includes(q)
      );
    }

    return list.sort((a, b) => new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime());
  }, [activeService, search]);

  function setTab(key: string) {
    setActiveService(key);
    const params = new URLSearchParams(searchParams.toString());
    if (key === "all") params.delete("service");
    else params.set("service", key);
    router.replace(`/clients${params.size ? `?${params}` : ""}`, { scroll: false });
  }

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 56, paddingLeft: 24, paddingRight: 24, textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <span className="section-tag" style={{ display: "inline-flex", marginBottom: 16 }}>✦ Our Work</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, marginBottom: 16, lineHeight: 1.2 }}>
            Clients &amp; <span className="gradient-text">Projects</span>
          </h1>
          <p style={{ color: "#6B7A94", fontSize: 17, lineHeight: 1.7 }}>
            Real projects. Real reviews. Mobile apps, websites, Windows software, and custom solutions delivered across India.
          </p>
        </div>
      </section>

      {/* Filter + Search */}
      <section style={{ padding: "0 24px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
            {/* Tabs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {SERVICE_TABS.map((tab) => (
                <button key={tab.key} onClick={() => setTab(tab.key)}
                  style={{
                    padding: "8px 18px", borderRadius: 100, fontSize: 13, fontWeight: 600,
                    cursor: "pointer", transition: "all 0.2s",
                    background: activeService === tab.key ? "linear-gradient(135deg,#0066FF,#00AAFF)" : "rgba(255,255,255,0.04)",
                    color: activeService === tab.key ? "white" : "#64748B",
                    border: activeService === tab.key ? "1px solid transparent" : "1px solid rgba(255,255,255,0.08)",
                    boxShadow: activeService === tab.key ? "0 4px 12px rgba(0,102,255,0.3)" : "none",
                  }}>
                  {tab.label}
                </button>
              ))}
            </div>
            {/* Search */}
            <input
              placeholder="Search by client, company or city…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ minWidth: 240, maxWidth: 320 }}
            />
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 24px", color: "#334155" }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>🔍</div>
              <p style={{ fontSize: 15 }}>No projects match your search.</p>
              <button onClick={() => { setSearch(""); setTab("all"); }}
                style={{ marginTop: 14, fontSize: 13, color: "#00AAFF", background: "none", border: "none", cursor: "pointer", fontWeight: 600 }}>
                Clear filters
              </button>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}
              className="clients-grid">
              {filtered.map((p) => <ClientCard key={p.id} project={p} />)}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "0 24px 100px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center",
          background: "linear-gradient(135deg, rgba(0,102,255,0.1), rgba(0,170,255,0.06))",
          border: "1px solid rgba(0,102,255,0.2)", borderRadius: 24, padding: "48px 36px" }}>
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 800, color: "white", marginBottom: 12 }}>
            Ready to build your project?
          </h2>
          <p style={{ color: "#6B7A94", marginBottom: 28, lineHeight: 1.7 }}>
            Get a free quote in 2 hours. We build mobile apps, websites, Windows software, and custom ERP systems.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: 15, padding: "13px 32px" }}>
            Get a Free Quote →
          </Link>
        </div>
      </section>

      <style>{`
        .clients-grid { grid-template-columns: repeat(3,1fr) !important; }
        @media (max-width: 1024px) { .clients-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 640px)  { .clients-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
