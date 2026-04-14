"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const G = "#b8f000";
const FONT = "'Space Mono', monospace";

export interface MapPin {
  lat: number;
  lng: number;
  label: string;
  sublabel?: string;
  color?: string;
}

interface MalaysiaMapProps {
  pins?: MapPin[];
  height?: number | string;
}

// Load the actual Leaflet map only on the client (window is not available on server)
const LeafletMap = dynamic(() => import("./map-inner"), { ssr: false });

export function MalaysiaMap({ pins = [], height = 340 }: MalaysiaMapProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return (
      <div
        style={{
          height,
          borderRadius: 4,
          border: `1px solid ${G}33`,
          background: "var(--p-nav-bg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--p-text-muted)",
          fontSize: 12,
          fontFamily: FONT,
        }}
      >
        loading map...
      </div>
    );
  }

  return <LeafletMap pins={pins} height={height} />;
}
