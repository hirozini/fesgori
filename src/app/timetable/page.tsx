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
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-black mb-10">
        タイムテーブル
      </h1>
      {/* Desktop: grid table */}
      <div className="hidden md:block overflow-x-auto mb-12">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="p-3 text-left border-b-2 border-black/20 min-w-[80px]">
                時間
              </th>
              {timetable.dates.map((d) => (
                <th
                  key={d.key}
                  className="p-3 text-left border-b-2 border-black/20 min-w-[120px]"
                >
                  {d.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {getTimeSlots().map((time) => (
              <tr key={time} className="border-b border-black/5">
                <td className="p-3 font-medium text-black/50 align-top">
                  {time}
                </td>
                {timetable.dates.map((d) => {
                  const events = timetable.events.filter(
                    (e) => e.date === d.key && e.time === time
                  );
                  return (
                    <td key={d.key} className="p-2 align-top">
                      <div className="space-y-1">
                        {events.map((ev, i) => {
                          const perf = performances.find(
                            (p) => p.id === ev.performanceId
                          );
                          return (
                            <Link
                              key={i}
                              href={`/program/${ev.performanceId}`}
                              className={`block p-2 rounded border text-xs transition-colors ${colorMap[ev.performanceId] || "bg-gray-100 border-gray-300"}`}
                            >
                              <p className="font-bold">{ev.label}</p>
                              <p className="text-black/50">
                                {ev.venue}・{ev.duration}分
                              </p>
                              {"note" in ev && ev.note && (
                                <p className="text-black/40 mt-0.5">
                                  {ev.note}
                                </p>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mobile: day cards */}
      <div className="md:hidden space-y-8">
        {timetable.dates.map((d) => {
          const dayEvents = timetable.events
            .filter((e) => e.date === d.key)
            .sort((a, b) => a.time.localeCompare(b.time));
          if (dayEvents.length === 0) return null;
          return (
            <div key={d.key}>
              <h2 className="text-lg font-bold mb-3 pb-2 border-b-2 border-yellow">
                {d.label}
              </h2>
              <div className="space-y-2">
                {dayEvents.map((ev, i) => (
                  <Link
                    key={i}
                    href={`/program/${ev.performanceId}`}
                    className={`block p-3 rounded border transition-colors ${colorMap[ev.performanceId] || "bg-gray-100 border-gray-300"}`}
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="text-base font-bold min-w-[3.5em]">
                        {ev.time}
                      </span>
                      <div>
                        <p className="font-bold text-sm">{ev.label}</p>
                        <p className="text-xs text-black/50">
                          {ev.venue}・{ev.duration}分
                        </p>
                        {"note" in ev && ev.note && (
                          <p className="text-xs text-black/40">{ev.note}</p>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
function getTimeSlots(): string[] {
  const times = new Set(timetable.events.map((e) => e.time));
  return Array.from(times).sort();
}
