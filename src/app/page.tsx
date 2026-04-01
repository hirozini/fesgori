import Image from "next/image";
import { festival, performances } from "@/lib/festival";
import { PerformanceCard } from "@/components/PerformanceCard";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-yellow flex flex-col items-center px-4 pt-8 pb-6">
        <Image
          src="/images/hero.jpg"
          alt={festival.name}
          width={1200}
          height={800}
          className="w-full max-w-4xl h-auto object-contain"
          priority
        />
        <Image
          src="/images/Title.png"
          alt={`${festival.name} タイトル`}
          width={800}
          height={200}
          className="w-full max-w-2xl h-auto mt-6"
        />
      </div>

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
            {festival.generalNotes}
          </p>
        </div>
      </section>
    </div>
  );
}
