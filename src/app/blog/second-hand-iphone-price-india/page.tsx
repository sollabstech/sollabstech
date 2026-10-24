import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle, { h2, h3, p, strong, link, list, Callout, CardGrid, Table, type Faq } from "../_components/BlogArticle";

const slug = "second-hand-iphone-price-india";
const title = "Second-Hand iPhone Price in India 2026: iPhone 11 to iPhone 17 Pro Max";
const description =
  "Used iPhone prices in India for 2026, from iPhone 11 to 17 Pro Max, how storage, battery health and condition change them, and a free price calculator.";

export const metadata: Metadata = {
  title: "Second-Hand iPhone Price in India 2026 | Sollabs Tech",
  description,
  keywords: [
    "second hand iphone price india",
    "used iphone price",
    "iphone 13 second hand price",
    "iphone 14 resale value",
    "iphone 15 pro used price",
    "sell old iphone madurai",
    "used iphone madurai",
  ],
  alternates: { canonical: `/blog/${slug}` },
  openGraph: { type: "article", title, description, url: `https://www.sollabstech.com/blog/${slug}`, publishedTime: "2026-10-24" },
};

const faqs: Faq[] = [
  {
    q: "What is the second-hand price of an iPhone 13 in India?",
    a: "A used iPhone 13 with 128GB in good condition and 85–89% battery health is typically worth about ₹21,500–₹25,500 between two people in 2026. The Pro is around ₹28,000–₹33,000 and the Pro Max around ₹31,500–₹37,000.",
  },
  {
    q: "How much does battery health affect a used iPhone's price?",
    a: "Quite a lot. Below 80% battery health, buyers expect to replace the battery, so the price drops by roughly 10–12%. 90% or more keeps the full price.",
  },
  {
    q: "Does a replaced screen lower the price?",
    a: "Yes. A non-original screen or battery usually lowers the price by about 10%, and an iPhone with Face ID not working sells for around 20% less.",
  },
  {
    q: "How can I check my iPhone's resale value?",
    a: "Use the free Sollabs Tech mobile price calculator at sollabstech.com/mobile-price-calculator. Choose the model, storage, age, condition, battery health and what's included.",
  },
  {
    q: "Does Sollabs Tech buy used iPhones?",
    a: "Yes. Send the details on the Sell page at sollabstech.com/sell or WhatsApp +91 90038 50743 with photos, and we'll send an offer, usually the same day.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      slug={slug}
      tag="Price Guide"
      datePublished="2026-10-24"
      title={title}
      description={description}
      breadcrumb="Second-Hand iPhone Prices"
      faqs={faqs}
      intro={
        <>
          iPhones hold their value better than most phones, but the price still swings a lot with storage, battery health and condition. Here are typical 2026 second-hand iPhone prices in India, what changes them, and how to check your own phone with our{" "}
          <Link href="/mobile-price-calculator" style={link}>free used mobile price calculator</Link>.
        </>
      }
      cta={{
        title: "Check your iPhone's value",
        text: "Choose your model, storage, battery health and condition to see an estimate instantly.",
        whatsappText: "Hi Sollabs Tech, I want to sell my iPhone. Model: ",
        primary: { href: "/mobile-price-calculator", label: "Open Mobile Price Calculator" },
      }}
    >
      <h2 style={h2}>Used iPhone prices in India (2026)</h2>
      <p style={p}>
        Fair prices between two people for the <strong style={strong}>base storage (128GB)</strong>, good condition, 85–89% battery health, sold with a charger or cable.
      </p>
      <Table
        head={["Model", "Typical value"]}
        rows={[
          ["iPhone 11", "₹11,000 – ₹13,000"],
          ["iPhone 11 Pro / 11 Pro Max", "₹14,500 – ₹17,000"],
          ["iPhone 12 / 12 mini", "₹15,500 – ₹18,000"],
          ["iPhone 12 Pro", "₹20,000 – ₹23,500"],
          ["iPhone 12 Pro Max", "₹22,500 – ₹26,500"],
          ["iPhone 13 / 13 mini", "₹21,500 – ₹25,500"],
          ["iPhone 13 Pro", "₹28,000 – ₹33,000"],
          ["iPhone 13 Pro Max", "₹31,500 – ₹37,000"],
          ["iPhone 14 / 14 Plus", "₹27,500 – ₹32,000"],
          ["iPhone 14 Pro", "₹37,000 – ₹43,500"],
          ["iPhone 14 Pro Max", "₹41,000 – ₹48,000"],
          ["iPhone 15 / 15 Plus", "₹35,500 – ₹41,500"],
          ["iPhone 15 Pro", "₹46,500 – ₹54,500"],
          ["iPhone 15 Pro Max", "₹51,500 – ₹60,500"],
          ["iPhone 16 / 16 Plus", "₹43,500 – ₹51,000"],
          ["iPhone 16 Pro", "₹59,500 – ₹70,000"],
          ["iPhone 16 Pro Max", "₹66,000 – ₹77,500"],
          ["iPhone 17", "₹53,000 – ₹62,000"],
          ["iPhone 17 Pro", "₹76,500 – ₹89,500"],
          ["iPhone 17 Pro Max", "₹84,500 – ₹99,000"],
        ]}
      />
      <Callout icon="📱" title="Not an iPhone?">
        The <Link href="/mobile-price-calculator" style={link}>mobile price calculator</Link>{" "}also covers Samsung Galaxy S, Z Flip and Z Fold, OnePlus, Google Pixel, ASUS ROG, and any other phone by its price when new.
      </Callout>

      <h2 style={h2}>What changes a used iPhone&apos;s price</h2>
      <CardGrid
        items={[
          { icon: "💾", title: "Storage", text: "256GB adds about 10% over 128GB, and 512GB about 20%. 64GB models sell for less." },
          { icon: "🔋", title: "Battery health", text: "Check Settings › Battery › Battery Health. Below 80% lowers the price by around 10–12%." },
          { icon: "✨", title: "Condition", text: "Light scratches are normal. A cracked screen or back glass cuts the price by about 40%." },
          { icon: "🔧", title: "Original parts", text: "A replaced screen or battery that isn't original lowers the price by about 10%." },
          { icon: "🙂", title: "Face ID", text: "If Face ID doesn't work, expect about 20% less. Buyers check it first." },
          { icon: "📦", title: "Box & bill", text: "The original box, bill and charger add value and prove the phone isn't stolen." },
        ]}
      />

      <h2 style={h2}>Before you sell your iPhone</h2>
      <ol style={list}>
        <li>Back up to iCloud or your computer.</li>
        <li>Sign out of iCloud and turn off <strong style={strong}>Find My</strong>. A locked iPhone can&apos;t be sold.</li>
        <li>Go to Settings › General › Transfer or Reset iPhone › Erase All Content and Settings.</li>
        <li>Remove your SIM and any eSIM.</li>
        <li>Keep the box, bill and cable together.</li>
      </ol>

      <h3 style={h3}>Buying a used iPhone? Check these</h3>
      <ul style={list}>
        <li>Battery health, and Settings › General › About › Parts and Service History for replaced parts.</li>
        <li>Face ID, cameras, speakers, microphone and charging.</li>
        <li>That the IMEI on the box matches Settings › General › About.</li>
        <li>That the phone isn&apos;t locked to someone else&apos;s Apple ID.</li>
      </ul>
      <p style={p}>
        Every phone we sell is tested and comes with a 7-day refund, 1-month exchange and 1 year of free service. Read our{" "}
        <Link href="/blog/used-phone-warranty-madurai" style={link}>used phone warranty guide</Link>{" "}or browse the current{" "}
        <Link href="/products?category=mobile" style={link}>Sollabs Tech mobile list</Link>. Ready to sell? Use the{" "}
        <Link href="/sell" style={link}>Sell your device</Link>{" "}form.
      </p>
    </BlogArticle>
  );
}
