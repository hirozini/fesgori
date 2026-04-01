import Image from "next/image";
import { festival, performances } from "@/lib/festival";
import { PerformanceCard } from "@/components/PerformanceCard";
import { FadeIn } from "@/components/FadeIn";

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

      {/* Catchcopy band */}
      <section className="bg-yellow/25 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg md:text-xl font-bold leading-relaxed mb-4">
            「わかってくれてよかった」――そう述べておくことで「上演」でき、共有できるようになるものを一挙に集めた、しびれるほど楽しい一週間！
          </h2>
          <p className="text-sm leading-relaxed text-black/60">
            {festival.overview}
          </p>
        </div>
      </section>

      {/* Performances */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">
          <span className="inline-block bg-yellow/40 px-3 py-1 rounded-md -rotate-3 border-2 border-black">公演一覧</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {performances.map((p, i) => (
            <FadeIn key={p.id} delay={i * 80}>
              <PerformanceCard performance={p} />
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
