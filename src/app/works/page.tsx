"use client";

import Link from "next/link";

const G = "#b8f000";
const P = "#c084fc";
const FONT = "'Space Mono', monospace";

/* ── Data ── */
const featured = {
  title: "E-Doptcat — FYP",
  subtitle: "Full-Stack Web Application  ·  IIUM 2025–2026",
  description:
    "Real-time cat adoption and rescue management system for IIUM's Abu Hurairah Club. Designed the full UI/UX in Figma, built with Laravel/PHP, integrated geospatial tracking, QR-based cat profiles, and secure FPX donation management. Awarded 2nd Place for Real-World Impact at IIUM FYP Showcase, January 2026.",
  imgSrc:
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop",
  tags: ["Figma", "Laravel", "PHP", "MySQL", "UI/UX", "FPX"],
  link: "https://my-edopt-cat.vercel.app",
  color: G,
};

const designWorks = [
  {
    title: "NICE 2.0 Campaign",
    org: "KICT Student Society (ICTSS), IIUM",
    year: "2024",
    description:
      "Led the full publication and promotional strategy for NICE 2.0 — social media graphics, event posters, and digital banners designed in Canva and Adobe Photoshop.",
    imgSrc:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=2074&auto=format&fit=crop",
    tags: ["Canva", "Adobe Photoshop", "Social Media", "Branding"],
    color: P,
  },
  {
    title: "KICT Festival: Kyudo:Code",
    org: "KICT Student Society (ICTSS), IIUM",
    year: "2024",
    description:
      "Designed promotional materials and managed the publication strategy for the KICT Faculty Festival — event identity, posters, and digital content across multiple platforms.",
    imgSrc:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    tags: ["Canva", "Event Design", "Digital Content", "Branding"],
    color: G,
  },
  {
    title: "GARIIF24 Campaign",
    org: "KICT Student Society (ICTSS), IIUM",
    year: "2024",
    description:
      "Produced publication materials and promotional content for GARIIF24, coordinating visual identity across print and digital channels as Head of Publication & Promotion.",
    imgSrc:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
    tags: ["Promotion", "Print Design", "Digital Media", "Canva"],
    color: P,
  },
  {
    title: "Motion U Publications",
    org: "Motion U, KICT, IIUM",
    year: "2024–2025",
    description:
      "As Asst. Head of Publication & Promotion, developed and managed all publication materials and promotional content — driving awareness and engagement for Motion U programmes.",
    imgSrc:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
    tags: ["Publication", "Promotion", "Adobe Photoshop", "Canva"],
    color: G,
  },
];

const webWorks = [
  {
    title: "Personal Portfolio",
    org: "Self-initiated",
    year: "2026",
    description:
      "Designed and built this portfolio from scratch using Next.js, Tailwind CSS, and Space Mono typeface. Features dark/light theming, responsive layout, animated hero, and a 3D certificate gallery.",
    imgSrc:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    link: "https://github.com/Am1r4-nr/portfolio",
    color: P,
  },
  {
    title: "Research Unit WordPress Site",
    org: "IIUM Research Unit 3",
    year: "2025–2026",
    description:
      "Developed a WordPress website for IIUM's Research Unit 3: Information System, Internet and Governance. Delivered two full design proposals with distinct colour themes, sitemaps, and page layouts.",
    imgSrc:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop",
    tags: ["WordPress", "UI/UX", "Figma", "HTML", "CSS"],
    color: G,
  },
];

const eventWorks = [
  {
    title: "Feed2Educate",
    org: "University in Action, IIUM",
    year: "Oct 2024 – Jul 2025",
    description:
      "Gold & Silver Award recipient. Community project selected from a competitive pool of IIUM proposals. Coordinated event logistics, documentation, and community outreach for the programme.",
    imgSrc:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2031&auto=format&fit=crop",
    tags: ["Community", "Event", "Documentation", "Gold Award"],
    color: G,
  },
  {
    title: "IPT Leadership Course",
    org: "Persatuan Seni Silat Cekak Malaysia (PSSCM), IIUM",
    year: "2023",
    description:
      "As Head of Economy, coordinated financial planning and resource allocation for the IPT Leadership Course, managing budgets and procurement for a multi-day residential programme.",
    imgSrc:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    tags: ["Leadership", "Finance", "Event Planning", "PSSCM"],
    color: P,
  },
  {
    title: "IIUM Robotic Competition",
    org: "Persatuan Seni Silat Cekak Malaysia (PSSCM), IIUM",
    year: "2023",
    description:
      "Managed economy and resource allocation as Head of Economy for PSSCM's participation in the IIUM Robotic Competition — coordinating team logistics, funding, and registration.",
    imgSrc:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    tags: ["Robotics", "Event", "Budget", "Coordination"],
    color: G,
  },
];

