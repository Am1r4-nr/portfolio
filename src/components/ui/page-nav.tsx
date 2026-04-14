"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const G = "#b8f000";
const P = "#c084fc";
const FONT = "'Space Mono', monospace";

const navLinks = [
  { label: "home",     href: "/"         },
  { label: "works",    href: "/works"    },
  { label: "projects", href: "/projects" },
  { label: "about-me", href: "/about"   },
  { label: "contacts", href: "/contacts" },
];

export default function PageNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="p-nav"
      style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "22px 56px", borderBottom: "1px solid var(--p-nav-border)",
        background: "var(--p-nav-bg)", position: "sticky", top: 0, zIndex: 10,
        fontFamily: FONT,
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, color: "var(--p-heading)", textDecoration: "none", flexShrink: 0 }}
      >
        <div style={{ width: 22, height: 22, border: `2px solid ${G}`, borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <div style={{ width: 9, height: 9, background: G, borderRadius: 1 }} />
        </div>
        Nabila Rahman
      </Link>

      {/* Desktop nav links */}
      <ul className="hidden md:flex" style={{ gap: 36, listStyle: "none", margin: 0, padding: 0 }}>
        {navLinks.map(link => {
          const active = pathname === link.href;
          return (
            <li key={link.label}>
              <Link
                href={link.href}
                style={{
                  fontSize: 13,
                  color: active ? "var(--p-heading)" : "var(--p-text-muted)",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                }}
              >
                <span style={{ color: P }}>#</span>{link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Hamburger — mobile only */}
      <button
        className="flex flex-col gap-[5px] md:hidden"
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
        style={{ background: "none", border: "none", cursor: "pointer", padding: 6, flexShrink: 0 }}
      >
        <span style={{ display: "block", width: 22, height: 3, borderRadius: 2, background: menuOpen ? P : "var(--p-heading)", transition: "background 0.2s" }} />
        <span style={{ display: "block", width: menuOpen ? 14 : 22, height: 3, borderRadius: 2, background: menuOpen ? P : "var(--p-heading)", transition: "all 0.2s" }} />
        <span style={{ display: "block", width: 22, height: 3, borderRadius: 2, background: menuOpen ? P : "var(--p-heading)", transition: "background 0.2s" }} />
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map(link => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ color: active ? "var(--p-heading)" : "var(--p-text-muted)", fontFamily: FONT, textDecoration: "none" }}
              >
                <span style={{ color: P }}>#</span>{link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
