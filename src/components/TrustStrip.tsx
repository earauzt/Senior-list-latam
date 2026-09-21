import { pack } from "@/data/copy-pack";
import type { Lang } from "@/lib/types";

export function TrustStrip({ lang = "en" }: { lang?: Lang }) {
  const t = pack(lang);
  return (
    <p className="text-sm font-medium text-pine-dark">
      {t.trust}
      <span className="mt-1 block text-xs font-normal text-muted">{t.honest}</span>
    </p>
  );
}
