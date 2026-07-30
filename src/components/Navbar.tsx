"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/software", label: "Software" },
  { href: "/computers", label: "Computers" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(5, 10, 24, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0, 102, 255, 0.15)" : "1px solid transparent",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: "linear-gradient(135deg, #0066FF, #00AAFF)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: 18,
              color: "white",
              boxShadow: "0 4px 15px rgba(0,102,255,0.5)",
            }}>S</div>
            <div>
              <span style={{ fontWeight: 800, fontSize: 16, color: "white", letterSpacing: "-0.3px" }}>SOLLABS</span>
              <span style={{ fontWeight: 400, fontSize: 11, color: "#00AAFF", display: "block", letterSpacing: 3, marginTop: -2 }}>TECH</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden-mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "8px 14px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: "none",
                  color: pathname === link.href ? "#00AAFF" : "#C4D0E0",
                  background: pathname === link.href ? "rgba(0,102,255,0.1)" : "transparent",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (pathname !== link.href) {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== link.href) {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#C4D0E0";
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary" style={{ marginLeft: 8, padding: "8px 20px", fontSize: 14 }}>
              Get Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, color: "white" }}
            className="show-mobile"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {menuOpen ? (
                <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              ) : (
                <>
                  <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{
            padding: "16px 0 24px",
            borderTop: "1px solid rgba(0,102,255,0.2)",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: "12px 16px",
                  borderRadius: 8,
                  fontSize: 15,
                  fontWeight: 500,
                  textDecoration: "none",
                  color: pathname === link.href ? "#00AAFF" : "#C4D0E0",
                  background: pathname === link.href ? "rgba(0,102,255,0.1)" : "transparent",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary" style={{ marginTop: 8, textAlign: "center" }}>
              Get a Quote
            </Link>
          </div>
        )}
      </div>

      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
