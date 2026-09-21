import Link from "next/link";
import { NAV, SITE_NAME } from "@/lib/site";
import type { Lang } from "@/lib/types";

export function Header({ lang = "en" }: { lang?: Lang }) {
  const links = NAV[lang];
  const otherHref = lang === "en" ? "/es/san-antonio" : "/san-antonio";
  const otherLabel = lang === "en" ? "ES" : "EN";

  return (
    <header className="border-b border-line bg-card/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center justify-between gap-3">
          <Link href={lang === "es" ? "/es/san-antonio" : "/"} className="min-w-0">
            <p className="font-serif text-xl tracking-tight text-pine-dark">
              {SITE_NAME}
            </p>
            <p className="text-xs uppercase tracking-[0.16em] text-muted">
              San Antonio · bilingual directory
            </p>
          </Link>
          <Link
            href={otherHref}
            className="rounded-full border border-line px-3 py-1 text-sm font-medium text-pine sm:hidden"
            hrefLang={lang === "en" ? "es" : "en"}
          >
            {otherLabel}
          </Link>
        </div>
        <nav className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ink">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-pine"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={otherHref}
            className="hidden rounded-full border border-line px-3 py-1 text-sm font-medium text-pine sm:inline"
            hrefLang={lang === "en" ? "es" : "en"}
          >
            {otherLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}
