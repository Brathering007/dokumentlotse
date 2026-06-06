export interface UserScenario {
  id: string;
  emoji: string;
  title: string;
  description: string;
  category: string;
}

export const userScenarios: UserScenario[] = [
  {
    id: "kk-1",
    emoji: "🏥",
    title: "Krankenkasse fordert Unterlagen",
    description:
      "Du erhältst einen Brief der Krankenkasse und verstehst nicht, welche Atteste oder Formulare fehlen – das Krankengeld verzögert sich.",
    category: "Krankenkasse",
  },
  {
    id: "kk-2",
    emoji: "💶",
    title: "Krankengeld wird gekürzt",
    description:
      "Im Bescheid steht etwas von „Leistungsgewährung“ und Fristen – du bist unsicher, ob du Geld verlierst.",
    category: "Krankenkasse",
  },
  {
    id: "rente-1",
    emoji: "📋",
    title: "Rentenbescheid mit Fachbegriffen",
    description:
      "Regelanpassung, Zuschläge, Versicherungsverlauf – du liest dreimal und bist immer noch unsicher.",
    category: "Rentenversicherung",
  },
  {
    id: "reha-1",
    emoji: "🔄",
    title: "Reha-Antrag oder Reha-Bescheid",
    description:
      "Die Rentenversicherung schreibt zur medizinischen Rehabilitation – du weißt nicht, was du einreichen musst.",
    category: "Reha",
  },
  {
    id: "aa-1",
    emoji: "💼",
    title: "Arbeitsagentur verlangt Nachweise",
    description:
      "Mitwirkungspflicht, Bewerbungsnachweise, Termine – du hast Angst, dein Arbeitslosengeld zu gefährden.",
    category: "Arbeitsagentur",
  },
  {
    id: "em-1",
    emoji: "⚠️",
    title: "Erwerbsminderung – Bescheid erhalten",
    description:
      "Ein Schreiben zur Erwerbsminderungsrente wirkt bedrohlich. Du verstehst nicht, welche Rechte und Fristen du hast.",
    category: "Erwerbsminderung",
  },
  {
    id: "frist-1",
    emoji: "⏰",
    title: "Frist fast abgelaufen",
    description:
      "Unten im Brief steht ein Datum – du hast erst spät gemerkt, dass du innerhalb von zwei Wochen reagieren musst.",
    category: "Alle",
  },
  {
    id: "angehoerige-1",
    emoji: "👨‍👩‍👧",
    title: "Angehörige sollen helfen",
    description:
      "Deine Eltern rufen an: „Kannst du den Brief erklären?“ – wieder ein Abend mit Behördendeutsch.",
    category: "Alle",
  },
  {
    id: "stress-1",
    emoji: "😰",
    title: "Brief öffnen und sofort Stress",
    description:
      "Schon der Umschlag macht dir Bauchschmerzen. Du schiebst das Lesen auf – und verpasst vielleicht Wichtiges.",
    category: "Alle",
  },
  {
    id: "paragraph-1",
    emoji: "§",
    title: "Paragraphen ohne Erklärung",
    description:
      "§ 60 SGB I, § 275 SGB V – du googelst einzelne Begriffe, findest aber keine klare Antwort für deinen Fall.",
    category: "Alle",
  },
  {
    id: "widerspruch-1",
    emoji: "✉️",
    title: "Widerspruch oder Stellungnahme?",
    description:
      "Der Brief klingt nach einer Entscheidung. Du weißt nicht: nachfragen, Widerspruch einlegen – oder abwarten?",
    category: "Alle",
  },
  {
    id: "digital-1",
    emoji: "📱",
    title: "Brief per Post, kein Mensch zum Fragen",
    description:
      "Hotlines haben Wartezeiten, Termine beim Berater dauern Wochen – du brauchst schnell Klarheit.",
    category: "Alle",
  },
];
