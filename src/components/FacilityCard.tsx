import Link from "next/link";
import {
  brandedPath,
  careLabel,
  facilityPath,
  suburbLabel,
} from "@/lib/facilities";
import type { Facility, Lang } from "@/lib/types";

export function FacilityCard({
  facility,
  lang = "en",
  compact = false,
}: {
  facility: Facility;
  lang?: Lang;
  compact?: boolean;
}) {
  const href = facilityPath(facility);

  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-card p-4 shadow-[0_1px_0_rgba(28,24,20,0.04)]">
      <div className="flex flex-wrap items-center gap-2 text-xs">
        {facility.featuredRank != null && (
          <span className="rounded-full bg-gold-soft px-2 py-0.5 font-medium text-gold">
            Featured · Tier A
          </span>
        )}
        <span className="rounded-full bg-paper px-2 py-0.5 text-muted">
          {suburbLabel(facility.suburb, lang)}
        </span>
        <span className="rounded-full bg-paper px-2 py-0.5 text-muted">
          {careLabel(facility.careTypes, lang)}
        </span>
        {facility.spanishSpeakingSignal && (
          <span className="rounded-full bg-pine/10 px-2 py-0.5 text-pine-dark">
            {lang === "es"
              ? "Señal bilingüe (sin verificar)"
              : "Bilingual signal (unverified)"}
          </span>
        )}
      </div>
      <h3 className="mt-3 font-serif text-xl leading-snug text-ink">
        <Link href={href} className="hover:text-pine">
          {facility.displayName}
        </Link>
      </h3>
      <p className="mt-2 text-sm text-muted">{facility.address}</p>
      {!compact && (
        <p className="mt-1 text-sm">
          <a href={`tel:${facility.phone}`} className="text-pine hover:underline">
            {facility.phone}
          </a>
        </p>
      )}
      <p className="mt-3 text-xs text-muted">
        {lang === "es"
          ? "Listado fundador. Licencia TULIP todavía pendiente de verificar."
          : "Founding listing. TULIP license verify still pending."}{" "}
        {facility.license ? `TULIP # ${facility.license}` : null}
      </p>
      <div className="mt-4 flex flex-wrap gap-2 text-sm">
        <Link
          href={href}
          className="rounded-full bg-pine px-3 py-1.5 text-white hover:bg-pine-dark"
        >
          {lang === "es" ? "Ver ficha" : "View profile"}
        </Link>
        <Link
          href={brandedPath(facility)}
          className="rounded-full border border-line px-3 py-1.5 hover:border-pine"
        >
          /r stub
        </Link>
      </div>
    </article>
  );
}

export function FacilityGrid({
  facilities,
  lang = "en",
  empty,
}: {
  facilities: Facility[];
  lang?: Lang;
  empty?: string;
}) {
  if (!facilities.length) {
    return (
      <p className="rounded-2xl border border-dashed border-line bg-card px-4 py-8 text-center text-muted">
        {empty ??
          (lang === "es"
            ? "No hay listados fundadores que coincidan con esos filtros. No inventamos fichas."
            : "No founding listings match those filters. We do not invent communities.")}
      </p>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {facilities.map((facility) => (
        <FacilityCard key={facility.id} facility={facility} lang={lang} />
      ))}
    </div>
  );
}
