import type { Metadata } from "next";
import { SuburbHub } from "@/components/hubs/SuburbHub";
import { seo } from "@/data/seo";
import { seoMetadata } from "@/lib/metadata";

export const metadata: Metadata = seoMetadata(seo.medicalCenter);

export default function MedicalCenterPage() {
  return (
    <SuburbHub
      suburb="medical-center"
      seo={seo.medicalCenter}
      intro="Near-hospital angle — not a thin doorway. Seed inventory around the Medical Center is enough to ship this hub. City featured still caps Medical Center at one slot (none used today)."
      headings={[
        "Why proximity to the Medical Center matters",
        "Communities near SA hospitals (founding listings)",
        "Assisted living vs memory care near Med Center",
        "Spanish-speaking staff filter",
        "How this area differs from Stone Oak / Westover Hills",
        "Get a free shortlist near the Medical Center",
      ]}
      esBlock={{
        h2: "Vida asistida cerca del Medical Center",
        body: "Listados fundadores cerca de hospitales del Medical Center. No es un hub de Shavano Park. La verificación TULIP sigue pendiente.",
      }}
    />
  );
}
