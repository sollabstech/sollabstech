import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Our Work & Portfolio – Sollabs Tech",
  description: "200+ software projects delivered — mobile apps, websites, e-commerce, CRM, ERP, and AI solutions. See what Sollabs Tech has built for real businesses.",
  keywords: ["software portfolio India", "mobile app development", "web development portfolio", "sollabs tech projects"],
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio – 200+ Projects by Sollabs Tech",
    description: "Real software for real businesses. Mobile apps, websites, dashboards, and more.",
    url: "https://www.sollabstech.com/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
