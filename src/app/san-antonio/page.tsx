import type { Metadata } from "next";
import { CityHub } from "@/components/hubs/CityHub";
import { seo } from "@/data/seo";
import { parseFilters } from "@/lib/facilities";
import { hreflangCity, seoMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...seoMetadata(seo.city),
  ...hreflangCity(),
};

export default async function SanAntonioPage({
  searchParams,
}: PageProps<"/san-antonio">) {
  const filters = parseFilters(await searchParams);
  return <CityHub lang="en" filters={filters} />;
}
