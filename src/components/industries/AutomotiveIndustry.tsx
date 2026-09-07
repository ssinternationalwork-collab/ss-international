'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { automotiveProducts } from '@/data/industries';

const applications = [
  { title: 'Door & Body Sealing', text: 'Profiles for door apertures, body-mounted sealing lines and closure interfaces where compression consistency and long service life matter.' },
  { title: 'Glass Guidance', text: 'Flocked channels and glazing profiles designed to guide moving glass while controlling friction, vibration and water ingress.' },
  { title: 'Edge Protection', text: 'Protective profiles for formed sheet-metal edges, trim interfaces and exposed body sections.' },
  { title: 'Complex Assemblies', text: 'Co-extruded profiles and moulded corners that combine multiple functions into a continuous sealing system.' },
];

const engineeringFactors = [
  ['Compression Set', 'Maintain sealing force through repeated opening, closing and long-duration compression.'],
  ['Weather Exposure', 'Profile and compound selection for water, dust, ozone, UV and temperature cycling.'],
  ['Fit & Retention', 'Geometry engineered around flange thickness, insertion force and installed retention.'],
  ['Surface Interaction', 'Flocked or low-friction interfaces where moving glass and trim require controlled contact.'],
];

export default function AutomotiveIndustry() {
  return (
    <main style={{ background: '#FFFFFF', fontFamily: 'var(--font-barlow)' }}>
      <section style={{ position: 'relative', minHeight: 720, padding: '120px 72px 72px', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <img src='https://images.pexels.com/photos/8478199/pexels-photo-8478199.jpeg?w=1800&q=90' alt='Automotive manufacturing application' style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(8,10,14,0.28) 0%, rgba(8,10,14,0.76) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1280, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.25,0.46,0.45,0.94] }} style={{ maxWidth: 900 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
              <div style={{ width: 32, height: 1.5, background: '#1B91FF' }} />
              <span style={{ color: '#FFFFFF', fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>Automotive</span>
            </div>
            <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(48px, 7vw, 88px)', fontWeight: 900, lineHeight: 0.92, letterSpacing: '-3px', textTransform: 'uppercase', margin: '0 0 24px' }}>
              Precision Sealing.<br /><span style={{ color: 'rgba(255,255,255,0.32)' }}>Built Around The Vehicle.</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontFamily: 'var(--font-inter)', fontSize: 15, lineHeight: 1.8, maxWidth: 650, margin: 0 }}>
              Engineered rubber profiles for vehicle doors, glazing systems, body interfaces and complex sealing assemblies — developed around fit, movement, weather exposure and repeatable compression.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '104px 72px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 96, alignItems: 'start' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <div style={{ width: 32, height: 1.5, background: '#1B91FF' }} />
              <span style={{ color: '#1B91FF', fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>Application Focus</span>
            </div>
            <h2 style={{ color: '#141414', fontSize: 'clamp(34px, 4vw, 54px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-2px', textTransform: 'uppercase', margin: '0 0 24px' }}>
              Seal The Opening.<br /><span style={{ color: '#D7D7D6' }}>Control The Interface.</span>
            </h2>
            <p style={{ color: '#666', fontFamily: 'var(--font-inter)', fontSize: 14, lineHeight: 1.85, margin: 0 }}>
              Automotive sealing is not one profile type. Each interface has different movement, retention, compression and surface requirements. SSI manufactures profile families that can be selected and engineered around those conditions.
            </p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {applications.map((item, index) => (
              <motion.article key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.06 }} whileHover={{ y: -3 }} style={{ padding: 28, border: '1px solid #E8E8E8', borderRadius: 14, background: '#F8F8F8', minHeight: 190 }}>
                <span style={{ color: '#B8935A', fontFamily: 'var(--font-inter)', fontSize: 10, letterSpacing: '2px', fontWeight: 700 }}>0{index + 1}</span>
                <h3 style={{ color: '#141414', fontSize: 20, lineHeight: 1.05, fontWeight: 900, textTransform: 'uppercase', margin: '28px 0 12px' }}>{item.title}</h3>
                <p style={{ color: '#666', fontFamily: 'var(--font-inter)', fontSize: 13, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 72px 112px', background: '#141414' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 48, alignItems: 'end', marginBottom: 52 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                <div style={{ width: 32, height: 1.5, background: '#B8935A' }} />
                <span style={{ color: '#B8935A', fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>Relevant Product Families</span>
              </div>
              <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(34px, 4vw, 54px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-2px', textTransform: 'uppercase', margin: 0 }}>
                Built For Vehicle Interfaces.<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Produced Across Multiple Profile Types.</span>
              </h2>
            </div>
            <Link href='/products' style={{ color: '#1B91FF', fontSize: 13, fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap' }}>View Product Range →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0,1fr))', gap: 12 }}>
            {automotiveProducts.map((product, index) => (
              <motion.article key={product.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.5, delay: index * 0.05 }} style={{ borderRadius: 14, overflow: 'hidden', background: '#1d1d1d', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ height: 230, overflow: 'hidden', background: '#FFFFFF' }}>
                  <motion.img src={product.image} alt={product.name} whileHover={{ scale: 1.06 }} transition={{ duration: 0.6, ease: [0.25,0.46,0.45,0.94] }} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: 20 }}>
                  <h3 style={{ color: '#FFFFFF', fontSize: 15, fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.15, margin: '0 0 10px' }}>{product.name}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-inter)', fontSize: 12, lineHeight: 1.65, margin: 0 }}>{product.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '104px 72px', background: '#F8F8F8' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <div style={{ width: 32, height: 1.5, background: '#1B91FF' }} />
              <span style={{ color: '#1B91FF', fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>Engineering Priorities</span>
            </div>
            <h2 style={{ color: '#141414', fontSize: 'clamp(34px, 4vw, 54px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-2px', textTransform: 'uppercase', margin: 0 }}>
              Geometry Matters.<br /><span style={{ color: '#D7D7D6' }}>Material Matters Too.</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gap: 1, background: '#E8E8E8', border: '1px solid #E8E8E8', borderRadius: 14, overflow: 'hidden' }}>
            {engineeringFactors.map(([title, text], index) => (
              <motion.div key={title} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.45, delay: index * 0.05 }} style={{ padding: '24px 26px', background: '#FFFFFF', display: 'grid', gridTemplateColumns: '160px 1fr', gap: 24 }}>
                <strong style={{ color: '#141414', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{title}</strong>
                <span style={{ color: '#666', fontFamily: 'var(--font-inter)', fontSize: 13, lineHeight: 1.65 }}>{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '88px 72px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', border: '1px solid #E8E8E8', borderRadius: 20, padding: '56px 60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40 }}>
          <div>
            <span style={{ color: '#1B91FF', fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>Discuss Your Application</span>
            <h2 style={{ color: '#141414', fontSize: 'clamp(30px, 3.5vw, 46px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-2px', textTransform: 'uppercase', margin: '14px 0 0' }}>Have An Automotive<br /><span style={{ color: '#D7D7D6' }}>Sealing Requirement?</span></h2>
          </div>
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link href='/contact' style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#1B91FF', color: '#FFFFFF', padding: '16px 36px', borderRadius: 50, fontSize: 13, fontWeight: 700, textTransform: 'uppercase', textDecoration: 'none' }}>Contact SSI <span>→</span></Link>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        @media (max-width: 1050px) {
          main section div[style*='repeat(5'] { grid-template-columns: repeat(2, minmax(0,1fr)) !important; }
        }
        @media (max-width: 780px) {
          main section { padding-left: 24px !important; padding-right: 24px !important; }
          main section:first-child { min-height: 650px !important; padding-top: 140px !important; }
          main section div[style*='grid-template-columns: 0.8fr 1.2fr'],
          main section div[style*='grid-template-columns: 1fr 1fr'] { grid-template-columns: 1fr !important; gap: 34px !important; }
          main section div[style*='repeat(5'] { grid-template-columns: 1fr !important; }
          main section div[style*='grid-template-columns: 160px 1fr'] { grid-template-columns: 1fr !important; gap: 8px !important; }
          main section div[style*='justify-content: space-between'] { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </main>
  );
}
