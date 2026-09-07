'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const WORDS = ['Automotive', 'Railways', 'Architecture', 'Mining', 'Shipping', 'Power'];

export default function HeroV3() {
  const [idx, setIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setAnimating(true);
      setTimeout(() => { setIdx(i => (i + 1) % WORDS.length); setAnimating(false); }, 400);
    }, 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{
      overflow: 'hidden',
      padding: '60px 0 0',
      background: '#ffffff',
      fontFamily: 'var(--font-barlow)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 52px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>

          {/* Top content with concentric rings */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingBottom: 60 }}>

            {/* Concentric rings background */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: 900,
              height: 900,
              borderRadius: '50%',
              border: '1px solid rgba(27,145,255,0.12)',
              padding: 60,
              zIndex: 0,
              maskImage: 'linear-gradient(to top, transparent, transparent, white, white, white, transparent, transparent)',
              WebkitMaskImage: 'linear-gradient(to top, transparent, transparent, white, white, white, transparent, transparent)',
              pointerEvents: 'none',
            }}>
              <div style={{ width: '100%', height: '100%', borderRadius: '50%', border: '1px solid rgba(27,145,255,0.1)', padding: 60 }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '50%', border: '1px solid rgba(27,145,255,0.08)' }}/>
              </div>
            </div>

            {/* Since 1999 eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, justifyContent: 'center' }}
            >
              <div style={{ width: 32, height: 1, background: '#1B91FF' }}/>
              <span style={{ color: '#888', fontSize: 10, fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>Since 1999</span>
              <div style={{ width: 32, height: 1, background: '#1B91FF' }}/>
            </motion.div>

            {/* Headline */}
            <div style={{ position: 'relative', zIndex: 1, fontSize: 'clamp(52px,7vw,96px)', fontWeight: 900, lineHeight: 0.93, letterSpacing: '-3px', textTransform: 'uppercase', marginBottom: 20 }}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} style={{ color: '#141414', marginBottom: 4 }}>Precision</motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }} style={{ color: '#D7D7D6', marginBottom: 4 }}>Sealing for</motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }} style={{ height: 'clamp(52px,7vw,96px)', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                <div style={{ color: '#1B91FF', transform: animating ? 'translateY(-110%)' : 'translateY(0)', opacity: animating ? 0 : 1, transition: 'transform 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease', fontSize: 'clamp(52px,7vw,96px)', fontWeight: 900, letterSpacing: '-3px', textTransform: 'uppercase', lineHeight: 0.93, whiteSpace: 'nowrap' }}>{WORDS[idx]}</div>
              </motion.div>
            </div>

            {/* CTA + trust */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, paddingBottom: 12 }}
            >
              <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#141414', color: '#fff', padding: '18px 52px', borderRadius: 50, fontSize: 15, fontWeight: 700, letterSpacing: '0.5px', textTransform: 'none', textDecoration: 'none', fontFamily: 'var(--font-barlow)', transition: 'background 0.2s ease' }}
                onMouseEnter={e => e.currentTarget.style.background = '#1B91FF'}
                onMouseLeave={e => e.currentTarget.style.background = '#141414'}
              >
                Explore Products
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7H11M7 3L11 7L7 11" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </motion.div>
          </div>

          {/* 4-image grid — full width, rounded top corners */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: '100%',
              borderRadius: '20px 20px 0 0',
              overflow: 'hidden',
              border: '1px solid #e8e8e8',
              borderBottom: 'none',
              boxShadow: '0 -4px 40px rgba(0,0,0,0.08)',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', width: '100%', height: 520 }}>
              <img src="https://images.unsplash.com/photo-1714504904786-b6732390b206?w=800&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Automotive"/>
              <img src="https://images.unsplash.com/photo-1683470156390-703e9313dab6?w=800&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Railways"/>
              <img src="https://images.unsplash.com/photo-1600684249816-38cdfcf95c17?w=800&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Industrial"/>
              <img src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=800&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt="Shipping"/>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
