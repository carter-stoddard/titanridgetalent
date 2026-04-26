import type { MetadataRoute } from "next";
import { JOBS_VISIBLE } from "@/lib/features";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://titanridgetalent.com";

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/mission`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/founders`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    ...(JOBS_VISIBLE
      ? [{ url: `${baseUrl}/jobs`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 }]
      : []),
    { url: `${baseUrl}/industries`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/testimonials`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
