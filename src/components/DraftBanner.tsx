import Link from "next/link";

export function DraftBanner({ lang = "en" }: { lang?: "en" | "es" }) {
  if (lang === "es") {
    return (
      <div className="border-b border-amber-800/20 bg-draft-bg px-4 py-2 text-center text-sm text-draft">
        <strong>Borrador ≠ publicación.</strong> Listados fundadores. Verificación
        de licencia TULIP todavía pendiente.{" "}
        <span className="whitespace-nowrap">HOLD — no es producción.</span>
      </div>
    );
  }

  return (
    <div className="border-b border-amber-800/20 bg-draft-bg px-4 py-2 text-center text-sm text-draft">
      <strong>Draft ≠ publish.</strong> Founding listings. TULIP license verify
      still pending.{" "}
      <span className="whitespace-nowrap">HOLD — not production.</span>{" "}
      <Link href="/methodology" className="underline">
        How we list
      </Link>
    </div>
  );
}
