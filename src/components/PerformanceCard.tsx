import Link from "next/link";
import type { Performance } from "@/lib/festival";
import { getVenue } from "@/lib/festival";
import { FallbackImage } from "./FallbackImage";

type Props = {
  performance: Performance;
};

export function PerformanceCard({ performance }: Props) {
  const venue = getVenue(performance.venueId);
  const imageSrc =
    performance.image || `/images/programs/${performance.id}.jpg`;

  return (
    <Link
      href={`/program/${performance.id}`}
      className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="aspect-[4/3] relative bg-black/5 overflow-hidden">
        <FallbackImage
          src={imageSrc}
          alt={performance.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-4 space-y-2">
        <p className="text-xs text-black/50 font-medium">
          {performance.artist}
        </p>
        <h3 className="text-lg font-bold leading-tight">
          {performance.title}
        </h3>
        <p className="text-sm text-black/60">{performance.catchcopy}</p>
        <div className="pt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-black/50">
          <span>{performance.dates}</span>
          <span>{venue?.name}</span>
          {performance.price && <span>{performance.price}</span>}
        </div>
      </div>
    </Link>
  );
}
