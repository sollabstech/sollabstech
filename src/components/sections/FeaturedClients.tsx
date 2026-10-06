import Link from "next/link";
import Image from "next/image";
import { fetchFeaturedClients, getLinkType, type ClientProject, type ServiceType } from "@/lib/clients";

const SERVICE_CONFIG: Record<ServiceType, { label: string; color: string; bg: string }> = {
  mobile:    { label: "Mobile App",      color: "#00AAFF", bg: "rgba(0,170,255,0.1)" },
  website:   { label: "Website",         color: "#22C55E", bg: "rgba(34,197,94,0.1)" },
  windows:   { label: "Windows App",     color: "#A855F7", bg: "rgba(168,85,247,0.1)" },
  custom:    { label: "Custom Software", color: "#F59E0B", bg: "rgba(245,158,11,0.1)" },
  ecommerce: { label: "E-Commerce",      color: "#F97316", bg: "rgba(249,115,22,0.1)" },
  admin:     { label: "Admin Panel",     color: "#8B5CF6", bg: "rgba(139,92,246,0.1)" },
  vendor:    { label: "Vendor Website",  color: "#10B981", bg: "rgba(16,185,129,0.1)" },
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={i <= rating ? "#F59E0B" : "rgba(255,255,255,0.1)"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

function ClientLogo({ project }: { project: ClientProject }) {
  const initials = project.companyName.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  if (project.logo) {
    return (
      <div style={{
        width: 44, height: 44, borderRadius: 12, flexShrink: 0, overflow: "hidden",
        background: project.logoBackground === "dark" ? "#1E293B" : project.logoBackground === "white" ? "white" : "transparent",
        border: "1px solid rgba(255,255,255,0.1)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <Image src={project.logo} alt={project.companyName} width={44} height={44} style={{ objectFit: "contain", width: "100%", height: "100%" }} />
      </div>
    );
  }
  return (
    <div style={{
      width: 44, height: 44, borderRadius: 12, flexShrink: 0,
      background: "linear-gradient(135deg, #0066FF, #00AAFF)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontWeight: 800, fontSize: 14, color: "white",
      border: "1px solid rgba(0,102,255,0.3)",
    }}>{initials}</div>
  );
}

function ClientCard({ project }: { project: ClientProject }) {
  const hasLink = project.links.length > 0;
  const firstLink = project.links[0];
  const linkType = firstLink ? getLinkType(firstLink) : null;

  const linkLabel: Record<string, string> = {
    playstore: "Google Play",
    appstore: "App Store",
    website: "Visit Site",
    windows: "For Windows",
  };

  return (
    <Link href={`/clients/${project.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <article className="card-hover" style={{
        borderRadius: 18, background: "rgba(10,22,40,0.7)",
        border: "1px solid rgba(255,255,255,0.07)",
        padding: "24px", height: "100%",
        display: "flex", flexDirection: "column",
      }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
          <ClientLogo project={project} />
          <div>
            <h3 style={{ fontSize: 15, fontWeight: 800, color: "white", marginBottom: 2 }}>{project.companyName}</h3>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span style={{ fontSize: 11, color: "#334155" }}>{project.location}</span>
            </div>
          </div>
        </div>

        {/* Service badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 14 }}>
          {project.serviceTypes.map((s) => {
            const cfg = SERVICE_CONFIG[s];
            if (!cfg) return null;
            return (
              <span key={s} style={{
                fontSize: 10, fontWeight: 700, padding: "2px 9px", borderRadius: 100,
                color: cfg.color, background: cfg.bg,
              }}>{cfg.label}</span>
            );
          })}
        </div>

        {/* Stars */}
        <div style={{ marginBottom: 10 }}>
          <StarRating rating={project.rating} />
        </div>

        {/* Review snippet */}
        <p style={{ fontSize: 13, color: "#6B7A94", lineHeight: 1.65, flex: 1, marginBottom: 16 }}>
          &ldquo;{project.review.slice(0, 110)}&hellip;&rdquo;
        </p>

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
          {hasLink && linkType && linkType !== "other" ? (
            <span style={{ fontSize: 11, color: "#00AAFF", fontWeight: 600 }}>
              {linkLabel[linkType] ?? "Live"}
            </span>
          ) : (
            <span style={{ fontSize: 11, color: "#334155" }}>Private</span>
          )}
          <span style={{ fontSize: 12, color: "#00AAFF", fontWeight: 600 }}>View project →</span>
        </div>
      </article>
    </Link>
  );
}

export default async function FeaturedClients() {
  const featured = await fetchFeaturedClients(6);
  if (featured.length === 0) return null;

  return (
    <section style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="section-tag" style={{ display: "inline-flex", marginBottom: 16 }}>✦ Our Work</span>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, marginBottom: 14 }}>
            Trusted by <span className="gradient-text">Our Clients</span>
          </h2>
          <p style={{ color: "#6B7A94", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
            Mobile apps, websites, Windows software &amp; custom solutions — built and loved by clients across India.
          </p>
        </div>

        <div style={{ display: "grid", gap: 24, marginBottom: 40 }}
          className="featured-clients-grid">
          {featured.map((p) => <ClientCard key={p.id} project={p} />)}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/clients" className="btn-outline" style={{ fontSize: 14, padding: "11px 28px" }}>
            View All Projects →
          </Link>
        </div>
      </div>

      <style>{`
        .featured-clients-grid { grid-template-columns: repeat(3, 1fr); }
        @media (max-width: 1024px) { .featured-clients-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px)  { .featured-clients-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
