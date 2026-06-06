import type { AudienceConfig } from "@/types";

export const audiences: Record<string, AudienceConfig> = {
  reha: {
    slug: "reha",
    label: "Reha",
    headline: "Reha-Bescheid erhalten – und unsicher, was jetzt zu tun ist?",
    subheadline:
      "DokumentenLotse erklärt Schreiben der Rentenversicherung und Reha-Träger in einfacher Sprache – mit Fristen und nächsten Schritten.",
    badge: "Speziell für Reha-Verfahren",
    problemHighlight:
      "Reha-Anträge und Bescheide sind oft lang und unverständlich. Viele verpassen Fristen für Unterlagen.",
    documentInterest: "Reha",
    ctaText: "Frühzugang für Reha-Briefe sichern",
  },
  krankengeld: {
    slug: "krankengeld",
    label: "Krankengeld",
    headline: "Krankenkassen-Brief zum Krankengeld – endlich verstehen.",
    subheadline:
      "DokumentenLotse übersetzt komplizierte Schreiben deiner Krankenkasse und zeigt dir, welche Fristen und Unterlagen wichtig sind.",
    badge: "Speziell für Krankengeld & Krankenkasse",
    problemHighlight:
      "Krankengeld-Bescheide und Nachforderungen der Krankenkasse überfordern viele – besonders unter Krankheit.",
    documentInterest: "Krankenkasse",
    ctaText: "Frühzugang für Krankenkassen-Post sichern",
  },
  erwerbsminderung: {
    slug: "erwerbsminderung",
    label: "Erwerbsminderung",
    headline: "Erwerbsminderungsrente – der Bescheid macht dir Sorgen?",
    subheadline:
      "DokumentenLotse erklärt Schreiben der Rentenversicherung zu Erwerbsminderung und Erwerbsunfähigkeit in verständlicher Sprache.",
    badge: "Speziell für Erwerbsminderung",
    problemHighlight:
      "Bescheide zur Erwerbsminderung enthalten viel Fachsprache – und oft enge Fristen für Stellungnahmen.",
    documentInterest: "Rentenversicherung",
    ctaText: "Frühzugang sichern",
  },
  rentenversicherung: {
    slug: "rentenversicherung",
    label: "Rentenversicherung",
    headline: "Rentenversicherung schreibt – und du weißt nicht, was gemeint ist?",
    subheadline:
      "DokumentenLotse macht aus komplizierten Renten-Bescheiden eine klare Zusammenfassung in einfachem Deutsch.",
    badge: "Speziell für Rentenversicherung",
    problemHighlight:
      "Rentenbescheide und Anhörungen sind schwer zu lesen. Ein Missverständnis kann teuer werden.",
    documentInterest: "Rentenversicherung",
    ctaText: "Frühzugang für Renten-Briefe sichern",
  },
  arbeitsagentur: {
    slug: "arbeitsagentur",
    label: "Arbeitsagentur",
    headline: "Brief von der Arbeitsagentur – was bedeutet das für dein Geld?",
    subheadline:
      "DokumentenLotse erklärt Mitwirkungspflichten, Fristen und Bescheide der Arbeitsagentur verständlich und ohne Behördendeutsch.",
    badge: "Speziell für Arbeitsagentur-Schreiben",
    problemHighlight:
      "Viele fürchten, Leistungen zu verlieren, weil sie Fristen oder Formulierungen nicht verstehen.",
    documentInterest: "Arbeitsagentur",
    ctaText: "Frühzugang für Arbeitsagentur-Post sichern",
  },
};

export const audienceSlugs = Object.keys(audiences);
