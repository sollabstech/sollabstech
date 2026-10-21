import type { Metadata } from "next";
import { fetchProducts } from "@/lib/products";
import ProductsClient from "./ProductsClient";

const title = "Sollabs Tech Laptop & Mobile List – Stock in Madurai";
const description =
  "Full Sollabs Tech laptop list and mobile stock with prices: gaming laptops, used laptops, custom PCs and phones in Madurai. 7-day refund and 1-year free service.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/products" },
  keywords: [
    "sollabstech laptop list",
    "sollabs tech laptop stock",
    "sollabstech laptops",
    "sollabstech mobile list",
    "laptop price list madurai",
    "buy laptop madurai",
    "used laptop madurai",
    "gaming laptop madurai",
    "buy mobile phone madurai",
  ],
  openGraph: { title, description, url: "https://www.sollabstech.com/products" },
};

export const revalidate = 60;

export default async function ProductsPage() {
  const products = await fetchProducts().catch(() => null);
  const inStock = products?.length ?? 0;

  // Lists every product so search engines see the whole stock list on this page.
  const itemList = products?.length
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Sollabs Tech laptop and mobile list",
        numberOfItems: products.length,
        itemListElement: products.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `https://www.sollabstech.com/products/${p.slug}`,
          name: p.name,
        })),
      }
    : null;

  return (
    <>
      {itemList && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />}
      <ProductsClient
        initialProducts={products}
        header={
          <div style={{ marginBottom: 18 }}>
            <h1 style={{ fontSize: "clamp(1.3rem, 3.5vw, 1.8rem)", fontWeight: 800, color: "white", margin: "0 0 4px" }}>
              Sollabs Tech Laptop &amp; Mobile List
            </h1>
            <p style={{ fontSize: 14, color: "#6B7A94", margin: 0 }}>
              {inStock ? `${inStock} in stock now` : "Current stock"} · laptops, gaming laptops, custom PCs and phones with prices · Madurai
            </p>
          </div>
        }
      />
    </>
  );
}
