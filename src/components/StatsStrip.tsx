"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 8, suffix: "+", label: "Industries Served" },
  { value: 14, suffix: "", label: "Product Categories" },
  { value: 5, suffix: "", label: "International Standards" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function StatsStrip() {
  const ref = useRef<HTMLElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const nums = ref.current?.querySelectorAll<HTMLSpanElement>(".stat-num");
    if (!nums) return;

    const animate = () => {
      if (animated.current) return;
      animated.current = true;

      nums.forEach((el, i) => {
        const target = stats[i].value;
        const duration = 1800;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target).toString();
          if (progress < 1) requestAnimationFrame(tick);
          else el.textContent = target.toString();
        };
        requestAnimationFrame(tick);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) animate(); },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      style={{
        background: "#0a0f18",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "0 48px",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
      }}
    >
      {stats.map((s, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          style={{
            padding: "52px 0",
            textAlign: "center",
            borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
            position: "relative",
          }}
        >
          <div style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 32,
            height: 2,
            background: i === 0 ? "#1B91FF" : "transparent",
          }} />

          <div style={{
            fontFamily: "var(--font-barlow)",
            fontSize: 56,
            fontWeight: 800,
            letterSpacing: "-2px",
            lineHeight: 1,
            color: "#fff",
            marginBottom: 12,
          }}>
            <span className="stat-num">0</span>
            <span style={{ color: "#1B91FF" }}>{s.suffix}</span>
          </div>

          <div style={{
            fontFamily: "var(--font-inter)",
            fontSize: 12,
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
          }}>
            {s.label}
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
}
