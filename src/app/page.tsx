import Image from "next/image";
import { festival, performances } from "@/lib/festival";
import { PerformanceCard } from "@/components/PerformanceCard";

export default function Home() {
  const [first, ...rest] = performances;

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

      {/* Yellow accent line */}
      <div className="h-1.5 bg-yellow" />

      {/* Performances */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-2xl font-bold mb-12 flex items-center gap-3">
          <span className="inline-block w-8 h-1 bg-yellow" />
          公演一覧
        </h2>

        {/* Featured: first performance full width */}
        <div className="mb-8">
          <PerformanceCard performance={first} featured />
        </div>

        {/* Rest: editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.map((p, i) => (
            <div
              key={p.id}
              className={
                i === 0 || i === 3
                  ? "md:col-span-2"
                  : ""
              }
            >
              <PerformanceCard performance={p} featured={i === 0 || i === 3} />
            </div>
          ))}
        </div>
      </section>

      {/* Notice bar */}
      <section className="bg-yellow/30 py-6 px-4 border-t-2 border-yellow">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-black/70">
            {festival.generalNotes}
          </p>
        </div>
      </section>
    </div>
  );
}
