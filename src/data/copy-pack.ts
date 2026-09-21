import type { Lang } from "@/lib/types";

/** Exact Monday copy pack. Hub bodies land Wednesday — do not invent extras. */
export const copyPack = {
  cta: {
    en: {
      primary: "Get a free shortlist",
      secondary: "Take the 30-second quiz",
      b2b: "Feature your community",
      soft: "Compare communities",
    },
    es: {
      primary: "Pedir lista corta gratis",
      secondary: "Haz el quiz de 30 segundos",
      b2b: "Destaca tu comunidad",
      soft: "Compara comunidades",
    },
  },
  trust: {
    en: "Free for families · No placement fee · Founding listings",
    es: "Gratis para familias · Sin comisión por colocación · Listados fundadores",
  },
  honest: {
    en: "Founding listings · TULIP verify pending",
    es: "Listados fundadores · Verificación TULIP pendiente",
  },
  form: {
    en: {
      name: "Name",
      phone: "Phone",
      suburb: "Suburb preference",
      care: "Care need (AL / Memory / Not sure)",
      spanish: "Spanish-speaking staff?",
      submit: "Send my shortlist request",
      success: "We’ll reply within 1 business day.",
      careAl: "AL",
      careMemory: "Memory",
      careUnsure: "Not sure",
      spanishYes: "Yes",
      spanishNo: "No",
    },
    es: {
      name: "Nombre",
      phone: "Teléfono",
      suburb: "Suburbio",
      care: "Tipo de cuidado",
      spanish: "¿Personal que habla español?",
      submit: "Enviar pedido de lista corta",
      success: "Te respondemos en 1 día hábil.",
      careAl: "AL",
      careMemory: "Memoria",
      careUnsure: "No estoy seguro",
      spanishYes: "Sí",
      spanishNo: "No",
    },
  },
  b2b: {
    en: "Founding feature — $250–400/mo · 30% off month 1 · suburb badge",
    es: "Destacado fundador — $250–400/mes · 30% off mes 1",
  },
} as const;

export function pack(lang: Lang) {
  return {
    cta: copyPack.cta[lang],
    trust: copyPack.trust[lang],
    honest: copyPack.honest[lang],
    form: copyPack.form[lang],
    b2b: copyPack.b2b[lang],
  };
}
