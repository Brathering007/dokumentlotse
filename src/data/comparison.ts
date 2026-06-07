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
    typical: "Allrounder (z. B. ChatGPT)",
    highlight: true,
  },
  {
    feature: "Einfache Sprache",
    dokumentenlotse: "Geplant als Kernfunktion – in einfache Sprache",
    typical: "Möglich, hängt von Formulierung und Kontext ab",
    highlight: true,
  },
  {
    feature: "Fristen hervorheben",
    dokumentenlotse: "Geplant: Fristen strukturiert anzeigen und erklären",
    typical: "Im Dialog möglich, aber ohne festes Format",
    highlight: true,
  },
  {
    feature: "Aufgabenlisten",
    dokumentenlotse: "Geplant: Nächste Schritte strukturiert aufbereiten",
    typical: "Im Dialog möglich, Ergebnis variiert",
    highlight: true,
  },
  {
    feature: "Zettel / Angehörige fragen",
    dokumentenlotse: "Geplant: jederzeit abrufbar, ohne andere zu belasten",
    typical: "Zeitaufwendig, nicht immer verfügbar",
  },
  {
    feature: "Familienmodus",
    dokumentenlotse: "Geplant für Angehörige",
    typical: "Kein dedizierter Modus",
    highlight: true,
  },
  {
    feature: "Rechtsberatung",
    dokumentenlotse: "Nein – transparent als Verständnishilfe",
    typical: "Keine Rechtsberatung – Hinweise variieren je nach Anbieter",
  },
  {
    feature: "Datenschutz",
    dokumentenlotse: "EU-Hosting und minimale Speicherung geplant",
    typical: "Anbieterabhängig (z. B. ChatGPT: US-Anbieter, eigene Richtlinien)",
  },
];

export const comparisonIntro =
  "Allgemeine KI wie ChatGPT kann Dokumente erklären. DokumentenLotse wird gezielt für deutsche Sozialversicherungs-Briefe konzipiert: typische Fristen, Abläufe und Dokumenttypen – strukturiert aufbereitet, ohne jedes Mal den Kontext neu zu setzen.";
