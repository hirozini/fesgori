"use client";

import { useEffect, useRef } from "react";

type Venue = {
  name: string;
  lat: number;
  lng: number;
};

type Props = {
  venues: Venue[];
  center: { lat: number; lng: number };
  zoom?: number;
};

export function VenueMap({ venues, center, zoom = 16 }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    let map: L.Map;

    import("leaflet").then((L) => {
      if (!mapRef.current) return;

      map = L.map(mapRef.current).setView([center.lat, center.lng], zoom);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const icon = L.divIcon({
        className: "",
        html: `<div style="
          width: 28px; height: 28px;
          background: #fff173;
          border: 3px solid #1a1a1a;
          border-radius: 50%;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        "></div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      });

      venues.forEach((venue) => {
        L.marker([venue.lat, venue.lng], { icon })
          .addTo(map)
          .bindPopup(`<strong>${venue.name}</strong>`);
      });
    });

    return () => {
      if (map) map.remove();
    };
  }, [venues, center, zoom]);

  return <div ref={mapRef} className="w-full h-full" />;
}
