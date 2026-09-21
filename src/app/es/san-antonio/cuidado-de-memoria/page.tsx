import type { Metadata } from "next";
import Link from "next/link";
import { DirectoryFilters } from "@/components/DirectoryFilters";
import { FacilityGrid } from "@/components/FacilityCard";
import { LeadForm } from "@/components/LeadForm";
import { PageHero, Prose, Section } from "@/components/Section";
import { seo } from "@/data/seo";
import { filterFacilities } from "@/lib/facilities";
import { hreflangMemory, seoMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...seoMetadata(seo.memoryCareEs),
  ...hreflangMemory(),
};

export default function CuidadoDeMemoriaPage() {
  const listings = filterFacilities({ care: "memory_care" });

  return (
    <>
      <PageHero
        kicker="Hub especial · no es directorio de asilos"
        title={seo.memoryCareEs.h1}
        lede="Compara cuidado de memoria (Alzheimer y otras demencias) en San Antonio por suburbio. Copy propia en español — no es un calco automático de la página EN."
      />

      <section className="mx-auto max-w-6xl px-4">
        <DirectoryFilters
          action="/es/san-antonio/cuidado-de-memoria"
          current={{ care: "memory_care", suburb: "all", spanish: false }}
          lang="es"
          lockCare
        />
        <p className="mt-3 text-sm text-muted">
          {listings.length} listados fundadores con cuidado de memoria.
          Verificación TULIP pendiente.
        </p>
      </section>

      <Section title="Qué cubre el cuidado de memoria">
        <Prose>
          <p>
            Es un entorno de vida asistida más contenido para Alzheimer u otra
            demencia. No es un nursing home y no armamos un directorio de
            asilos. Evitamos esa palabra porque estigmatiza y no describe el
            producto.
          </p>
        </Prose>
      </Section>

      <Section title="Listados fundadores">
        <FacilityGrid facilities={listings} lang="es" />
      </Section>

      <Section title="Pedir lista corta">
        <div className="grid gap-6 lg:grid-cols-2">
          <Prose>
            <p>
              El quiz y el formulario no envían correo en este borrador.{" "}
              <Link href="/quiz" className="text-pine underline">
                Abrir el quiz
              </Link>
              .
            </p>
          </Prose>
          <LeadForm lang="es" path="/es/san-antonio/cuidado-de-memoria" care="memory_care" />
        </div>
      </Section>
    </>
  );
}
