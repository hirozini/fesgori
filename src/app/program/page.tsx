import { performances } from "@/lib/festival";
import { PerformanceCard } from "@/components/PerformanceCard";
import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PROGRAM — フェスティバルご理解ありがとうございます",
};

export default function ProgramPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-black mb-10">
        <span className="inline-block bg-yellow/40 px-3 py-1 rounded-md -rotate-2 border-2 border-black">公演一覧</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {performances.map((p, i) => (
          <FadeIn key={p.id} delay={i * 80}>
            <PerformanceCard performance={p} index={i} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
