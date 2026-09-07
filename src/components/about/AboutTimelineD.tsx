"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const milestones = [
  { year: "1999", title: "Founded in Delhi", desc: "SS International established as a precision rubber sealing manufacturer, initially serving the automotive OEM sector.", image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1600&q=85", tag: "Foundation" },
  { year: "2003", title: "Railway Certification", desc: "Achieved BS 6853 certification, opening doors to Indian Railways and metro rail projects across the country.", image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1600&q=85", tag: "Certification" },
  { year: "2007", title: "UHF Curing Installed", desc: "Invested in microwave-precision UHF curing technology — one of the first rubber manufacturers in India to do so.", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=85", tag: "Technology" },
  { year: "2011", title: "In-House Testing Lab", desc: "Opened a dedicated testing laboratory with 10+ precision instruments for full batch validation without third-party dependency.", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&q=85", tag: "Quality" },
  { year: "2015", title: "EN45545 Certification", desc: "Achieved European fire safety standard EN45545 R23 HL3 — enabling supply to European railway and metro operators.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=85", tag: "Certification" },
  { year: "2019", title: "Global Expansion", desc: "Products exported to 40+ countries. Supply partnerships established with OEMs in Europe, Middle East, and Asia-Pacific.", image: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=1600&q=85", tag: "Expansion" },
  { year: "2024", title: "25 Years of Precision", desc: "Celebrating 25 years with 500+ OEM clients, 8 industries, 14 product categories, and everything still made in-house.", image: "https://images.unsplash.com/photo-1600684249816-38cdfcf95c17?w=1600&q=85", tag: "Milestone" },
];

export default function AboutTimelineD() {
  return (
    <section style={{
      background: "#0a0a0a",
      fontFamily: "var(--font-barlow)",
    }}>
      {/* Intro */}
      <div style={{
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 72px",
      }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
          <div style={{ width: 28, height: 1, background: "#1B91FF" }}/>
          <span style={{
            color: "#1B91FF", fontSize: 10, fontWeight: 700,
            letterSpacing: "3px", textTransform: "uppercase",
            fontFamily: "var(--font-inter)",
          }}>Seven Chapters</span>
          <div style={{ width: 28, height: 1, background: "#1B91FF" }}/>
        </div>
        <h2 style={{
          color: "#fff",
          fontSize: "clamp(40px, 5.5vw, 80px)",
          fontWeight: 900, lineHeight: 0.95,
          letterSpacing: "-3px", textTransform: "uppercase",
          margin: "0 0 20px",
        }}>
          A Story Worth<br/>
          <span style={{ color: "rgba(255,255,255,0.2)" }}>Reading.</span>
        </h2>
        <p style={{
          color: "rgba(255,255,255,0.4)",
          fontSize: 14, fontFamily: "var(--font-inter)",
          letterSpacing: "1px", textTransform: "uppercase",
          fontWeight: 600,
        }}>↓ Scroll to begin</p>
      </div>

      {/* Chapters */}
      {milestones.map((m, i) => (
        <Chapter key={i} milestone={m} idx={i} total={milestones.length}/>
      ))}
    </section>
  );
}

function Chapter({
  milestone, idx, total,
}: { milestone: typeof milestones[0]; idx: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.1, 0.4], [60, 0]);

  return (
    <div
      ref={ref}
      style={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Parallax background image */}
      <motion.div style={{
        position: "absolute",
        inset: "-15% 0",
        y: imageY,
        scale: imageScale,
      }}>
        <img
          src={milestone.image}
          alt={milestone.title}
          style={{
            width: "100%", height: "100%",
            objectFit: "cover", display: "block",
          }}
        />
      </motion.div>

      {/* Dark gradient overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(90deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,0.4) 100%)",
      }}/>

      {/* Content */}
      <motion.div style={{
        position: "relative",
        zIndex: 2,
        padding: "0 72px",
        maxWidth: 720,
        opacity: textOpacity,
        y: textY,
      }}>
        <div style={{
          fontSize: 12,
          color: "rgba(255,255,255,0.4)",
          letterSpacing: "4px",
          fontFamily: "var(--font-inter)",
          fontWeight: 700,
          marginBottom: 16,
        }}>CHAPTER {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</div>

        <div style={{
          fontSize: "clamp(96px, 14vw, 200px)",
          fontWeight: 900,
          color: "#fff",
          letterSpacing: "-8px",
          lineHeight: 0.85,
          marginBottom: 24,
          textShadow: "0 4px 40px rgba(0,0,0,0.5)",
        }}>{milestone.year}</div>

        <div style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "6px 14px",
          background: "rgba(27,145,255,0.15)",
          border: "1px solid rgba(27,145,255,0.4)",
          backdropFilter: "blur(8px)",
          borderRadius: 50,
          marginBottom: 28,
        }}>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#1B91FF" }}/>
          <span style={{
            color: "#1B91FF", fontSize: 10, fontWeight: 700,
            letterSpacing: "2px", textTransform: "uppercase",
            fontFamily: "var(--font-inter)",
          }}>{milestone.tag}</span>
        </div>

        <h3 style={{
          color: "#fff",
          fontSize: "clamp(28px, 3.5vw, 48px)",
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: "-1.5px",
          lineHeight: 1.05,
          margin: "0 0 24px",
        }}>{milestone.title}</h3>

        <p style={{
          color: "rgba(255,255,255,0.75)",
          fontSize: 17, lineHeight: 1.7,
          fontFamily: "var(--font-inter)",
          maxWidth: 540,
          margin: 0,
        }}>{milestone.desc}</p>
      </motion.div>
    </div>
  );
}
