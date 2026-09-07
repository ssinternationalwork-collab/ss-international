'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const process = [
  ['Requirement Review', 'The sealing interface, operating conditions, section geometry and adjoining surfaces are reviewed before the profile moves into production planning.'],
  ['Material & Section Control', 'Compound choice and profile geometry are aligned with the intended application, compression behaviour, retention method and service environment.'],
  ['Tooling & Sample Validation', 'New and revised sections are checked against the drawing, fit requirement and functional geometry before repeat production.'],
  ['In-Process Inspection', 'Critical dimensions and visible profile characteristics are monitored during production so deviations can be identified before final dispatch.'],
  ['Final Verification', 'Finished profiles are reviewed against the agreed requirement before packing, identification and shipment.'],
  ['Documentation & Traceability', 'Project information, drawings and production references are maintained around the customer requirement so repeat orders can be controlled consistently.'],
];

const focusAreas = [
  ['Dimensional Consistency', 'Section width, height, wall features, lips, bulbs and retention geometry must remain consistent with the approved profile requirement.'],
  ['Surface & Finish', 'Visible surfaces, joints, flocked areas and contact faces are reviewed where finish directly affects assembly or movement.'],
  ['Compression Behaviour', 'Sealing sections are evaluated around the installed interface so the profile closes and recovers as intended.'],
  ['Fit & Retention', 'Profiles are checked around the flange, channel, carrier or mating part used to locate the seal in the final assembly.'],
  ['Application Suitability', 'Material and profile design are considered together with temperature, weather, movement, dust, water and other application conditions.'],
  ['Repeat Production', 'Approved geometry and process references form the baseline for subsequent production and repeat customer orders.'],
];

