export type CareType = "assisted_living" | "memory_care";

export type HubSuburb =
  | "stone-oak"
  | "westover-hills"
  | "alamo-ranch"
  | "medical-center";

export type SuburbSlug = HubSuburb | "other";

export type Lang = "en" | "es";

export type FacilityStatus = "draft" | "live" | "hidden";

export interface Facility {
  id: string;
  slug: string;
  name: string;
  displayName: string;
  suburb: SuburbSlug;
  suburbRaw: string;
  address: string;
  phone: string;
  license: string;
  careTypes: CareType[];
  spanishSpeakingSignal: boolean;
  featuredRank: 1 | 2 | 3 | null;
  foundingListing: boolean;
  tulipVerifyPending: boolean;
  msa: "san-antonio";
  status: FacilityStatus;
  sourceUrls: string[];
}

export interface DirectoryFilters {
  suburb?: SuburbSlug | "all";
  care?: CareType | "all";
  spanish?: boolean;
}

export interface SeoFields {
  title: string;
  description: string;
  h1: string;
}
