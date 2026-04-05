import Link from "next/link";
import { FallbackImage } from "@/components/FallbackImage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BOOK — フェスティバルご理解ありがとうございます",
};

export default function BookPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-10">
        <span className="inline-block bg-yellow/40 px-3 py-1 rounded-md -rotate-1 border-2 border-black">
          フェスティバル開催にあわせて刊行！
        </span>
      </h1>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Book cover */}
        <div className="shrink-0 w-[220px] md:w-[280px]">
          <div className="border border-black/15">
            <FallbackImage
              src="/images/book-cover.jpg"
              alt="リンチ（戯曲）――三部作"
              width={280}
              height={396}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Book info */}
        <div className="text-left space-y-5">
          <div style={{ fontFamily: "'Noto Serif JP', serif" }}>
            <p className="text-lg md:text-xl font-black tracking-tighter">
              羽鳥ヨダ嘉郎
            </p>
            <p
              className="text-3xl md:text-4xl font-black leading-tight mt-1 tracking-tighter"
              style={{ fontFeatureSettings: '"palt"' }}
            >
              リンチ<span className="-ml-1.5">（</span>戯曲<span className="-mr-1.5">）</span>
              <span className="text-2xl md:text-3xl">――三部作</span>
            </p>
          </div>

          <p className="text-sm leading-relaxed font-medium">
            堺雅人（俳優）推薦！<br />
            戯曲と体の歴史を根底から突き詰める、類例のない作品集。
          </p>

          <p className="text-xs text-black leading-loose">
            いぬのせなか座／2,500円＋税<br />
            2026年6月5日刊行（予約で先行発送／会場にて先行発売）<br />
            四六判上製本クロス装　124ページ<br />
            付録小冊子：平倉圭（芸術学）、細馬宏通（行動学）<br />
            装画：尼子騒兵衛「落第忍者乱太郎」より<br />
            装釘・本文レイアウト：山本浩貴＋ｈ（いぬのせなか座）
          </p>
          <p>
            <a
              href="https://inunosenakaza.stores.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline text-black/60 hover:text-black transition-opacity"
            >
              予約はこちら
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
