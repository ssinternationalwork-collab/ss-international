'use client';
import { useEffect, useRef, useState } from 'react';

const NAVY = '#141414';
const BLUE = '#1B91FF';
const BRONZE = '#B8935A';

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

export default function BrandStatementV2() {
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

  const count8 = useCountUp(8, 1500, hasStarted);
  const count300 = useCountUp(300, 2000, hasStarted);
  const count14 = useCountUp(14, 1600, hasStarted);
  const count25 = useCountUp(25, 1800, hasStarted);
  const count5000 = useCountUp(5000, 2200, hasStarted);
  const count40 = useCountUp(40, 1700, hasStarted);

  const STATS = [
    { value: count8, suffix: '', label: 'Industries Served', icon: 'ti-building-factory', color: BRONZE },
    { value: count300, suffix: '+', label: 'OEM Clients', icon: 'ti-users', color: BLUE },
    { value: count14, suffix: '', label: 'Product Categories', icon: 'ti-box', color: BLUE },
    { value: count25, suffix: '+', label: 'Years of Expertise', icon: 'ti-calendar-stats', color: BRONZE },
    { value: count5000, suffix: '+', label: 'Profiles Developed', icon: 'ti-layers-intersect', color: BLUE },
    { value: count40, suffix: '+', label: 'Countries Served', icon: 'ti-world', color: BRONZE },
  ];

  return (
    <section ref={sectionRef} style={{ background: '#ffffff', padding: '100px 72px 140px', fontFamily: 'var(--font-barlow)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', marginBottom: 64 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ width: 28, height: 1.5, background: BRONZE }}/>
              <span style={{ color: BRONZE, fontSize: 13, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>Who We Are</span>
            </div>
            <h2 style={{ color: NAVY, fontSize: 'clamp(28px,3vw,42px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-1.5px', textTransform: 'uppercase', margin: '0 0 24px' }}>
              Precision Engineered.<br/>
              <span style={{ color: '#D7D7D6' }}>Built to Last.</span>
            </h2>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, fontFamily: 'var(--font-inter)', margin: '0 0 32px', maxWidth: 480 }}>
              We are a rubber sealing manufacturer with 25+ years of in-house expertise — engineering EPDM, NBR and silicone profiles for OEM clients across automotive, railways, architecture, shipping, power and infrastructure sectors worldwide.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 12, height: 520 }}>
            <div style={{ gridRow: 'span 2', borderRadius: 20, overflow: 'hidden' }}>
              <img src='https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80' alt='Manufacturing' style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
            </div>
            <div style={{ borderRadius: 20, overflow: 'hidden' }}>
              <img src='/ssi_office.jpg' alt='SSI Office' style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
            </div>
            <div style={{ borderRadius: 20, overflow: 'hidden' }}>
              <img src='https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80' alt='Testing' style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: 40,
          display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)',
          background: '#fff',
          border: '1px solid #e5e5e5',
          borderTop: '4px solid #B8935A',
          borderRadius: 16,
          boxShadow: '0 16px 40px rgba(20,20,20,0.10)',
        }}>
          {STATS.map((s, i) => (
            <div key={i}
              style={{
                padding: '28px 12px', textAlign: 'center',
                background: '#fff',
                borderRight: i < STATS.length - 1 ? '1px solid #ececec' : 'none',
                transition: 'background 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#FAF6F0'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#fff'; }}
            >
              <i className={`ti ${s.icon}`} style={{ fontSize: 20, color: s.color, display: 'block', lineHeight: 1, marginBottom: 4 }} aria-hidden="true"/>
              <div style={{ fontSize: 28, fontWeight: 800, color: NAVY, marginTop: 10, fontFamily: 'var(--font-barlow)' }}>
                {s.value}{s.suffix}
              </div>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#999', letterSpacing: '0.5px', textTransform: 'uppercase', marginTop: 5, fontFamily: 'var(--font-inter)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
