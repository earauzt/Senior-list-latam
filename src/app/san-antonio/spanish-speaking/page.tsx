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
import { seoMetadata } from "@/lib/metadata";

export const metadata: Metadata = seoMetadata(seo.spanishSpeaking);

export default async function SpanishSpeakingPage({
  searchParams,
}: PageProps<"/san-antonio/spanish-speaking">) {
  const requested = parseFilters(await searchParams);
  const filters = { ...requested, spanish: true };
  const listings = filterFacilities(filters);
  const t = pack("en");

  return (
    <>
      <PageHero kicker={t.honest} title={seo.spanishSpeaking.h1} />

      <section className="mx-auto max-w-6xl space-y-4 px-4">
        <TrustStrip />
        <CtaRow />
        <DirectoryFilters
          action="/san-antonio/spanish-speaking"
          current={filters}
          lockSpanish
        />
        <p className="text-sm text-muted">
          {listings.length} founding listing{listings.length === 1 ? "" : "s"}
        </p>
      </section>

      <Section title="What “Spanish-speaking staff” means on our listings">
        <CtaRow includeB2b={false} />
      </Section>
      <Section title="Why bilingual care matters for multi-gen families">
        <CtaRow includeB2b={false} />
      </Section>
      <Section title="Filter by suburb + Spanish-speaking staff">
        <FacilityGrid facilities={listings} />
      </Section>
      <Section title="Memory care with Spanish-speaking support">
        <CtaRow includeB2b={false} />
      </Section>
      <Section title="Free shortlist for bilingual households">
        <LeadForm path="/san-antonio/spanish-speaking" />
      </Section>
      <Section title="Operators: claim your bilingual badge">
        <p className="mb-3 text-sm">{t.b2b}</p>
        <CtaRow includeSoft={false} />
      </Section>
    </>
  );
}
