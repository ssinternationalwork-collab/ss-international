'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  { q: 'What materials do you manufacture rubber profiles in?', a: 'We manufacture profiles in EPDM, NBR, Silicone, PVC, and co-extruded combinations. All compounds are formulated in-house and tested before production.' },
  { q: 'Do you offer custom rubber profile design and development?', a: 'Yes — we handle end-to-end profile design including CAD development, die fabrication, compound selection, and prototype testing entirely in-house.' },
  { q: 'What industries do you supply sealing profiles to?', a: 'We supply to automotive, railways, architecture, shipping, power distribution, mining, infrastructure, and bus body manufacturing sectors.' },
  { q: 'Are your profiles EN 45545 certified for railway applications?', a: 'Yes. Our fire retardant rubber profiles meet EN 45545 R23 HL3 certification and comply with BS 6853, DIN 5510-2, and NFPA 130 standards.' },
  { q: 'What is your minimum order quantity (MOQ)?', a: 'MOQ varies by profile type and complexity. Contact us with your requirement and we will provide a specific quote along with lead time.' },
  { q: 'Do you export rubber profiles internationally?', a: 'Yes — we supply OEM clients across the UK, Germany, UAE, Singapore, Japan, Australia, South Africa, and other markets globally.' },
  { q: 'What is your typical lead time for orders?', a: 'Standard profiles are typically dispatched within 7–14 working days. Custom profile development timelines depend on tooling and testing requirements.' },
  { q: 'Do you manufacture vulcanised corner joints and moulded parts?', a: 'Yes — in-house compression moulding and joint vulcanization capabilities allow us to produce seamless corner joints without secondary processing.' },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ background: '#ffffff', padding: '100px 72px', fontFamily: 'var(--font-barlow)' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center', marginBottom: 16 }}>
            <div style={{ width: 28, height: 1.5, background: '#1B91FF' }}/>
            <span style={{ color: '#1B91FF', fontSize: 13, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>FAQ</span>
            <div style={{ width: 28, height: 1.5, background: '#1B91FF' }}/>
          </div>
          <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 900, color: '#141414', letterSpacing: '-1.5px', margin: 0, fontFamily: 'var(--font-barlow)' }}>
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {FAQS.map((faq, i) => (
            <div
              key={i}
              style={{
                borderRadius: 12,
                border: `1px solid ${open === i ? '#1B91FF' : '#e8e8e8'}`,
                background: open === i ? '#f0f7ff' : '#fff',
                overflow: 'hidden',
                transition: 'border-color 0.2s ease, background 0.2s ease',
                cursor: 'pointer',
              }}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '20px 24px',
              }}>
                <span style={{
                  fontSize: 15, fontWeight: open === i ? 700 : 500,
                  color: open === i ? '#1B91FF' : '#141414',
                  fontFamily: 'var(--font-barlow)',
                  letterSpacing: '-0.2px',
                  transition: 'color 0.2s ease',
                  paddingRight: 20,
                }}>
                  {faq.q}
                </span>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                  background: open === i ? '#1B91FF' : '#f5f5f3',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.2s ease',
                }}>
                  <svg
                    width='12' height='12' viewBox='0 0 12 12' fill='none'
                    style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                  >
                    <path d='M2 4l4 4 4-4' stroke={open === i ? '#fff' : '#666'} strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'/>
                  </svg>
                </div>
              </div>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{
                      color: '#555', fontSize: 14, lineHeight: 1.8,
                      fontFamily: 'var(--font-inter)',
                      margin: 0, padding: '0 24px 24px',
                    }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
