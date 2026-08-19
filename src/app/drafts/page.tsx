"use client";
import { useState } from "react";

const techPost = `🚀 What can Sollabs Tech build for your business?

If your business still runs on WhatsApp messages, Excel sheets, and paper — this post is for you.

At Sollabs Tech, we build custom software that replaces all of that with one clean, fast, and automated system designed for YOUR business.

Here's what we build:

💻 Web Applications
Custom web portals, admin dashboards, booking systems, and customer-facing websites — fully responsive, built for Indian businesses.

📱 Mobile Apps
Android & iOS apps for your business — delivery tracking, customer apps, field staff tools, or anything your team needs on the go.

🧾 Billing & Invoicing Software
No more manual bills. We build Windows-based or web-based billing software with GST support, auto-reports, and customer records — built specifically for Indian shops and businesses.

🪟 Windows Desktop Tools
Custom Windows applications for inventory management, employee tracking, daily reports, and offline operations.

📊 ERP & CRM Systems
Enterprise Resource Planning and Customer Relationship Management tools tailored for small and mid-sized Indian companies.

🔗 API & Integrations
Connect your existing tools, payment gateways, WhatsApp APIs, and third-party services into one unified system.

Why choose us?
✅ Based in Madurai, Tamil Nadu
✅ Direct communication — no middlemen
✅ Affordable pricing for Indian SMEs
✅ Full support after delivery

📞 Call / WhatsApp: +91 90038 50743
📧 Email: sollabstech@gmail.com
🌐 Website: www.sollabstech.com

Whether you're a shop owner, restaurant, clinic, school, or any growing business in India — we'll build the software that makes your operations 10x smoother.

DM us or WhatsApp today for a FREE consultation. 👇

#SollabsTech #SoftwareDevelopment #WebDevelopment #MobileAppDevelopment #BillingSoftware #WindowsApp #ERPSoftware #CRMSoftware #MaduraiTech #TamilNaduTech #IndianStartup #CustomSoftware #AppDevelopment #SmallBusinessIndia #TechMadurai #SollabsTechSoftware #SoftwareMadurai #MakeInIndia`;

const laptopPost = `💻 Looking for a laptop in Madurai? Read this before you buy.

Most people overpay for a laptop they don't fully need — or underpay and regret it in 3 months. At Sollabs Tech, we help you buy the RIGHT laptop at the RIGHT price.

Here's everything we offer:

🎓 Student Laptops (Starting ₹8,000)
Perfect for college students — fast enough for assignments, videos, and coding. Quality-checked, warranty included. Delivered across India.

🎮 Gaming Laptops
High-performance gaming rigs with dedicated GPU, fast RAM, and SSD — for serious gamers who want smooth FPS without spending a fortune.

💼 Business & Office Laptops
Thin, light, and powerful — for professionals who work from home or travel. Long battery life, fast boot, and Windows pre-installed.

🖥️ Custom PC Builds
Tell us your budget. We'll build the perfect desktop PC — gaming, video editing, streaming, or office work. Every component picked for value and performance.

🔧 What makes us different?
✅ Every laptop is quality-checked before delivery
✅ 3–12 month warranty on all products
✅ Delivery across all of India
✅ Honest advice — we tell you what you actually need
✅ After-sales support on WhatsApp

📍 Based in Madurai, Tamil Nadu
📞 WhatsApp: +91 90038 50743
📧 Email: sollabstech@gmail.com
🌐 www.sollabstech.com

Whether you're a student in Chennai, a gamer in Bangalore, or a business owner in Delhi — we deliver quality laptops to your door.

💬 Comment your budget below or DM us — we'll recommend the best laptop for you within minutes!

#SollabsTech #LaptopMadurai #BudgetLaptopIndia #GamingLaptop #CustomPC #RefurbishedLaptop #LaptopDeliveryIndia #StudentLaptop #GamingPC #SollabsTechLaptop #MaduraiLaptop #LaptopShopMadurai #BuyLaptopOnline #AffordableLaptop #CustomPCBuild #TamilNaduLaptop #PCBuildIndia #LaptopWarranty`;

function CopyCard({
  label,
  color,
  icon,
  text,
}: {
  label: string;
  color: string;
  icon: string;
  text: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div
      style={{
        borderRadius: 20,
        border: `1px solid ${color}33`,
        background: "rgba(10,22,40,0.6)",
        overflow: "hidden",
        marginBottom: 32,
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "16px 24px",
          borderBottom: `1px solid ${color}22`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: `${color}0D`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 22 }}>{icon}</span>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "white" }}>{label}</div>
            <div style={{ fontSize: 12, color: "#64748B" }}>Facebook Page Post · Copy and paste directly</div>
          </div>
        </div>
        <button
          onClick={handleCopy}
          style={{
            padding: "10px 20px",
            borderRadius: 10,
            border: `1px solid ${copied ? "#22c55e" : color}`,
            background: copied ? "rgba(34,197,94,0.1)" : `${color}1A`,
            color: copied ? "#22c55e" : color,
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
            transition: "all 0.2s",
            whiteSpace: "nowrap",
          }}
        >
          {copied ? "✅ Copied!" : "📋 Copy Post"}
        </button>
      </div>

      {/* Post content */}
      <div style={{ padding: "24px", maxHeight: 420, overflowY: "auto" }}>
        <pre
          style={{
            fontFamily: "inherit",
            fontSize: 14,
            color: "#94A3B8",
            lineHeight: 1.85,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            margin: 0,
          }}
        >
          {text}
        </pre>
      </div>

      {/* Footer */}
      <div
        style={{
          padding: "12px 24px",
          borderTop: `1px solid ${color}22`,
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: `${color}08`,
        }}
      >
        <span style={{ fontSize: 12, color: "#475569" }}>
          👆 Scroll to read full post · {text.length} characters
        </span>
      </div>
    </div>
  );
}

export default function DraftsPage() {
  return (
    <div style={{ paddingTop: 100, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 40, textAlign: "center" }}>
          <span style={{ fontSize: 36 }}>📋</span>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: "white", marginTop: 12, marginBottom: 8 }}>
            Facebook Post Drafts
          </h1>
          <p style={{ fontSize: 15, color: "#64748B" }}>
            Internal page — copy posts and paste directly to your Facebook pages.
          </p>
        </div>

        {/* Instructions */}
        <div
          style={{
            padding: "16px 20px",
            borderRadius: 14,
            background: "rgba(234,179,8,0.08)",
            border: "1px solid rgba(234,179,8,0.2)",
            marginBottom: 40,
            fontSize: 14,
            color: "#94A3B8",
            lineHeight: 1.7,
          }}
        >
          <strong style={{ color: "white" }}>How to use:</strong> Click <strong style={{ color: "white" }}>Copy Post</strong> on the card below → open your Facebook page → click <strong style={{ color: "white" }}>Create post</strong> → paste → add 2–3 photos → post as <strong style={{ color: "white" }}>Public</strong>.
        </div>

        {/* Tech Post */}
        <CopyCard
          label="Sollabs Tech — Software & Tech Page"
          color="#0099FF"
          icon="💻"
          text={techPost}
        />

        {/* Laptop Post */}
        <CopyCard
          label="Sollabs tech laptop and custom PC — Laptop Page"
          color="#22c55e"
          icon="🖥️"
          text={laptopPost}
        />

        {/* Footer note */}
        <div style={{ textAlign: "center", fontSize: 13, color: "#334155", marginTop: 8 }}>
          This page is for internal use — not linked from the main navigation.
        </div>

      </div>
    </div>
  );
}
