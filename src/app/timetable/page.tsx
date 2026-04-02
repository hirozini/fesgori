import Link from "next/link";
import { timetable, performances } from "@/lib/festival";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TIMETABLE — フェスティバルご理解ありがとうございます",
};

const underlineColor: Record<string, string> = {
  tezuka: "decoration-c-tezuka",
  dracom: "decoration-c-dracom",
  sakata: "decoration-amber-400",
  slopes: "decoration-c-slopes",
  tsubure: "decoration-purple-400",
  sakai: "decoration-c-sakai",
  hosoma: "decoration-c-hosoma",
};

function getTimeSlots(): string[] {
  const times = new Set(timetable.events.map((e) => e.time));
  return Array.from(times).sort();
}

export default function TimetablePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-black mb-10">
        <span className="inline-block bg-yellow/40 px-3 py-1 rounded-md rotate-2 border-2 border-black">
          タイムテーブル
        </span>
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
                      <div className={events.length > 1 ? "flex gap-3" : ""}>
                        {events.map((ev, i) => (
                          <Link
                            key={i}
                            href={`/program/${ev.performanceId}`}
                            className="block py-1 transition-opacity hover:opacity-60"
                          >
                            <p className={`font-bold text-xs underline decoration-2 underline-offset-2 ${underlineColor[ev.performanceId] || ""}`}>{ev.label}</p>
                            <p className="text-[11px] text-black/50">
                              {ev.venue}・{ev.duration}分
                            </p>
                            {"note" in ev && ev.note && (
                              <p className="text-[11px] text-black/40">
                                {ev.note}
                              </p>
                            )}
                          </Link>
                        ))}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: day timeline */}
      <div className="md:hidden space-y-10">
        {timetable.dates.map((d) => {
          const dayEvents = timetable.events
            .filter((e) => e.date === d.key)
            .sort((a, b) => a.time.localeCompare(b.time));
          if (dayEvents.length === 0) return null;

          // Group by time
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
              <h2 className="text-xl font-black mb-4 pb-2 border-b-3 border-yellow">
                {d.label}
              </h2>
              <div>
                {timeGroups.map((group, gi) => (
                  <div key={group.time}>
                    {gi > 0 && (
                      <div className="ml-6 h-6 border-l-2 border-dotted border-black/20" />
                    )}
                    <div className="flex items-start gap-4">
                      <span className="text-base font-bold w-14 shrink-0 pt-0.5">
                        {group.time}
                      </span>
                      <div className="flex-1 space-y-1">
                        {group.events.map((ev, i) => (
                          <Link
                            key={i}
                            href={`/program/${ev.performanceId}`}
                            className={`block py-1 transition-opacity hover:opacity-60 ${group.events.length > 1 ? "relative pl-3 border-l-2 border-yellow" : ""}`}
                          >
                            <p className={`font-bold text-sm underline decoration-2 underline-offset-2 ${underlineColor[ev.performanceId] || ""}`}>{ev.label}</p>
                            <p className="text-xs text-black/50">
                              {ev.venue}・{ev.duration}分
                            </p>
                            {"note" in ev && ev.note && (
                              <p className="text-xs text-black/40">
                                {ev.note}
                              </p>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
