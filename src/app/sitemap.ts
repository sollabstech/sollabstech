import type { MetadataRoute } from "next";
import { fetchAllSlugs } from "@/lib/products";
import { clients } from "@/lib/clients";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://www.sollabstech.com";

  const slugs = await fetchAllSlugs();
  const productUrls: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${base}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const clientUrls: MetadataRoute.Sitemap = clients.map((c) => ({
    url: `${base}/clients/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    { url: base,                     lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/products`,       lastModified: new Date(), changeFrequency: "weekly",  priority: 0.95 },
    ...productUrls,
    { url: `${base}/clients`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...clientUrls,
    { url: `${base}/contact`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/reviews`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`,           lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/blog/buy-second-hand-mobile-madurai`,           lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/blog/sollabs-tech-mobile-phone-madurai`,       lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/blog/asus-rog-phone-5s-pro-price-madurai`,     lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
    { url: `${base}/blog/sollabs-tech-phones-coming-soon`,         lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/blog/bala-murugan-founder-story`,              lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog/t-bala-murugan-founder-qa`,               lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/sollabs-tech-founder-bala-murugan`,       lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/blog/sollabs-tech-social-media`,               lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/blog/website-development-cost-india`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog/custom-software-development-india`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog/what-is-sollabs-tech`,                    lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog/how-to-check-laptop-warranty-sollabstech`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog/sollabstech-warranty-policy`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/sollabs-tech-laptop-warranty-replacement`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/warranty`,       lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6 },
    { url: `${base}/track`,          lastModified: new Date(), changeFrequency: "yearly",  priority: 0.5 },
    { url: `${base}/privacy`,        lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/terms`,          lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
  ];
}
