import type { Metadata } from "next";
import { PageHero, Prose, Section } from "@/components/Section";
import { seo } from "@/data/seo";
import { seoMetadata } from "@/lib/metadata";

export const metadata: Metadata = seoMetadata(seo.privacy);

export default function PrivacyPage() {
  return (
    <>
      <PageHero title={seo.privacy.h1} lede="Draft legal stub. Not a production policy." />
      <Section title="What we collect in this scaffold">
        <Prose>
          <p>
            Quiz and lead forms accept a name and optional phone/email. In this
            repo those values are written to server or browser logs only. They
            are not stored in Supabase, not emailed, and not shared with
            community owners.
          </p>
          <p>
            No ads pixels, no owner outreach tools, and no automatic messages
            are wired.
          </p>
        </Prose>
      </Section>
    </>
  );
}
