import type { Lang } from "@/lib/types";
import { DraftBanner } from "./DraftBanner";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function SiteShell({
  children,
  lang = "en",
}: {
  children: React.ReactNode;
  lang?: Lang;
}) {
  return (
    <div className="flex min-h-full flex-col" lang={lang}>
      <DraftBanner lang={lang} />
      <Header lang={lang} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} />
    </div>
  );
}
