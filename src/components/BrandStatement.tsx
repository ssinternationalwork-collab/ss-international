"use client";
import { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const photoInner = {
  rest: { scale: 1 },
  hovered: { scale: 1.06, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

function useCountUp(target: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration, shouldStart]);
  return count;
}

export default function BrandStatement() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHasStarted(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const count8 = useCountUp(8, 1800, hasStarted);
  const count300 = useCountUp(300, 2000, hasStarted);
  const count14 = useCountUp(14, 1600, hasStarted);
  const count25 = useCountUp(25, 1800, hasStarted);
  const count5000 = useCountUp(5000, 2200, hasStarted);

  return (
    <section style={{
      background: '#fff',
      padding: '60px 72px',
      fontFamily: 'var(--font-barlow)',
    }}>
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 80,
        alignItems: 'center',
      }}>

        {/* LEFT — Text */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ width: 28, height: 1.5, background: '#1B91FF' }}/>
            <span style={{ color: '#1B91FF', fontSize: 13, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>Who We Are</span>
          </div>

          <h2 style={{ color: '#141414', fontSize: 'clamp(28px,3vw,42px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-1.5px', textTransform: 'uppercase', margin: '0 0 24px' }}>
            30+ Years of Engineering<br/>
            <span style={{ color: '#D7D7D6' }}>Rubber, Silicone & PVC Solutions.</span>
          </h2>

          <p style={{ color: '#555', fontSize: 15, lineHeight: 1.8, fontFamily: 'var(--font-inter)', margin: '0 0 40px' }}>
            SS International Industries LLP is a precision rubber sealing manufacturer with <strong>25+ years of expertise</strong> — engineering high-performance EPDM, NBR and silicone profiles for OEM clients across automotive, railways, architecture, shipping, power and infrastructure sectors worldwide.
          </p>

          <div style={{ width: 48, height: 2, background: '#1B91FF', marginBottom: 32 }}/>

          {/* KPIs */}
          <div ref={sectionRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16 }}>
            {[
              { value: count8, suffix: '', label: 'Industries\nServed' },
              { value: count300, suffix: '+', label: 'Clients\nServed' },
              { value: count14, suffix: '', label: 'Product\nCategories' },
              { value: count25, suffix: '+', label: 'Years of\nExperience' },
              { value: count5000, suffix: '+', label: 'Profile Designs\nDeveloped' },
              { value: 'Global' as any, suffix: '', label: 'Export\nPresence' },
            ].map((kpi, i) => (
              <div key={i}>
                <div style={{ fontSize: 'clamp(18px,2vw,26px)', fontWeight: 900, color: '#141414', letterSpacing: '-2px', lineHeight: 1 }}>
                  {kpi.value}{kpi.suffix}
                </div>
                <div style={{ fontSize: 10, color: '#999', fontFamily: 'var(--font-inter)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginTop: 6, whiteSpace: 'pre-line' }}>
                  {kpi.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Images */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 12, height: 460 }}>
          <div style={{ gridRow: 'span 2', borderRadius: 16, overflow: 'hidden' }}>
            <img src='https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80' alt='Manufacturing' style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
          </div>
          <div style={{ borderRadius: 16, overflow: 'hidden' }}>
            <img src='/ssi_office.jpg' alt='Testing' style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
          </div>
          <div style={{ borderRadius: 16, overflow: 'hidden' }}>
            <img src='https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&q=80' alt='Extrusion' style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
          </div>
        </div>

      </div>
    </section>
  );
}
