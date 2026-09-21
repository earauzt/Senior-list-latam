import Link from "next/link";
import { pack } from "@/data/copy-pack";
import type { Lang } from "@/lib/types";

export function Footer({ lang = "en" }: { lang?: Lang }) {
  const { cta, trust, b2b } = pack(lang);

  return (
    <footer className="mt-auto border-t border-line bg-card">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-3">
        <div>
          <p className="font-serif text-lg text-pine-dark">Senior List</p>
          <p className="mt-2 text-sm text-muted">{trust}</p>
        </div>
        <div className="text-sm">
          <ul className="space-y-1">
            <li>
              <Link href="/quiz" className="hover:text-pine">
                {cta.primary}
              </Link>
            </li>
            <li>
              <Link href="/quiz" className="hover:text-pine">
                {cta.secondary}
              </Link>
            </li>
            <li>
              <Link
                href={lang === "es" ? "/es/san-antonio" : "/san-antonio"}
                className="hover:text-pine"
              >
                {cta.soft}
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <p>
            <Link href="/list-your-community" className="hover:text-pine">
              {cta.b2b}
            </Link>
          </p>
          <p className="mt-2 text-muted">{b2b}</p>
          <ul className="mt-3 space-y-1">
            <li>
              <Link href="/privacy" className="hover:text-pine">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-pine">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t border-line px-4 py-4 text-center text-xs text-muted">
        HOLD publish · HOLD ads · HOLD outreach
      </p>
    </footer>
  );
}
