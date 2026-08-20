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

const webDevFacebookPost = `🌐 How much does a website cost in India? Here's the honest answer.

Most people get confused or overcharged when asking about website development. So let me break it down clearly:

📄 Landing Page / Portfolio
→ ₹8,000 – ₹25,000
For freelancers, coaches, small shops wanting an online presence.

🏢 Business Website (5–10 pages)
→ ₹25,000 – ₹80,000
Full website with services, about, contact, WhatsApp button, SEO.

🛒 E-commerce Website
→ ₹80,000 – ₹2,00,000
Product catalog, cart, payment gateway (Razorpay/UPI), order management.

⚙️ Custom Web Application
→ ₹1,50,000+
Login systems, booking platforms, admin dashboards, real-time features.

What makes our websites different at Sollabs Tech:
✅ Mobile-first design (optimized for Indian users on mobile data)
✅ Fast loading speed — no heavy WordPress themes
✅ Full SEO setup from day 1
✅ You own the website — no monthly platform fees
✅ Direct support from our Madurai team

📍 Based in Madurai, Tamil Nadu
📞 WhatsApp: +91 90038 50743
📧 sollabstech@gmail.com
🌐 www.sollabstech.com/blog/website-development-cost-india

👇 Comment your business type — I'll tell you what type of website you actually need and an honest price estimate.

#WebsiteDevelopment #WebDevelopmentIndia #WebsiteCostIndia #BusinessWebsite #SollabsTech #MaduraiTech #TamilNaduTech #WebDesign #WebDeveloper #StartupIndia #SmallBusinessIndia #EcommerceIndia #CustomWebsite #WebDevelopmentMadurai #SollabsTechSoftware`;

const webDevLinkedInPost = `💡 One of the most asked questions by Indian business owners: "How much does a website cost?"

Here's a clear breakdown — no jargon, no surprises:

📄 Landing Page: ₹8,000 – ₹25,000 (1–2 weeks)
🏢 Business Website: ₹25,000 – ₹80,000 (2–4 weeks)
🛒 E-commerce: ₹80,000 – ₹2,00,000 (4–8 weeks)
⚙️ Web Application: ₹1,50,000+ (6–16 weeks)

What most businesses get wrong: They compare a website builder (Wix/Squarespace) monthly fee to a custom website one-time cost. But website builders cost ₹12,000–₹60,000/year, are slow, and you never truly own them.

A custom website is a one-time investment that:
→ You fully own
→ Loads fast on Indian mobile networks
→ Has real SEO built in from day 1
→ Has no monthly platform fees

At Sollabs Tech (Madurai, Tamil Nadu), we build websites for Indian SMEs with transparent pricing and direct team communication — no middlemen.

Read the full guide: www.sollabstech.com/blog/website-development-cost-india

📞 +91 90038 50743 | 📧 sollabstech@gmail.com

#WebDevelopment #WebsiteCost #IndianBusiness #StartupIndia #SollabsTech #SoftwareDevelopment #TechMadurai #SMEIndia`;

const softwareFacebookPost = `💼 5 signs your business needs custom software (not Excel or WhatsApp)

If you're a shop owner, restaurant, clinic, school, or any growing business in India — this post is for you.

❌ Sign 1: You manage orders and complaints on WhatsApp
All that data is buried in chat threads. You can't track anything properly.

❌ Sign 2: Your team uses 3+ apps to do one job
Excel for billing + WhatsApp for orders + paper for attendance = chaos.

❌ Sign 3: Billing takes too long and has errors
Manual bills slow you down and cost you credibility with customers.

❌ Sign 4: You don't know your real inventory right now
If checking stock means counting physically — you need a better system.

❌ Sign 5: Business reports take hours to prepare
Daily sales, top products, pending payments — should be one click. Not one hour.

✅ What custom software gives you:
→ Everything in one place
→ GST billing in seconds
→ Real-time inventory tracking
→ Reports at a click
→ Staff and customer management
→ Works on mobile, web, or Windows

At Sollabs Tech, we build ALL of this for Indian businesses:
💻 Web Applications
📱 Mobile Apps (Android & iOS)
🧾 Billing & Invoicing Software
🪟 Windows Desktop Tools
📊 ERP & CRM Systems

📍 Based in Madurai, Tamil Nadu — serving clients across India
📞 WhatsApp: +91 90038 50743
📧 sollabstech@gmail.com
🌐 www.sollabstech.com/blog/custom-software-development-india

DM us or WhatsApp for a FREE consultation. We'll tell you exactly what your business needs. 👇

#CustomSoftware #BusinessSoftwareIndia #SoftwareDevelopment #ERPIndia #BillingSoftware #SollabsTech #MaduraiTech #SmallBusinessIndia #TamilNaduTech #AppDevelopment #WebDevelopment #SollabsTechSoftware #TechMadurai #StartupIndia`;

