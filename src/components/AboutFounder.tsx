'use client';
import { motion } from 'framer-motion';

export default function AboutFounder() {
  return (
    <section style={{ background: '#0f0f0f', padding: '40px 72px', fontFamily: 'var(--font-barlow)', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1fr', gap: 80, alignItems: 'center' }}>

          {/* LEFT — Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{ position: 'relative' }}
          >
            {/* Placeholder — replace src with actual founder photo */}
            <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', aspectRatio: '3/4', maxHeight: 420 }}>
              <img
                src='https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80'
                alt='Founder — SS International'
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(20%)' }}
              />
              {/* Blue accent overlay bottom */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, rgba(27,145,255,0.15), transparent)' }}/>
            </div>

            {/* Floating name card */}
            <div style={{
              position: 'absolute', bottom: 28, left: 28,
              background: 'rgba(10,10,10,0.85)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 12, padding: '16px 20px',
            }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#fff', fontFamily: 'var(--font-barlow)', letterSpacing: '-0.3px' }}>
                [Founder Name]
              </div>
              <div style={{ fontSize: 11, color: '#1B91FF', fontFamily: 'var(--font-inter)', fontWeight: 600, marginTop: 3, letterSpacing: '0.5px' }}>
                Founder & Managing Director
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-inter)', marginTop: 2 }}>
                SS International Industries LLP
              </div>
            </div>

            {/* Since badge */}
            <div style={{
              position: 'absolute', top: 24, right: 24,
              background: '#1B91FF',
              borderRadius: 50, padding: '8px 16px',
              fontSize: 11, fontWeight: 700, color: '#fff',
              fontFamily: 'var(--font-inter)', letterSpacing: '1px',
              textTransform: 'uppercase',
            }}>
              Est. 1999
            </div>
          </motion.div>

          {/* RIGHT — Quote & content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
              <div style={{ width: 28, height: 1.5, background: '#1B91FF' }}/>
              <span style={{ color: '#1B91FF', fontSize: 13, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>From the Founder</span>
            </div>

            {/* Large quote mark */}
            <div style={{ fontSize: 120, lineHeight: 0.6, color: '#1B91FF', fontFamily: 'Georgia, serif', marginBottom: 24, opacity: 0.4 }}>"</div>

            <blockquote style={{ margin: 0 }}>
              <p style={{ fontSize: 'clamp(15px,1.6vw,20px)', fontWeight: 500, color: '#ffffff', lineHeight: 1.8, fontFamily: 'var(--font-inter)', margin: '0 0 32px' }}>
                The true value of a product is not measured on the day it is delivered.
                <br/><br/>
                It is measured months and years later, when it continues to perform as expected, when it solves the problem it was designed for, and when the customer never has to think about it again.
                <br/><br/>
                That quiet reliability is what we strive to build into everything we manufacture.
              </p>
            </blockquote>

            <div style={{ width: 48, height: 2, background: '#1B91FF', marginBottom: 32 }}/>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
