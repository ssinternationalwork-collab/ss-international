"use client";
import { motion } from "framer-motion";

const industries = [
  {
    name: "Automotive",
    description: "Door seals, glass run channels, body-mounted profiles for OEMs",
    image: "https://images.pexels.com/photos/8478199/pexels-photo-8478199.jpeg?w=800&q=80",
  },
  {
    name: "Roadways",
    description: "Coach sealing for buses, LCVs and heavy vehicles",
    image: "https://images.pexels.com/photos/32666529/pexels-photo-32666529.jpeg?w=800&q=80",
  },
  {
    name: "Architecture",
    description: "Glazing, curtain wall and expansion joint profiles",
    image: "https://images.pexels.com/photos/5230076/pexels-photo-5230076.jpeg?w=800&q=80",
  },
  {
    name: "Railways & Mass Transit",
    description: "EN45545 fire retardant profiles for metros and trains",
    image: "https://images.pexels.com/photos/27826200/pexels-photo-27826200.jpeg?w=800&q=80",
  },
  {
    name: "Shipping",
    description: "Container door seals and marine-grade profiles",
    image: "https://images.pexels.com/photos/9694390/pexels-photo-9694390.jpeg?w=800&q=80",
  },
  {
    name: "Power Distribution",
    description: "Panel sealing for plants, substations and solar",
    image: "https://images.pexels.com/photos/7867328/pexels-photo-7867328.jpeg?w=800&q=80",
  },
  {
    name: "Mining",
    description: "Heavy-duty profiles for high-abrasion environments",
    image: "https://images.pexels.com/photos/3998410/pexels-photo-3998410.jpeg?w=800&q=80",
  },
  {
    name: "Infrastructure",
    description: "Waterproofing and structural sealing for civil projects",
    image: "/infrastructure.jpeg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

export default function IndustriesSection() {
  return (
    <section style={{
      background: "#141414",
      padding: "100px 72px 80px",
      fontFamily: "var(--font-barlow)",
    }}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      >
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center', marginBottom: 16 }}>
            <div style={{ width: 28, height: 1.5, background: '#B8935A' }}/>
            <span style={{ color: '#B8935A', fontSize: 13, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>Industries We Serve</span>
            <div style={{ width: 28, height: 1.5, background: '#B8935A' }}/>
          </div>
          <h2 style={{ color: '#ffffff', fontSize: 'clamp(32px,4.5vw,60px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-2px', textTransform: 'uppercase', margin: 0 }}>
            One Manufacturer.<br/><span style={{ color: 'rgba(255,255,255,0.2)' }}>Eight Industries.</span>
          </h2>
        </div>
      </motion.div>

      {/* 3-column grid */}
      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 12,
        }}
      >
        {industries.map((industry, i) => (
          <div
            key={i}
            style={{
              position: 'relative',
              borderRadius: 16,
              overflow: 'hidden',
              cursor: 'pointer',
              height: 340,
              background: '#1a1a1a',
            }}
            onMouseEnter={e => {
              const img = e.currentTarget.querySelector('img') as HTMLElement;
              const extra = e.currentTarget.querySelector('.card-extra') as HTMLElement;
              const line = e.currentTarget.querySelector('.card-line') as HTMLElement;
              if (img) img.style.transform = 'scale(1.06)';
              if (extra) extra.style.opacity = '1';
              if (extra) extra.style.transform = 'translateY(0)';
              if (line) line.style.width = '48px';
            }}
            onMouseLeave={e => {
              const img = e.currentTarget.querySelector('img') as HTMLElement;
              const extra = e.currentTarget.querySelector('.card-extra') as HTMLElement;
              const line = e.currentTarget.querySelector('.card-line') as HTMLElement;
              if (img) img.style.transform = 'scale(1)';
              if (extra) extra.style.opacity = '0';
              if (extra) extra.style.transform = 'translateY(8px)';
              if (line) line.style.width = '24px';
            }}
          >
            <img
              src={industry.image}
              alt={industry.name}
              style={{
                width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                transition: 'transform 0.5s ease',
                transform: 'scale(1)',
              }}
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)',
              padding: '60px 20px 20px',
            }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: '#fff', letterSpacing: '1.5px', textTransform: 'uppercase', fontFamily: 'var(--font-barlow)', marginBottom: 8 }}>
                {industry.name}
              </div>
              <div className='card-line' style={{ width: 24, height: 2, background: '#1B91FF', marginBottom: 8, transition: 'width 0.3s ease' }}/>
              <div className='card-extra' style={{
                opacity: 0,
                transform: 'translateY(8px)',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
              }}>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-inter)', lineHeight: 1.5, marginBottom: 10 }}>
                  {industry.description}
                </div>
                <a href='#' style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#1B91FF', fontSize: 12, fontWeight: 700, fontFamily: 'var(--font-barlow)', textDecoration: 'none' }}>
                  View Applications
                  <svg width='12' height='12' viewBox='0 0 14 14' fill='none'><path d='M3 7H11M7 3L11 7L7 11' stroke='#1B91FF' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'/></svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

    </section>
  );
}
