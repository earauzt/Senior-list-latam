"use client";

import { useMemo, useState } from "react";
import { HUB_SUBURBS } from "@/lib/site";
import { filterFacilities } from "@/lib/facilities";
import type { CareType, HubSuburb, SuburbSlug } from "@/lib/types";
import { FacilityGrid } from "./FacilityCard";

type Step = 1 | 2 | 3 | 4;

export function QuizForm() {
  const [step, setStep] = useState<Step>(1);
  const [suburb, setSuburb] = useState<SuburbSlug | "all">("all");
  const [care, setCare] = useState<CareType | "all">("all");
  const [spanish, setSpanish] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [logNote, setLogNote] = useState("");

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
      contact,
      matchSlugs: matches.map((f) => f.slug),
    };
    console.log("[Senior List quiz stub — no email send]", payload);
    await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setSubmitted(true);
    setLogNote(
      "Shortlist stored in local UI + browser/server console. No email was sent.",
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,22rem)_1fr]">
      <form
        onSubmit={onSubmit}
        className="h-fit rounded-2xl border border-line bg-card p-4"
      >
        <p className="text-xs uppercase tracking-[0.16em] text-gold">
          Step {step} of 4
        </p>

        {step === 1 && (
          <fieldset className="mt-3 space-y-2">
            <legend className="font-serif text-xl">
              Where in San Antonio?
            </legend>
            <label className="block">
              <input
                type="radio"
                name="suburb"
                checked={suburb === "all"}
                onChange={() => setSuburb("all")}
                className="mr-2 accent-pine"
              />
              Not sure / any suburb
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
              Other SA neighborhoods
            </label>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset className="mt-3 space-y-2">
            <legend className="font-serif text-xl">
              Assisted living or memory care?
            </legend>
            <label className="block">
              <input
                type="radio"
                checked={care === "all"}
                onChange={() => setCare("all")}
                className="mr-2 accent-pine"
              />
              Not sure yet
            </label>
            <label className="block">
              <input
                type="radio"
                checked={care === "assisted_living"}
                onChange={() => setCare("assisted_living")}
                className="mr-2 accent-pine"
              />
              Assisted living
            </label>
            <label className="block">
              <input
                type="radio"
                checked={care === "memory_care"}
                onChange={() => setCare("memory_care")}
                className="mr-2 accent-pine"
              />
              Memory care (Alzheimer’s / dementia)
            </label>
          </fieldset>
        )}

        {step === 3 && (
          <fieldset className="mt-3 space-y-2">
            <legend className="font-serif text-xl">
              Need Spanish-speaking staff?
            </legend>
            <label className="block">
              <input
                type="radio"
                checked={!spanish}
                onChange={() => setSpanish(false)}
                className="mr-2 accent-pine"
              />
              Optional
            </label>
            <label className="block">
              <input
                type="radio"
                checked={spanish}
                onChange={() => setSpanish(true)}
                className="mr-2 accent-pine"
              />
              Yes — only listings with a Spanish-speaking signal
            </label>
            <p className="pt-2 text-sm text-muted">
              We do not invent staff language. Day-1 seed only marks an
              unverified bilingual signal when the operator name or research
              note supports it.
            </p>
          </fieldset>
        )}

        {step === 4 && (
          <div className="mt-3 space-y-3">
            <p className="font-serif text-xl">How should we reach you?</p>
            <p className="text-sm text-muted">
              Optional. Draft mode logs the request — it does not email anyone.
            </p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full rounded-xl border border-line bg-paper px-3 py-2"
            />
            <input
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Email or WhatsApp"
              className="w-full rounded-xl border border-line bg-paper px-3 py-2"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-pine px-4 py-2 text-sm font-medium text-white hover:bg-pine-dark"
            >
              Show my shortlist
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
              Back
            </button>
          )}
          {step < 4 && (
            <button
              type="button"
              onClick={() => setStep((s) => (s + 1) as Step)}
              className="rounded-xl bg-pine px-3 py-1.5 text-sm text-white"
            >
              Continue
            </button>
          )}
        </div>
        {logNote ? <p className="mt-3 text-sm text-pine-dark">{logNote}</p> : null}
      </form>

      <div>
        <p className="text-sm text-muted">
          {matches.length} founding listing{matches.length === 1 ? "" : "s"} match
          your answers. No ratings invented. TULIP verify still pending.
        </p>
        <div className="mt-4">
          <FacilityGrid
            facilities={submitted || step === 4 ? matches : matches.slice(0, 6)}
            empty="No founding listings match yet. Try widening suburb or care type. We will not fabricate communities."
          />
        </div>
      </div>
    </div>
  );
}
