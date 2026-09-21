import type { Metadata } from "next";
import Link from "next/link";
import { FacilityGrid } from "@/components/FacilityCard";
import { LeadForm } from "@/components/LeadForm";
import { PageHero, Prose, Section } from "@/components/Section";
import { seo } from "@/data/seo";
import { getFeaturedFacilities } from "@/lib/facilities";
import { seoMetadata } from "@/lib/metadata";

export const metadata: Metadata = seoMetadata(seo.listYourCommunity);

export default function ListYourCommunityPage() {
  const examples = getFeaturedFacilities();

  return (
    <>
      <PageHero
        kicker="B2B stub · no Stripe · no outreach"
        title={seo.listYourCommunity.h1}
        lede="Founding featured $250–400/month (30% off month 1) or a 5-lead pack. This page does not charge a card or email operators."
      />

      <Section title="Who this is for (AL / MC operators in SA MSA)">
        <Prose>
          <p>
            Licensed assisted living and memory care in the San Antonio MSA —
            especially Stone Oak, Westover Hills, Alamo Ranch, and Medical
            Center. Not a nursing-home marketplace. Not an APFM-style placement
            agency selling move-in fees.
          </p>
        </Prose>
      </Section>

      <Section title="Featured listing & bilingual badge ($250–400/mo pilot)">
        <Prose>
          <p>
            City featured is capped at 3 listings, and at most 1 Medical Center
            community in that row. A bilingual badge is only available when
            staff language is real — we will not sell a fake Spanish-speaking
            claim.
          </p>
        </Prose>
      </Section>

      <Section title="Qualified family leads ($75–150) — how it works">
        <Prose>
          <p>
            Families use the quiz and profile forms. A human qualifies suburb,
            care type, and timeline. Day-1: leads land in a log, not in your
            inbox. No auto-send.
          </p>
        </Prose>
      </Section>

      <Section title="Branded mini-landing /r/{slug} (phase 2)">
        <Prose>
          <p>
            Each founding listing already has a branded stub. Setup fee is a
            later phase ($400–700 + $100–150/mo in the GTM draft). Examples:
          </p>
        </Prose>
        <div className="mt-4">
          <FacilityGrid facilities={examples} />
        </div>
      </Section>

      <Section title="Founding operator offer (30% off — GTM)">
        <Prose>
          <p>
            Hold outreach until there is an explicit OK. This scaffold does not
            start conversations with owners and does not wire ads.
          </p>
        </Prose>
      </Section>

      <Section title="Request a listing / talk to us">
        <div className="grid gap-6 lg:grid-cols-2">
          <Prose>
            <p>
              ES blurb: Si operas vida asistida o cuidado de memoria en San
              Antonio, puedes pedir un listado fundador. Sin Stripe en el
              piloto.{" "}
              <Link href="/es/san-antonio" className="text-pine underline">
                Directorio para familias
              </Link>
              .
            </p>
          </Prose>
          <LeadForm intent="operator" path="/list-your-community" />
        </div>
      </Section>
    </>
  );
}
