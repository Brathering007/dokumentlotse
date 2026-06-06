export type DocumentCategory =
  | "Krankenkasse"
  | "Arbeitsagentur"
  | "Rentenversicherung"
  | "Reha"
  | "Versicherung"
  | "Sonstiges";

export interface WaitlistEntry {
  id: string;
  email: string;
  documentInterest?: DocumentCategory;
  createdAt: string;
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
