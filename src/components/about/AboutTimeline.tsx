"use client";
import { useRef, useState, useEffect } from "react";

const milestones = [
  {
    year: "1999",
    title: "Founded in Delhi",
    desc: "SS International established as a precision rubber sealing manufacturer, initially serving the automotive OEM sector.",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1200&q=80",
    tag: "Foundation",
  },
  {
    year: "2003",
    title: "Railway Certification",
    desc: "Achieved BS 6853 certification, opening doors to Indian Railways and metro rail projects across the country.",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1200&q=80",
    tag: "Certification",
  },
  {
    year: "2007",
    title: "UHF Curing Installed",
    desc: "Invested in microwave-precision UHF curing technology — one of the first rubber manufacturers in India to do so.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    tag: "Technology",
  },
  {
    year: "2011",
    title: "In-House Testing Lab",
    desc: "Opened a dedicated testing laboratory with 10+ precision instruments for full batch validation without third-party dependency.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80",
    tag: "Quality",
  },
  {
    year: "2015",
    title: "EN45545 Certification",
    desc: "Achieved European fire safety standard EN45545 R23 HL3 — enabling supply to European railway and metro operators.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    tag: "Certification",
  },
  {
    year: "2019",
    title: "Global Expansion",
    desc: "Products exported to 40+ countries. Supply partnerships established with OEMs in Europe, Middle East, and Asia-Pacific.",
    image: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=1200&q=80",
    tag: "Expansion",
  },
  {
    year: "2024",
    title: "25 Years of Precision",
    desc: "Celebrating 25 years with 500+ OEM clients, 8 industries, 14 product categories, and everything still made in-house.",
    image: "https://images.unsplash.com/photo-1600684249816-38cdfcf95c17?w=1200&q=80",
    tag: "Milestone",
  },
];

