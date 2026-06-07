export interface SampleDocument {
  id: string;
  label: string;
  institution: string;
  filename: string;
  description: string;
}

export const sampleDocuments: SampleDocument[] = [
  {
    id: "krankenkasse",
    label: "Krankenkasse",
    institution: "AOK Nordost",
    filename: "krankenkasse.pdf",
    description: "Nachforderung zu Arbeitsunfähigkeitsbescheinigungen",
  },
  {
    id: "rentenversicherung",
    label: "Rentenversicherung",
    institution: "Deutsche Rentenversicherung",
    filename: "rentenversicherung.pdf",
    description: "Bescheid zur medizinischen Rehabilitation",
  },
  {
    id: "arbeitsagentur",
    label: "Arbeitsagentur",
    institution: "Agentur für Arbeit",
    filename: "arbeitsagentur.pdf",
    description: "Aufforderung zur Mitwirkung bei Bewerbungsnachweisen",
  },
];
