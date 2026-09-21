import type { Metadata } from "next";
import { SuburbHub } from "@/components/hubs/SuburbHub";
import { seo } from "@/data/seo";
import { seoMetadata } from "@/lib/metadata";

export const metadata: Metadata = seoMetadata(seo.westoverHills);

export default function WestoverHillsPage() {
  return (
    <SuburbHub
      suburb="westover-hills"
      seo={seo.westoverHills}
      intro="West-side and NW families often start here. Only real seed listings appear — we will not pad the hub."
      headings={[
        "Assisted living options near Westover Hills",
        "Memory care in the Westover Hills area",
        "Spanish-speaking staff & bilingual family support",
        "Compare nearby suburbs (Stone Oak · Medical Center)",
        "Shortlist CTA for West Side / NW families",
        "Operators: feature your Westover Hills community",
      ]}
      esBlock={{
        h2: "Vida asistida cerca de Westover Hills",
        body: "Opciones de vida asistida y cuidado de memoria cerca de Westover Hills. Página en inglés; el hub de ciudad en español está en /es/san-antonio.",
      }}
    />
  );
}
