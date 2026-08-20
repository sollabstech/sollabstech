import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Sollabs Tech – Software Development & Laptops in India",
  description: "Sollabs Tech builds modern mobile apps, websites, ERP & CRM software, and delivers laptops & custom PCs across India. Free quote. Responds in 2 hours.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sollabs Tech – Technology That Builds Businesses",
    description: "Software development and laptop sales in India. 200+ projects, 500+ laptops delivered.",
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
