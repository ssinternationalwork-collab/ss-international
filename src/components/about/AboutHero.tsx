'use client';
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const IMAGES_1 = [
  "https://images.unsplash.com/photo-1662582038553-06b27d5d5870?w=900&q=80",
  "https://images.unsplash.com/photo-1600684249816-38cdfcf95c17?w=900&q=80",
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80",
  "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=900&q=80",
];
const IMAGES_2 = [
  "https://images.unsplash.com/photo-1622645916455-aa13b87438ec?w=900&q=80",
  "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=900&q=80",
  "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=900&q=80",
  "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=900&q=80",
];
const IMAGES_3 = [
  "https://images.unsplash.com/photo-1683470156390-703e9313dab6?w=900&q=80",
  "https://images.unsplash.com/photo-1714504904786-b6732390b206?w=900&q=80",
  "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80",
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&q=80",
];

export default function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.3], [40, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);
  const y1 = useTransform(scrollYProgress, [0.3, 1], ["-10%", "2%"]);
  const y2 = useTransform(scrollYProgress, [0.3, 1], ["15%", "5%"]);
  const y3 = useTransform(scrollYProgress, [0.3, 1], ["-10%", "2%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.25], [0.7, 0]);

  const [unfolded, setUnfolded] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setUnfolded(latest >= 0.32);
  });

  const imgStyle: React.CSSProperties = {
    width: "100%",
    aspectRatio: "16/9",
    objectFit: "cover",
    borderRadius: 8,
    display: "block",
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        height: "200vh",
        background: "#fff",
        fontFamily: "var(--font-barlow)",
      }}
    >
      {/* Text */}
      <div style={{
        position: "relative",
        zIndex: 10,
        textAlign: "center",
        padding: "120px 72px 48px",
        maxWidth: 1100,
        margin: "0 auto",
      }}>
        <h1 style={{
          color: "#141414",
          fontSize: "clamp(36px,4.5vw,68px)",
          fontWeight: 900, lineHeight: 0.93,
          letterSpacing: "-3px", textTransform: "uppercase",
          margin: 0,
        }}>25 Years of</h1>

        <h1 style={{
          color: "#D7D7D6",
          fontSize: "clamp(36px,4.5vw,68px)",
          fontWeight: 900, lineHeight: 0.93,
          letterSpacing: "-3px", textTransform: "uppercase",
          margin: "0 0 20px",
        }}>Precision Engineering.</h1>

        <p style={{
          color: "#888", fontSize: 15, lineHeight: 1.75,
          fontFamily: "var(--font-inter)",
          maxWidth: 800, margin: "0 auto 28px",
        }}>
          From a single factory in Delhi to precision engineering defined by innovation, scale, and uncompromising quality.
        </p>

      </div>

      {/* Gallery */}
      <div style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        overflow: "hidden",
        ...(unfolded ? {} : {
          perspective: "1200px",
          perspectiveOrigin: "center top",
        }),
      }}>
        {!unfolded && (
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, rgba(10,14,25,0.85) 0%, rgba(15,30,60,0.7) 50%, rgba(20,40,80,0.55) 100%)",
              opacity: overlayOpacity,
              zIndex: 5,
              pointerEvents: "none",
            }}
          />
        )}
        <motion.div
          style={{
            ...(unfolded ? {} : {
              rotateX,
              scale,
              transformStyle: "preserve-3d",
              transformOrigin: "50% 0%",
            }),
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 8,
            width: "100%",
            height: "100%",
            padding: "0 8px",
          }}
        >
          <motion.div style={{
            y: y1,
            display: "flex", flexDirection: "column", gap: 8,
            marginTop: "-8px",
          }}>
            {IMAGES_1.map((src, i) => (
              <img key={i} src={src} alt="" style={imgStyle}/>
            ))}
          </motion.div>

          <motion.div style={{
            y: y2,
            display: "flex", flexDirection: "column", gap: 8,
            marginTop: "-50%",
          }}>
            {IMAGES_2.map((src, i) => (
              <img key={i} src={src} alt="" style={imgStyle}/>
            ))}
          </motion.div>

          <motion.div style={{
            y: y3,
            display: "flex", flexDirection: "column", gap: 8,
            marginTop: "-8px",
          }}>
            {IMAGES_3.map((src, i) => (
              <img key={i} src={src} alt="" style={imgStyle}/>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
