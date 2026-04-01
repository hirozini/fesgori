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
          className="hidden md:block w-full max-w-4xl h-auto object-contain"
          priority
        />
        <Image
          src="/images/hero_sp.jpg"
          alt={festival.name}
          width={600}
          height={900}
          className="md:hidden w-full h-auto object-contain"
          priority
        />
        <Image
          src="/images/Title.png"
          alt={`${festival.name} タイトル`}
          width={800}
          height={200}
          className="w-full max-w-2xl h-auto mt-4 shrink-0"
        />
      </div>

      {/* Catchcopy band */}
      <section className="bg-yellow/25 py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg md:text-xl font-bold leading-relaxed mb-6 rotate-1">
            <span className="inline-block border-b-3 border-yellow">「わかってくれてよかった」</span>――そう先に言っておくことでみんなが共有できるようになるものがある。しびれるほど楽しい「上演」たちが一堂に会する6月はじめの一週間！
          </p>
          <p className="text-sm leading-relaxed text-black/50 -rotate-1">
            羽鳥嘉郎が羽鳥ヨダ嘉郎とともに企画する上演芸術のフェスティバル！　早稲田小劇場どらま館の協力のもと、早稲田周辺のさまざまな施設で、メジャーからもマイナーからもこぼれた多様な体・空間と出会える機会を提供します。「いぬのせなか座」山本浩貴が企画協力として参加！
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
              <PerformanceCard performance={p} index={i} />
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
