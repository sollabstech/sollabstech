import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
  async redirects() {
    return [
      // Redirect non-www (sollabstech.com) → www (www.sollabstech.com)
      // Fixes "Redirect error" in Google Search Console for all non-www URLs
      {
        source: "/:path*",
        has: [{ type: "host", value: "sollabstech.com" }],
        destination: "https://www.sollabstech.com/:path*",
        permanent: true,
      },
      // Old pages removed in the redesign that Google still shows in search
      { source: "/computers", destination: "/products", permanent: true },
      { source: "/computers/:id", destination: "/products", permanent: true },
      { source: "/mobile", destination: "/blog/sollabs-tech-mobile-phone-madurai", permanent: true },
      { source: "/mobile/new", destination: "/blog/sollabs-tech-mobile-phone-madurai", permanent: true },
      { source: "/mobile/second-hand", destination: "/blog/buy-second-hand-mobile-madurai", permanent: true },
    ];
  },
};

export default nextConfig;
