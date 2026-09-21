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
      headings={[
        "Assisted living in Alamo Ranch & west San Antonio",
        "Memory care options for Alamo Ranch families",
        "Spanish-speaking staff — cultural fit checklist",
        "Cost expectations (link city cost hub)",
        "Free shortlist for multi-gen Latam households",
        "List your Alamo Ranch community",
      ]}
    />
  );
}
