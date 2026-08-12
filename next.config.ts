import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ];
  },
};

export default nextConfig;
