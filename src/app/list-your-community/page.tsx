import type { Metadata } from "next";
import { CtaRow } from "@/components/CtaRow";
import { FacilityGrid } from "@/components/FacilityCard";
import { LeadForm } from "@/components/LeadForm";
import { PageHero, Section } from "@/components/Section";
import { TrustStrip } from "@/components/TrustStrip";
import { pack } from "@/data/copy-pack";
import { seo } from "@/data/seo";
import { getFeaturedFacilities } from "@/lib/facilities";
import { seoMetadata } from "@/lib/metadata";

export const metadata: Metadata = seoMetadata(seo.listYourCommunity);

export default function ListYourCommunityPage() {
  const examples = getFeaturedFacilities();
  const en = pack("en");
  const es = pack("es");

  return (
    <>
      <PageHero kicker="HOLD outreach" title={seo.listYourCommunity.h1} />

      <section className="mx-auto max-w-6xl space-y-4 px-4">
        <TrustStrip />
        <p className="font-serif text-xl text-ink">{en.b2b}</p>
        <p className="text-lg text-ink" lang="es">
          {es.b2b}
        </p>
        <CtaRow includeSoft />
      </section>

      <Section title="Who this is for (AL / MC operators in SA MSA)">
        <CtaRow includeSoft={false} />
      </Section>

      <Section title="Featured listing & bilingual badge ($250–400/mo pilot)">
        <p className="text-sm">{en.b2b}</p>
      </Section>

      <Section title="Founding operator offer (30% off — GTM)">
        <p className="text-sm">{en.b2b}</p>
        <p className="mt-2 text-sm" lang="es">
          {es.b2b}
        </p>
      </Section>

      <Section title="Request a listing / talk to us">
        <div className="grid gap-6 lg:grid-cols-2">
          <LeadForm intent="operator" path="/list-your-community" />
          <FacilityGrid facilities={examples} />
        </div>
      </Section>
    </>
  );
}
