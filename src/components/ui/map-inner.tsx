"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { MapPin } from "./map";

const G = "#b8f000";
const FONT = "'Space Mono', monospace";

function useDarkMode() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const check = () => setDark(document.documentElement.classList.contains("dark"));
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);
  return dark;
}

function makeIcon(color: string) {
  return L.divIcon({
    className: "",
    html: `
      <div style="position:relative;width:20px;height:20px;display:flex;align-items:center;justify-content:center;">
        <div style="
          position:absolute;width:32px;height:32px;border-radius:50%;
          border:2px solid ${color};opacity:0.4;
          animation:pulse-ring 2.2s ease-out infinite;
          top:50%;left:50%;transform:translate(-50%,-50%);
        "></div>
        <div style="
          width:14px;height:14px;background:${color};border-radius:50%;
          box-shadow:0 0 8px ${color}99;flex-shrink:0;
        "></div>
      </div>
    `,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -14],
  });
}

function TileLayerSwitcher({ dark }: { dark: boolean }) {
  const light = "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";
  const darkUrl = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
  return (
    <TileLayer
      key={dark ? "dark" : "light"}
      attribution='&copy; <a href="https://carto.com/">CARTO</a>'
      url={dark ? darkUrl : light}
    />
  );
}

export default function LeafletMapInner({
  pins = [],
  height = 340,
}: {
  pins?: MapPin[];
  height?: number | string;
}) {
  const dark = useDarkMode();
  const center: [number, number] = [3.48, 102.4];

  return (
    <>
      <style>{`
        @keyframes pulse-ring {
          0%   { transform: translate(-50%,-50%) scale(0.8); opacity: 0.5; }
          100% { transform: translate(-50%,-50%) scale(2.2); opacity: 0; }
        }
        .leaflet-popup-content-wrapper {
          background: var(--p-nav-bg, #0d1117) !important;
          border: 1px solid #b8f00044 !important;
          border-radius: 4px !important;
          box-shadow: 0 4px 20px #00000066 !important;
          font-family: 'Space Mono', monospace !important;
          color: var(--p-text, #ccc) !important;
        }
        .leaflet-popup-tip {
          background: var(--p-nav-bg, #0d1117) !important;
        }
        .leaflet-popup-content {
          margin: 10px 14px !important;
          font-size: 12px !important;
          line-height: 1.7 !important;
        }
        .leaflet-container { border-radius: 4px; }
        .leaflet-control-zoom a {
          background: var(--p-nav-bg, #0d1117) !important;
          color: var(--p-heading, #eee) !important;
          border-color: #b8f00033 !important;
          font-family: 'Space Mono', monospace !important;
        }
        .leaflet-control-zoom a:hover {
          background: #b8f00022 !important;
          color: #b8f000 !important;
        }
        .leaflet-control-attribution {
          font-family: 'Space Mono', monospace !important;
          font-size: 9px !important;
          background: transparent !important;
          color: var(--p-text-muted, #666) !important;
        }
        .leaflet-control-attribution a { color: var(--p-text-muted, #666) !important; }
      `}</style>

      <MapContainer
        center={center}
        zoom={8}
        scrollWheelZoom={false}
        style={{ height, width: "100%", borderRadius: 4, border: `1px solid ${G}33` }}
        attributionControl={true}
      >
        <TileLayerSwitcher dark={dark} />

        {pins.map((pin, i) => (
          <Marker
            key={i}
            position={[pin.lat, pin.lng]}
            icon={makeIcon(pin.color ?? G)}
          >
            <Popup>
              <div>
                <div style={{ color: pin.color ?? G, fontWeight: 700, fontSize: 13, marginBottom: 2 }}>
                  {pin.label}
                </div>
                {pin.sublabel && (
                  <div style={{ color: "var(--p-text-muted)", fontSize: 11 }}>
                    {pin.sublabel}
                  </div>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
