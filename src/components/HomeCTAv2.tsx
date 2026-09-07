'use client';

export default function HomeCTAv2() {
  return (
    <section style={{ background: '#f5f5f3', padding: '56px 72px', fontFamily: 'var(--font-barlow)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          borderRadius: 24, overflow: 'hidden',
          position: 'relative', minHeight: 460,
          display: 'grid', gridTemplateColumns: '1fr 1fr',
        }}>
          <img
            src='https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80'
            alt='Manufacturing'
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.78)', zIndex: 1 }}/>
          <div style={{ position: 'relative', zIndex: 2, padding: '44px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
                <div style={{ width: 28, height: 1.5, background: '#B8935A' }}/>
                <span style={{ color: '#B8935A', fontSize: 11, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>Get In Touch</span>
              </div>
              <h2 style={{ color: '#fff', fontSize: 'clamp(28px,4vw,52px)', fontWeight: 900, lineHeight: 0.93, letterSpacing: '-2px', textTransform: 'uppercase', margin: '0 0 18px' }}>
                Have A<br/>Sealing<br/>Challenge?
              </h2>
              <div style={{ width: 40, height: 2.5, background: '#1B91FF', marginBottom: 18 }}/>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.75, fontFamily: 'var(--font-inter)', margin: 0, maxWidth: 320 }}>
                Tell us your application and we'll recommend the right rubber profile — designed, tested and delivered in-house.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 26, marginTop: 32 }}>
              {[
                { color: '#1B91FF', icon: <svg width='26' height='26' viewBox='0 0 24 24' fill='none'><rect x='3' y='4' width='18' height='18' rx='2' stroke='#1B91FF' strokeWidth='1.5'/><path d='M3 9h18' stroke='#1B91FF' strokeWidth='1.5'/><path d='M8 2v4M16 2v4' stroke='#1B91FF' strokeWidth='1.5' strokeLinecap='round'/><path d='M7 14l2.5 2.5L17 11' stroke='#1B91FF' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/></svg>, title: 'Quick Response', desc: 'We reply within one business day.' },
                { color: '#1B91FF', icon: <svg width='26' height='26' viewBox='0 0 24 24' fill='none'><circle cx='12' cy='12' r='3' stroke='#1B91FF' strokeWidth='1.5'/><path d='M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41' stroke='#1B91FF' strokeWidth='1.5' strokeLinecap='round'/><circle cx='12' cy='12' r='6' stroke='#1B91FF' strokeWidth='1.5' strokeDasharray='2 2'/></svg>, title: 'Engineered Solution', desc: 'Custom profiles built to your needs.' },
                { color: '#B8935A', icon: <svg width='26' height='26' viewBox='0 0 24 24' fill='none'><path d='M12 3L4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7l-8-4z' stroke='#B8935A' strokeWidth='1.5' strokeLinejoin='round'/><path d='M8.5 12l2.5 2.5 4.5-4.5' stroke='#B8935A' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/></svg>, title: 'Trusted Quality', desc: 'Tested. Reliable. Performance assured.' },
              ].map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                  <div style={{ flexShrink: 0, marginTop: 2 }}>{b.icon}</div>
                  <div>
                    <div style={{ fontSize: 12.5, fontWeight: 700, color: '#fff', fontFamily: 'var(--font-barlow)' }}>{b.title}</div>
                    <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-inter)', lineHeight: 1.45, marginTop: 3 }}>{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative', zIndex: 2, padding: '36px 40px', display: 'flex', alignItems: 'center' }}>
            <div style={{
              width: '100%',
              background: 'rgba(20,20,30,0.92)',
              backdropFilter: 'blur(12px)',
              borderRadius: 18,
              padding: '28px 28px',
              border: '1px solid rgba(255,255,255,0.12)',
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
                {[
                  { placeholder: 'Your Name', icon: <svg width='15' height='15' viewBox='0 0 24 24' fill='none'><circle cx='12' cy='8' r='4' stroke='#1B91FF' strokeWidth='1.5'/><path d='M4 20c0-4 3.6-7 8-7s8 3 8 7' stroke='#1B91FF' strokeWidth='1.5' strokeLinecap='round'/></svg> },
                  { placeholder: 'Company Name', icon: <svg width='15' height='15' viewBox='0 0 24 24' fill='none'><rect x='3' y='7' width='18' height='14' rx='1' stroke='#1B91FF' strokeWidth='1.5'/><path d='M8 7V5a4 4 0 018 0v2' stroke='#1B91FF' strokeWidth='1.5'/><path d='M9 12h6M9 16h4' stroke='#1B91FF' strokeWidth='1.5' strokeLinecap='round'/></svg> },
                  { placeholder: 'Email Address', icon: <svg width='15' height='15' viewBox='0 0 24 24' fill='none'><rect x='2' y='4' width='20' height='16' rx='2' stroke='#1B91FF' strokeWidth='1.5'/><path d='M2 7l10 7 10-7' stroke='#1B91FF' strokeWidth='1.5'/></svg> },
                  { placeholder: 'Phone Number', icon: <svg width='15' height='15' viewBox='0 0 24 24' fill='none'><path d='M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.07 4.18 2 2 0 015 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z' stroke='#1B91FF' strokeWidth='1.5'/></svg> },
                ].map((f, i) => (
                  <div key={i} style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }}>{f.icon}</div>
                    <input placeholder={f.placeholder} style={{ width: '100%', padding: '11px 12px 11px 34px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 9, fontSize: 12.5, fontFamily: 'var(--font-inter)', color: '#fff', outline: 'none', boxSizing: 'border-box' }}/>
                  </div>
                ))}
              </div>
              <div style={{ position: 'relative', marginBottom: 14 }}>
                <div style={{ position: 'absolute', left: 12, top: 12 }}>
                  <svg width='15' height='15' viewBox='0 0 24 24' fill='none'><rect x='3' y='3' width='18' height='18' rx='2' stroke='#1B91FF' strokeWidth='1.5'/><path d='M3 9h18M9 3v6' stroke='#1B91FF' strokeWidth='1.5' strokeLinecap='round'/></svg>
                </div>
                <textarea rows={3} placeholder='Describe your sealing requirement...' style={{ width: '100%', padding: '11px 12px 11px 34px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 9, fontSize: 12.5, fontFamily: 'var(--font-inter)', color: '#fff', outline: 'none', resize: 'none', boxSizing: 'border-box' }}/>
              </div>
              <button style={{ width: '100%', background: '#1B91FF', color: '#fff', border: 'none', borderRadius: 9, padding: '13px', fontSize: 13.5, fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--font-barlow)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 12 }}>
                Request a Quote
                <svg width='15' height='15' viewBox='0 0 14 14' fill='none'><path d='M3 7H11M7 3L11 7L7 11' stroke='#fff' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'/></svg>
              </button>
              <div style={{ textAlign: 'center', fontSize: 10.5, color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-inter)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <svg width='11' height='11' viewBox='0 0 24 24' fill='none'><rect x='5' y='11' width='14' height='10' rx='1' stroke='rgba(255,255,255,0.3)' strokeWidth='1.5'/><path d='M8 11V7a4 4 0 018 0v4' stroke='rgba(255,255,255,0.3)' strokeWidth='1.5' strokeLinecap='round'/></svg>
                Your information is safe with us. We never share your details.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
