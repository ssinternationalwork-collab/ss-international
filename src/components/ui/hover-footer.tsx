'use client';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const TextHoverEffect = ({
  text,
  duration,
}: {
  text: string;
  duration?: number;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: '50%', cy: '50%' });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      style={{ cursor: 'default', userSelect: 'none' }}
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#1B91FF" />
              <stop offset="40%" stopColor="#60b4ff" />
              <stop offset="60%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#1B91FF" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: '50%', cy: '50%' }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: 'easeOut' }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>

        <mask id="textMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
        </mask>
      </defs>

      {/* Base outline text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="none"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth="0.3"
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 900,
          fontSize: '7rem',
          letterSpacing: '-2px',
          textTransform: 'uppercase',
        }}
      >
        {text}
      </text>

      {/* Animated draw-in text */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="none"
        stroke="rgba(27,145,255,0.5)"
        strokeWidth="0.3"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
        transition={{ duration: 4, ease: 'easeInOut' }}
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 900,
          fontSize: '7rem',
          letterSpacing: '-2px',
          textTransform: 'uppercase',
        }}
      >
        {text}
      </motion.text>

      {/* Hover reveal gradient text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="none"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 900,
          fontSize: '7rem',
          letterSpacing: '-2px',
          textTransform: 'uppercase',
        }}
      >
        {text}
      </text>
    </svg>
  );
};
