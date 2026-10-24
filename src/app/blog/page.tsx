import Link from "next/link";

export const metadata = {
  title: "Blog – Sollabs Tech",
  description: "Tech insights, laptop buying guides, warranty information, and business tips from the Sollabs Tech team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog – Sollabs Tech",
    description: "Practical tech guides, laptop tips, warranty guides, and software development insights for Indian businesses.",
    url: "https://www.sollabstech.com/blog",
  },
};

const posts = [
  {
    slug: "used-laptop-price-india",
    tag: "Price Guide",
    date: "October 24, 2026",
    title: "How Much Is My Used Laptop Worth in India? 2026 Second-Hand Laptop Price Guide",
    excerpt:
      "Typical 2026 second-hand prices for i3, i5, i7, Ryzen, gaming laptops and MacBooks, what raises or lowers the price, and a free used laptop price calculator.",
    readTime: "6 min read",
    icon: "💻",
  },
  {
    slug: "second-hand-iphone-price-india",
    tag: "Price Guide",
    date: "October 24, 2026",
    title: "Second-Hand iPhone Price in India 2026: iPhone 11 to iPhone 17 Pro Max",
    excerpt:
      "Used iPhone prices from iPhone 11 to 17 Pro Max, how storage, battery health and condition change the price, and what to check before you buy or sell.",
    readTime: "6 min read",
    icon: "📱",
  },
  {
    slug: "sell-old-laptop-phone-madurai",
    tag: "Sell",
    date: "October 24, 2026",
    title: "How to Sell Your Old Laptop or Phone in Madurai for the Best Price",
    excerpt:
      "Check its value, prepare it, wipe your data and get a same-day offer: a simple guide to selling a used laptop or mobile in Madurai.",
    readTime: "5 min read",
    icon: "💰",
  },
  {
    slug: "sollabs-tech-bill-tax-invoice",
    tag: "Billing",
    date: "October 12, 2026",
    title: "Sollabs Tech Bill Explained: How to Read Your Tax Invoice (With Sample)",
    excerpt:
      "See a sample Sollabs Tech tax invoice and what each part means: invoice number, serial number or IMEI, GST, warranty promise, seal and signature, and how to check your bill is genuine.",
    readTime: "5 min read",
    icon: "🧾",
  },
  {
    slug: "used-phone-warranty-madurai",
    tag: "Phone Warranty",
    date: "October 11, 2026",
    title: "Used Phone With Warranty in Madurai: 7-Day Refund, 1-Month Exchange and 1-Year Free Service",
    excerpt:
      "Buying a second-hand iPhone or gaming phone? Every Sollabs Tech phone includes a 7-day refund, 1-month exchange and 1 year of free service, plus a checklist for testing a used phone.",
    readTime: "6 min read",
    icon: "📱",
  },
  {
    slug: "free-laptop-service-madurai",
    tag: "Free Service",
    date: "October 11, 2026",
    title: "Free Laptop Service for 1 Year in Madurai: What's Included After You Buy",
    excerpt:
      "Diagnostics, software servicing and maintenance are free for a year on every Sollabs Tech laptop. What's covered, warning signs your laptop needs a service, and how to book.",
    readTime: "5 min read",
    icon: "🛠️",
  },
  {
    slug: "how-much-ram-do-i-need-laptop",
    tag: "Buying Guide",
    date: "October 11, 2026",
    title: "How Much RAM Do You Need in a Laptop? 8GB vs 16GB vs 32GB Explained",
    excerpt:
      "A plain-English guide to choosing laptop RAM for study, office work, coding, gaming and editing, how to check your RAM usage, and when an upgrade is worth it.",
    readTime: "6 min read",
    icon: "🧠",
  },
  {
    slug: "laptop-exchange-offer-madurai",
    tag: "Exchange Offer",
    date: "October 11, 2026",
    title: "Laptop Exchange Offer in Madurai: Swap Your Laptop Within 1 Month and Settle the Difference",
    excerpt:
      "Need more power, a lighter laptop or a bigger screen? Within 1 month, exchange your laptop for a higher model (pay the difference) or a lower one (get the balance back).",
    readTime: "5 min read",
    icon: "🔁",
  },
  {
    slug: "laptop-refund-policy-7-days",
    tag: "Refund Policy",
    date: "October 11, 2026",
    title: "7-Day Laptop Refund Policy: How to Return a Laptop and Get 100% of Your Money Back",
    excerpt:
      "Not happy with your laptop? Return it within 7 days for a full refund. What counts as original condition, what to test in those 7 days, and how to request your refund.",
    readTime: "5 min read",
    icon: "💸",
  },
  {
    slug: "custom-laptop-custom-pc-india",
    tag: "Buying Guide",
    date: "October 11, 2026",
    title: "Custom Laptop vs Custom PC in India: What You Can Customise and How to Order",
    excerpt:
      "What can you really customise on a laptop, and when is a custom-built PC the better buy? A plain-English guide, plus how to get either configured by Sollabs Tech in Madurai.",
    readTime: "5 min read",
    icon: "🖥️",
  },
  {
    slug: "used-laptop-with-warranty-madurai",
    tag: "Warranty",
    date: "October 9, 2026",
    title: "Used Laptop With Warranty in Madurai: 7-Day Refund, 1-Month Exchange & 1-Year Free Service",
    excerpt:
      "Buying a used or refurbished laptop? Every Sollabs Tech laptop and mobile comes with a 7-day refund, 1-month exchange, 6-month upgrade offer and 1 year of free service. Here's how each step works.",
    readTime: "6 min read",
    icon: "🛡️",
  },
  {
    slug: "laptop-ram-ssd-upgrade-madurai",
    tag: "Upgrade Offer",
    date: "October 9, 2026",
    title: "Laptop RAM & SSD Upgrade in Madurai: Pay Only 90% of Parts Cost, Free Installation",
    excerpt:
      "Laptop slow or out of space? Within 6 months of buying from Sollabs Tech, upgrade RAM or SSD at 90% of the parts cost with free installation. Learn which upgrade you need and how to claim it.",
    readTime: "5 min read",
    icon: "⚡",
  },
  {
    slug: "sollabs-tech-services-madurai",
    tag: "Services",
    date: "October 9, 2026",
    title: "Laptop Shop, Service Centre & Software Company in Madurai: Every Sollabs Tech Service Explained",
    excerpt:
      "Laptops, gaming laptops, custom PCs, used phones, servicing and upgrades, plus mobile apps, websites and custom software for businesses. Everything Sollabs Tech does, in one guide.",
    readTime: "6 min read",
    icon: "🧰",
  },
  {
    slug: "buy-second-hand-mobile-madurai",
    tag: "Phones",
    date: "September 16, 2026",
    title: "Buy Second Hand Mobile in Madurai – Used iPhones, ROG Phones & More",
    excerpt:
      "Looking to buy a second hand or used phone in Madurai? Sollabs Tech sells quality-checked used iPhones, ASUS ROG gaming phones, and rugged phones — with box & bill, shipped across India.",
    readTime: "5 min read",
    icon: "📱",
  },
  {
    slug: "sollabs-tech-mobile-phone-madurai",
    tag: "Phones",
    date: "September 16, 2026",
    title: "Sollabs Tech Now Sells Phones – Used iPhones, ROG & More",
    excerpt:
      "Searched for 'Sollabs Tech mobile' or 'Sollabs Tech phone'? Yes — Sollabs Tech now sells quality-checked used iPhones, ASUS ROG gaming phones, and rugged mobiles from Madurai.",
    readTime: "4 min read",
    icon: "📲",
  },
  {
    slug: "asus-rog-phone-5s-pro-price-madurai",
    tag: "For Sale",
    date: "September 16, 2026",
    title: "ASUS ROG Phone 5s Pro: For Sale With Box & Bill",
    excerpt:
      "An ASUS ROG Phone 5s Pro in brand-new condition — no scratches, no dents, no dust — is available through Sollabs Tech Phones for ₹25,000, complete with original box and bill. One unit only.",
    readTime: "3 min read",
    icon: "🎮",
  },
  {
    slug: "t-bala-murugan-founder-qa",
    tag: "Founder Q&A",
    date: "September 2, 2026",
    title: "T Bala Murugan on Building Sollabs Tech: A Founder Q&A",
    excerpt:
      "A condensed Q&A with Sollabs Tech founder T Bala Murugan — starting solo in Madurai in 2020, moving into software and hardware, the 2024 award, and advice for first-time founders.",
    readTime: "6 min read",
    icon: "🎙️",
  },
  {
    slug: "bala-murugan-founder-story",
    tag: "Founder Story",
    date: "September 2, 2026",
    title: "T Bala Murugan: The Founder Story Behind Sollabs Tech",
    excerpt:
      "T Bala Murugan, known as Bala, started Sollabs Tech in Madurai in 2020 as a one-person web studio. Today he runs two technology ventures with a team of around 40.",
    readTime: "5 min read",
    icon: "🚀",
  },
  {
    slug: "sollabs-tech-founder-bala-murugan",
    tag: "Founder",
    date: "August 20, 2026",
    title: "Who Founded Sollabs Tech? Meet T Bala Murugan – Madurai, Tamil Nadu",
    excerpt: "Sollabs Tech was founded by T Bala Murugan in Madurai, Tamil Nadu in 2020. Learn about the founder's story, vision, and what makes Sollabs Tech different.",
    readTime: "4 min read",
    icon: "👤",
  },
  {
    slug: "sollabs-tech-social-media",
    tag: "Official Profiles",
    date: "August 20, 2026",
    title: "Sollabs Tech Official Social Media – LinkedIn, Facebook & Instagram (All Links)",
    excerpt: "Looking for Sollabs Tech on LinkedIn or Facebook? This page lists every official Sollabs Tech social media profile with direct links. We are NOT SolTech InfoLabs.",
    readTime: "3 min read",
    icon: "📲",
  },
  {
    slug: "website-development-cost-india",
    tag: "Web Development",
    date: "August 20, 2026",
    title: "How Much Does Website Development Cost in India? (2025 Complete Guide)",
    excerpt: "Clear, honest pricing for every type of website — landing pages to full web applications. Know exactly what you'll pay before you talk to any developer.",
    readTime: "8 min read",
    icon: "🌐",
  },
  {
    slug: "custom-software-development-india",
    tag: "Software Development",
    date: "August 20, 2026",
    title: "Why Indian Businesses Need Custom Software in 2025 (Not Off-the-Shelf)",
    excerpt: "Still using WhatsApp and Excel to run your business? Here are 5 signs your business is ready for custom software — and what Sollabs Tech builds for you.",
    readTime: "7 min read",
    icon: "💻",
  },
  {
    slug: "what-is-sollabs-tech",
    tag: "About Us",
    date: "August 17, 2026",
    title: "What Is Sollabs Tech? (Also Known as Sollab Tech, Solabs Tech) – Madurai, India",
    excerpt: "Searched for 'Sollab Tech', 'Solabs Tech', or 'Sollabstech'? You found the right place. Here's who we are, the correct spelling, and how to contact us.",
    readTime: "5 min read",
    icon: "🔍",
  },
  {
    slug: "how-to-check-laptop-warranty-sollabstech",
    tag: "Warranty Guide",
    date: "August 12, 2026",
    title: "How to Check Laptop Warranty Online: HP, Dell, Lenovo, ASUS, Acer & Apple (Step-by-Step)",
    excerpt: "Find your serial number, then use the official HP, Dell, Lenovo, ASUS, Acer, Apple or MSI warranty checker. Plus how to check the warranty on a Sollabs Tech laptop.",
    readTime: "4 min read",
    icon: "🔍",
  },
  {
    slug: "sollabs-tech-laptop-warranty-replacement",
    tag: "Customer Story",
    date: "August 2, 2026",
    title: "When Our Customer's Laptop Was Damaged During Travel — How Sollabs Tech Responded",
    excerpt: "A customer's laptop was accidentally damaged during travel. Instead of turning them away, Sollabs Tech provided an MSI replacement. A real after-sales support story.",
    readTime: "6 min read",
    icon: "🤝",
  },
  {
    slug: "sollabstech-warranty-policy",
    tag: "Warranty",
    date: "August 2, 2026",
    title: "Sollabs Tech Warranty Policy – What's Covered & How to Check Your Warranty Status",
    excerpt: "Every Sollabs Tech laptop and mobile is covered by a 7-day refund, 1-month exchange, 6-month upgrade offer and 1-year free service. Here's how to check which applies to you and how to claim it.",
    readTime: "4 min read",
    icon: "🛡️",
  },
];

