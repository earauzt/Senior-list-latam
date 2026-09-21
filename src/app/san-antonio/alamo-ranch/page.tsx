import type { Metadata } from "next";
import { SuburbHub } from "@/components/hubs/SuburbHub";
import { seo } from "@/data/seo";
import { seoMetadata } from "@/lib/metadata";

export const metadata: Metadata = seoMetadata(seo.alamoRanch);

export default function AlamoRanchPage() {
  return (
    <SuburbHub
      suburb="alamo-ranch"
      seo={seo.alamoRanch}
      intro="West-side / Latam caregiver density is the wedge. Day-1 inventory is intentionally small: only seed-backed communities."
      headings={[
        "Assisted living in Alamo Ranch & west San Antonio",
        "Memory care options for Alamo Ranch families",
        "Spanish-speaking staff — cultural fit checklist",
        "Cost expectations (link city cost hub)",
        "Free shortlist for multi-gen Latam households",
        "List your Alamo Ranch community",
      ]}
      esBlock={{
        h2: "Vida asistida en Alamo Ranch",
        body: "Alamo Ranch es el hub oeste del piloto. Pocos listados fundadores, todos del seed. No inventamos comunidades para llenar la página.",
      }}
    />
  );
}
