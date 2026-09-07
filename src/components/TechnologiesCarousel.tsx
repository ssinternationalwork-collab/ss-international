'use client';
import { useState } from 'react';

const FEATURES = [
  { id: 'design', num: '01', label: 'Profile Design & Tool Development', image: '/profile-design-tooling.png', description: 'End-to-end profile design from concept to production-ready tooling and die development.' },
  { id: 'compound', num: '02', label: 'Compound Engineering', image: '/compound.png', description: 'Custom EPDM, NBR, Silicone and PVC compound formulation engineered per application.' },
  { id: 'curing', num: '03', label: 'UHF & Hot Air Curing', image: '/uhf-hot-air-curing.png', description: 'Microwave UHF and hot air vulcanisation for consistent cross-linking across every profile.' },
  { id: 'flocking', num: '04', label: 'Precision Online Flocking', image: '/precision-flocking.png', description: 'Anti-friction flock coating applied in-line to glass run channels.' },
  { id: 'vulcanization', num: '05', label: 'Seamless Joint Vulcanization', image: '/seamless-vulcanization.png', description: 'In-house compression moulding for seamless corner joints — no secondary processing.' },
  { id: 'moulded', num: '06', label: 'Moulded Rubber Components', image: '/moulded-rubber-components.png', description: 'Custom moulded rubber parts manufactured to drawing and specification.' },
  { id: 'fire', num: '07', label: 'Fire Retardant Profiles', image: '/fire-retardant-profiles.png', description: 'EN45545 R23 HL3 certified flame-resistant rubber profiles for railway and metro applications.' },
  { id: 'testing', num: '08', label: 'Testing & Validation', image: '/testing-validation.png', description: 'Full in-house lab — Rheometer, Tensile Machine, Shore A Hardness, Ageing Oven.' },
];

export default function TechnologiesCarousel() {
  const [active, setActive] = useState(0);

  return (
    <section style={{ background: '#0f0f0f', padding: '100px 72px', fontFamily: 'var(--font-barlow)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div style={{ width: 28, height: 1.5, background: '#B8935A' }}/>
          <span style={{ color: '#B8935A', fontSize: 13, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>Capabilities</span>
        </div>
        <h2 style={{ color: '#ffffff', fontSize: 'clamp(36px,5vw,64px)', fontWeight: 900, lineHeight: 0.93, letterSpacing: '-3px', textTransform: 'uppercase', margin: '0 0 72px' }}>
          Designed.<br/><span style={{ color: 'rgba(255,255,255,0.15)' }}>Developed. Delivered.</span>
        </h2>

        {/* Two column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>

          {/* LEFT — accordion list */}
          <div>
            {FEATURES.map((f, i) => (
              <div
                key={f.id}
                onMouseEnter={() => setActive(i)}
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                  padding: '0',
                  cursor: 'pointer',
                }}
              >
                {/* Row */}
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '20px 0',
                  transition: 'all 0.2s ease',
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 15, fontWeight: active === i ? 700 : 500, color: active === i ? '#ffffff' : 'rgba(255,255,255,0.4)', letterSpacing: active === i ? '-0.3px' : '0', transition: 'all 0.2s ease', textTransform: 'uppercase', fontFamily: 'var(--font-barlow)', marginBottom: active === i ? 6 : 0 }}>
                      {f.label}
                    </div>
                  </div>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%',
                    border: `1px solid ${active === i ? '#1B91FF' : 'rgba(255,255,255,0.15)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, transition: 'all 0.2s ease',
                  }}>
                    <svg width='12' height='12' viewBox='0 0 14 14' fill='none'>
                      <path d='M3 7H11M7 3L11 7L7 11' stroke={active === i ? '#1B91FF' : '#ccc'} strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'/>
                    </svg>
                  </div>
                </div>

              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}/>
          </div>

          {/* RIGHT — sticky image */}
          <div style={{ position: 'sticky', top: 100 }}>
            <div style={{ borderRadius: 20, overflow: 'hidden', aspectRatio: '4/3', position: 'relative' }}>
              <img
                key={active}
                src={FEATURES[active].image}
                alt={FEATURES[active].label}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              {/* Label overlay */}
              <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#1B91FF', borderRadius: 50, padding: '8px 16px', marginBottom: 12 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: '#fff', letterSpacing: '1.5px', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>
                    {FEATURES[active].num} · {FEATURES[active].label}
                  </span>
                </div>
              </div>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%)' }}/>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
