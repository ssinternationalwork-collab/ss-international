'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ProductDetail } from '@/data/product-details';

export default function ProductDetailPage({ product }: { product: ProductDetail }) {
  return (
    <main style={{ background: '#FFFFFF', fontFamily: 'var(--font-barlow)' }}>
      <section style={{ padding: '170px 72px 82px', background: '#F8F8F8', borderBottom: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: 72, alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.25,0.46,0.45,0.94] }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
              <div style={{ width: 32, height: 1.5, background: '#1B91FF' }} />
              <span style={{ color: '#1B91FF', fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>{product.eyebrow}</span>
            </div>
            <h1 style={{ color: '#141414', fontSize: 'clamp(44px, 6vw, 78px)', fontWeight: 900, lineHeight: 0.92, letterSpacing: '-3px', textTransform: 'uppercase', margin: '0 0 24px' }}>
              {product.heroTitle}<br /><span style={{ color: '#D7D7D6' }}>{product.heroMuted}</span>
            </h1>
            <p style={{ color: '#666', fontFamily: 'var(--font-inter)', fontSize: 15, lineHeight: 1.8, maxWidth: 620, margin: '0 0 32px' }}>{product.heroText}</p>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} style={{ display: 'inline-block' }}>
              <Link href='/contact' style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#1B91FF', color: '#FFFFFF', padding: '15px 34px', borderRadius: 50, fontSize: 13, fontWeight: 700, textTransform: 'uppercase', textDecoration: 'none' }}>Discuss Your Requirement →</Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} style={{ borderRadius: 18, overflow: 'hidden', border: '1px solid #E8E8E8', background: '#FFFFFF', minHeight: 520 }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', minHeight: 520, objectFit: 'cover', display: 'block' }} />
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '104px 72px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.78fr 1.22fr', gap: 92, alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <div style={{ width: 32, height: 1.5, background: '#1B91FF' }} />
              <span style={{ color: '#1B91FF', fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>Typical Applications</span>
            </div>
            <h2 style={{ color: '#141414', fontSize: 'clamp(34px, 4vw, 54px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-2px', textTransform: 'uppercase', margin: 0 }}>
              Start With The Use Case.<br /><span style={{ color: '#D7D7D6' }}>Then Define The Section.</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {product.applications.map(([title, text], index) => (
              <motion.article key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.05 }} whileHover={{ y: -3 }} style={{ padding: 28, background: '#F8F8F8', border: '1px solid #E8E8E8', borderRadius: 14, minHeight: 185 }}>
                <span style={{ color: '#B8935A', fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 700, letterSpacing: '2px' }}>{String(index + 1).padStart(2, '0')}</span>
                <h3 style={{ color: '#141414', fontSize: 19, fontWeight: 900, lineHeight: 1.05, textTransform: 'uppercase', margin: '28px 0 12px' }}>{title}</h3>
                <p style={{ color: '#666', fontFamily: 'var(--font-inter)', fontSize: 13, lineHeight: 1.7, margin: 0 }}>{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 72px 108px', background: '#141414' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.82fr 1.18fr', gap: 88, alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <div style={{ width: 32, height: 1.5, background: '#B8935A' }} />
              <span style={{ color: '#B8935A', fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>Engineering Considerations</span>
            </div>
            <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(34px, 4vw, 54px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-2px', textTransform: 'uppercase', margin: 0 }}>
              Product Family.<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Application-Specific Geometry.</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gap: 1, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, overflow: 'hidden' }}>
            {product.engineering.map(([title, text], index) => (
              <motion.div key={title} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.45, delay: index * 0.05 }} style={{ padding: '25px 26px', background: '#1B1B1B', display: 'grid', gridTemplateColumns: '170px 1fr', gap: 26 }}>
                <strong style={{ color: '#FFFFFF', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{title}</strong>
                <span style={{ color: 'rgba(255,255,255,0.58)', fontFamily: 'var(--font-inter)', fontSize: 13, lineHeight: 1.65 }}>{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '96px 72px', background: '#F8F8F8' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <div style={{ width: 32, height: 1.5, background: '#1B91FF' }} />
              <span style={{ color: '#1B91FF', fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>Related Industries</span>
            </div>
            <h2 style={{ color: '#141414', fontSize: 'clamp(32px, 4vw, 50px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-2px', textTransform: 'uppercase', margin: 0 }}>
              Where This Product<br /><span style={{ color: '#D7D7D6' }}>Fits In The Field.</span>
            </h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {product.industries.map((industry) => (
              <motion.div key={industry.href} whileHover={{ y: -2 }}>
                <Link href={industry.href} style={{ display: 'inline-flex', padding: '14px 24px', border: '1px solid #D7D7D6', borderRadius: 50, color: '#141414', textDecoration: 'none', fontSize: 12, fontWeight: 700, textTransform: 'uppercase' }}>{industry.name} →</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '84px 72px 96px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', border: '1px solid #E8E8E8', borderRadius: 20, padding: '54px 58px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40 }}>
          <div>
            <span style={{ color: '#1B91FF', fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>Custom Profile Requirement</span>
            <h2 style={{ color: '#141414', fontSize: 'clamp(30px, 3.5vw, 46px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-2px', textTransform: 'uppercase', margin: '14px 0 0' }}>Need This Product<br /><span style={{ color: '#D7D7D6' }}>For A Specific Interface?</span></h2>
          </div>
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link href='/contact' style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#1B91FF', color: '#FFFFFF', padding: '16px 36px', borderRadius: 50, fontSize: 13, fontWeight: 700, textTransform: 'uppercase', textDecoration: 'none' }}>Contact SSI →</Link>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        @media (max-width: 780px) {
          main section { padding-left: 24px !important; padding-right: 24px !important; }
          main section:first-child { padding-top: 145px !important; }
          main section div[style*='grid-template-columns: 0.92fr 1.08fr'],
          main section div[style*='grid-template-columns: 0.78fr 1.22fr'],
          main section div[style*='grid-template-columns: 0.82fr 1.18fr'],
          main section div[style*='grid-template-columns: 0.8fr 1.2fr'],
          main section div[style*='grid-template-columns: 1fr 1fr'] { grid-template-columns: 1fr !important; gap: 34px !important; }
          main section div[style*='grid-template-columns: 170px 1fr'] { grid-template-columns: 1fr !important; gap: 8px !important; }
          main section div[style*='justify-content: space-between'] { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </main>
  );
}
