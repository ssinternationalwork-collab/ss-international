'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { automotiveProfileDetail } from '@/data/products';

export default function AutomotiveProfilesProduct() {
  const p = automotiveProfileDetail;

  return (
    <main style={{ background: '#FFFFFF', fontFamily: 'var(--font-barlow)' }}>
      <section style={{ padding: '175px 72px 86px', background: '#F8F8F8', borderBottom: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: 72, alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.25,0.46,0.45,0.94] }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
              <div style={{ width: 32, height: 1.5, background: '#1B91FF' }} />
              <span style={{ color: '#1B91FF', fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>{p.eyebrow}</span>
            </div>
            <h1 style={{ color: '#141414', fontSize: 'clamp(48px, 6vw, 78px)', fontWeight: 900, lineHeight: 0.92, letterSpacing: '-3px', textTransform: 'uppercase', margin: '0 0 26px' }}>
              {p.heroTitle}<br /><span style={{ color: '#D7D7D6' }}>{p.heroMuted}</span>
            </h1>
            <p style={{ color: '#666', fontFamily: 'var(--font-inter)', fontSize: 15, lineHeight: 1.85, margin: '0 0 34px', maxWidth: 590 }}>{p.heroText}</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href='/contact' style={{ background: '#1B91FF', color: '#FFFFFF', padding: '15px 34px', borderRadius: 50, fontSize: 13, fontWeight: 700, textTransform: 'uppercase', textDecoration: 'none' }}>Discuss Requirement →</Link>
              <Link href='/products' style={{ background: 'transparent', color: '#141414', padding: '15px 34px', borderRadius: 50, border: '1.5px solid #D7D7D6', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', textDecoration: 'none' }}>All Products</Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} style={{ borderRadius: 18, overflow: 'hidden', border: '1px solid #E8E8E8', background: '#FFFFFF', minHeight: 540 }}>
            <img src={p.image} alt={p.name} style={{ width: '100%', height: 540, objectFit: 'cover', display: 'block' }} />
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '104px 72px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.78fr 1.22fr', gap: 92, alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <div style={{ width: 32, height: 1.5, background: '#1B91FF' }} />
              <span style={{ color: '#1B91FF', fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>Where It Fits</span>
            </div>
            <h2 style={{ color: '#141414', fontSize: 'clamp(34px, 4vw, 54px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-2px', textTransform: 'uppercase', margin: '0 0 24px' }}>
              One Product Family.<br /><span style={{ color: '#D7D7D6' }}>Multiple Vehicle Interfaces.</span>
            </h2>
            <p style={{ color: '#666', fontFamily: 'var(--font-inter)', fontSize: 14, lineHeight: 1.85, margin: 0 }}>
              Automotive profiles are selected around the interface they need to seal, protect or retain. The section geometry changes with the body flange, closure movement, glass system and adjoining trim.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {p.applications.map(([title, text], index) => (
              <motion.article key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.05 }} whileHover={{ y: -3 }} style={{ padding: 28, border: '1px solid #E8E8E8', borderRadius: 14, background: '#F8F8F8', minHeight: 188 }}>
                <span style={{ color: '#B8935A', fontFamily: 'var(--font-inter)', fontSize: 10, letterSpacing: '2px', fontWeight: 700 }}>0{index + 1}</span>
                <h3 style={{ color: '#141414', fontSize: 19, lineHeight: 1.05, fontWeight: 900, textTransform: 'uppercase', margin: '28px 0 12px' }}>{title}</h3>
                <p style={{ color: '#666', fontFamily: 'var(--font-inter)', fontSize: 13, lineHeight: 1.7, margin: 0 }}>{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 72px', background: '#141414' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <div style={{ width: 32, height: 1.5, background: '#B8935A' }} />
              <span style={{ color: '#B8935A', fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>Engineering Considerations</span>
            </div>
            <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(34px, 4vw, 54px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-2px', textTransform: 'uppercase', margin: 0 }}>
              The Section Is The System.<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Fit Comes First.</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gap: 1, background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 14, overflow: 'hidden' }}>
            {p.engineering.map(([title, text], index) => (
              <motion.div key={title} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.4, delay: index * 0.04 }} style={{ background: '#1B1B1B', padding: '24px 26px', display: 'grid', gridTemplateColumns: '170px 1fr', gap: 24 }}>
                <strong style={{ color: '#FFFFFF', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{title}</strong>
                <span style={{ color: 'rgba(255,255,255,0.58)', fontFamily: 'var(--font-inter)', fontSize: 13, lineHeight: 1.68 }}>{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 72px', background: '#F8F8F8' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <div style={{ width: 32, height: 1.5, background: '#1B91FF' }} />
              <span style={{ color: '#1B91FF', fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>Relevant Industries</span>
            </div>
            <h2 style={{ color: '#141414', fontSize: 'clamp(34px, 4vw, 54px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-2px', textTransform: 'uppercase', margin: 0 }}>
              Designed For Mobility.<br /><span style={{ color: '#D7D7D6' }}>Linked To Real Applications.</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {p.industries.map((industry) => (
              <motion.div key={industry.name} whileHover={{ y: -3 }}>
                <Link href={industry.href} style={{ minHeight: 130, padding: 26, borderRadius: 14, border: '1px solid #E8E8E8', background: '#FFFFFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textDecoration: 'none' }}>
                  <div style={{ width: 28, height: 2, background: '#1B91FF' }} />
                  <div style={{ color: '#141414', fontSize: 18, fontWeight: 900, textTransform: 'uppercase' }}>{industry.name} <span style={{ color: '#1B91FF' }}>→</span></div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '88px 72px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', border: '1px solid #E8E8E8', borderRadius: 20, padding: '56px 60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40 }}>
          <div>
            <span style={{ color: '#1B91FF', fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>Send Your Section</span>
            <h2 style={{ color: '#141414', fontSize: 'clamp(30px, 3.5vw, 46px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-2px', textTransform: 'uppercase', margin: '14px 0 0' }}>Need An Automotive<br /><span style={{ color: '#D7D7D6' }}>Profile For Your Assembly?</span></h2>
          </div>
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link href='/contact' style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#1B91FF', color: '#FFFFFF', padding: '16px 36px', borderRadius: 50, fontSize: 13, fontWeight: 700, textTransform: 'uppercase', textDecoration: 'none' }}>Contact SSI →</Link>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        @media (max-width: 780px) {
          main section { padding-left: 24px !important; padding-right: 24px !important; }
          main section:first-child { padding-top: 150px !important; }
          main section div[style*='grid-template-columns: 0.92fr'],
          main section div[style*='grid-template-columns: 0.78fr'],
          main section div[style*='grid-template-columns: 0.9fr'],
          main section div[style*='grid-template-columns: 1fr 1fr'] { grid-template-columns: 1fr !important; gap: 32px !important; }
          main section div[style*='grid-template-columns: 170px 1fr'] { grid-template-columns: 1fr !important; gap: 8px !important; }
          main section div[style*='justify-content: space-between'] { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </main>
  );
}
