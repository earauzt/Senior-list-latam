import type { MetadataRoute } from "next";
import { getAllFacilities } from "@/lib/facilities";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "/",
    "/san-antonio",
    "/es/san-antonio",
    "/san-antonio/stone-oak",
    "/san-antonio/westover-hills",
    "/san-antonio/alamo-ranch",
    "/san-antonio/medical-center",
    "/san-antonio/memory-care",
    "/es/san-antonio/cuidado-de-memoria",
    "/san-antonio/spanish-speaking",
    "/san-antonio/assisted-living-cost",
    "/list-your-community",
    "/quiz",
    "/privacy",
    "/terms",
    "/methodology",
  ];

  const facilities = getAllFacilities().flatMap((f) => [
    `/facilities/${f.slug}`,
    `/r/${f.slug}`,
  ]);

  return [...staticPaths, ...facilities].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
  }));
}
