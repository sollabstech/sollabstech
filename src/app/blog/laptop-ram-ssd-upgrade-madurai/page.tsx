import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle, { h2, h3, p, strong, link, list, Callout, CardGrid, Table, type Faq } from "../_components/BlogArticle";

const slug = "laptop-ram-ssd-upgrade-madurai";
const title = "Laptop RAM & SSD Upgrade in Madurai: Pay Only 90% of Parts Cost, Free Installation";
const description =
  "Is your laptop slow or running out of space? Bought from Sollabs Tech in the last 6 months? Upgrade RAM or SSD and pay only 90% of the parts cost, with free installation. Here's how it works.";

export const metadata: Metadata = {
  title: "Laptop RAM & SSD Upgrade in Madurai – Pay Only 90% of Parts Cost",
  description,
  keywords: [
    "laptop ram upgrade madurai",
    "laptop ssd upgrade madurai",
    "laptop upgrade offer",
    "upgrade laptop ram",
    "hdd to ssd upgrade",
    "laptop slow fix",
    "laptop upgrade cost india",
    "sollabs tech upgrade offer",
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
    q: "What is the Sollabs Tech 90% upgrade offer?",
    a: "If you bought a laptop or mobile from Sollabs Tech, you can upgrade its RAM or SSD within 6 months of purchase and pay only 90% of the parts cost. Sollabs Tech pays the other 10%, and installation and labour are free.",
  },
  {
    q: "Who can use the 90% upgrade offer?",
    a: "Customers who bought their device from Sollabs Tech, within 6 months of the purchase date on their bill.",
  },
  {
    q: "Which upgrades are included?",
    a: "RAM upgrades and SSD/storage upgrades. Both are charged at 90% of the parts cost, with free installation.",
  },
  {
    q: "Should I upgrade RAM or SSD first?",
    a: "If your laptop still uses a hard disk (HDD), moving to an SSD usually gives the biggest speed boost. If you already have an SSD but the laptop slows down with many tabs or apps open, add RAM.",
  },
  {
    q: "Can every laptop's RAM be upgraded?",
    a: "No. Some thin laptops have RAM soldered to the motherboard, which cannot be upgraded. We check your exact model and tell you what's possible before you pay anything.",
  },
  {
    q: "Will I lose my data when upgrading to a new SSD?",
    a: "Back up important files before any upgrade. Ask us when you book the upgrade about moving your data to the new drive.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      slug={slug}
      tag="Upgrade Offer"
      datePublished="2026-10-09"
      title={title}
      description={description}
      breadcrumb="RAM & SSD Upgrade Offer"
      faqs={faqs}
      intro={
        <>
          A laptop that felt fast on day one can feel slow a few months later, as your apps get heavier and your files pile up. Most of the time you don&apos;t need a new laptop, just <strong style={strong}>more RAM or a faster SSD</strong>. If you bought from Sollabs Tech in the last 6 months, you pay only <strong style={strong}>90% of the parts cost</strong> and <strong style={strong}>installation is free</strong>.
        </>
      }
      cta={{
        title: "Find out what your laptop can be upgraded to",
        text: "Send us your laptop model and bill. We'll check what fits and send you the upgrade price.",
        whatsappText: "Hi Sollabs Tech, I'd like to upgrade my laptop. Model: ",
        primary: { href: "/warranty", label: "See Full Warranty" },
      }}
    >
      <h2 style={h2}>The offer in one line</h2>
      <Callout icon="💜" title="Within 6 months of purchase: you pay 90% of parts, we pay 10% + all labour" color="#A855F7">
        Applies to RAM and SSD/storage upgrades on devices bought from Sollabs Tech. No service charge, no installation fee.
      </Callout>

      <h2 style={h2}>How much do you save?</h2>
      <p style={p}>
        You save in two ways: <strong style={strong}>10% off the part</strong>, and <strong style={strong}>no labour charge</strong>. Here&apos;s how the maths works on some example part prices:
      </p>
      <Table
        head={["Example part price", "You pay (90%)", "We cover (10%)", "Installation"]}
        rows={[
          ["₹2,000", "₹1,800", "₹200", "Free"],
          ["₹3,500", "₹3,150", "₹350", "Free"],
          ["₹6,000", "₹5,400", "₹600", "Free"],
        ]}
      />
      <p style={{ ...p, fontSize: 13.5, color: "#64748B" }}>
        These figures are examples to show the calculation. Actual part prices depend on your laptop model and current market rates, and we confirm the exact price before any work.
      </p>

      <h2 style={h2}>RAM or SSD: which upgrade do you need?</h2>
      <CardGrid
        items={[
          {
            icon: "🧠",
            title: "Upgrade RAM if…",
            text: "the laptop slows down with many Chrome tabs, freezes when you switch apps, or struggles with Photoshop, editing or games.",
            color: "#A855F7",
          },
          {
            icon: "⚡",
            title: "Upgrade SSD if…",
            text: "it takes ages to boot, apps open slowly, you see \"disk 100%\" in Task Manager, or you're running out of storage.",
            color: "#00AAFF",
          },
        ]}
      />

      <h3 style={h3}>Signs you need more RAM</h3>
      <ul style={list}>
        <li>Memory usage sits above 80–90% in Task Manager (Ctrl + Shift + Esc → Performance → Memory).</li>
        <li>Browser tabs reload when you switch back to them.</li>
        <li>The laptop is fine with one app open but crawls with three.</li>
      </ul>

      <h3 style={h3}>Signs you need a new or bigger SSD</h3>
      <ul style={list}>
        <li>Your laptop still has a hard disk (HDD). Moving to an SSD is usually the single biggest speed improvement.</li>
        <li>The C: drive shows red (almost full) in File Explorer.</li>
        <li>Boot time and app launches are much slower than they used to be.</li>
      </ul>

      <Callout icon="🔍" title="Not every laptop can be upgraded" color="#F59E0B">
        Some thin-and-light laptops have RAM soldered to the motherboard, and some have only one storage slot. That&apos;s why we check your exact model first and tell you what&apos;s possible before you pay anything.
      </Callout>

      <h2 style={h2}>How to claim the 90% upgrade offer</h2>
      <ol style={list}>
        <li>Check that your purchase date on the <strong style={strong}>Sollabs Tech bill</strong> is within the last 6 months.</li>
        <li>WhatsApp <strong style={strong}>+91 90038 50743</strong> with your laptop model, bill and the upgrade you want.</li>
        <li>We confirm compatibility and send the upgrade price (90% of the part).</li>
        <li>Back up your important files, then bring the laptop in. We install the part for free.</li>
      </ol>

      <h2 style={h2}>Part of a bigger warranty</h2>
      <p style={p}>
        The upgrade offer is step 3 of the Sollabs Tech after-sales warranty, which also includes a <strong style={strong}>7-day full refund</strong>, a <strong style={strong}>1-month exchange</strong> and <strong style={strong}>1 year of free service</strong>. Read how it all fits together in our{" "}
        <Link href="/blog/used-laptop-with-warranty-madurai" style={link}>used laptop warranty guide</Link>, or see{" "}
        <Link href="/blog/sollabs-tech-services-madurai" style={link}>everything Sollabs Tech offers</Link>.
      </p>
      <p style={p}>
        Haven&apos;t bought yet? Choose a laptop now and the upgrade offer is ready when you need it. <Link href="/products" style={link}>Browse laptops →</Link>
      </p>
    </BlogArticle>
  );
}
