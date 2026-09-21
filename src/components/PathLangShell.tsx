"use client";

import { usePathname } from "next/navigation";
import { SiteShell } from "./SiteShell";

export function PathLangShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "/";
  const lang = pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
  return <SiteShell lang={lang}>{children}</SiteShell>;
}
