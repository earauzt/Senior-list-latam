import type { Metadata } from "next";
import Link from "next/link";
import { DirectoryFilters } from "@/components/DirectoryFilters";
import { FacilityGrid } from "@/components/FacilityCard";
import { LeadForm } from "@/components/LeadForm";
import { PageHero, Prose, Section } from "@/components/Section";
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

  return (
    <>
      <PageHero
        kicker="Specialty hub · not a nursing-home directory"
        title={seo.memoryCare.h1}
        lede="Compare memory care in the San Antonio MSA by suburb and Spanish-speaking staff signal. Operators own many facility SERPs; this page is for compare + shortlist."
      />

      <section className="mx-auto max-w-6xl px-4">
        <DirectoryFilters
          action="/san-antonio/memory-care"
          current={filters}
          lockCare
        />
        <p className="mt-3 text-sm text-muted">
          {listings.length} founding memory-care listings. TULIP verify still
          pending.
        </p>
      </section>

      <Section title="What memory care covers (Alzheimer’s & dementia)">
        <Prose>
          <p>
            Memory care is a secured assisted-living setting for Alzheimer’s or
            another dementia. It is not a skilled nursing facility and this
            site is not a nursing-home directory. An Alzheimer’s alias hub is
            not shipping on Day-1 so we do not cannibalize this URL.
          </p>
        </Prose>
      </Section>

      <Section title="Memory care by suburb in the San Antonio MSA">
        <Prose>
          <p>
            Filter above or open{" "}
            <Link href="/san-antonio/stone-oak" className="text-pine underline">
              Stone Oak
            </Link>
            ,{" "}
            <Link
              href="/san-antonio/westover-hills"
              className="text-pine underline"
            >
              Westover Hills
            </Link>
            ,{" "}
            <Link href="/san-antonio/alamo-ranch" className="text-pine underline">
              Alamo Ranch
            </Link>
            , or{" "}
            <Link
              href="/san-antonio/medical-center"
              className="text-pine underline"
            >
              Medical Center
            </Link>
            .
          </p>
        </Prose>
      </Section>

      <Section title="Spanish-speaking staff and cultural fit">
        <Prose>
          <p>
            We do not invent bilingual staffing. Use the checkbox only when a
            seed signal exists.{" "}
            <Link
              href="/san-antonio/spanish-speaking"
              className="text-pine underline"
            >
              Spanish-speaking hub
            </Link>
            .
          </p>
        </Prose>
      </Section>

      <Section title="Compare communities (founding MC listings)">
        <FacilityGrid facilities={listings} />
      </Section>

      <Section title="Cost & next steps — link to cost hub">
        <Prose>
          <p>
            Memory care usually costs more than assisted living. We do not
            publish fake per-facility prices.{" "}
            <Link
              href="/san-antonio/assisted-living-cost"
              className="text-pine underline"
            >
              Cost of assisted living in San Antonio
            </Link>
            .
          </p>
        </Prose>
      </Section>

      <Section title="Get a free memory care shortlist">
        <div className="grid gap-6 lg:grid-cols-2">
          <Prose>
            <p>
              <Link href="/quiz" className="text-pine underline">
                Take the quiz
              </Link>{" "}
              or use the form. Draft mode does not email families or operators.
            </p>
          </Prose>
          <LeadForm path="/san-antonio/memory-care" care="memory_care" />
        </div>
      </Section>
    </>
  );
}
