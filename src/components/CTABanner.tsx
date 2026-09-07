"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function CTABanner() {
  return (
    <section style={{
      background: "#141414",
      padding: "100px 52px",
      fontFamily: "var(--font-barlow)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background SS watermark */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        pointerEvents: "none", overflow: "hidden",
      }}>
        <span style={{
          color: "#fff", opacity: 0.025,
          fontSize: 400, fontWeight: 900,
          letterSpacing: "-20px", lineHeight: 1,
          fontFamily: "var(--font-barlow)",
          userSelect: "none",
        }}>SS</span>
      </div>

      <div style={{
        position: "relative", zIndex: 2,
        display: "grid",
        gridTemplateColumns: "1fr auto",
        alignItems: "center",
        gap: 48,
        maxWidth: 1100,
      }}>
        {/* Left */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeUp} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 28, height: 1, background: "#1B91FF" }}/>
            <span style={{ color: "#1B91FF", fontSize: 10, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", fontFamily: "var(--font-inter)" }}>
              Get In Touch
            </span>
          </motion.div>
          <motion.h2 variants={fadeUp} style={{
            color: "#fff",
            fontSize: "clamp(32px,4vw,52px)",
            fontWeight: 900, lineHeight: 1.0,
            letterSpacing: "-2px", textTransform: "uppercase",
            margin: "0 0 16px",
          }}>
            Ready to Find Your<br/>
            <span style={{ color: "#1B91FF" }}>Sealing Solution?</span>
          </motion.h2>
          <motion.p variants={fadeUp} style={{
            color: "rgba(255,255,255,0.4)",
            fontSize: 14, lineHeight: 1.7,
            fontFamily: "var(--font-inter)",
            margin: 0, maxWidth: 480,
          }}>
            Whether you need a standard profile or a fully custom engineered solution — our team is ready to help. Share your requirement and get a response within 24 hours.
          </motion.p>
        </motion.div>

        {/* Right — CTAs */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}
        >
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            style={{
              background: "#1B91FF", color: "#fff", border: "none",
              padding: "16px 36px", fontSize: 12, fontWeight: 700,
              letterSpacing: "1px", textTransform: "uppercase",
              borderRadius: "50px", cursor: "pointer",
              fontFamily: "var(--font-barlow)",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#0f7ae0")}
            onMouseLeave={e => (e.currentTarget.style.background = "#1B91FF")}
          >
            Get in Touch
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2.5 6.5H10.5M6.5 2.5L10.5 6.5L6.5 10.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            style={{
              background: "transparent", color: "rgba(255,255,255,0.55)",
              border: "1px solid rgba(255,255,255,0.15)",
              padding: "16px 36px", fontSize: 12, fontWeight: 600,
              letterSpacing: "1px", textTransform: "uppercase",
              borderRadius: "50px", cursor: "pointer",
              fontFamily: "var(--font-barlow)",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}
          >
            Download Catalogue
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 2.5V9.5M3.5 6.5L6.5 9.5L9.5 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
