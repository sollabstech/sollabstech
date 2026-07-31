"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = canvas.width = canvas.offsetWidth;
    let h = canvas.height = canvas.offsetHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 170, 255, ${p.alpha})`;
        ctx.fill();
      });
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x, dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 102, 255, ${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    }
    draw();

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      {/* Canvas BG */}
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }} />

      {/* Gradient orbs */}
      <div style={{
        position: "absolute", top: "15%", left: "10%", width: 500, height: 500,
        borderRadius: "50%", background: "radial-gradient(circle, rgba(0,102,255,0.18) 0%, transparent 70%)",
        zIndex: 0, filter: "blur(40px)",
      }} className="animate-float" />
      <div style={{
        position: "absolute", bottom: "15%", right: "10%", width: 400, height: 400,
        borderRadius: "50%", background: "radial-gradient(circle, rgba(0,170,255,0.12) 0%, transparent 70%)",
        zIndex: 0, filter: "blur(40px)",
      }} className="animate-float-delay" />

      {/* Grid bg */}
      <div className="grid-bg" style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.5 }} />

      {/* Content */}
      <div className="hero-content" style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", padding: "120px 24px 80px", textAlign: "center", width: "100%" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
          <span className="section-tag">
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00AAFF", display: "inline-block", animation: "pulse-glow 2s infinite" }} />
            Innovate · Build · Integrate · Elevate
          </span>
        </div>

        <h1 style={{
          fontSize: "clamp(2.4rem, 6vw, 5rem)",
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: "-1.5px",
          marginBottom: 24,
          maxWidth: 900,
          margin: "0 auto 24px",
        }}>
          Technology That{" "}
          <span className="gradient-text">Builds Businesses</span>
        </h1>

        <p style={{
          fontSize: "clamp(1rem, 2vw, 1.25rem)",
          color: "#8A9BB8",
          maxWidth: 620,
          margin: "0 auto 48px",
          lineHeight: 1.7,
        }}>
          We build modern software and deliver high-quality laptops & custom PCs from one trusted brand.
        </p>

        {/* Two cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 720, margin: "0 auto 56px" }}
          className="hero-cards">

          {/* Software card */}
          <Link href="/software" style={{ textDecoration: "none" }}>
            <div className="glass card-hover" style={{
              borderRadius: 20,
              padding: "32px 28px",
              textAlign: "left",
              cursor: "pointer",
              border: "1px solid rgba(0,102,255,0.2)",
              background: "rgba(0,102,255,0.06)",
            }}>
              <div style={{ fontSize: 40, marginBottom: 14 }}>💻</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "white", marginBottom: 8 }}>Software Development</h3>
              <p style={{ color: "#6B7A94", fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
                Mobile apps, websites, e-commerce & AI solutions tailored for your business.
              </p>
              <span style={{ color: "#00AAFF", fontWeight: 600, fontSize: 14, display: "flex", alignItems: "center", gap: 6 }}>
                Explore Software Services
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </Link>

          {/* Computers card */}
          <Link href="/computers" style={{ textDecoration: "none" }}>
            <div className="glass card-hover" style={{
              borderRadius: 20,
              padding: "32px 28px",
              textAlign: "left",
              cursor: "pointer",
              border: "1px solid rgba(0,170,255,0.2)",
              background: "rgba(0,170,255,0.05)",
            }}>
              <div style={{ fontSize: 40, marginBottom: 14 }}>🖥️</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "white", marginBottom: 8 }}>Laptops & Computers</h3>
              <p style={{ color: "#6B7A94", fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
                Premium second-hand laptops, custom gaming PCs & workstations shipped across India.
              </p>
              <span style={{ color: "#00AAFF", fontWeight: 600, fontSize: 14, display: "flex", alignItems: "center", gap: 6 }}>
                Explore Computers
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </Link>
        </div>

        {/* Stats */}
        <div className="hero-stats" style={{ display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { value: "200+", label: "Projects" },
            { value: "150+", label: "Clients" },
            { value: "500+", label: "Laptops Sold" },
            { value: "5★", label: "Rating" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "white" }} className="gradient-text-blue">
                {stat.value}
              </div>
              <div style={{ fontSize: 13, color: "#6B7A94", marginTop: 2 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 120,
        background: "linear-gradient(to bottom, transparent, #050A18)",
        zIndex: 1,
      }} />

      <style>{`
        .hero-cards { grid-template-columns: 1fr 1fr !important; }
        .hero-content { padding: 120px 24px 80px !important; }
        .hero-stats  { gap: 40px !important; }
        @media (max-width: 768px) {
          .hero-content { padding: 110px 20px 60px !important; }
          .hero-stats  { gap: 24px !important; }
        }
        @media (max-width: 500px) {
          .hero-cards  { grid-template-columns: 1fr !important; }
          .hero-content { padding: 100px 16px 48px !important; }
          .hero-stats  { gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}
