import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle, { h2, h3, p, strong, link, list, Callout, Table, type Faq } from "../_components/BlogArticle";

const slug = "laptop-exchange-offer-madurai";
const title = "Laptop Exchange Offer in Madurai: Swap Your Laptop Within 1 Month and Settle the Difference";
const description =
  "Bought a laptop that isn't quite right? Within 1 month, exchange it at Sollabs Tech for a higher model (pay the difference) or a lower one (get the balance back). How it works, with examples.";

export const metadata: Metadata = {
  title: "Laptop Exchange Offer in Madurai – Swap Within 1 Month | Sollabs Tech",
  description,
  keywords: [
    "laptop exchange offer madurai",
    "laptop exchange offer",
    "exchange laptop for better model",
    "exchange used laptop",
    "laptop upgrade exchange",
    "mobile exchange offer madurai",
  ],
  alternates: { canonical: `/blog/${slug}` },
  openGraph: { type: "article", title, description, url: `https://www.sollabstech.com/blog/${slug}`, publishedTime: "2026-10-11" },
};

const faqs: Faq[] = [
  {
    q: "How long do I have to exchange a laptop?",
    a: "1 month from the purchase date on your Sollabs Tech bill.",
  },
  {
    q: "What if the laptop I want costs more?",
    a: "Choose a higher model and pay only the price difference.",
  },
  {
    q: "What if I choose a cheaper laptop?",
    a: "Choose a lower model and Sollabs Tech refunds you the balance amount.",
  },
  {
    q: "Can I exchange a laptop for a phone?",
    a: "No. Exchanges are within the same category: a laptop for a laptop, or a mobile for a mobile.",
  },
  {
    q: "Should I choose a refund or an exchange?",
    a: "Within the first 7 days you can choose either. If you still want a laptop, just a different one, the exchange avoids buying again from scratch. After 7 days, the exchange is available until the end of the first month.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      slug={slug}
      tag="Exchange Offer"
      datePublished="2026-10-11"
      title={title}
      description={description}
      breadcrumb="Laptop Exchange Offer"
      faqs={faqs}
      intro={
        <>
          A few weeks with a new laptop often shows you what you really need: more graphics power for a game, a lighter machine for travel, or a bigger screen for work. At Sollabs Tech you don&apos;t have to live with the first choice. Within <strong style={strong}>1 month</strong> of buying, you can <strong style={strong}>exchange it for another device</strong> and simply settle the price difference.
        </>
      }
      cta={{
        title: "Want to swap your laptop?",
        text: "Tell us what isn't working and your budget. We'll suggest the right model to exchange into.",
        whatsappText: "Hi Sollabs Tech, I'd like to exchange my laptop. Bill number: , I'm looking for ",
        primary: { href: "/products", label: "See Available Laptops" },
      }}
    >
      <h2 style={h2}>How the 1-month exchange works</h2>
      <ul style={list}>
        <li><strong style={strong}>Higher model:</strong> pay only the price difference.</li>
        <li><strong style={strong}>Lower model:</strong> we refund you the balance amount.</li>
        <li><strong style={strong}>Same category:</strong> laptop for laptop, mobile for mobile.</li>
        <li><strong style={strong}>Time limit:</strong> within 1 month of the purchase date on your bill.</li>
      </ul>

      <h2 style={h2}>Examples</h2>
      <p style={p}>Here&apos;s how the difference works out (example prices to show the calculation):</p>
      <Table
        head={["You bought", "You exchange for", "Result"]}
        rows={[
          ["Laptop at ₹40,000", "Gaming laptop at ₹55,000", "You pay ₹15,000"],
          ["Laptop at ₹40,000", "Laptop at ₹40,000 (different model)", "Nothing to pay"],
          ["Laptop at ₹40,000", "Laptop at ₹32,000", "We refund ₹8,000"],
        ]}
      />
      <p style={{ ...p, fontSize: 13.5, color: "#64748B" }}>Example prices only. Actual prices depend on the models in stock.</p>

      <h2 style={h2}>When an exchange makes sense</h2>
      <h3 style={h3}>You need more performance</h3>
      <p style={p}>Your game or editing software stutters, or a course needs software that wants a dedicated graphics card. Move up to a model with a stronger GPU or processor.</p>
      <h3 style={h3}>It&apos;s too heavy or the battery is too short</h3>
      <p style={p}>If you carry it every day, a lighter laptop with longer battery life can matter more than raw power. Moving to a lighter model may even give you money back.</p>
      <h3 style={h3}>The screen size doesn&apos;t suit you</h3>
      <p style={p}>A 14-inch laptop is easier to carry; a 15.6-inch or larger screen is easier for spreadsheets, coding and gaming. An exchange lets you fix that.</p>
      <h3 style={h3}>Only short on RAM or storage?</h3>
      <p style={p}>
        You may not need a different laptop at all. Within 6 months, RAM and SSD upgrades cost only 90% of the parts price, with free installation. See the{" "}
        <Link href="/blog/laptop-ram-ssd-upgrade-madurai" style={link}>RAM &amp; SSD upgrade offer</Link>, or work out{" "}
        <Link href="/blog/how-much-ram-do-i-need-laptop" style={link}>how much RAM you actually need</Link>.
      </p>

      <h2 style={h2}>How to exchange</h2>
      <ol style={list}>
        <li>WhatsApp <strong style={strong}>+91 90038 50743</strong> with your bill, within 1 month of purchase.</li>
        <li>Tell us what isn&apos;t working for you and your budget for the new model.</li>
        <li>Pick a laptop from our stock; we&apos;ll confirm the price difference.</li>
        <li>Bring in your laptop and settle the difference, or receive the balance.</li>
      </ol>

      <Callout icon="🔁" title="Refund, exchange or upgrade?">
        <strong style={strong}>First 7 days:</strong> a full refund is also available. See the{" "}
        <Link href="/blog/laptop-refund-policy-7-days" style={link}>7-day refund policy</Link>.{" "}
        <strong style={strong}>Up to 1 month:</strong> exchange.{" "}
        <strong style={strong}>Up to 6 months:</strong> RAM/SSD upgrade at 90% of parts cost.{" "}
        <strong style={strong}>Up to 1 year:</strong> <Link href="/blog/free-laptop-service-madurai" style={link}>free service</Link>.
      </Callout>
    </BlogArticle>
  );
}
