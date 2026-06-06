export interface ComparisonRow {
  feature: string;
  dokumentenlotse: string;
  typical: string;
  highlight?: boolean;
}

export const comparisonRows: ComparisonRow[] = [
  {
    feature: "Einfache Sprache",
    dokumentenlotse: "Geplant als Kernfunktion – kein Behördendeutsch",
    typical: "Oft wörtliche Zusammenfassung oder Fachbegriffe bleiben",
    highlight: true,
  },
  {
    feature: "Fristen erkennen",
    dokumentenlotse: "Fristen werden hervorgehoben und erklärt",
    typical: "Selten automatisch erkannt",
    highlight: true,
  },
  {
    feature: "Aufgabenlisten",
    dokumentenlotse: "Geplant: Was du als Nächstes tun musst",
    typical: "Meist nicht enthalten",
    highlight: true,
  },
  {
    feature: "Reha-/Renten-Spezialisierung",
    dokumentenlotse: "Fokus auf Sozialversicherung & Behördenpost",
    typical: "Allgemeine Dokumenten-KI ohne Spezialisierung",
    highlight: true,
  },
  {
    feature: "Familienmodus",
    dokumentenlotse: "Geplant für Angehörige, die mithelfen",
    typical: "Einzelnutzer-Fokus",
    highlight: true,
  },
  {
    feature: "Rechtsberatung",
    dokumentenlotse: "Nein – nur Verständnishilfe (transparent)",
    typical: "Unklar oder irreführend",
  },
  {
    feature: "Datenschutz",
    dokumentenlotse: "EU-Hosting, minimale Speicherung geplant",
    typical: "Oft unklar oder US-Server",
  },
  {
    feature: "Barrierefreiheit",
    dokumentenlotse: "Mobile First, große Schrift, hoher Kontrast",
    typical: "Standard-Webdesign",
  },
];
