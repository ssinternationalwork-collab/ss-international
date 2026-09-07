'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { industries } from '@/data/industries';

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function IndustriesOverview() {
  return (
    <main style={{ background: '#F8F8F8', fontFamily: 'var(--font-barlow)' }}>
      <section style={{ padding: '190px 72px 96px', background: '#FFFFFF', borderBottom: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
              <div style={{ width: 32, height: 1.5, background: '#1B91FF' }} />
              <span style={{ color: '#1B91FF', fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>
                Industries We Serve
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 0.65fr', gap: 56, alignItems: 'end' }}>
              <h1 style={{ color: '#141414', fontSize: 'clamp(48px, 7vw, 88px)', fontWeight: 900, lineHeight: 0.92, letterSpacing: '-3px', textTransform: 'uppercase', margin: 0 }}>
                Engineered For<br />
                <span style={{ color: '#D7D7D6' }}>Real-World Demands.</span>
              </h1>
              <p style={{ margin: 0, color: '#666', fontFamily: 'var(--font-inter)', fontSize: 15, lineHeight: 1.8, maxWidth: 430 }}>
                SS International develops rubber sealing profiles around the operating conditions of each application — from moving vehicle closures and glazing systems to electrical enclosures, rail coaches and heavy infrastructure.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '96px 72px 112px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div variants={gridVariants} initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.08 }} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 14 }}>
            {industries.map((industry, index) => {
              const isLive = industry.slug === 'automotive';
              const Card = (
                <motion.article
                  variants={cardVariants}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  style={{ position: 'relative', minHeight: 430, borderRadius: 16, overflow: 'hidden', background: '#141414', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <motion.img
                    src={industry.image}
                    alt={industry.name}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 22%, rgba(0,0,0,0.86) 100%)' }} />
                  <div style={{ position: 'absolute', inset: 0, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <span style={{ color: 'rgba(255,255,255,0.68)', fontFamily: 'var(--font-inter)', fontSize: 10, letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 700 }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <div style={{ width: 28, height: 2, background: '#1B91FF', marginBottom: 14 }} />
                      <h2 style={{ color: '#FFFFFF', fontSize: 25, lineHeight: 1, letterSpacing: '-0.8px', fontWeight: 900, textTransform: 'uppercase', margin: '0 0 12px' }}>{industry.name}</h2>
                      <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-inter)', fontSize: 13, lineHeight: 1.65, margin: '0 0 18px' }}>{industry.description}</p>
                      <div style={{ color: isLive ? '#1B91FF' : 'rgba(255,255,255,0.45)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                        {isLive ? 'View Applications' : 'Detailed Page Coming Next'}
                        {isLive && <span aria-hidden='true'>→</span>}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );

              return isLive ? (
                <Link key={industry.slug} href={`/industries/${industry.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>{Card}</Link>
              ) : (
                <div key={industry.slug}>{Card}</div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section style={{ background: '#141414', padding: '92px 72px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <div style={{ width: 32, height: 1.5, background: '#B8935A' }} />
              <span style={{ color: '#B8935A', fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>Application Engineering</span>
            </div>
            <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(34px, 4vw, 54px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-2px', textTransform: 'uppercase', margin: 0 }}>
              Different Conditions.<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>One Engineering Approach.</span>
            </h2>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.62)', fontFamily: 'var(--font-inter)', fontSize: 14, lineHeight: 1.85, margin: 0 }}>
            Material selection, section geometry, compression behaviour and manufacturing method all change with the application. Our industry pages are organised around those engineering requirements so buyers can move quickly from operating conditions to the relevant profile families.
          </p>
        </div>
      </section>

      <style jsx global>{`
        @media (max-width: 1000px) {
          main section > div > div[style*='grid-template-columns: repeat(4'] { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 760px) {
          main section { padding-left: 24px !important; padding-right: 24px !important; }
          main section:first-child { padding-top: 155px !important; }
          main section > div > div[style*='grid-template-columns: 1.35fr'],
          main section > div[style*='grid-template-columns: 1fr 1fr'] { grid-template-columns: 1fr !important; gap: 28px !important; }
          main section > div > div[style*='grid-template-columns: repeat(4'] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
