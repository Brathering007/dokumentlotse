import type { Metadata } from "next";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { AnalyticsScripts } from "@/components/analytics/AnalyticsScripts";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: `${SITE_NAME} – Behördenpost verständlich erklärt`,
  description: SITE_DESCRIPTION,
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    locale: "de_DE",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="min-h-screen antialiased">
        <AnalyticsProvider>{children}</AnalyticsProvider>
        <AnalyticsScripts />
      </body>
    </html>
  );
}
