import Link from "next/link";
import { performances, getVenue } from "@/lib/festival";
import { FallbackImage } from "@/components/FallbackImage";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return performances.map((p) => ({ id: p.id }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const p = performances.find((p) => p.id === id);
  return {
    title: p
      ? `${p.title} — フェスティバルご理解ありがとうございます`
      : "Not Found",
  };
}

export default async function ProgramDetailPage({ params }: Props) {
  const { id } = await params;
  const p = performances.find((perf) => perf.id === id);
  if (!p) notFound();

  const venue = getVenue(p.venueId);
  const imageSrc = p.image || `/images/programs/${p.id}.jpg`;
  const profileImageSrc = p.profileImage || `/images/profiles/${p.id}.jpg`;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Main image */}
      <div className="aspect-[16/9] relative bg-black/5 rounded-lg overflow-hidden mb-8">
        <FallbackImage
          src={imageSrc}
          alt={p.title}
          fill
          className={`object-cover ${p.id === "sakata" ? "object-bottom" : ""}`}
          style={p.id === "tsubure" ? { objectPosition: "center 20%" } : undefined}
          sizes="(max-width: 768px) 100vw, 800px"
          priority
        />
      </div>

      {/* Header */}
      <div className="space-y-3 mb-8">
        <p className="text-lg md:text-xl text-black font-bold">{p.artist}</p>
        <h1 className="text-3xl md:text-4xl font-black leading-tight">
          {p.title}
        </h1>
        <p className="text-lg text-black/70 font-medium">{p.catchcopy}</p>
      </div>

      {/* Co-performance link */}
      {p.id === "tsubure" && (
        <Link
          href="/program/sakai"
          className="block w-fit mb-3 bg-yellow/30 border-2 border-black rounded px-4 py-2 text-sm font-bold hover:bg-yellow/50 transition-colors"
        >
          同時上演「埒外の女」→
        </Link>
      )}
      {p.id === "sakai" && (
        <Link
          href="/program/tsubure"
          className="block w-fit mb-3 bg-yellow/30 border-2 border-black rounded px-4 py-2 text-sm font-bold hover:bg-yellow/50 transition-colors"
        >
          同時上演「ウィシュマ裁き」→
        </Link>
      )}

      {/* Reservation button */}
      {p.quartetUrl ? (
        <a
          href={p.quartetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-yellow px-10 py-4 text-base font-bold rounded hover:opacity-80 transition-opacity mb-10"
        >
          予約する
        </a>
      ) : (
        <p className="inline-block bg-black/10 text-black/40 px-10 py-4 text-base font-bold rounded mb-10">
          予約準備中
        </p>
      )}

      {/* Description */}
      <div className="mb-10">
        <p className="text-base leading-relaxed whitespace-pre-wrap">
          {p.id === "slopes"
            ? p.description.split("簡易××式骨声霊承のRVCモデル学習").map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <a
                      href="https://ymy6jnbuwsj7.blog.fc2.com/blog-entry-15.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-black/70 hover:text-black"
                    >
                      簡易××式骨声霊承のRVCモデル学習
                    </a>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )
            : p.description}
        </p>
      </div>

      {/* Info table */}
      <div className="bg-white rounded-lg p-6 mb-10">
        <h2 className="text-lg font-bold mb-4">公演情報</h2>
        <dl className="space-y-3 text-sm">
          {[
            { label: "スケジュール", value: p.schedule },
            { label: "上演時間", value: p.duration },
            { label: "会場", value: venue?.name },
            { label: "チケット", value: p.price || "未定" },
            { label: "定員", value: p.capacity || "未定" },
            { label: "出演", value: p.cast },
            { label: "スタッフ", value: p.staff },
            ...(p.id === "dracom" ? [{ label: "共催", value: "戸山公園サービスセンター" }] : []),
          ]
            .filter((row) => row.value)
            .map((row) => (
              <div key={row.label} className="flex gap-4">
                <dt className="text-black/50 min-w-[6em] shrink-0">
                  {row.label}
                </dt>
                <dd className="whitespace-pre-wrap">{row.value}</dd>
              </div>
            ))}
        </dl>
      </div>

      {/* Notes & Accessibility */}
      {(p.notes || p.accessibility || p.triggerWarning) && (
        <div className="space-y-4 mb-10">
          {p.notes && (
            <div className="bg-yellow/20 border border-yellow rounded-lg p-4">
              <p className="text-sm font-bold mb-2">注意事項</p>
              <ul className="text-sm space-y-1 list-disc list-inside">
                {p.notes.split("\n").filter(Boolean).map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
              </ul>
            </div>
          )}
          {p.accessibility && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm font-bold mb-1">アクセシビリティ</p>
              <p className="text-sm whitespace-pre-wrap">{p.accessibility}</p>
            </div>
          )}
        </div>
      )}

      {/* Profile */}
      {p.profile && (
        <div className="mb-10">
          <h2 className="text-lg font-bold mb-4">プロフィール</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-32 h-32 relative bg-black/5 rounded-lg overflow-hidden shrink-0">
              <FallbackImage
                src={profileImageSrc}
                alt={p.artist}
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-bold">{p.artist}</p>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">
                {p.profile}
              </p>
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-black/60 underline hover:text-black"
                >
                  {p.url}
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Venue info */}
      {venue && (
        <div className="bg-white rounded-lg p-6 mb-10">
          <h2 className="text-lg font-bold mb-3">会場</h2>
          <p className="font-bold">{venue.name}</p>
          <p className="text-sm text-black/60 whitespace-pre-wrap mt-1">
            {venue.address}
          </p>
          <div className="rounded-lg overflow-hidden mt-4 w-full" style={{ height: "300px" }}>
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(venue.id === "gcc" ? "東京都新宿区戸塚町1丁目103-18" : venue.name)}&output=embed&hl=ja&z=16`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={venue.name}
            />
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.id === "gcc" ? "東京都新宿区戸塚町1丁目103-18" : venue.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm underline text-black/60 hover:text-black"
          >
            Google Maps で開く
          </a>
        </div>
      )}

      <Link
        href="/program"
        className="inline-block text-sm text-black/50 hover:text-black underline"
      >
        ← 公演一覧に戻る
      </Link>
    </div>
  );
}
