'use client';
export default function Footer() {
  return (
    <footer style={{ background: '#e7ecf5', fontFamily: 'var(--font-inter)' }}>
      {/* Main footer grid */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 72px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr', gap: 48, marginBottom: 56 }}>
          {/* Logo + description */}
          <div>
            <img src='/logo_ssi_full.png' alt='SS International' style={{ height: 100, width: 'auto', display: 'block', marginBottom: 20 }}/>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.75, margin: '0 0 24px' }}>
              SS International Industries LLP was founded in 1999 and manufactures EPDM, NBR, Silicone and PVC rubber profiles for OEM clients globally.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href='mailto:info@ssinternationalpolymers.com' style={{ fontSize: 14, color: '#1B91FF', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width='14' height='14' viewBox='0 0 24 24' fill='none'><path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' stroke='#1B91FF' strokeWidth='1.5'/><path d='M22 6l-10 7L2 6' stroke='#1B91FF' strokeWidth='1.5'/></svg>
                info@ssinternationalpolymers.com
              </a>
              <a href='tel:+919599399493' style={{ fontSize: 14, color: '#555', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width='14' height='14' viewBox='0 0 24 24' fill='none'><path d='M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z' stroke='#555' strokeWidth='1.5'/></svg>
                +91 95993 99493
              </a>
            </div>
          </div>
          {/* Products */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: '#141414', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 20px' }}>Products</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Architectural Profiles', 'Automotive Profiles', 'Railway Profiles', 'Silicone Profiles', 'Sponge Rubber', 'Co-Extruded Profiles'].map(item => (
                <li key={item}><a href='#' style={{ fontSize: 16, color: '#666', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#141414'}
                  onMouseLeave={e => e.currentTarget.style.color = '#666'}
                >{item}</a></li>
              ))}
            </ul>
          </div>
          {/* Industries */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: '#141414', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 20px' }}>Industries</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Automotive', 'Railways', 'Architecture', 'Shipping', 'Power Distribution', 'Infrastructure'].map(item => (
                <li key={item}><a href='#' style={{ fontSize: 16, color: '#666', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#141414'}
                  onMouseLeave={e => e.currentTarget.style.color = '#666'}
                >{item}</a></li>
              ))}
            </ul>
          </div>
          {/* Company */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: '#141414', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 20px' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['About Us', 'Who We Are', 'Capabilities', 'Global Presence', 'Contact Us'].map(item => (
                <li key={item}><a href='#' style={{ fontSize: 16, color: '#666', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#141414'}
                  onMouseLeave={e => e.currentTarget.style.color = '#666'}
                >{item}</a></li>
              ))}
            </ul>
          </div>
          {/* Certifications */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: '#141414', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 20px' }}>Certifications</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['EN 45545', 'ISO 9001', 'BS 6853', 'DIN 5510', 'NFPA 130', 'REACH / RoHS'].map(item => (
                <li key={item} style={{ fontSize: 15, color: '#666', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#1B91FF', flexShrink: 0 }}/>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Bottom bar — email + social */}
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', padding: '28px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#666' }}>
            <svg width='16' height='16' viewBox='0 0 24 24' fill='none'><path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' stroke='#666' strokeWidth='1.5'/><path d='M22 6l-10 7L2 6' stroke='#666' strokeWidth='1.5'/></svg>
            info@ssinternationalpolymers.com
          </div>
          <div style={{ fontSize: 13, color: '#999' }}>© 2025 SS International Industries LLP. All Rights Reserved.</div>
          <div style={{ display: 'flex', gap: 12 }}>
            {[
              <svg key='li' width='18' height='18' viewBox='0 0 24 24' fill='currentColor'><path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/></svg>,
              <svg key='tw' width='18' height='18' viewBox='0 0 24 24' fill='currentColor'><path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'/></svg>,
              <svg key='ig' width='18' height='18' viewBox='0 0 24 24' fill='currentColor'><path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'/></svg>,
            ].map((icon, i) => (
              <a key={i} href='#' style={{ color: '#666', display: 'flex', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#1B91FF'}
                onMouseLeave={e => e.currentTarget.style.color = '#666'}
              >{icon}</a>
            ))}
          </div>
        </div>
        {/* Certifications bar */}
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: 24, paddingBottom: 24, textAlign: 'center' }}>
          <p style={{ fontSize: 13, color: '#999', marginBottom: 16 }}>Certified Standards & Compliance</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
            {[
              { name: 'EN 45545', sub: 'Railway Fire', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS17P3Lz__OleQI2IhsT4MQHTKwNzy1b_9OnA&s' },
              { name: 'ISO 9001', sub: 'Quality Mgmt', logo: 'https://www.mmnewman.com/wp-content/uploads/927_iso9001_logo.jpeg' },
              { name: 'BS 6853', sub: 'Fire Retardant', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS03jVgdlYchn4Bv2J7_p1eb9KP6IvRMD3BHA&s' },
              { name: 'DIN 5510', sub: 'Railway Standard', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS17P3Lz__OleQI2IhsT4MQHTKwNzy1b_9OnA&s' },
              { name: 'NFPA 130', sub: 'Fire Protection', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR44rq8LDfPRONz5MJPf7TGeL7sWVifEwdw2Q&s' },
              { name: 'REACH', sub: 'EU Chemicals', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR44rq8LDfPRONz5MJPf7TGeL7sWVifEwdw2Q&s' },
              { name: 'RoHS', sub: 'Hazardous Sub.', logo: 'https://www.sensiblemicro.com/hubfs/RoHS%20Blog%20Image.jpg' },
              { name: 'ASTM C-864', sub: 'Standard Spec', logo: 'https://5.imimg.com/data5/SELLER/Default/2024/12/475784077/VS/OC/QZ/30601387/iatf-16949-2016-consultancy-services.jpg' },
            ].map((cert, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid #1B91FF', background: 'rgba(27,145,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <img src={cert.logo} alt={cert.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0%) brightness(1) sepia(1) hue-rotate(190deg) saturate(3)', opacity: 0.8 }}/>
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#333', fontFamily: 'var(--font-inter)', textAlign: 'center', whiteSpace: 'nowrap' }}>{cert.name}</div>
                <div style={{ fontSize: 9, color: '#999', fontFamily: 'var(--font-inter)', textAlign: 'center', whiteSpace: 'nowrap' }}>{cert.sub}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Watermark */}
        <div style={{ marginTop: 40, overflow: 'hidden', width: '100%' }}>
          <div
            style={{
              fontSize: '8.5vw',
              fontWeight: 900,
              color: 'transparent',
              WebkitTextStroke: '1px rgba(0,0,0,0.06)',
              textTransform: 'uppercase',
              letterSpacing: '-2px',
              fontFamily: 'var(--font-barlow)',
              userSelect: 'none',
              whiteSpace: 'nowrap',
              display: 'block',
              width: '100%',
              textAlign: 'center',
              transition: 'WebkitTextStroke 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.webkitTextStroke = '1px rgba(27,145,255,0.35)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.webkitTextStroke = '1px rgba(0,0,0,0.06)'; }}
          >
            SS INTERNATIONAL
          </div>
        </div>
      </div>
    </footer>
  );
}
