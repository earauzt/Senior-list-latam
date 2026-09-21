import type { Metadata } from "next";
import { PageHero, Prose, Section } from "@/components/Section";
import { seo } from "@/data/seo";
import { seoMetadata } from "@/lib/metadata";

export const metadata: Metadata = seoMetadata(seo.terms);

export default function TermsPage() {
  return (
    <>
      <PageHero title={seo.terms.h1} lede="Draft legal stub for the San Antonio directory scaffold." />
      <Section title="Listings">
        <Prose>
          <p>
            Seed communities are founding listings. Names, addresses, phones,
            and license numbers come from research imports. TULIP license
            verification is still pending. Nothing here is a ranking, a
            guarantee, or medical advice.
          </p>
          <p>
            Senior List is a working name. This site is a draft — not a public
            publish.
          </p>
        </Prose>
      </Section>
    </>
  );
}
