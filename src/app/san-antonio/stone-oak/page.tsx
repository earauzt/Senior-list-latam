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
      headings={[
        "Why families look in Stone Oak",
        "Assisted living & memory care listings nearby",
        "Spanish-speaking staff filter",
        "How Stone Oak compares to other SA suburbs",
        "Visit checklist for multi-gen families",
        "Get a free Stone Oak shortlist",
      ]}
    />
  );
}
