import type { Metadata } from "next";
import { CtaRow } from "@/components/CtaRow";
import { DirectoryFilters } from "@/components/DirectoryFilters";
import { FacilityGrid } from "@/components/FacilityCard";
import { LeadForm } from "@/components/LeadForm";
import { PageHero, Section } from "@/components/Section";
import { TrustStrip } from "@/components/TrustStrip";
import { pack } from "@/data/copy-pack";
import { seo } from "@/data/seo";
import { filterFacilities, parseFilters } from "@/lib/facilities";
import { hreflangMemory, seoMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...seoMetadata(seo.memoryCare),
  ...hreflangMemory(),
};

export default async function MemoryCarePage({
  searchParams,
}: PageProps<"/san-antonio/memory-care">) {
  const requested = parseFilters(await searchParams);
  const filters = { ...requested, care: "memory_care" as const };
  const listings = filterFacilities(filters);
  const t = pack("en");

  return (
    <>
      <PageHero kicker={t.honest} title={seo.memoryCare.h1} />

      <section className="mx-auto max-w-6xl space-y-4 px-4">
        <TrustStrip />
        <CtaRow />
        <DirectoryFilters
          action="/san-antonio/memory-care"
          current={filters}
          lockCare
        />
        <p className="text-sm text-muted">
          {listings.length} founding listings
        </p>
      </section>

      <Section title="What memory care covers (Alzheimer’s & dementia)">
        <CtaRow includeB2b={false} />
      </Section>
      <Section title="Memory care by suburb in the San Antonio MSA">
        <CtaRow includeB2b={false} />
      </Section>
      <Section title="Spanish-speaking staff and cultural fit">
        <CtaRow includeB2b={false} />
      </Section>
      <Section title="Compare communities (founding MC listings)">
        <FacilityGrid facilities={listings} />
      </Section>
      <Section title="Cost & next steps — link to cost hub">
        <CtaRow includeB2b={false} />
      </Section>
      <Section title="Get a free memory care shortlist">
        <LeadForm path="/san-antonio/memory-care" care="memory_care" />
      </Section>
    </>
  );
}
