import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sollabs Tech – Software Development & Laptops",
  description: "Sollabs Tech builds modern software and delivers high-quality laptops & custom PCs. One trusted brand for all your technology needs.",
  keywords: ["software development", "laptops", "custom PC", "mobile apps", "web development", "India"],
  openGraph: {
    title: "Sollabs Tech",
    description: "Technology That Builds Businesses",
    siteName: "Sollabs Tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
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
