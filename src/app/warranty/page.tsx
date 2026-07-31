import type { Metadata } from "next";
import WarrantyClient from "./WarrantyClient";

export const metadata: Metadata = {
  title: "Laptop Warranty Checker – Sollabs Tech",
  description: "Check your Sollabs Tech laptop warranty status instantly. Enter your serial number to see coverage, remaining months, and purchase details.",
  keywords: ["laptop warranty check", "sollabs tech warranty", "warranty status India"],
  alternates: { canonical: "/warranty" },
  openGraph: {
    title: "Check Your Laptop Warranty – Sollabs Tech",
    description: "Enter your serial number to instantly view your warranty status and coverage details.",
    url: "https://www.sollabstech.com/warranty",
  },
};

export default function WarrantyPage() {
  return <WarrantyClient />;
}
