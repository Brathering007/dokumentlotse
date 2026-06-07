export type AnalyticsEventName =
  | "page_view"
  | "cta_click"
  | "waitlist_start"
  | "waitlist_submit"
  | "waitlist_success"
  | "waitlist_error"
  | "faq_open"
  | "audience_page_view"
  | "demo_analyze_start"
  | "demo_analyze_success"
  | "demo_analyze_error";

export interface AnalyticsEvent {
  name: AnalyticsEventName;
  properties?: Record<string, string | number | boolean | undefined>;
}

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: AnalyticsEvent): void {
  if (typeof window === "undefined") return;

  const props = event.properties
    ? Object.fromEntries(
        Object.entries(event.properties)
          .filter(([, v]) => v !== undefined)
          .map(([k, v]) => [k, String(v)])
      )
    : undefined;

  // Plausible Analytics (empfohlen – datenschutzfreundlich)
  if (window.plausible) {
    window.plausible(event.name, props ? { props } : undefined);
  }

  // Google Analytics 4 (optional)
  if (window.gtag) {
    window.gtag("event", event.name, event.properties);
  }

  // Entwicklung: Events in Konsole sichtbar
  if (process.env.NODE_ENV === "development") {
    console.debug("[Analytics]", event.name, event.properties);
  }
}

export function trackCtaClick(location: string, label?: string): void {
  trackEvent({
    name: "cta_click",
    properties: { location, label },
  });
}
