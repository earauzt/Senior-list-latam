import Link from "next/link";
import type { Lang } from "@/lib/types";

export function Footer({ lang = "en" }: { lang?: Lang }) {
  return (
    <footer className="mt-auto border-t border-line bg-card">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-3">
        <div>
          <p className="font-serif text-lg text-pine-dark">Senior List</p>
          <p className="mt-2 text-sm text-muted">
            {lang === "es"
              ? "Directorio piloto de vida asistida y cuidado de memoria en San Antonio. Working name. Borrador ≠ publicación."
              : "San Antonio assisted living and memory care directory (working name). Draft ≠ publish."}
          </p>
        </div>
        <div className="text-sm">
          <p className="font-medium">Families</p>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/san-antonio" className="hover:text-pine">
                San Antonio hub
              </Link>
            </li>
            <li>
              <Link href="/es/san-antonio" className="hover:text-pine">
                Hub en español
              </Link>
            </li>
            <li>
              <Link href="/quiz" className="hover:text-pine">
                Shortlist quiz
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-medium">Operators / legal</p>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/list-your-community" className="hover:text-pine">
                List your community
              </Link>
            </li>
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
            <li>
              <Link href="/admin" className="hover:text-pine">
                Admin stub
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t border-line px-4 py-4 text-center text-xs text-muted">
        No ads wired. No owner outreach. No auto-emails. No nursing-home
        directory. No “best assisted living San Antonio” claims.
      </p>
    </footer>
  );
}
