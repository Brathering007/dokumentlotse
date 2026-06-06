"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    trackEvent({
      name: "page_view",
      properties: { path: pathname },
    });
  }, [pathname]);

  return <>{children}</>;
}
