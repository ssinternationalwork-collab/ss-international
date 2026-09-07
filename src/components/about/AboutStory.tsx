export default function AboutStory() {
  return (
    <section style={{
      background: "#fff",
      padding: "100px 72px",
      fontFamily: "var(--font-barlow)",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "center",
        maxWidth: 1200,
        margin: "0 auto",
      }}>
        {/* Left — text */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
            <div style={{ width: 32, height: 1.5, background: "#1B91FF" }}/>
            <span style={{
              color: "#1B91FF", fontSize: 13, fontWeight: 700,
              letterSpacing: "3px", textTransform: "uppercase",
              fontFamily: "var(--font-inter)",
            }}>Who We Are</span>
          </div>
          <p style={{
            color: "#666", fontSize: 15, lineHeight: 1.85,
            fontFamily: "var(--font-inter)", margin: "0 0 20px",
          }}>
            SS International was founded in Delhi in 1999 with a single mission: to manufacture rubber sealing profiles that meet the exacting standards of India's fastest-growing OEM sector. What began as a specialised supplier to the automotive industry quickly grew into a multi-industry manufacturer trusted by global names.
          </p>
          <p style={{
            color: "#666", fontSize: 15, lineHeight: 1.85,
            fontFamily: "var(--font-inter)", margin: "0 0 20px",
          }}>
            Over 25 years, we invested in every aspect of the production chain — from in-house compound formulation and UHF curing to online flocking and our own testing laboratory. Today, nothing is outsourced. Every profile that leaves our factory has been engineered, manufactured, and validated entirely under one roof.
          </p>
          <p style={{
            color: "#666", fontSize: 15, lineHeight: 1.85,
            fontFamily: "var(--font-inter)", margin: 0,
          }}>
            Our profiles seal doors on Tata Motors vehicles, windows on Indian Railways coaches, and container hatches on shipping fleets across 40+ countries. The diversity of our applications is a testament to the versatility of our engineering — and the trust we've earned across every industry we serve.
          </p>

        </div>

        {/* Right — image grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 8,
          height: 520,
        }}>
          <div style={{ borderRadius: 12, overflow: "hidden" }}>
            <img src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&q=80"
              style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
          </div>
          <div style={{ borderRadius: 12, overflow: "hidden" }}>
            <img src="https://images.unsplash.com/photo-1600684249816-38cdfcf95c17?w=800&q=80"
              style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
          </div>
          <div style={{ borderRadius: 12, overflow: "hidden" }}>
            <img src="/ssi_office.jpg"
              style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
          </div>
          <div style={{ borderRadius: 12, overflow: "hidden" }}>
            <img src="https://images.unsplash.com/photo-1622645916455-aa13b87438ec?w=800&q=80"
              style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
          </div>
        </div>
      </div>

      {/* Mission */}
      <div style={{ marginTop: 80, background: '#1a1a1a', borderRadius: 24, padding: '60px 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: 300, height: 300, background: 'radial-gradient(circle, rgba(27,145,255,0.1) 0%, transparent 70%)', pointerEvents: 'none' }}/>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <div style={{ width: 28, height: 1.5, background: '#1B91FF' }}/>
          <span style={{ color: '#1B91FF', fontSize: 12, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>Company Mission</span>
        </div>
        <h2 style={{ fontSize: 'clamp(48px,6vw,80px)', fontWeight: 900, color: '#ffffff', lineHeight: 0.9, letterSpacing: '-3px', textTransform: 'uppercase', margin: '0 0 32px', fontFamily: 'var(--font-barlow)' }}>
          OUR<br/>MISSION
        </h2>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, fontFamily: 'var(--font-inter)', margin: 0, maxWidth: 640 }}>
          To engineer high-performance sealing solutions that industries can depend on — delivering consistent quality, fast turnaround, and zero outsourcing from our facility in Baghpat, Uttar Pradesh.
        </p>
      </div>

      {/* Vision */}
      <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div style={{ borderRadius: 24, overflow: 'hidden', position: 'relative', minHeight: 480 }}>
          <img
            src='/ssi_office.jpg'
            alt='SS International'
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)' }}/>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: '#ffffff', borderRadius: 24, padding: '48px 48px', border: '1px solid #e8e8e8', flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ width: 28, height: 1.5, background: '#1B91FF' }}/>
              <span style={{ color: '#1B91FF', fontSize: 12, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>Company Vision</span>
            </div>
            <h2 style={{ fontSize: 'clamp(40px,5vw,64px)', fontWeight: 900, color: '#141414', lineHeight: 0.9, letterSpacing: '-3px', textTransform: 'uppercase', margin: '0 0 28px', fontFamily: 'var(--font-barlow)' }}>
              OUR<br/><span style={{ color: '#1B91FF' }}>VISION</span>
            </h2>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.85, fontFamily: 'var(--font-inter)', margin: 0 }}>
              To be India's most trusted rubber sealing manufacturer — recognised globally for precision, reliability, and end-to-end in-house capability.
            </p>
          </div>
          <div style={{ background: '#1B91FF', borderRadius: 24, padding: '36px 48px' }}>
            <div style={{ fontSize: 48, color: 'rgba(255,255,255,0.3)', fontFamily: 'Georgia, serif', lineHeight: 1, marginBottom: 16 }}>"</div>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, fontFamily: 'var(--font-inter)', margin: 0, fontStyle: 'italic' }}>
              Our mission and vision are driven by a commitment to engineering reliable solutions, advancing indigenous manufacturing capabilities, and setting new benchmarks for performance, consistency, and trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
