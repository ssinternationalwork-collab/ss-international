'use client';

const products = [
  { name: 'Architectural Profiles', image: '/products/architectural-profiles.jpg', desc: 'Curtain Walls • Façades • Glazing Systems' },
  { name: 'Automotive Profiles', image: '/products/automotive-profiles.jpg', desc: 'Weather Seals • Glass Runs • Edge Trims' },
  { name: 'Bus Body Profiles', image: '/products/bus-body-profiles.jpg', desc: 'Window Seals • Hatch Seals • Door Seals' },
  { name: 'Railway Profiles', image: '/products/railway-profiles.jpg', desc: 'Fire Retardant • EN45545 • Durability Tested' },
  { name: 'Container Seals', image: '/products/container-seals.jpg', desc: 'Door Seals • Edge Seals • Tamper Resistant' },
  { name: 'Co-Extruded Profiles', image: '/products/co-extruded-profiles.jpg', desc: 'Multi-material • Rigid/Soft • Custom Sections' },
  { name: 'Edge Protectors', image: '/products/edge-protectors.jpg', desc: 'Metal Edge • Glass Edge • Panel Protection' },
  { name: 'Electrical Panel Profiles', image: '/products/electrical-panel-profiles.jpg', desc: 'Panel Seals • IP Rating • EMI Shielding' },
  { name: 'Expansion Joints', image: '/products/expansion-joints.jpg', desc: 'Floor • Wall • Structural Movement' },
  { name: 'Flocked Glass Run Channel', image: '/products/flocked-glass-run-channel.jpg', desc: 'Anti-friction • Uniform Adhesion • In-line Applied' },
  { name: 'Miscellaneous Profiles', image: '/products/miscellaneous-profiles.jpg', desc: 'Custom Sections • Special Applications' },
  { name: 'Molded Corners', image: '/products/molded-corners.jpg', desc: 'Seamless Joints • Corner Vulcanization' },
  { name: 'Pipe Clamping Gaskets', image: '/products/pipe-clamping-gaskets.jpg', desc: 'Sealing Gaskets • Pipe Joints • Industrial' },
  { name: 'Silicone Rubber Profiles', image: '/products/silicone-rubber-profiles.jpg', desc: 'High Temp • Food Grade • Medical Grade' },
  { name: 'Sponge Rubber Profiles', image: '/products/sponge-rubber-profiles.jpg', desc: 'EPDM Sponge • Soft Seal • Compression Set' },
  { name: 'Sponge Solid Strips', image: '/products/sponge-solid-strips-pipes-cords.jpg', desc: 'Strips • Pipes • Cords • Custom Extrusions' },
  { name: 'Windows Rubber Profiles', image: '/products/windows-rubber-profiles.jpg', desc: 'uPVC Windows • Aluminium Frames • Glass Seals' },
];

const STATS = [
  { icon: '⬡', value: '5000+', label: 'Developed Profiles' },
  { icon: '⊞', value: '17', label: 'Product Categories' },
  { icon: '⚙', value: 'Custom', label: 'Tool Development' },
];

export default function ProductsPreviewV2() {
  const topRow = products.slice(0, 5);
  const bottomRow = products.slice(5, 10);
  const restRow = products.slice(10, 17);

  return (
    <section style={{ background: '#f8f9fb', padding: '60px 72px', fontFamily: 'var(--font-barlow)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'flex-start', marginBottom: 32 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 28, height: 1.5, background: '#1B91FF' }}/>
              <span style={{ color: '#1B91FF', fontSize: 13, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>Our Product Range</span>
            </div>
            <h2 style={{ color: '#141414', fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-2px', textTransform: 'uppercase', margin: '0 0 12px' }}>
              Custom Profiles.<br/><span style={{ color: '#D7D7D6' }}>Industry-Specific Solutions.</span>
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
              <div style={{ width: 3, height: 40, background: '#1B91FF', marginRight: 12, borderRadius: 2 }}/>
              <p style={{ color: '#666', fontSize: 13, lineHeight: 1.6, fontFamily: 'var(--font-inter)', margin: 0 }}>
                17 product categories engineered to meet the demands<br/>of OEMs across industries.
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 28, color: '#1B91FF', marginBottom: 4 }}>{s.icon}</div>
                <div style={{ fontSize: 22, fontWeight: 900, color: '#141414', fontFamily: 'var(--font-barlow)', letterSpacing: '-1px' }}>{s.value}</div>
                <div style={{ fontSize: 11, color: '#888', fontFamily: 'var(--font-inter)', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Top image strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8, marginBottom: 8 }}>
          {topRow.map((p, i) => (
            <div key={i} style={{ borderRadius: 10, overflow: 'hidden', height: 160, background: '#e8e8e8' }}>
              <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
            </div>
          ))}
        </div>

        {/* Bottom cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8, marginBottom: 8 }}>
          {bottomRow.map((p, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 10, overflow: 'hidden', border: '1px solid #e8e8e8' }}>
              <div style={{ height: 120, background: '#f0f0f0', overflow: 'hidden' }}>
                <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
              </div>
              <div style={{ padding: '12px 14px' }}>
                <div style={{ width: 20, height: 2, background: '#1B91FF', marginBottom: 8 }}/>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#141414', letterSpacing: '0.5px', textTransform: 'uppercase', fontFamily: 'var(--font-barlow)', marginBottom: 4 }}>{p.name}</div>
                <div style={{ fontSize: 10, color: '#888', fontFamily: 'var(--font-inter)', lineHeight: 1.4 }}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Rest row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 8, marginBottom: 24 }}>
          {restRow.map((p, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 10, overflow: 'hidden', border: '1px solid #e8e8e8' }}>
              <div style={{ height: 80, background: '#f0f0f0', overflow: 'hidden' }}>
                <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
              </div>
              <div style={{ padding: '10px 12px' }}>
                <div style={{ width: 16, height: 2, background: '#1B91FF', marginBottom: 6 }}/>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#141414', letterSpacing: '0.5px', textTransform: 'uppercase', fontFamily: 'var(--font-barlow)' }}>{p.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div style={{ textAlign: 'right' }}>
          <a href='/products' style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#1B91FF', fontSize: 14, fontWeight: 700, fontFamily: 'var(--font-barlow)', textDecoration: 'none' }}>
            View all categories
            <svg width='14' height='14' viewBox='0 0 14 14' fill='none'><path d='M3 7H11M7 3L11 7L7 11' stroke='#1B91FF' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'/></svg>
          </a>
        </div>

      </div>
    </section>
  );
}
