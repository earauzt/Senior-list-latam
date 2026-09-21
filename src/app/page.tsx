import type { Metadata } from "next";
import Link from "next/link";
import { FacilityGrid } from "@/components/FacilityCard";
import { PageHero, Prose, Section } from "@/components/Section";
import { seo } from "@/data/seo";
import { getFeaturedFacilities } from "@/lib/facilities";
import { seoMetadata } from "@/lib/metadata";
import { HUB_SUBURBS } from "@/lib/site";

export const metadata: Metadata = seoMetadata(seo.home);

export default function HomePage() {
  const featured = getFeaturedFacilities();

  return (
    <>
      <PageHero
        kicker="San Antonio · English & Spanish"
        title={seo.home.h1}
        lede="A Day-1 directory for bilingual and multi-gen families comparing assisted living and memory care in San Antonio suburbs. Draft ≠ publish. No #1 claims."
      />

      <section className="mx-auto grid max-w-6xl gap-3 px-4 sm:grid-cols-2">
        <Link
          href="/san-antonio"
          className="rounded-2xl bg-pine px-5 py-6 text-white hover:bg-pine-dark"
        >
          <p className="text-xs uppercase tracking-[0.16em] text-gold-soft">
            Money #1
          </p>
          <p className="mt-2 font-serif text-2xl">Browse San Antonio</p>
          <p className="mt-2 text-sm text-white/80">
            Filter by suburb, assisted living vs memory care, Spanish-speaking
            staff.
          </p>
        </Link>
        <Link
          href="/es/san-antonio"
          className="rounded-2xl border border-line bg-card px-5 py-6 hover:border-pine"
          hrefLang="es"
        >
          <p className="text-xs uppercase tracking-[0.16em] text-gold">
            Money #2 · ES
          </p>
          <p className="mt-2 font-serif text-2xl">Ver en español</p>
          <p className="mt-2 text-sm text-muted">
            Directorio gemelo con hreflang. Copy propia — no es una traducción
            automática.
          </p>
        </Link>
      </section>

      <Section title="Suburb hubs">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {HUB_SUBURBS.map((s) => (
            <Link
              key={s.slug}
              href={s.href}
              className="rounded-2xl border border-line bg-card px-4 py-5 hover:border-pine"
            >
              <p className="font-serif text-xl">{s.label}</p>
              <p className="mt-1 text-sm text-muted">Assisted living nearby</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Featured founding listings (max 3)">
        <p className="mb-4 text-sm text-muted">
          Tier A editorial picks: Stone Oak, Westover Hills, Alamo Ranch. Max 1
          Medical Center in the city featured row — none today, so the cap stays
          open. TULIP verify still pending.
        </p>
        <FacilityGrid facilities={featured} />
      </Section>

      <Section title="Start a shortlist or list a community">
        <div className="grid gap-3 sm:grid-cols-3">
          <Link
            href="/quiz"
            className="rounded-2xl border border-line bg-card px-4 py-5 hover:border-pine"
          >
            <p className="font-serif text-xl">Shortlist quiz</p>
            <p className="mt-1 text-sm text-muted">
              Suburb · care type · Spanish-speaking staff. No email send.
            </p>
          </Link>
          <Link
            href="/san-antonio/spanish-speaking"
            className="rounded-2xl border border-line bg-card px-4 py-5 hover:border-pine"
          >
            <p className="font-serif text-xl">Spanish-speaking</p>
            <p className="mt-1 text-sm text-muted">
              Honest bilingual filter — we do not invent staff language.
            </p>
          </Link>
          <Link
            href="/list-your-community"
            className="rounded-2xl border border-line bg-card px-4 py-5 hover:border-pine"
          >
            <p className="font-serif text-xl">Feature my community</p>
            <p className="mt-1 text-sm text-muted">
              Founding rates $250–400/mo. No Stripe on Day-1.
            </p>
          </Link>
        </div>
      </Section>

      <Section title="What this directory is not">
        <Prose>
          <p>
            Not a nursing-home directory. Not a “best assisted living San
            Antonio” listicle. Not live production. Seed rows are labeled
            founding listings until licenses are verified in TULIP and operators
            confirm details.
          </p>
        </Prose>
      </Section>
    </>
  );
}
