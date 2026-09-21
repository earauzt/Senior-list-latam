import { HUB_SUBURBS } from "@/lib/site";
import type { DirectoryFilters as Filters, Lang } from "@/lib/types";

export function DirectoryFilters({
  action,
  current,
  lang = "en",
  lockSuburb,
  lockCare,
  lockSpanish,
}: {
  action: string;
  current: Filters;
  lang?: Lang;
  lockSuburb?: boolean;
  lockCare?: boolean;
  lockSpanish?: boolean;
}) {
  const es = lang === "es";

  return (
    <form
      method="get"
      action={action}
      className="grid gap-3 rounded-2xl border border-line bg-card p-4 sm:grid-cols-4 sm:items-end"
    >
      <label className="block text-sm">
        <span className="mb-1 block text-muted">
          {es ? "Suburbio" : "Suburb"}
        </span>
        <select
          name="suburb"
          defaultValue={current.suburb ?? "all"}
          disabled={lockSuburb}
          className="w-full rounded-xl border border-line bg-paper px-3 py-2"
        >
          <option value="all">{es ? "Todos" : "All suburbs"}</option>
          {HUB_SUBURBS.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.label}
            </option>
          ))}
          <option value="other">
            {es ? "Otros barrios de SA" : "Other SA neighborhoods"}
          </option>
        </select>
        {lockSuburb && current.suburb && current.suburb !== "all" && (
          <input type="hidden" name="suburb" value={current.suburb} />
        )}
      </label>

      <label className="block text-sm">
        <span className="mb-1 block text-muted">
          {es ? "Tipo de cuidado" : "Care type"}
        </span>
        <select
          name="care"
          defaultValue={current.care ?? "all"}
          disabled={lockCare}
          className="w-full rounded-xl border border-line bg-paper px-3 py-2"
        >
          <option value="all">{es ? "AL y memoria" : "AL and memory"}</option>
          <option value="assisted_living">
            {es ? "Vida asistida" : "Assisted living"}
          </option>
          <option value="memory_care">
            {es ? "Cuidado de memoria" : "Memory care"}
          </option>
        </select>
        {lockCare && current.care && current.care !== "all" && (
          <input type="hidden" name="care" value={current.care} />
        )}
      </label>

      <label className="flex items-center gap-2 text-sm sm:mb-2">
        <input
          type="checkbox"
          name="spanish"
          value="1"
          defaultChecked={Boolean(current.spanish)}
          disabled={lockSpanish}
          className="size-4 accent-pine"
        />
        <span>
          {es
            ? "¿Personal que habla español?"
            : "Spanish-speaking staff?"}
        </span>
        {lockSpanish && <input type="hidden" name="spanish" value="1" />}
      </label>

      <button
        type="submit"
        className="rounded-xl bg-pine px-4 py-2 text-sm font-medium text-white hover:bg-pine-dark"
      >
        {es ? "Aplicar filtros" : "Apply filters"}
      </button>
    </form>
  );
}
