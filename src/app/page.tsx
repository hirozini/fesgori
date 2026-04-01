import Image from "next/image";
import Link from "next/link";
import { festival, performances } from "@/lib/festival";
import { PerformanceCard } from "@/components/PerformanceCard";
export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
        <Image
          src="/images/hero.jpg"
          alt={festival.name}
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Yellow band */}
      <section className="bg-yellow py-10 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-2xl md:text-4xl font-black leading-tight">
            {festival.name}
          </h1>
          <p className="text-sm md:text-base font-medium opacity-70">
            {festival.nameEn}
          </p>
          <p className="text-base md:text-lg font-bold">
            {festival.period}　{festival.area}
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Link
              href="/program"
              className="bg-black text-yellow px-8 py-3 text-sm font-bold rounded hover:opacity-80 transition-opacity"
            >
              PROGRAM
            </Link>
            <Link
              href="/about"
              className="bg-black text-yellow px-8 py-3 text-sm font-bold rounded hover:opacity-80 transition-opacity"
            >
              ABOUT
            </Link>
          </div>
        </div>
      </section>
      {/* Performances */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">
          公演一覧
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {performances.map((p) => (
            <PerformanceCard key={p.id} performance={p} />
          ))}
        </div>
      </section>
      {/* Notice bar */}
      <section className="bg-black/5 py-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-black/70">
            ⚠ {festival.generalNotes}
          </p>
        </div>
      </section>
    </div>
  );
}
