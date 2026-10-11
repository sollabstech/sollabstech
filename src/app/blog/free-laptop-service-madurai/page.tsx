import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle, { h2, h3, p, strong, link, list, Callout, CardGrid, Table, type Faq } from "../_components/BlogArticle";

const slug = "free-laptop-service-madurai";
const title = "Free Laptop Service for 1 Year in Madurai: What's Included After You Buy";
const description =
  "Every laptop from Sollabs Tech includes 1 year of free servicing, diagnostics and maintenance at our Madurai service centre. What's covered, what isn't, warning signs your laptop needs a service, and how to book.";

export const metadata: Metadata = {
  title: "Free Laptop Service for 1 Year in Madurai | Sollabs Tech",
  description,
  keywords: [
    "laptop service madurai",
    "laptop service centre madurai",
    "free laptop service",
    "laptop servicing",
    "laptop repair madurai",
    "laptop maintenance tips",
    "laptop overheating fix",
  ],
  alternates: { canonical: `/blog/${slug}` },
  openGraph: { type: "article", title, description, url: `https://www.sollabstech.com/blog/${slug}`, publishedTime: "2026-10-11" },
};

const faqs: Faq[] = [
  {
    q: "What is included in the 1-year free service?",
    a: "Diagnostics and check-ups, software servicing and general maintenance at the Sollabs Tech service centre are free for one year from purchase. If a hardware part has to be replaced, you pay only for the part.",
  },
  {
    q: "Do I pay labour for hardware repairs in the first year?",
    a: "No. During the free-service year, hardware repairs have no service charge; only the cost of the replacement part applies.",
  },
  {
    q: "What isn't covered?",
    a: "Physical damage such as drops and cracks, liquid damage, and devices that have been opened, repaired or modified by someone else.",
  },
  {
    q: "Does free service apply to phones?",
    a: "Yes. Every laptop and mobile sold by Sollabs Tech includes 1 year of free service.",
  },
  {
    q: "What happens after the first year?",
    a: "Sollabs Tech still services and repairs your device. Message us on WhatsApp and we'll quote you the cost.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      slug={slug}
      tag="Free Service"
      datePublished="2026-10-11"
      title={title}
      description={description}
      breadcrumb="1-Year Free Laptop Service"
      faqs={faqs}
      intro={
        <>
          A laptop needs care to stay fast and cool, and with a used laptop, having someone to call matters even more. Every laptop and mobile from Sollabs Tech includes <strong style={strong}>1 year of free service</strong> at our Madurai service centre: diagnostics, software servicing and general maintenance at no charge, with hardware repairs costing only the part.
        </>
      }
      cta={{
        title: "Book a free service",
        text: "Send us your bill or the serial on your Sollabs Tech sticker and tell us what's wrong.",
        whatsappText: "Hi Sollabs Tech, I'd like to book a free service for my laptop. Serial: , Issue: ",
        primary: { href: "/warranty#check", label: "Check My Warranty" },
      }}
    >
      <h2 style={h2}>What&apos;s free for 1 year</h2>
      <Table
        head={["Service", "Cost in the first year"]}
        rows={[
          ["Diagnostics and check-up", "Free"],
          ["Software servicing", "Free"],
          ["General maintenance", "Free"],
          ["Hardware repair", "Only the cost of the part; no labour charge"],
        ]}
      />
      <Callout icon="❌" title="Not covered" color="#EF4444">
        Physical damage (drops, cracks, broken hinges), liquid damage, and devices that have been opened, repaired or modified by someone else. We can still repair these, at a quoted cost.
      </Callout>

      <h2 style={h2}>Signs your laptop needs a service</h2>
      <CardGrid
        items={[
          { icon: "🔥", title: "Running hot", text: "The base gets very hot, or performance drops after a few minutes of heavy use." },
          { icon: "🌀", title: "Loud fan", text: "The fan runs fast even when you're only browsing." },
          { icon: "🐢", title: "Slow to start", text: "Boot-up and app launches take much longer than they used to." },
          { icon: "🔋", title: "Battery drains fast", text: "Battery life has dropped noticeably compared with when you bought it." },
          { icon: "⚠️", title: "Random shutdowns", text: "The laptop turns off or freezes without warning." },
          { icon: "🧩", title: "Pop-ups and errors", text: "Unknown programs, constant pop-ups or update errors." },
        ]}
      />

      <h2 style={h2}>Simple maintenance between services</h2>
      <ul style={list}>
        <li><strong style={strong}>Keep the vents clear:</strong> use the laptop on a desk or table, not on a bed or pillow, so air can flow.</li>
        <li><strong style={strong}>Keep Windows and drivers updated</strong> for security and stability fixes.</li>
        <li><strong style={strong}>Uninstall what you don&apos;t use</strong> and limit apps that start automatically.</li>
        <li><strong style={strong}>Leave free space:</strong> a nearly full drive slows everything down.</li>
        <li><strong style={strong}>Use a good-quality charger</strong>, ideally the original one.</li>
      </ul>

      <h2 style={h2}>How to book your free service</h2>
      <ol style={list}>
        <li>
          Check that you&apos;re within 1 year of purchase. Enter the serial from your Sollabs Tech sticker in the{" "}
          <Link href="/warranty#check" style={link}>warranty checker</Link>, or look at the date on your bill.
        </li>
        <li>WhatsApp <strong style={strong}>+91 90038 50743</strong> with the serial or bill and a short description, photo or video of the problem.</li>
        <li>We&apos;ll tell you what&apos;s needed and arrange the service.</li>
      </ol>

      <h3 style={h3}>Part of a bigger warranty</h3>
      <p style={p}>
        Free service is step four of the Sollabs Tech after-sales warranty, after the{" "}
        <Link href="/blog/laptop-refund-policy-7-days" style={link}>7-day refund</Link>, the{" "}
        <Link href="/blog/laptop-exchange-offer-madurai" style={link}>1-month exchange</Link> and the{" "}
        <Link href="/blog/laptop-ram-ssd-upgrade-madurai" style={link}>6-month upgrade offer</Link>. Looking for a laptop that comes with all four? See our{" "}
        <Link href="/blog/used-laptop-with-warranty-madurai" style={link}>used laptop warranty guide</Link>.
      </p>
    </BlogArticle>
  );
}
