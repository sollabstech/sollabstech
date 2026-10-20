import type { Metadata } from "next";
import PricingClient from "./PricingClient";
import { CATEGORIES } from "./packages";

export const metadata: Metadata = {
  title: "Website, App & Software Development Pricing | Sollabs Tech",
  description: "Simple packages for websites, e-commerce, multi-vendor marketplaces, mobile apps, ERP and custom software. Compare Basic, Standard and Premium and pick yours.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing & Packages | Sollabs Tech",
    description: "Websites, mobile apps and custom software packages. Compare and select the one that fits your business.",
    url: "https://www.sollabstech.com/pricing",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Sollabs Tech packages",
  url: "https://www.sollabstech.com/pricing",
  itemListElement: CATEGORIES.map((c) => ({
    "@type": "OfferCatalog",
    name: c.name,
    itemListElement: c.tiers.map((t) => ({
      "@type": "Offer",
      name: `${c.name} – ${t.name}: ${t.title}`,
      description: t.summary,
      price: t.price,
      priceCurrency: "INR",
      itemOffered: { "@type": "Service", name: t.title, provider: { "@type": "Organization", name: "Sollabs Tech", url: "https://www.sollabstech.com" } },
    })),
  })),
};

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PricingClient />
    </>
  );
}
