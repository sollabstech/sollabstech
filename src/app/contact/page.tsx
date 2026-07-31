import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us – Sollabs Tech",
  description: "Get in touch with Sollabs Tech for software development, laptop purchases, or tech support. WhatsApp, email, or fill our contact form — we respond in 2 hours.",
  keywords: ["contact sollabs tech", "software development inquiry", "laptop inquiry India", "tech support contact"],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Sollabs Tech",
    description: "Software, laptops, or tech support — reach us on WhatsApp or email. We respond in 2 hours.",
    url: "https://www.sollabstech.com/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
