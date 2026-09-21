import Link from "next/link";
import {
  brandedPath,
  careLabel,
  facilityPath,
  suburbLabel,
} from "@/lib/facilities";
import { suburbHref } from "@/lib/site";
import type { Facility } from "@/lib/types";
import { LeadForm } from "./LeadForm";
import { Prose } from "./Section";

export function FacilityProfile({
  facility,
  variant = "directory",
}: {
  facility: Facility;
  variant?: "directory" | "branded" | "lp";
}) {
  const isBranded = variant !== "directory";

  return (
    <article className="mx-auto max-w-6xl px-4 py-8">
      <p className="text-xs uppercase tracking-[0.16em] text-gold">
        {isBranded ? "Branded stub · /r" : "Facility profile"} · founding listing
      </p>
      <h1 className="mt-2 font-serif text-3xl leading-tight sm:text-4xl">
        {facility.displayName}
      </h1>
      {facility.name !== facility.displayName && (
        <p className="mt-2 text-sm text-muted">{facility.name}</p>
      )}

      <div className="mt-4 flex flex-wrap gap-2 text-sm">
        {facility.featuredRank != null && (
          <span className="rounded-full bg-gold-soft px-2 py-0.5 text-gold">
            Featured · Tier A · slot {facility.featuredRank}/3
          </span>
        )}
        <Link
          href={suburbHref(facility.suburb)}
          className="rounded-full bg-card px-2 py-0.5 ring-1 ring-line"
        >
          {suburbLabel(facility.suburb)}
        </Link>
        <span className="rounded-full bg-card px-2 py-0.5 ring-1 ring-line">
          {careLabel(facility.careTypes)}
        </span>
        {facility.spanishSpeakingSignal && (
          <span className="rounded-full bg-pine/10 px-2 py-0.5 text-pine-dark">
            Bilingual signal (unverified)
          </span>
        )}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-line bg-card p-5">
            <p>{facility.address}</p>
            <p className="mt-2">
              <a href={`tel:${facility.phone}`} className="text-pine underline">
                {facility.phone}
              </a>
            </p>
            <p className="mt-3 text-sm text-muted">
              TULIP / license # {facility.license || "not in seed"}. License
              verify still pending. Area noted in seed as {facility.suburbRaw}.
            </p>
          </div>

          <Prose>
            <p>
              This is a founding listing imported from the San Antonio Day-1
              seed. We do not invent star ratings, review counts, or monthly
              prices. Care types are assisted living and/or memory care only —
              not skilled nursing.
            </p>
            {variant === "lp" && (
              <p>
                Branded landing (phase 2 skin). UTM can land here later. No ads
                pixel is wired in this scaffold.
              </p>
            )}
          </Prose>

          <div className="flex flex-wrap gap-3 text-sm">
            {isBranded ? (
              <Link
                href={facilityPath(facility)}
                className="rounded-full border border-line px-3 py-1.5"
              >
                Full directory profile
              </Link>
            ) : (
              <Link
                href={brandedPath(facility)}
                className="rounded-full border border-line px-3 py-1.5"
              >
                Branded /r stub
              </Link>
            )}
            <Link href="/quiz" className="rounded-full border border-line px-3 py-1.5">
              Shortlist quiz
            </Link>
            <Link
              href="/list-your-community"
              className="rounded-full border border-line px-3 py-1.5"
            >
              Feature this community
            </Link>
          </div>
        </div>

        <LeadForm
          intent="tour"
          facilitySlug={facility.slug}
          path={
            variant === "directory"
              ? facilityPath(facility)
              : brandedPath(facility)
          }
          suburb={facility.suburb}
          care={facility.careTypes[0]}
        />
      </div>
    </article>
  );
}
