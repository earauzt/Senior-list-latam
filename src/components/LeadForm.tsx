"use client";

import { useState } from "react";
import { pack } from "@/data/copy-pack";
import { submitLead } from "@/lib/actions";
import { HUB_SUBURBS } from "@/lib/site";
import type { Lang } from "@/lib/types";

export function LeadForm({
  lang = "en",
  intent = "shortlist",
  facilitySlug,
  path,
  suburb,
  care,
}: {
  lang?: Lang;
  intent?: "shortlist" | "tour" | "cost_question" | "operator";
  facilitySlug?: string;
  path?: string;
  suburb?: string;
  care?: string;
}) {
  const t = pack(lang);
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p
        id="shortlist"
        className="rounded-2xl border border-line bg-card p-4 text-pine-dark"
        role="status"
      >
        {t.form.success}
      </p>
    );
  }

  async function action(formData: FormData) {
    await submitLead(formData);
    setDone(true);
  }

  return (
    <form
      id="shortlist"
      action={action}
      className="grid gap-3 rounded-2xl border border-line bg-card p-4"
    >
      <input type="hidden" name="intent" value={intent} />
      <input type="hidden" name="facilitySlug" value={facilitySlug ?? ""} />
      <input type="hidden" name="path" value={path ?? ""} />

      <label className="text-sm">
        <span className="mb-1 block text-muted">{t.form.name}</span>
        <input
          required
          name="name"
          className="w-full rounded-xl border border-line bg-paper px-3 py-2"
        />
      </label>
      <label className="text-sm">
        <span className="mb-1 block text-muted">{t.form.phone}</span>
        <input
          name="phone"
          className="w-full rounded-xl border border-line bg-paper px-3 py-2"
        />
      </label>
      <label className="text-sm">
        <span className="mb-1 block text-muted">{t.form.suburb}</span>
        <select
          name="suburb"
          defaultValue={suburb ?? ""}
          className="w-full rounded-xl border border-line bg-paper px-3 py-2"
        >
          <option value="">{lang === "es" ? "—" : "—"}</option>
          {HUB_SUBURBS.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.label}
            </option>
          ))}
          <option value="other">
            {lang === "es" ? "Otro" : "Other"}
          </option>
        </select>
      </label>
      <label className="text-sm">
        <span className="mb-1 block text-muted">{t.form.care}</span>
        <select
          name="care"
          defaultValue={
            care === "assisted_living"
              ? "al"
              : care === "memory_care"
                ? "memory"
                : care ?? ""
          }
          className="w-full rounded-xl border border-line bg-paper px-3 py-2"
        >
          <option value="unsure">{t.form.careUnsure}</option>
          <option value="al">{t.form.careAl}</option>
          <option value="memory">{t.form.careMemory}</option>
        </select>
      </label>
      <fieldset className="text-sm">
        <legend className="mb-1 text-muted">{t.form.spanish}</legend>
        <label className="mr-4">
          <input
            type="radio"
            name="spanish"
            value="yes"
            className="mr-1 accent-pine"
          />
          {t.form.spanishYes}
        </label>
        <label>
          <input
            type="radio"
            name="spanish"
            value="no"
            defaultChecked
            className="mr-1 accent-pine"
          />
          {t.form.spanishNo}
        </label>
      </fieldset>
      <button
        type="submit"
        className="rounded-xl bg-pine px-4 py-2 text-sm font-medium text-white hover:bg-pine-dark"
      >
        {intent === "operator" ? t.cta.b2b : t.form.submit}
      </button>
    </form>
  );
}
