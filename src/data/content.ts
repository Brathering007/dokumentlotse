import type { ProblemItem, RoadmapVersion, SolutionStep, TrustPoint } from "@/types";

export const problemItems: ProblemItem[] = [
  {
    title: "Krankenkassen-Briefe",
    description:
      "Krankengeld, Atteste, Nachforderungen – du verstehst nicht, was fehlt und ob Geld gefährdet ist.",
  },
  {
    title: "Rentenversicherung & Erwerbsminderung",
    description:
      "Bescheide voller Fachbegriffe. Ein Missverständnis kann teuer werden.",
  },
  {
    title: "Reha-Verfahren",
    description:
      "Anträge, Bescheide, Unterlagen – viele Schritte, wenig klare Erklärung.",
  },
  {
    title: "Arbeitsagentur-Schreiben",
    description:
      "Mitwirkungspflichten, Termine, Nachweise – Angst, Leistungen zu verlieren.",
  },
  {
    title: "Fristen übersehen",
    description:
      "Das Datum steht irgendwo im Fließtext. Wer zu spät reagiert, hat Nachteile.",
  },
];

export const solutionSteps: SolutionStep[] = [
  {
    step: 1,
    title: "Dokument hochladen",
    description: "Foto oder PDF deines Briefes – einfach und schnell. (In der Vorschau: noch nicht aktiv)",
  },
  {
    step: 2,
    title: "Spezialisierte Erklärung",
    description:
      "Kein allgemeines KI-Tool – sondern Erklärungen für typische Bescheide von Krankenkasse, Rente, Reha und Arbeitsagentur.",
  },
  {
    step: 3,
    title: "Fristen und wichtige Punkte verstehen",
    description: "Termine, Aufgaben und Kernaussagen werden klar hervorgehoben.",
  },
  {
    step: 4,
    title: "Besser vorbereitet handeln",
    description: "Du weißt, worum es geht – und kannst gezielt nachfragen oder Unterlagen einreichen.",
  },
];

export const roadmapVersions: RoadmapVersion[] = [
  {
    version: "Version 1",
    title: "Grundfunktionen",
    features: [
      "Dokument hochladen",
      "Einfache Zusammenfassung",
      "Erklärung in einfacher Sprache",
    ],
  },
  {
    version: "Version 2",
    title: "Fristen & Termine",
    features: [
      "Fristen erkennen",
      "Wichtige Daten hervorheben",
      "Kalender-Erinnerung vorbereiten",
    ],
  },
  {
    version: "Version 3",
    title: "Aufgaben & Unterlagen",
    features: [
      "Aufgabenliste erstellen",
      "Benötigte Unterlagen erkennen",
    ],
  },
  {
    version: "Version 4",
    title: "Spezialfokus",
    features: [
      "Reha, Krankengeld, Erwerbsminderung",
      "Arbeitsagentur und Rentenversicherung",
    ],
  },
  {
    version: "Version 5",
    title: "Familienmodus",
    features: [
      "Angehörige können unterstützen",
      "Gemeinsam Briefe verstehen und vorbereiten",
    ],
  },
];

export const trustPoints: TrustPoint[] = [
  {
    title: "Keine Rechtsberatung",
    description:
      "DokumentenLotse erklärt Inhalte – ersetzt aber keine Anwältin, keinen Anwalt und keine behördliche Beratung.",
  },
  {
    title: "Keine verbindlichen Entscheidungen",
    description:
      "Alle Erklärungen dienen dem Verständnis. Entscheidungen triffst du weiterhin selbst oder mit professioneller Hilfe.",
  },
  {
    title: "Nur Verständnishilfe",
    description:
      "Unser Ziel: Dir helfen, Briefe zu verstehen – nicht, Rechts- oder Steuerberatung anzubieten.",
  },
  {
    title: "Datenschutz wird ernst genommen",
    description:
      "Sensible Dokumente verdienen besonderen Schutz. In der späteren App planen wir sichere Verarbeitung nach deutschen Standards.",
  },
  {
    title: "Sichere Verarbeitung geplant",
    description:
      "Wir arbeiten an einer Lösung, die deine Daten so wenig wie nötig speichert und transparent verarbeitet.",
  },
];
