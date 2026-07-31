import type { Metadata } from "next";
import ComputersClient from "./ComputersClient";

export const metadata: Metadata = {
  title: "Buy Laptops & Custom PCs in India – Sollabs Tech",
  description: "Shop refurbished and new laptops, gaming PCs, and custom builds in India. 500+ laptops delivered. Warranty included. WhatsApp us for today's stock.",
  keywords: ["buy laptop India", "refurbished laptop", "gaming laptop", "custom PC build", "laptop shop India", "sollabs tech computers"],
  alternates: { canonical: "/computers" },
  openGraph: {
    title: "Buy Laptops & Custom PCs – Sollabs Tech",
    description: "500+ laptops delivered across India. Gaming laptops, business laptops, custom PCs with warranty.",
    url: "https://www.sollabstech.com/computers",
  },
};

export default function ComputersPage() {
  return <ComputersClient />;
}
