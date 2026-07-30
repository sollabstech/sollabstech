import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import TechStack from "@/components/sections/TechStack";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import ComputersPreview from "@/components/sections/ComputersPreview";
import ReviewsSection from "@/components/sections/ReviewsSection";
import WhyUs from "@/components/sections/WhyUs";

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
    </>
  );
}
