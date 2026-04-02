import Link from "next/link";
import type { Performance } from "@/lib/festival";
import { getVenue } from "@/lib/festival";
import { FallbackImage } from "./FallbackImage";

const tilts = ["-rotate-2", "rotate-1", "rotate-1", "-rotate-2", "-rotate-1", "rotate-1", "rotate-2"];

const borderColor: Record<string, string> = {
  tezuka: "border-c-tezuka/30",
  dracom: "border-c-dracom/30",
  sakata: "border-amber-200",
  slopes: "border-c-slopes/30",
  tsubure: "border-purple-200",
  sakai: "border-c-sakai/30",
  hosoma: "border-c-hosoma/30",
};

const underlineColor: Record<string, string> = {
  tezuka: "decoration-c-tezuka",
  dracom: "decoration-c-dracom",
  sakata: "decoration-amber-300",
  slopes: "decoration-c-slopes",
  tsubure: "decoration-purple-300",
  sakai: "decoration-c-sakai",
  hosoma: "decoration-c-hosoma",
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

  const underline = underlineColor[performance.id] || "";
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
        <p className={`text-xs text-black font-bold underline decoration-2 underline-offset-2 ${underline}`}>
          {performance.artist}
        </p>
        <h3 className="text-lg font-bold leading-tight">
          {performance.title}
        </h3>
        <p className="text-sm text-black/60">{performance.catchcopy}</p>
        <div className="pt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-black/50">
          <span>{performance.dates}</span>
          <span>{venue?.name}</span>

        </div>
      </div>
    </Link>
  );
}
