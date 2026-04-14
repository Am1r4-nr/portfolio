"use client";

import Link from "next/link";
import { ProjectCard } from "@/components/ui/project-card";

const G = "#b8f000";
const P = "#c084fc";
const FONT = "'Space Mono', monospace";

const projects = [
  {
    title: "E-Doptcat",
    description:
      "A real-time cat adoption and rescue management system built for IIUM's Abu Hurairah Club. Integrated geospatial tracking, QR-based cat profiles, and secure donation management via FPX. Awarded 2nd Place for Real-World Impact at IIUM FYP Showcase, January 2026.",
    imgSrc:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop",
    link: "#",
    linkText: "Final Year Project — IIUM 2025",
    tags: ["Laravel/PHP", "MySQL", "Geospatial", "QR Code", "FPX"],
  },
  {
    title: "WordPress Research Website",
    description:
      "Designed and developed a WordPress website for IIUM's Research Unit 3: Information System, Internet and Governance. Produced two distinct design proposals with different colour themes, sitemaps, and page layouts for client evaluation.",
    imgSrc:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
    link: "#",
    linkText: "Web Design & Development — IIUM 2025",
    tags: ["WordPress", "HTML", "CSS", "UI/UX", "Figma"],
  },
  {
    title: "CTF — Girls in Capture the Flag 2024",
    description:
      "Achieved Rank 17 out of all participants at Girls in CTF 2024, competing under team RE:HACK. Solved challenges across web exploitation, reverse engineering, cryptography, and forensics.",
    imgSrc:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    linkText: "Rank 17 — May 2024",
    tags: ["Web Exploit", "Reverse Eng.", "Cryptography", "Forensics"],
  },
  {
    title: "CTF — Girls in Capture the Flag 2025",
    description:
      "Placed Rank 50 at Girls in CTF 2025 (RE:UN10N). Tackled advanced cybersecurity challenges including binary exploitation, OSINT, and steganography under competitive time pressure.",
    imgSrc:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    linkText: "Rank 50 — 2025",
    tags: ["Binary Exploit", "OSINT", "Steganography", "RE:UN10N"],
  },
  {
    title: "CTF — UM CyberSecurity Summit 2025",
    description:
      "Ranked 76 in the Preliminary Round of the UM CyberSecurity Summit CTF 2025, competing as part of RE:HACK. Demonstrated skills in network analysis, password cracking, and vulnerability assessment.",
    imgSrc:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    link: "#",
    linkText: "Rank 76 — 2025",
    tags: ["Network Analysis", "hashcat", "Nmap", "Wireshark"],
  },
  {
    title: "DEADFACE CTF 2025",
    description:
      "Participated in DEADFACE CTF 2025 under Cyber Hacktics, focusing on forensics, SQL injection, and reverse engineering challenges in a Halloween-themed international competition.",
    imgSrc:
      "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    linkText: "Cyber Hacktics — 2025",
    tags: ["Forensics", "SQL Injection", "Reverse Eng.", "CTF"],
  },
];

export default function ProjectsPage() {
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

        {/* Heading */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: "var(--p-heading)", margin: 0 }}>
            <span style={{ color: P }}>#</span>projects
          </h1>
          <div style={{ height: 1, width: 160, background: G, flexShrink: 0 }} />
        </div>
        <p style={{ fontSize: 12, color: "var(--p-text-muted)", marginBottom: 56, letterSpacing: "0.04em" }}>
          A collection of academic projects, CTF competitions, and development work.
        </p>

        {/* Grid */}
        <div className="about-skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {projects.map((p) => (
            <div key={p.title} style={{ display: "flex", flexDirection: "column" }}>
              <ProjectCard
                title={p.title}
                description={p.description}
                imgSrc={p.imgSrc}
                link={p.link}
                linkText={p.linkText}
              />
              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 10,
                      padding: "3px 8px",
                      borderRadius: 2,
                      border: `1px solid ${G}66`,
                      color: G,
                      background: `${G}0d`,
                      fontFamily: FONT,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
