"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

const STATES = [
  { id: "MT", label: "Mato Grosso",        lat: -12.64, lng: -55.42, base: true  },
  { id: "RO", label: "Rondônia",           lat: -11.22, lng: -62.80, base: false },
  { id: "GO", label: "Goiás",              lat: -15.83, lng: -49.83, base: false },
  { id: "MS", label: "Mato Grosso do Sul", lat: -20.77, lng: -54.79, base: false },
  { id: "SP", label: "São Paulo",          lat: -23.55, lng: -46.63, base: false },
];

const SIZE = 320;
const RADIUS = SIZE * 0.43;
const CX = SIZE / 2;
const CY = SIZE / 2;

/* Angular distance helper — point is visible if distance to center < 90° */
function isVisible(proj: d3.GeoProjection, lng: number, lat: number): boolean {
  const [lam, phi] = proj.rotate();
  return d3.geoDistance([lng, lat], [-lam, -phi] as [number, number]) < Math.PI / 2;
}

export default function BrazilGlobe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width  = SIZE * dpr;
    canvas.height = SIZE * dpr;
    const ctx = canvas.getContext("2d")!;
    ctx.scale(dpr, dpr);

    const proj = d3
      .geoOrthographic()
      .scale(RADIUS)
      .translate([CX, CY])
      .clipAngle(90)
      .rotate([-55, 15, 0]); // start centered on Brazil

    const geoPath = d3.geoPath().projection(proj).context(ctx);

    let landData: d3.ExtendedFeatureCollection | null = null;
    let raf: number;
    let angle = 0;

    const draw = () => {
      ctx.clearRect(0, 0, SIZE, SIZE);

      /* ── Globe sphere ── */
      ctx.beginPath();
      ctx.arc(CX, CY, RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = "#060A14";
      ctx.fill();

      /* Outer glow ring */
      ctx.beginPath();
      ctx.arc(CX, CY, RADIUS + 2, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(0,87,184,0.45)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      if (landData) {
        /* Graticule grid */
        ctx.beginPath();
        geoPath(d3.geoGraticule()());
        ctx.strokeStyle = "rgba(0,87,184,0.1)";
        ctx.lineWidth = 0.55;
        ctx.stroke();

        /* Land masses */
        ctx.beginPath();
        landData.features.forEach((f) => geoPath(f as d3.ExtendedFeature));
        ctx.fillStyle = "rgba(0,87,184,0.14)";
        ctx.fill();
        ctx.strokeStyle = "rgba(0,87,184,0.4)";
        ctx.lineWidth = 0.75;
        ctx.stroke();
      }

      /* ── State markers ── */
      const t = Date.now() / 700;

      STATES.forEach(({ id, lat, lng, base }) => {
        if (!isVisible(proj, lng, lat)) return;

        const pt = proj([lng, lat]);
        if (!pt) return;
        const [x, y] = pt;

        const color      = base ? "#4da3ff" : "#ff7070";
        const dotRadius  = base ? 5 : 3.5;
        const ringRadius = base ? 12 : 8;
        const pulse      = 0.45 + 0.55 * Math.abs(Math.sin(t + (base ? 0 : 1.2)));

        /* Pulse ring */
        ctx.beginPath();
        ctx.arc(x, y, ringRadius * (1 + 0.25 * pulse), 0, Math.PI * 2);
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.2;
        ctx.globalAlpha = 0.25 * pulse;
        ctx.stroke();

        /* Inner ring */
        ctx.beginPath();
        ctx.arc(x, y, ringRadius * 0.65, 0, Math.PI * 2);
        ctx.strokeStyle = color;
        ctx.lineWidth = 0.9;
        ctx.globalAlpha = 0.45;
        ctx.stroke();
        ctx.globalAlpha = 1;

        /* Solid dot */
        ctx.beginPath();
        ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        /* Abbreviated label */
        ctx.fillStyle = color;
        ctx.font = `bold ${base ? 9.5 : 8}px Inter,sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText(id, x, y + dotRadius + 9);
      });
    };

    const animate = () => {
      angle += 0.18;
      proj.rotate([-55 + angle * 0.12, 15, 0]);
      draw();
      raf = requestAnimationFrame(animate);
    };

    /* Load land GeoJSON */
    fetch(
      "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json"
    )
      .then((r) => r.json())
      .then((data) => {
        landData = data as d3.ExtendedFeatureCollection;
        animate();
      })
      .catch(() => animate());

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", maxWidth: `${SIZE}px`, height: "auto", aspectRatio: "1/1" }}
    />
  );
}
