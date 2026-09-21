import type { Metadata } from "next";
import Link from "next/link";
import { CtaRow } from "@/components/CtaRow";
import { FacilityGrid } from "@/components/FacilityCard";
import { LeadForm } from "@/components/LeadForm";
import { PageHero, Section } from "@/components/Section";
import { TrustStrip } from "@/components/TrustStrip";
import { pack } from "@/data/copy-pack";
import { seo } from "@/data/seo";
import { getFeaturedFacilities } from "@/lib/facilities";
import { seoMetadata } from "@/lib/metadata";
import { HUB_SUBURBS } from "@/lib/site";

export const metadata: Metadata = seoMetadata(seo.home);

export default function HomePage() {
  const featured = getFeaturedFacilities();
  const en = pack("en");
  const es = pack("es");

  return (
    <>
      <PageHero kicker={en.honest} title={seo.home.h1} />

      <section className="mx-auto max-w-6xl space-y-4 px-4">
        <TrustStrip />
        <CtaRow />
        <p className="text-sm text-muted" lang="es">
          {es.trust}
        </p>
      </section>

      <section className="mx-auto mt-6 grid max-w-6xl gap-3 px-4 sm:grid-cols-2">
        <Link
          href="/san-antonio"
          className="rounded-2xl bg-pine px-5 py-6 text-white hover:bg-pine-dark"
        >
          <p className="font-serif text-2xl">{en.cta.soft}</p>
        </Link>
        <Link
          href="/es/san-antonio"
          className="rounded-2xl border border-line bg-card px-5 py-6 hover:border-pine"
          hrefLang="es"
        >
          <p className="font-serif text-2xl" lang="es">
            {es.cta.soft}
          </p>
        </Link>
      </section>

      <Section title="Stone Oak · Westover Hills · Alamo Ranch · Medical Center">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {HUB_SUBURBS.map((s) => (
            <Link
              key={s.slug}
              href={s.href}
              className="rounded-2xl border border-line bg-card px-4 py-5 hover:border-pine"
            >
              <p className="font-serif text-xl">{s.label}</p>
              <p className="mt-1 text-sm text-muted">{en.cta.soft}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Founding listings">
        <FacilityGrid facilities={featured} />
      </Section>

      <Section title={en.cta.primary}>
        <div className="grid gap-6 lg:grid-cols-2">
          <CtaRow includeB2b={false} includeSoft={false} />
          <LeadForm path="/" />
        </div>
      </Section>

      <Section title={en.cta.b2b}>
        <p className="mb-3 text-sm">{en.b2b}</p>
        <p className="mb-3 text-sm" lang="es">
          {es.b2b}
        </p>
        <CtaRow includeSoft={false} />
      </Section>
    </>
  );
}
