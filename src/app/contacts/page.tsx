"use client";

import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { SiHackthebox } from "react-icons/si";

const G = "#b8f000";
const P = "#c084fc";
const FONT = "'Space Mono', monospace";

const socials = [
  { icon: <FaInstagram size={16} />, label: "@nrmiraily", href: "https://www.instagram.com/nrmiraily/", color: P },
  { icon: <FaGithub    size={16} />, label: "Am1r4-nr",       href: "https://github.com/Am1r4-nr", color: "#e0e2e8" },
  { icon: <FaLinkedinIn size={16} />, label: "Nur Amira Nabila", href: "https://www.linkedin.com/in/amiranabilarahman/", color: P },
  { icon: <SiHackthebox size={16} />, label: "HackTheBox", href: "https://profile.hackthebox.com/", color: G },
];

export default function ContactsPage() {
  return (
    <div style={{ fontFamily: FONT, color: "#c9cdd4", minHeight: "100vh" }}>

      {/* Nav */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "22px 56px", borderBottom: "1px solid #1f1f1f",
        background: "#000", position: "sticky", top: 0, zIndex: 10,
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, color: "#e0e2e8", textDecoration: "none" }}>
          <div style={{ width: 22, height: 22, border: `2px solid ${G}`, borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 9, height: 9, background: G, borderRadius: 1 }} />
          </div>
          Nabila Rahman
        </Link>
        <Link href="/" style={{ fontSize: 12, color: "#555", textDecoration: "none", letterSpacing: "0.04em" }}>
          ← back to home
        </Link>
      </nav>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "72px 40px 100px" }}>

        {/* Heading */}
        <div style={{ marginBottom: 12 }}>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "#e8eaf0", margin: 0 }}>
            <span style={{ color: P }}>/</span>contacts
          </h1>
        </div>
        <p style={{ fontSize: 12, color: "#555", marginBottom: 56 }}>Who am I?</p>

        {/* Main row */}
        <div style={{ display: "flex", gap: 64, alignItems: "flex-start", marginBottom: 80 }}>

          {/* Left: text */}
          <div style={{ flex: 1, maxWidth: 440 }}>
            <p style={{ fontSize: 12, lineHeight: 2.2, color: "#666" }}>
              I&apos;m interested in freelance opportunities and internship roles in
              Cybersecurity Analysis, SOC Operations, or Full-Stack Development.
              However, if you have any other request or question, don&apos;t hesitate
              to contact me.
            </p>
          </div>

          {/* Right: contact cards */}
          <div style={{ display: "flex", gap: 16, flexShrink: 0 }}>

            {/* Message me */}
            <div style={{ border: `1px solid #2a2a2a`, borderRadius: 2, padding: "20px 24px", minWidth: 220 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#e8eaf0", marginBottom: 20 }}>Message me here</div>
              <a
                href="mailto:nrmira.nr@gmail.com"
                style={{ display: "flex", alignItems: "center", gap: 10, color: "#888", fontSize: 11, textDecoration: "none", marginBottom: 14 }}
                onMouseEnter={e => (e.currentTarget.style.color = G)}
                onMouseLeave={e => (e.currentTarget.style.color = "#888")}
              >
                <FaEnvelope size={14} color={G} />
                nrmira.nr@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/amiranabilarahman/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 10, color: "#888", fontSize: 11, textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = P)}
                onMouseLeave={e => (e.currentTarget.style.color = "#888")}
              >
                <FaLinkedinIn size={14} color={P} />
                Nur Amira Nabila
              </a>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "#1f1f1f", marginBottom: 56 }} />

        {/* All media */}
        <div>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "#e8eaf0", marginBottom: 32 }}>
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
                  border: `1px solid #2a2a2a`, borderRadius: 2,
                  padding: "10px 18px", fontSize: 12, color: "#888",
                  textDecoration: "none", transition: "all 0.2s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = color;
                  e.currentTarget.style.color = color;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "#2a2a2a";
                  e.currentTarget.style.color = "#888";
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
