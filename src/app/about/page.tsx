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
            「わかってくれてよかった」――そう先に言っておくことでみんなが共有できるようになるものがある。しびれるほど楽しい「上演」たちが一堂に会する6月はじめの一週間！
          </p>
          <p className="text-base leading-relaxed">{festival.overview}</p>
        </section>
        {/* Statement */}
        <section>
          <h2 className="text-xl font-bold mb-4">
            ステートメント
          </h2>
          <div className="space-y-4">
            {festival.statement.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <p className="mt-6 text-sm text-black/50">
            {festival.statement.signature}
          </p>
          <p className="text-xs text-black/40 mt-1">
            {festival.statement.updatedAt} 更新
          </p>
        </section>
        {/* Period */}
        <section>
          <h2 className="text-xl font-bold mb-4">
            期間
          </h2>
          <p className="text-lg font-bold">
            {festival.period}
          </p>
        </section>
        {/* Credit */}
        <section>
          <h2 className="text-xl font-bold mb-4">
            クレジット
          </h2>
          <dl className="space-y-2 text-base">
            <div className="flex gap-4">
              <dt className="text-black/50 min-w-[5em]">企画</dt>
              <dd>{festival.credit.planning}</dd>
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
              <dt className="text-black/50 min-w-[5em]">企画協力</dt>
              <dd>{festival.credit.planningCooperation}</dd>
            </div>
          </dl>
        </section>
        {/* Lynch link */}
        <section className="bg-yellow/30 p-6 rounded-lg">
          <p className="text-sm font-medium">
            戯曲集『リンチ』特設ページは現在準備中です。
          </p>
        </section>
      </div>
    </div>
  );
}
