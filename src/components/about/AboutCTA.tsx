'use client';

export default function AboutCTA() {
  return (
    <section style={{
      background: '#f8f8f8',
      padding: '120px 72px',
      fontFamily: 'var(--font-barlow)',
      position: 'relative',
      overflow: 'hidden',
    }}>
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
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 28,
        }}>
          <div style={{ width: 28, height: 1.5, background: '#1B91FF' }}/>
          <span style={{
            color: '#1B91FF', fontSize: 10, fontWeight: 700,
            letterSpacing: '3px', textTransform: 'uppercase',
            fontFamily: 'var(--font-inter)',
          }}>Get in Touch</span>
          <div style={{ width: 28, height: 1.5, background: '#1B91FF' }}/>
        </div>
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
            textTransform: 'uppercase',
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
            Send Your Requirement
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7H11M7 3L11 7L7 11" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" style={{
            background: 'transparent',
            color: '#141414',
            border: '1.5px solid #D7D7D6',
            padding: '18px 42px',
            borderRadius: 50,
            fontSize: 13, fontWeight: 600,
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontFamily: 'var(--font-barlow)',
            display: 'inline-flex', alignItems: 'center', gap: 10,
            transition: 'border-color 0.2s ease, transform 0.2s ease',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#1B91FF';
              e.currentTarget.style.color = '#1B91FF';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#D7D7D6';
              e.currentTarget.style.color = '#141414';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Request a Catalogue
          </a>
        </div>
        <div style={{
          marginTop: 52,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          {['500+ OEM Clients', '25+ Years', 'EN45545 Certified', 'Response in 24hrs'].map((item, i, arr) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{
                color: '#A8A8A8',
                fontSize: 11, fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-inter)',
                padding: '0 20px',
              }}>{item}</span>
              {i < arr.length - 1 && (
                <div style={{ width: 3, height: 3, borderRadius: '50%', background: '#D7D7D6' }}/>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
