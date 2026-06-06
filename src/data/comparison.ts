export interface ComparisonRow {
  feature: string;
  dokumentenlotse: string;
  typical: string;
  highlight?: boolean;
}

export const comparisonRows: ComparisonRow[] = [
  {
    feature: "Spezialisierung",
    dokumentenlotse: "Krankenkasse, Rente, Reha, Arbeitsagentur, Erwerbsminderung",
    typical: "Allgemeine Dokumenten-KI oder ChatGPT",
    highlight: true,
  },
  {
    feature: "Einfache Sprache",
    dokumentenlotse: "Kernfunktion – kein Behördendeutsch",
    typical: "Oft Fachbegriffe bleiben erhalten",
    highlight: true,
  },
  {
    feature: "Fristen erkennen",
    dokumentenlotse: "Fristen hervorgehoben und erklärt",
    typical: "ChatGPT erkennt Fristen nicht zuverlässig",
    highlight: true,
  },
  {
    feature: "Aufgabenlisten",
    dokumentenlotse: "Geplant: Was du als Nächstes tun musst",
    typical: "Selbst aus Text ableiten",
    highlight: true,
  },
  {
    feature: "Zettel / Angehörige fragen",
    dokumentenlotse: "Sofort verfügbar, jederzeit wiederholbar",
    typical: "Zeitaufwendig, nicht immer verfügbar",
  },
  {
    feature: "Familienmodus",
    dokumentenlotse: "Geplant für Angehörige",
    typical: "Nicht vorgesehen",
    highlight: true,
  },
  {
    feature: "Rechtsberatung",
    dokumentenlotse: "Nein – transparent als Verständnishilfe",
    typical: "Unklar oder irreführend",
  },
  {
    feature: "Datenschutz",
    dokumentenlotse: "EU-Hosting, minimale Speicherung geplant",
    typical: "US-Server, unklare Speicherfristen",
  },
];

export const comparisonIntro =
  "ChatGPT kann Texte zusammenfassen – DokumentenLotse wird gezielt für deutsche Sozialversicherungs-Briefe gebaut: mit Fristen, Aufgaben und Fokus statt Allzweck-KI.";
