import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { SITE_DESCRIPTION } from "@/lib/constants";

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-navy-50 to-white px-5 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 inline-block rounded-full bg-accent-100 px-4 py-1.5 text-sm font-semibold text-accent-800">
          Verständnishilfe für Behördenpost
        </p>
        <h1 className="text-3xl font-bold leading-tight text-navy-900 sm:text-4xl md:text-5xl">
          Verstehe deine Behördenpost in wenigen Sekunden.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-navy-600 sm:text-xl">
          {SITE_DESCRIPTION}
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="#warteliste">
            <Button size="lg">Frühzugang sichern</Button>
          </Link>
          <Link href="#beispiele">
            <Button variant="outline" size="lg">
              Beispiele ansehen
            </Button>
          </Link>
        </div>
        <Disclaimer className="mx-auto mt-8 max-w-xl" variant="banner" />
      </div>
    </section>
  );
}
