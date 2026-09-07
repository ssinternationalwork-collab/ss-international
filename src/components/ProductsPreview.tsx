'use client';
import { useEffect, useRef } from 'react';

const products = [
  { name: 'Architectural Profiles', image: '/products/architectural-profiles.png' },
  { name: 'Automotive Profiles', image: '/products/automotive-profiles.png' },
  { name: 'Bus Body Profiles', image: '/products/bus-body-profiles.png' },
  { name: 'Railway Profiles', image: '/products/railway-profiles.png' },
  { name: 'Container Seals', image: '/products/container-seals.png' },
  { name: 'Co-Extruded Profiles', image: '/products/co-extruded-profiles.png' },
  { name: 'Edge Protectors', image: '/products/edge-protectors.png' },
  { name: 'Electrical Panel Profiles', image: '/products/electrical-panel-profiles.png' },
  { name: 'Expansion Joints', image: '/products/expansion-joints.png' },
  { name: 'Flocked Glass Run Channel', image: '/products/flocked-glass-run-channel.png' },
  { name: 'Miscellaneous Profiles', image: '/products/miscellaneous-profiles.png' },
  { name: 'Molded Corners', image: '/products/molded-corners.png' },
  { name: 'Pipe Clamping Gaskets', image: '/products/pipe-clamping-gaskets.png' },
  { name: 'Silicone Rubber Profiles', image: '/products/silicone-rubber-profiles.png' },
  { name: 'Sponge Rubber Profiles', image: '/products/sponge-rubber-profiles.png' },
  { name: 'Sponge Solid Strips', image: '/products/sponge-solid-strips-pipes-cords.jpg' },
  { name: 'Windows Rubber Profiles', image: '/products/windows-rubber-profiles.png' },
];

const loopedProducts = [...products, ...products, ...products];
const CARD_WIDTH = 320;
const GAP = 16;

export default function ProductsPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, []);

  const scroll = (dir: number) => {
    if (!scrollRef.current) return;
    const total = (CARD_WIDTH + GAP) * products.length;
    const current = scrollRef.current.scrollLeft;
    const next = current + dir * (CARD_WIDTH + GAP);

    if (dir === 1 && next >= total * 2) {
      scrollRef.current.style.scrollBehavior = 'auto';
      scrollRef.current.scrollLeft = next - total;
      scrollRef.current.style.scrollBehavior = 'smooth';
      return;
    }

    if (dir === -1 && next < 0) {
      scrollRef.current.style.scrollBehavior = 'auto';
      scrollRef.current.scrollLeft = next + total;
      scrollRef.current.style.scrollBehavior = 'smooth';
      return;
    }

    scrollRef.current.scrollLeft = next;
  };

  return (
    <section style={{ background: '#f5f5f3', padding: '100px 0 80px', fontFamily: 'var(--font-barlow)' }}>
      <div style={{ padding: '0 72px', marginBottom: 60 }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 28, height: 1.5, background: '#B8935A' }}/>
              <span style={{ color: '#B8935A', fontSize: 13, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>Our Product Range</span>
            </div>
            <h2 style={{ color: '#141414', fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-2px', textTransform: 'uppercase', margin: 0 }}>
              Custom Profiles.<br/><span style={{ color: 'rgba(0,0,0,0.15)' }}>Industry-Specific Solutions.</span>
            </h2>
          </div>
          <a href='/products' style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#1B91FF', fontSize: 14, fontWeight: 700, fontFamily: 'var(--font-barlow)', textDecoration: 'none' }}>
            View all categories
            <svg width='14' height='14' viewBox='0 0 14 14' fill='none'><path d='M3 7H11M7 3L11 7L7 11' stroke='#1B91FF' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'/></svg>
          </a>
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        {/* Left arrow */}
        <button onClick={() => scroll(-1)} style={{
          position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
          zIndex: 10, width: 44, height: 44, borderRadius: '50%',
          background: 'rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.15)',
          color: '#141414', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          backdropFilter: 'blur(4px)', transition: 'all 0.2s ease',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = '#1B91FF'; e.currentTarget.style.borderColor = '#1B91FF'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.08)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'; }}
        >
          <svg width='14' height='14' viewBox='0 0 14 14' fill='none'><path d='M11 7H3M7 11L3 7L7 3' stroke='#141414' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'/></svg>
        </button>

        <div
          ref={scrollRef}
          style={{ display: 'flex', gap: GAP, overflowX: 'auto', scrollBehavior: 'smooth', paddingLeft: 72, paddingRight: 72, scrollbarWidth: 'none' }}
        >
          {loopedProducts.map((product, index) => (
            <div
              key={index}
              style={{ flexShrink: 0, width: CARD_WIDTH, borderRadius: 16, overflow: 'hidden', background: '#1a1a1a', position: 'relative', cursor: 'pointer' }}
              onMouseEnter={e => {
                const img = e.currentTarget.querySelector('img') as HTMLElement;
                if (img) img.style.transform = 'scale(1.06)';
              }}
              onMouseLeave={e => {
                const img = e.currentTarget.querySelector('img') as HTMLElement;
                if (img) img.style.transform = 'scale(1)';
              }}
            >
              <img src={product.image} alt={product.name} style={{ width: '100%', height: 400, objectFit: 'cover', objectPosition: 'center center', display: 'block', transition: 'transform 0.5s ease', transform: 'scale(1)' }}/>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px 20px 20px', background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)' }}>
                <div style={{ width: 20, height: 2, background: '#1B91FF', marginBottom: 8 }}/>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: '1px', textTransform: 'uppercase', fontFamily: 'var(--font-barlow)' }}>{product.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button onClick={() => scroll(1)} style={{
          position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)',
          zIndex: 10, width: 44, height: 44, borderRadius: '50%',
          background: 'rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.15)',
          color: '#141414', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          backdropFilter: 'blur(4px)', transition: 'all 0.2s ease',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = '#1B91FF'; e.currentTarget.style.borderColor = '#1B91FF'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.08)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'; }}
        >
          <svg width='14' height='14' viewBox='0 0 14 14' fill='none'><path d='M3 7H11M7 3L11 7L7 11' stroke='#141414' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'/></svg>
        </button>
      </div>
    </section>
  );
}
