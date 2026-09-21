import Link from "next/link";
import { CtaRow } from "@/components/CtaRow";
import { TrustStrip } from "@/components/TrustStrip";
import { pack } from "@/data/copy-pack";
import { seo as seoCopy } from "@/data/seo";
import {
  filterFacilities,
  getFeaturedFacilities,
} from "@/lib/facilities";
import { HUB_SUBURBS } from "@/lib/site";
import type { DirectoryFilters, Lang } from "@/lib/types";
import { DirectoryFilters as FilterForm } from "../DirectoryFilters";
import { FacilityGrid } from "../FacilityCard";
import { LeadForm } from "../LeadForm";
import { PageHero, Section } from "../Section";

export function CityHub({
  lang,
  filters,
}: {
  lang: Lang;
  filters: DirectoryFilters;
}) {
  const es = lang === "es";
  const listings = filterFacilities(filters);
  const featured = getFeaturedFacilities().filter((facility) =>
    listings.some((row) => row.id === facility.id),
  );
  const copy = es ? seoCopy.cityEs : seoCopy.city;
  const filterAction = es ? "/es/san-antonio" : "/san-antonio";
  const t = pack(lang);

  return (
    <>
      <PageHero
        kicker={t.honest}
        title={copy.h1}
      />

      <section className="mx-auto max-w-6xl space-y-4 px-4">
        <TrustStrip lang={lang} />
        <CtaRow lang={lang} includeSoft={false} />
        <FilterForm action={filterAction} current={filters} lang={lang} />
        <p className="text-sm text-muted">
          {listings.length} {es ? "listados fundadores" : "founding listings"}
        </p>
      </section>

      {featured.length > 0 ? (
        <Section
          title={
            es
              ? "Listados fundadores en San Antonio"
              : "Founding listings: communities we’re featuring first"
          }
        >
          <FacilityGrid facilities={featured} lang={lang} />
        </Section>
      ) : null}

      <Section
        title={
          es
            ? "Busca por suburbio (Stone Oak, Westover Hills, Alamo Ranch…)"
            : "Browse assisted living by San Antonio suburb"
        }
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {HUB_SUBURBS.map((s) => (
            <Link
              key={s.slug}
              href={s.href}
              className="rounded-2xl border border-line bg-card px-4 py-5 hover:border-pine"
            >
              <p className="font-serif text-xl">{es ? s.labelEs : s.label}</p>
              <p className="mt-1 text-sm text-muted">{t.cta.soft}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        title={
          es
            ? "Vida asistida vs cuidado de memoria"
            : "Assisted living vs memory care — which fits your family"
        }
      >
        <CtaRow lang={lang} includeB2b={false} />
      </Section>

      <Section
        title={
          es
            ? "Comunidades con personal que habla español"
            : "Filter communities with Spanish-speaking staff"
        }
      >
        <CtaRow lang={lang} includeB2b={false} />
      </Section>

      <Section
        title={es ? "Todos los listados fundadores" : "All founding listings"}
      >
        <FacilityGrid facilities={listings} lang={lang} />
      </Section>

      <Section
        title={
          es
            ? "Pide tu lista corta gratis para la familia"
            : "How to get a free shortlist (no advisor fee)"
        }
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <CtaRow lang={lang} includeB2b={false} includeSoft={false} />
          </div>
          <LeadForm lang={lang} path={filterAction} />
        </div>
      </Section>

      <Section
        title={
          es
            ? "¿Operas una comunidad? Destácala aquí"
            : "Feature your community (operators)"
        }
      >
        <p className="mb-3 text-sm text-ink">{t.b2b}</p>
        <CtaRow lang={lang} includeSoft={false} />
      </Section>
    </>
  );
}
