"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

const SIZE = 400;

export default function BrazilMap({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = SIZE * dpr;
    canvas.height = SIZE * dpr;
    const ctx = canvas.getContext("2d")!;
    ctx.scale(dpr, dpr);

    let brazilData: d3.ExtendedFeatureCollection | null = null;
    let raf: number;

    // Coordenadas das capitais de todos os 27 estados
    const points = [
      { id: "AC", coords: [-67.81, -9.97] },
      { id: "AL", coords: [-35.73, -9.66] },
      { id: "AP", coords: [-51.06, 0.03] },
      { id: "AM", coords: [-60.02, -3.11] },
      { id: "BA", coords: [-38.51, -12.97] },
      { id: "CE", coords: [-38.52, -3.71] },
      { id: "DF", coords: [-47.92, -15.79] },
      { id: "ES", coords: [-40.33, -20.31] },
      { id: "GO", coords: [-49.25, -16.67] },
      { id: "MA", coords: [-44.30, -2.53] },
      { id: "MT", coords: [-56.09, -15.60] }, // Sede (index 10)
      { id: "MS", coords: [-54.62, -20.44] },
      { id: "MG", coords: [-43.93, -19.92] },
      { id: "PA", coords: [-48.50, -1.45] },
      { id: "PB", coords: [-34.86, -7.11] },
      { id: "PR", coords: [-49.27, -25.42] },
      { id: "PE", coords: [-34.88, -8.04] },
      { id: "PI", coords: [-42.80, -5.08] },
      { id: "RJ", coords: [-43.17, -22.90] },
      { id: "RN", coords: [-35.20, -5.79] },
      { id: "RS", coords: [-51.21, -30.03] },
      { id: "RO", coords: [-63.90, -8.76] },
      { id: "RR", coords: [-60.67, 2.82] },
      { id: "SC", coords: [-48.54, -27.59] },
      { id: "SP", coords: [-46.63, -23.55] },
      { id: "SE", coords: [-37.07, -10.94] },
      { id: "TO", coords: [-48.33, -10.21] },
    ];

    // O Mato Grosso (MT) é a matriz, index 10
    const matrizIndex = 10;
    
    // Setas saindo do Mato Grosso para todos os outros 26 estados
    const arrows = points
      .map((_, index) => index)
      .filter((index) => index !== matrizIndex)
      .map((index) => ({ from: matrizIndex, to: index }));

    const proj = d3.geoMercator();
    const geoPath = d3.geoPath().projection(proj).context(ctx);

    const draw = () => {
      ctx.clearRect(0, 0, SIZE, SIZE);

      if (!brazilData) return;

      // Desenhar mapa base do Brasil
      ctx.beginPath();
      brazilData.features.forEach((f) => geoPath(f as d3.ExtendedFeature));
      ctx.fillStyle = "rgba(0,87,184,0.06)";
      ctx.fill();
      ctx.strokeStyle = "rgba(0,87,184,0.3)";
      ctx.lineWidth = 1;
      ctx.stroke();

      const time = Date.now() / 1500;

      // Desenhar conexões (setas)
      arrows.forEach((arrow, i) => {
        const p1 = proj(points[arrow.from].coords as [number, number]);
        const p2 = proj(points[arrow.to].coords as [number, number]);
        if (!p1 || !p2) return;

        const [x1, y1] = p1;
        const [x2, y2] = p2;

        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;
        const dx = x2 - x1;
        const dy = y2 - y1;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const curve = dist * 0.2;
        const nx = -dy / dist;
        const ny = dx / dist;

        const cx = midX + nx * curve;
        const cy = midY + ny * curve;

        // Animar traços
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(cx, cy, x2, y2);
        
        ctx.strokeStyle = "rgba(214,40,40,0.4)"; // Vermelho translúcido para setas
        ctx.lineWidth = 1.5;
        ctx.setLineDash([6, 10]);
        // Alternar direção/offset baseado no index para efeito dinâmico
        ctx.lineDashOffset = -((time * 25 + i * 15) % 16);
        ctx.stroke();
        ctx.setLineDash([]); // resetar
      });

      // Desenhar pontos em todos os estados
      points.forEach((point, i) => {
        const p = proj(point.coords as [number, number]);
        if (!p) return;
        const [x, y] = p;

        const isMatriz = i === matrizIndex;
        
        ctx.beginPath();
        // A matriz (MT) tem um ponto maior e de cor diferente
        ctx.arc(x, y, isMatriz ? 6 : 3, 0, Math.PI * 2);
        ctx.fillStyle = isMatriz ? "#0057B8" : "#D62828";
        ctx.fill();
        
        // Brilho na matriz
        if (isMatriz) {
          const pulse = 0.5 + 0.5 * Math.abs(Math.sin(time * 3));
          ctx.beginPath();
          ctx.arc(x, y, 6 + pulse * 6, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 87, 184, ${0.4 * (1 - pulse)})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      });
    };

    const animate = () => {
      draw();
      raf = requestAnimationFrame(animate);
    };

    fetch("https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson")
      .then((r) => r.json())
      .then((data) => {
        brazilData = data as d3.ExtendedFeatureCollection;
        proj.fitSize([SIZE, SIZE], brazilData);
        animate();
      })
      .catch((err) => {
        console.error("Failed to load map data", err);
      });

    return () => {
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", maxWidth: `${SIZE}px`, height: "auto", aspectRatio: "1/1" }}
    />
  );
}
