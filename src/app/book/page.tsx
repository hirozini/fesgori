import Link from "next/link";
import { FallbackImage } from "@/components/FallbackImage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BOOK — フェスティバルご理解ありがとうございます",
  openGraph: {
    title: "羽鳥ヨダ嘉郎『リンチ（戯曲）――三部作』",
    description: "堺雅人（俳優）推薦！ 戯曲と体を根底から突き詰める、類例のない作品集。",
    images: [{ url: "/images/og/book.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og/book.jpg"],
  },
};

export default function BookPage() {
  return (
    <div className="px-4 py-12">
      <div className="md:max-w-3xl mx-auto md:pl-12">
        <h1 className="text-lg md:text-xl font-bold mb-10">
          <span className="inline-block bg-yellow/40 px-3 py-1 rounded-md -rotate-1 border-2 border-black">
            フェスティバル開催にあわせて刊行！
          </span>
        </h1>

        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
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
            戯曲と体を根底から突き詰める、類例のない作品集。
          </p>

          <p className="text-xs text-black leading-loose">
            いぬのせなか座／2,500円＋税<br />
            ISBN：978-4-911308-09-7<br />
            2026年6月5日刊行（予約で先行発送／会場にて先行発売）<br />
            四六判上製本クロス装　題箋貼り　124ページ<br />
            付録小冊子：平倉圭（芸術学）、細馬宏通（行動学）<br />
            装画：尼子騒兵衛「落第忍者乱太郎」より<br />
            装釘・本文レイアウト：山本浩貴＋ｈ（いぬのせなか座）
          </p>
          <p>
            <a
              href="https://inunosenakaza.stores.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-700 text-white px-6 py-2 text-base font-bold rounded hover:opacity-80 transition-opacity"
            >
              ご予約はこちら
            </a>
          </p>
        </div>
      </div>
      </div>

      {/* Description */}
      <div className="max-w-2xl mx-auto mt-16 space-y-8">
        <p className="text-xl md:text-2xl font-bold leading-relaxed whitespace-pre-wrap" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          {"見ること、触れること、支えることは、\nいつ暴力になるのか――"}
        </p>

        <div className="space-y-4 text-sm leading-relaxed whitespace-pre-wrap">
          <p>
            {"国家で、共同体で、家で\nゆがみ抗いながら発せられてきた言葉たちが\nこの感覚を、体を、劇をかたちづくる。"}
          </p>
          <p>
            {"歴史と地形、政治とケア、侵略と生活が\n苛烈に殺到する「現在」に生み出された\n戯曲三部作、ついに刊行。"}
          </p>
        </div>

        <hr className="border-t border-black/15" />

        <div className="text-sm leading-relaxed whitespace-pre-wrap">
          <p className="font-bold mb-2">◯堺雅人（俳優）</p>
          <p>{"　この戯曲、僕はとてもじゃないが、ひとりで読めない。どんな声で、なにを思って喋ればいいか、わからないのだ。そもそも声にだして読んでいいセリフなのかも、わからない。\n　言葉の奥に劇的な世界がひろがっている予感がする。気になる。読みたい。理解したい。でも、本当によくわからない。\n　ここに書かれているのは、多分、仲間を必要とする言葉だ。ひとりでなく、みんなで読む文章。読んでいると、すぐに誰かの意見を聞きたくなる。自分の疑問をきいてほしくなる。調べたことを、だれかに話してみたくなる。みんなで相談したくなる。\n　この文章は、だから、ものすごく「演劇の言葉」なんだと思う。よみだした瞬間から、作劇は始まっているのだ、多分。"}</p>
        </div>

        <hr className="border-t border-black/15" />

        <div className="space-y-4 text-sm leading-relaxed">
          <p className="font-bold">【三部作について】</p>
          <p className="whitespace-pre-wrap">
            {"三つの戯曲は、暴力を受ける身体、見世物にされる身体、手を貸してしまう身体を順にたどりながら、儀礼化・ショー・介助といった社会の技術を解体していく。\n農村演劇から地政学、民俗、医療、植民地史、介護記録まで、異なる領域・時代・地域の知と苦しみが一つの戯曲のなかに折り畳まれる。\n言葉は極度に圧縮・断片化され、意味の手前にある感覚と身振りが読む者の体に直接触れながら、いくつかのインフラを露出させていくだろう。\n戯曲という形式を、さらには人体の経てきた歴史を根底から突き詰める、類例のない作品集。"}
          </p>
        </div>

        <hr className="border-t border-black/15" />

        <div className="space-y-4 text-sm leading-relaxed">
          <p className="font-bold">【収録作品】</p>
          <div>
            <p className="font-bold">「リンチ（戯曲）」</p>
            <p>
              小豆島の安田おどり、聖火の沖縄入り、クリオン島のハンセン病患者隔離施設での女子寮襲撃、南洋群島――寝たきりの「お袋」と介護する「素人」のあいだで、帝国が忘れんとする島々の記憶が圧縮・断片化し、噴き出す。第20回AAF戯曲賞大賞受賞作。
            </p>
          </div>
          <div>
            <p className="font-bold">「同伴（戯曲）」</p>
            <p>
              知念正真の戯曲『人類館』が「さる軍団」たちの紐と跳躍のなかで再び開かれる。猿まわし、タミル移民、人種握手会、通天閣――観客席もトイレもキッズスペースもすべてが上演内部に取り込まれ、見ることの暴力が見る者自身の知覚のなかで起動する。
            </p>
          </div>
          <div>
            <p className="font-bold">「加担（戯曲）」</p>
            <p>
              農婦、主夫、推し、サポ、同志、パパ。関係名で呼ばれる人物たちの家のなかで、綿ふき病、腎不全看護、満洲の上下水道、イスラエルによる水の武器化、占領下の性暴力が交錯する。ケアと連帯が、暴力と同じインフラの上を流れていく。
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

      {/* Novel section */}
      <div className="max-w-3xl mx-auto md:pl-12 mt-20">
        <h2 className="text-sm md:text-base font-bold mb-10">
          <span className="inline-block bg-yellow/40 px-2 py-0.5 rounded border-2 border-black -rotate-1">
            同時刊行
          </span>
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Novel cover */}
          <div className="shrink-0 w-[180px] md:w-[220px]">
            <div className="border border-black/15">
              <FallbackImage
                src="/images/book-cover-novel.jpg"
                alt="リンチ（小説）"
                width={220}
                height={310}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Novel info */}
          <div className="text-left space-y-5">
            <div style={{ fontFamily: "'Noto Serif JP', serif" }}>
              <p className="text-base md:text-lg font-black tracking-tighter">
                羽鳥ヨダ嘉郎
              </p>
              <p
                className="text-2xl md:text-3xl font-black leading-tight mt-1 tracking-tighter"
                style={{ fontFeatureSettings: '"palt"' }}
              >
                リンチ<span className="-ml-1.5">（</span>小説<span className="-mr-1.5">）</span>
              </p>
            </div>

            <p className="text-xs text-black leading-loose">
              いぬのせなか座／初刷限定価格1,000円（税込）<br />
              2026年6月5日刊行（予約で先行発送／会場にて先行発売）<br />
              並製　B6　80ページ（予定）<br />
              装釘・本文レイアウト：山本浩貴＋ｈ（いぬのせなか座）<br />
              ※書影は制作中のものです
            </p>

            <p>
              <a
                href="https://inunosenakaza.stores.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-emerald-700 text-white px-6 py-2 text-base font-bold rounded hover:opacity-80 transition-opacity"
              >
                ご予約はこちら
              </a>
            </p>
          </div>
        </div>

        {/* Novel description */}
        <div className="max-w-2xl mx-auto mt-12 space-y-8">
          <p className="text-base md:text-lg font-bold leading-relaxed">
            「リンチ（戯曲）」を読む。語り合う。上演を想像する。<br />
            その過程が生み出した、もうひとつの「リンチ」。
          </p>

          <hr className="border-t border-black/15" />

          <div className="space-y-4 text-sm leading-relaxed whitespace-pre-wrap">
            <p>
              {"ある日、ある場所に集まった幾人かの人々が「リンチ（戯曲）」を読み進める。\n「素人」「お袋」「和船」「待っていた人」「グヮン」「野次」「絵が来ちゃう」といった言葉たちを拾い上げ、戸惑い、考え、やってみ、確かめ合いながら、様々を少しずつ立ち上げていく。\n聖火、ポル・ポト、ミレーの絵、沖縄、済州島、領土や戦争の記憶が、戯曲の台詞と結びつきながら何度も呼び起こされる。"}
            </p>
            <p>
              {"そこで問われるのは、単なる「正しい解釈」ではない。\n誰が話しているのか。何がト書きで、何が内語なのか。\nどこまでが舞台上の出来事で、どこからが夢や回想なのか。\nそしてそれをどう演じうるのか。\n――それらは読みのたびに揺れつづける。"}
            </p>
            <p>
              {"次第にこの集まりそのものが、批評でも記録でもない、別の一篇の「小説」へと変わっていく。\n約4万字の分量で描かれた固有の場、もうひとつの「リンチ」として。"}
            </p>
          </div>
        </div>
        <div className="h-20" />
      </div>
    </div>
  );
}
