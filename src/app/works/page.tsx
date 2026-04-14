"use client";

import Link from "next/link";

const G = "#b8f000";
const P = "#c084fc";
const FONT = "'Space Mono', monospace";

export default function WorksPage() {
  return (
    <div style={{ fontFamily: FONT, color: "var(--p-text)", minHeight: "100vh" }}>

      {/* Nav */}
      <nav className="p-nav" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "22px 56px", borderBottom: "1px solid var(--p-nav-border)",
        background: "var(--p-nav-bg)", position: "sticky", top: 0, zIndex: 10,
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, color: "var(--p-heading)", textDecoration: "none", flexShrink: 0 }}>
          <div style={{ width: 22, height: 22, border: `2px solid ${G}`, borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 9, height: 9, background: G, borderRadius: 1 }} />
          </div>
          Nabila Rahman
        </Link>
        <Link href="/" style={{ fontSize: 12, color: "var(--p-text-muted)", textDecoration: "none", letterSpacing: "0.04em", flexShrink: 0 }}>
          ← back to home
        </Link>
      </nav>

      <div className="about-page-padding" style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 40px 100px" }}>

        {/* Page heading */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: "var(--p-heading)", margin: 0 }}>
            <span style={{ color: P }}>#</span>works
          </h1>
          <div style={{ height: 1, width: 160, background: G, flexShrink: 0 }} />
        </div>

      </div>
    </div>
  );
}
