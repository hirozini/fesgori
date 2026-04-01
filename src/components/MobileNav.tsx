"use client";

import Link from "next/link";
import { useState } from "react";

type Props = {
  links: { href: string; label: string }[];
};

export function MobileNav({ links }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 -mr-2"
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={open}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          {open ? (
            <path d="M6 6l12 12M6 18L18 6" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      {open && (
        <nav className="absolute top-14 left-0 right-0 bg-cream border-b border-black/10 py-4 px-4 space-y-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-base font-medium py-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
