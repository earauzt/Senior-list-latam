import Link from "next/link";
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
import { PageHero, Prose, Section } from "../Section";

export function CityHub({
  lang,
  filters,
}: {
  lang: Lang;
  filters: DirectoryFilters;
}) {
  const es = lang === "es";
  const listings = filterFacilities(filters);
  const featured = getFeaturedFacilities();
  const copy = es ? seoCopy.cityEs : seoCopy.city;
  const filterAction = es ? "/es/san-antonio" : "/san-antonio";

  return (
    <>
      <PageHero
        kicker={es ? "Directorio fundador · San Antonio" : "Founding directory · San Antonio"}
        title={copy.h1}
        lede={
          es
            ? "Compara comunidades de vida asistida y cuidado de memoria por suburbio y por señal de personal en español. Sin ranking “#1”, sin asilos como directorio."
            : "Compare assisted living and memory care by suburb and Spanish-speaking staff signal. No “best of” ranking. No nursing-home directory."
        }
      />

      <section className="mx-auto max-w-6xl px-4">
        <FilterForm action={filterAction} current={filters} lang={lang} />
        <p className="mt-3 text-sm text-muted">
          {listings.length} {es ? "listados fundadores" : "founding listings"}
          {filters.spanish
            ? es
              ? " con señal bilingüe (sin verificar idioma del staff)."
              : " with a bilingual signal (staff language not verified)."
            : "."}{" "}
          TULIP verify still pending.
        </p>
      </section>

      <Section
        title={
          es
            ? "Listados fundadores que estamos destacando primero"
            : "Founding listings: communities we’re featuring first"
        }
      >
        <p className="mb-4 text-sm text-muted">
          {es
            ? "Máximo 3 featured en la ciudad. Máximo 1 Medical Center. Hoy: Stone Oak, Westover Hills y Alamo Ranch (Tier A). Cero Medical Center en el top para no diluir el cupo."
            : "Max 3 featured city-wide. Max 1 Medical Center. Today: Stone Oak, Westover Hills, and Alamo Ranch (Tier A). Zero Medical Center in the city top so we do not spend the cap."}
        </p>
        <FacilityGrid facilities={featured} lang={lang} />
      </Section>

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
              <p className="mt-1 text-sm text-muted">
                {es ? "Ver listados locales" : "Local founding listings"}
              </p>
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
        <Prose>
          {es ? (
            <>
              <p>
                La vida asistida ayuda con medicamentos, comidas y actividades
                cuando una persona mayor sigue relativamente independiente. El
                cuidado de memoria es para Alzheimer u otra demencia, con
                entornos más contenidos.
              </p>
              <p>
                No usamos la palabra “asilo” a propósito: no es un directorio de
                nursing homes.{" "}
                <Link href="/es/san-antonio/cuidado-de-memoria" className="text-pine underline">
                  Cuidado de memoria
                </Link>
                .
              </p>
            </>
          ) : (
            <>
              <p>
                Assisted living supports daily help — medications, meals,
                activities — when someone still lives with relative independence.
                Memory care is for Alzheimer’s or another dementia, usually with
                a more secured setting.
              </p>
              <p>
                This is not a nursing-home directory. See{" "}
                <Link href="/san-antonio/memory-care" className="text-pine underline">
                  memory care in San Antonio
                </Link>{" "}
                or the{" "}
                <Link
                  href="/san-antonio/assisted-living-cost"
                  className="text-pine underline"
                >
                  cost guide
                </Link>
                .
              </p>
            </>
          )}
        </Prose>
      </Section>

      <Section
        title={
          es
            ? "Comunidades con personal que habla español"
            : "Filter communities with Spanish-speaking staff"
        }
      >
        <Prose>
          {es ? (
            <p>
              El filtro bilingüe solo muestra fichas con una señal documentada
              en el seed — hoy, una sola, y el idioma del staff sigue sin
              verificar. No inventamos badges.{" "}
              <Link href="/san-antonio/spanish-speaking" className="text-pine underline">
                Filtro Spanish-speaking
              </Link>
              .
            </p>
          ) : (
            <p>
              The Spanish-speaking filter only includes listings with a
              documented seed signal. Staff language is not verified yet. We
              will not invent bilingual badges.{" "}
              <Link href="/san-antonio/spanish-speaking" className="text-pine underline">
                Open the Spanish-speaking hub
              </Link>
              .
            </p>
          )}
        </Prose>
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
          <Prose>
            {es ? (
              <p>
                El quiz pide suburbio, tipo de cuidado y si necesitan español.
                No hay fee tipo placement. En este scaffold el envío no manda
                correo.{" "}
                <Link href="/quiz" className="text-pine underline">
                  Ir al quiz
                </Link>
                .
              </p>
            ) : (
              <p>
                The quiz asks suburb, care type, and Spanish-speaking staff. No
                placement-agency fee. This scaffold does not send email.{" "}
                <Link href="/quiz" className="text-pine underline">
                  Take the shortlist quiz
                </Link>
                .
              </p>
            )}
          </Prose>
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
        <Prose>
          <p>
            {es
              ? "Featured fundador $250–400/mes. Leads de familia $75–150. Sin fee por mudanza tipo APFM."
              : "Founding featured $250–400/month. Qualified family leads $75–150. No APFM-style move-in placement fee."}{" "}
            <Link href="/list-your-community" className="text-pine underline">
              {es ? "Listar comunidad" : "List your community"}
            </Link>
            .
          </p>
        </Prose>
      </Section>
    </>
  );
}
