'use client';

const BLACK = '#141414';
const BLUE = '#1B91FF';
const BRONZE = '#B8935A';

const CERTS = [
  { name: 'IATF 16949', desc: 'Automotive Quality Management', icon: 'ti-car' },
  { name: 'ISO 9001', desc: 'Quality Management System', icon: 'ti-award' },
  { name: 'EN 45545', desc: 'Railway Fire Safety Standard', icon: 'ti-train' },
  { name: 'RoHS', desc: 'Restriction of Hazardous Substances', icon: 'ti-leaf' },
  { name: 'REACH', desc: 'European Chemicals Regulation', icon: 'ti-flask' },
  { name: 'BS 6853', desc: 'Fire Retardant Profiles', icon: 'ti-flame' },
  { name: 'PPAP Support', desc: 'Production Part Approval Process', icon: 'ti-clipboard-check' },
  { name: 'In-House Testing', desc: 'Full Lab & QC Facility', icon: 'ti-microscope' },
];

export default function QualityStrip() {
  return (
    <section style={{ background: '#ffffff', padding: '80px 72px', fontFamily: 'var(--font-barlow)', borderTop: '1px solid #e8e8e8', borderBottom: '1px solid #e8e8e8' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 28, height: 1.5, background: BRONZE }}/>
              <span style={{ color: BRONZE, fontSize: 13, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>Quality Assurance</span>
            </div>
            <h2 style={{ fontSize: 'clamp(24px,3vw,40px)', fontWeight: 900, color: BLACK, letterSpacing: '-1.5px', margin: 0, fontFamily: 'var(--font-barlow)' }}>
              Certified to International Standards.<br/>
              <span style={{ color: '#D7D7D6' }}>Quality You Can Rely On.</span>
            </h2>
          </div>
          <a href='/quality-assurance' style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: BLACK, color: '#fff', padding: '14px 28px', borderRadius: 50, fontSize: 14, fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--font-barlow)', whiteSpace: 'nowrap', flexShrink: 0 }}>
            View Quality Assurance
            <svg width='14' height='14' viewBox='0 0 14 14' fill='none'><path d='M3 7H11M7 3L11 7L7 11' stroke='#fff' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'/></svg>
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {CERTS.map((cert, i) => {
            const accent = i % 2 === 0 ? BLUE : BRONZE;
            const accentBg = i % 2 === 0 ? '#EAF3FF' : '#FBF3EA';
            const num = String(i + 1).padStart(2, '0');
            return (
              <div key={i}
                style={{
                  background: '#fff',
                  border: '1px solid #e8e8e8',
                  borderTop: `3px solid ${accent}`,
                  borderRadius: '4px 4px 14px 14px',
                  padding: '24px 20px',
                  display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
                  transition: 'all 0.2s ease', cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = `0 12px 28px ${accent}2E`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 700, color: '#ccc', marginBottom: 14, fontFamily: 'var(--font-inter)' }}>{num}</div>
                <div style={{
                  width: 46, height: 46, marginBottom: 16,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: '50%', background: accentBg,
                }}>
                  <i className={`ti ${cert.icon}`} style={{ fontSize: 22, color: accent }} aria-hidden="true"/>
                </div>
                <div style={{ fontSize: 15, fontWeight: 800, color: BLACK, fontFamily: 'var(--font-barlow)', marginBottom: 6, letterSpacing: '-0.3px' }}>{cert.name}</div>
                <div style={{ fontSize: 12.5, color: '#888', fontFamily: 'var(--font-inter)', lineHeight: 1.5 }}>{cert.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
