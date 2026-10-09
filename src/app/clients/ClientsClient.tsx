"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  fetchAllClients,
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

const STAT_ICONS = {
  projects: <path d="M3 7h18M3 12h18M3 17h12" />,
  cities: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>,
  rating: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>,
  services: <><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></>,
};

// ─── Config ───────────────────────────────────────────────────────────────────

const SERVICE_TABS: { key: "all" | ServiceType; label: string }[] = [
  { key: "all",       label: "All Projects" },
  { key: "mobile",    label: "Mobile Apps" },
  { key: "website",   label: "Websites" },
  { key: "windows",   label: "Windows Apps" },
  { key: "custom",    label: "Custom Software" },
  { key: "ecommerce", label: "E-Commerce" },
  { key: "admin",     label: "Admin Panels" },
  { key: "vendor",    label: "Vendor Websites" },
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
  other:     { label: "Private",     color: "#64748B", bg: "rgba(71,85,105,0.1)",    border: "rgba(71,85,105,0.25)",  Icon: LockIcon },
};

function revealAnim(delay = 0): React.CSSProperties {
  return { animation: `fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s both` };
}

function accentOf(p: ClientProject) {
  return SERVICE_CONFIG[p.serviceTypes[0]]?.color ?? "#0066FF";
}

// ─── CountUp ──────────────────────────────────────────────────────────────────

