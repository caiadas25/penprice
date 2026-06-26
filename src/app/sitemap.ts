import { MetadataRoute } from "next";
import { brands } from "@/data/brands";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://penprice.vercel.app";

  const brandEntries = brands.map((brand) => ({
    url: `${baseUrl}/brands/${brand.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  const modelEntries = brands.flatMap((brand) =>
    brand.models.map((model) => ({
      url: `${baseUrl}/brands/${brand.slug}/${model.slug}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    }))
  );

  const blogEntries = [
    {
      url: `${baseUrl}/blog/best-fountain-pens-under-20`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/best-fountain-pens-under-50`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/best-fountain-pens-for-beginners`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/fountain-pen-filling-systems-explained`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/best-fountain-pen-inks`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/lamy-safari-vs-pilot-metropolitan`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/fountain-pen-maintenance-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/best-japanese-fountain-pens`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/fountain-pen-nib-sizes-explained`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/twsbi-eco-vs-pilot-metropolitan`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/best-fountain-pens-under-100`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/fountain-pen-vs-ballpoint`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
  ];

  const faqEntry = {
    url: `${baseUrl}/faq`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  };

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...brandEntries,
    ...modelEntries,
    ...blogEntries,
    faqEntry,
  ];
}