export default function QualityAssurancePage() {
  return (
    <main style={{ background: '#FFFFFF', fontFamily: 'var(--font-barlow)' }}>
      <section style={{ position: 'relative', minHeight: 700, padding: '120px 72px 72px', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <img src='https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1800&q=90' alt='Quality inspection and testing' style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(8,10,14,0.28) 0%, rgba(8,10,14,0.82) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1280, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.25,0.46,0.45,0.94] }} style={{ maxWidth: 920 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
              <div style={{ width: 32, height: 1.5, background: '#1B91FF' }} />
              <span style={{ color: '#FFFFFF', fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>Quality Assurance</span>
            </div>
            <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(48px,7vw,88px)', fontWeight: 900, lineHeight: 0.92, letterSpacing: '-3px', textTransform: 'uppercase', margin: '0 0 24px' }}>
              Control The Process.<br /><span style={{ color: 'rgba(255,255,255,0.3)' }}>Protect The Performance.</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontFamily: 'var(--font-inter)', fontSize: 15, lineHeight: 1.8, maxWidth: 680, margin: 0 }}>
              Quality in an engineered rubber profile starts before production. SSI's approach is built around the customer requirement, section geometry, process consistency and verification of the finished profile against its intended application.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '104px 72px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.78fr 1.22fr', gap: 88 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <div style={{ width: 32, height: 1.5, background: '#1B91FF' }} />
              <span style={{ color: '#1B91FF', fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>Quality Workflow</span>
            </div>
            <h2 style={{ color: '#141414', fontSize: 'clamp(34px,4vw,54px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-2px', textTransform: 'uppercase', margin: '0 0 24px' }}>
              From Requirement.<br /><span style={{ color: '#D7D7D6' }}>To Repeat Production.</span>
            </h2>
            <p style={{ color: '#666', fontFamily: 'var(--font-inter)', fontSize: 14, lineHeight: 1.85, margin: 0 }}>
              The objective is simple: make the approved profile repeatable. Each stage adds a control point around geometry, material, production condition and finished-part verification.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {process.map(([title, text], index) => (
              <motion.article key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: index * 0.05 }} whileHover={{ y: -3 }} style={{ padding: 28, minHeight: 205, border: '1px solid #E8E8E8', borderRadius: 14, background: '#F8F8F8' }}>
                <span style={{ color: '#B8935A', fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 700, letterSpacing: '2px' }}>{String(index + 1).padStart(2, '0')}</span>
                <h3 style={{ color: '#141414', fontSize: 19, lineHeight: 1.05, fontWeight: 900, textTransform: 'uppercase', margin: '28px 0 12px' }}>{title}</h3>
                <p style={{ color: '#666', fontFamily: 'var(--font-inter)', fontSize: 13, lineHeight: 1.7, margin: 0 }}>{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 72px 112px', background: '#141414' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ maxWidth: 820, marginBottom: 54 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <div style={{ width: 32, height: 1.5, background: '#B8935A' }} />
              <span style={{ color: '#B8935A', fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>Inspection Focus</span>
            </div>
            <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(34px,4vw,54px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-2px', textTransform: 'uppercase', margin: 0 }}>
              Measure What Matters.<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Against The Application.</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 12 }}>
            {focusAreas.map(([title, text], index) => (
              <motion.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: 0.45, delay: index * 0.04 }} style={{ padding: 28, borderRadius: 14, border: '1px solid rgba(255,255,255,0.09)', background: '#1d1d1d' }}>
                <div style={{ width: 28, height: 2, background: '#1B91FF', marginBottom: 24 }} />
                <h3 style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.05, margin: '0 0 12px' }}>{title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.58)', fontFamily: 'var(--font-inter)', fontSize: 13, lineHeight: 1.7, margin: 0 }}>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '104px 72px', background: '#F8F8F8' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <div style={{ width: 32, height: 1.5, background: '#1B91FF' }} />
              <span style={{ color: '#1B91FF', fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>Standards & Documentation</span>
            </div>
            <h2 style={{ color: '#141414', fontSize: 'clamp(34px,4vw,54px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-2px', textTransform: 'uppercase', margin: '0 0 22px' }}>
              Claims Need Evidence.<br /><span style={{ color: '#D7D7D6' }}>Documentation Comes First.</span>
            </h2>
            <p style={{ color: '#666', fontFamily: 'var(--font-inter)', fontSize: 14, lineHeight: 1.85, margin: 0, maxWidth: 560 }}>
              Certification and compliance requirements differ by product, material, customer and end-use market. The final SSI certification list will be published here only against verified company documents rather than copied from an industry reference.
            </p>
          </div>
          <div style={{ background: '#FFFFFF', border: '1px solid #E8E8E8', borderRadius: 18, padding: '36px 38px' }}>
            <span style={{ color: '#B8935A', fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Certificate Library</span>
            <h3 style={{ color: '#141414', fontSize: 25, fontWeight: 900, textTransform: 'uppercase', lineHeight: 1, margin: '14px 0 14px' }}>Verified SSI Documents<br />Will Appear Here.</h3>
            <p style={{ color: '#666', fontFamily: 'var(--font-inter)', fontSize: 13, lineHeight: 1.7, margin: '0 0 24px' }}>This preview intentionally avoids publishing unverified certificate logos or standard claims.</p>
            <Link href='/contact' style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#1B91FF', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Request Quality Documentation →</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '88px 72px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', border: '1px solid #E8E8E8', borderRadius: 20, padding: '56px 60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40 }}>
          <div>
            <span style={{ color: '#1B91FF', fontFamily: 'var(--font-inter)', fontSize: 10, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>Discuss A Requirement</span>
            <h2 style={{ color: '#141414', fontSize: 'clamp(30px,3.5vw,46px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-2px', textTransform: 'uppercase', margin: '14px 0 0' }}>Need A Profile Reviewed<br /><span style={{ color: '#D7D7D6' }}>Against Your Application?</span></h2>
          </div>
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link href='/contact' style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#1B91FF', color: '#FFFFFF', padding: '16px 36px', borderRadius: 50, fontSize: 13, fontWeight: 700, textTransform: 'uppercase', textDecoration: 'none' }}>Contact SSI →</Link>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        @media (max-width: 980px) {
          main section div[style*='repeat(3'] { grid-template-columns: repeat(2,minmax(0,1fr)) !important; }
        }
        @media (max-width: 760px) {
          main section { padding-left: 24px !important; padding-right: 24px !important; }
          main section:first-child { min-height: 650px !important; padding-top: 140px !important; }
          main section div[style*='grid-template-columns: 0.78fr 1.22fr'],
          main section div[style*='grid-template-columns: 1fr 1fr'] { grid-template-columns: 1fr !important; gap: 32px !important; }
          main section div[style*='repeat(3'] { grid-template-columns: 1fr !important; }
          main section div[style*='justify-content: space-between'] { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </main>
  );
}
