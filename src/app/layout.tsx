import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { festival } from "@/lib/festival";
import { MobileNav } from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "フェスティバルご理解ありがとうございます",
  description:
    "2026年6月2日〜8日、早稲田エリアで開催される上演芸術のフェスティバル",
  verification: {
    google: "0mRrMXbTd_B9NNtVGeWVySDa4xZlSgu4eVwH6YyURx0",
  },
  icons: {
    icon: "/favicon.jpg",
  },
  openGraph: {
    title: "フェスティバルご理解ありがとうございます",
    description: "2026年6月2日〜8日、早稲田エリアで開催される上演芸術のフェスティバル",
    images: [{ url: "/images/og/default.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og/default.png"],
  },
};

const navLinks = [
  { href: "/", label: "TOP" },
  { href: "/about", label: "ABOUT" },
  { href: "/program", label: "PROGRAM" },
  { href: "/timetable", label: "TIMETABLE" },
  { href: "/map", label: "ACCESS" },
  { href: "/book", label: "BOOK" },
  { href: "mailto:fesgori2026@gmail.com", label: "CONTACT" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700;800;900&family=Noto+Serif+JP:wght@400;700;900&family=Zen+Old+Mincho:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-cream text-black font-sans">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b-2 border-yellow">
          <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/">
              <Image
                src="/images/Title_left.png"
                alt="フェスごり"
                width={160}
                height={48}
                className="h-11 md:h-12 w-auto"
              />
            </Link>
            <nav className="hidden md:flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:opacity-60 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <MobileNav links={navLinks} />
          </div>
        </header>

        {/* Main */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer>
          <div className="bg-black text-white py-12">
            <div className="max-w-6xl mx-auto px-4 space-y-6">
              <div>
                <p className="text-lg font-bold text-yellow">{festival.name}</p>
                <p className="text-sm text-white/70 mt-1">{festival.nameEn}</p>
              </div>
              <p className="text-sm text-white/70">
                {festival.period}
              </p>
              <div className="text-xs text-white/50 space-y-1">
                <p>企画：{festival.credit.planning}</p>
                <p>企画協力：{festival.credit.planningCooperation}</p>
                <p>主催：{festival.credit.organizer}</p>
                <p>共催：{festival.credit.coOrganizer}</p>
                <p>協力：{festival.credit.cooperation}</p>
                <p>漫画・題字：八津田茂</p>
                <p>デザイン：山本浩貴＋ｈ（いぬのせなか座）</p>
              </div>
              <div className="flex gap-4 items-center text-white/50">
                <a href="https://x.com/fesgori" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors" aria-label="X (Twitter)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
                <a href="https://www.instagram.com/fesgori" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </a>
              </div>
              <div className="pt-4 border-t border-white/20 text-xs text-white/40">
                <p>お問い合わせ：<a href="mailto:fesgori2026@gmail.com" className="underline hover:text-white/60">fesgori2026@gmail.com</a></p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
