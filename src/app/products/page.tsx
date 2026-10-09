import type { Metadata } from "next";
import { fetchProducts } from "@/lib/products";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products – Laptops & Mobiles | Sollabs Tech",
  description:
    "Buy laptops and mobile phones from Sollabs Tech, Madurai. New and refurbished laptops, iPhones, ASUS ROG gaming phones — quality checked, with warranty. Enquire on WhatsApp.",
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
    title: "Products – Laptops & Mobiles | Sollabs Tech",
    description:
      "New and refurbished laptops, iPhones, and gaming phones — quality checked with warranty from Sollabs Tech, Madurai.",
    url: "https://www.sollabstech.com/products",
  },
};

export const revalidate = 60;

export default async function ProductsPage() {
  const products = await fetchProducts().catch(() => null);
  return <ProductsClient initialProducts={products} />;
}
