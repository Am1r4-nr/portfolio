import Link from "next/link";

const G = "#b8f000";
const P = "#c084fc";
const FONT = "'Space Mono', monospace";

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

export default function AboutPage() {
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

      <div className="about-page-padding" style={{ maxWidth: 960, margin: "0 auto", padding: "72px 40px 100px" }}>

        {/* ── Bio ── */}
        <div className="bio-layout" style={{ display: "flex", alignItems: "flex-start", gap: 64, marginBottom: 80 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
              <h1 style={{ fontSize: 28, fontWeight: 700, color: "var(--p-heading)", margin: 0 }}>
                <span style={{ color: P }}>#</span>about-me
              </h1>
              <div style={{ height: 1, width: 160, background: G, flexShrink: 0 }} />
            </div>
            <p style={{ fontSize: 12, lineHeight: 2, color: "var(--p-text-muted)", maxWidth: 520, marginBottom: 16 }}>
              Final-year Information Assurance and Security (IAS) student at IIUM with hands-on experience
              in penetration testing, vulnerability assessment, threat detection, and security monitoring
              through active CTF competition and academic research.
            </p>
            <p style={{ fontSize: 12, lineHeight: 2, color: "var(--p-text-muted)", maxWidth: 520 }}>
              Certified in Cybersecurity (CompTIA Security+) with practical expertise in Full-Stack Development
              (Laravel/PHP). Seeking a 6-month internship in Cybersecurity Analysis, SOC Operations, or IT Audit.
            </p>
          </div>
          <div style={{ flexShrink: 0, position: "relative" }}>
            <div style={{ width: 220, height: 270, overflow: "hidden", borderRadius: 4, border: `1px solid var(--p-border)` }}>
              <img
                src="/profile/NabilaRahman.png"
                alt="Nabila Rahman"
                style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.9)" }}
              />
            </div>
            <div style={{ position: "absolute", bottom: -16, right: -16, display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 5 }}>
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: i % 3 === 0 ? `${G}55` : "var(--p-border)" }} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Education ── */}
        <div style={{ marginBottom: 72 }}>
          <SectionHeading tag="education" line={100} />
          {[
            {
              degree: "Bachelor of Information Technology (Hons.) in Information Assurance and Security",
              institution: "International Islamic University Malaysia (IIUM), Gombak Campus",
              period: "February 2023 – Present",
              detail: "CGPA: 3.39  |  Co-Curricular Cumulative Average: 4.00 / 4.00",
              color: G,
            },
            {
              degree: "Foundation in Engineering and Computer Science",
              institution: "International Islamic University Malaysia (IIUM), Gambang Campus",
              period: "Graduated 2022",
              detail: "",
              color: P,
            },
            {
              degree: "SPM: 4A  3A-  2B+  1C+",
              institution: "Sekolah Menengah Kebangsaan Tengku Sarafudin Badlishah",
              period: "Graduated 2021",
              detail: "",
              color: G,
            },
          ].map(e => (
            <div key={e.degree} style={{ borderLeft: `2px solid ${e.color}`, paddingLeft: 20, marginBottom: 28 }}>
              <div style={{ fontSize: 13, color: "var(--p-heading)", fontWeight: 700, marginBottom: 4 }}>{e.degree}</div>
              <div style={{ fontSize: 11, color: e.color, marginBottom: e.detail ? 4 : 0 }}>{e.institution}</div>
              {e.detail && <div style={{ fontSize: 11, color: "var(--p-text-dim)", marginBottom: 2 }}>{e.detail}</div>}
              <div style={{ fontSize: 11, color: "var(--p-text-dim)" }}>{e.period}</div>
            </div>
          ))}
        </div>

        {/* ── Working Experience ── */}
        <div style={{ marginBottom: 72 }}>
          <SectionHeading tag="working-experience" line={80} />
          {[
            {
              role: "Part-Timer Administrator (Secretary)",
              org: "DeTA Technologies",
              period: "February 2026 – Present",
              points: [
                "Managed official correspondence and internal documentation for active projects.",
                "Streamlined record and filing systems to improve operational efficiency and audit readiness.",
              ],
              color: G,
            },
            {
              role: "Part-Timer Cashier & Cook",
              org: "Kedai Burger Celup & Ayam Gunting",
              period: "April 2025 – Present",
              points: ["Managed simultaneous food preparation and customer service in a fast-paced team setting."],
              color: P,
            },
            {
              role: "Part-Timer Cashier & Cook",
              org: "Kedai Waffle & Ice Blended",
              period: "May 2022 – June 2022",
              points: ["Handled food preparation and customer service concurrently while maintaining efficiency under pressure."],
              color: G,
            },
          ].map(e => (
            <div key={e.role + e.org} style={{ borderLeft: `2px solid ${e.color}`, paddingLeft: 20, marginBottom: 28 }}>
              <div style={{ fontSize: 13, color: "var(--p-heading)", fontWeight: 700, marginBottom: 2 }}>{e.role}</div>
              <div style={{ fontSize: 11, color: e.color, marginBottom: 6 }}>{e.org}  ·  {e.period}</div>
              {e.points.map((p, i) => (
                <div key={i} style={{ fontSize: 11, color: "var(--p-text-muted)", lineHeight: 1.9 }}>• {p}</div>
              ))}
            </div>
          ))}
        </div>

        {/* ── Cybersecurity Experience ── */}
        <div style={{ marginBottom: 72 }}>
          <SectionHeading tag="cybersecurity-experience" line={60} />
          <div style={{ borderLeft: `2px solid ${G}`, paddingLeft: 20 }}>
            <div style={{ fontSize: 13, color: "var(--p-heading)", fontWeight: 700, marginBottom: 2 }}>Capture The Flag (CTF) Competitions</div>
            <div style={{ fontSize: 11, color: G, marginBottom: 10 }}>May 2024 – December 2025</div>
            {[
              "Rank 17 — Girls in Capture the Flag 2024  |  RE:HACK",
              "Rank 50 — Girls in Capture the Flag 2025  |  RE:UN10N",
              "Rank 76 — UM CyberSecurity Summit CTF Preliminary Round 2025  |  RE:HACK",
              "DEADFACE CTF 2025  |  Cyber Hacktics",
              "ICE CTF Chapter 0 2024",
            ].map((item, i) => (
              <div key={i} style={{ fontSize: 11, color: "var(--p-text-muted)", lineHeight: 1.9 }}>• {item}</div>
            ))}
          </div>
        </div>

        {/* ── Technical & Project Experience ── */}
        <div style={{ marginBottom: 72 }}>
          <SectionHeading tag="projects" line={120} />
          {[
            {
              title: "Final Year Project — E-Doptcat",
              sub: "Web Application Development  |  IIUM",
              period: "2025 – January 2026",
              points: [
                "Designed and developed a real-time cat adoption and rescue management system for Abu Hurairah Club at IIUM.",
                "Integrated geospatial tracking, QR-based cat profiles, and secure donation management via FPX.",
                "Awarded 2nd Place for Real-World Impact at IIUM FYP Showcase, January 2026.",
              ],
              color: P,
            },
            {
              title: "Programmer — WordPress Website",
              sub: "Web Design & Development  |  IIUM",
              period: "2025 – January 2026",
              points: [
                "Developed a WordPress website for Research Unit 3: Information System, Internet and Governance, IIUM.",
                "Produced two design proposals with distinct colour themes, sitemaps, and page layouts for client evaluation.",
              ],
              color: G,
            },
          ].map(e => (
            <div key={e.title} style={{ borderLeft: `2px solid ${e.color}`, paddingLeft: 20, marginBottom: 28 }}>
              <div style={{ fontSize: 13, color: "var(--p-heading)", fontWeight: 700, marginBottom: 2 }}>{e.title}</div>
              <div style={{ fontSize: 11, color: e.color, marginBottom: 6 }}>{e.sub}  ·  {e.period}</div>
              {e.points.map((p, i) => (
                <div key={i} style={{ fontSize: 11, color: "var(--p-text-muted)", lineHeight: 1.9 }}>• {p}</div>
              ))}
            </div>
          ))}
        </div>

        {/* ── Leadership ── */}
        <div style={{ marginBottom: 72 }}>
          <SectionHeading tag="leadership" line={120} />
          {[
            { role: "Treasurer", org: "Independent Cybersecurity Enthusiasts (ICE), IIUM", period: "May 2024 – Present", desc: "Managed club finances and budgeting for cybersecurity workshops, CTF training sessions, and club events.", color: G },
            { role: "Head of Publication & Promotion", org: "KICT Student Society (ICTSS), IIUM", period: "January 2024 – December 2024", desc: "Led promotional strategy across 3 programmes: NICE 2.0, KICT Festival: Kyudo:Code, and GARIIF24.", color: P },
            { role: "Asst. Head of Publication & Promotion", org: "Motion U, KICT, IIUM", period: "October 2024 – October 2025", desc: "Developed and managed publication materials and promotional content to drive awareness and engagement.", color: G },
            { role: "Head of Economy", org: "Persatuan Seni Silat Cekak Malaysia (PSSCM), IIUM", period: "May 2023 – July 2023", desc: "Coordinated financial planning and resource allocation for IPT Leadership Course and IIUM Robotic Competition.", color: P },
          ].map(e => (
            <div key={e.role + e.org} style={{ borderLeft: `2px solid ${e.color}`, paddingLeft: 20, marginBottom: 24 }}>
              <div style={{ fontSize: 13, color: "var(--p-heading)", fontWeight: 700, marginBottom: 2 }}>{e.role}</div>
              <div style={{ fontSize: 11, color: e.color, marginBottom: 4 }}>{e.org}  ·  {e.period}</div>
              <div style={{ fontSize: 11, color: "var(--p-text-muted)", lineHeight: 1.9 }}>{e.desc}</div>
            </div>
          ))}
        </div>

        {/* ── Achievements ── */}
        <div style={{ marginBottom: 72 }}>
          <SectionHeading tag="achievements" line={110} />
          {[
            { title: "2nd Place — FYP Award for Real-World Impact, IIUM", period: "January 2026", color: G },
            { title: "Gold & Silver Award — Feed2Educate, University in Action", period: "October 2024 – July 2025", desc: "Selected from a competitive pool of IIUM community project proposals spanning diverse technical and social domains.", color: P },
          ].map(e => (
            <div key={e.title} style={{ borderLeft: `2px solid ${e.color}`, paddingLeft: 20, marginBottom: 24 }}>
              <div style={{ fontSize: 13, color: "var(--p-heading)", fontWeight: 700, marginBottom: 2 }}>{e.title}</div>
              <div style={{ fontSize: 11, color: e.color, marginBottom: "desc" in e ? 4 : 0 }}>{e.period}</div>
              {"desc" in e && <div style={{ fontSize: 11, color: "var(--p-text-muted)", lineHeight: 1.9 }}>{(e as {desc: string}).desc}</div>}
            </div>
          ))}
        </div>

        {/* ── Skills ── */}
        <div style={{ marginBottom: 72 }}>
          <SectionHeading tag="skills" line={130} />
          <div className="about-skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {[
              { title: "Language Proficiency",  items: ["English — Fluent", "Bahasa Melayu — Native", "Mandarin — Beginner"], color: P },
              { title: "Programming Languages", items: ["Python", "HTML", "CSS", "JavaScript", "PHP", "Laravel"], color: G },
              { title: "Cybersecurity Tools",   items: ["Kali Linux", "Burp Suite", "Wireshark", "Nmap", "CyberChef", "hashcat", "RsaCtfTool", "steghide", "OpenSteg"], color: P },
              { title: "Web & App Design",      items: ["Figma", "Canva", "Framer", "Adobe Photoshop", "React", "React Native", "Tailwind CSS", "Bootstrap"], color: G },
              { title: "Productivity & Collab", items: ["Google Workspace", "Microsoft Office", "GitHub", "Notion", "WordPress"], color: P },
              { title: "Certificates",          items: ["CompTIA Security+", "Cloud Practitioner (Entry Level)", "CCNA v7 Introduction to Networks"], color: G },
            ].map(({ title, items, color }) => (
              <div key={title} style={{ border: `1px solid ${color}55`, padding: "14px 18px", borderRadius: 2, background: `${color}08` }}>
                <div style={{ color, fontSize: 12, fontWeight: 700, marginBottom: 8, fontFamily: FONT }}>{title}</div>
                {title === "Language Proficiency" ? (
                  <div style={{ fontFamily: FONT }}>
                    {items.map((item, i) => (
                      <div key={i} style={{ color: "var(--p-text-muted)", fontSize: 11, lineHeight: 2 }}>{item}</div>
                    ))}
                  </div>
                ) : (
                  <div style={{ color: "var(--p-text-muted)", fontSize: 11, lineHeight: 2, fontFamily: FONT }}>{items.join("  ")}</div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
