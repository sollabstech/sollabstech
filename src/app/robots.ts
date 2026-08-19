import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/", "/drafts/"],
    },
    sitemap: "https://www.sollabstech.com/sitemap.xml",
  };
}
