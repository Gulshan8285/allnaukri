import type { MetadataRoute } from "next";
import { jobs } from "./jobs";
import { results, schemes } from "./updates";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://allnaukri.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/sarkari-naukri",
    "/sarkari-yojna",
    "/results",
    "/vlog",
    "/about-us",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/disclaimer"
  ];

  const jobRoutes = jobs.flatMap((job) => [`/naukri/${job.slug}`, `/naukri-details/${job.slug}`]);
  const schemeRoutes = schemes.map((scheme) => `/sarkari-yojna/${scheme.slug}`);
  const resultRoutes = results.map((result) => `/results/${result.slug}`);
  const now = new Date();

  return [...staticRoutes, ...jobRoutes, ...schemeRoutes, ...resultRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : route.includes("/naukri") ? 0.9 : 0.75
  }));
}
