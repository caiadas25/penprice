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

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...brandEntries,
    ...modelEntries,
  ];
}