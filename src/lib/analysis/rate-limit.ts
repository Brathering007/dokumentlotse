import { cookies } from "next/headers";
import { DEMO_RATE_LIMIT_COOKIE, DEMO_RATE_LIMIT_MS } from "./constants";

export interface RateLimitResult {
  allowed: boolean;
  retryAfterHours?: number;
}

export async function checkDemoRateLimit(): Promise<RateLimitResult> {
  const cookieStore = await cookies();
  const lastValue = cookieStore.get(DEMO_RATE_LIMIT_COOKIE)?.value;

  if (!lastValue) {
    return { allowed: true };
  }

  const lastTime = new Date(lastValue).getTime();
  if (Number.isNaN(lastTime)) {
    return { allowed: true };
  }

  const elapsed = Date.now() - lastTime;
  if (elapsed >= DEMO_RATE_LIMIT_MS) {
    return { allowed: true };
  }

  const retryAfterHours = Math.max(
    1,
    Math.ceil((DEMO_RATE_LIMIT_MS - elapsed) / (60 * 60 * 1000))
  );

  return { allowed: false, retryAfterHours };
}

export function getDemoRateLimitCookieValue(): string {
  return new Date().toISOString();
}
