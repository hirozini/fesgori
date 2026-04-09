import Image from "next/image";
import Link from "next/link";
import { festival, performances } from "@/lib/festival";
import { PerformanceCard } from "@/components/PerformanceCard";
import { FadeIn } from "@/components/FadeIn";

import { FallbackImage } from "@/components/FallbackImage";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-yellow flex flex-col items-center px-4 pt-4 pb-6 md:pt-8 md:h-[calc(100vh-3.5rem)] md:justify-center">
        <Image
          src="/images/hero.jpg"
          alt={festival.name}
          width={1200}
          height={800}
          className="hidden md:block w-full max-w-6xl h-auto object-contain md:max-h-[calc(100vh-14rem)]"
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
          className="w-full max-w-3xl h-auto mt-4 shrink-0"
        />
      </div>

      {/* Catchcopy band */}
      <section className="bg-yellow/25 py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg md:text-xl font-bold leading-relaxed mb-6 rotate-1">
            <span className="inline-block border-b-3 border-yellow">「わかってくれてよかった」</span>――そう先に言っておくことでみんなが共有できるようになるものがある。しびれるほど楽しい「上演」たちが一堂に会する6月はじめの一週間！
          </p>
          <p className="text-sm leading-relaxed text-black/50 -rotate-1">
            羽鳥ヨダ嘉郎が羽鳥嘉郎とともに企画する上演芸術のフェスティバル！　早稲田小劇場どらま館の協力のもと、周辺のさまざまな施設で、メジャーからもマイナーからもこぼれた多様な体・空間と出会える機会を提供します。「いぬのせなか座」山本浩貴が企画協力として参加！
          </p>
          <div className="text-right mr-4 md:mr-0 mt-4">
            <Link href="/about" className="text-xs text-black/30 hover:text-black/50 transition-colors">
              もっとくわしく→
            </Link>
          </div>
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

      {/* Book section */}
      <section className="bg-black/3 border-t border-black/20 border-b border-b-black/20">
        <div className="max-w-6xl mx-auto px-4 py-14 flex flex-col items-center">
          <div className="w-full max-w-2xl">
            <p className="text-base md:text-base font-bold mb-10">
              <span className="inline-block bg-yellow/40 px-2 py-0.5 rounded border-2 border-black -rotate-1">フェスティバル開催にあわせて刊行！</span>
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-8 items-center md:items-start">
            {/* Book cover */}
            <Link href="/book" className="shrink-0 w-[220px] md:w-[240px] block hover:opacity-80 transition-opacity">
              <div className="border border-black/15">
                <FallbackImage
                  src="/images/book-cover.jpg"
                  alt="『リンチ（戯曲）――三部作』"
                  width={240}
                  height={340}
                  className="w-full h-auto"
                />
              </div>
            </Link>
            {/* Book info */}
            <div className="text-left space-y-5">
              <div>
                <div style={{ fontFamily: "'Noto Serif JP', serif" }}>
                  <p className="text-lg md:text-xl font-black tracking-tighter">羽鳥ヨダ嘉郎</p>
                  <p className="text-3xl md:text-4xl font-black leading-tight mt-1 tracking-tighter" style={{ fontFeatureSettings: '"palt"' }}>
                    リンチ<span className="-ml-1.5">（</span>戯曲<span className="-mr-1.5">）</span><span className="text-2xl md:text-3xl">――三部作</span>
                  </p>
                </div>
                <p className="text-sm md:text-sm leading-relaxed font-medium mt-4">
                  堺雅人（俳優）推薦！<br />戯曲と体を根底から突き詰める、類例のない作品集。
                </p>
              </div>
              <p className="text-xs text-black leading-loose">
                いぬのせなか座／2,500円＋税<br />
                ISBN：978-4-911308-09-7<br />
                2026年6月10日刊行（予約で先行発送／会場にて先行発売）<br />
                四六判上製本クロス装　題箋貼り　124ページ<br />
                付録小冊子：平倉圭（芸術学）、細馬宏通（行動学）<br />
                装画：尼子騒兵衛「落第忍者乱太郎」より<br />
                装釘・本文レイアウト：山本浩貴＋ｈ（いぬのせなか座）
              </p>
              <p>
                <Link
                  href="/book"
                  className="inline-block bg-yellow/40 text-black px-6 py-2.5 text-xs font-bold rounded hover:opacity-80 transition-opacity"
                >
                  詳しくはこちら
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
