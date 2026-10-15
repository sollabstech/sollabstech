import type { Metadata } from "next";
import { fetchProducts } from "@/lib/products";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Buy Laptops, Custom PCs & Phones in Madurai | Sollabs Tech",
  description:
    "Quality-checked laptops, gaming laptops, custom PCs and phones from Sollabs Tech, Madurai. Delivered across India with a 7-day refund and 1-year free service.",
  alternates: { canonical: "/products" },
  keywords: [
    "buy laptop madurai",
    "buy mobile phone madurai",
    "refurbished laptop india",
    "used iphone madurai",
    "sollabs tech products",
    "gaming laptop madurai",
    "asus rog phone madurai",
  ],
  openGraph: {
    title: "Buy Laptops, Custom PCs & Phones in Madurai | Sollabs Tech",
    description:
      "New and refurbished laptops, iPhones, and gaming phones — quality checked with warranty from Sollabs Tech, Madurai.",
    url: "https://www.sollabstech.com/products",
  },
};

export const revalidate = 60;

export default async function ProductsPage() {
  const products = await fetchProducts().catch(() => null);
  return (
    <>
      <h1 className="sr-only">Laptops, Custom PCs &amp; Phones for Sale in Madurai</h1>
      <ProductsClient initialProducts={products} />
    </>
  );
}
