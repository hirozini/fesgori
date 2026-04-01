import { venues, performances } from "@/lib/festival";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "MAP — フェスティバルご理解ありがとうございます",
};
export default function MapPage() {
  const center = { lat: 35.708, lng: 139.718 };
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-black mb-10">
        会場マップ
      </h1>
      {/* Google Maps embed */}
      <div className="aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden mb-10">
        <iframe
          src={`https://www.google.com/maps/embed/v1/view?key=&center=${center.lat},${center.lng}&zoom=16`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="会場マップ"
        />
      </div>
      {/* Venue cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {venues.map((venue) => {
          const venuePerformances = performances.filter(
            (p) => p.venueId === venue.id
          );
          return (
            <div key={venue.id} className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-bold mb-2">
                {venue.name}
              </h2>
              <p className="text-sm text-black/60 whitespace-pre-wrap">
                {venue.address}
              </p>
              {venue.hours && (
                <p className="text-sm text-black/50 mt-1">
                  開館時間：{venue.hours}
                </p>
              )}
              {venuePerformances.length > 0 && (
                <div className="mt-4 pt-3 border-t border-black/10">
                  <p className="text-xs text-black/40 font-bold mb-2">
                    この会場の公演
                  </p>
                  <ul className="space-y-1">
                    {venuePerformances.map((p) => (
                      <li key={p.id}>
                        <a
                          href={`/program/${p.id}`}
                          className="text-sm hover:underline"
                        >
                          {p.artist}『{p.title}』
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <a
                href={`https://www.google.com/maps?q=${venue.lat},${venue.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm underline text-black/60 hover:text-black"
              >
                Google Maps で開く
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
