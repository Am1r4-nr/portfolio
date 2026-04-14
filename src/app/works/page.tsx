"use client";

import PageNav from "@/components/ui/page-nav";
import { MalaysiaMap } from "@/components/ui/map";

const G = "#b8f000";
const P = "#c084fc";
const FONT = "'Space Mono', monospace";

const workExperience = [
  {
    role: "Part-Timer Administrator",
    company: "DeTA Technologies",
    location: "IIUM Gombak, Selangor",
    period: "2023 – 2024",
    description: "Assisted with administrative tasks, data entry, and coordination of digital operations at a technology company on IIUM Gombak campus.",
    color: G,
    lat: 3.2529,
    lng: 101.7375,
  },
  {
    role: "Part-Timer Cashier & Cook",
    company: "Kedai Burger Celup & Ayam Gunting",
    location: "IIUM Gombak, Selangor",
    period: "2022 – 2023",
    description: "Managed cashier duties and food preparation at a student-popular food stall on IIUM Gombak campus.",
    color: P,
    lat: 3.2529,
    lng: 101.7375,
  },
  {
    role: "Part-Timer Cashier & Cook",
    company: "Kedai Waffle & Ice Blended",
    location: "CFS IIUM, Gambang, Pahang",
    period: "2021 – 2022",
    description: "Handled customer orders, cashier operations, and waffle preparation at CFS IIUM Gambang during foundation year.",
    color: G,
    lat: 3.7172,
    lng: 103.1204,
  },
];

const mapPins = [
  {
    lat: 3.2529,
    lng: 101.7375,
    label: "IIUM Gombak",
    sublabel: "Selangor",
    color: G,
  },
  {
    lat: 3.7172,
    lng: 103.1204,
    label: "CFS IIUM Gambang",
    sublabel: "Pahang",
    color: P,
  },
];

export default function WorksPage() {
  return (
    <div style={{ fontFamily: FONT, color: "var(--p-text)", minHeight: "100vh" }}>

      <PageNav />

      <div className="about-page-padding" style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 40px 100px" }}>

        {/* Page heading */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: "var(--p-heading)", margin: 0 }}>
            <span style={{ color: P }}>#</span>works
          </h1>
          <div style={{ height: 1, width: 160, background: G, flexShrink: 0 }} />
        </div>
        <p style={{ fontSize: 12, color: "var(--p-text-muted)", marginBottom: 64, letterSpacing: "0.04em" }}>
          Part-time roles and work experience across Malaysia.
        </p>

        {/* Working experience section */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 36 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--p-heading)", margin: 0, whiteSpace: "nowrap" }}>
            <span style={{ color: P }}>#</span>working-experience
          </h2>
          <div style={{ height: 1, width: 80, background: G, flexShrink: 0 }} />
        </div>

        {/* Map + cards layout */}
        <div className="works-map-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}>

          {/* Left: map */}
          <div>
            <MalaysiaMap pins={mapPins} />
            <p style={{ fontSize: 10, color: "var(--p-text-muted)", marginTop: 8, letterSpacing: "0.04em", textAlign: "center" }}>
              Work locations in Peninsular Malaysia
            </p>
          </div>

          {/* Right: experience cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {workExperience.map((job, i) => (
              <div
                key={i}
                style={{
                  border: `1.5px solid ${job.color}44`,
                  borderRadius: 4,
                  padding: "18px 20px",
                  background: `${job.color}08`,
                  position: "relative",
                }}
              >
                {/* Left accent bar */}
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: job.color, borderRadius: "4px 0 0 4px" }} />

                <div style={{ paddingLeft: 8 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, flexWrap: "wrap", marginBottom: 4 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: job.color }}>{job.role}</span>
                    <span style={{ fontSize: 10, color: "var(--p-text-muted)", letterSpacing: "0.04em", flexShrink: 0 }}>{job.period}</span>
                  </div>
                  <div style={{ fontSize: 12, color: "var(--p-heading)", marginBottom: 4 }}>{job.company}</div>
                  <div style={{ fontSize: 10, color: "var(--p-text-muted)", letterSpacing: "0.04em", marginBottom: 10 }}>
                    📍 {job.location}
                  </div>
                  <p style={{ fontSize: 11, color: "var(--p-text-muted)", lineHeight: 1.8, margin: 0 }}>
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
