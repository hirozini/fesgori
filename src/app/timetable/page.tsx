import Link from "next/link";
import { timetable, performances } from "@/lib/festival";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TIMETABLE — フェスティバルご理解ありがとうございます",
};

const colorMap: Record<string, string> = {
  tezuka: "bg-rose-100 border-rose-300 hover:bg-rose-200",
  dracom: "bg-sky-100 border-sky-300 hover:bg-sky-200",
  sakata: "bg-amber-100 border-amber-300 hover:bg-amber-200",
  slopes: "bg-emerald-100 border-emerald-300 hover:bg-emerald-200",
  tsubure: "bg-purple-100 border-purple-300 hover:bg-purple-200",
  sakai: "bg-pink-100 border-pink-300 hover:bg-pink-200",
  hosoma: "bg-indigo-100 border-indigo-300 hover:bg-indigo-200",
};

export default function TimetablePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-black mb-10">
        <span className="inline-block bg-yellow/40 px-3 py-1 rounded-md rotate-2 border-2 border-black">
          タイムテーブル
        </span>
      </h1>

      <div className="space-y-10">
        {timetable.dates.map((d) => {
          const dayEvents = timetable.events
            .filter((e) => e.date === d.key)
            .sort((a, b) => a.time.localeCompare(b.time));
          if (dayEvents.length === 0) return null;

          // Group events by time
          const timeGroups: { time: string; events: typeof dayEvents }[] = [];
          for (const ev of dayEvents) {
            const existing = timeGroups.find((g) => g.time === ev.time);
            if (existing) {
              existing.events.push(ev);
            } else {
              timeGroups.push({ time: ev.time, events: [ev] });
            }
          }

          return (
            <div key={d.key}>
              {/* Day header */}
              <h2 className="text-xl font-black mb-4 pb-2 border-b-3 border-yellow">
                {d.label}
              </h2>

              {/* Timeline */}
              <div className="space-y-3">
                {timeGroups.map((group) => {
                  const isOverlap = group.events.length > 1;
                  return (
                    <div
                      key={group.time}
                      className={
                        isOverlap
                          ? "grid grid-cols-1 sm:grid-cols-2 gap-2"
                          : ""
                      }
                    >
                      {group.events.map((ev, i) => (
                        <Link
                          key={i}
                          href={`/program/${ev.performanceId}`}
                          className={`block p-3 rounded-lg border-2 transition-colors ${
                            colorMap[ev.performanceId] ||
                            "bg-gray-100 border-gray-300"
                          } ${isOverlap ? "relative" : ""}`}
                        >
                          <div className="flex items-baseline gap-3">
                            <span className="text-base font-bold shrink-0">
                              {ev.time}
                            </span>
                            <span className="font-bold text-sm">
                              {ev.label}
                            </span>
                            {isOverlap && (
                              <span className="text-[10px] text-black/30 font-medium ml-auto">
                                同時刻
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-black/50 mt-1 ml-[3.8rem]">
                            {ev.venue}・{ev.duration}分
                          </p>
                          {"note" in ev && ev.note && (
                            <p className="text-xs text-black/40 mt-0.5 ml-[3.8rem]">
                              {ev.note}
                            </p>
                          )}
                        </Link>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
