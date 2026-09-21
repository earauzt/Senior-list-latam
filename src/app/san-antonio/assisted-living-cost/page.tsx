import type { Metadata } from "next";
import { CtaRow } from "@/components/CtaRow";
import { LeadForm } from "@/components/LeadForm";
import { PageHero, Section } from "@/components/Section";
import { TrustStrip } from "@/components/TrustStrip";
import { pack } from "@/data/copy-pack";
import { seo } from "@/data/seo";
import { seoMetadata } from "@/lib/metadata";

export const metadata: Metadata = seoMetadata(seo.cost);

export default function CostPage() {
  const t = pack("en");

  return (
    <>
      <PageHero kicker={t.honest} title={seo.cost.h1} />

      <section className="mx-auto max-w-6xl space-y-4 px-4">
        <TrustStrip />
        <CtaRow />
      </section>

      <Section title="Typical assisted living cost ranges in San Antonio">
        <CtaRow includeB2b={false} />
      </Section>
      <Section title="What drives price (care level, room, location)">
        <CtaRow includeB2b={false} />
      </Section>
      <Section title="Memory care cost premium (link MC hub)">
        <CtaRow includeB2b={false} />
      </Section>
      <Section title="Suburb differences (Stone Oak vs west side)">
        <CtaRow includeB2b={false} />
      </Section>
      <Section title="Questions to ask before touring">
        <CtaRow includeB2b={false} />
      </Section>
      <Section title="Get a free shortlist matched to your budget">
        <LeadForm
          path="/san-antonio/assisted-living-cost"
          intent="cost_question"
        />
      </Section>
    </>
  );
}
