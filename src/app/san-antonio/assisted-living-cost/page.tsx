import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { PageHero, Prose, Section } from "@/components/Section";
import { seo } from "@/data/seo";
import { seoMetadata } from "@/lib/metadata";

export const metadata: Metadata = seoMetadata(seo.cost);

export default function CostPage() {
  return (
    <>
      <PageHero
        kicker="Guide · informational → shortlist"
        title={seo.cost.h1}
        lede="Honest ranges and the drivers of price. We do not publish per-community prices on Day-1, and we do not invent a number that looks like a quote."
      />

      <Section title="Typical assisted living cost ranges in San Antonio">
        <Prose>
          <p>
            Published U.S. cost-of-care surveys (families often start with
            Genworth / Cost of Care style reports) usually place Texas assisted
            living monthly medians in the mid four-figure range. San Antonio
            quotes move a lot around that median. Treat any public average as a
            planning band, not a community price.
          </p>
          <p>
            This directory will not list a dollar amount on a facility card
            until an operator confirms it. Founding listings still have TULIP
            license verification pending.
          </p>
        </Prose>
      </Section>

      <Section title="What drives price (care level, room, location)">
        <Prose>
          <p>
            Care hours, memory-care staffing, private vs shared rooms, and
            whether a community sits in Stone Oak versus the west side all
            change the quote. Community fees, levels of care, and medication
            management are usually extra questions — not a single sticker
            price.
          </p>
        </Prose>
      </Section>

      <Section title="Memory care cost premium (link MC hub)">
        <Prose>
          <p>
            Memory care is typically priced above assisted living because of
            staffing and the secured setting. Compare communities on{" "}
            <Link href="/san-antonio/memory-care" className="text-pine underline">
              memory care in San Antonio
            </Link>{" "}
            first, then ask each community for a written fee sheet.
          </p>
        </Prose>
      </Section>

      <Section title="Suburb differences (Stone Oak vs west side)">
        <Prose>
          <p>
            Newer north-central campuses and west-side homes can quote very
            different numbers for similar care. Use suburb hubs to shortlist,
            not to assume price:{" "}
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
            ,{" "}
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

      <Section title="Questions to ask before touring">
        <Prose>
          <ul className="list-disc space-y-1 pl-5">
            <li>What is included vs level-of-care fees?</li>
            <li>How do you staff evenings and weekends?</li>
            <li>Can residents receive care in Spanish on every shift?</li>
            <li>May we see the current HHSC / TULIP license status?</li>
          </ul>
        </Prose>
      </Section>

      <Section title="Get a free shortlist matched to your budget">
        <div className="grid gap-6 lg:grid-cols-2">
          <Prose>
            <p>
              Tell us a budget band in the notes. We still will not invent
              facility prices.{" "}
              <Link href="/quiz" className="text-pine underline">
                Shortlist quiz
              </Link>
              .
            </p>
          </Prose>
          <LeadForm path="/san-antonio/assisted-living-cost" intent="cost_question" />
        </div>
      </Section>
    </>
  );
}
