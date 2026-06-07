/** Demo: max. 2 MB pro PDF */
export const DEMO_MAX_FILE_BYTES = 2 * 1024 * 1024;

/** Mindestens 50 Zeichen extrahierter Text */
export const DEMO_MIN_TEXT_LENGTH = 50;

/** Max. 1 Analyse pro 24 Stunden (Demo) */
export const DEMO_RATE_LIMIT_MS = 24 * 60 * 60 * 1000;

export const DEMO_RATE_LIMIT_COOKIE = "dl_demo_last";

/** OpenAI Timeout in ms */
export const OPENAI_TIMEOUT_MS = 55_000;

export const ALLOWED_PDF_MIME_TYPES = ["application/pdf"];
