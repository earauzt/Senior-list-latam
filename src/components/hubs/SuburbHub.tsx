import Link from "next/link";
import { CtaRow } from "@/components/CtaRow";
import { TrustStrip } from "@/components/TrustStrip";
import { pack } from "@/data/copy-pack";
import { getSuburbFacilities } from "@/lib/facilities";
import type { HubSuburb, SeoFields } from "@/lib/types";
import { DirectoryFilters } from "../DirectoryFilters";
import { FacilityGrid } from "../FacilityCard";
import { LeadForm } from "../LeadForm";
import { PageHero, Section } from "../Section";

export function SuburbHub({
  suburb,
  seo,
  headings,
}: {
  suburb: HubSuburb;
  seo: SeoFields;
  headings: string[];
}) {
  const listings = getSuburbFacilities(suburb);
  const t = pack("en");

  return (
    <>
      <PageHero kicker={t.honest} title={seo.h1} />

      <section className="mx-auto max-w-6xl space-y-4 px-4">
        <TrustStrip />
        <CtaRow />
        <DirectoryFilters
          action={`/san-antonio/${suburb}`}
          current={{ suburb, care: "all", spanish: false }}
          lockSuburb
        />
        <p className="text-sm text-muted">
          {listings.length} founding listings.{" "}
          <Link href="/san-antonio" className="underline">
            {t.cta.soft}
          </Link>
        </p>
      </section>

      <Section title="Founding listings">
        <FacilityGrid facilities={listings} />
      </Section>

      {headings.map((heading) => (
        <Section key={heading} title={heading}>
          {heading.toLowerCase().includes("operator") ||
          heading.toLowerCase().includes("list your") ||
          heading.toLowerCase().includes("feature") ? (
            <p className="text-sm">{t.b2b}</p>
          ) : (
            <CtaRow includeB2b={heading.toLowerCase().includes("operator")} />
          )}
        </Section>
      ))}

      <Section title={t.cta.primary}>
        <LeadForm path={`/san-antonio/${suburb}`} suburb={suburb} />
      </Section>
    </>
  );
}
