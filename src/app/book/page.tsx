import Link from "next/link";
import { FallbackImage } from "@/components/FallbackImage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BOOK — フェスティバルご理解ありがとうございます",
};

export default function BookPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-base md:text-xl font-bold mb-10">
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
              className="inline-block bg-yellow text-black px-10 py-4 text-base font-bold rounded hover:opacity-80 transition-opacity"
            >
              予約はこちら
            </a>
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-2xl mx-auto mt-16 space-y-8">
        <p className="text-xl md:text-2xl font-bold leading-relaxed" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          見ること、触れること、支えることは、いつ暴力になるのか――
        </p>

        <div className="space-y-4 text-sm leading-relaxed">
          <p>
            国家で、共同体で、家で、ゆがみ抗いながら発せられてきた言葉たちが、この感覚を、体を、劇をかたちづくる。
          </p>
          <p>
            歴史と地形、政治とケア、侵略と生活が苛烈に殺到する「現在」に生み出された戯曲三部作、ついに刊行。
          </p>
        </div>

        <hr className="border-t border-black/15" />

        <p className="text-sm leading-relaxed">
          堺雅人推薦文が入る
        </p>

        <hr className="border-t border-black/15" />

        <div className="space-y-4 text-sm leading-relaxed">
          <p className="font-bold">【三部作について】</p>
          <p>
            三つの戯曲は、暴力を受ける身体、見世物にされる身体、手を貸してしまう身体を順にたどりながら、儀礼化・見世物・介助といった社会の技術を解体していく。農村演劇から地政学、民俗、医療、植民地史、介護記録まで、異なる領域・時代・地域の知と苦しみが一つの戯曲のなかに折り畳まれる。言葉は極度に圧縮・断片化され、意味の手前にある感覚と身振りが読む者の体に直接触れながら、いくつかのインフラを露出させていくだろう。戯曲という形式を、さらには人体の経てきた歴史を根底から突き詰める、類例のない作品集。
          </p>
        </div>

        <hr className="border-t border-black/15" />

        <div className="space-y-4 text-sm leading-relaxed">
          <p className="font-bold">【収録作品】</p>
          <div>
            <p className="font-bold">「リンチ（戯曲）」</p>
            <p>
              小豆島の安田おどり、聖火の沖縄入り、クリオン島のハンセン病患者隔離施設での女子寮襲撃、南洋群島――寝たきりの「お袋」と介護する「素人」のあいだで、帝国に忘却された島々の記憶が圧縮・断片化し、噴き出す。第20回AAF戯曲賞大賞受賞作。
            </p>
          </div>
          <div>
            <p className="font-bold">「同伴（戯曲）」</p>
            <p>
              知念正真の戯曲『人類館』が「さる軍団」たちの鞭と紐と跳躍のなかで再び開かれる。猿まわし、タミル移民、人種握手会、通天閣――観客席もトイレもキッズスペースもすべてが上演内部に取り込まれ、見ることの暴力が見る者自身の知覚のなかで起動する。
            </p>
          </div>
          <div>
            <p className="font-bold">「加担（戯曲）」</p>
            <p>
              農婦、主夫、推し、サポ、同志、パパ。関係名で呼ばれる人物たちの家のなかで、綿ふき病、腎不全看護、満洲の上下水道、ガザの水の武器化、占領下の性暴力が交錯する。ケアと連帯が、暴力と同じインフラの上を流れていく。
            </p>
          </div>
        </div>

        <hr className="border-t border-black/15" />

        <div className="space-y-2 text-sm leading-relaxed">
          <p className="font-bold">【著者】</p>
          <p>
            羽鳥ヨダ嘉郎　<span className="text-xs text-black/50">Yoshiro Yoda Hatori</span><br />
            「リンチ（戯曲）」で第20回AAF戯曲賞大賞受賞。
          </p>
        </div>
      </div>
    </div>
  );
}
