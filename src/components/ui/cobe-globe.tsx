"use client";
import { useEffect, useRef } from "react";
import createGlobe from "cobe";

interface Marker {
  id: string;
  location: [number, number];
  label?: string;
}

interface Arc {
  id: string;
  from: [number, number];
  to: [number, number];
}

interface GlobeProps {
  markers?: Marker[];
  arcs?: Arc[];
  markerColor?: [number, number, number];
  baseColor?: [number, number, number];
  arcColor?: [number, number, number];
  glowColor?: [number, number, number];
  dark?: number;
  mapBrightness?: number;
  markerSize?: number;
  speed?: number;
  diffuse?: number;
}

export function Globe({
  markers = [],
  arcs = [],
  markerColor = [0.106, 0.569, 1.0],
  baseColor = [0.12, 0.14, 0.18],
  arcColor = [0.106, 0.569, 1.0],
  glowColor = [0.106, 0.569, 1.0],
  dark = 1,
  mapBrightness = 4,
  markerSize = 0.04,
  speed = 0.004,
  diffuse = 1.8,
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phi = useRef(0.5);
  const dragging = useRef<number | null>(null);
  const rotOffset = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const size = canvas.offsetWidth;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: size * 2,
      height: size * 2,
      phi: phi.current,
      theta: 0.25,
      dark,
      diffuse,
      mapSamples: 16000,
      mapBrightness,
      baseColor,
      markerColor,
      glowColor,
      arcColor,
      markers: markers.map((m) => ({ location: m.location, size: markerSize, id: m.id })),
      arcs: arcs.map((a) => ({ from: a.from, to: a.to, id: a.id })),
    });

    const animate = () => {
      if (dragging.current === null) phi.current += speed;
      const w = canvas.offsetWidth;
      globe.update({
        phi: phi.current + rotOffset.current,
        width: w * 2,
        height: w * 2,
      });
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    setTimeout(() => { canvas.style.opacity = "1"; }, 100);

    return () => {
      globe.destroy();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div style={{ width: "100%", aspectRatio: "1/1" }}>
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          dragging.current = e.clientX;
          (e.currentTarget as HTMLCanvasElement).style.cursor = "grabbing";
        }}
        onPointerUp={(e) => {
          dragging.current = null;
          (e.currentTarget as HTMLCanvasElement).style.cursor = "grab";
        }}
        onPointerOut={() => { dragging.current = null; }}
        onMouseMove={(e) => {
          if (dragging.current !== null) {
            rotOffset.current = (e.clientX - dragging.current) / 200;
          }
        }}
        onTouchMove={(e) => {
          if (e.touches[0] && dragging.current !== null) {
            rotOffset.current = (e.touches[0].clientX - dragging.current) / 200;
          }
        }}
        style={{
          width: "100%",
          height: "100%",
          opacity: 0,
          transition: "opacity 1s ease",
          cursor: "grab",
        }}
      />
    </div>
  );
}
