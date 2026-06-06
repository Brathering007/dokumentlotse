import { promises as fs } from "fs";
import path from "path";
import type { WaitlistSignup } from "@/types";
import type { AddToWaitlistResult } from "./types";
import { validateWaitlistInput } from "./types";

const DATA_DIR = path.join(process.cwd(), "data");
const WAITLIST_FILE = path.join(DATA_DIR, "waitlist.json");

interface JsonWaitlistEntry {
  id: string;
  email: string;
  documentInterest?: WaitlistSignup["documentInterest"];
  letterFrequency?: WaitlistSignup["letterFrequency"];
  paymentWillingness?: WaitlistSignup["paymentWillingness"];
  source?: string;
  createdAt: string;
}

async function ensureDataDir(): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

async function readWaitlist(): Promise<JsonWaitlistEntry[]> {
  try {
    const content = await fs.readFile(WAITLIST_FILE, "utf-8");
    return JSON.parse(content) as JsonWaitlistEntry[];
  } catch {
    return [];
  }
}

async function writeWaitlist(entries: JsonWaitlistEntry[]): Promise<void> {
  await ensureDataDir();
  await fs.writeFile(WAITLIST_FILE, JSON.stringify(entries, null, 2), "utf-8");
}

export async function addToWaitlistJson(signup: WaitlistSignup): Promise<AddToWaitlistResult> {
  const validation = validateWaitlistInput(signup.email);
  if (!validation.ok) {
    return { success: false, error: validation.error };
  }

  const entries = await readWaitlist();

  if (entries.some((entry) => entry.email === validation.normalizedEmail)) {
    return { success: false, error: "Diese E-Mail-Adresse ist bereits vorgemerkt." };
  }

  const entry: JsonWaitlistEntry = {
    id: crypto.randomUUID(),
    email: validation.normalizedEmail,
    documentInterest: signup.documentInterest,
    letterFrequency: signup.letterFrequency,
    paymentWillingness: signup.paymentWillingness,
    source: signup.source,
    createdAt: new Date().toISOString(),
  };

  entries.push(entry);
  await writeWaitlist(entries);

  return {
    success: true,
    entry: { id: entry.id, email: entry.email, createdAt: entry.createdAt },
  };
}

export async function getWaitlistCountJson(): Promise<number> {
  const entries = await readWaitlist();
  return entries.length;
}
