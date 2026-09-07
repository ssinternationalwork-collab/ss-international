"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const milestones = [
  { year: "1999", title: "Founded in Delhi", desc: "SS International established as a precision rubber sealing manufacturer, initially serving the automotive OEM sector.", image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1200&q=80", tag: "Foundation" },
  { year: "2003", title: "Railway Certification", desc: "Achieved BS 6853 certification, opening doors to Indian Railways and metro rail projects across the country.", image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1200&q=80", tag: "Certification" },
  { year: "2007", title: "UHF Curing Installed", desc: "Invested in microwave-precision UHF curing technology — one of the first rubber manufacturers in India to do so.", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80", tag: "Technology" },
  { year: "2011", title: "In-House Testing Lab", desc: "Opened a dedicated testing laboratory with 10+ precision instruments for full batch validation without third-party dependency.", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80", tag: "Quality" },
  { year: "2015", title: "EN45545 Certification", desc: "Achieved European fire safety standard EN45545 R23 HL3 — enabling supply to European railway and metro operators.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80", tag: "Certification" },
  { year: "2019", title: "Global Expansion", desc: "Products exported to 40+ countries. Supply partnerships established with OEMs in Europe, Middle East, and Asia-Pacific.", image: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=1200&q=80", tag: "Expansion" },
  { year: "2024", title: "25 Years of Precision", desc: "Celebrating 25 years with 500+ OEM clients, 8 industries, 14 product categories, and everything still made in-house.", image: "https://images.unsplash.com/photo-1600684249816-38cdfcf95c17?w=1200&q=80", tag: "Milestone" },
];

export default function AboutTimelineC() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const fillWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [activeIdx, setActiveIdx] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(
      milestones.length - 1,
      Math.floor(latest * milestones.length)
    );
    setActiveIdx(idx);
  });

  return (
    <section
      ref={containerRef}
      style={{
        background: "#141414",
        position: "relative",
        fontFamily: "var(--font-barlow)",
      }}
    >
      {/* Sticky header with year tracker */}
      <div style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "rgba(20,20,20,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "60px 72px 24px",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 12 }}>
          <div style={{ width: 28, height: 1, background: "#1B91FF" }}/>
          <span style={{
            color: "#1B91FF", fontSize: 10, fontWeight: 700,
            letterSpacing: "3px", textTransform: "uppercase",
            fontFamily: "var(--font-inter)",
          }}>Milestones</span>
        </div>
        <h2 style={{ color: '#ffffff', fontSize: 'clamp(22px,2.8vw,38px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-2px', textTransform: 'uppercase', margin: '8px auto 16px', textAlign: 'center' }}>
          A Story Worth<br/><span style={{ color: 'rgba(255,255,255,0.25)' }}>Reading.</span>
        </h2>
        {/* Year markers with progress fill */}
        <div style={{ position: "relative", paddingTop: 8 }}>
          <div style={{
            position: "absolute",
            left: 0, right: 0,
            top: 15,
            height: 1,
            background: "rgba(255,255,255,0.08)",
          }}/>
          <motion.div style={{
            position: "absolute",
            left: 0,
            top: 15,
            width: fillWidth,
            height: 1,
            background: "#1B91FF",
            boxShadow: "0 0 8px rgba(27,145,255,0.5)",
          }}/>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
          }}>
            {milestones.map((m, i) => (
              <div key={i} style={{
                display: "flex", flexDirection: "column",
                alignItems: "center", gap: 12,
              }}>
                <div style={{
                  width: 12, height: 12,
                  borderRadius: "50%",
                  background: "#1B91FF",
                  opacity: i <= activeIdx ? 1 : 0.3,
                  transform: i === activeIdx ? "scale(1.4)" : "scale(1)",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                }}/>
                <span style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: i <= activeIdx ? "#1B91FF" : "rgba(255,255,255,0.35)",
                  letterSpacing: "-0.3px",
                  fontFamily: "var(--font-barlow)",
                  transition: "color 0.3s ease",
                }}>{m.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Milestone chapters */}
      <div style={{ padding: "80px 72px 120px" }}>
        {milestones.map((m, i) => (
          <MilestoneRow key={i} milestone={m} idx={i} alignRight={i % 2 === 1}/>
        ))}
      </div>
    </section>
  );
}


function MilestoneRow({
  milestone, idx, alignRight,
}: { milestone: typeof milestones[0]; idx: number; alignRight: boolean }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "center center"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [alignRight ? 80 : -80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  return (
    <motion.div
      ref={rowRef}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 60,
        alignItems: "center",
        marginBottom: 120,
        x, opacity,
      }}
    >
      {!alignRight && (
        <>
          <ImageBlock m={milestone}/>
          <TextBlock m={milestone}/>
        </>
      )}
      {alignRight && (
        <>
          <TextBlock m={milestone}/>
          <ImageBlock m={milestone}/>
        </>
      )}
    </motion.div>
  );
}

function ImageBlock({ m }: { m: typeof milestones[0] }) {
  return (
    <div style={{
      position: "relative",
      borderRadius: 20,
      overflow: "hidden",
      aspectRatio: "4/3",
    }}>
      <img src={m.image} alt={m.title}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, transparent 50%, rgba(20,20,20,0.7) 100%)",
      }}/>
    </div>
  );
}

function TextBlock({ m }: { m: typeof milestones[0] }) {
  return (
    <div>
      <div style={{
        fontSize: "clamp(32px,4vw,52px)",
        fontWeight: 900,
        color: "#1B91FF",
        letterSpacing: "-5px",
        lineHeight: 0.9,
        marginBottom: 20,
      }}>{m.year}</div>

      <h3 style={{
        color: "#fff",
        fontSize: "clamp(14px,1.5vw,18px)",
        fontWeight: 800,
        textTransform: "uppercase",
        letterSpacing: "-1px",
        lineHeight: 1.1,
        margin: "0 0 20px",
      }}>{m.title}</h3>

      <p style={{
        color: "rgba(255,255,255,0.55)",
        fontSize: 15, lineHeight: 1.75,
        fontFamily: "var(--font-inter)",
        maxWidth: 460,
        margin: 0,
      }}>{m.desc}</p>

    </div>
  );
}