export default function AboutTimeline() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const pct = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setProgress(pct);

      const cardWidth = el.clientWidth * 0.7;
      const idx = Math.round(scrollLeft / cardWidth);
      setActiveIdx(Math.min(idx, milestones.length - 1));
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let isDown = false;
    let startX = 0;
    let scrollStart = 0;

    const onDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - el.offsetLeft;
      scrollStart = el.scrollLeft;
      el.style.cursor = 'grabbing';
    };
    const onLeave = () => {
      isDown = false;
      el.style.cursor = 'grab';
    };
    const onUp = () => {
      isDown = false;
      el.style.cursor = 'grab';
    };
    const onMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      el.scrollLeft = scrollStart - (x - startX) * 1.5;
    };

    el.addEventListener('mousedown', onDown);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('mouseup', onUp);
    el.addEventListener('mousemove', onMove);

    el.style.cursor = 'grab';

    return () => {
      el.removeEventListener('mousedown', onDown);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('mouseup', onUp);
      el.removeEventListener('mousemove', onMove);
    };
  }, []);

  const scrollToCard = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.clientWidth * 0.7;
    el.scrollTo({ left: cardWidth * idx, behavior: "smooth" });
  };

  return (
    <section style={{
      background: "#141414",
      padding: "60px 0 40px",
      fontFamily: "var(--font-barlow)",
      overflow: "hidden",
    }}>

      {/* Header */}
      <div style={{ padding: "0 72px", marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          <div style={{ width: 32, height: 1, background: "#1B91FF" }}/>
          <span style={{
            color: "#1B91FF", fontSize: 10, fontWeight: 700,
            letterSpacing: "3px", textTransform: "uppercase",
            fontFamily: "var(--font-inter)",
          }}>Our Journey</span>
        </div>
        <h2 style={{
          color: "#fff",
          fontSize: "clamp(24px,3vw,38px)",
          fontWeight: 900, lineHeight: 0.95,
          letterSpacing: "-2px", textTransform: "uppercase",
          margin: 0,
        }}>
          25 Years of <span style={{ color: "rgba(255,255,255,0.25)" }}>Milestones.</span>
        </h2>
      </div>

      {/* Sticky Year Tracker */}
      <div style={{
        padding: "0 72px",
        marginBottom: 20,
        position: "relative",
      }}>
        <div style={{
          position: "absolute",
          left: 72,
          right: 72,
          top: "50%",
          height: 1,
          background: "rgba(255,255,255,0.08)",
          transform: "translateY(-50%)",
        }}/>
        <div style={{
          position: "absolute",
          left: 72,
          top: "50%",
          width: `calc((100% - 144px) * ${progress})`,
          height: 1,
          background: "#1B91FF",
          transform: "translateY(-50%)",
          transition: "width 0.2s ease",
          boxShadow: "0 0 8px rgba(27,145,255,0.4)",
        }}/>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}>
          {milestones.map((m, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                padding: 0,
                fontFamily: "var(--font-barlow)",
              }}
            >
              <div style={{
                width: i === activeIdx ? 14 : 10,
                height: i === activeIdx ? 14 : 10,
                borderRadius: "50%",
                background: i <= activeIdx ? "#1B91FF" : "#141414",
                border: `2px solid ${i <= activeIdx ? "#1B91FF" : "rgba(255,255,255,0.3)"}`,
                transition: "all 0.3s ease",
                boxShadow: i === activeIdx ? "0 0 0 4px rgba(27,145,255,0.15)" : "none",
              }}/>
              <span style={{
                fontSize: 13,
                fontWeight: i === activeIdx ? 900 : 600,
                color: i === activeIdx ? "#1B91FF" : "rgba(255,255,255,0.4)",
                letterSpacing: "-0.5px",
                transition: "color 0.3s ease",
                position: "absolute",
                top: 32,
              }}>{m.year}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Hint */}
      <div style={{
        padding: "0 72px",
        marginTop: 28,
        marginBottom: 16,
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="#1B91FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span style={{
          fontSize: 11, color: "rgba(255,255,255,0.4)",
          letterSpacing: "2px", textTransform: "uppercase",
          fontFamily: "var(--font-inter)",
          fontWeight: 600,
        }}>Scroll horizontally to explore</span>
      </div>

      {/* Horizontal scrolling cards */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          gap: 20,
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingLeft: 72,
          paddingRight: 72,
          scrollSnapType: "x mandatory",
        }}
      >
        {milestones.map((m, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: "min(520px, 65vw)",
              height: 420,
              scrollSnapAlign: "start",
              borderRadius: 20,
              overflow: "hidden",
              background: "#1a1a1a",
              border: "1px solid rgba(255,255,255,0.06)",
              position: "relative",
              transition: "transform 0.4s ease, opacity 0.4s ease",
              opacity: i === activeIdx ? 1 : 0.6,
              transform: i === activeIdx ? "scale(1)" : "scale(0.97)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Image */}
            <div style={{
              width: "100%",
              height: 200,
              position: "relative",
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <img
                src={m.image}
                alt={m.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, transparent 40%, rgba(20,20,20,0.95) 100%)",
              }}/>

              {/* Tag */}
              <div style={{
                position: "absolute",
                top: 20, left: 20,
                background: "rgba(27,145,255,0.15)",
                border: "1px solid rgba(27,145,255,0.3)",
                backdropFilter: "blur(8px)",
                padding: "6px 12px",
                borderRadius: 50,
                fontSize: 10,
                fontWeight: 700,
                color: "#1B91FF",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                fontFamily: "var(--font-inter)",
              }}>{m.tag}</div>

              {/* Year overlay on image */}
              <div style={{
                position: "absolute",
                bottom: 16, left: 20,
                fontSize: 44,
                fontWeight: 900,
                color: "#fff",
                letterSpacing: "-2px",
                lineHeight: 0.9,
                textShadow: "0 4px 24px rgba(0,0,0,0.6)",
              }}>{m.year}</div>
            </div>

            {/* Content */}
            <div style={{ padding: "18px 24px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
              <h3 style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "-0.4px",
                lineHeight: 1.1,
                margin: "0 0 10px",
              }}>{m.title}</h3>
              <p style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: 13,
                lineHeight: 1.6,
                fontFamily: "var(--font-inter)",
                margin: 0,
              }}>{m.desc}</p>

              {/* Step indicator */}
              <div style={{
                marginTop: "auto",
                paddingTop: 14,
                borderTop: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
                <span style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-inter)",
                  fontWeight: 700,
                }}>
                  {String(i + 1).padStart(2, "0")} / {String(milestones.length).padStart(2, "0")}
                </span>
                <div style={{
                  fontSize: 10,
                  color: "#1B91FF",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-inter)",
                  fontWeight: 700,
                }}>● {m.tag}</div>
              </div>
            </div>
          </div>
        ))}

        {/* Spacer at end so last card can fully scroll */}
        <div style={{ flexShrink: 0, width: 72 }}/>
      </div>

      {/* Bottom progress bar */}
      <div style={{
        padding: "20px 72px 0",
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}>
        <span style={{
          fontSize: 10,
          color: "rgba(255,255,255,0.3)",
          letterSpacing: "2px",
          fontFamily: "var(--font-inter)",
          fontWeight: 700,
          minWidth: 60,
        }}>{String(activeIdx + 1).padStart(2, "0")} / {String(milestones.length).padStart(2, "0")}</span>
        <div style={{
          flex: 1,
          height: 2,
          background: "rgba(255,255,255,0.08)",
          borderRadius: 1,
          overflow: "hidden",
        }}>
          <div style={{
            width: `${progress * 100}%`,
            height: "100%",
            background: "#1B91FF",
            transition: "width 0.2s ease",
          }}/>
        </div>
        <span style={{
          fontSize: 10,
          color: "rgba(255,255,255,0.3)",
          letterSpacing: "2px",
          fontFamily: "var(--font-inter)",
          fontWeight: 700,
          minWidth: 60,
          textAlign: "right",
        }}>1999 → 2024</span>
      </div>
    </section>
  );
}
