import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FacilityProfile } from "@/components/FacilityProfile";
import { getAllFacilities, getFacilityBySlug } from "@/lib/facilities";
import { seoMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return getAllFacilities().map((facility) => ({ slug: facility.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/r/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const facility = getFacilityBySlug(slug);
  if (!facility) return seoMetadata({ title: "Not found", description: "", h1: "" });
  return seoMetadata({
    title: `${facility.displayName} | Branded stub`,
    description: `Branded mini-landing stub for ${facility.displayName}. Phase 2 skin. No ads pixel. Draft ≠ publish.`,
    h1: facility.displayName,
  });
}

export default async function BrandedPage({
  params,
}: PageProps<"/r/[slug]">) {
  const { slug } = await params;
  const facility = getFacilityBySlug(slug);
  if (!facility) notFound();
  return <FacilityProfile facility={facility} variant="branded" />;
}
