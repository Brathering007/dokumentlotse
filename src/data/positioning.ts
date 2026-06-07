export const positioningStatement =
  "DokumentenLotse konzentriert sich auf deutsche Sozialversicherungs-Briefe – Krankenkasse, Reha, Rentenversicherung, Erwerbsminderung und Arbeitsagentur. Bewusst spezialisiert, nicht als Allrounder.";

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
      "ChatGPT ist ein Allrounder. DokumentenLotse konzentriert sich gezielt auf Bescheide von Krankenkasse, Rente, Reha, Erwerbsminderung und Arbeitsagentur.",
  },
  {
    icon: "🎯",
    title: "Spezialisiert statt allgemein",
    description:
      "Wir bauen für genau diese Briefe: typische Formulierungen, Abläufe und Fristen – nicht für Steuerbescheide, Mietverträge oder allgemeine Verträge.",
  },
  {
    icon: "⏰",
    title: "Fristen strukturiert hervorheben",
    description:
      "Geplant: Fristen werden erkannt und klar angezeigt – damit du sie nicht im Fließtext überliest.",
  },
  {
    icon: "✅",
    title: "Geplante Aufgabenlisten",
    description:
      "Nicht nur erklären, sondern strukturiert zeigen: Was könnte als Nächstes anstehen? Welche Unterlagen werden oft verlangt?",
  },
  {
    icon: "📁",
    title: "Geplante Dokumentenorganisation",
    description:
      "Briefe strukturiert verstehen und vorbereiten – ohne jedes Mal den Kontext neu setzen zu müssen.",
  },
  {
    icon: "👤",
    title: "Für Nicht-Techniker entwickelt",
    description:
      "Große Schrift, einfache Sprache, wenige Schritte – ohne Prompt-Formulierung oder technische Vorkenntnisse.",
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
    urgency: "Oft nur wenige Tage",
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
    challenge:
      "Mit ChatGPT bekomme ich oft eine Erklärung – trotzdem bin ich unsicher, ob alles zum Bescheid passt und was der nächste Schritt ist.",
    context: "Allrounder vs. Spezialisierung",
  },
  {
    id: "5",
    challenge: "Ich weiß nicht, welche Unterlagen ich wirklich einreichen soll.",
    context: "Nachforderungen der Krankenkasse oder Rentenversicherung",
  },
];
