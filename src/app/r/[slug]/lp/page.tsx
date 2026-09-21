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
}: PageProps<"/r/[slug]/lp">): Promise<Metadata> {
  const { slug } = await params;
  const facility = getFacilityBySlug(slug);
  if (!facility) return seoMetadata({ title: "Not found", description: "", h1: "" });
  return seoMetadata({
    title: `${facility.displayName} | Landing`,
    description: `UTM landing stub for ${facility.displayName}. No ads wired.`,
    h1: facility.displayName,
  });
}

export default async function BrandedLpPage({
  params,
}: PageProps<"/r/[slug]/lp">) {
  const { slug } = await params;
  const facility = getFacilityBySlug(slug);
  if (!facility) notFound();
  return <FacilityProfile facility={facility} variant="lp" />;
}
