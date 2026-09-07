"use client";
import { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

const technologies = [
  {
    id: 1,
    title: "UHF Curing Technology",
    description: "Microwave-precision curing for consistent vulcanization",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80",
  },
  {
    id: 2,
    title: "EPDM / NBR Compounds",
    description: "Custom compound formulation engineered per application",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80",
  },
  {
    id: 3,
    title: "Design & Development",
    description: "End-to-end in-house profile design capability",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
  },
  {
    id: 4,
    title: "Vulcanized Joints",
    description: "In-house moulding for seamless corner joints",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
  },
  {
    id: 5,
    title: "Online Flocking",
    description: "Advanced in-line flocking for glass run channels",
    image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=600&q=80",
  },
  {
    id: 6,
    title: "Fire Retardant Profiles",
    description: "EN45545 R23 HL3 certified flame-resistant rubber",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: 7,
    title: "In-House Testing Lab",
    description: "10+ precision instruments for batch validation",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
  },
];

export default function TechnologiesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.12),
        y: lerp(prev.y, mousePosition.y, 0.12),
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [mousePosition]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{
        background: "#141414",
        padding: "100px 72px",
        fontFamily: "var(--font-barlow)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating image preview */}
      <div
        style={{
          position: "absolute",
          pointerEvents: "none",
          zIndex: 50,
          width: 280,
          height: 180,
          borderRadius: 12,
          overflow: "hidden",
          transform: `translate3d(${smoothPosition.x + 24}px, ${smoothPosition.y - 100}px, 0)`,
          opacity: hoveredIndex !== null ? 1 : 0,
          scale: hoveredIndex !== null ? "1" : "0.85",
          transition: "opacity 0.3s ease, scale 0.3s ease",
          boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
          top: 0,
          left: 0,
        }}
      >
        {technologies.map((tech, i) => (
          <img
            key={tech.id}
            src={tech.image}
            alt={tech.title}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: hoveredIndex === i ? 1 : 0,
              transform: hoveredIndex === i ? "scale(1)" : "scale(1.08)",
              filter: hoveredIndex === i ? "none" : "blur(8px)",
              transition: "all 0.5s ease",
            }}
          />
        ))}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)",
        }}/>
      </div>

      {/* Eyebrow */}
      <div style={{
        display: "flex", alignItems: "center", gap: 12,
        marginBottom: 20, justifyContent: "center",
      }}>
        <div style={{ width: 28, height: 1, background: "#1B91FF" }}/>
        <span style={{
          color: "#1B91FF", fontSize: 10, fontWeight: 700,
          letterSpacing: "3px", textTransform: "uppercase",
          fontFamily: "var(--font-inter)",
        }}>Capabilities</span>
        <div style={{ width: 28, height: 1, background: "#1B91FF" }}/>
      </div>

      {/* Heading */}
      <h2 style={{
        color: "#fff",
        fontSize: "clamp(36px, 4.5vw, 60px)",
        fontWeight: 900,
        lineHeight: 0.95,
        letterSpacing: "-2px",
        textTransform: "uppercase",
        margin: "0 0 56px",
        textAlign: "center",
      }}>
        Everything In-House.
      </h2>

      {/* Technology rows */}
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {technologies.map((tech, i) => (
          <a
            key={tech.id}
            href="/technologies"
            style={{ textDecoration: "none", display: "block" }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px 16px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 8,
              background: hoveredIndex === i ? "rgba(27,145,255,0.06)" : "transparent",
              margin: "0 -16px",
              transition: "background 0.3s ease",
              cursor: "pointer",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <span style={{
                  fontSize: 11,
                  color: hoveredIndex === i ? "#1B91FF" : "rgba(255,255,255,0.2)",
                  fontWeight: 700,
                  fontFamily: "var(--font-inter)",
                  letterSpacing: "1px",
                  transition: "color 0.3s ease",
                  minWidth: 24,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div style={{
                    color: "#fff",
                    fontSize: 17,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "-0.2px",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}>
                    {tech.title}
                    <ArrowUpRight
                      size={16}
                      color="#1B91FF"
                      style={{
                        opacity: hoveredIndex === i ? 1 : 0,
                        transform: hoveredIndex === i ? "translate(0,0)" : "translate(-4px, 4px)",
                        transition: "all 0.3s ease",
                      }}
                    />
                  </div>
                  <div style={{
                    color: hoveredIndex === i ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.3)",
                    fontSize: 12,
                    fontFamily: "var(--font-inter)",
                    marginTop: 3,
                    transition: "color 0.3s ease",
                  }}>
                    {tech.description}
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}/>
      </div>
    </section>
  );
}
