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
      headings={[
        "Why proximity to the Medical Center matters",
        "Communities near SA hospitals (founding listings)",
        "Assisted living vs memory care near Med Center",
        "Spanish-speaking staff filter",
        "How this area differs from Stone Oak / Westover Hills",
        "Get a free shortlist near the Medical Center",
      ]}
    />
  );
}
