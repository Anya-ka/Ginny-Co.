import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Advisory', href: '#advisory' },
  { label: 'Who We Serve', href: '#who-we-serve' },
  { label: 'Insights', href: '#insights' },
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
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group"
            aria-label="Ginny & Co. Home"
          >
            <div className={`w-10 h-10 rounded-sm flex items-center justify-center font-bold text-lg transition-colors duration-300 ${
              scrolled ? 'bg-[#0F2747] text-[#C7A46C]' : 'bg-[#C7A46C] text-white'
            }`}>
              G
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`font-semibold text-base tracking-wide transition-colors duration-300 ${
                scrolled ? 'text-[#0F2747]' : 'text-white'
              }`}>
                Ginny <span className="text-[#C7A46C]">&amp;</span> Co.
              </span>
              <span className={`text-[10px] font-medium tracking-[0.12em] uppercase transition-colors duration-300 ${
                scrolled ? 'text-gray-400' : 'text-white/60'
              }`}>
                Chartered Accountants
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 relative group ${
                  scrolled ? 'text-[#0F2747] hover:text-[#C7A46C]' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C7A46C] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="ml-2 px-6 py-2.5 bg-[#C7A46C] text-white text-sm font-semibold tracking-wide rounded-sm hover:bg-[#b8912e] transition-all duration-200 hover:-translate-y-px"
            >
              Schedule Consultation
            </a>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-sm transition-colors ${
              scrolled ? 'text-[#0F2747]' : 'text-white'
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
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
            className="fixed top-20 left-0 right-0 z-40 bg-white border-b border-gray-100 shadow-lg lg:hidden"
            aria-hidden={!menuOpen}
          >
            <div className="max-w-[1240px] mx-auto px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="py-3 text-[#0F2747] font-medium text-sm tracking-wide border-b border-gray-50 hover:text-[#C7A46C] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="mt-4 px-6 py-3 bg-[#C7A46C] text-white text-sm font-semibold tracking-wide rounded-sm text-center hover:bg-[#b8912e] transition-colors"
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
