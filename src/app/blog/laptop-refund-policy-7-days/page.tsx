import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle, { h2, h3, p, strong, link, list, Callout, CardGrid, Table, type Faq } from "../_components/BlogArticle";

const slug = "laptop-refund-policy-7-days";
const title = "7-Day Laptop Refund Policy: How to Return a Laptop and Get 100% of Your Money Back";
const description =
  "Not happy with a laptop you bought? Sollabs Tech gives a 100% refund within 7 days. What counts as original condition, what to test in those 7 days, and how to request your refund.";

export const metadata: Metadata = {
  title: "7-Day Laptop Refund Policy – Return a Laptop, Get 100% Back | Sollabs Tech",
  description,
  keywords: [
    "laptop return policy",
    "laptop refund policy india",
    "can i return a laptop after buying",
    "7 day return laptop",
    "used laptop return policy",
    "refurbished laptop refund",
    "laptop refund madurai",
  ],
  alternates: { canonical: `/blog/${slug}` },
  openGraph: { type: "article", title, description, url: `https://www.sollabstech.com/blog/${slug}`, publishedTime: "2026-10-11" },
};

const faqs: Faq[] = [
  {
    q: "Can I return a laptop if I simply changed my mind?",
    a: "Yes. If you're not satisfied for any reason, return it within 7 days of purchase for a 100% refund of the amount you paid. The laptop must be in its original condition with all accessories and the box.",
  },
  {
    q: "How long does the refund take?",
    a: "Refunds are processed within 2–3 business days after the laptop is returned and checked.",
  },
  {
    q: "Do I need the original box to get a refund?",
    a: "Yes. The laptop must be returned in its original condition with all accessories and the box.",
  },
  {
    q: "What if it's been more than 7 days?",
    a: "Within 1 month of purchase you can still exchange it for another laptop, paying or receiving the price difference.",
  },
  {
    q: "Does the 7-day refund apply to phones too?",
    a: "Yes. Every laptop and mobile sold by Sollabs Tech has the same 7-day full refund.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      slug={slug}
      tag="Refund Policy"
      datePublished="2026-10-11"
      title={title}
      description={description}
      breadcrumb="7-Day Laptop Refund"
      faqs={faqs}
      intro={
        <>
          Buying a laptop, especially a used or refurbished one, is easier when you know you can change your mind. Every laptop and mobile from Sollabs Tech comes with a <strong style={strong}>7-day full refund</strong>: if you&apos;re not satisfied, return it and get <strong style={strong}>100% of the amount you paid</strong>. Here&apos;s exactly how it works and how to use those 7 days well.
        </>
      }
      cta={{
        title: "Want to return a laptop?",
        text: "Message us with your bill within 7 days of purchase and we'll guide you through the return.",
        whatsappText: "Hi Sollabs Tech, I'd like to return my laptop under the 7-day refund. My bill number is ",
        primary: { href: "/warranty#check", label: "Check My Warranty" },
      }}
    >
      <h2 style={h2}>The 7-day refund at a glance</h2>
      <Table
        head={["", "Details"]}
        rows={[
          ["Time limit", "Within 7 days of purchase"],
          ["Refund amount", "100% of the amount you paid"],
          ["Condition", "Original condition, with all accessories and the box"],
          ["Refund time", "2–3 business days"],
          ["Applies to", "Every laptop and mobile sold by Sollabs Tech"],
        ]}
      />

      <h2 style={h2}>What &ldquo;original condition&rdquo; means</h2>
      <p style={p}>To get the full refund, bring the laptop back the way you received it:</p>
      <ul style={list}>
        <li><strong style={strong}>No new damage:</strong> no cracks, dents, liquid spills or broken parts.</li>
        <li><strong style={strong}>All accessories:</strong> the charger and anything else that came with it.</li>
        <li><strong style={strong}>The box:</strong> keep the packaging for the first week.</li>
        <li><strong style={strong}>Your bill:</strong> it shows the purchase date that starts the 7 days.</li>
      </ul>
      <Callout icon="💡" title="Tip: back up, then reset" color="#22C55E">
        Before returning, copy your files somewhere safe and sign out of your accounts (Microsoft, Google, browsers). Your data is your responsibility, so remove it before you hand the laptop back.
      </Callout>

      <h2 style={h2}>Use your 7 days: what to test</h2>
      <p style={p}>The refund window is your chance to make sure the laptop really suits you. Test these in the first few days:</p>
      <CardGrid
        items={[
          { icon: "🔋", title: "Battery", text: "Use it unplugged for a normal session. Does the battery last as long as you need?" },
          { icon: "🖥️", title: "Display", text: "Check brightness, colours and for any dead pixels on plain white and black screens." },
          { icon: "⌨️", title: "Keyboard & trackpad", text: "Type a full page and use every trackpad gesture you rely on." },
          { icon: "🔌", title: "Ports & Wi-Fi", text: "Plug in your USB devices, monitor and charger. Connect to your home Wi-Fi." },
          { icon: "🔥", title: "Heat & noise", text: "Run your heaviest app or game for 30 minutes. Is the fan noise and heat acceptable?" },
          { icon: "🧩", title: "Your software", text: "Install the exact apps you need for college or work and make sure they run smoothly." },
        ]}
      />

      <h2 style={h2}>How to request your refund</h2>
      <ol style={list}>
        <li>Within 7 days of purchase, WhatsApp <strong style={strong}>+91 90038 50743</strong> with your bill.</li>
        <li>Tell us you&apos;d like a refund. No long explanation needed.</li>
        <li>Return the laptop with all accessories and the box.</li>
        <li>Once it&apos;s checked, your refund is processed within 2–3 business days.</li>
      </ol>

      <h2 style={h2}>Refund or exchange?</h2>
      <p style={p}>
        If the laptop is fine but not quite right, for example you need more power for gaming or something lighter for college, an <strong style={strong}>exchange</strong> may suit you better than a refund. You have <strong style={strong}>1 month</strong> to swap it for another laptop and pay or receive the price difference. Read how the{" "}
        <Link href="/blog/laptop-exchange-offer-madurai" style={link}>1-month laptop exchange</Link> works.
      </p>

      <h3 style={h3}>After the first week, you&apos;re still covered</h3>
      <p style={p}>
        The refund is step one of our four-step after-sales warranty, which continues with the 1-month exchange, a{" "}
        <Link href="/blog/laptop-ram-ssd-upgrade-madurai" style={link}>6-month RAM/SSD upgrade offer</Link> and{" "}
        <Link href="/blog/free-laptop-service-madurai" style={link}>1 year of free service</Link>. See the full{" "}
        <Link href="/blog/sollabstech-warranty-policy" style={link}>Sollabs Tech warranty policy</Link>.
      </p>
    </BlogArticle>
  );
}
