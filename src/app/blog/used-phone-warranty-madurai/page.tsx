import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle, { h2, h3, p, strong, link, list, Callout, CardGrid, Table, type Faq } from "../_components/BlogArticle";

const slug = "used-phone-warranty-madurai";
const title = "Used Phone With Warranty in Madurai: 7-Day Refund, 1-Month Exchange and 1-Year Free Service";
const description =
  "Every second-hand iPhone or gaming phone from Sollabs Tech comes with a 7-day refund, 1-month exchange and 1-year free service, plus a test checklist.";

export const metadata: Metadata = {
  title: "Used Phone With Warranty in Madurai | Sollabs Tech",
  description,
  keywords: [
    "used phone with warranty",
    "second hand phone warranty",
    "used iphone with warranty madurai",
    "refurbished phone warranty india",
    "second hand mobile madurai",
    "used phone checklist",
  ],
  alternates: { canonical: `/blog/${slug}` },
  openGraph: { type: "article", title, description, url: `https://www.sollabstech.com/blog/${slug}`, publishedTime: "2026-10-11" },
};

const faqs: Faq[] = [
  {
    q: "Do used phones from Sollabs Tech come with a warranty?",
    a: "Yes. Every mobile includes a 7-day full refund, a 1-month exchange for another phone, and 1 year of free servicing, diagnostics and maintenance.",
  },
  {
    q: "Can I exchange a phone for a laptop?",
    a: "No. Exchanges are within the same category: a mobile for a mobile, or a laptop for a laptop.",
  },
  {
    q: "Does the 6-month upgrade offer apply to phones?",
    a: "The upgrade offer covers RAM and SSD upgrades at 90% of parts cost, which apply to laptops. Phones are covered by the refund, exchange and free service.",
  },
  {
    q: "How do I check my phone's warranty?",
    a: "Enter the serial number from your Sollabs Tech warranty sticker at sollabstech.com/warranty, or WhatsApp +91 90038 50743 with your bill.",
  },
  {
    q: "What isn't covered?",
    a: "Physical damage such as cracked screens from drops, liquid damage, and phones opened, repaired or modified by someone else.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      slug={slug}
      tag="Phone Warranty"
      datePublished="2026-10-11"
      title={title}
      description={description}
      breadcrumb="Used Phone Warranty"
      faqs={faqs}
      intro={
        <>
          A second-hand iPhone or gaming phone can save you a lot of money, but only if you&apos;re protected when something isn&apos;t right. Every phone from Sollabs Tech comes with the same after-sales warranty as our laptops: a <strong style={strong}>7-day full refund</strong>, a <strong style={strong}>1-month exchange</strong> for another phone, and <strong style={strong}>1 year of free service</strong>.
        </>
      }
      cta={{
        title: "Looking for a quality-checked phone?",
        text: "See phones in stock, or tell us the model and budget you have in mind.",
        whatsappText: "Hi Sollabs Tech, I'm looking for a used phone with warranty. Model/budget: ",
        primary: { href: "/products?category=mobile", label: "See Phones in Stock" },
      }}
    >
      <h2 style={h2}>What&apos;s covered on every phone</h2>
      <Table
        head={["Period", "What you get", "Condition"]}
        rows={[
          ["1 week", "100% refund of the amount you paid", "Original condition, with all accessories and the box"],
          ["1 month", "Exchange for another phone", "Phone for phone; pay or receive the price difference"],
          ["1 year", "Free servicing, diagnostics and maintenance", "Hardware parts, if needed, charged at cost"],
        ]}
      />
      <p style={p}>
        The 6-month upgrade offer (RAM and SSD at 90% of parts cost) applies to laptops; see the{" "}
        <Link href="/blog/laptop-ram-ssd-upgrade-madurai" style={link}>upgrade guide</Link>.
      </p>

      <h2 style={h2}>Checklist: test a used phone in your first 7 days</h2>
      <p style={p}>Whether you buy from us or anyone else, check these while you can still return the phone:</p>
      <CardGrid
        items={[
          { icon: "🔋", title: "Battery health", text: "iPhone: Settings → Battery → Battery Health. Android: check in settings or a battery app, and watch how long a full charge lasts." },
          { icon: "🔐", title: "Accounts removed", text: "Make sure the previous owner's Apple ID or Google account is fully removed, so the phone isn't locked to them." },
          { icon: "👆", title: "Face ID / fingerprint", text: "Set up your own face or fingerprint and test it several times." },
          { icon: "📷", title: "Cameras", text: "Test every rear lens, the front camera, focus, flash and video recording." },
          { icon: "🔊", title: "Speakers & mic", text: "Make a call, record a voice note and play music at full volume." },
          { icon: "📶", title: "SIM & network", text: "Insert your SIM, check calls and mobile data, and test Wi-Fi and Bluetooth." },
          { icon: "🔌", title: "Charging port", text: "Charge with a cable and check it holds firmly and charges at a normal speed." },
          { icon: "🖥️", title: "Screen & touch", text: "Look for dead pixels or burn-in and check touch works across the whole screen." },
        ]}
      />
      <Callout icon="🧾" title="Match the IMEI" color="#F59E0B">
        Dial <strong style={strong}>*#06#</strong>{" "}to see the phone&apos;s IMEI, and check it matches the number on the box and your bill.
      </Callout>

      <h2 style={h2}>When to choose refund vs exchange</h2>
      <h3 style={h3}>Within 7 days: refund</h3>
      <p style={p}>
        If you don&apos;t want the phone at all, return it in original condition for a full refund. Details are in the{" "}
        <Link href="/blog/laptop-refund-policy-7-days" style={link}>7-day refund policy</Link>, which works the same for phones.
      </p>
      <h3 style={h3}>Within 1 month: exchange</h3>
      <p style={p}>
        Want more storage, a bigger battery or a different model? Swap for another phone and settle the difference. See how the{" "}
        <Link href="/blog/laptop-exchange-offer-madurai" style={link}>exchange offer</Link> works.
      </p>
      <h3 style={h3}>Within 1 year: free service</h3>
      <p style={p}>
        For check-ups, software problems and maintenance, use your{" "}
        <Link href="/blog/free-laptop-service-madurai" style={link}>free service</Link>. Hardware parts are charged at cost.
      </p>

      <h2 style={h2}>How to check your phone&apos;s warranty</h2>
      <ol style={list}>
        <li>Enter the serial number from your Sollabs Tech warranty sticker in the <Link href="/warranty#check" style={link}>warranty checker</Link>.</li>
        <li>No sticker? WhatsApp <strong style={strong}>+91 90038 50743</strong> with your bill.</li>
      </ol>
      <p style={p}>
        Shopping for a phone? Read our guide to{" "}
        <Link href="/blog/buy-second-hand-mobile-madurai" style={link}>buying a second-hand mobile in Madurai</Link>.
      </p>
    </BlogArticle>
  );
}
