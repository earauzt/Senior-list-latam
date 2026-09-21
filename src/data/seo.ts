import type { SeoFields } from "@/lib/types";

/** Exact titles / metas / H1 from SEO-TITLES-METAS-SA-D1.md where provided. */
export const seo = {
  home: {
    title: "Assisted Living San Antonio | English & Spanish Directory",
    description:
      "A bilingual San Antonio directory for assisted living and memory care. Filter by suburb and Spanish-speaking staff. Free family shortlist.",
    h1: "Find assisted living in San Antonio — in English or Spanish",
  },
  city: {
    title: "Assisted Living in San Antonio, TX | Compare",
    description:
      "Compare assisted living communities in San Antonio. Filter by suburb, memory care, and Spanish-speaking staff. Free family shortlist.",
    h1: "Assisted living communities in San Antonio",
  },
  cityEs: {
    title: "Vida asistida en San Antonio, TX | Compara",
    description:
      "Compara comunidades de vida asistida en San Antonio. Filtra por suburbio, cuidado de memoria y personal que habla español. Lista corta gratis.",
    h1: "Comunidades de vida asistida en San Antonio",
  },
  memoryCare: {
    title: "Memory Care in San Antonio, TX | Compare",
    description:
      "Compare memory care communities in San Antonio. Suburb filters, Spanish-speaking staff options, and a free shortlist for families.",
    h1: "Memory care communities in San Antonio",
  },
  memoryCareEs: {
    title: "Cuidado de memoria en San Antonio, TX",
    description:
      "Compara comunidades de cuidado de memoria en San Antonio. Filtros por suburbio, apoyo en español y lista corta gratis para la familia.",
    h1: "Cuidado de memoria en San Antonio",
  },
  stoneOak: {
    title: "Assisted Living in Stone Oak, San Antonio",
    description:
      "Compare Stone Oak assisted living and memory care. Filter by Spanish-speaking staff. Free shortlist for San Antonio families.",
    h1: "Assisted living in Stone Oak",
  },
  westoverHills: {
    title: "Assisted Living in Westover Hills, San Antonio",
    description:
      "Find assisted living near Westover Hills, San Antonio. Compare local communities, memory care options, and Spanish-speaking staff.",
    h1: "Assisted living near Westover Hills",
  },
  alamoRanch: {
    title: "Assisted Living in Alamo Ranch, San Antonio",
    description:
      "Explore assisted living in Alamo Ranch, San Antonio. Local listings, memory care options, and bilingual family support.",
    h1: "Assisted living in Alamo Ranch",
  },
  medicalCenter: {
    title: "Assisted Living Near Medical Center, SA",
    description:
      "Assisted living near San Antonio Medical Center. Compare communities close to hospitals; filter Spanish-speaking staff. Free shortlist.",
    h1: "Assisted living near the Medical Center",
  },
  spanishSpeaking: {
    title: "Spanish-Speaking Assisted Living | San Antonio",
    description:
      "Find bilingual assisted living in San Antonio with Spanish-speaking staff. Suburb filters and a free shortlist for multi-gen families.",
    h1: "Spanish-speaking assisted living in San Antonio",
  },
  cost: {
    title: "Assisted Living Cost in San Antonio, TX",
    description:
      "Honest ranges for assisted living costs in San Antonio. What drives price, memory care premiums, and how to get a free shortlist.",
    h1: "Cost of assisted living in San Antonio",
  },
  listYourCommunity: {
    title: "List Your Community | San Antonio Operators",
    description:
      "Feature your San Antonio assisted living or memory care community. Founding rates $250–400/mo. Reach bilingual families seeking care.",
    h1: "List your San Antonio senior living community",
  },
  quiz: {
    title: "Find Assisted Living in San Antonio | Quiz",
    description:
      "Answer a few questions on suburb, care type, and Spanish-speaking staff. Get a free San Antonio assisted living shortlist.",
    h1: "Get your San Antonio assisted living shortlist",
  },
  privacy: {
    title: "Privacy | Senior List",
    description:
      "How Senior List handles family and operator information on this San Antonio draft directory. No auto-emails. Draft ≠ publish.",
    h1: "Privacy",
  },
  terms: {
    title: "Terms | Senior List",
    description:
      "Terms of use for the Senior List San Antonio draft directory. Founding listings. TULIP license verify still pending.",
    h1: "Terms of use",
  },
} satisfies Record<string, SeoFields>;
