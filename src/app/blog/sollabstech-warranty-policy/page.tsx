import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle, { h2, h3, p, strong, link, list, Callout, Table, type Faq } from "../_components/BlogArticle";

const slug = "sollabstech-warranty-policy";
const title = "Sollabs Tech Warranty Policy – What's Covered & How to Check Your Warranty Status";
const description =
  "Every Sollabs Tech laptop and mobile comes with a 7-day refund, 1-month exchange, 6-month upgrade offer and 1-year free service. Learn how to check your Sollabs Tech warranty status and how to claim it.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "sollabs tech warranty",
    "sollabstech warranty",
    "sollabstech laptop warranty",
    "sollabstech warranty check",
    "sollabstech warranty status",
    "sollabstech warranty policy",
    "sollabs tech laptop warranty check",
    "check sollabstech warranty",
    "sollabs tech refurbished laptop warranty India",
  ],
  alternates: { canonical: `/blog/${slug}` },
  openGraph: {
    type: "article",
    title,
    description,
    url: `https://www.sollabstech.com/blog/${slug}`,
    publishedTime: "2026-08-02",
    modifiedTime: "2026-10-09",
  },
};

const faqs: Faq[] = [
  {
    q: "How do I check my Sollabs Tech warranty status?",
    a: "Look at the purchase date on your Sollabs Tech bill and count the days since then: up to 7 days you can get a full refund, up to 1 month an exchange, up to 6 months the 90% upgrade offer, and up to 1 year free service. To confirm, WhatsApp +91 90038 50743 with your bill or your laptop's serial number.",
  },
  {
    q: "How long is the Sollabs Tech warranty?",
    a: "Coverage runs for 1 year from the purchase date, in four steps: 7-day full refund, 1-month exchange, 6-month upgrade offer, and 1-year free service.",
  },
  {
    q: "Does the Sollabs Tech warranty cover mobiles too?",
    a: "Yes. The same four-step warranty applies to every laptop and mobile sold by Sollabs Tech.",
  },
  {
    q: "Where do I find my laptop's serial number?",
    a: "On the sticker under the laptop, on the original box, or on Windows by running \"Get-CimInstance Win32_BIOS | Select-Object SerialNumber\" in PowerShell.",
  },
  {
    q: "What isn't covered by the warranty?",
    a: "Physical damage such as drops and cracks, liquid damage, and devices that have been opened, repaired or modified by someone else.",
  },
  {
    q: "What if my issue isn't covered or my warranty has ended?",
    a: "Message us anyway on WhatsApp at +91 90038 50743. We'll look at the problem and quote you the repair cost.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      slug={slug}
      tag="Warranty"
      datePublished="2026-08-02"
      dateModified="2026-10-09"
      title={title}
      description={description}
      breadcrumb="Sollabs Tech Warranty Policy"
      faqs={faqs}
      intro={
        <>
          Every laptop and mobile sold by Sollabs Tech is covered by a <strong style={strong}>four-step after-sales warranty</strong> that runs for a full year from your purchase date. This guide explains what each step covers, how to check which step applies to you today, and how to make a claim.
        </>
      }
      cta={{
        title: "Need to check or claim your warranty?",
        text: "Send us your bill or serial number and a short description of the issue. We'll confirm your coverage and next steps.",
        whatsappText: "Hi Sollabs Tech, I'd like to check my warranty. My serial number / bill number is ",
        primary: { href: "/warranty", label: "Read Full Warranty Terms" },
      }}
    >
      <h2 style={h2}>What is the Sollabs Tech warranty?</h2>
      <p style={p}>
        The <strong style={strong}>Sollabs Tech warranty</strong>{" "}covers every laptop and mobile we sell, whether it&apos;s a refurbished gaming laptop, a business laptop, a student laptop or a phone. Instead of one fixed period, it gives you four kinds of protection, each lasting a different amount of time:
      </p>
      <Table
        head={["Step", "How long", "What you get"]}
        rows={[
          ["1. Full refund", "7 days", "100% of the amount you paid, refunded within 2–3 business days"],
          ["2. Exchange", "1 month", "Swap for a higher model (pay the difference) or a lower one (we refund the balance)"],
          ["3. Upgrade offer", "6 months", "RAM / SSD upgrades at 90% of parts cost, free installation"],
          ["4. Free service", "1 year", "Free diagnostics, software servicing and maintenance; hardware parts charged at cost"],
        ]}
      />
      <p style={p}>
        For a detailed walkthrough of each step, read{" "}
        <Link href="/blog/used-laptop-with-warranty-madurai" style={link}>Used Laptop With Warranty in Madurai</Link> and the{" "}
        <Link href="/blog/laptop-ram-ssd-upgrade-madurai" style={link}>90% RAM &amp; SSD upgrade offer</Link>.
      </p>

      <h2 style={h2}>How to check your Sollabs Tech warranty status</h2>
      <p style={p}>
        Your warranty status depends on one thing: <strong style={strong}>how long ago you bought the device</strong>. Here&apos;s how to check:
      </p>
      <h3 style={h3}>Step 1: Find your purchase date</h3>
      <p style={p}>The date is printed on your Sollabs Tech bill. Count the days or months since then.</p>
      <h3 style={h3}>Step 2: See what&apos;s still active</h3>
      <Table
        head={["Time since purchase", "What you can still use"]}
        rows={[
          ["Up to 7 days", "Refund, exchange, upgrade offer, free service"],
          ["8 days to 1 month", "Exchange, upgrade offer, free service"],
          ["1 to 6 months", "Upgrade offer, free service"],
          ["6 months to 1 year", "Free service"],
          ["More than 1 year", "Paid service (we quote the cost first)"],
        ]}
      />
      <h3 style={h3}>Step 3: Confirm with us</h3>
      <p style={p}>
        Lost the bill? WhatsApp <strong style={strong}>+91 90038 50743</strong> with your laptop&apos;s <strong style={strong}>serial number</strong>{" "}and we&apos;ll look up your purchase. You&apos;ll find the serial number:
      </p>
      <ul style={list}>
        <li>On the sticker under the laptop, or on the original box</li>
        <li>
          On Windows: open PowerShell and run{" "}
          <code style={{ background: "rgba(255,255,255,0.06)", padding: "2px 6px", borderRadius: 6, color: "#E2E8F0", fontSize: 13.5 }}>Get-CimInstance Win32_BIOS | Select-Object SerialNumber</code>
        </li>
      </ul>

      <h2 style={h2}>How to claim your warranty</h2>
      <ol style={list}>
        <li>WhatsApp <strong style={strong}>+91 90038 50743</strong> with your bill (or serial number).</li>
        <li>Describe the issue, ideally with a photo or short video.</li>
        <li>We confirm which warranty step applies and arrange the refund, exchange, upgrade or service.</li>
      </ol>

      <h2 style={h2}>What&apos;s covered and what isn&apos;t</h2>
      <Callout icon="✅" title="Covered" color="#22C55E">
        Refunds and exchanges within their time limits, discounted RAM/SSD upgrades, and free diagnostics, software servicing and general maintenance for a year. Hardware repairs during the free-service year have no labour charge; you pay only for the part.
      </Callout>
      <Callout icon="❌" title="Not covered" color="#EF4444">
        Physical damage (drops, cracks, broken hinges), liquid damage, and devices that have been opened, repaired or modified by someone else.
      </Callout>
      <p style={p}>
        Refunds need the device in its original condition with all accessories and the box. Exchanges are within the same category (laptop for laptop, mobile for mobile). Full terms are on our <Link href="/warranty" style={link}>warranty page</Link>.
      </p>
    </BlogArticle>
  );
}
