import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sollabstech.com"),
  title: "Sollabs Tech – Software Development & Laptops in India",
  description: "Sollabs Tech builds modern software (mobile apps, websites, ERP, CRM) and delivers high-quality laptops & custom PCs across India. One trusted brand for all your technology needs.",
  keywords: ["software development India", "mobile app development", "buy laptop India", "custom PC build", "web development", "ERP CRM software", "Sollabs Tech"],
  authors: [{ name: "Sollabs Tech", url: "https://www.sollabstech.com" }],
  creator: "Sollabs Tech",
  publisher: "Sollabs Tech",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.sollabstech.com",
    siteName: "Sollabs Tech",
    title: "Sollabs Tech – Software Development & Laptops in India",
    description: "Software that builds businesses. Laptops delivered across India. One trusted brand.",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Sollabs Tech" }],
  },
  twitter: {
    card: "summary",
    title: "Sollabs Tech",
    description: "Software Development & Laptop Sales in India",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sollabs Tech",
    "description": "Software development company and laptop sales in India",
    "url": "https://www.sollabstech.com",
    "telephone": "+919003850743",
    "email": "sollabstech@gmail.com",
    "address": { "@type": "PostalAddress", "addressCountry": "IN" },
    "sameAs": [],
    "offers": [
      { "@type": "Offer", "name": "Software Development", "url": "https://www.sollabstech.com/software" },
      { "@type": "Offer", "name": "Laptops & Custom PCs", "url": "https://www.sollabstech.com/computers" },
    ],
  };

  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
