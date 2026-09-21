import { submitLead } from "@/lib/actions";
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
  const es = lang === "es";

  return (
    <form
      action={submitLead}
      className="grid gap-3 rounded-2xl border border-line bg-card p-4"
    >
      <input type="hidden" name="intent" value={intent} />
      <input type="hidden" name="facilitySlug" value={facilitySlug ?? ""} />
      <input type="hidden" name="path" value={path ?? ""} />
      <input type="hidden" name="suburb" value={suburb ?? ""} />
      <input type="hidden" name="care" value={care ?? ""} />
      <p className="text-sm text-muted">
        {es
          ? "Borrador: el envío queda en el log del servidor. No mandamos email a familias ni a operadores."
          : "Draft stub: submit writes to the server log only. No email is sent to families or operators."}
      </p>
      <label className="text-sm">
        <span className="mb-1 block text-muted">
          {es ? "Nombre" : "Your name"}
        </span>
        <input
          required
          name="name"
          className="w-full rounded-xl border border-line bg-paper px-3 py-2"
        />
      </label>
      <label className="text-sm">
        <span className="mb-1 block text-muted">
          {es ? "Teléfono o WhatsApp" : "Phone or WhatsApp"}
        </span>
        <input
          name="phone"
          className="w-full rounded-xl border border-line bg-paper px-3 py-2"
        />
      </label>
      <label className="text-sm">
        <span className="mb-1 block text-muted">Email</span>
        <input
          type="email"
          name="email"
          className="w-full rounded-xl border border-line bg-paper px-3 py-2"
        />
      </label>
      <label className="text-sm">
        <span className="mb-1 block text-muted">
          {es ? "Notas (opcional)" : "Notes (optional)"}
        </span>
        <textarea
          name="notes"
          rows={3}
          className="w-full rounded-xl border border-line bg-paper px-3 py-2"
        />
      </label>
      <button
        type="submit"
        className="rounded-xl bg-pine px-4 py-2 text-sm font-medium text-white hover:bg-pine-dark"
      >
        {intent === "operator"
          ? es
            ? "Pedir listado (sin Stripe)"
            : "Request a listing (no Stripe)"
          : es
            ? "Pedir lista corta"
            : "Request a free shortlist"}
      </button>
    </form>
  );
}
