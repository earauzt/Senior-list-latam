import raw from "@/data/facilities.json";
import { HUB_SUBURBS, SUBURB_LABEL } from "./site";
import type {
  CareType,
  DirectoryFilters,
  Facility,
  HubSuburb,
  SuburbSlug,
} from "./types";

const facilities = raw as Facility[];

function assertFeaturedRules(list: Facility[]) {
  const featured = list.filter((f) => f.featuredRank != null);
  if (featured.length > 3) {
    throw new Error(
      `Featured cap exceeded: ${featured.length} (max 3 city-wide)`,
    );
  }
  const ranks = featured.map((f) => f.featuredRank).sort();
  if (new Set(ranks).size !== ranks.length) {
    throw new Error("Featured ranks must be unique");
  }
  const medicalCenter = featured.filter((f) => f.suburb === "medical-center");
  if (medicalCenter.length > 1) {
    throw new Error("Max 1 Medical Center featured listing on Day-1");
  }
  const nursing = list.filter((f) =>
    f.careTypes.some((c) => String(c) === "nursing"),
  );
  if (nursing.length) {
    throw new Error("Nursing homes are out of Day-1 scope");
  }
}

assertFeaturedRules(facilities);

export function getAllFacilities(): Facility[] {
  return facilities.filter((f) => f.status !== "hidden");
}

export function getFeaturedFacilities(): Facility[] {
  return getAllFacilities()
    .filter((f) => f.featuredRank != null)
    .sort((a, b) => (a.featuredRank ?? 99) - (b.featuredRank ?? 99))
    .slice(0, 3);
}

export function getFacilityBySlug(slug: string): Facility | undefined {
  return getAllFacilities().find((f) => f.slug === slug);
}

export function filterFacilities(filters: DirectoryFilters): Facility[] {
  return getAllFacilities().filter((f) => {
    if (filters.suburb && filters.suburb !== "all" && f.suburb !== filters.suburb) {
      return false;
    }
    if (filters.care && filters.care !== "all" && !f.careTypes.includes(filters.care)) {
      return false;
    }
    if (filters.spanish && !f.spanishSpeakingSignal) {
      return false;
    }
    return true;
  });
}

export function parseFilters(searchParams: {
  suburb?: string | string[];
  care?: string | string[];
  spanish?: string | string[];
}): DirectoryFilters {
  const suburbRaw = first(searchParams.suburb);
  const careRaw = first(searchParams.care);
  const spanishRaw = first(searchParams.spanish);

  const suburb = isSuburb(suburbRaw) ? suburbRaw : "all";
  const care = isCare(careRaw) ? careRaw : "all";
  const spanish = spanishRaw === "1" || spanishRaw === "true";

  return { suburb, care, spanish };
}

export function getSuburbFacilities(suburb: HubSuburb): Facility[] {
  return filterFacilities({ suburb });
}

export function careLabel(types: CareType[], lang: "en" | "es" = "en") {
  return types
    .map((t) =>
      t === "assisted_living"
        ? lang === "es"
          ? "Vida asistida"
          : "Assisted living"
        : lang === "es"
          ? "Cuidado de memoria"
          : "Memory care",
    )
    .join(" · ");
}

export function suburbLabel(slug: SuburbSlug, lang: "en" | "es" = "en") {
  return SUBURB_LABEL[slug][lang];
}

export function isHubSuburb(value: string): value is HubSuburb {
  return HUB_SUBURBS.some((s) => s.slug === value);
}

function isSuburb(value?: string): value is SuburbSlug {
  return (
    value === "stone-oak" ||
    value === "westover-hills" ||
    value === "alamo-ranch" ||
    value === "medical-center" ||
    value === "other"
  );
}

function isCare(value?: string): value is CareType {
  return value === "assisted_living" || value === "memory_care";
}

function first(value?: string | string[]) {
  return Array.isArray(value) ? value[0] : value;
}

export function facilityPath(facility: Facility) {
  return `/facilities/${facility.slug}`;
}

export function brandedPath(facility: Facility) {
  return `/r/${facility.slug}`;
}
