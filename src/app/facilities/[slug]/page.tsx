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
}: PageProps<"/facilities/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const facility = getFacilityBySlug(slug);
  if (!facility) return seoMetadata({ title: "Not found", description: "", h1: "" });
  return seoMetadata({
    title: `${facility.displayName} | San Antonio`,
    description: `${facility.displayName} in ${facility.suburbRaw}. Founding listing. TULIP license verify still pending. No invented ratings.`,
    h1: facility.displayName,
  });
}

export default async function FacilityPage({
  params,
}: PageProps<"/facilities/[slug]">) {
  const { slug } = await params;
  const facility = getFacilityBySlug(slug);
  if (!facility) notFound();
  return <FacilityProfile facility={facility} variant="directory" />;
}
