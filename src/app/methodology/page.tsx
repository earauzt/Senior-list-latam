import type { Metadata } from "next";
import { TrustStrip } from "@/components/TrustStrip";
import { pack } from "@/data/copy-pack";
import { PageHero, Section } from "@/components/Section";
import { seoMetadata } from "@/lib/metadata";

export const metadata: Metadata = seoMetadata({
  title: "How we list communities | Senior List",
  description:
    "Founding listings and TULIP verify pending. Free for families. No placement fee.",
  h1: "How we list San Antonio communities",
});

export default function MethodologyPage() {
  const t = pack("en");

  return (
    <>
      <PageHero title="How we list San Antonio communities" kicker={t.honest} />
      <Section title="Founding listings">
        <TrustStrip />
      </Section>
      <Section title="Featured">
        <p className="text-sm">{t.b2b}</p>
      </Section>
    </>
  );
}
