import type { Metadata } from "next";
import { CtaRow } from "@/components/CtaRow";
import { QuizForm } from "@/components/QuizForm";
import { PageHero, Section } from "@/components/Section";
import { TrustStrip } from "@/components/TrustStrip";
import { pack } from "@/data/copy-pack";
import { seo } from "@/data/seo";
import { seoMetadata } from "@/lib/metadata";

export const metadata: Metadata = seoMetadata(seo.quiz);

export default function QuizPage() {
  const t = pack("en");

  return (
    <>
      <PageHero kicker={t.cta.secondary} title={seo.quiz.h1} />

      <section className="mx-auto max-w-6xl space-y-4 px-4">
        <TrustStrip />
        <CtaRow includeSoft={false} />
      </section>

      <Section title="Step 1 — Where in San Antonio? (suburb)">
        <QuizForm />
      </Section>

      <Section title="How we build your shortlist (transparent criteria)">
        <TrustStrip />
      </Section>
      <Section title="What happens after you submit (WhatsApp / email)">
        <p className="text-sm">{pack("en").form.success}</p>
        <p className="mt-1 text-sm" lang="es">
          {pack("es").form.success}
        </p>
      </Section>
      <Section title="Operators: feature where quiz traffic lands">
        <p className="mb-3 text-sm">{t.b2b}</p>
        <CtaRow includeSoft={false} />
      </Section>
    </>
  );
}
