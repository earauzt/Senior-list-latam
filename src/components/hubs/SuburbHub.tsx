import Link from "next/link";
import { getSuburbFacilities } from "@/lib/facilities";
import type { HubSuburb, Lang, SeoFields } from "@/lib/types";
import { DirectoryFilters } from "../DirectoryFilters";
import { FacilityGrid } from "../FacilityCard";
import { LeadForm } from "../LeadForm";
import { PageHero, Prose, Section } from "../Section";

export function SuburbHub({
  suburb,
  seo,
  headings,
  intro,
  esBlock,
}: {
  suburb: HubSuburb;
  seo: SeoFields;
  headings: string[];
  intro: string;
  esBlock: { h2: string; body: string };
}) {
  const listings = getSuburbFacilities(suburb);

  return (
    <>
      <PageHero
        kicker="San Antonio suburb · founding listings"
        title={seo.h1}
        lede={intro}
      />

      <section className="mx-auto max-w-6xl px-4">
        <DirectoryFilters
          action={`/san-antonio/${suburb}`}
          current={{ suburb, care: "all", spanish: false }}
          lockSuburb
        />
        <p className="mt-3 text-sm text-muted">
          {listings.length} founding listings in this hub. TULIP license verify
          still pending.{" "}
          <Link href="/san-antonio" className="underline">
            Back to city hub
          </Link>
        </p>
      </section>

      <Section title="Founding listings in this suburb">
        <FacilityGrid facilities={listings} />
      </Section>

      {headings.map((heading) => (
        <Section key={heading} title={heading}>
          <SuburbCopy suburb={suburb} heading={heading} />
        </Section>
      ))}

      <Section title={esBlock.h2}>
        <Prose>
          <p lang="es">{esBlock.body}</p>
        </Prose>
      </Section>

      <Section title="Get a free shortlist">
        <div className="grid gap-6 lg:grid-cols-2">
          <Prose>
            <p>
              Tell us suburb, care type, and whether Spanish-speaking staff
              matters. Draft mode does not email anyone.{" "}
              <Link href="/quiz" className="text-pine underline">
                Open the quiz
              </Link>
              .
            </p>
          </Prose>
          <LeadForm path={`/san-antonio/${suburb}`} suburb={suburb} />
        </div>
      </Section>
    </>
  );
}

function SuburbCopy({
  suburb,
  heading,
}: {
  suburb: HubSuburb;
  heading: string;
}) {
  const key = heading.toLowerCase();

  if (key.includes("spanish")) {
    return (
      <Prose>
        <p>
          Spanish-speaking staff is a filter, not a marketing invention. We
          only surface a bilingual signal when the seed supports it — and we
          still mark TULIP / staff language as unverified.{" "}
          <Link href="/san-antonio/spanish-speaking" className="text-pine underline">
            City-wide Spanish-speaking hub
          </Link>
          .
        </p>
      </Prose>
    );
  }

  if (key.includes("memory")) {
    return (
      <Prose>
        <p>
          Memory-care listings in this area are tagged from the seed (AL, MC,
          or both). This is not a nursing-home page.{" "}
          <Link
            href="/san-antonio/memory-care"
            className="text-pine underline"
          >
            Compare memory care across San Antonio
          </Link>
          .
        </p>
      </Prose>
    );
  }

  if (key.includes("cost")) {
    return (
      <Prose>
        <p>
          We do not publish per-community prices on Day-1. See honest MSA
          ranges on the{" "}
          <Link
            href="/san-antonio/assisted-living-cost"
            className="text-pine underline"
          >
            San Antonio cost guide
          </Link>
          .
        </p>
      </Prose>
    );
  }

  if (key.includes("operator") || key.includes("list your") || key.includes("feature")) {
    return (
      <Prose>
        <p>
          Operators can request a founding featured slot ($250–400/mo, city cap
          of 3). No ads are wired in this scaffold.{" "}
          <Link href="/list-your-community" className="text-pine underline">
            List your community
          </Link>
          .
        </p>
      </Prose>
    );
  }

  if (key.includes("compare") || key.includes("differs") || key.includes("other")) {
    return (
      <Prose>
        <p>
          Day-1 suburb hubs are Stone Oak, Westover Hills, Alamo Ranch, and
          Medical Center. North Central is omitted to avoid cannibalizing Stone
          Oak. Shavano Park is not a standalone hub yet. You are viewing{" "}
          <strong>{suburb}</strong>.
        </p>
      </Prose>
    );
  }

  return (
    <Prose>
      <p>
        Founding listings below come from the San Antonio seed (TULIP research
        import). License numbers are shown as found; verification is still
        pending. No invented ratings or review counts.
      </p>
    </Prose>
  );
}

export const suburbLang: Lang = "en";
