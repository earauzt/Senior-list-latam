import type { Metadata } from "next";
import Link from "next/link";
import { QuizForm } from "@/components/QuizForm";
import { PageHero, Prose, Section } from "@/components/Section";
import { seo } from "@/data/seo";
import { seoMetadata } from "@/lib/metadata";

export const metadata: Metadata = seoMetadata(seo.quiz);

export default function QuizPage() {
  return (
    <>
      <PageHero
        kicker="Matcher stub · no email send"
        title={seo.quiz.h1}
        lede="Answer suburb, care type, and Spanish-speaking staff. Matches come from founding seed listings only."
      />

      <Section title="Step 1 — Where in San Antonio? (suburb)">
        <Prose>
          <p>
            Steps 2 and 3 cover assisted living vs memory care and Spanish-speaking
            staff. The form on the right keeps your answers in local UI state
            and writes the submission to the console / <code>/api/leads</code>{" "}
            stub — nothing is emailed.
          </p>
        </Prose>
      </Section>

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <QuizForm />
      </section>

      <Section title="How we build your shortlist (transparent criteria)">
        <Prose>
          <p>
            Filter the seed by suburb hub, care type (AL / memory care / both),
            and an optional bilingual signal. No review scores, no invented
            “fit %”. Methodology page:{" "}
            <Link href="/methodology" className="text-pine underline">
              /methodology
            </Link>
            .
          </p>
        </Prose>
      </Section>

      <Section title="What happens after you submit (WhatsApp / email)">
        <Prose>
          <p>
            In production, a human would follow up. In this draft scaffold the
            payload stays in logs. No auto-email to families or operators.
          </p>
        </Prose>
      </Section>

      <Section title="Operators: feature where quiz traffic lands">
        <Prose>
          <p>
            Featured slots are capped at 3 city-wide.{" "}
            <Link href="/list-your-community" className="text-pine underline">
              List your community
            </Link>
            .
          </p>
        </Prose>
      </Section>
    </>
  );
}