function CountUp({ to, decimals = 0, suffix = "" }: { to: number; decimals?: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const fromRef = useRef(0);

  useEffect(() => {
    const from = fromRef.current;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1400, 1);
      const v = from + (to - from) * (1 - Math.pow(1 - p, 3));
      fromRef.current = v;
      setValue(v);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);

  return <span aria-label={`${to.toFixed(decimals)}${suffix}`}>{value.toFixed(decimals)}{suffix}</span>;
}

// ─── Stars ────────────────────────────────────────────────────────────────────

function Stars({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24"
          fill={i <= rating ? "#F59E0B" : "rgba(255,255,255,0.1)"}
          style={{ filter: i <= rating ? "drop-shadow(0 0 3px rgba(245,158,11,0.6))" : "none" }}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
      <span style={{ fontSize: 12, color: "#F59E0B", marginLeft: 5, fontWeight: 700 }}>{rating.toFixed(1)}</span>
    </div>
  );
}

// ─── ClientLogo ───────────────────────────────────────────────────────────────

function ClientLogo({ project, size = 52 }: { project: ClientProject; size?: number }) {
  const initials = project.companyName.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  const accent = accentOf(project);
  const radius = Math.round(size * 0.28);
  if (project.logo) {
    return (
      <div style={{
        width: size, height: size, borderRadius: radius, flexShrink: 0, overflow: "hidden",
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
      width: size, height: size, borderRadius: radius, flexShrink: 0,
      background: `linear-gradient(135deg, ${accent}, ${accent}99)`,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontWeight: 800, fontSize: Math.round(size * 0.32), color: "white",
      boxShadow: `0 6px 18px ${accent}40, inset 0 1px 0 rgba(255,255,255,0.25)`,
    }}>{initials}</div>
  );
}

// ─── ClientCard ───────────────────────────────────────────────────────────────

function ClientCard({ project, index }: { project: ClientProject; index: number }) {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);
  const SHORT = 120;
  const isLong = project.review.length > SHORT;
  const accent = accentOf(project);
  const href = `/clients/${project.slug}`;

  function onMove(e: React.MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <div style={{ animation: `popIn 0.6s cubic-bezier(0.22,1,0.36,1) ${Math.min(index * 0.08, 0.48)}s both` }}>
      <article
        className="client-card"
        role="link"
        tabIndex={0}
        aria-label={`View ${project.companyName} project details`}
        onClick={() => router.push(href)}
        onKeyDown={(e) => { if (e.key === "Enter") router.push(href); }}
        onMouseMove={onMove}
        style={{ "--accent": accent, "--accent-soft": `${accent}55`, "--accent-faint": `${accent}1f` } as React.CSSProperties}
      >
        <div className="card-spotlight" aria-hidden />
        <div className="card-accent-bar" aria-hidden />

        <div style={{ padding: "22px 22px 16px", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 16 }}>
            <div className="card-logo"><ClientLogo project={project} /></div>
            <div style={{ minWidth: 0, flex: 1 }}>
              <h3 className="card-title">{project.companyName}</h3>
              <div style={{ fontSize: 12.5, color: "#64748B", marginBottom: 3 }}>{project.clientName}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11.5, color: "#475569" }}>
                <PinIcon /> {project.location}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
            {project.serviceTypes.map((s) => {
              const cfg = SERVICE_CONFIG[s];
              if (!cfg) return null;
              return (
                <span key={s} style={{
                  fontSize: 10.5, fontWeight: 700, padding: "3px 10px", borderRadius: 100,
                  color: cfg.color, background: cfg.bg, border: `1px solid ${cfg.border}`, letterSpacing: 0.2,
                }}>{cfg.label}</span>
              );
            })}
          </div>

          <div className="card-quote">
            <Stars rating={project.rating} />
            <p style={{ fontSize: 13.5, color: "#94A3B8", lineHeight: 1.7, marginTop: 8 }}>
              &ldquo;{expanded ? project.review : project.review.slice(0, SHORT).trimEnd()}{!expanded && isLong ? "…" : ""}&rdquo;
            </p>
            {isLong && (
              <button
                onClick={(e) => { e.stopPropagation(); setExpanded(!expanded); }}
                style={{ fontSize: 12, color: accent, background: "none", border: "none", cursor: "pointer", padding: "4px 0 0", fontWeight: 600, minHeight: 0 }}>
                {expanded ? "Show less" : "Read full review"}
              </button>
            )}
          </div>
        </div>

        <div style={{ padding: "0 22px 16px", display: "flex", flexWrap: "wrap", gap: 6, position: "relative" }}>
          {project.links.length === 0 ? (
            <span className="link-chip" style={{ color: LINK_CONFIG.other.color, background: LINK_CONFIG.other.bg, borderColor: LINK_CONFIG.other.border }}>
              <LockIcon /> Private Project
            </span>
          ) : project.links.map((link, i) => {
            const cfg = LINK_CONFIG[getLinkType(link)] ?? LINK_CONFIG.website;
            const Icon = cfg.Icon;
            return (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                className="link-chip link-chip-active"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                style={{ color: cfg.color, background: cfg.bg, borderColor: cfg.border }}>
                <Icon />{cfg.label}
              </a>
            );
          })}
        </div>

        <div className="card-footer">
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 11, color: "#475569", marginBottom: 7, display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 6px #22C55E" }} />
              Delivered in {project.duration} · {formatCompletedDate(project.completedDate)}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {project.features.slice(0, 3).map((f) => (
                <span key={f} className="feature-chip">{f.split(/\s[—–-]\s/)[0]}</span>
              ))}
              {project.features.length > 3 && (
                <span style={{ fontSize: 10, color: "#475569", padding: "3px 4px" }}>+{project.features.length - 3} more</span>
              )}
            </div>
          </div>
          <Link href={href} className="card-cta" onClick={(e) => e.stopPropagation()}>
            View <span className="card-cta-arrow">→</span>
          </Link>
        </div>
      </article>
    </div>
  );
}

// ─── Marquee ──────────────────────────────────────────────────────────────────

