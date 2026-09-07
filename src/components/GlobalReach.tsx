'use client';
import { useEffect, useRef, useState } from 'react';

const BLUE = '#1B91FF';
const BRONZE = '#B8935A';
const ARC_STEP_MS = 1800;

const ARCS = [
  { startLat: 28.7041, startLng: 77.1025, endLat: 51.507, endLng: -0.127 },
  { startLat: 28.7041, startLng: 77.1025, endLat: 52.52, endLng: 13.405 },
  { startLat: 28.7041, startLng: 77.1025, endLat: 40.712, endLng: -74.006 },
  { startLat: 28.7041, startLng: 77.1025, endLat: 25.204, endLng: 55.270 },
  { startLat: 28.7041, startLng: 77.1025, endLat: 1.352, endLng: 103.819 },
  { startLat: 28.7041, startLng: 77.1025, endLat: -33.868, endLng: 151.209 },
  { startLat: 28.7041, startLng: 77.1025, endLat: 35.676, endLng: 139.650 },
  { startLat: 28.7041, startLng: 77.1025, endLat: -23.550, endLng: -46.633 },
  { startLat: 28.7041, startLng: 77.1025, endLat: -26.204, endLng: 28.047 },
  { startLat: 28.7041, startLng: 77.1025, endLat: 55.755, endLng: 37.617 },
];

const DEST_POINTS = [
  { lat: 51.507, lng: -0.127, label: 'United Kingdom' },
  { lat: 52.52, lng: 13.405, label: 'Germany' },
  { lat: 40.712, lng: -74.006, label: 'United States' },
  { lat: 25.204, lng: 55.270, label: 'UAE' },
  { lat: 1.352, lng: 103.819, label: 'Singapore' },
  { lat: -33.868, lng: 151.209, label: 'Australia' },
  { lat: 35.676, lng: 139.650, label: 'Japan' },
  { lat: -23.550, lng: -46.633, label: 'Brazil' },
  { lat: -26.204, lng: 28.047, label: 'South Africa' },
  { lat: 55.755, lng: 37.617, label: 'Russia' },
];

const INDIA_POINT = { lat: 28.7041, lng: 77.1025, size: 1.2, color: BLUE, label: 'India' };

export default function GlobalReach() {
  const globeRef = useRef<any>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [Globe, setGlobe] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    import('react-globe.gl').then((mod) => setGlobe(() => mod.default));
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (timerRef.current) clearInterval(timerRef.current);
          setActiveIndex(-1);
          if (globeRef.current) {
            globeRef.current.pointOfView({ lat: 20, lng: 78, altitude: 2 }, 800);
          }
          let i = -1;
          timerRef.current = setInterval(() => {
            i += 1;
            if (i >= ARCS.length) {
              if (timerRef.current) clearInterval(timerRef.current);
              return;
            }
            setActiveIndex(i);
          }, ARC_STEP_MS);
        } else {
          if (timerRef.current) clearInterval(timerRef.current);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.3;
      globeRef.current.controls().enableZoom = false;
      globeRef.current.pointOfView({ lat: 20, lng: 78, altitude: 2 }, 0);
    }
  }, [Globe]);

  const visibleArcs = activeIndex >= 0 ? ARCS.slice(0, activeIndex + 1) : [];
  const visibleLabels = [
    { lat: INDIA_POINT.lat, lng: INDIA_POINT.lng, label: 'India' },
    ...DEST_POINTS,
  ];

  return (
    <section ref={sectionRef} style={{
      background: '#0f0f0f',
      fontFamily: 'var(--font-barlow)',
      padding: '100px 72px',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '80vh', height: '80vh',
        background: 'radial-gradient(circle, rgba(184,147,90,0.10) 0%, transparent 65%)',
        pointerEvents: 'none',
      }}/>
      <div style={{ textAlign: 'center', marginBottom: 40, position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <div style={{ width: 28, height: 1, background: BRONZE }}/>
          <span style={{
            color: BRONZE, fontSize: 13, fontWeight: 700,
            letterSpacing: '3px', textTransform: 'uppercase',
            fontFamily: 'var(--font-inter)',
          }}>Global Presence</span>
          <div style={{ width: 28, height: 1, background: BRONZE }}/>
        </div>
        <h2 style={{
          color: '#ffffff',
          fontSize: 'clamp(32px,4.5vw,58px)',
          fontWeight: 900, lineHeight: 0.95,
          letterSpacing: '-2px', textTransform: 'uppercase',
          margin: '0 0 18px',
        }}>
          Our Products.<br/><span style={{ color: 'rgba(255,255,255,0.15)' }}>Reach Every Corner.</span>
        </h2>
      </div>
      <div ref={containerRef} style={{
        display: 'flex', justifyContent: 'center',
        position: 'relative', zIndex: 1,
      }}>
        {Globe && (
          <Globe
            ref={globeRef}
            width={600}
            height={600}
            backgroundColor="rgba(0,0,0,0)"
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            arcsData={visibleArcs}
            arcColor={() => 'rgba(184,147,90,0.9)'}
            arcOpacity={1}
            arcStroke={0.8}
            arcDashLength={0.4}
            arcDashGap={0.15}
            arcDashAnimateTime={ARC_STEP_MS}
            arcAltitudeAutoScale={0.12}
            atmosphereColor={BLUE}
            atmosphereAltitude={0.15}
            animateIn={true}
            htmlElementsData={visibleLabels}
            htmlElement={(d: any) => {
              const el = document.createElement('div');
              el.style.cssText = `
                display: flex;
                flex-direction: column;
                align-items: center;
                pointer-events: none;
                transform: translate(-50%, -100%);
              `;
              el.innerHTML = `
                <div style='
                  color: white;
                  font-size: 11px;
                  font-weight: 600;
                  font-family: sans-serif;
                  white-space: nowrap;
                  margin-bottom: 3px;
                  text-shadow: 0 1px 4px rgba(0,0,0,0.8);
                  text-align: center;
                '>${d.label}</div>
                <svg width='16' height='22' viewBox='0 0 24 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M12 0C5.373 0 0 5.373 0 12c0 8 12 20 12 20S24 20 24 12C24 5.373 18.627 0 12 0z' fill='#B8935A' opacity='0.9'/>
                  <circle cx='12' cy='12' r='4' fill='white'/>
                </svg>
              `;
              return el;
            }}
          />
        )}
      </div>
    </section>
  );
}
