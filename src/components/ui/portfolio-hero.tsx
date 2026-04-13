"use client";

import { useState } from "react";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiHackthebox } from "react-icons/si";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

const G    = "#b8f000";
const P    = "#c084fc";
const BD   = "#1f1f1f";
const FONT = "'Space Mono', monospace";

const navLinks = [
  { label: "home",     href: "#", active: true  },
  { label: "works",    href: "#", active: false },
  { label: "about-me", href: "#", active: false },
  { label: "contacts", href: "#", active: false },
];

const socials = [
  { icon: <FaInstagram  size={20} />, href: "https://www.instagram.com/nrmiraily/", color: P },
  { icon: <FaGithub     size={20} />, href: "https://github.com/Am1r4-nr", color: "#e0e2e8"  },
  { icon: <SiHackthebox size={20} />, href: "https://profile.hackthebox.com/", color: G },
  { icon: <FaLinkedinIn size={20} />, href: "https://www.linkedin.com/in/amiranabilarahman/", color: P },
];

export default function PortfolioHero() {
  const [hoverBtn, setHoverBtn] = useState(false);

  return (
    <div style={{ background: "transparent", color: "#c9cdd4", fontFamily: FONT, minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* ── Nav ── */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "22px 56px", borderBottom: `1px solid ${BD}`,
        flexShrink: 0, background: "#000", position: "relative", zIndex: 10,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, color: "#e0e2e8" }}>
          <div style={{ width: 22, height: 22, border: `2px solid ${G}`, borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div style={{ width: 9, height: 9, background: G, borderRadius: 1 }} />
          </div>
          Nabila Rahman
        </div>
        <ul style={{ display: "flex", gap: 36, listStyle: "none", margin: 0, padding: 0 }}>
          {navLinks.map(link => (
            <li key={link.label}>
              <a href={link.href} style={{ fontSize: 13, color: link.active ? "#e0e2e8" : "#555", textDecoration: "none", letterSpacing: "0.04em" }}>
                <span style={{ color: P }}>#</span>{link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Body ── */}
      <div style={{ position: "relative", flex: 1, display: "flex", background: "transparent" }}>

        {/* Left sidebar — center aligned to 2nd grid line (100vw/32) */}
        <div style={{ width: 'calc(100vw / 16)', flexShrink: 0, position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* vertical line */}
          <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: 1, background: "#222", transform: "translateX(-50%)" }} />
          {/* icons */}
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 48, gap: 32 }}>
            {socials.map(({ icon, href, color }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid #2a2a2a", background: "#000", display: "flex", alignItems: "center", justifyContent: "center", color, textDecoration: "none", transition: "border-color 0.2s, box-shadow 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.boxShadow = `0 0 8px ${color}55`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#2a2a2a"; e.currentTarget.style.boxShadow = "none"; }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 80px", gap: 64 }}>

          {/* ── Left: text ── */}
          <div style={{ maxWidth: 520, height: 340, display: "flex", flexDirection: "column", gap: 14 }}>
            <p style={{ fontSize: 13, color: "#555", margin: 0, letterSpacing: "0.05em" }}>
              // cybersecurity student &amp; developer
            </p>

            <h1 style={{ fontSize: "clamp(28px, 3vw, 50px)", fontWeight: 700, lineHeight: 1.1, color: "#e8eaf0", margin: 0, fontFamily: FONT }}>
              Nabila Rahman <span style={{ color: P }}>creative, dedicated</span>
            </h1>
            <GooeyText
              texts={["front-end developer", "cybersecurity student", "UI/UX designer", "CTF competitor"]}
              morphTime={1.5}
              cooldownTime={2}
              className="h-[clamp(34px,3.5vw,58px)] my-4"
              textClassName="font-bold"
              textStyle={{ fontSize: "clamp(28px, 3vw, 50px)", color: G, fontFamily: FONT }}
            />

            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.9, maxWidth: 440, margin: 0 }}>
              Designing human experiences in code — where bold ideas meet clean execution.
            </p>

            <a
              href="/contacts"
              onMouseEnter={() => setHoverBtn(true)}
              onMouseLeave={() => setHoverBtn(false)}
              style={{
                fontFamily: FONT, fontSize: 12,
                color: hoverBtn ? G : "#e8eaf0",
                border: `1px solid ${hoverBtn ? G : "#555"}`,
                padding: "10px 24px", borderRadius: 2,
                cursor: "pointer", alignSelf: "flex-start",
                background: hoverBtn ? "#0d1200" : "transparent",
                letterSpacing: "0.05em",
                transition: "all 0.2s",
                marginTop: "auto",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Contact me !!
            </a>
          </div>

          {/* ── Right: photo ── */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 28, position: "relative", flexShrink: 0, paddingTop: 0 }}>
            <div style={{ position: "relative" }}>

              {/* Decorative rectangles */}
              <svg style={{ position: "absolute", top: -16, right: -56, opacity: 0.85 }} width="100" height="88" viewBox="0 0 100 88" fill="none">
                <rect x="1" y="1" width="44" height="38" rx="1" stroke={P} strokeWidth="1.2" fill="none"/>
                <rect x="24" y="22" width="44" height="38" rx="1" stroke={G} strokeWidth="1.2" fill="none"/>
                <rect x="52" y="44" width="44" height="38" rx="1" stroke={P} strokeWidth="0.7" fill="none" opacity="0.4"/>
              </svg>

              {/* Photo */}
              <div style={{
                width: 340, height: 340,
                borderRadius: "50%",
                border: `3px solid ${G}`,
                boxShadow: `0 0 0 8px #1a1f00, 0 0 40px ${G}22`,
                overflow: "hidden",
                background: "#111",
                flexShrink: 0,
              }}>
                <img
                  src="/profile/Amira.png"
                  alt="Nabila Rahman"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Dot grid */}
              <div style={{ position: "absolute", bottom: -24, right: -32, display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 7 }}>
                {["#222","#222",`${G}55`,"#222","#222",
                  `${P}55`,"#222","#222","#222",`${G}55`,
                  "#222","#222",`${P}55`,"#222","#222",
                ].map((bg, i) => (
                  <div key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: bg }} />
                ))}
              </div>
            </div>

            {/* Status badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#0a0a0a", border: `1px solid ${BD}`, borderRadius: 4, padding: "10px 18px", fontSize: 12, color: "#c9cdd4" }}>
              <div style={{ width: 11, height: 11, background: P, borderRadius: 2, flexShrink: 0 }} />
              Currently searching for <strong style={{ color: "#e8eaf0", marginLeft: 5 }}>Internship</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
