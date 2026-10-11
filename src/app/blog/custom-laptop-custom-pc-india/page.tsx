import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle, { h2, h3, p, strong, link, list, Callout, CardGrid, Table, type Faq } from "../_components/BlogArticle";

const slug = "custom-laptop-custom-pc-india";
const title = "Custom Laptop vs Custom PC in India: What You Can Customise and How to Order";
const description =
  "Want a custom laptop in India? Learn what you can actually customise on a laptop (RAM, SSD, setup), when a custom-built PC is the better choice, and how to order one from Sollabs Tech, Madurai.";

export const metadata: Metadata = {
  title: "Custom Laptop & Custom PC in India – What You Can Customise | Sollabs Tech",
  description,
  keywords: [
    "custom laptop india",
    "custom laptop",
    "customize laptop india",
    "customize your laptop",
    "custom pc build india",
    "custom pc madurai",
    "custom gaming pc india",
    "laptop configuration india",
  ],
  alternates: { canonical: `/blog/${slug}` },
  openGraph: {
    type: "article",
    title,
    description,
    url: `https://www.sollabstech.com/blog/${slug}`,
    publishedTime: "2026-10-11",
  },
};

const faqs: Faq[] = [
  {
    q: "Can I get a fully custom-built laptop in India?",
    a: "Not in the way you can build a desktop. On almost all laptops the processor and graphics are soldered to the motherboard. You customise a laptop by choosing the right base model and then configuring the RAM, storage and software setup.",
  },
  {
    q: "What parts of a laptop can be upgraded?",
    a: "Usually RAM (if the laptop has a free or replaceable slot) and storage (SSD or an extra drive slot). The processor and graphics card normally cannot be changed. Thin laptops sometimes have soldered RAM, so check the exact model first.",
  },
  {
    q: "Is a custom PC better than a laptop?",
    a: "If you don't need to carry it, yes: a custom PC gives more performance for the money and every part can be chosen and upgraded later. A laptop is the right choice if you need portability.",
  },
  {
    q: "Does Sollabs Tech build custom PCs?",
    a: "Yes. Sollabs Tech builds custom PCs in Madurai based on your budget and the software or games you use, and delivers across India. Message +91 90038 50743 on WhatsApp to get a configuration.",
  },
  {
    q: "Can Sollabs Tech upgrade a laptop I bought from them?",
    a: "Yes. Within 6 months of purchase, RAM and SSD upgrades cost only 90% of the parts price, and installation is free.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      slug={slug}
      tag="Buying Guide"
      datePublished="2026-10-11"
      title={title}
      description={description}
      breadcrumb="Custom Laptop vs Custom PC"
      faqs={faqs}
      intro={
        <>
          Searching for a <strong style={strong}>custom laptop in India</strong>? It helps to know what &ldquo;custom&rdquo; really means for a laptop, because it&apos;s very different from a custom-built desktop PC. This guide explains what you can and can&apos;t change, when a <strong style={strong}>custom PC</strong> is the smarter buy, and how to get either one configured by Sollabs Tech in Madurai.
        </>
      }
      cta={{
        title: "Tell us your budget and what you'll use it for",
        text: "We'll suggest a laptop configuration or a custom PC build that fits, with no obligation.",
        whatsappText: "Hi Sollabs Tech, I want a custom laptop / custom PC. Budget: ₹ , Use: ",
        primary: { href: "/products", label: "Browse Laptops" },
      }}
    >
      <h2 style={h2}>Can you build a custom laptop?</h2>
      <p style={p}>
        Not completely. On almost every laptop the <strong style={strong}>processor (CPU)</strong> and <strong style={strong}>graphics (GPU)</strong> are soldered to the motherboard, so they&apos;re fixed when the laptop is made. What you <em>can</em> do is pick the right base model and then configure the parts that are replaceable.
      </p>

      <h2 style={h2}>What you can customise on a laptop</h2>
      <CardGrid
        items={[
          { icon: "🧠", title: "RAM", text: "Add or replace memory if the laptop has a free or socketed slot. Many thin laptops have soldered RAM, so check first.", color: "#A855F7" },
          { icon: "💾", title: "Storage (SSD)", text: "Swap a hard disk for an SSD, fit a larger SSD, or add a second drive if there's a free slot.", color: "#00AAFF" },
          { icon: "🪟", title: "Software setup", text: "Operating system, drivers and the software you need, installed and ready on day one.", color: "#22C55E" },
          { icon: "🔒", title: "Usually fixed", text: "Processor, graphics card, screen panel and motherboard. Choose these by choosing the model.", color: "#F59E0B" },
        ]}
      />
      <p style={p}>
        Bought your laptop from Sollabs Tech? Within 6 months, RAM and SSD upgrades cost only <strong style={strong}>90% of the parts price</strong> with free installation. See the{" "}
        <Link href="/blog/laptop-ram-ssd-upgrade-madurai" style={link}>RAM &amp; SSD upgrade offer</Link>.
      </p>

      <h2 style={h2}>Custom laptop vs custom PC</h2>
      <Table
        head={["", "Configured laptop", "Custom-built PC"]}
        rows={[
          ["Portability", "Carry it anywhere", "Stays on your desk"],
          ["What you choose", "Base model + RAM, storage, software", "Every part: CPU, GPU, RAM, storage, power supply, case, cooling"],
          ["Performance for the money", "Good", "Best"],
          ["Upgrading later", "RAM and storage only", "Almost any part"],
          ["Best for", "Students, travel, office work", "Gaming, video editing, 3D, workstations"],
        ]}
      />

      <h2 style={h2}>Which should you choose?</h2>
      <h3 style={h3}>Choose a configured laptop if…</h3>
      <ul style={list}>
        <li>You study, travel or work from different places.</li>
        <li>Your work is browsers, Office, coding or light editing.</li>
        <li>You want one device that does everything reasonably well.</li>
      </ul>
      <h3 style={h3}>Choose a custom PC if…</h3>
      <ul style={list}>
        <li>You play demanding games or edit video, 3D or large photos.</li>
        <li>You want the most performance for your budget.</li>
        <li>You want to upgrade the graphics card or processor in the future.</li>
      </ul>

      <h2 style={h2}>How to order from Sollabs Tech</h2>
      <ol style={list}>
        <li>WhatsApp <strong style={strong}>+91 90038 50743</strong> with your budget and what you&apos;ll use it for (games, software, studies, work).</li>
        <li>We suggest a laptop from our stock with the right RAM and storage, or a custom PC parts list.</li>
        <li>Once you confirm, we set it up and deliver it, in Madurai or anywhere in India.</li>
      </ol>
      <Callout icon="🛡️" title="Laptops come with our after-sales warranty">
        Every laptop we sell includes a 7-day full refund, 1-month exchange, 6-month upgrade offer and 1 year of free service. Read the{" "}
        <Link href="/blog/used-laptop-with-warranty-madurai" style={link}>warranty guide</Link>.
      </Callout>
      <p style={p}>
        See everything else we offer in <Link href="/blog/sollabs-tech-services-madurai" style={link}>all Sollabs Tech services</Link>.
      </p>
    </BlogArticle>
  );
}
