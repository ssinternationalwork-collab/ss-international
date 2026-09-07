'use client';

export default function HomeCTA() {
  return (
    <section style={{
      background: '#f8f8f8',
      padding: '120px 72px',
      fontFamily: 'var(--font-barlow)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle blue glow */}
      <div style={{
        position: 'absolute',
        top: '-20%', left: '50%',
        transform: 'translateX(-50%)',
        width: 800, height: 800,
        background: 'radial-gradient(circle, rgba(27,145,255,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }}/>

      <div style={{
        maxWidth: 860,
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Eyebrow */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 28,
        }}>
          <div style={{ width: 28, height: 1.5, background: '#1B91FF' }}/>
          <span style={{
            color: '#1B91FF', fontSize: 16, fontWeight: 700,
            letterSpacing: '3px', textTransform: 'uppercase',
            fontFamily: 'var(--font-inter)',
          }}>Get in Touch</span>
          <div style={{ width: 28, height: 1.5, background: '#1B91FF' }}/>
        </div>

        {/* Headline */}
        <h2 style={{
          color: '#141414',
          fontSize: 'clamp(36px,5.5vw,72px)',
          fontWeight: 900,
          lineHeight: 0.95,
          letterSpacing: '-2.5px',
          textTransform: 'uppercase',
          margin: '0 0 28px',
        }}>
          Have a Sealing<br/>
          <span style={{ color: '#D7D7D6' }}>Challenge?</span>
        </h2>

        {/* Subtext */}
        <p style={{
          color: '#666',
          fontSize: 17,
          lineHeight: 1.75,
          fontFamily: 'var(--font-inter)',
          maxWidth: 540,
          margin: '0 auto 48px',
        }}>
          Tell us your application and we'll recommend the right rubber profile.
          Response within 24 hours — always from an engineer, not a sales rep.
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex', gap: 14,
          justifyContent: 'center', flexWrap: 'wrap',
        }}>
          <a href="#contact" style={{
            background: '#141414',
            color: '#fff',
            padding: '18px 44px',
            borderRadius: 50,
            fontSize: 13, fontWeight: 700,
            letterSpacing: '0.5px',
            textTransform: 'none',
            textDecoration: 'none',
            fontFamily: 'var(--font-barlow)',
            display: 'inline-flex', alignItems: 'center', gap: 10,
            transition: 'background 0.2s ease, transform 0.2s ease',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#1B91FF';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#141414';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Request a Quote
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7H11M7 3L11 7L7 11" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

        </div>

        {/* KPI strip */}
        <div style={{ display: 'flex', gap: 48, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32, paddingTop: 32, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
          {[
            { value: '24 Hrs', label: 'Response Time' },
            { value: '100%', label: 'In-House Manufacturing' },
            { value: 'Zero', label: 'Outsourcing' },
            { value: 'EN45545', label: 'Certified Profiles' },
          ].map((kpi, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 22, fontWeight: 900, color: '#141414', fontFamily: 'var(--font-barlow)', letterSpacing: '-1px' }}>{kpi.value}</div>
              <div style={{ fontSize: 11, color: '#999', fontFamily: 'var(--font-inter)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginTop: 4 }}>{kpi.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
