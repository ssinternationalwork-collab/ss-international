'use client';

export default function ComingSoon() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#f8f8f8',
      fontFamily: 'var(--font-inter)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: '30%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80vw', height: '80vw',
        background: 'radial-gradient(circle, rgba(27,145,255,0.06) 0%, transparent 65%)',
        pointerEvents: 'none',
      }}/>

      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: 'clamp(32px, 5vw, 80px) clamp(20px, 5vw, 60px)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'clamp(32px, 5vw, 60px)',
        alignItems: 'start',
        position: 'relative',
        zIndex: 1,
      }}>

        {/* LEFT */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
            <img
              src="/logo_icon_only.png"
              alt="SS International"
              style={{ height: 'clamp(68px, 9vw, 88px)', width: 'auto', display: 'block' }}
            />
            <div>
              <div style={{
                fontFamily: 'var(--font-barlow)',
                fontSize: 'clamp(16px, 2.2vw, 20px)',
                fontWeight: 900,
                color: '#1a2d5a',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                lineHeight: 1.1,
              }}>SS International</div>
              <div style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 'clamp(10px, 1.1vw, 12px)',
                fontWeight: 500,
                color: '#2196F3',
                letterSpacing: '0.5px',
                marginTop: 3,
                fontStyle: 'italic',
              }}>Built to Seal. Designed to Last.</div>
            </div>
          </div>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(27,145,255,0.08)',
            border: '1px solid rgba(27,145,255,0.25)',
            borderRadius: 50, padding: '6px 14px', marginBottom: 20,
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#1B91FF', animation: 'pulse 2s ease-in-out infinite' }}/>
            <span style={{ color: '#1B91FF', fontSize: 10, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>New Website Coming Soon</span>
          </div>

          <h1 style={{
            color: '#141414', fontSize: 'clamp(28px, 5vw, 52px)',
            fontWeight: 900, lineHeight: 1.0, letterSpacing: '-1.5px',
            textTransform: 'uppercase', margin: '0 0 16px',
            fontFamily: 'var(--font-barlow)',
          }}>
            Precision Rubber<br/>
            <span style={{ color: '#D7D7D6' }}>Sealing Solutions.</span>
          </h1>

          <p style={{ color: '#555', fontSize: 'clamp(13px, 2vw, 15px)', lineHeight: 1.7, margin: '0 0 28px', maxWidth: 420 }}>
            SS International — precision rubber sealing profiles for automotive,
            railways, architecture, shipping and more. 25+ years of in-house manufacturing excellence.
          </p>

          <div style={{ width: 48, height: 2, background: '#1B91FF', borderRadius: 1, marginBottom: 24 }}/>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { icon: '📍', label: 'SS International Industries LLP' },
              { icon: '📍', label: 'C-24, UPSIDA, Baghpat Industrial Area, Baghpat, Uttar Pradesh – 250609' },
              { icon: '✉️', label: 'info@ssinternationalpolymers.com' },
              { icon: '📞', label: '+91 95993 99493' },
              { icon: '🌐', label: 'ssinternationalpolymers.com' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <span style={{ fontSize: 14, marginTop: 1 }}>{item.icon}</span>
                <span style={{ color: '#444', fontSize: 'clamp(12px, 1.8vw, 14px)', lineHeight: 1.5 }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Form */}
        <div style={{
          background: '#ffffff', border: '1px solid #e8e8e8',
          borderRadius: 20, padding: 'clamp(24px, 4vw, 40px)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        }}>
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <div style={{ width: 20, height: 1, background: '#1B91FF' }}/>
              <span style={{ color: '#1B91FF', fontSize: 10, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Get in Touch</span>
            </div>
            <h2 style={{
              color: '#141414', fontSize: 'clamp(18px, 3vw, 22px)',
              fontWeight: 800, letterSpacing: '-0.5px',
              margin: 0, fontFamily: 'var(--font-barlow)', textTransform: 'uppercase',
            }}>Send Your Requirement</h2>
            <p style={{ color: '#888', fontSize: 13, marginTop: 6 }}>We respond within 24 hours.</p>
          </div>

          <form action="https://formspree.io/f/mzdwrlkq" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <input type="hidden" name="_subject" value="New Lead from ssinternationalpolymers.com" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12 }}>
              <input type="text" name="name" placeholder="Your Name" required style={inputStyle} />
              <input type="text" name="company" placeholder="Company Name" required style={inputStyle} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12 }}>
              <input type="email" name="email" placeholder="Email Address" required style={inputStyle} />
              <input type="tel" name="phone" placeholder="Phone Number" required style={inputStyle} />
            </div>
            <textarea name="message" placeholder="Describe your sealing requirement..." rows={3} style={{ ...inputStyle, resize: 'none' }} />
            <button type="submit" style={{
              background: '#1B91FF', color: '#fff', border: 'none',
              borderRadius: 50, padding: '14px 28px', fontSize: 13,
              fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase',
              cursor: 'pointer', fontFamily: 'var(--font-barlow)', width: '100%',
              transition: 'background 0.2s ease',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#0f7ae0'}
              onMouseLeave={e => e.currentTarget.style.background = '#1B91FF'}
            >
              Send Requirement →
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        input::placeholder, textarea::placeholder { color: #aaa; }
        input:focus, textarea:focus { border-color: #1B91FF !important; outline: none; }
      `}</style>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  background: '#f5f5f5', border: '1px solid #e0e0e0',
  borderRadius: 8, padding: '12px 14px', color: '#141414',
  fontSize: 13, outline: 'none', fontFamily: 'var(--font-inter)',
  width: '100%', boxSizing: 'border-box',
};
