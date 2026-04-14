import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Boxes } from "@/components/ui/background-boxes";
import { LightPullThemeSwitcher } from "@/components/ui/light-pull-theme-switcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nur Amira Nabila — Portfolio",
  description: "Personal portfolio of Nur Amira Nabila, a passionate designer and developer crafting unique digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Restore theme before first paint to avoid flash */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var theme = localStorage.getItem('theme');
            if (theme === 'light') {
              document.documentElement.classList.remove('dark');
            } else {
              document.documentElement.classList.add('dark');
            }
          })();
        `}} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* ── Decorative background grid ── */}
        <div
          aria-hidden="true"
          style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 1 }}
        >
          <Boxes />
        </div>
        {/* ── Cat decoration — fixed left side ── */}
        {/* Dark mode cat */}
        <img
          src="/cat/darkmode.jpg"
          aria-hidden="true"
          className="dark-cat"
          style={{ position: 'fixed', left: 0, bottom: 0, zIndex: 0, pointerEvents: 'none', width: 180, height: 'auto', display: 'block', mixBlendMode: 'screen' }}
        />
        {/* Light mode cat */}
        <img
          src="/cat/lightmode.jpg"
          aria-hidden="true"
          className="light-cat"
          style={{ position: 'fixed', left: 0, bottom: 0, zIndex: 0, pointerEvents: 'none', width: 180, height: 'auto', display: 'none', mixBlendMode: 'multiply' }}
        />

        {/* ── Coffee — light mode only ── */}
        <img
          src="/cat/coffeelightmode.jpg"
          aria-hidden="true"
          className="light-cat"
          style={{ position: 'fixed', right: 80, bottom: '18%', zIndex: 0, pointerEvents: 'none', width: 130, height: 'auto', display: 'none', mixBlendMode: 'multiply' }}
        />
        {/* ── Spec — dark mode only ── */}
        <img
          src="/cat/specdarkmode.jpg"
          aria-hidden="true"
          className="dark-cat"
          style={{ position: 'fixed', right: 80, bottom: '18%', zIndex: 0, pointerEvents: 'none', width: 130, height: 'auto', display: 'block', mixBlendMode: 'screen', filter: 'invert(1)' }}
        />

        {/* ── Theme switcher — fixed below nav ── */}
        <div style={{ position: 'fixed', top: 66, right: 24, zIndex: 50 }}>
          <LightPullThemeSwitcher />
        </div>
        {/* ── All page content sits above the pattern ── */}
        <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
