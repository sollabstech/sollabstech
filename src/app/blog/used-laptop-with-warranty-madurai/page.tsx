import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle, { h2, h3, p, strong, link, list, Callout, CardGrid, Table, type Faq } from "../_components/BlogArticle";

const slug = "used-laptop-with-warranty-madurai";
const title = "Used Laptop With Warranty in Madurai: 7-Day Refund, 1-Month Exchange & 1-Year Free Service";
const description =
  "Buying a used or refurbished laptop in Madurai? Sollabs Tech backs every laptop and mobile with a 7-day refund, 1-month exchange, 6-month upgrade offer and 1 year of free service.";

export const metadata: Metadata = {
  title: "Used Laptop With Warranty in Madurai – 7-Day Refund & 1-Year Free Service",
  description,
  keywords: [
    "used laptop with warranty madurai",
    "refurbished laptop warranty",
    "second hand laptop madurai",
    "refurbished laptop madurai",
    "laptop with 7 day refund",
    "laptop exchange offer madurai",
    "free laptop service 1 year",
    "sollabs tech warranty",
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
    q: "Do used laptops from Sollabs Tech come with a warranty?",
    a: "Yes. Every laptop and mobile sold by Sollabs Tech comes with a 7-day full refund, a 1-month exchange, a 6-month upgrade offer (pay only 90% of RAM or SSD parts cost, free installation) and 1 year of free service.",
  },
  {
    q: "Can I return a laptop if I don't like it?",
    a: "Yes. Return it within 7 days of purchase for a 100% refund of the amount you paid. The laptop must be in its original condition with all accessories and the box. Refunds are processed within 2–3 business days.",
  },
  {
    q: "How does the 1-month exchange work?",
    a: "Within 1 month you can exchange your device for another one in the same category (laptop for laptop, mobile for mobile). Pick a higher model and pay only the difference, or pick a lower model and we refund the balance.",
  },
  {
    q: "What is included in the 1-year free service?",
    a: "For one year, diagnostics, check-ups, software servicing and general maintenance are free at the Sollabs Tech service centre. If a hardware part has to be replaced, you pay only for the part.",
  },
  {
    q: "What does the warranty not cover?",
    a: "Physical damage such as drops and cracks, liquid damage, and devices that have been opened, repaired or modified by someone else are not covered.",
  },
  {
    q: "Does the warranty also apply to mobiles?",
    a: "Yes. The same 7-day refund, 1-month exchange, 6-month upgrade and 1-year free service apply to every laptop and mobile we sell.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      slug={slug}
      tag="Warranty"
      datePublished="2026-10-09"
      title={title}
      description={description}
      breadcrumb="Used Laptop With Warranty"
      faqs={faqs}
      intro={
        <>
          The biggest fear when buying a <strong style={strong}>used or refurbished laptop</strong> is simple: <em>&ldquo;What if something goes wrong after I pay?&rdquo;</em> At Sollabs Tech in Madurai, every laptop and mobile we sell is covered by a four-step after-sales warranty, starting with a <strong style={strong}>7-day full refund</strong> and ending with <strong style={strong}>1 full year of free service</strong>. Here&apos;s exactly how it works.
        </>
      }
      cta={{
        title: "Looking for a laptop that's covered from day one?",
        text: "Browse our quality-checked laptops, or message us your budget and we'll suggest the right one.",
        whatsappText: "Hi Sollabs Tech, I'm looking for a laptop with warranty. My budget is ",
        primary: { href: "/products", label: "Browse Laptops" },
      }}
    >
      <h2 style={h2}>Why warranty matters more on a used laptop</h2>
      <p style={p}>
        A new laptop from a brand showroom comes with the manufacturer&apos;s warranty. A second-hand laptop usually doesn&apos;t. Many local sellers offer a few days of &ldquo;checking time&rdquo; and nothing after that. If the battery, display or keyboard starts acting up a month later, you&apos;re on your own.
      </p>
      <p style={p}>
        That&apos;s why we built our own warranty around the four worries buyers actually have: <em>Is it the right laptop for me? Can I change my mind? Can I upgrade it later? Who fixes it if something goes wrong?</em>
      </p>

      <h2 style={h2}>The Sollabs Tech 4-step warranty at a glance</h2>
      <Table
        head={["Period", "What you get", "Key condition"]}
        rows={[
          ["1 Week", "100% refund of the amount you paid", "Original condition, with all accessories and box"],
          ["1 Month", "Exchange for another device", "Same category: laptop for laptop, mobile for mobile"],
          ["6 Months", "RAM / SSD upgrade at 90% of parts cost", "Installation and labour completely free"],
          ["1 Year", "Free servicing, diagnostics and maintenance", "Hardware parts, if needed, are charged at cost"],
        ]}
      />

      <h3 style={h3}>1. 7-day full refund</h3>
      <p style={p}>
        Not happy with the laptop? Return it within <strong style={strong}>7 days of purchase</strong> and get a <strong style={strong}>100% refund</strong> of the amount you paid. The device must be in its original condition, with all accessories and the box. Refunds are processed within <strong style={strong}>2–3 business days</strong>.
      </p>

      <h3 style={h3}>2. 1-month exchange</h3>
      <p style={p}>
        Realised you need more power for gaming, or a lighter laptop for college? Within <strong style={strong}>1 month</strong> you can exchange it for another device:
      </p>
      <ul style={list}>
        <li><strong style={strong}>Higher model:</strong> pay only the price difference.</li>
        <li><strong style={strong}>Lower model:</strong> we refund you the balance.</li>
        <li>Exchanges are within the same category (laptop for laptop, mobile for mobile).</li>
      </ul>

      <h3 style={h3}>3. 6-month upgrade offer: pay only 90%</h3>
      <p style={p}>
        Need more RAM or a bigger SSD? For <strong style={strong}>6 months</strong> after purchase, you pay only <strong style={strong}>90% of the parts cost</strong>. We cover the other 10%, and installation is free. Read the full details in our{" "}
        <Link href="/blog/laptop-ram-ssd-upgrade-madurai" style={link}>laptop RAM &amp; SSD upgrade guide</Link>.
      </p>

      <h3 style={h3}>4. 1-year free service</h3>
      <p style={p}>
        For a full year, servicing at the Sollabs Tech service centre is <strong style={strong}>free of charge</strong>:
      </p>
      <ul style={list}>
        <li>Free diagnostics and check-ups</li>
        <li>Free software servicing</li>
        <li>Free general maintenance</li>
        <li>Hardware repair: you pay only for the part, never for the labour</li>
      </ul>

      <Callout icon="⚠️" title="What's not covered" color="#F59E0B">
        Physical damage (drops, cracks, broken hinges), liquid damage, and devices that have been opened, repaired or modified by someone else. If something isn&apos;t covered, message us anyway and we&apos;ll quote you the repair cost.
      </Callout>

      <h2 style={h2}>How to claim your warranty</h2>
      <ol style={list}>
        <li>Keep your <strong style={strong}>Sollabs Tech bill</strong>. It shows your purchase date, which decides which warranty step applies.</li>
        <li>WhatsApp us at <strong style={strong}>+91 90038 50743</strong> with your bill and a short description, photo or video of the issue.</li>
        <li>We&apos;ll confirm what&apos;s covered and arrange the refund, exchange, upgrade or service.</li>
      </ol>
      <p style={p}>
        Read the full terms on our <Link href="/warranty" style={link}>warranty page</Link>, or see{" "}
        <Link href="/blog/sollabstech-warranty-policy" style={link}>how to check which warranty step applies to you</Link>.
      </p>

      <h2 style={h2}>Checklist: what to look at when buying any used laptop</h2>
      <p style={p}>Whether you buy from us or anyone else, check these before you pay:</p>
      <CardGrid
        items={[
          { icon: "🔋", title: "Battery health", text: "Ask for the battery report or capacity. A worn battery is the most common hidden cost." },
          { icon: "🖥️", title: "Display", text: "Look at a plain white and a plain black screen for dead pixels, spots or uneven backlight." },
          { icon: "⌨️", title: "Keyboard & trackpad", text: "Type every key once and test clicks, scrolling and gestures on the trackpad." },
          { icon: "🔌", title: "Ports & charging", text: "Plug into every USB port, HDMI and the charger. Loose ports are expensive to fix." },
          { icon: "🧾", title: "Bill & serial number", text: "Make sure the serial number on the laptop matches the bill. No bill means no warranty." },
          { icon: "🛡️", title: "Written warranty", text: "Ask what happens after day 7. If the answer is \"nothing\", keep looking." },
        ]}
      />

      <h2 style={h2}>Why buyers in Madurai choose Sollabs Tech</h2>
      <p style={p}>
        Sollabs Tech has been based in Madurai since 2020. We sell quality-checked laptops, gaming laptops and custom PCs, and deliver across India. Because we service what we sell, our warranty isn&apos;t passed on to a third party: you deal with the same team before and after you buy. See everything we offer in our{" "}
        <Link href="/blog/sollabs-tech-services-madurai" style={link}>complete services guide</Link>.
      </p>
    </BlogArticle>
  );
}
