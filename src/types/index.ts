export type DocumentCategory =
  | "Krankenkasse"
  | "Arbeitsagentur"
  | "Rentenversicherung"
  | "Reha"
  | "Erwerbsminderung"
  | "Sonstiges";

export type LetterFrequency =
  | "Selten (1–2× pro Jahr)"
  | "Monatlich"
  | "Mehrmals pro Monat"
  | "Wöchentlich oder öfter";

export type PaymentWillingness =
  | "Ja, wenn es mein Problem löst"
  | "Ja, bis 5 € pro Monat"
  | "Ja, bis 10 € pro Monat"
  | "Nur wenn kostenlos"
  | "Nein / noch unsicher";

export interface WaitlistEntry {
  id: string;
  email: string;
  documentInterest?: DocumentCategory;
  letterFrequency?: LetterFrequency;
  paymentWillingness?: PaymentWillingness;
  source?: string;
  createdAt: string;
}

export interface WaitlistSignup {
  email: string;
  documentInterest?: DocumentCategory;
  letterFrequency?: LetterFrequency;
  paymentWillingness?: PaymentWillingness;
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
