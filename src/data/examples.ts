import type { ExampleAnalysis } from "@/types";

export const exampleAnalyses: ExampleAnalysis[] = [
  {
    id: "rente-reha",
    category: "Rentenversicherung / Reha",
    title: "Bescheid zur medizinischen Rehabilitation",
    originalExcerpt:
      "Aufgrund Ihrer Antragstellung vom 12.03.2026 teilen wir Ihnen mit, dass die medizinische Rehabilitation voraussichtlich erforderlich ist. Der Leistungsträger wird über die Kostenübernahme entscheiden. Bitte reichen Sie bis zum 28.04.2026 die angeforderten Unterlagen vollständig ein, andernfalls kann der Antrag als zurückgenommen gelten.",
    simpleExplanation:
      "Die Rentenversicherung prüft, ob eine Reha für Sie sinnvoll ist. Sie müssen bis Ende April weitere Unterlagen nachreichen. Wenn Sie das nicht tun, kann der Antrag abgelehnt oder gestoppt werden.",
    possibleDeadline: "28.04.2026 – Unterlagen einreichen",
    possibleTask:
      "Fehlende Unterlagen zusammenstellen (z. B. Arztberichte) und an die Rentenversicherung senden.",
  },
  {
    id: "krankenkasse",
    category: "Krankenkasse",
    title: "Schreiben zum Krankengeld",
    originalExcerpt:
      "Wir haben festgestellt, dass die von Ihnen vorgelegten Arbeitsunfähigkeitsbescheinigungen für den Zeitraum vom 01.02.2026 bis 15.02.2026 nicht vollständig sind. Die Leistungsgewährung kann erst nach Vorlage der vollständigen Nachweise erfolgen. Bitte übermitteln Sie uns die fehlenden Unterlagen innerhalb von vier Wochen nach Zugang dieses Schreibens.",
    simpleExplanation:
      "Ihre Krankenkasse sagt: Für einen bestimmten Zeitraum fehlen noch Atteste. Deshalb kann das Krankengeld noch nicht ausgezahlt werden. Sie haben vier Wochen Zeit, die fehlenden Papiere nachzureichen.",
    possibleDeadline: "4 Wochen ab Erhalt des Briefes",
    possibleTask:
      "Fehlende Arbeitsunfähigkeitsbescheinigungen beim Arzt anfordern und an die Krankenkasse schicken.",
  },
  {
    id: "arbeitsagentur",
    category: "Arbeitsagentur",
    title: "Aufforderung zur Mitwirkung",
    originalExcerpt:
      "Sie sind verpflichtet, Ihre Mitwirkungspflichten nach § 60 SGB I zu erfüllen. Uns liegen keine Nachweise über Ihre Bewerbungsaktivitäten im Berichtszeitraum vor. Bitte reichen Sie bis zum 20.05.2026 eine schriftliche Darlegung Ihrer Bemühungen ein. Andernfalls kann ein Leistungsanspruch entfallen.",
    simpleExplanation:
      "Die Arbeitsagentur möchte wissen, welche Bewerbungen Sie in den letzten Wochen gemacht haben. Sie müssen das schriftlich erklären. Wenn Sie das nicht tun, kann Ihr Arbeitslosengeld gefährdet sein.",
    possibleDeadline: "20.05.2026 – Bewerbungsnachweise einreichen",
    possibleTask:
      "Liste Ihrer Bewerbungen erstellen (Datum, Firma, Stelle) und an die Arbeitsagentur senden.",
  },
];

export const documentCategories = [
  "Krankenkasse",
  "Arbeitsagentur",
  "Rentenversicherung",
  "Reha",
  "Versicherung",
  "Sonstiges",
] as const;