export default function BlogPage() {
  return (
    <>
      <section style={{ paddingTop: 120, paddingBottom: 60, paddingLeft: 24, paddingRight: 24, textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <span className="section-tag" style={{ marginBottom: 16, display: "inline-flex" }}>📝 Blog</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", fontWeight: 800, marginBottom: 16 }}>
            Tech Insights &amp; <span className="gradient-text">Practical Tips</span>
          </h1>
          <p style={{ color: "#6B7A94", fontSize: 17, lineHeight: 1.7 }}>
            Tutorials, buying guides, warranty information, and tech insights from the Sollabs Tech team.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 24px 120px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24 }}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: "none", display: "block" }}
            >
              <article
                className="card-hover"
                style={{
                  padding: "28px 32px",
                  borderRadius: 18,
                  background: "rgba(10,22,40,0.7)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  display: "flex",
                  gap: 24,
                  alignItems: "flex-start",
                  cursor: "pointer",
                }}
              >
                <div style={{ fontSize: 40, flexShrink: 0, paddingTop: 4 }}>{post.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12, flexWrap: "wrap" }}>
                    <span style={{ padding: "3px 10px", borderRadius: 100, fontSize: 11, fontWeight: 600, background: "rgba(0,102,255,0.15)", border: "1px solid rgba(0,102,255,0.3)", color: "#00AAFF" }}>
                      {post.tag}
                    </span>
                    <span style={{ fontSize: 12, color: "#475569" }}>{post.date}</span>
                    <span style={{ fontSize: 12, color: "#475569" }}>· {post.readTime}</span>
                  </div>
                  <h2 style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", fontWeight: 700, color: "white", marginBottom: 10, lineHeight: 1.3 }}>
                    {post.title}
                  </h2>
                  <p style={{ fontSize: 14, color: "#6B7A94", lineHeight: 1.7, margin: 0 }}>
                    {post.excerpt}
                  </p>
                  <div style={{ marginTop: 14, fontSize: 13, fontWeight: 600, color: "#00AAFF" }}>
                    Read article →
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
