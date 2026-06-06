import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

interface LegalPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] bg-white py-10 sm:py-14">
        <article className="mx-auto max-w-3xl px-5 sm:px-6">
          <Link
            href="/"
            className="mb-6 inline-flex items-center text-sm font-medium text-navy-600 hover:text-navy-900"
          >
            ← Zurück zur Startseite
          </Link>
          <h1 className="text-3xl font-bold text-navy-900 sm:text-4xl">{title}</h1>
          <div className="prose-legal mt-8 space-y-5 text-base leading-relaxed text-navy-700">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
