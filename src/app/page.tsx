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

      {/* Performances */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* About card */}
          <FadeIn>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm p-6 md:p-8 flex flex-col justify-center h-full">
              <h2 className="text-xl md:text-2xl font-bold leading-relaxed mb-4">
                「わかってくれてよかった」――そう述べておくことで「上演」でき、共有できるようになるものを一挙に集めた、しびれるほど楽しい一週間！
              </h2>
              <p className="text-sm leading-relaxed text-black/70">
                {festival.overview}
              </p>
            </div>
          </FadeIn>
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
