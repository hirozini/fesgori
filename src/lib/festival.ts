import data from "@/data/festival.json";

export type Performance = (typeof data.performances)[number];
export type Venue = (typeof data.venues)[number];
export type TimetableEvent = (typeof data.timetable.events)[number];

export const festival = data.festival;
export const performances = data.performances;
export const venues = data.venues;
export const timetable = data.timetable;

export function getPerformance(id: string) {
  return performances.find((p) => p.id === id);
}

export function getVenue(id: string) {
  return venues.find((v) => v.id === id);
}
