import type { Metadata } from "next";
import { CtaRow } from "@/components/CtaRow";
import { DirectoryFilters } from "@/components/DirectoryFilters";
import { FacilityGrid } from "@/components/FacilityCard";
import { LeadForm } from "@/components/LeadForm";
import { PageHero, Section } from "@/components/Section";
import { TrustStrip } from "@/components/TrustStrip";
import { pack } from "@/data/copy-pack";
import { seo } from "@/data/seo";
import { filterFacilities } from "@/lib/facilities";
import { hreflangMemory, seoMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...seoMetadata(seo.memoryCareEs),
  ...hreflangMemory(),
};

export default function CuidadoDeMemoriaPage() {
  const listings = filterFacilities({ care: "memory_care" });
  const t = pack("es");

  return (
    <>
      <PageHero kicker={t.honest} title={seo.memoryCareEs.h1} />

      <section className="mx-auto max-w-6xl space-y-4 px-4">
        <TrustStrip lang="es" />
        <CtaRow lang="es" />
        <DirectoryFilters
          action="/es/san-antonio/cuidado-de-memoria"
          current={{ care: "memory_care", suburb: "all", spanish: false }}
          lang="es"
          lockCare
        />
        <p className="text-sm text-muted">
          {listings.length} listados fundadores
        </p>
      </section>

      <Section title="Listados fundadores">
        <FacilityGrid facilities={listings} lang="es" />
      </Section>

      <Section title={t.cta.primary}>
        <LeadForm
          lang="es"
          path="/es/san-antonio/cuidado-de-memoria"
          care="memory_care"
        />
      </Section>
    </>
  );
}
