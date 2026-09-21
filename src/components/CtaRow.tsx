import Link from "next/link";
import { pack } from "@/data/copy-pack";
import type { Lang } from "@/lib/types";

export function CtaRow({
  lang = "en",
  includeB2b = true,
  includeSoft = true,
}: {
  lang?: Lang;
  includeB2b?: boolean;
  includeSoft?: boolean;
}) {
  const { cta } = pack(lang);
  const quiz = "/quiz";
  const compare = lang === "es" ? "/es/san-antonio" : "/san-antonio";

  return (
    <div className="flex flex-wrap gap-2">
      <a
        href="#shortlist"
        className="rounded-full bg-pine px-4 py-2 text-sm font-medium text-white hover:bg-pine-dark"
      >
        {cta.primary}
      </a>
      <Link
        href={quiz}
        className="rounded-full border border-line bg-card px-4 py-2 text-sm font-medium hover:border-pine"
      >
        {cta.secondary}
      </Link>
      {includeSoft ? (
        <Link
          href={compare}
          className="rounded-full border border-line px-4 py-2 text-sm hover:border-pine"
        >
          {cta.soft}
        </Link>
      ) : null}
      {includeB2b ? (
        <Link
          href="/list-your-community"
          className="rounded-full border border-line px-4 py-2 text-sm hover:border-pine"
        >
          {cta.b2b}
        </Link>
      ) : null}
    </div>
  );
}
