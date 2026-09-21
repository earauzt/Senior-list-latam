import type { Metadata } from "next";
import { PageHero, Prose, Section } from "@/components/Section";
import { seoMetadata } from "@/lib/metadata";

export const metadata: Metadata = seoMetadata({
  title: "How we list communities | Senior List",
  description:
    "Founding listings, featured cap, and why we do not invent ratings or “best assisted living San Antonio” claims.",
  h1: "How we list San Antonio communities",
});

export default function MethodologyPage() {
  return (
    <>
      <PageHero
        title="How we list San Antonio communities"
        lede="Transparent Day-1 rules. No public scores until HHSC/TULIP work is done."
      />
      <Section title="Founding listings">
        <Prose>
          <p>
            Every card is imported from the San Antonio seed (research TULIP /
            public directories). We label them founding listings. License
            numbers are shown as found; verification is still pending.
          </p>
        </Prose>
      </Section>
      <Section title="Featured cap">
        <Prose>
          <p>
            Maximum 3 featured listings city-wide. Maximum 1 Medical Center
            community in that set. Featured is editorial / founding, not a
            purchased “#1 San Antonio” claim.
          </p>
        </Prose>
      </Section>
      <Section title="What we refuse">
        <Prose>
          <p>
            No nursing-home directory. No “best assisted living San Antonio”
            hub. No fake review counts. No invented per-community prices. No
            Spanish-speaking badge without a seed signal.
          </p>
        </Prose>
      </Section>
    </>
  );
}
