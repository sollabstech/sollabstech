import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle, { h2, h3, p, strong, link, list, Callout, CardGrid, Table, type Faq } from "../_components/BlogArticle";

const slug = "sell-old-laptop-phone-madurai";
const title = "How to Sell Your Old Laptop or Phone in Madurai for the Best Price";
const description =
  "A simple guide to selling a used laptop or mobile in Madurai: check its value, prepare it, wipe your data and get a same-day offer from Sollabs Tech.";

export const metadata: Metadata = {
  title: "Sell Old Laptop or Phone in Madurai – Best Price Guide | Sollabs Tech",
  description,
  keywords: [
    "sell old laptop madurai",
    "sell used mobile madurai",
    "sell second hand laptop",
    "old laptop buyer madurai",
    "sell iphone madurai",
    "laptop exchange madurai",
  ],
  alternates: { canonical: `/blog/${slug}` },
  openGraph: { type: "article", title, description, url: `https://www.sollabstech.com/blog/${slug}`, publishedTime: "2026-10-24" },
};

const faqs: Faq[] = [
  {
    q: "Where can I sell my old laptop in Madurai?",
    a: "Sollabs Tech in Madurai buys used laptops and phones. Fill in the form at sollabstech.com/sell or WhatsApp +91 90038 50743 with the details and photos, and we'll send an offer, usually the same day.",
  },
  {
    q: "How do I know what my laptop or phone is worth?",
    a: "Use the free price calculators at sollabstech.com/laptop-price-calculator and sollabstech.com/mobile-price-calculator. They estimate the value from the model, specs, age, condition and what's included.",
  },
  {
    q: "Should I sell to a shop or to a person?",
    a: "A person may pay a little more, but it takes time and carries risk. A shop pays faster, tests the device for you and handles the paperwork.",
  },
  {
    q: "What should I do before selling my device?",
    a: "Back up your files, sign out of your accounts (iCloud or Google, with Find My turned off), reset the device, and keep the charger, box and bill together.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      slug={slug}
      tag="Sell"
      datePublished="2026-10-24"
      title={title}
      description={description}
      breadcrumb="Sell Your Old Laptop or Phone"
      faqs={faqs}
      intro={
        <>
          Got a laptop or phone you no longer use? Selling it is easy if you know its value and prepare it properly. Here&apos;s how to get the best price in Madurai, step by step, and how to sell it to <strong style={strong}>Sollabs Tech</strong> with a same-day offer.
        </>
      }
      cta={{
        title: "Get an offer for your device",
        text: "Tell us about your laptop or phone and we'll call or WhatsApp you with a price, usually the same day.",
        whatsappText: "Hi Sollabs Tech, I want to sell my device. Details: ",
        primary: { href: "/sell", label: "Sell Your Device" },
      }}
    >
      <h2 style={h2}>Step 1: Check what it&apos;s worth</h2>
      <p style={p}>
        Start with a fair number so you don&apos;t sell too cheap or ask too much. Our free calculators take a minute:
      </p>
      <ul style={list}>
        <li><Link href="/laptop-price-calculator" style={link}>Used laptop price calculator</Link>: brand, Intel/AMD/Apple processor and generation, RAM, SSD or hard disk, GTX/RTX graphics, age and condition.</li>
        <li><Link href="/mobile-price-calculator" style={link}>Used mobile price calculator</Link>: iPhone, Samsung, OnePlus, Pixel, ROG or any phone, storage, battery health and condition.</li>
      </ul>
      <p style={p}>
        Want typical numbers first? See the{" "}
        <Link href="/blog/used-laptop-price-india" style={link}>used laptop price guide</Link>{" "}and the{" "}
        <Link href="/blog/second-hand-iphone-price-india" style={link}>second-hand iPhone price list</Link>.
      </p>

      <h2 style={h2}>Step 2: Prepare it</h2>
      <CardGrid
        items={[
          { icon: "📦", title: "Gather the kit", text: "Charger, original box and bill. A full kit sells for more than the device alone." },
          { icon: "🧽", title: "Clean it", text: "Wipe the screen, keyboard and body. First impressions change the price." },
          { icon: "📷", title: "Take photos", text: "Screen on, keyboard, ports, back and any marks, in good light." },
          { icon: "🔋", title: "Note the battery", text: "On iPhone, check Battery Health. On laptops, note how long it lasts." },
        ]}
      />

      <h2 style={h2}>Step 3: Protect your data</h2>
      <Table
        head={["Device", "What to do"]}
        rows={[
          ["Windows laptop", "Back up files, sign out of Microsoft and browsers, then Settings › System › Recovery › Reset this PC › Remove everything."],
          ["MacBook", "Back up with Time Machine, sign out of Apple ID and turn off Find My, then erase the Mac."],
          ["iPhone", "Back up, sign out of iCloud with Find My off, then Settings › General › Transfer or Reset iPhone › Erase All Content and Settings."],
          ["Android phone", "Back up, remove your Google account, then do a factory reset from Settings."],
        ]}
      />
      <Callout icon="⚠️" title="Remove your accounts first" color="#F59E0B">
        A phone or Mac still linked to your iCloud or Google account is locked for the next owner, and no buyer can accept it.
      </Callout>

      <h2 style={h2}>Step 4: Get an offer from Sollabs Tech</h2>
      <ol style={list}>
        <li>Fill in the <Link href="/sell" style={link}>Sell your device</Link>{" "}form with the brand, model, specs, condition and your expected price.</li>
        <li>Send photos on WhatsApp to <strong style={strong}>+91 90038 50743</strong> for a more accurate offer.</li>
        <li>We call or message you with a price, usually the same day.</li>
        <li>Agree on the price, hand over the device, and get paid.</li>
      </ol>

      <h3 style={h3}>Upgrading after you sell?</h3>
      <p style={p}>
        Browse the{" "}
        <Link href="/products" style={link}>Sollabs Tech laptop and mobile list</Link>. Every device is tested and comes with a 7-day refund, a{" "}
        <Link href="/blog/laptop-exchange-offer-madurai" style={link}>1-month exchange</Link>{" "}and 1 year of free service.
      </p>
    </BlogArticle>
  );
}
