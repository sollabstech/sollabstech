import type { Metadata } from "next";
import { Suspense } from "react";
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

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div style={{ paddingTop: 140, textAlign: "center", color: "#6B7A94" }}>
        Loading products...
      </div>
    }>
      <ProductsClient />
    </Suspense>
  );
}
