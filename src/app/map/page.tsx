import { venues, performances } from "@/lib/festival";
import { VenueMap } from "@/components/VenueMap";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ACCESS — フェスティバルご理解ありがとうございます",
};

export default function MapPage() {
  const center = { lat: 35.708, lng: 139.718 };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-black mb-10">
        <span className="inline-block bg-yellow/40 px-3 py-1 rounded-md -rotate-2 border-2 border-black">
          会場マップ
        </span>
      </h1>

      {/* Map with pins */}
      <div className="aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden mb-10">
        <VenueMap venues={venues} center={center} />
      </div>

      {/* Venue cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {venues.map((venue) => {
          const venuePerformances = performances.filter(
            (p) => p.venueId === venue.id
          );
          return (
            <div key={venue.id} className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-bold mb-2">{venue.name}</h2>
              <p className="text-sm text-black/60 whitespace-pre-wrap">
                {venue.address}
              </p>
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
