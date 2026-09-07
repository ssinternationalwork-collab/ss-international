'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

const WORDS = ['Automotive', 'Railways', 'Architecture', 'Mining', 'Shipping', 'Power'];

export default function HeroV2() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll({ target: scrollRef });
  const y = useTransform(scrollYProgress, [0, 1], ['-25%', '50%']);
  const insetY = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const insetX = useTransform(scrollYProgress, [0, 1], [38, 0]);
  const roundedness = useTransform(scrollYProgress, [0, 1], [900, 12]);
  const clipPath = useMotionTemplate`inset(${insetY}% ${insetX}% ${insetY}% ${insetX}% round ${roundedness}px)`;

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
    <section
      ref={scrollRef}
      style={{
        position: 'relative',
        minHeight: '120vh',
        paddingBottom: '30%',
        background: '#0a0a0a',
        fontFamily: 'var(--font-barlow)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Text content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        padding: '100px 52px 60px',
        maxWidth: 900,
        margin: '0 auto',
      }}>
        <motion.div style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
        }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <div style={{ width: 28, height: 1, background: 'rgba(27,145,255,0.6)' }}/>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>Since 1999</span>
            <div style={{ width: 28, height: 1, background: 'rgba(27,145,255,0.6)' }}/>
          </div>
        </motion.div>

        <div style={{ fontSize: 'clamp(52px,7vw,96px)', fontWeight: 900, lineHeight: 0.93, letterSpacing: '-3px', textTransform: 'uppercase' }}>
          <motion.div style={{ color: '#fff', marginBottom: 4, opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(28px)', transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s' }}>Precision</motion.div>
          <motion.div style={{ color: 'rgba(255,255,255,0.3)', marginBottom: 4, opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(28px)', transition: 'opacity 0.8s ease 0.45s, transform 0.8s ease 0.45s' }}>Sealing for</motion.div>
          <div style={{ height: 'clamp(52px,7vw,96px)', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', opacity: loaded ? 1 : 0, transition: 'opacity 0.8s ease 0.6s' }}>
            <div style={{ color: '#1B91FF', transform: animating ? 'translateY(-110%)' : 'translateY(0)', opacity: animating ? 0 : 1, transition: 'transform 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease', fontSize: 'clamp(52px,7vw,96px)', fontWeight: 900, letterSpacing: '-3px', textTransform: 'uppercase', lineHeight: 0.93, whiteSpace: 'nowrap' }}>{WORDS[idx]}</div>
          </div>
        </div>

        <motion.p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 16, lineHeight: 1.7, maxWidth: 520, margin: '28px auto 36px', fontFamily: 'var(--font-inter)', opacity: loaded ? 1 : 0, transition: 'opacity 0.7s ease 0.75s' }}>
          Precision rubber sealing profiles for the world's most demanding applications — engineered, tested, and delivered in-house.
        </motion.p>

        <motion.div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.7s ease 0.85s' }}>
          <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#1B91FF', color: '#fff', padding: '16px 36px', borderRadius: 50, fontSize: 13, fontWeight: 700, letterSpacing: '0.5px', textTransform: 'none', textDecoration: 'none', fontFamily: 'var(--font-barlow)' }}>
            Explore Products
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7H11M7 3L11 7L7 11" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </motion.div>
      </div>

      {/* Scroll-reveal video/image panel */}
      <motion.div style={{
        width: '100%',
overflow: 'hidden',
        clipPath,
        y,
        position: 'relative',
        zIndex: 1,
        marginTop: -40,
      }}>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/8', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', width: '100%', height: '100%' }}>
            <img src='https://images.unsplash.com/photo-1714504904786-b6732390b206?w=1200&q=80' style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt='' />
            <img src='https://images.unsplash.com/photo-1683470156390-703e9313dab6?w=1200&q=80' style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt='' />
            <img src='https://images.unsplash.com/photo-1600684249816-38cdfcf95c17?w=1200&q=80' style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt='' />
            <img src='https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=1200&q=80' style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt='' />
          </div>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, transparent 40%)' }}/>
        </div>
      </motion.div>
    </section>
  );
}
