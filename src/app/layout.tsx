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
};

const navLinks = [
  { href: "/", label: "TOP" },
  { href: "/about", label: "ABOUT" },
  { href: "/program", label: "PROGRAM" },
  { href: "/timetable", label: "TIMETABLE" },
  { href: "/map", label: "MAP" },
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
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-cream text-black font-sans">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-black/10">
          <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/">
              <Image
                src="/images/Title_left.png"
                alt="フェスごり"
                width={160}
                height={48}
                className="h-10 w-auto"
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
              <p className="text-lg font-bold text-yellow">{festival.name}</p>
              <p className="text-sm text-white/70">{festival.nameEn}</p>
              <p className="text-sm text-white/70">
                {festival.period}　{festival.area}
              </p>
              <div className="text-xs text-white/50 space-y-1">
                <p>企画：{festival.credit.planning}</p>
                <p>主催：{festival.credit.organizer}</p>
                <p>共催：{festival.credit.coOrganizer}</p>
                <p>協力：{festival.credit.cooperation}</p>
                <p>企画協力：{festival.credit.planningCooperation}</p>
              </div>
              <div className="pt-4 border-t border-white/20 text-xs text-white/40">
                <p>お問い合わせ：fesgori@example.com</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
