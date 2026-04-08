import Link from "next/link";
import { festival } from "@/lib/festival";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "ABOUT — フェスティバルご理解ありがとうございます",
};
export default function AboutPage() {
  return (
    <div>
      {/* Yellow band */}
      <section className="bg-yellow py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-black">
            {festival.name}
          </h1>
          <p className="text-sm mt-2 opacity-70">{festival.nameEn}</p>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-16">
        {/* Overview */}
        <section>
          <p className="text-xl md:text-2xl font-bold leading-relaxed mb-8">
            <span className="inline-block border-b-3 border-yellow">「わかってくれてよかった」</span>――そう先に言っておくことでみんなが共有できるようになるものがある。しびれるほど楽しい「上演」たちが一堂に会する6月はじめの一週間！
          </p>
          <p className="text-base leading-relaxed whitespace-pre-wrap">
            {festival.overview.split("『リンチ（戯曲）――三部作』").map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <Link href="/book" className="underline hover:opacity-60">『リンチ（戯曲）――三部作』</Link>
                </span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </p>
        </section>
        {/* Statement */}
        <section>
          <h2 className="text-xl font-bold mb-4">
            <span className="inline-block bg-yellow/40 px-3 py-1 rounded-md rotate-1 border-2 border-black">ステートメント</span>
          </h2>
          <div className="space-y-4">
            {festival.statement.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <p className="mt-6 text-base text-black font-bold">
            {festival.statement.signature}
          </p>
        </section>
        {/* Period */}
        <section>
          <h2 className="text-xl font-bold mb-4">
            <span className="inline-block bg-yellow/40 px-3 py-1 rounded-md -rotate-2 border-2 border-black">期間</span>
          </h2>
          <p className="text-base leading-relaxed">
            {festival.period}
          </p>
        </section>
        {/* Credit */}
        <section>
          <h2 className="text-xl font-bold mb-4">
            <span className="inline-block bg-yellow/40 px-3 py-1 rounded-md rotate-2 border-2 border-black">クレジット</span>
          </h2>
          <dl className="space-y-2 text-base">
            <div className="flex gap-4">
              <dt className="text-black/50 min-w-[5em]">企画</dt>
              <dd>{festival.credit.planning}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="text-black/50 min-w-[5em]">企画協力</dt>
              <dd>{festival.credit.planningCooperation}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="text-black/50 min-w-[5em]">主催</dt>
              <dd>{festival.credit.organizer}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="text-black/50 min-w-[5em]">共催</dt>
              <dd>{festival.credit.coOrganizer}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="text-black/50 min-w-[5em]">協力</dt>
              <dd>{festival.credit.cooperation}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="text-black/50 min-w-[5em]">漫画・題字</dt>
              <dd>八津田茂</dd>
            </div>
            <div className="flex gap-4">
              <dt className="text-black/50 min-w-[5em]">デザイン</dt>
              <dd>山本浩貴＋ｈ（いぬのせなか座）</dd>
            </div>
          </dl>
        </section>
      </div>
    </div>
  );
}
