import type { Metadata } from "next";
import { CityHub } from "@/components/hubs/CityHub";
import { seo } from "@/data/seo";
import { parseFilters } from "@/lib/facilities";
import { hreflangCity, seoMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...seoMetadata(seo.cityEs),
  ...hreflangCity(),
};

export default async function SanAntonioEsPage({
  searchParams,
}: PageProps<"/es/san-antonio">) {
  const filters = parseFilters(await searchParams);
  return <CityHub lang="es" filters={filters} />;
}
