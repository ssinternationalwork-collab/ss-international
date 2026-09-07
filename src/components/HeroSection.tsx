"use client";
import { useEffect, useState } from "react";

const WORDS = ["Automotive", "Railways", "Architecture", "Mining", "Shipping", "Power"];

export default function HeroSection() {
  const [idx, setIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIdx(i => (i + 1) % WORDS.length);
        setAnimating(false);
      }, 400);
    }, 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      fontFamily: "var(--font-barlow)",
    }}>
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
      }}>
        <img src="https://images.unsplash.com/photo-1714504904786-b6732390b206?w=1200&q=80"
          className="hero-img" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} alt="" />
        <img src="https://images.unsplash.com/photo-1683470156390-703e9313dab6?w=1200&q=80"
          className="hero-img" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} alt="" />
        <img src="https://images.unsplash.com/photo-1600684249816-38cdfcf95c17?w=1200&q=80"
          className="hero-img" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} alt="" />
        <img src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=1200&q=80"
          className="hero-img" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} alt="" />
      </div>

      <div style={{
        position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
        background: "linear-gradient(to right, rgba(5,8,15,0) 0%, rgba(5,8,15,0.35) 22%, rgba(5,8,15,0.35) 28%, rgba(5,8,15,0) 35%, rgba(5,8,15,0) 40%, rgba(5,8,15,0.35) 47%, rgba(5,8,15,0.35) 53%, rgba(5,8,15,0) 60%, rgba(5,8,15,0) 65%, rgba(5,8,15,0.35) 72%, rgba(5,8,15,0.35) 78%, rgba(5,8,15,0) 85%)",
      }}/>

      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "linear-gradient(to bottom, rgba(5,8,15,0.35) 0%, rgba(5,8,15,0.4) 50%, rgba(5,8,15,0.75) 100%)",
      }}/>


      <div style={{
        position: "relative", zIndex: 2,
        flex: 1, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "120px 52px 60px",
      }}>
        <div style={{
          fontSize: "clamp(52px,7vw,96px)", fontWeight: 900,
          lineHeight: 0.93, letterSpacing: "-3px", textTransform: "uppercase",
        }}>
          <div style={{
            color: "#ffffff", marginBottom: 4,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
          }}>Precision</div>

          <div style={{
            color: "rgba(255,255,255,0.35)", marginBottom: 4,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.8s ease 0.45s, transform 0.8s ease 0.45s",
          }}>Sealing for</div>

          <div style={{
            height: "clamp(52px,7vw,96px)", overflow: "hidden",
            display: "flex", alignItems: "flex-end", justifyContent: "center",
            position: "relative",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s",
          }}>
            <div style={{
              color: "#1B91FF",
              transform: animating ? "translateY(-110%)" : "translateY(0)",
              opacity: animating ? 0 : 1,
              transition: "transform 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease",
              fontSize: "clamp(52px,7vw,96px)", fontWeight: 900,
              letterSpacing: "-3px", textTransform: "uppercase",
              lineHeight: 0.93, whiteSpace: "nowrap",
            }}>{WORDS[idx]}</div>

            <div style={{
              position: "absolute",
              bottom: -2,
              left: "50%",
              transform: "translateX(-50%)",
              width: animating ? "0%" : "min(280px, 40%)",
              height: 2,
              background: "#1B91FF",
              borderRadius: 2,
              opacity: 0.7,
              boxShadow: "0 0 12px rgba(27,145,255,0.6)",
              transition: "width 0.5s cubic-bezier(0.25,0.46,0.45,0.94) 0.1s",
            }}/>
          </div>
        </div>

        <p style={{
          color: "rgba(255,255,255,0.55)", fontSize: 15, lineHeight: 1.75,
          fontFamily: "var(--font-inter)", maxWidth: 560, margin: "32px auto 0",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.7s ease 0.75s, transform 0.7s ease 0.75s",
        }}>
          Manufacturer of engineered rubber profiles, gaskets, and sealing solutions, delivering custom extruded and moulded products for demanding OEM applications.
        </p>

        <div style={{
          display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 44,
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.7s ease 0.85s, transform 0.7s ease 0.85s",
        }}>
          <button style={{
            background: "#1B91FF", color: "#fff", border: "none",
            padding: "16px 36px", fontSize: 13, fontWeight: 700,
            letterSpacing: "0.5px", textTransform: "none",
            borderRadius: 50, cursor: "pointer",
            fontFamily: "var(--font-barlow)",
            display: "flex", alignItems: "center", gap: 8,
            transition: "background 0.2s ease, transform 0.2s ease",
          }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#0f7ae0";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "#1B91FF";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Explore Products
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7H11M7 3L11 7L7 11" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div style={{
        position: "absolute", bottom: 100, right: 40, zIndex: 3,
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.7s ease 1.2s",
      }}>
        <span style={{
          color: "rgba(255,255,255,0.3)", fontSize: 8,
          letterSpacing: "3px", textTransform: "uppercase",
          fontFamily: "var(--font-inter)",
          writingMode: "vertical-rl",
        }}>Scroll</span>
        <div style={{
          width: 1, height: 40,
          background: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)",
          animation: "scrollPulse 2s ease-in-out infinite",
        }}/>
      </div>

      <style>{`
        @keyframes scrollPulse{0%,100%{opacity:0.3;transform:scaleY(0.7)}50%{opacity:1;transform:scaleY(1)}}
        @keyframes ambientZoom{0%{transform:scale(1)}50%{transform:scale(1.07)}100%{transform:scale(1)}}
        .hero-img{animation:ambientZoom 24s ease-in-out infinite}
        .hero-img:nth-child(2){animation-delay:-6s}
        .hero-img:nth-child(3){animation-delay:-12s}
        .hero-img:nth-child(4){animation-delay:-18s}
      `}</style>
    </section>
  );
}
