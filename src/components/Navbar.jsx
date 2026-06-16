import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Advisory', href: '#advisory' },
  { label: 'Who We Serve', href: '#who-we-serve' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    window.location.hash = href;
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed z-50 transition-all duration-500 left-0 right-0 mx-auto w-[92%] max-w-[1240px] ${scrolled
          ? 'top-4 bg-[#121B2A]/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/[0.08] rounded-2xl'
          : 'top-6 bg-[#121B2A]/80 backdrop-blur-md border border-white/[0.04] rounded-2xl'
          }`}
        role="banner"
      >
        <div className="px-6 lg:px-8 flex items-center justify-between h-[72px] relative">

          {/* Logo - Left */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group relative z-10"
            aria-label="Ginny & Co. Home"
          >
            <div className="w-12 h-12 rounded-full bg-[#C8A46A] text-[#0B1220] flex items-center justify-center font-bold text-xl shadow-[0_0_20px_rgba(200,164,106,0.25)] transition-all duration-300 group-hover:scale-105">
              G
            </div>
            <div className="flex flex-col leading-tight justify-center">
              <span className="font-bold text-2xl tracking-wide text-[#F5F1EA] transition-colors duration-300" style={{ letterSpacing: '0.02em' }}>
                Ginny & Co.
              </span>
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#A7B0C0]/70 transition-colors duration-300">
                Chartered Accountants
              </span>
            </div>
          </a>

          {/* Desktop Nav - Center (Absolute perfectly centered) */}
          <nav className="hidden lg:flex items-center gap-9 absolute left-1/2 -translate-x-1/2" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[17px] font-semibold tracking-wide transition-colors duration-200 relative group ${scrolled ? 'text-[#F5F1EA]/90 hover:text-[#C8A46A]' : 'text-[#F5F1EA]/80 hover:text-[#C8A46A]'}`}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C8A46A] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Hamburger - Right */}
          <div className="flex items-center gap-4 relative z-10">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden lg:inline-flex px-6 py-3 bg-[#C8A46A] text-[#0B1220] text-[16px] font-bold tracking-wide rounded-full hover:bg-[#d9b87a] hover:shadow-lg hover:shadow-[#C8A46A]/25 transition-all duration-200 hover:-translate-y-px"
            >
              Schedule Consultation
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors text-[#F5F1EA]"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 z-40 bg-[#121B2A] border-b border-white/[0.06] shadow-xl lg:hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="max-w-[1440px] mx-auto px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-3.5 text-[#F5F1EA] font-semibold text-base border-b border-white/[0.06] hover:text-[#C8A46A] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="mt-4 px-6 py-3 bg-[#C8A46A] text-[#0B1220] text-sm font-bold rounded-full text-center hover:bg-[#d9b87a] transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