/* ── Components ── */
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

interface WorkItem {
  title: string;
  org: string;
  year: string;
  description: string;
  imgSrc: string;
  tags: string[];
  link?: string;
  color: string;
}

function WorkCard({ w }: { w: WorkItem }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {/* Image */}
      <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden", borderRadius: 4, border: `1px solid var(--p-border)` }}>
        <img
          src={w.imgSrc}
          alt={w.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease", display: "block" }}
          onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
        />
      </div>

      {/* Content */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4, gap: 8 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "var(--p-heading)" }}>{w.title}</div>
          <div style={{ fontSize: 10, color: w.color, flexShrink: 0 }}>{w.year}</div>
        </div>
        <div style={{ fontSize: 11, color: w.color, marginBottom: 8 }}>{w.org}</div>
        <p style={{ fontSize: 11, color: "var(--p-text-muted)", lineHeight: 1.9, marginBottom: 10 }}>{w.description}</p>

        {/* Tags + link */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}>
          {w.link && (
            <a
              href={w.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 10, padding: "3px 8px", borderRadius: 2,
                border: `1px solid ${w.color}99`, color: w.color,
                background: `${w.color}12`, fontFamily: FONT,
                letterSpacing: "0.04em", textDecoration: "none",
              }}
            >
              View ↗
            </a>
          )}
          {w.tags.map(tag => (
            <span
              key={tag}
              style={{
                fontSize: 10, padding: "3px 8px", borderRadius: 2,
                border: `1px solid ${w.color}44`, color: w.color,
                background: `${w.color}0a`, fontFamily: FONT,
                letterSpacing: "0.04em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Page ── */
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
        <p style={{ fontSize: 12, color: "var(--p-text-muted)", marginBottom: 64, letterSpacing: "0.04em" }}>
          Design, web development, event production, and creative output.
        </p>

        {/* ── Featured ── */}
        <div style={{ marginBottom: 80 }}>
          <SectionHeading tag="featured" line={110} />
          <div className="bio-layout" style={{ display: "flex", gap: 48, alignItems: "center" }}>
            <div style={{ flex: "0 0 55%", minWidth: 0, overflow: "hidden", borderRadius: 4, border: `1px solid ${G}55`, aspectRatio: "16/9" }}>
              <img src={featured.imgSrc} alt={featured.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 11, color: G, marginBottom: 10, letterSpacing: "0.08em" }}>{featured.subtitle}</div>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: "var(--p-heading)", margin: "0 0 16px" }}>{featured.title}</h2>
              <p style={{ fontSize: 12, lineHeight: 2, color: "var(--p-text-muted)", marginBottom: 20 }}>{featured.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                {featured.tags.map(tag => (
                  <span key={tag} style={{ fontSize: 10, padding: "3px 8px", borderRadius: 2, border: `1px solid ${G}66`, color: G, background: `${G}0d`, fontFamily: FONT, letterSpacing: "0.04em" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ghost-btn"
                style={{ fontSize: 12, border: "1px solid", padding: "10px 24px", borderRadius: 2, textDecoration: "none", letterSpacing: "0.05em", display: "inline-block" }}
              >
                Live Demo ↗
              </a>
            </div>
          </div>
        </div>

        {/* ── Design & Publication ── */}
        <div style={{ marginBottom: 80 }}>
          <SectionHeading tag="design-&-publication" line={60} />
          <div className="about-skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {designWorks.map(w => <WorkCard key={w.title} w={w} />)}
          </div>
        </div>

        {/* ── Web Development ── */}
        <div style={{ marginBottom: 80 }}>
          <SectionHeading tag="web-development" line={80} />
          <div className="about-skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {webWorks.map(w => <WorkCard key={w.title} w={w} />)}
          </div>
        </div>

        {/* ── Events & Leadership ── */}
        <div style={{ marginBottom: 40 }}>
          <SectionHeading tag="events-&-leadership" line={70} />
          <div className="about-skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {eventWorks.map(w => <WorkCard key={w.title} w={w} />)}
          </div>
        </div>

      </div>
    </div>
  );
}
