import { performances } from "@/lib/festival";
import { PerformanceCard } from "@/components/PerformanceCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PROGRAM — フェスティバルご理解ありがとうございます",
};

export default function ProgramPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-black mb-10">
        公演一覧
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {performances.map((p) => (
          <PerformanceCard key={p.id} performance={p} />
        ))}
      </div>
    </div>
  );
}
