"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 10) {
        setVisible(true);
      } else if (currentY > lastY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastY(currentY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastY]);

  return (
    <motion.nav
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      initial={{ y: -80, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 72px',
        minHeight: 120,
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        background: scrolled ? 'rgba(255,255,255,0.97)' : '#ffffff',
        borderBottom: scrolled ? '1px solid #e8e8e8' : '1px solid #f0f0f0',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'background 0.3s ease, border-color 0.3s ease',
        fontFamily: 'var(--font-barlow)',
      }}
    >

      {/* LEFT — Logo */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href='/' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src='/logo_ssi_full.png' alt='SS International' style={{ height: 92, width: 'auto' }}/>
        </a>
      </div>

      {/* CENTER — Links */}
      <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
        {[
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '/industries' },
          { label: 'Technologies', href: '/technologies' },
          { label: 'Products', href: '/products' },
          { label: 'About', href: '/about' },
        ].map(l => (
          <a key={l.label} href={l.href} style={{
            color: "#555", fontSize: 13.5, fontWeight: 600,
            letterSpacing: "0.3px", cursor: "pointer",
            textDecoration: "none",
            transition: "color 0.2s",
            padding: "4px 0",
            borderBottom: "1.5px solid transparent",
            whiteSpace: "nowrap",
          }}
            onMouseEnter={e => {
              e.currentTarget.style.color = "#141414";
              e.currentTarget.style.borderBottomColor = "#1B91FF";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = "#555";
              e.currentTarget.style.borderBottomColor = "transparent";
            }}
          >{l.label}</a>
        ))}
      </div>

      {/* RIGHT — CTA */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <a href='/contact' style={{
          background: '#1B91FF', color: '#fff',
          padding: '10px 24px', borderRadius: 50,
          fontSize: 13, fontWeight: 700,
          fontFamily: 'var(--font-barlow)',
          textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: 8,
          letterSpacing: '0.3px',
        }}>
          Contact Us
          <svg width='14' height='14' viewBox='0 0 14 14' fill='none'><path d='M3 7H11M7 3L11 7L7 11' stroke='#fff' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'/></svg>
        </a>
      </div>

    </motion.nav>
  );
}
