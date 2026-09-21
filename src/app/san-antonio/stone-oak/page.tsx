import type { Metadata } from "next";
import { SuburbHub } from "@/components/hubs/SuburbHub";
import { seo } from "@/data/seo";
import { seoMetadata } from "@/lib/metadata";

export const metadata: Metadata = seoMetadata(seo.stoneOak);

export default function StoneOakPage() {
  return (
    <SuburbHub
      suburb="stone-oak"
      seo={seo.stoneOak}
      intro="North-central inventory is dense here. We list founding communities from the seed — not a “best of Stone Oak” ranking, and not a North Central doorway."
      headings={[
        "Why families look in Stone Oak",
        "Assisted living & memory care listings nearby",
        "Spanish-speaking staff filter",
        "How Stone Oak compares to other SA suburbs",
        "Visit checklist for multi-gen families",
        "Get a free Stone Oak shortlist",
      ]}
      esBlock={{
        h2: "Vida asistida en Stone Oak",
        body: "Stone Oak concentra varios listados fundadores de vida asistida y cuidado de memoria. Esta página está en inglés a propósito (hub de suburbio). El directorio gemelo de la ciudad está en /es/san-antonio.",
      }}
    />
  );
}
