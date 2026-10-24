import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle, { h2, h3, p, strong, link, list, Callout, CardGrid, Table, type Faq } from "../_components/BlogArticle";

const slug = "used-laptop-price-india";
const title = "How Much Is My Used Laptop Worth in India? 2026 Second-Hand Laptop Price Guide";
const description =
  "Typical 2026 second-hand prices for i3, i5, i7, Ryzen, gaming laptops and MacBooks in India, what raises or lowers the price, and a free used laptop price calculator.";

export const metadata: Metadata = {
  title: "Used Laptop Price in India 2026: What Is It Worth? | Sollabs Tech",
  description,
  keywords: [
    "used laptop price india",
    "second hand laptop price",
    "how much is my laptop worth",
    "old laptop resale value",
    "i5 laptop second hand price",
    "gaming laptop resale value india",
    "sell old laptop madurai",
  ],
  alternates: { canonical: `/blog/${slug}` },
  openGraph: { type: "article", title, description, url: `https://www.sollabstech.com/blog/${slug}`, publishedTime: "2026-10-24" },
};

const faqs: Faq[] = [
  {
    q: "How much is a used i5 laptop worth in India?",
    a: "A 2–3 year old Intel i5 11th Gen laptop with 8GB RAM and a 512GB SSD in good condition is typically worth about ₹17,500–₹20,500 between two people in 2026. A 12th Gen i5 with 16GB RAM is closer to ₹26,000–₹30,500.",
  },
  {
    q: "What affects a second-hand laptop's price the most?",
    a: "The processor and its generation matter most, followed by a dedicated graphics card (for gaming laptops), RAM and SSD size, then the laptop's age and condition. What comes with it also counts: charger, box and bill add value.",
  },
  {
    q: "Do laptops under warranty sell for more?",
    a: "Yes. A laptop under about 10 months old usually still has its brand warranty, which buyers will pay a little more for. Keep the bill to prove the purchase date.",
  },
  {
    q: "Where can I check my laptop's value?",
    a: "Use the free Sollabs Tech used laptop price calculator at sollabstech.com/laptop-price-calculator. Pick the brand, processor, generation, RAM, storage, graphics, age, condition and what's included to get an estimate.",
  },
  {
    q: "Will Sollabs Tech buy my old laptop?",
    a: "Yes. Fill in the Sell form at sollabstech.com/sell or WhatsApp +91 90038 50743 with the details and photos, and we'll send you an offer, usually the same day.",
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
      breadcrumb="Used Laptop Price Guide"
      faqs={faqs}
      intro={
        <>
          Selling an old laptop, or checking whether a second-hand deal is fair? The price depends on a handful of things you can see on the spec sheet. Here&apos;s what a used laptop is typically worth in India in 2026, what moves the price, and how to check your own laptop in a minute with our{" "}
          <Link href="/laptop-price-calculator" style={link}>free used laptop price calculator</Link>.
        </>
      }
      cta={{
        title: "Check your laptop's value",
        text: "Pick your laptop's details and see an estimate instantly, then sell it to us if you like the number.",
        whatsappText: "Hi Sollabs Tech, I want to sell my laptop. Details: ",
        primary: { href: "/laptop-price-calculator", label: "Open Laptop Price Calculator" },
      }}
    >
      <h2 style={h2}>Typical used laptop prices in India (2026)</h2>
      <p style={p}>
        These are fair prices between two people for laptops in <strong style={strong}>good condition</strong>, sold with the charger. Your exact price depends on the model, screen and how the laptop tests.
      </p>
      <Table
        head={["Laptop", "Age", "Typical value"]}
        rows={[
          ["Intel i3 10th Gen, 8GB, 256GB SSD", "4 years", "₹7,000 – ₹8,500"],
          ["Intel i5 8th Gen, 8GB, 256GB SSD", "5 years", "₹8,500 – ₹10,000"],
          ["Intel i5 11th Gen, 8GB, 512GB SSD", "3 years", "₹17,500 – ₹20,500"],
          ["Ryzen 5 5000 series, 16GB, 512GB SSD", "2.5 years", "₹21,000 – ₹24,500"],
          ["Intel i7 11th Gen, 16GB, 512GB SSD", "3 years", "₹24,000 – ₹28,500"],
          ["Intel i5 12th Gen, 16GB, 512GB SSD", "2 years", "₹26,000 – ₹30,500"],
          ["MacBook Air M1, 8GB, 256GB", "4 years", "₹25,000 – ₹29,000"],
          ["Ryzen 7 6000 series, 16GB, RTX 3050", "2 years", "₹40,000 – ₹47,000"],
          ["MacBook Air M2, 8GB, 256GB", "2.5 years", "₹40,000 – ₹47,000"],
          ["Intel i7 12th Gen, 16GB, RTX 3060", "2 years", "₹45,000 – ₹53,000"],
        ]}
      />
      <Callout icon="🧮" title="Get the price for your exact laptop">
        Every laptop is different. The <Link href="/laptop-price-calculator" style={link}>laptop price calculator</Link>{" "}lets you choose Intel, AMD or Apple, the exact generation, GTX or RTX graphics, and what&apos;s included.
      </Callout>

      <h2 style={h2}>What decides a used laptop&apos;s price</h2>
      <CardGrid
        items={[
          { icon: "🧠", title: "Processor & generation", text: "An i5 12th Gen is worth far more than an i5 8th Gen. The generation matters as much as i3, i5 or i7." },
          { icon: "🎮", title: "Graphics card", text: "A dedicated GTX or RTX card adds a lot. An RTX 3060 laptop is worth much more than the same laptop without one." },
          { icon: "💾", title: "RAM & SSD", text: "16GB RAM and a 512GB or 1TB SSD sell better than 8GB and a hard disk." },
          { icon: "📅", title: "Age", text: "Laptops lose value every month. Under about 10 months old, the brand warranty usually still applies." },
          { icon: "✨", title: "Condition", text: "Scratches, dents, a weak hinge or a damaged screen lower the price quickly." },
          { icon: "📦", title: "What's included", text: "Charger, original box and bill all add value. A laptop alone sells for less." },
        ]}
      />

      <h2 style={h2}>How to get a better price</h2>
      <ul style={list}>
        <li><strong style={strong}>Keep the charger, box and bill together.</strong> A full kit is easier to sell and proves the purchase date.</li>
        <li><strong style={strong}>Clean it and fix small things</strong> like a loose keycap or a dusty fan before you sell.</li>
        <li><strong style={strong}>Back up and reset Windows</strong> so the buyer can test it straight away.</li>
        <li><strong style={strong}>Upgrade cheap parts first.</strong> Moving from a hard disk to an SSD, or from 8GB to 16GB RAM, often adds more value than it costs. See our{" "}
          <Link href="/blog/laptop-ram-ssd-upgrade-madurai" style={link}>RAM and SSD upgrade guide</Link>.</li>
        <li><strong style={strong}>Take clear photos</strong> of the screen on, the keyboard, the ports and any marks.</li>
      </ul>

      <h3 style={h3}>Buying second-hand? Check before you pay</h3>
      <p style={p}>
        Use the same calculator to see if a seller&apos;s asking price is fair, and read our guide to buying a{" "}
        <Link href="/blog/used-laptop-with-warranty-madurai" style={link}>used laptop with warranty</Link>. Every laptop we sell is tested and comes with a 7-day refund, 1-month exchange and 1 year of free service. Browse the current{" "}
        <Link href="/products?category=laptop" style={link}>Sollabs Tech laptop list</Link>.
      </p>

      <h3 style={h3}>Ready to sell?</h3>
      <p style={p}>
        Fill in the <Link href="/sell" style={link}>Sell your device</Link>{" "}form and we&apos;ll call or WhatsApp you with an offer, usually the same day.
      </p>
    </BlogArticle>
  );
}
