export type DocumentCategory =
  | "Krankenkasse"
  | "Arbeitsagentur"
  | "Rentenversicherung"
  | "Reha"
  | "Versicherung"
  | "Sonstiges";

export type LetterFrequency =
  | "Selten (1–2× pro Jahr)"
  | "Monatlich"
  | "Mehrmals pro Monat"
  | "Wöchentlich oder öfter";

export interface WaitlistEntry {
  id: string;
  email: string;
  documentInterest?: DocumentCategory;
  letterFrequency?: LetterFrequency;
  source?: string;
  createdAt: string;
}

export interface WaitlistSignup {
  email: string;
  documentInterest?: DocumentCategory;
  letterFrequency?: LetterFrequency;
  source?: string;
}

export interface ExampleAnalysis {
  id: string;
  category: string;
  title: string;
  originalExcerpt: string;
  simpleExplanation: string;
  possibleDeadline: string;
  possibleTask: string;
}

export interface RoadmapVersion {
  version: string;
  title: string;
  features: string[];
}

export interface ProblemItem {
  title: string;
  description: string;
}

export interface SolutionStep {
  step: number;
  title: string;
  description: string;
}

export interface TrustPoint {
  title: string;
  description: string;
}

export interface AudienceConfig {
  slug: string;
  label: string;
  headline: string;
  subheadline: string;
  badge: string;
  problemHighlight: string;
  documentInterest: DocumentCategory;
  ctaText: string;
}
