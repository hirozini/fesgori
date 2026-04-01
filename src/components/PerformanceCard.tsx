import Link from "next/link";
import type { Performance } from "@/lib/festival";
import { getVenue } from "@/lib/festival";
import { FallbackImage } from "./FallbackImage";

type Props = {
  performance: Performance;
  featured?: boolean;
};

export function PerformanceCard({ performance, featured }: Props) {
  const venue = getVenue(performance.venueId);
  const imageSrc =
    performance.image || `/images/programs/${performance.id}.jpg`;

  return (
    <Link
      href={`/program/${performance.id}`}
      className="group block bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-b-4 border-transparent hover:border-yellow"
    >
      <div
        className={`relative bg-black/5 overflow-hidden ${featured ? "aspect-[2/1]" : "aspect-[3/2]"}`}
      >
        <FallbackImage
          src={imageSrc}
          alt={performance.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes={featured ? "(max-width: 768px) 100vw, 100vw" : "(max-width: 768px) 100vw, 50vw"}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-yellow/10 transition-colors duration-300" />
      </div>
      <div className={`${featured ? "p-6" : "p-4"} space-y-2`}>
        <p className="text-xs text-black/50 font-medium tracking-wider uppercase">
          {performance.artist}
        </p>
        <h3
          className={`font-bold leading-tight ${featured ? "text-2xl md:text-3xl" : "text-lg"}`}
        >
          {performance.title}
        </h3>
        <p className={`text-black/60 ${featured ? "text-base" : "text-sm"}`}>
          {performance.catchcopy}
        </p>
        <div className="pt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-black/40">
          <span>{performance.dates}</span>
          <span>{venue?.name}</span>
          {performance.price && <span>{performance.price}</span>}
        </div>
      </div>
    </Link>
  );
}
