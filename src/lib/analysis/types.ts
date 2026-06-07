export interface DocumentAnalysis {
  summary: string;
  sender: string;
  requirements: string[];
  deadlines: string[];
  next_steps: string[];
  confidence: string;
}

export interface AnalyzeSuccessResponse {
  analysis: DocumentAnalysis;
  meta: {
    textLength: number;
    demo: true;
  };
}

export interface AnalyzeErrorResponse {
  error: string;
  code?: string;
}

export type AnalyzeResponse = AnalyzeSuccessResponse | AnalyzeErrorResponse;

export function isDocumentAnalysis(value: unknown): value is DocumentAnalysis {
  if (!value || typeof value !== "object") return false;
  const obj = value as Record<string, unknown>;
  return (
    typeof obj.summary === "string" &&
    typeof obj.sender === "string" &&
    Array.isArray(obj.requirements) &&
    obj.requirements.every((item) => typeof item === "string") &&
    Array.isArray(obj.deadlines) &&
    obj.deadlines.every((item) => typeof item === "string") &&
    Array.isArray(obj.next_steps) &&
    obj.next_steps.every((item) => typeof item === "string") &&
    typeof obj.confidence === "string"
  );
}
