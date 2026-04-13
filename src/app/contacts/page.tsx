"use client";

import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { SiHackthebox } from "react-icons/si";

const G = "#b8f000";
const P = "#c084fc";
const FONT = "'Space Mono', monospace";

const socials = [
  { icon: <FaInstagram size={16} />, label: "@nrmiraily", href: "https://www.instagram.com/nrmiraily/", color: P },
  { icon: <FaGithub    size={16} />, label: "Am1r4-nr", href: "https://github.com/Am1r4-nr", color: G },
  { icon: <FaLinkedinIn size={16} />, label: "Nur Amira Nabila", href: "https://www.linkedin.com/in/amiranabilarahman/", color: P },
  { icon: <SiHackthebox size={16} />, label: "HackTheBox", href: "https://profile.hackthebox.com/", color: G },
];

export default function ContactsPage() {
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
        <Link href="/" style={{ fontSize: 12, color: "var(--p-text-muted)", textDecoration: "none", letterSpacing: "0.04em" }}>
          ← back to home
        </Link>
      </nav>

      <div className="contacts-page-padding" style={{ maxWidth: 960, margin: "0 auto", padding: "72px 40px 100px" }}>

        {/* Heading */}
        <div style={{ marginBottom: 12 }}>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "var(--p-heading)", margin: 0 }}>
            <span style={{ color: P }}>/</span>contacts
          </h1>
        </div>
        <p style={{ fontSize: 12, color: "var(--p-text-muted)", marginBottom: 56 }}>Who am I?</p>

        {/* Main row */}
        <div className="contacts-main-row" style={{ display: "flex", gap: 64, alignItems: "flex-start", marginBottom: 80 }}>

          {/* Left: text */}
          <div className="contacts-text" style={{ flex: 1, maxWidth: 440 }}>
            <p style={{ fontSize: 12, lineHeight: 2.2, color: "var(--p-text-muted)" }}>
              I&apos;m interested in freelance opportunities and internship roles in
              Cybersecurity Analysis, SOC Operations, or Full-Stack Development.
              However, if you have any other request or question, don&apos;t hesitate
              to contact me.
            </p>
          </div>

          {/* Right: contact cards */}
          <div className="contacts-cards-row" style={{ display: "flex", gap: 16, flexShrink: 0 }}>

            {/* Message me */}
            <div style={{ border: `1.5px solid ${P}`, borderRadius: 2, padding: "20px 24px", minWidth: 220, background: `${P}0a` }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: P, marginBottom: 20 }}>Message me here</div>
              <a
                href="mailto:nrmira.nr@gmail.com"
                style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--p-text-muted)", fontSize: 11, textDecoration: "none", marginBottom: 14 }}
                onMouseEnter={e => (e.currentTarget.style.color = G)}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--p-text-muted)")}
              >
                <FaEnvelope size={14} color={G} />
                nrmira.nr@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/amiranabilarahman/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--p-text-muted)", fontSize: 11, textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = P)}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--p-text-muted)")}
              >
                <FaLinkedinIn size={14} color={P} />
                Nur Amira Nabila
              </a>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "var(--p-border)", marginBottom: 56 }} />

        {/* All media */}
        <div>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "var(--p-heading)", marginBottom: 32 }}>
            <span style={{ color: P }}>#</span>all-media
          </h2>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {socials.map(({ icon, label, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  border: `1.5px solid ${color}`, borderRadius: 2,
                  padding: "10px 18px", fontSize: 12, color: "var(--p-text-muted)",
                  textDecoration: "none", transition: "all 0.2s",
                  background: `${color}10`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = color;
                  e.currentTarget.style.background = `${color}25`;
                  e.currentTarget.style.boxShadow = `0 0 10px ${color}44`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "var(--p-text-muted)";
                  e.currentTarget.style.background = `${color}10`;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span style={{ color }}>{icon}</span>
                {label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
