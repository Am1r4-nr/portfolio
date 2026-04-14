"use client";

import Link from "next/link";
import { ProjectCard } from "@/components/ui/project-card";

const G = "#b8f000";
const P = "#c084fc";
const FONT = "'Space Mono', monospace";

const devProjects = [
  {
    title: "E-Doptcat",
    description:
      "Real-time cat adoption & rescue management system for IIUM's Abu Hurairah Club. Features geospatial tracking, QR-based cat profiles, and secure FPX donation. Awarded 2nd Place for Real-World Impact at IIUM FYP Showcase 2026.",
    imgSrc:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop",
    link: "https://my-edopt-cat.vercel.app",
    linkText: "Live Demo ↗",
    github: "https://github.com/Am1r4-nr/my_edopt-cat",
    tags: ["JavaScript", "Laravel/PHP", "MySQL", "Geospatial", "FPX"],
  },
  {
    title: "Laravel Auth Project",
    description:
      "Full-stack Laravel application built following Laracasts, featuring user authentication, Eloquent ORM, Blade templating, and Tailwind CSS. Covers routing, middleware, migrations, and form validation.",
    imgSrc:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop",
    link: "https://github.com/Am1r4-nr/laracast_proj",
    linkText: "View on GitHub ↗",
    github: "https://github.com/Am1r4-nr/laracast_proj",
    tags: ["Laravel", "PHP", "Blade", "Tailwind CSS", "MySQL"],
  },
  {
    title: "WordPress Research Website",
    description:
      "Designed and developed a WordPress website for IIUM's Research Unit 3: Information System, Internet and Governance. Produced two distinct design proposals with different colour themes, sitemaps, and page layouts.",
    imgSrc:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
    link: "#",
    linkText: "Academic Project",
    github: null,
    tags: ["WordPress", "HTML", "CSS", "UI/UX", "Figma"],
  },
  {
    title: "PHP RunCloud Assessment",
    description:
      "Simple PHP web application built for a RunCloud technical assessment. Demonstrates core PHP concepts including form handling, server-side validation, and dynamic content rendering.",
    imgSrc:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    link: "https://github.com/Am1r4-nr/php-simple-project-for-runcloud-assessment",
    linkText: "View on GitHub ↗",
    github: "https://github.com/Am1r4-nr/php-simple-project-for-runcloud-assessment",
    tags: ["PHP", "HTML", "CSS", "Server-side"],
  },
  {
    title: "Bank Account System",
    description:
      "Java object-oriented program simulating a bank account system. Implements core OOP principles — encapsulation, inheritance, and polymorphism — with deposit, withdrawal, and balance checking features.",
    imgSrc:
      "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=2070&auto=format&fit=crop",
    link: "https://github.com/Am1r4-nr/BankAccount",
    linkText: "View on GitHub ↗",
    github: "https://github.com/Am1r4-nr/BankAccount",
    tags: ["Java", "OOP", "Encapsulation", "Inheritance"],
  },
  {
    title: "BMI Checker",
    description:
      "Java-based BMI calculator that takes user height and weight as input and returns the BMI value with a health classification. Built as a practical Java fundamentals exercise.",
    imgSrc:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    link: "https://github.com/Am1r4-nr/bmi-checker",
    linkText: "View on GitHub ↗",
    github: "https://github.com/Am1r4-nr/bmi-checker",
    tags: ["Java", "CLI", "Health", "Fundamentals"],
  },
];

const ctfProjects = [
  {
    title: "Malware Workshop",
    description:
      "PowerShell scripts used in a cybersecurity malware analysis workshop. Covers malware behaviour simulation, process monitoring, and defensive scripting techniques in a controlled lab environment.",
    imgSrc:
      "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop",
    link: "https://github.com/Am1r4-nr/malwareworkshop",
    linkText: "View on GitHub ↗",
    github: "https://github.com/Am1r4-nr/malwareworkshop",
    tags: ["PowerShell", "Malware Analysis", "Defensive", "Workshop"],
  },
  {
    title: "Girls in CTF 2024",
    description:
      "Ranked 17th at Girls in CTF 2024 (RE:HACK). Solved challenges across web exploitation, reverse engineering, cryptography, and forensics in a competitive all-female cybersecurity tournament.",
    imgSrc:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    linkText: "Rank 17 — May 2024",
    github: null,
    tags: ["Web Exploit", "Reverse Eng.", "Cryptography", "Forensics"],
  },
  {
    title: "Girls in CTF 2025",
    description:
      "Placed Rank 50 at Girls in CTF 2025 (RE:UN10N). Tackled advanced challenges including binary exploitation, OSINT, and steganography under competitive time pressure.",
    imgSrc:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    linkText: "Rank 50 — 2025",
    github: null,
    tags: ["Binary Exploit", "OSINT", "Steganography", "RE:UN10N"],
  },
  {
    title: "UM CyberSecurity Summit CTF 2025",
    description:
      "Ranked 76 in the Preliminary Round of UM CyberSecurity Summit CTF 2025 (RE:HACK). Demonstrated skills in network analysis, password cracking with hashcat, and vulnerability assessment.",
    imgSrc:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    link: "#",
    linkText: "Rank 76 — 2025",
    github: null,
    tags: ["Network Analysis", "hashcat", "Nmap", "Wireshark"],
  },
  {
    title: "DEADFACE CTF 2025",
    description:
      "Participated in DEADFACE CTF 2025 under Cyber Hacktics — a Halloween-themed international competition. Focused on forensics, SQL injection, and reverse engineering challenges.",
    imgSrc:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    linkText: "Cyber Hacktics — 2025",
    github: null,
    tags: ["Forensics", "SQL Injection", "Reverse Eng.", "CTF"],
  },
];

function SectionHeading({ tag, line = 120 }: { tag: string; line?: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 36 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--p-heading)", margin: 0, fontFamily: FONT, whiteSpace: "nowrap" }}>
        <span style={{ color: P }}>#</span>{tag}
      </h2>
      <div style={{ height: 1, width: line, background: G, flexShrink: 0 }} />
    </div>
  );
}

function ProjectGrid({ items }: { items: typeof devProjects }) {
  return (
    <div className="about-skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
      {items.map((p) => (
        <div key={p.title} style={{ display: "flex", flexDirection: "column" }}>
          <ProjectCard
            title={p.title}
            description={p.description}
            imgSrc={p.imgSrc}
            link={p.link}
            linkText={p.linkText}
          />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 10,
                  padding: "3px 8px",
                  borderRadius: 2,
                  border: `1px solid ${P}66`,
                  color: P,
                  background: `${P}0d`,
                  fontFamily: FONT,
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
              >
                GitHub ↗
              </a>
            )}
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
  );
}

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

        {/* Page heading */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: "var(--p-heading)", margin: 0 }}>
            <span style={{ color: P }}>#</span>projects
          </h1>
          <div style={{ height: 1, width: 160, background: G, flexShrink: 0 }} />
        </div>
        <p style={{ fontSize: 12, color: "var(--p-text-muted)", marginBottom: 64, letterSpacing: "0.04em" }}>
          Academic projects, GitHub repositories, and CTF competition writeups.
        </p>

        {/* Development */}
        <div style={{ marginBottom: 80 }}>
          <SectionHeading tag="development" line={100} />
          <ProjectGrid items={devProjects} />
        </div>

        {/* Cybersecurity & CTF */}
        <div style={{ marginBottom: 40 }}>
          <SectionHeading tag="cybersecurity-&-ctf" line={60} />
          <ProjectGrid items={ctfProjects} />
        </div>

      </div>
    </div>
  );
}