function ClientMarquee({ clients }: { clients: ClientProject[] }) {
  if (clients.length < 3) return null;
  const loop = [...clients, ...clients];
  return (
    <div className="marquee-wrap" style={revealAnim(0.2)}>
      <div className="marquee-track marquee-slow">
        {loop.map((c, i) => (
          <Link key={`${c.id}-${i}`} href={`/clients/${c.slug}`} className="marquee-chip" tabIndex={i >= clients.length ? -1 : 0}>
            <ClientLogo project={c} size={26} />
            <span>{c.companyName}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function ClientsClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const serviceParam = searchParams.get("service") ?? "all";
  const [search, setSearch] = useState("");
  const [activeService, setActiveService] = useState<string>(
    SERVICE_TABS.some((t) => t.key === serviceParam) ? serviceParam : "all"
  );
  const [loaded, setLoaded] = useState<ClientProject[] | null>(null);
  const allClients = useMemo(() => loaded ?? [], [loaded]);

  useEffect(() => {
    fetchAllClients().then(setLoaded).catch(() => setLoaded([]));
  }, []);

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: allClients.length };
    for (const c of allClients) for (const s of c.serviceTypes) map[s] = (map[s] ?? 0) + 1;
    return map;
  }, [allClients]);

  const visibleTabs = SERVICE_TABS.filter((t) => t.key === "all" || (counts[t.key] ?? 0) > 0 || t.key === activeService);

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

  const stats = useMemo(() => {
    const cities = new Set(allClients.map((c) => c.location.split(",")[0].trim())).size;
    const avg = allClients.length ? allClients.reduce((s, c) => s + c.rating, 0) / allClients.length : 0;
    const services = new Set(allClients.flatMap((c) => c.serviceTypes)).size;
    return [
      { key: "projects", to: allClients.length, decimals: 0, suffix: "+", label: "Projects Delivered", color: "#00AAFF" },
      { key: "cities",   to: cities,            decimals: 0, suffix: "+", label: "Cities Served",      color: "#22C55E" },
      { key: "rating",   to: avg,               decimals: 1, suffix: "",  label: "Avg Client Rating",  color: "#F59E0B" },
      { key: "services", to: services,          decimals: 0, suffix: "",  label: "Service Categories", color: "#A855F7" },
    ] as const;
  }, [allClients]);

  function setTab(key: string) {
    setActiveService(key);
    const params = new URLSearchParams(searchParams.toString());
    if (key === "all") params.delete("service");
    else params.set("service", key);
    router.replace(`/clients${params.size ? `?${params}` : ""}`, { scroll: false });
  }

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* Ambient background */}
      <div aria-hidden className="ambient">
        <div className="orb" style={{ top: -120, left: "8%", width: 420, height: 420, background: "#0066FF", animationDelay: "0s" }} />
        <div className="orb" style={{ top: 260, right: "-6%", width: 380, height: 380, background: "#A855F7", animationDelay: "-6s" }} />
        <div className="orb" style={{ top: 900, left: "30%", width: 460, height: 460, background: "#00AAFF", animationDelay: "-12s" }} />
        <div className="grid-bg ambient-grid" />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ paddingTop: 96 }} />

        {allClients.length >= 4 && <div style={{ padding: "0 24px 28px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }} className="stats-grid">
            {stats.map((s, i) => (
              <div key={s.key} className="stat-card" style={{ ...revealAnim(i * 0.08), "--stat": s.color } as React.CSSProperties}>
                <div className="stat-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {STAT_ICONS[s.key]}
                  </svg>
                </div>
                <div>
                  <div className="stat-value"><CountUp to={s.to} decimals={s.decimals} suffix={s.suffix} /></div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>}

        {/* Marquee */}
        <div style={{ padding: "0 0 44px" }}>
          <ClientMarquee clients={allClients} />
        </div>

        <section style={{ padding: "0 24px 96px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>

            {/* Toolbar */}
            <div className="toolbar" style={revealAnim(0.25)}>
              <div className="hide-scrollbar tabs-row" role="tablist">
                {visibleTabs.map((tab) => {
                  const active = activeService === tab.key;
                  const color = tab.key === "all" ? "#00AAFF" : SERVICE_CONFIG[tab.key].color;
                  return (
                    <button key={tab.key} role="tab" aria-selected={active} onClick={() => setTab(tab.key)}
                      className={`tab-pill${active ? " tab-active" : ""}`}
                      style={{ "--tab": color } as React.CSSProperties}>
                      {tab.key !== "all" && <span className="tab-dot" />}
                      {tab.label}
                      <span className="tab-count">{counts[tab.key] ?? 0}</span>
                    </button>
                  );
                })}
              </div>

              <div className="search-box">
                <span className="search-icon"><SearchIcon /></span>
                <input
                  placeholder="Search client, company or city…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  aria-label="Search projects"
                />
                {search && (
                  <button className="search-clear" onClick={() => setSearch("")} aria-label="Clear search">×</button>
                )}
              </div>
            </div>

            <p style={{ fontSize: 13, color: "#64748B", margin: "0 0 22px" }} aria-live="polite">
              {loaded === null ? "Loading projects…" : <>Showing <strong style={{ color: "#E2E8F0" }}>{filtered.length}</strong> project{filtered.length !== 1 ? "s" : ""}</>}
              {loaded !== null && activeService !== "all" && <> in <strong style={{ color: SERVICE_CONFIG[activeService as ServiceType]?.color }}>{SERVICE_TABS.find((t) => t.key === activeService)?.label}</strong></>}
              {search.trim() && <> matching &ldquo;{search.trim()}&rdquo;</>}
            </p>

            {/* Grid */}
            {loaded === null ? (
              <div className="clients-grid" aria-busy="true">
                {[0, 1, 2].map((i) => <div key={i} className="card-skeleton" />)}
              </div>
            ) : filtered.length === 0 ? (
              <div style={{ ...revealAnim(0), textAlign: "center", padding: "72px 24px", borderRadius: 24, border: "1px dashed rgba(255,255,255,0.1)", background: "rgba(10,22,40,0.5)" }}>
                <div style={{ width: 64, height: 64, borderRadius: 20, margin: "0 auto 18px", display: "grid", placeItems: "center", background: "rgba(0,170,255,0.1)", color: "#00AAFF" }}>
                  <SearchIcon />
                </div>
                <p style={{ fontSize: 16, color: "#CBD5E1", fontWeight: 600, marginBottom: 6 }}>No projects found</p>
                <p style={{ fontSize: 13.5, color: "#64748B" }}>Try a different name or city, or browse all categories.</p>
                <button onClick={() => { setSearch(""); setTab("all"); }} className="btn-outline" style={{ marginTop: 20, fontSize: 13, padding: "9px 20px" }}>
                  Clear filters
                </button>
              </div>
            ) : (
              <div key={activeService} className="clients-grid">
                {filtered.map((p, i) => <ClientCard key={p.id} project={p} index={i} />)}
              </div>
            )}
          </div>
        </section>

      </div>

      <style>{`
        .ambient { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
        .orb {
          position: absolute; border-radius: 50%; filter: blur(110px); opacity: 0.16;
          animation: orbDrift 22s ease-in-out infinite;
        }
        .ambient-grid {
          position: absolute; inset: 0; height: 900px;
          mask-image: radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent);
          -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent);
        }

        /* Stats */
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
        .stat-card {
          display: flex; align-items: center; gap: 14px;
          padding: 18px 20px; border-radius: 18px;
          background: linear-gradient(160deg, rgba(14,26,48,0.85), rgba(8,16,32,0.7));
          border: 1px solid rgba(255,255,255,0.07);
          backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .stat-card:hover {
          transform: translateY(-3px);
          border-color: color-mix(in srgb, var(--stat) 40%, transparent);
          box-shadow: 0 12px 32px color-mix(in srgb, var(--stat) 14%, transparent);
        }
        .stat-icon {
          width: 42px; height: 42px; border-radius: 12px; flex-shrink: 0;
          display: grid; place-items: center; color: var(--stat);
          background: color-mix(in srgb, var(--stat) 14%, transparent);
          border: 1px solid color-mix(in srgb, var(--stat) 30%, transparent);
        }
        .stat-value { font-size: clamp(1.35rem, 2.4vw, 1.75rem); font-weight: 900; color: white; line-height: 1.1; font-variant-numeric: tabular-nums; }
        .stat-label { font-size: 12px; color: #64748B; margin-top: 2px; font-weight: 500; }

        /* Marquee */
        .marquee-wrap {
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent, black 12%, black 88%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, black 12%, black 88%, transparent);
        }
        .marquee-slow { animation-duration: 45s; gap: 12px; width: max-content; }
        .marquee-wrap:hover .marquee-slow { animation-play-state: paused; }
        .marquee-chip {
          display: inline-flex; align-items: center; gap: 10px; flex-shrink: 0;
          padding: 7px 16px 7px 8px; border-radius: 100px; text-decoration: none;
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
          color: #94A3B8; font-size: 13px; font-weight: 600; white-space: nowrap;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .marquee-chip:hover { color: white; border-color: rgba(0,170,255,0.4); background: rgba(0,170,255,0.08); }

        /* Toolbar */
        .toolbar { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 18px; }
        .tabs-row { display: flex; gap: 8px; overflow-x: auto; padding: 4px 2px; min-width: 0; }
        .tab-pill {
          display: inline-flex; align-items: center; gap: 8px; flex-shrink: 0;
          padding: 8px 10px 8px 16px; border-radius: 100px; font-size: 13px; font-weight: 600;
          cursor: pointer; white-space: nowrap;
          background: rgba(255,255,255,0.035); color: #8193AB;
          border: 1px solid rgba(255,255,255,0.08);
          transition: all 0.25s cubic-bezier(0.22,1,0.36,1);
        }
        .tab-pill:hover { color: white; border-color: color-mix(in srgb, var(--tab) 45%, transparent); background: color-mix(in srgb, var(--tab) 8%, transparent); }
        .tab-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--tab); box-shadow: 0 0 8px var(--tab); }
        .tab-count {
          min-width: 22px; height: 20px; padding: 0 6px; border-radius: 100px;
          display: inline-grid; place-items: center; font-size: 11px; font-weight: 700;
          background: rgba(255,255,255,0.07); color: #94A3B8;
        }
        .tab-active {
          color: white; border-color: transparent;
          background: linear-gradient(135deg, color-mix(in srgb, var(--tab) 85%, #0040AA), var(--tab));
          box-shadow: 0 6px 22px color-mix(in srgb, var(--tab) 40%, transparent);
        }
        .tab-active:hover { background: linear-gradient(135deg, color-mix(in srgb, var(--tab) 85%, #0040AA), var(--tab)); }
        .tab-active .tab-dot { background: white; box-shadow: none; }
        .tab-active .tab-count { background: rgba(255,255,255,0.22); color: white; }

        .search-box { position: relative; flex: 0 0 300px; }
        .search-box input {
          width: 100%; height: 44px; padding: 0 38px 0 42px; border-radius: 14px;
          background: rgba(10,22,40,0.8); border: 1px solid rgba(255,255,255,0.09);
          color: white; font-size: 14px; outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .search-box input::placeholder { color: #475569; }
        .search-box input:focus { border-color: rgba(0,170,255,0.55); box-shadow: 0 0 0 4px rgba(0,170,255,0.12); }
        .search-icon { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: #475569; pointer-events: none; display: flex; }
        .search-box:focus-within .search-icon { color: #00AAFF; }
        .search-clear {
          position: absolute; right: 8px; top: 50%; transform: translateY(-50%);
          width: 26px; height: 26px; min-height: 0; border-radius: 8px; border: none; cursor: pointer;
          background: rgba(255,255,255,0.06); color: #94A3B8; font-size: 16px; line-height: 1;
        }

        /* Grid + cards */
        .card-skeleton {
          height: 420px; border-radius: 22px; border: 1px solid rgba(255,255,255,0.06);
          background: linear-gradient(100deg, rgba(14,26,48,0.8) 30%, rgba(30,48,80,0.8) 50%, rgba(14,26,48,0.8) 70%);
          background-size: 200% 100%; animation: shimmer 1.6s linear infinite;
        }
        .clients-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .client-card {
          position: relative; height: 100%; display: flex; flex-direction: column; overflow: hidden;
          border-radius: 22px; cursor: pointer; outline: none;
          background: linear-gradient(170deg, rgba(14,26,48,0.92), rgba(7,14,30,0.92));
          border: 1px solid rgba(255,255,255,0.07);
          box-shadow: 0 4px 24px rgba(0,0,0,0.28);
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .client-card:hover, .client-card:focus-visible {
          transform: translateY(-6px);
          border-color: var(--accent-soft);
          box-shadow: 0 26px 60px rgba(0,0,0,0.5), 0 0 40px var(--accent-faint);
        }
        .client-card:focus-visible { box-shadow: 0 0 0 3px var(--accent-soft), 0 26px 60px rgba(0,0,0,0.5); }
        .card-spotlight {
          position: absolute; inset: 0; pointer-events: none; opacity: 0; transition: opacity 0.35s ease;
          background: radial-gradient(420px circle at var(--mx, 50%) var(--my, 0%), var(--accent-faint), transparent 45%);
        }
        .client-card:hover .card-spotlight { opacity: 1; }
        .card-accent-bar {
          height: 3px; position: relative;
          background: linear-gradient(90deg, var(--accent), transparent);
          transform-origin: left; transform: scaleX(0.35); opacity: 0.7;
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1), opacity 0.3s;
        }
        .client-card:hover .card-accent-bar { transform: scaleX(1); opacity: 1; }
        .card-logo { transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1); }
        .client-card:hover .card-logo { transform: scale(1.08) rotate(-4deg); }
        .card-title {
          font-size: 17px; font-weight: 800; line-height: 1.25; margin-bottom: 4px; color: white;
          transition: color 0.25s ease;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .client-card:hover .card-title { color: var(--accent); }
        .card-quote {
          padding: 14px 16px; border-radius: 14px;
          background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.05);
          border-left: 3px solid var(--accent-soft);
        }
        .link-chip {
          display: inline-flex; align-items: center; gap: 6px; font-size: 11.5px; font-weight: 600;
          padding: 6px 12px; border-radius: 9px; border: 1px solid; text-decoration: none; min-height: 0;
          transition: transform 0.2s ease, filter 0.2s ease;
        }
        .link-chip-active:hover { transform: translateY(-2px); filter: brightness(1.25); }
        .card-footer {
          margin-top: auto; padding: 14px 22px 18px; position: relative;
          border-top: 1px solid rgba(255,255,255,0.05);
          display: flex; align-items: flex-end; justify-content: space-between; gap: 12px;
        }
        .feature-chip {
          font-size: 10px; font-weight: 600; padding: 3px 8px; border-radius: 6px;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); color: #64748B;
        }
        .card-cta {
          display: inline-flex; align-items: center; gap: 6px; flex-shrink: 0;
          font-size: 12.5px; font-weight: 700; text-decoration: none; color: var(--accent);
          padding: 8px 14px; border-radius: 11px;
          background: var(--accent-faint); border: 1px solid var(--accent-soft);
          transition: background 0.25s, color 0.25s;
        }
        .card-cta-arrow { display: inline-block; transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1); }
        .client-card:hover .card-cta { background: var(--accent); color: white; }
        .client-card:hover .card-cta-arrow { transform: translateX(4px); }

        @media (max-width: 1024px) {
          .clients-grid { grid-template-columns: repeat(2, 1fr); }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .toolbar { flex-direction: column-reverse; align-items: stretch; }
          .search-box { flex: 1 1 auto; }
        }
        @media (max-width: 640px) {
          .clients-grid { grid-template-columns: 1fr; gap: 16px; }
          .stats-grid { gap: 10px; }
          .stat-card { flex-direction: column; align-items: flex-start; gap: 10px; padding: 14px; }
          .stat-icon { width: 36px; height: 36px; }
          .tabs-row { margin: 0 -24px; padding: 4px 24px; }
          .tab-pill { min-height: 40px; }
          .card-footer { flex-direction: column; align-items: stretch; }
          .card-cta { justify-content: center; }
        }
      `}</style>
    </div>
  );
}
