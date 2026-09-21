import type { Metadata } from "next";
import { SITE_URL } from "./site";
import type { SeoFields } from "./types";

export function seoMetadata(
  fields: SeoFields,
  extras: Metadata = {},
): Metadata {
  return {
    title: fields.title,
    description: fields.description,
    robots: { index: false, follow: false },
    ...extras,
  };
}

export function hreflangCity(): Metadata {
  return {
    alternates: {
      canonical: `${SITE_URL}/san-antonio`,
      languages: {
        en: `${SITE_URL}/san-antonio`,
        es: `${SITE_URL}/es/san-antonio`,
        "x-default": `${SITE_URL}/san-antonio`,
      },
    },
  };
}

export function hreflangMemory(): Metadata {
  return {
    alternates: {
      canonical: `${SITE_URL}/san-antonio/memory-care`,
      languages: {
        en: `${SITE_URL}/san-antonio/memory-care`,
        es: `${SITE_URL}/es/san-antonio/cuidado-de-memoria`,
        "x-default": `${SITE_URL}/san-antonio/memory-care`,
      },
    },
  };
}