const softwareLinkedInPost = `🔑 Most Indian SMEs are losing time and money because of broken processes. Here's the checklist:

Are you running your business on WhatsApp messages? ❌
Using Excel for billing? ❌
Can't pull a sales report without 1 hour of formulas? ❌

These aren't small inconveniences. They're growth blockers.

The businesses outpacing their competitors in 2025 have one thing in common: they replaced manual processes with software built specifically for how THEY work.

Not Tally (designed for everyone = not perfect for you).
Not Zoho (₹5,000–₹20,000/month forever).
Not Excel (one formula error breaks everything).

Custom software means:
✅ Built for your exact workflow
✅ You own it — no subscriptions
✅ Scales with your business
✅ One system for billing, inventory, staff, and reporting

At Sollabs Tech in Madurai, Tamil Nadu, we've built custom software for shops, clinics, schools, logistics companies, and more across India.

Web applications · Mobile apps (Android & iOS) · Billing software · Windows tools · ERP & CRM systems

If your business is growing but your tools aren't keeping up — let's talk.

Read more: www.sollabstech.com/blog/custom-software-development-india

📞 +91 90038 50743 | 📧 sollabstech@gmail.com | 🌐 www.sollabstech.com

#CustomSoftware #SoftwareDevelopment #IndianBusiness #SMEIndia #ERPSystem #BillingSoftware #SollabsTech #MaduraiTech #TechStartup #BusinessGrowthIndia`;

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

        {/* Section: Blog Social Posts */}
        <div style={{ marginBottom: 8 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "white", marginBottom: 4 }}>📝 Blog Promotion Posts</h2>
          <p style={{ fontSize: 13, color: "#475569" }}>Share these on LinkedIn & Facebook to promote the new blog articles.</p>
        </div>

        {/* Blog 1 — Website Dev Cost — LinkedIn */}
        <CopyCard
          label="LinkedIn · Website Development Cost in India (Blog 1)"
          color="#0077B5"
          icon="💼"
          text={webDevLinkedInPost}
        />

        {/* Blog 1 — Website Dev Cost — Facebook */}
        <CopyCard
          label="Facebook · Website Development Cost in India (Blog 1)"
          color="#1877F2"
          icon="📘"
          text={webDevFacebookPost}
        />

        {/* Blog 2 — Custom Software — LinkedIn */}
        <CopyCard
          label="LinkedIn · Why Businesses Need Custom Software (Blog 2)"
          color="#0077B5"
          icon="💼"
          text={softwareLinkedInPost}
        />

        {/* Blog 2 — Custom Software — Facebook */}
        <CopyCard
          label="Facebook · Why Businesses Need Custom Software (Blog 2)"
          color="#1877F2"
          icon="📘"
          text={softwareFacebookPost}
        />

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: 8, marginBottom: 40 }} />

        {/* Section: Page Posts */}
        <div style={{ marginBottom: 8 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "white", marginBottom: 4 }}>📣 Page Promotion Posts</h2>
          <p style={{ fontSize: 13, color: "#475569" }}>Original posts for your Tech and Laptop Facebook pages.</p>
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
