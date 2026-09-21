import { getAllFacilities, getFeaturedFacilities } from "@/lib/facilities";

export const metadata = {
  title: "Admin stub | Senior List",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  const all = getAllFacilities();
  const featured = getFeaturedFacilities();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-serif text-3xl">Admin stub</h1>
      <p className="mt-3 text-muted">
        No auth and no database on Day-1. Seed lives in{" "}
        <code>src/data/facilities.json</code>. Supabase import / review
        moderation can replace this later.
      </p>
      <ul className="mt-6 list-disc space-y-1 pl-5 text-sm">
        <li>{all.length} founding listings in seed</li>
        <li>
          {featured.length} featured (cap 3):{" "}
          {featured.map((f) => f.displayName).join(" · ")}
        </li>
        <li>CSV import: not wired</li>
        <li>Auth: not wired</li>
      </ul>
    </div>
  );
}
