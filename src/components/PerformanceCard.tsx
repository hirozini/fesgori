import Link from "next/link";
import type { Performance } from "@/lib/festival";
import { getVenue } from "@/lib/festival";
import { FallbackImage } from "./FallbackImage";

const tilts = ["-rotate-2", "rotate-1", "rotate-1", "-rotate-2", "-rotate-1", "rotate-1", "rotate-2"];

const borderColor: Record<string, string> = {
  tezuka: "border-rose-100",
  dracom: "border-sky-100",
  sakata: "border-amber-100",
  slopes: "border-emerald-100",
  tsubure: "border-purple-100",
  sakai: "border-pink-100",
  hosoma: "border-indigo-100",
};

const textColor: Record<string, string> = {
  tezuka: "text-rose-300",
  dracom: "text-sky-300",
  sakata: "text-amber-300",
  slopes: "text-emerald-300",
  tsubure: "text-purple-300",
  sakai: "text-pink-300",
  hosoma: "text-indigo-300",
};

type Props = {
  performance: Performance;
  index?: number;
};

export function PerformanceCard({ performance, index = 0 }: Props) {
  const tilt = tilts[index % tilts.length];
  const venue = getVenue(performance.venueId);
  const imageSrc =
    performance.image || `/images/programs/${performance.id}.jpg`;

  const metaColor = textColor[performance.id] || "text-black/50";
  const border = borderColor[performance.id] || "border-gray-100";

  return (
    <Link
      href={`/program/${performance.id}`}
      className={`group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border-2 ${border} ${tilt} hover:rotate-0`}
    >
      <div className="aspect-[4/3] relative bg-black/5 overflow-hidden">
        <FallbackImage
          src={imageSrc}
          alt={performance.title}
          fill
          className={`object-cover group-hover:scale-105 transition-transform duration-300 ${performance.id === "tsubure" ? "object-top" : performance.id === "sakata" ? "object-bottom" : ""}`}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-4 space-y-2">
        <p className="text-xs text-black font-bold">
          {performance.artist}
        </p>
        <h3 className="text-lg font-bold leading-tight">
          {performance.title}
        </h3>
        <p className="text-sm text-black/60">{performance.catchcopy}</p>
        <div className={`pt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium ${metaColor}`}>
          <span>{performance.dates}</span>
          <span>{venue?.name}</span>

        </div>
      </div>
    </Link>
  );
}
