import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle, { h2, h3, p, strong, link, list, Callout, CardGrid, type Faq } from "../_components/BlogArticle";

const slug = "sollabs-tech-services-madurai";
const title = "Laptop Shop, Service Centre & Software Company in Madurai: Every Sollabs Tech Service Explained";
const description =
  "Laptops, gaming laptops, custom PCs, used phones, laptop servicing and upgrades, plus mobile app, website and custom software development: all Sollabs Tech services in Madurai, in one guide.";

export const metadata: Metadata = {
  title: "Laptop Shop, Service Centre & Software Company in Madurai – Sollabs Tech Services",
  description,
  keywords: [
    "laptop shop in madurai",
    "laptop service centre madurai",
    "refurbished laptop madurai",
    "custom pc build madurai",
    "gaming laptop madurai",
    "software company in madurai",
    "website development madurai",
    "mobile app development madurai",
    "sollabs tech services",
  ],
  alternates: { canonical: `/blog/${slug}` },
  openGraph: {
    type: "article",
    title,
    description,
    url: `https://www.sollabstech.com/blog/${slug}`,
    publishedTime: "2026-10-09",
  },
};

const faqs: Faq[] = [
  {
    q: "What services does Sollabs Tech offer?",
    a: "Sollabs Tech sells quality-checked laptops, gaming laptops, custom PCs and used phones, services and upgrades the devices it sells, and builds software for businesses: mobile apps, websites, Windows software, e-commerce stores, admin panels and custom ERP/CRM systems.",
  },
  {
    q: "Where is Sollabs Tech located?",
    a: "Sollabs Tech is based in Madurai, Tamil Nadu. Laptops and custom PCs are delivered across India, and software projects are handled for clients anywhere.",
  },
  {
    q: "Does Sollabs Tech deliver laptops outside Madurai?",
    a: "Yes. We deliver laptops and custom PCs across India. Message us on WhatsApp at +91 90038 50743 with your city and budget.",
  },
  {
    q: "Is laptop servicing free at Sollabs Tech?",
    a: "For devices bought from Sollabs Tech, servicing, diagnostics and general maintenance are free for one year. If a hardware part must be replaced, you pay only for the part.",
  },
  {
    q: "Can Sollabs Tech build an app or website for my business?",
    a: "Yes. We build Android and iOS apps, business websites, e-commerce stores, admin panels, Windows software and custom systems such as ERP and CRM. You can see real projects on our Clients page.",
  },
  {
    q: "How do I contact Sollabs Tech?",
    a: "Call or WhatsApp +91 90038 50743, email sollabstech@gmail.com, or use the contact form at sollabstech.com/contact.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      slug={slug}
      tag="Services"
      datePublished="2026-10-09"
      title={title}
      description={description}
      breadcrumb="Sollabs Tech Services"
      faqs={faqs}
      intro={
        <>
          Sollabs Tech is a Madurai technology company with two sides: a <strong style={strong}>laptop, PC and phone store</strong> with its own service centre, and a <strong style={strong}>software development studio</strong> that builds apps and websites for businesses. Whether you need a laptop for college, a gaming rig, a repair, or an app for your shop, this guide shows exactly what we do and how to get started.
        </>
      }
      cta={{
        title: "Tell us what you need",
        text: "A laptop, an upgrade, a service, or a new app. Send one message and we'll reply with options.",
        whatsappText: "Hi Sollabs Tech, I'd like to know more about your services. I need ",
        primary: { href: "/contact", label: "Contact Us" },
      }}
    >
      <h2 style={h2}>Quick overview</h2>
      <CardGrid
        items={[
          { icon: "💻", title: "Laptops", text: "Quality-checked refurbished, budget, business and gaming laptops, delivered across India.", color: "#00AAFF" },
          { icon: "🖥️", title: "Custom PCs", text: "Gaming and work PCs built to your budget and the software you run.", color: "#A855F7" },
          { icon: "📱", title: "Phones", text: "Quality-checked used high-end phones such as iPhone, ASUS ROG and rugged phones.", color: "#22C55E" },
          { icon: "🛠️", title: "Service & upgrades", text: "Diagnostics, software servicing, RAM and SSD upgrades at our service centre.", color: "#F59E0B" },
          { icon: "📲", title: "App & web development", text: "Android/iOS apps, websites, e-commerce stores and admin panels for businesses.", color: "#00AAFF" },
          { icon: "⚙️", title: "Custom software", text: "Windows software, ERP, CRM and automation tools built around how you work.", color: "#F97316" },
        ]}
      />

      <h2 style={h2}>1. Laptops: refurbished, budget, business and gaming</h2>
      <p style={p}>
        Our core business is <strong style={strong}>quality-checked laptops</strong>{" "}at prices that make sense. Each one is checked before it&apos;s listed, sold with a bill, and covered by our after-sales warranty. Typical buyers:
      </p>
      <ul style={list}>
        <li><strong style={strong}>Students:</strong> reliable laptops for classes, coding and projects.</li>
        <li><strong style={strong}>Working professionals:</strong> business laptops that handle Office, browsers and video calls all day.</li>
        <li><strong style={strong}>Gamers and creators:</strong> gaming laptops with dedicated graphics for games, editing and 3D work.</li>
      </ul>
      <p style={p}>
        Browse current stock on our <Link href="/products" style={link}>products page</Link>. Can&apos;t find the right model? WhatsApp us your budget and use, and we&apos;ll suggest options.
      </p>

      <h2 style={h2}>2. Custom PCs and gaming rigs</h2>
      <p style={p}>
        A pre-built PC rarely matches your exact needs. We build <strong style={strong}>custom PCs</strong>{" "}around what you actually run, whether that&apos;s competitive games, video editing, or a quiet office machine. Tell us your budget and software, and we&apos;ll recommend parts that balance performance and price.
      </p>

      <h2 style={h2}>3. Phones</h2>
      <p style={p}>
        Sollabs Tech also sells <strong style={strong}>quality-checked used phones</strong>, focused on high-end models like iPhone, ASUS ROG gaming phones and rugged phones. Stock changes often, so read our{" "}
        <Link href="/blog/buy-second-hand-mobile-madurai" style={link}>second-hand mobile guide</Link>{" "}or message us for what&apos;s available today.
      </p>

      <h2 style={h2}>4. Laptop service, repairs and upgrades</h2>
      <p style={p}>
        Every laptop and mobile we sell comes with a four-step after-sales warranty, so you&apos;re never left alone after the sale:
      </p>
      <ul style={list}>
        <li><strong style={strong}>7-day full refund</strong> if you&apos;re not satisfied</li>
        <li><strong style={strong}>1-month exchange:</strong> move to a higher or lower model and settle the difference</li>
        <li><strong style={strong}>6-month upgrade offer:</strong> RAM and SSD upgrades at 90% of parts cost, with free installation</li>
        <li><strong style={strong}>1-year free service:</strong> free diagnostics, software servicing and maintenance</li>
      </ul>
      <p style={p}>
        The full details are in our <Link href="/blog/used-laptop-with-warranty-madurai" style={link}>used laptop warranty guide</Link> and our{" "}
        <Link href="/blog/laptop-ram-ssd-upgrade-madurai" style={link}>RAM &amp; SSD upgrade guide</Link>.
      </p>

      <h2 style={h2}>5. Software development for businesses</h2>
      <p style={p}>
        Sollabs Tech started in 2020 as a software studio, and it&apos;s still a big part of what we do. We build:
      </p>
      <h3 style={h3}>Mobile apps</h3>
      <p style={p}>Android and iOS apps for businesses, from customer-facing apps to internal tools your team uses every day.</p>
      <h3 style={h3}>Websites and e-commerce</h3>
      <p style={p}>
        Fast business websites, online stores with payments and order tracking, and vendor websites. Wondering about budget? Read{" "}
        <Link href="/blog/website-development-cost-india" style={link}>how much website development costs in India</Link>.
      </p>
      <h3 style={h3}>Admin panels, Windows software and custom systems</h3>
      <p style={p}>
        Admin dashboards to run your business, Windows desktop software, and custom ERP and CRM systems. See why off-the-shelf tools often fall short in{" "}
        <Link href="/blog/custom-software-development-india" style={link}>why Indian businesses need custom software</Link>.
      </p>
      <Callout icon="⭐" title="See real projects and reviews">
        Every project on our <Link href="/clients" style={link}>Clients &amp; Projects page</Link> is a real client, with the services we delivered and their review.
      </Callout>

      <h2 style={h2}>Why choose Sollabs Tech?</h2>
      <ul style={list}>
        <li><strong style={strong}>One team, before and after you buy:</strong> we sell, service and upgrade our own devices.</li>
        <li><strong style={strong}>Clear after-sales promise:</strong> refund, exchange, upgrade and free service, in writing.</li>
        <li><strong style={strong}>Local and nationwide:</strong> based in Madurai, delivering laptops across India.</li>
        <li><strong style={strong}>Hardware and software under one roof:</strong> the same company can supply your office laptops and build your business software.</li>
      </ul>

      <h2 style={h2}>How to get started</h2>
      <ol style={list}>
        <li>WhatsApp <strong style={strong}>+91 90038 50743</strong> or email <strong style={strong}>sollabstech@gmail.com</strong>.</li>
        <li>Tell us what you need: a device with your budget, a service request, or a short description of your software idea.</li>
        <li>We reply with options, pricing and next steps.</li>
      </ol>
      <p style={p}>
        New to us? Read <Link href="/blog/what-is-sollabs-tech" style={link}>who Sollabs Tech is</Link>, or follow us on our{" "}
        <Link href="/blog/sollabs-tech-social-media" style={link}>official social media profiles</Link>.
      </p>
    </BlogArticle>
  );
}
