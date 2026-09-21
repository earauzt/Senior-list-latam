import type { HubSuburb, Lang } from "./types";

export const SITE_NAME = "Senior List";
export const SITE_WORKING_NAME_NOTE = "working name";
export const CITY_NAME = "San Antonio";
export const MSA = "san-antonio";

/** Draft ≠ public publish. HOLD until OK Emilio. */
export const IS_DRAFT = true;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const HUB_SUBURBS: {
  slug: HubSuburb;
  label: string;
  labelEs: string;
  href: string;
}[] = [
  {
    slug: "stone-oak",
    label: "Stone Oak",
    labelEs: "Stone Oak",
    href: "/san-antonio/stone-oak",
  },
  {
    slug: "westover-hills",
    label: "Westover Hills",
    labelEs: "Westover Hills",
    href: "/san-antonio/westover-hills",
  },
  {
    slug: "alamo-ranch",
    label: "Alamo Ranch",
    labelEs: "Alamo Ranch",
    href: "/san-antonio/alamo-ranch",
  },
  {
    slug: "medical-center",
    label: "Medical Center",
    labelEs: "Medical Center",
    href: "/san-antonio/medical-center",
  },
];

export const CARE_LABEL: Record<
  "assisted_living" | "memory_care",
  { en: string; es: string }
> = {
  assisted_living: { en: "Assisted living", es: "Vida asistida" },
  memory_care: { en: "Memory care", es: "Cuidado de memoria" },
};

export const SUBURB_LABEL: Record<
  HubSuburb | "other",
  { en: string; es: string }
> = {
  "stone-oak": { en: "Stone Oak", es: "Stone Oak" },
  "westover-hills": { en: "Westover Hills", es: "Westover Hills" },
  "alamo-ranch": { en: "Alamo Ranch", es: "Alamo Ranch" },
  "medical-center": { en: "Medical Center", es: "Medical Center" },
  other: { en: "Other SA neighborhoods", es: "Otros barrios de SA" },
};

export const NAV = {
  en: [
    { href: "/san-antonio", label: "San Antonio" },
    { href: "/san-antonio/memory-care", label: "Memory care" },
    { href: "/san-antonio/spanish-speaking", label: "Spanish-speaking" },
    { href: "/san-antonio/assisted-living-cost", label: "Cost" },
  ],
  es: [
    { href: "/es/san-antonio", label: "San Antonio" },
    { href: "/es/san-antonio/cuidado-de-memoria", label: "Cuidado de memoria" },
    { href: "/san-antonio/spanish-speaking", label: "Habla español" },
  ],
} as const;

export function suburbHref(slug: HubSuburb | "other") {
  if (slug === "other") return "/san-antonio?suburb=other";
  return `/san-antonio/${slug}`;
}

export function twinPath(pathname: string, lang: Lang) {
  if (lang === "es") {
    if (pathname === "/san-antonio") return "/es/san-antonio";
    if (pathname === "/") return "/es/san-antonio";
    return "/es/san-antonio";
  }
  if (pathname.startsWith("/es/")) return "/san-antonio";
  return pathname;
}
