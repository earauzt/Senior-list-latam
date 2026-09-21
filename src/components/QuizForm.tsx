"use client";

import { useMemo, useState } from "react";
import { pack } from "@/data/copy-pack";
import { HUB_SUBURBS } from "@/lib/site";
import { filterFacilities } from "@/lib/facilities";
import type { CareType, HubSuburb, Lang, SuburbSlug } from "@/lib/types";
import { FacilityGrid } from "./FacilityCard";

type Step = 1 | 2 | 3 | 4;
type CareChoice = CareType | "all";

export function QuizForm({ lang = "en" }: { lang?: Lang }) {
  const t = pack(lang);
  const [step, setStep] = useState<Step>(1);
  const [suburb, setSuburb] = useState<SuburbSlug | "all">("all");
  const [care, setCare] = useState<CareChoice>("all");
  const [spanish, setSpanish] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const matches = useMemo(
    () => filterFacilities({ suburb, care, spanish }),
    [suburb, care, spanish],
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const payload = {
      intent: "shortlist",
      suburb,
      care,
      spanish,
      name,
      phone,
    };
    console.log("[Senior List quiz stub — no email send]", payload);
    await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setSubmitted(true);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,22rem)_1fr]">
      <form
        onSubmit={onSubmit}
        className="h-fit rounded-2xl border border-line bg-card p-4"
      >
        <p className="text-xs uppercase tracking-[0.16em] text-gold">
          {step} / 4
        </p>

        {step === 1 && (
          <fieldset className="mt-3 space-y-2">
            <legend className="font-serif text-xl">{t.form.suburb}</legend>
            <label className="block">
              <input
                type="radio"
                name="suburb"
                checked={suburb === "all"}
                onChange={() => setSuburb("all")}
                className="mr-2 accent-pine"
              />
              {t.form.careUnsure}
            </label>
            {HUB_SUBURBS.map((s) => (
              <label key={s.slug} className="block">
                <input
                  type="radio"
                  name="suburb"
                  checked={suburb === s.slug}
                  onChange={() => setSuburb(s.slug as HubSuburb)}
                  className="mr-2 accent-pine"
                />
                {s.label}
              </label>
            ))}
            <label className="block">
              <input
                type="radio"
                name="suburb"
                checked={suburb === "other"}
                onChange={() => setSuburb("other")}
                className="mr-2 accent-pine"
              />
              Other
            </label>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset className="mt-3 space-y-2">
            <legend className="font-serif text-xl">{t.form.care}</legend>
            <label className="block">
              <input
                type="radio"
                checked={care === "all"}
                onChange={() => setCare("all")}
                className="mr-2 accent-pine"
              />
              {t.form.careUnsure}
            </label>
            <label className="block">
              <input
                type="radio"
                checked={care === "assisted_living"}
                onChange={() => setCare("assisted_living")}
                className="mr-2 accent-pine"
              />
              {t.form.careAl}
            </label>
            <label className="block">
              <input
                type="radio"
                checked={care === "memory_care"}
                onChange={() => setCare("memory_care")}
                className="mr-2 accent-pine"
              />
              {t.form.careMemory}
            </label>
          </fieldset>
        )}

        {step === 3 && (
          <fieldset className="mt-3 space-y-2">
            <legend className="font-serif text-xl">{t.form.spanish}</legend>
            <label className="block">
              <input
                type="radio"
                checked={!spanish}
                onChange={() => setSpanish(false)}
                className="mr-2 accent-pine"
              />
              {t.form.spanishNo}
            </label>
            <label className="block">
              <input
                type="radio"
                checked={spanish}
                onChange={() => setSpanish(true)}
                className="mr-2 accent-pine"
              />
              {t.form.spanishYes}
            </label>
          </fieldset>
        )}

        {step === 4 && (
          <div className="mt-3 space-y-3">
            <label className="block text-sm">
              <span className="mb-1 block text-muted">{t.form.name}</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-line bg-paper px-3 py-2"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block text-muted">{t.form.phone}</span>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl border border-line bg-paper px-3 py-2"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-xl bg-pine px-4 py-2 text-sm font-medium text-white hover:bg-pine-dark"
            >
              {t.form.submit}
            </button>
          </div>
        )}

        <div className="mt-4 flex gap-2">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep((s) => (s - 1) as Step)}
              className="rounded-xl border border-line px-3 py-1.5 text-sm"
            >
              {lang === "es" ? "Atrás" : "Back"}
            </button>
          )}
          {step < 4 && (
            <button
              type="button"
              onClick={() => setStep((s) => (s + 1) as Step)}
              className="rounded-xl bg-pine px-3 py-1.5 text-sm text-white"
            >
              {lang === "es" ? "Seguir" : "Continue"}
            </button>
          )}
        </div>
        {submitted ? (
          <p className="mt-3 text-sm text-pine-dark" role="status">
            {t.form.success}
          </p>
        ) : null}
      </form>

      <div>
        <p className="text-sm text-muted">{t.honest}</p>
        <div className="mt-4">
          <FacilityGrid
            lang={lang}
            facilities={submitted || step === 4 ? matches : matches.slice(0, 6)}
          />
        </div>
      </div>
    </div>
  );
}
