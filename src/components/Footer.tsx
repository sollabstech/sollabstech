"use client";

import Link from "next/link";

const footerLinks = {
  Software: [
    { label: "Mobile Apps", href: "/software#mobile" },
    { label: "Web Development", href: "/software#web" },
    { label: "E-commerce", href: "/software#ecommerce" },
    { label: "AI Integration", href: "/software#ai" },
    { label: "API Development", href: "/software#api" },
  ],
  Computers: [
    { label: "Gaming Laptops", href: "/computers#gaming" },
    { label: "Business Laptops", href: "/computers#business" },
    { label: "Custom PCs", href: "/computers#custom" },
    { label: "Laptop Repairs", href: "/computers#repairs" },
    { label: "Accessories", href: "/computers#accessories" },
  ],
  Company: [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Reviews", href: "/reviews" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { label: "Instagram (Laptops & PC)", href: "https://www.instagram.com/sollabs_tech_laptop__custom_pc/", icon: "📸", tooltip: "Laptops & Custom PC" },
  { label: "Instagram (Software)", href: "https://www.instagram.com/sollabstech", icon: "📸", tooltip: "Software & Apps" },
  { label: "WhatsApp", href: "https://wa.me/919003850743", icon: "💬", tooltip: "Chat on WhatsApp" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/sollabstech/", icon: "💼", tooltip: "LinkedIn" },
  { label: "Facebook", href: "https://www.facebook.com/sollabstech/", icon: "📘", tooltip: "Facebook" },
  { label: "YouTube", href: "#", icon: "▶️", tooltip: "YouTube (coming soon)" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#03070F", borderTop: "1px solid rgba(0,102,255,0.15)" }}>
      {/* CTA Band */}
      <div className="footer-cta-band" style={{
        background: "linear-gradient(135deg, rgba(0,102,255,0.15) 0%, rgba(0,170,255,0.08) 100%)",
        borderBottom: "1px solid rgba(0,102,255,0.15)",
        padding: "60px 24px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700, marginBottom: 12 }}>
            Ready to Build Something <span className="gradient-text-blue">Amazing?</span>
          </h2>
          <p style={{ color: "#8A9BB8", marginBottom: 28, fontSize: 16 }}>
            Let&apos;s talk about your project or find the perfect laptop for your needs.
          </p>
          <div className="footer-cta-btns" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <a
              href="https://wa.me/919003850743"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main" style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 24px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}
          className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <img src="/text-logo.png" alt="Sollabs Tech" style={{ height: 40, width: "auto", objectFit: "contain" }} />
              <div style={{ fontSize: 10, color: "#00AAFF", letterSpacing: 3, marginTop: 4 }}>CODE. CREATE. CONNECT.</div>
            </div>
            <p style={{ color: "#6B7A94", fontSize: 14, lineHeight: 1.7, maxWidth: 280, marginBottom: 20 }}>
              One trusted brand for modern software development and premium laptops & custom PCs across India.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.tooltip}
                  target={s.href !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "7px 12px", borderRadius: 8,
                    background: "rgba(0,102,255,0.08)",
                    border: "1px solid rgba(0,102,255,0.15)",
                    textDecoration: "none", transition: "all 0.2s",
                    opacity: s.href === "#" ? 0.45 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (s.href !== "#") { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,102,255,0.2)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,102,255,0.4)"; }
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,102,255,0.08)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,102,255,0.15)";
                  }}
                >
                  <span style={{ fontSize: 15 }}>{s.icon}</span>
                  <span style={{ fontSize: 12, color: "#94A3B8", fontWeight: 500 }}>{s.tooltip}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{ color: "white", fontWeight: 600, marginBottom: 16, fontSize: 14, letterSpacing: 0.5 }}>
                {title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{ color: "#6B7A94", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#00AAFF"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#6B7A94"; }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider-gradient" style={{ marginBottom: 24 }} />

        {/* Bottom bar */}
        <div className="footer-bottom" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "#3D4F6B", fontSize: 13 }}>
            © {new Date().getFullYear()} Sollabs Tech. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            <Link href="/privacy" style={{ color: "#3D4F6B", fontSize: 13, textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: "#3D4F6B", fontSize: 13, textDecoration: "none" }}>Terms & Conditions</Link>
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr !important; }
        .footer-cta-band { padding: 60px 24px !important; }
        .footer-main { padding: 60px 24px 40px !important; }
        .footer-bottom { flex-direction: row !important; }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-cta-band { padding: 48px 20px !important; }
          .footer-main { padding: 48px 20px 32px !important; }
        }
        @media (max-width: 640px) {
          .footer-cta-band { padding: 40px 16px !important; }
          .footer-main { padding: 36px 16px 24px !important; }
          .footer-bottom { flex-direction: column !important; align-items: flex-start !important; gap: 10px !important; }
          .footer-cta-btns { flex-direction: column !important; align-items: stretch !important; }
          .footer-cta-btns a { text-align: center !important; justify-content: center !important; }
        }
        @media (max-width: 420px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
