export const positioningStatement =
  "Spezialisierte Verständnishilfe für Krankenkasse, Reha, Rentenversicherung, Erwerbsminderung und Arbeitsagentur – nicht für alle Dokumente der Welt.";

export const specializationAreas = [
  "Krankenkasse",
  "Reha",
  "Rentenversicherung",
  "Erwerbsminderung",
  "Arbeitsagentur",
];

export interface ChatGptDifference {
  title: string;
  description: string;
  icon: string;
}

export const chatGptDifferences: ChatGptDifference[] = [
  {
    icon: "📬",
    title: "Fokus auf typische deutsche Sozialversicherungs-Post",
    description:
      "ChatGPT kennt alles – DokumentenLotse konzentriert sich gezielt auf Bescheide von Krankenkasse, Rente, Reha, Erwerbsminderung und Arbeitsagentur.",
  },
  {
    icon: "🎯",
    title: "Spezialisiert statt allgemein",
    description:
      "Wir bauen für genau diese Briefe: typische Formulierungen, Abläufe und Fristen – nicht für Steuerbescheide, Verträge oder Hausarbeit.",
  },
  {
    icon: "⏰",
    title: "Fristen erkennen und hervorheben",
    description:
      "Geplant: Fristen werden automatisch erkannt und klar angezeigt – damit du sie nicht im Fließtext überliest.",
  },
  {
    icon: "✅",
    title: "Geplante Aufgabenlisten",
    description:
      "Nicht nur erklären, sondern zeigen: Was musst du als Nächstes tun? Welche Unterlagen brauchst du?",
  },
  {
    icon: "📁",
    title: "Geplante Dokumentenorganisation",
    description:
      "Briefe strukturiert verstehen und vorbereiten – ohne jedes Mal neu zu erklären, worum es geht.",
  },
  {
    icon: "👤",
    title: "Für Nicht-Techniker entwickelt",
    description:
      "Große Schrift, einfache Sprache, wenige Schritte – ohne Prompt-Formulierung oder KI-Vorkenntnisse.",
  },
];

export interface TypicalSituation {
  id: string;
  title: string;
  description: string;
  area: string;
  urgency?: string;
}

export const typicalSituations: TypicalSituation[] = [
  {
    id: "kk-unterlagen",
    title: "Krankenkasse fordert Unterlagen an",
    description:
      "Ein Schreiben listet fehlende Atteste oder Formulare – unklar ist, ob das Krankengeld deshalb ausbleibt.",
    area: "Krankenkasse",
    urgency: "Oft Frist: 2–4 Wochen",
  },
  {
    id: "aa-nachweise",
    title: "Arbeitsagentur verlangt Nachweise",
    description:
      "Mitwirkungspflicht, Bewerbungsnachweise oder Termine – wer nicht reagiert, riskiert Leistungskürzungen.",
    area: "Arbeitsagentur",
    urgency: "Fristen oft kurz",
  },
  {
    id: "rente-bescheid",
    title: "Rentenversicherung verschickt einen Bescheid",
    description:
      "Regelanpassung, Erwerbsminderung oder Anhörung – Fachbegriffe machen es schwer, die Konsequenzen zu verstehen.",
    area: "Rentenversicherung",
  },
  {
    id: "reha-bescheid",
    title: "Reha-Antrag bewilligt oder abgelehnt",
    description:
      "Die Entscheidung wirkt endgültig – unklar bleibt, welche Schritte, Fristen oder Widerspruchsmöglichkeiten es gibt.",
    area: "Reha",
  },
  {
    id: "frist-kurz",
    title: "Frist läuft in wenigen Tagen ab",
    description:
      "Das Datum steht irgendwo auf Seite 2. Du hast Angst, zu spät zu reagieren – und weißt nicht genau, was einzureichen ist.",
    area: "Alle Bereiche",
    urgency: "Kritisch: Tage, nicht Wochen",
  },
];

export interface CommonChallenge {
  id: string;
  challenge: string;
  context: string;
}

/** Häufig geschilderte Probleme – keine erfundenen Kundenbewertungen */
export const commonChallenges: CommonChallenge[] = [
  {
    id: "1",
    challenge: "Ich verstehe nicht, ob ich handeln muss oder abwarten kann.",
    context: "Häufig bei Krankenkassen- und Renten-Bescheiden",
  },
  {
    id: "2",
    challenge: "Ich habe die Frist fast übersehen, weil sie im Text versteckt war.",
    context: "Typisch bei Arbeitsagentur und Reha-Schreiben",
  },
  {
    id: "3",
    challenge: "Meine Angehörigen sollen es erklären – aber die haben selbst keine Zeit.",
    context: "Besonders bei älteren Familienmitgliedern",
  },
  {
    id: "4",
    challenge: "ChatGPT hilft – aber ich weiß nicht, ob die Erklärung für meinen Bescheid stimmt.",
    context: "Allgemeine KI vs. spezialisierte Hilfe",
  },
  {
    id: "5",
    challenge: "Ich weiß nicht, welche Unterlagen ich wirklich einreichen soll.",
    context: "Nachforderungen der Krankenkasse oder Rentenversicherung",
  },
];
