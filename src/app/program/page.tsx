import { performances } from "@/lib/festival";
import { PerformanceCard } from "@/components/PerformanceCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PROGRAM — フェスティバルご理解ありがとうございます",
};

export default function ProgramPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-20">
      <h1 className="text-3xl font-black mb-14">
        公演一覧
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {performances.map((p) => (
          <PerformanceCard key={p.id} performance={p} />
        ))}
      </div>
    </div>
  );
}
