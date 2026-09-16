import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Sollabs Tech – Software, Laptops & Phones in India",
  description: "Sollabs Tech builds modern mobile apps, websites, ERP & CRM software, delivers laptops & custom PCs, and sells quality-checked used and new phones across India. Free quote. Responds in 2 hours.",
  alternates: { canonical: "/" },
  keywords: [
    "sollabs tech",
    "software development india",
    "laptop sales madurai",
    "custom pc madurai",
    "used phones madurai",
    "second hand iphone madurai",
    "rog phone madurai",
    "sollabs tech phones",
    "mobile app development india",
    "web development madurai",
  ],
  openGraph: {
    title: "Sollabs Tech – Software, Laptops & Phones in India",
    description: "Software development, laptop & PC sales, and quality-checked phones — three ventures, one trusted brand from Madurai, India.",
    url: "https://www.sollabstech.com",
  },
};
import ServicesGrid from "@/components/sections/ServicesGrid";
import TechStack from "@/components/sections/TechStack";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import ComputersPreview from "@/components/sections/ComputersPreview";
import ReviewsSection from "@/components/sections/ReviewsSection";
import WhyUs from "@/components/sections/WhyUs";
import BlogPreview from "@/components/sections/BlogPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(0,102,255,0.3), transparent)" }} />
      <ServicesGrid />
      <TechStack />
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(0,102,255,0.2), transparent)" }} />
      <PortfolioPreview />
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(0,102,255,0.2), transparent)" }} />
      <ComputersPreview />
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(0,102,255,0.2), transparent)" }} />
      <WhyUs />
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(0,102,255,0.2), transparent)" }} />
      <ReviewsSection />
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(0,102,255,0.2), transparent)" }} />
      <BlogPreview />
    </>
  );
}
