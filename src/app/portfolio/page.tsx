"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { portfolioProjects } from "@/lib/data";

interface DisplayProject {
  id: string;
  title: string;
  category: string;
  description: string;
  client: string;
  image: string;
  tech: string[];
  liveUrl: string;
}

const categories = ["All", "Mobile Apps", "Websites", "E-commerce", "Dashboard", "CRM", "ERP", "AI Projects"];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const [firebaseProjects, setFirebaseProjects] = useState<DisplayProject[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "portfolio"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      if (!snap.empty) {
        setFirebaseProjects(snap.docs.map((d) => ({ id: d.id, ...d.data() } as DisplayProject)));
      } else {
        setFirebaseProjects(null);
      }
      setLoading(false);
    }, () => setLoading(false));
    return () => unsub();
  }, []);

  const projects: DisplayProject[] = firebaseProjects ?? portfolioProjects.map((p) => ({
    id: String(p.id),
    title: p.title,
    category: p.category,
    description: p.description,
    client: p.client,
    image: p.image,
    tech: p.tech,
    liveUrl: p.liveUrl,
  }));

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <section style={{ paddingTop: 120, paddingBottom: 60, paddingLeft: 24, paddingRight: 24, textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <span className="section-tag" style={{ marginBottom: 16, display: "inline-flex" }}>Portfolio</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", fontWeight: 800, marginBottom: 16 }}>
            Our Work, <span className="gradient-text">Your Proof</span>
          </h1>
          <p style={{ color: "#6B7A94", fontSize: 17, lineHeight: 1.7 }}>
            200+ projects delivered. Each one a story of transformation, innovation, and results.
          </p>
          {!loading && (
            <p style={{ fontSize: 12, color: "#334155", marginTop: 8 }}>
              {firebaseProjects ? `${projects.length} projects · live from Firebase` : `${projects.length} projects`}
            </p>
          )}
        </div>
      </section>

      <section style={{ padding: "0 24px 100px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)} style={{
                padding: "8px 18px", borderRadius: 100, fontSize: 13, fontWeight: 500, cursor: "pointer",
                border: active === cat ? "1px solid #0066FF" : "1px solid rgba(255,255,255,0.1)",
                background: active === cat ? "rgba(0,102,255,0.2)" : "rgba(255,255,255,0.04)",
                color: active === cat ? "#00AAFF" : "#6B7A94", transition: "all 0.2s",
              }}>{cat}</button>
            ))}
          </div>

          {loading ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} style={{ borderRadius: 18, background: "rgba(10,22,40,0.7)", border: "1px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
                  <div style={{ height: 220, background: "rgba(0,102,255,0.06)", animation: "pulse 1.5s ease-in-out infinite" }} />
                  <div style={{ padding: "22px 24px 26px" }}>
                    <div style={{ height: 18, background: "rgba(255,255,255,0.06)", borderRadius: 4, marginBottom: 8, width: "60%" }} />
                    <div style={{ height: 12, background: "rgba(255,255,255,0.04)", borderRadius: 4, marginBottom: 6 }} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {filtered.length === 0 && (
                <div style={{ textAlign: "center", padding: "80px 0" }}>
                  <div style={{ fontSize: 56, marginBottom: 16 }}>🚀</div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "white", marginBottom: 8 }}>
                    {active === "All" ? "Real Projects Coming Soon" : `No ${active} projects listed yet`}
                  </h3>
                  <p style={{ color: "#475569", fontSize: 15 }}>
                    {active === "All"
                      ? "We've completed 200+ real projects over 2 years. Adding them here now — check back soon!"
                      : "Try another category or check back soon."}
                  </p>
                </div>
              )}

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
                {filtered.map((project) => (
                  <div key={project.id} className="card-hover" style={{
                    borderRadius: 18, overflow: "hidden",
                    background: "rgba(10,22,40,0.7)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}>
                    <div style={{ height: 220, overflow: "hidden", position: "relative", background: "rgba(0,102,255,0.08)" }}>
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease", display: "block" }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)"; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                        />
                      ) : (
                        <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48 }}>🖥️</div>
                      )}
                      <div style={{
                        position: "absolute", top: 14, left: 14,
                        padding: "4px 12px", borderRadius: 100, fontSize: 11, fontWeight: 600,
                        background: "rgba(5,10,24,0.75)", backdropFilter: "blur(8px)",
                        border: "1px solid rgba(0,102,255,0.5)", color: "#00AAFF",
                      }}>{project.category}</div>
                    </div>

                    <div style={{ padding: "22px 24px 26px" }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: "white", marginBottom: 4 }}>{project.title}</h3>
                      <p style={{ fontSize: 12, color: "#3D4F6B", marginBottom: 10 }}>Client · {project.client}</p>
                      <p style={{ fontSize: 14, color: "#6B7A94", lineHeight: 1.65, marginBottom: 16 }}>{project.description}</p>

                      {project.tech?.length > 0 && (
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                          {project.tech.map((t) => (
                            <span key={t} style={{
                              padding: "3px 10px", borderRadius: 100, fontSize: 11,
                              background: "rgba(0,102,255,0.1)", border: "1px solid rgba(0,102,255,0.2)", color: "#7AA8FF",
                            }}>{t}</span>
                          ))}
                        </div>
                      )}

                      <div style={{ display: "flex", gap: 10 }}>
                        <a href={project.liveUrl || "#"} className="btn-primary" style={{ fontSize: 13, padding: "8px 16px" }}>
                          🔗 Live Site
                        </a>
                        <button className="btn-outline" style={{ fontSize: 13, padding: "8px 16px" }}>
                          📄 Case Study
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 24px", background: "rgba(0,0,0,0.2)", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, marginBottom: 12 }}>
            Want to Be <span className="gradient-text-blue">Our Next Case Study?</span>
          </h2>
          <p style={{ color: "#6B7A94", marginBottom: 24 }}>Let&apos;s build something remarkable together.</p>
          <Link href="/contact" className="btn-primary">Start Your Project →</Link>
        </div>
      </section>
      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }`}</style>
    </>
  );
}
