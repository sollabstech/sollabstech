"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

const contactInfo = [
  { icon: "📧", label: "Email", value: "sollabstech@gmail.com", href: "mailto:sollabstech@gmail.com" },
  { icon: "💬", label: "WhatsApp", value: "+91 93841 99108", href: "https://wa.me/919384199108" },
  { icon: "📍", label: "Location", value: "India", href: "#" },
  { icon: "🕐", label: "Business Hours", value: "Mon–Sat, 9AM–8PM IST", href: "#" },
];

export default function ContactClient() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: "software", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "messages"), {
        ...form,
        read: false,
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      console.error("Error saving message:", err);
    }
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <section style={{ paddingTop: 120, paddingBottom: 60, paddingLeft: 24, paddingRight: 24, textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <span className="section-tag" style={{ marginBottom: 16, display: "inline-flex" }}>Contact</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", fontWeight: 800, marginBottom: 16 }}>
            Let&apos;s Talk <span className="gradient-text">Business</span>
          </h1>
          <p style={{ color: "#6B7A94", fontSize: 17, lineHeight: 1.7 }}>
            Got a project? Need a laptop? Just want to say hi? We respond within 2 hours.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 24px 100px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 40, alignItems: "start" }}
          className="contact-grid">

          {/* Left: contact info */}
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "white", marginBottom: 24 }}>Get in Touch</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
              {contactInfo.map((info) => (
                <a key={info.label} href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: "rgba(0,102,255,0.1)", border: "1px solid rgba(0,102,255,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0,
                  }}>{info.icon}</div>
                  <div>
                    <div style={{ fontSize: 11, color: "#3D4F6B", marginBottom: 2 }}>{info.label}</div>
                    <div style={{ fontSize: 14, color: "#C4D0E0", fontWeight: 500 }}>{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <a
              href="https://wa.me/919384199108?text=Hi Sollabs Tech, I'd like to discuss a project!"
              target="_blank" rel="noopener noreferrer"
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", fontSize: 15, padding: "14px" }}
            >
              💬 Chat on WhatsApp
            </a>

            <div style={{ marginTop: 16, fontSize: 12, color: "#3D4F6B", textAlign: "center" }}>
              Fastest response via WhatsApp
            </div>

            <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <p style={{ fontSize: 13, color: "#3D4F6B", marginBottom: 12 }}>Follow us</p>
              <div style={{ display: "flex", gap: 10 }}>
                {["📸 Instagram", "💼 LinkedIn", "🐦 Twitter"].map((s) => (
                  <a key={s} href="#" style={{
                    padding: "8px 12px", borderRadius: 8, fontSize: 12,
                    background: "rgba(0,102,255,0.08)", border: "1px solid rgba(0,102,255,0.15)",
                    color: "#6B7A94", textDecoration: "none", transition: "all 0.2s",
                  }}>{s}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="glass" style={{ borderRadius: 20, padding: "36px 32px", border: "1px solid rgba(255,255,255,0.08)" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <div style={{ fontSize: 64, marginBottom: 20 }}>✅</div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: "white", marginBottom: 10 }}>Message Sent!</h3>
                <p style={{ color: "#6B7A94", fontSize: 15 }}>
                  We&apos;ll get back to you within 2 hours. Meanwhile, feel free to WhatsApp us.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: "white", marginBottom: 24 }}>Send us a Message</h2>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  {[
                    { label: "Your Name", key: "name", type: "text", placeholder: "Rahul Sharma" },
                    { label: "Email", key: "email", type: "email", placeholder: "rahul@company.com" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label style={{ display: "block", fontSize: 13, color: "#6B7A94", marginBottom: 6, fontWeight: 500 }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        required
                        style={{
                          width: "100%", padding: "10px 14px", borderRadius: 10, fontSize: 14,
                          background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                          color: "white", outline: "none",
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", fontSize: 13, color: "#6B7A94", marginBottom: 6, fontWeight: 500 }}>
                    Phone (optional)
                  </label>
                  <input
                    type="tel" placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    style={{
                      width: "100%", padding: "10px 14px", borderRadius: 10, fontSize: 14,
                      background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                      color: "white", outline: "none",
                    }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", fontSize: 13, color: "#6B7A94", marginBottom: 6, fontWeight: 500 }}>
                    Inquiry Type
                  </label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    style={{
                      width: "100%", padding: "10px 14px", borderRadius: 10, fontSize: 14,
                      background: "rgba(10,22,40,0.9)", border: "1px solid rgba(255,255,255,0.1)",
                      color: "white", outline: "none",
                    }}
                  >
                    <option value="software">Software Development</option>
                    <option value="laptop">Laptop / Computer</option>
                    <option value="repair">Laptop Repair</option>
                    <option value="custom-pc">Custom PC Build</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: "block", fontSize: 13, color: "#6B7A94", marginBottom: 6, fontWeight: 500 }}>
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project, requirements, or the laptop you're looking for..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    style={{
                      width: "100%", padding: "10px 14px", borderRadius: 10, fontSize: 14,
                      background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                      color: "white", outline: "none", resize: "vertical",
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: 15, padding: "13px" }}
                  disabled={loading}>
                  {loading ? "Sending..." : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .contact-grid { grid-template-columns: 1fr 1.4fr !important; }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
        input::placeholder, textarea::placeholder { color: #3D4F6B; }
      `}</style>
    </>
  );
}
