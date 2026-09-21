import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16 text-center">
      <h1 className="font-serif text-3xl">Page not found</h1>
      <p className="mt-3 text-muted">
        That URL is not in the San Antonio Day-1 draft sitemap.
      </p>
      <Link
        href="/san-antonio"
        className="mt-6 inline-block rounded-full bg-pine px-4 py-2 text-white"
      >
        San Antonio hub
      </Link>
    </div>
  );
}
