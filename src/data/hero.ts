export const heroTrustItems = [
  "Keine Rechtsberatung",
  "Verständliche Erklärungen",
  "Fokus: Krankenkasse, Reha, Rente & Arbeitsagentur",
  "Datenschutzfreundlicher Ansatz",
];

export const familiarSituations = [
  "Du erhältst einen Brief der Krankenkasse und verstehst kaum die Hälfte.",
  "Du hast Angst, eine wichtige Frist zu verpassen.",
  "Die Rentenversicherung fordert Unterlagen an und du weißt nicht warum.",
  "Du fragst Familienmitglieder um Hilfe, weil die Schreiben zu kompliziert sind.",
  "Du öffnest den Brief und weißt nicht: Muss ich reagieren – oder kann ich warten?",
  "Behördendeutsch macht dich unsicher, ob dir Geld oder Leistungen entgehen.",
];

/** Gewählte Hero-Variante: B (emotional + zielgruppenspezifisch) */
export const defaultHeroCopy = {
  headline: "Nie wieder rätseln, was die Krankenkasse von dir will.",
  subheadline:
    "DokumentenLotse erklärt Bescheide von Krankenkasse, Rentenversicherung, Reha und Arbeitsagentur in unter 30 Sekunden – verständlich, mit Fristen und nächsten Schritten.",
  cta: "Kostenlos vormerken",
};

/** Alternative Varianten (für spätere A/B-Tests) */
export const heroVariants = {
  a: {
    headline: "Verstehe Behördenpost in 30 Sekunden.",
    subheadline:
      "Komplizierte Bescheide von Krankenkasse, Rente, Reha und Arbeitsagentur – in einfachem Deutsch erklärt.",
  },
  b: defaultHeroCopy,
  c: {
    headline: "Behördendeutsch verständlich erklärt.",
    subheadline:
      "DokumentenLotse übersetzt Schreiben von Krankenkasse, Rentenversicherung, Reha und Arbeitsagentur – klar und ohne Fachchinesisch.",
  },
  d: {
    headline: "Versteh endlich, was in deinem Bescheid wirklich steht.",
    subheadline:
      "Fristen, Aufgaben und Kernaussagen auf einen Blick – speziell für Sozialversicherungs-Briefe.",
  },
};

export const mockupContent = {
  original: {
    label: "Original-Bescheid",
    lines: [
      "Ihr Antrag auf Leistungen nach § 44 SGB V …",
      "Bitte reichen Sie die folgenden Unterlagen ein …",
      "Frist: 14 Tage ab Zugang dieses Schreibens",
    ],
  },
  explanation: {
    label: "Einfache Erklärung",
    summary: "Die Krankenkasse möchte drei Unterlagen von dir.",
    deadline: "Diese musst du innerhalb von 14 Tagen einreichen.",
    tasks: ["Einkommensnachweis", "Mietvertrag", "Kontoauszug"],
  },
};
