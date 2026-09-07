'use client';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main style={{ fontFamily: 'var(--font-barlow)', background: '#fff', minHeight: '100vh' }}>
        <section style={{ padding: '120px 72px 80px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', gap: 80, alignItems: 'flex-start', justifyContent: 'space-between' }}>

            {/* LEFT */}
            <div style={{ maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 40 }}>
              <div>
                <h1 style={{ fontSize: 'clamp(40px,6vw,72px)', fontWeight: 900, color: '#141414', letterSpacing: '-3px', lineHeight: 0.93, margin: '0 0 20px', fontFamily: 'var(--font-barlow)' }}>
                  Contact Us
                </h1>
                <p style={{ fontSize: 15, color: '#666', lineHeight: 1.8, fontFamily: 'var(--font-inter)', margin: 0 }}>
                  We are available for product enquiries, custom profile requests, and OEM partnerships. Tell us how we can help.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: '#141414', fontFamily: 'var(--font-barlow)', margin: '0 0 24px', letterSpacing: '-0.3px' }}>
                  Contact Details
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    { label: 'Phone', value: '+91 95993 99493', href: 'tel:+919599399493' },
                    { label: 'Email', value: 'info@ssinternationalpolymers.com', href: 'mailto:info@ssinternationalpolymers.com' },
                    { label: 'Address', value: 'Industrial Area, Baghpat, Uttar Pradesh — 250 609, India', href: null },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8 }}>
                      <span style={{ fontSize: 14, fontWeight: 700, color: '#141414', fontFamily: 'var(--font-barlow)', minWidth: 70 }}>{item.label}:</span>
                      {item.href ? (
                        <a href={item.href} style={{ fontSize: 14, color: '#1B91FF', fontFamily: 'var(--font-inter)', textDecoration: 'underline', textUnderlineOffset: 3 }}>{item.value}</a>
                      ) : (
                        <span style={{ fontSize: 14, color: '#666', fontFamily: 'var(--font-inter)', lineHeight: 1.6 }}>{item.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div style={{ borderRadius: 16, overflow: 'hidden', height: 260, border: '1px solid #e8e8e8' }}>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112070.45!2d77.22!3d28.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c5f6b8e000001%3A0x1!2sBaghpat%2C+Uttar+Pradesh!5e0!3m2!1sen!2sin!4v1'
                  width='100%' height='260' style={{ border: 0, display: 'block' }} allowFullScreen loading='lazy'
                />
              </div>
            </div>

            {/* RIGHT — Form */}
            <div style={{ flex: 1, maxWidth: 720, border: '1px solid #e8e8e8', borderRadius: 20, padding: '48px', boxShadow: '0 4px 40px rgba(0,0,0,0.06)' }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
                {[
                  { label: 'First Name', placeholder: 'First name', type: 'text' },
                  { label: 'Last Name', placeholder: 'Last name', type: 'text' },
                ].map((f, i) => (
                  <div key={i} style={{ flex: 1 }}>
                    <label style={{ fontSize: 12, fontWeight: 600, color: '#555', fontFamily: 'var(--font-inter)', display: 'block', marginBottom: 8, letterSpacing: '0.3px' }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} style={{ width: '100%', padding: '12px 16px', border: '1px solid #e0e0e0', borderRadius: 8, fontSize: 14, fontFamily: 'var(--font-inter)', color: '#141414', outline: 'none', boxSizing: 'border-box', background: '#fafafa' }}/>
                  </div>
                ))}
              </div>

              {[
                { label: 'Email', placeholder: 'you@company.com', type: 'email' },
                { label: 'Subject', placeholder: 'e.g. EPDM profile for automotive application', type: 'text' },
              ].map((f, i) => (
                <div key={i} style={{ marginBottom: 20 }}>
                  <label style={{ fontSize: 12, fontWeight: 600, color: '#555', fontFamily: 'var(--font-inter)', display: 'block', marginBottom: 8 }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} style={{ width: '100%', padding: '12px 16px', border: '1px solid #e0e0e0', borderRadius: 8, fontSize: 14, fontFamily: 'var(--font-inter)', color: '#141414', outline: 'none', boxSizing: 'border-box', background: '#fafafa' }}/>
                </div>
              ))}

              <div style={{ marginBottom: 28 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: '#555', fontFamily: 'var(--font-inter)', display: 'block', marginBottom: 8 }}>Message</label>
                <textarea rows={6} placeholder='Describe your sealing requirement, profile type, material, dimensions or any other details...' style={{ width: '100%', padding: '12px 16px', border: '1px solid #e0e0e0', borderRadius: 8, fontSize: 14, fontFamily: 'var(--font-inter)', color: '#141414', outline: 'none', resize: 'none', boxSizing: 'border-box', background: '#fafafa' }}/>
              </div>

              <button style={{ width: '100%', background: '#1B91FF', color: '#fff', border: 'none', borderRadius: 10, padding: '16px', fontSize: 15, fontWeight: 700, letterSpacing: '0.3px', cursor: 'pointer', fontFamily: 'var(--font-barlow)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                Send Message
                <svg width='16' height='16' viewBox='0 0 14 14' fill='none'><path d='M3 7H11M7 3L11 7L7 11' stroke='#fff' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'/></svg>
              </button>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
