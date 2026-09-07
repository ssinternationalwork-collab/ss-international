"use client";
import { useState } from "react";

const certs = [
  {
    code: "EN 45545",
    title: "Fire Safety — Railways",
    desc: "R23 HL3 certified for fire retardant rubber profiles used in European railway and metro applications.",
    region: "Europe",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1200&q=80",
  },
  {
    code: "DIN 7863",
    title: "Automotive Seals",
    desc: "German industrial standard for rubber profiles used in passenger vehicle door and window sealing systems.",
    region: "Germany",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1200&q=80",
  },
  {
    code: "BS 6853",
    title: "Railway Materials UK",
    desc: "British Standard for fire safety of materials used in the construction of railway rolling stock.",
    region: "United Kingdom",
    image: "https://images.unsplash.com/photo-1600684249816-38cdfcf95c17?w=1200&q=80",
  },
  {
    code: "ISO 3934",
    title: "Rubber Sealing Systems",
    desc: "International standard for sealing systems used in road vehicle windows and openings.",
    region: "International",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
  },
  {
    code: "ASTM C-864",
    title: "Compression Seals",
    desc: "American standard for dense elastomeric compression seals for concrete pavement and bridges.",
    region: "United States",
    image: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=1200&q=80",
  },
];

export default function AboutCertifications() {
  const [active, setActive] = useState(0);

  return (
    <section style={{
      background: "#141414",
      padding: "80px 72px",
      fontFamily: "var(--font-barlow)",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
            <div style={{ width: 32, height: 1, background: "#1B91FF" }}/>
            <span style={{
              color: "#1B91FF", fontSize: 10, fontWeight: 700,
              letterSpacing: "3px", textTransform: "uppercase",
              fontFamily: "var(--font-inter)",
            }}>Standards & Certifications</span>
          </div>
          <h2 style={{
            color: "#fff",
            fontSize: "clamp(32px,4vw,52px)",
            fontWeight: 900, lineHeight: 0.95,
            letterSpacing: "-2px", textTransform: "uppercase",
            margin: 0,
          }}>
            Built to Global <span style={{ color: "rgba(255,255,255,0.25)" }}>Standards.</span>
          </h2>
        </div>

        {/* Horizontal accordion */}
        <div style={{
          display: "flex",
          gap: 8,
          height: 440,
        }}>
          {certs.map((cert, i) => {
            const isActive = i === active;
            return (
              <div
                key={i}
                onMouseEnter={() => setActive(i)}
                style={{
                  flex: isActive ? "5 1 0%" : "1 1 0%",
                  position: "relative",
                  borderRadius: 16,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "flex 0.55s cubic-bezier(0.4,0,0.2,1)",
                  background: "#1a1a1a",
                  border: isActive
                    ? "1px solid rgba(27,145,255,0.4)"
                    : "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Background image — only meaningfully visible when active */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${cert.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: isActive ? 0.35 : 0,
                  transition: "opacity 0.55s ease",
                }}/>

                {/* Dark gradient overlay */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: isActive
                    ? "linear-gradient(to top, rgba(20,20,20,0.97) 0%, rgba(20,20,20,0.6) 60%, rgba(20,20,20,0.3) 100%)"
                    : "rgba(26,26,26,0.5)",
                  transition: "background 0.55s ease",
                }}/>

                {/* Collapsed state — vertical label */}
                {!isActive && (
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "28px 0",
                  }}>
                    <span style={{
                      fontSize: 12,
                      fontWeight: 800,
                      color: "rgba(255,255,255,0.25)",
                      fontFamily: "var(--font-inter)",
                    }}>{String(i + 1).padStart(2, "0")}</span>

                    <div style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                      fontSize: 16,
                      fontWeight: 800,
                      color: "rgba(255,255,255,0.7)",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }}>{cert.code}</div>

                    <div style={{
                      width: 6, height: 6,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.2)",
                    }}/>
                  </div>
                )}

                {/* Expanded state — full content */}
                {isActive && (
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "32px 36px",
                  }}>
                    {/* Top row */}
                    <div style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                    }}>
                      <div style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "7px 14px",
                        background: "rgba(27,145,255,0.15)",
                        border: "1px solid rgba(27,145,255,0.35)",
                        backdropFilter: "blur(8px)",
                        borderRadius: 50,
                      }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#1B91FF" }}/>
                        <span style={{
                          color: "#1B91FF", fontSize: 10, fontWeight: 700,
                          letterSpacing: "1.5px", textTransform: "uppercase",
                          fontFamily: "var(--font-inter)",
                        }}>{cert.region}</span>
                      </div>
                      <span style={{
                        fontSize: 12,
                        fontWeight: 800,
                        color: "rgba(255,255,255,0.3)",
                        fontFamily: "var(--font-inter)",
                      }}>{String(i + 1).padStart(2, "0")} / {String(certs.length).padStart(2, "0")}</span>
                    </div>

                    {/* Bottom content */}
                    <div>
                      <div style={{
                        fontSize: "clamp(36px,4.5vw,64px)",
                        fontWeight: 900,
                        color: "#1B91FF",
                        letterSpacing: "-2px",
                        lineHeight: 0.95,
                        marginBottom: 14,
                        textShadow: "0 2px 30px rgba(27,145,255,0.3)",
                      }}>{cert.code}</div>

                      <h3 style={{
                        color: "#fff",
                        fontSize: 24,
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "-0.5px",
                        lineHeight: 1.1,
                        margin: "0 0 14px",
                      }}>{cert.title}</h3>

                      <p style={{
                        color: "rgba(255,255,255,0.6)",
                        fontSize: 14,
                        lineHeight: 1.7,
                        fontFamily: "var(--font-inter)",
                        margin: 0,
                        maxWidth: 420,
                      }}>{cert.desc}</p>

                      <div style={{
                        marginTop: 24,
                        width: 60,
                        height: 2,
                        background: "#1B91FF",
                        borderRadius: 1,
                      }}/>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Hint */}
        <div style={{
          marginTop: 24,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="#1B91FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{
            fontSize: 10, color: "rgba(255,255,255,0.35)",
            letterSpacing: "2px", textTransform: "uppercase",
            fontFamily: "var(--font-inter)",
            fontWeight: 600,
          }}>Hover each standard to explore</span>
        </div>

      </div>
    </section>
  );
}
