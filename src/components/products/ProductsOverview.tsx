'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { products } from '@/data/products';

const gridVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };
const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

export default function ProductsOverview() {
  return (
    <main style={{ background: '#F8F8F8', fontFamily: 'var(--font-barlow)' }}>
      <section style={{ padding: '190px 72px 96px', background: '#FFFFFF', borderBottom: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.25,0.46,0.45,0.94] }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
              <div style={{ width: 32, height: 1.5, background: '#1B91FF' }} />
              <span style={{ color: '#1B91FF', fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>Product Range</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1.28fr 0.72fr', gap: 64, alignItems: 'end' }}>
              <h1 style={{ color: '#141414', fontSize: 'clamp(48px, 7vw, 88px)', fontWeight: 900, lineHeight: 0.92, letterSpacing: '-3px', textTransform: 'uppercase', margin: 0 }}>
                Engineered Profiles.<br /><span style={{ color: '#D7D7D6' }}>Seventeen Product Families.</span>
              </h1>
              <p style={{ margin: 0, color: '#666', fontFamily: 'var(--font-inter)', fontSize: 15, lineHeight: 1.8, maxWidth: 430 }}>
                SS International manufactures extruded and moulded rubber profile families for vehicle, glazing, enclosure, rail, shipping and infrastructure applications. Select a category to move from product type to application detail.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '96px 72px 112px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div variants={gridVariants} initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.06 }} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 14 }}>
            {products.map((product, index) => {
              const isLive = product.slug === 'automotive-profiles';
              const card = (
                <motion.article variants={cardVariants} whileHover={{ y: -4 }} transition={{ duration: 0.2 }} style={{ borderRadius: 16, overflow: 'hidden', background: '#FFFFFF', border: '1px solid #E8E8E8', minHeight: 430, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: 285, overflow: 'hidden', background: '#FFFFFF', borderBottom: '1px solid #E8E8E8' }}>
                    <motion.img src={product.image} alt={product.name} whileHover={{ scale: 1.05 }} transition={{ duration: 0.6, ease: [0.25,0.46,0.45,0.94] }} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={{ padding: '22px 22px 24px', display: 'flex', flex: 1, flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, marginBottom: 14 }}>
                      <span style={{ color: '#B8935A', fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 700, letterSpacing: '2px' }}>{String(index + 1).padStart(2, '0')}</span>
                      <div style={{ width: 28, height: 2, background: '#1B91FF' }} />
                    </div>
                    <h2 style={{ color: '#141414', fontSize: 22, lineHeight: 1, letterSpacing: '-0.6px', fontWeight: 900, textTransform: 'uppercase', margin: '0 0 12px' }}>{product.name}</h2>
                    <p style={{ color: '#666', fontFamily: 'var(--font-inter)', fontSize: 13, lineHeight: 1.7, margin: '0 0 20px' }}>{product.description}</p>
                    <div style={{ marginTop: 'auto', color: isLive ? '#1B91FF' : '#A8A8A8', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {isLive ? 'View Product →' : 'Detail Page Next'}
                    </div>
                  </div>
                </motion.article>
              );

              return isLive ? (
                <Link key={product.slug} href={`/products/${product.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>{card}</Link>
              ) : <div key={product.slug}>{card}</div>;
            })}
          </motion.div>
        </div>
      </section>

      <section style={{ background: '#141414', padding: '92px 72px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <div style={{ width: 32, height: 1.5, background: '#B8935A' }} />
              <span style={{ color: '#B8935A', fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>Custom Requirements</span>
            </div>
            <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(34px, 4vw, 54px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-2px', textTransform: 'uppercase', margin: 0 }}>
              Start With The Interface.<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Then Engineer The Profile.</span>
            </h2>
          </div>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.62)', fontFamily: 'var(--font-inter)', fontSize: 14, lineHeight: 1.85, margin: '0 0 26px' }}>
              Product category is only the starting point. Geometry, material choice, retention method, compression and adjoining surfaces determine the final section used in the application.
            </p>
            <Link href='/contact' style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#1B91FF', color: '#FFFFFF', padding: '14px 32px', borderRadius: 50, fontSize: 13, fontWeight: 700, textTransform: 'uppercase', textDecoration: 'none' }}>Discuss A Requirement →</Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @media (max-width: 1000px) {
          main section div[style*='repeat(3'] { grid-template-columns: repeat(2, minmax(0,1fr)) !important; }
        }
        @media (max-width: 760px) {
          main section { padding-left: 24px !important; padding-right: 24px !important; }
          main section:first-child { padding-top: 155px !important; }
          main section div[style*='grid-template-columns: 1.28fr'],
          main section div[style*='grid-template-columns: 1fr 1fr'] { grid-template-columns: 1fr !important; gap: 30px !important; }
          main section div[style*='repeat(3'] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
