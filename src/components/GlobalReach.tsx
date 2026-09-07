'use client';
import { useEffect, useRef, useState } from 'react';

const BLUE = '#1B91FF';
const BRONZE = '#B8935A';
const ROUTE_DRAW_MS = 1500;
const ROUTE_PAUSE_MS = 220;
const ROUTE_START_DELAY_MS = 260;

const INDIA = { lat: 28.7041, lng: 77.1025 };

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

const INDIA_POINT = { ...INDIA, label: 'India', isOrigin: true };

function buildRaisedPath(endLat: number, endLng: number) {
  const steps = 40;
  const points: Array<{ lat: number; lng: number; alt: number }> = [];

  let lngDelta = endLng - INDIA.lng;
  if (lngDelta > 180) lngDelta -= 360;
  if (lngDelta < -180) lngDelta += 360;

  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps;
    const lat = INDIA.lat + (endLat - INDIA.lat) * t;
    let lng = INDIA.lng + lngDelta * t;
    if (lng > 180) lng -= 360;
    if (lng < -180) lng += 360;

    const distance = Math.hypot(endLat - INDIA.lat, lngDelta);
    const peakAlt = Math.min(0.2, Math.max(0.075, distance / 850));
    const alt = i === 0 || i === steps ? 0.002 : Math.sin(Math.PI * t) * peakAlt;

    points.push({ lat, lng, alt });
  }

  return points;
}

const ROUTES = DEST_POINTS.map((destination) => ({
  label: destination.label,
  points: buildRaisedPath(destination.lat, destination.lng),
}));

export default function GlobalReach() {
  const globeRef = useRef<any>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [Globe, setGlobe] = useState<any>(null);
  const [visibleRouteCount, setVisibleRouteCount] = useState(0);

  useEffect(() => {
    import('react-globe.gl').then((mod) => setGlobe(() => mod.default));
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const clearRouteTimer = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        clearRouteTimer();

        if (!entry.isIntersecting) {
          setVisibleRouteCount(0);
          return;
        }

        setVisibleRouteCount(0);

        if (globeRef.current) {
          globeRef.current.pointOfView({ lat: 20, lng: 78, altitude: 2 }, 700);
        }

        const revealNextRoute = (nextCount: number) => {
          if (nextCount > ROUTES.length) return;

          setVisibleRouteCount(nextCount);

          if (nextCount < ROUTES.length) {
            timerRef.current = setTimeout(
              () => revealNextRoute(nextCount + 1),
              ROUTE_DRAW_MS + ROUTE_PAUSE_MS,
            );
          }
        };

        timerRef.current = setTimeout(
          () => revealNextRoute(1),
          ROUTE_START_DELAY_MS,
        );
      },
      { threshold: 0.35 },
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      clearRouteTimer();
    };
  }, []);

  useEffect(() => {
    if (!globeRef.current) return;

    const controls = globeRef.current.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.14;
    controls.enableZoom = false;
    globeRef.current.pointOfView({ lat: 20, lng: 78, altitude: 2 }, 0);
  }, [Globe]);

  const visibleLabels = [
    INDIA_POINT,
    ...DEST_POINTS.map((point) => ({ ...point, isOrigin: false })),
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
          From India.<br/><span style={{ color: 'rgba(255,255,255,0.15)' }}>Built For Global Reach.</span>
        </h2>
      </div>

      <div style={{
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
            pathsData={ROUTES.slice(0, visibleRouteCount)}
            pathPoints="points"
            pathPointLat="lat"
            pathPointLng="lng"
            pathPointAlt="alt"
            pathColor={() => BRONZE}
            pathStroke={0.65}
            pathResolution={1}
            pathDashLength={1}
            pathDashGap={0}
            pathDashAnimateTime={0}
            pathTransitionDuration={ROUTE_DRAW_MS}
            atmosphereColor={BLUE}
            atmosphereAltitude={0.15}
            animateIn={true}
            htmlElementsData={visibleLabels}
            htmlElement={(d: any) => {
              const el = document.createElement('div');
              const markerColor = d.isOrigin ? BLUE : BRONZE;
              const labelWeight = d.isOrigin ? 800 : 600;
              const markerWidth = d.isOrigin ? 18 : 14;
              const markerHeight = d.isOrigin ? 24 : 20;

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
                  font-size: ${d.isOrigin ? 12 : 10}px;
                  font-weight: ${labelWeight};
                  font-family: sans-serif;
                  white-space: nowrap;
                  margin-bottom: 3px;
                  text-shadow: 0 1px 4px rgba(0,0,0,0.8);
                  text-align: center;
                '>${d.label}</div>
                <svg width='${markerWidth}' height='${markerHeight}' viewBox='0 0 24 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M12 0C5.373 0 0 5.373 0 12c0 8 12 20 12 20S24 20 24 12C24 5.373 18.627 0 12 0z' fill='${markerColor}' opacity='0.95'/>
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
