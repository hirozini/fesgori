import { performances } from "@/lib/festival";
import { PerformanceCard } from "@/components/PerformanceCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PROGRAM — フェスティバルご理解ありがとうございます",
};

export default function ProgramPage() {
  const [first, ...rest] = performances;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-black mb-12 flex items-center gap-3">
        <span className="inline-block w-8 h-1 bg-yellow" />
        公演一覧
      </h1>

      {/* Featured */}
      <div className="mb-8">
        <PerformanceCard performance={first} featured />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rest.map((p, i) => (
          <div
            key={p.id}
            className={i === 0 || i === 3 ? "md:col-span-2" : ""}
          >
            <PerformanceCard performance={p} featured={i === 0 || i === 3} />
          </div>
        ))}
      </div>
    </div>
  );
}
