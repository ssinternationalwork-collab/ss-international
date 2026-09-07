"use client";

import { useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
  showLabels?: boolean;
  animationDuration?: number;
  loop?: boolean;
}

export function WorldMap({
  dots = [],
  lineColor = "#1B91FF",
  showLabels = true,
  animationDuration = 2,
  loop = true,
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const map = useMemo(
    () => new DottedMap({ height: 100, grid: "diagonal" }),
    []
  );

  const svgMap = useMemo(
    () =>
      map.getSVG({
        radius: 0.22,
        color: "#ffffff18",
        shape: "circle",
        backgroundColor: "transparent",
      }),
    [map]
  );

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 60;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  const staggerDelay = 0.4;
  const totalAnimationTime = dots.length * staggerDelay + animationDuration;
  const pauseTime = 2;
  const fullCycleDuration = totalAnimationTime + pauseTime;

  return (
    <div style={{
      width: "100%",
      aspectRatio: "2/1",
      background: "transparent",
      borderRadius: 16,
      position: "relative",
      overflow: "hidden",
    }}>
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        style={{
          width: "100%", height: "100%",
          objectFit: "cover",
          maskImage: "linear-gradient(to bottom, transparent, white 10%, white 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, white 10%, white 90%, transparent)",
          pointerEvents: "none", userSelect: "none",
        }}
        alt="world map"
        height={495}
        width={1056}
        draggable={false}
        priority
      />

      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        style={{
          width: "100%", height: "100%",
          position: "absolute", inset: 0,
        }}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          const startTime = (i * staggerDelay) / fullCycleDuration;
          const endTime = (i * staggerDelay + animationDuration) / fullCycleDuration;
          const resetTime = totalAnimationTime / fullCycleDuration;

          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 0, 1, 1, 0] }}
                transition={{
                  duration: fullCycleDuration,
                  times: [0, startTime, endTime, resetTime, 1],
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
              <motion.circle
                r="3"
                fill={lineColor}
                filter="url(#glow)"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0, 1, 0, 0],
                }}
                transition={{
                  duration: fullCycleDuration,
                  times: [0, startTime, endTime, resetTime, 1],
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                style={{
                  offsetPath: `path('${createCurvedPath(startPoint, endPoint)}')`,
                  offsetDistance: "50%",
                }}
              />
            </g>
          );
        })}

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`points-group-${i}`}>
              <circle cx={startPoint.x} cy={startPoint.y} r="3" fill={lineColor} filter="url(#glow)" />
              <circle cx={startPoint.x} cy={startPoint.y} r="3" fill={lineColor} opacity="0.4">
                <animate attributeName="r" from="3" to="10" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx={endPoint.x} cy={endPoint.y} r="3" fill={lineColor} filter="url(#glow)" />
              <circle cx={endPoint.x} cy={endPoint.y} r="3" fill={lineColor} opacity="0.4">
                <animate attributeName="r" from="3" to="10" dur="2s" begin="0.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0" dur="2s" begin="0.5s" repeatCount="indefinite" />
              </circle>
              {showLabels && dot.start.label && i === 0 && (
                <foreignObject x={startPoint.x - 40} y={startPoint.y - 30} width="80" height="24">
                  <div style={{
                    background: "rgba(27,145,255,0.9)",
                    color: "#fff", fontSize: 9, fontWeight: 700,
                    padding: "3px 8px", borderRadius: 4,
                    textAlign: "center", whiteSpace: "nowrap",
                    fontFamily: "Inter, sans-serif",
                    letterSpacing: "0.5px",
                  }}>{dot.start.label}</div>
                </foreignObject>
              )}
              {showLabels && dot.end.label && (
                <foreignObject x={endPoint.x - 40} y={endPoint.y - 30} width="80" height="24">
                  <div style={{
                    background: "rgba(255,255,255,0.12)",
                    color: "#fff", fontSize: 9, fontWeight: 600,
                    padding: "3px 8px", borderRadius: 4,
                    textAlign: "center", whiteSpace: "nowrap",
                    fontFamily: "Inter, sans-serif",
                    border: "1px solid rgba(255,255,255,0.2)",
                    letterSpacing: "0.5px",
                  }}>{dot.end.label}</div>
                </foreignObject>
              )}
            </g>
          );
        })}
      </svg>

      <AnimatePresence>
        {hoveredLocation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            style={{
              position: "absolute", bottom: 16, left: 16,
              background: "rgba(27,145,255,0.9)",
              color: "#fff", padding: "8px 14px",
              borderRadius: 8, fontSize: 12, fontWeight: 600,
            }}
          >
            {hoveredLocation}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
