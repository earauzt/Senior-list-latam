import type { Metadata } from "next";
import Link from "next/link";
import { DirectoryFilters } from "@/components/DirectoryFilters";
import { FacilityGrid } from "@/components/FacilityCard";
import { LeadForm } from "@/components/LeadForm";
import { PageHero, Prose, Section } from "@/components/Section";
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

  return (
    <>
      <PageHero
        kicker="Wedge · bilingual families"
        title={seo.spanishSpeaking.h1}
        lede="This filter is honest: we only show seed rows with a bilingual signal. Staff language is not verified. We will not invent Spanish-speaking badges to fill the page."
      />

      <section className="mx-auto max-w-6xl px-4">
        <DirectoryFilters
          action="/san-antonio/spanish-speaking"
          current={filters}
          lockSpanish
        />
        <p className="mt-3 text-sm text-muted">
          {listings.length} founding listing
          {listings.length === 1 ? "" : "s"} with a bilingual signal. Twin city
          hub:{" "}
          <Link href="/es/san-antonio" className="underline">
            /es/san-antonio
          </Link>
          .
        </p>
      </section>

      <Section title="What “Spanish-speaking staff” means on our listings">
        <Prose>
          <p>
            Day-1 it means the research seed recorded a bilingual-friendly
            operator signal (for example a Spanish family name on a small
            home). It does not mean we interviewed staff or confirmed every
            shift is bilingual. TULIP license verify is also still pending.
          </p>
        </Prose>
      </Section>

      <Section title="Why bilingual care matters for multi-gen families">
        <Prose>
          <p>
            Adult children often coordinate care in English while parents
            prefer Spanish at the community. That is the San Antonio wedge —
            not a fight with “best assisted living San Antonio” rankings.
          </p>
        </Prose>
      </Section>

      <Section title="Filter by suburb + Spanish-speaking staff">
        <p className="mb-4 text-sm text-muted">
          Use the suburb control above. Listings without a signal are hidden
          here on purpose.
        </p>
        <FacilityGrid
          facilities={listings}
          empty="Only one seed row currently carries a bilingual signal. We will not invent more to make this hub look full."
        />
      </Section>

      <Section title="Memory care with Spanish-speaking support">
        <Prose>
          <p>
            Check memory care on the filter or start from{" "}
            <Link href="/san-antonio/memory-care" className="text-pine underline">
              memory care
            </Link>
            . If no bilingual+MC overlap exists in the seed, the list stays
            empty.
          </p>
        </Prose>
      </Section>

      <Section title="Free shortlist for bilingual households">
        <div className="grid gap-6 lg:grid-cols-2">
          <Prose>
            <p>
              <Link href="/quiz" className="text-pine underline">
                Quiz
              </Link>{" "}
              includes the Spanish-speaking question. No advisor hard-sell.
            </p>
          </Prose>
          <LeadForm path="/san-antonio/spanish-speaking" />
        </div>
      </Section>

      <Section title="Operators: claim your bilingual badge">
        <Prose>
          <p>
            If you actually staff in Spanish, say so when you{" "}
            <Link href="/list-your-community" className="text-pine underline">
              list your community
            </Link>
            . We will not add the badge from a guess.
          </p>
        </Prose>
      </Section>
    </>
  );
}
