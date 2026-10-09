import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchProductBySlug, fetchRelatedProducts, formatINR } from "@/lib/products";
import ProductDetailClient from "./ProductDetailClient";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await fetchProductBySlug(slug);
  if (!product) return {};

  const title = `${product.name} – ₹${formatINR(product.price)} | Sollabs Tech`;
  const description = `${product.condition} ${product.name} (${product.shortSpecs}) for ₹${formatINR(product.price)}. Buy from Sollabs Tech, Madurai — enquire on WhatsApp.`;

  return {
    title,
    description,
    alternates: { canonical: `/products/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://www.sollabstech.com/products/${slug}`,
      images: product.images[0] ? [{ url: product.images[0] }] : [],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await fetchProductBySlug(slug);
  if (!product) notFound();

  const related = await fetchRelatedProducts(product, 3);
  const url = `https://www.sollabstech.com/products/${slug}`;
  const condition = product.condition.toLowerCase();
  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description || product.shortSpecs,
    image: product.images,
    sku: product.id,
    brand: { "@type": "Brand", name: product.brand },
    offers: {
      "@type": "Offer",
      url,
      price: product.price,
      priceCurrency: "INR",
      availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      itemCondition: condition.includes("refurb")
        ? "https://schema.org/RefurbishedCondition"
        : /^(brand )?new\b/.test(condition)
          ? "https://schema.org/NewCondition"
          : "https://schema.org/UsedCondition",
      seller: { "@type": "Organization", name: "Sollabs Tech" },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "IN",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 7,
      },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      <ProductDetailClient product={product} related={related} />
    </>
  );
}
