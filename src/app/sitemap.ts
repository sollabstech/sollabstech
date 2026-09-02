import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.sollabstech.com";
  return [
    { url: base,                     lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/software`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/computers`,      lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/portfolio`,      lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/contact`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/reviews`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`,                                          lastModified: new Date(), changeFrequency: "weekly",  priority: 0.6 },
    { url: `${base}/blog/most-valuable-company-in-madurai`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog/sollabs-tech-founder-bala-murugan`,       lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/blog/sollabs-tech-social-media`,               lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/blog/website-development-cost-india`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog/custom-software-development-india`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog/what-is-sollabs-tech`,                    lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog/how-to-check-laptop-warranty-sollabstech`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog/sollabstech-warranty-policy`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/sollabs-tech-laptop-warranty-replacement`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/warranty`,       lastModified: new Date(), changeFrequency: "yearly",  priority: 0.5 },
    { url: `${base}/track`,          lastModified: new Date(), changeFrequency: "yearly",  priority: 0.5 },
    { url: `${base}/privacy`,        lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/terms`,          lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
  ];
}
