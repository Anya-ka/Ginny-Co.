import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Calculator, Search, ShieldCheck, Receipt, Building2, Rocket, Users, UserCircle, ShoppingCart, Heart, BarChart3, Handshake } from 'lucide-react';

const dropdowns = {
  Services: [
    { icon: Calculator,  label: 'Taxation',         desc: 'Income tax, planning & advisory',    href: '#services' },
    { icon: Receipt,     label: 'GST',               desc: 'Registration, filing & compliance',  href: '#services' },
    { icon: Search,      label: 'Audit',             desc: 'Statutory, internal & tax audit',    href: '#services' },
    { icon: ShieldCheck, label: 'Compliance',        desc: 'Regulatory & corporate filings',     href: '#services' },
  ],
  Advisory: [
    { icon: BarChart3,   label: 'Business Strategy', desc: 'Growth & profitability planning',    href: '#advisory' },
    { icon: Building2,   label: 'Financial Advisory',desc: 'Budgeting & cash flow optimisation', href: '#advisory' },
    { icon: Handshake,   label: 'Debt & Banking',    desc: 'Structuring debt facilities',        href: '#advisory' },
  ],
  'Who We Serve': [
    { icon: Rocket,       label: 'Startups',          desc: 'From incorporation to scale',        href: '#who-we-serve' },
    { icon: Building2,    label: 'SMEs',              desc: 'Compliance & tax for businesses',    href: '#who-we-serve' },
    { icon: Users,        label: 'Family Businesses', desc: 'Succession & restructuring',         href: '#who-we-serve' },
    { icon: UserCircle,   label: 'Professionals',     desc: 'Doctors, lawyers, freelancers',      href: '#who-we-serve' },
    { icon: ShoppingCart, label: 'E-commerce',        desc: 'GST, TCS & marketplace compliance',  href: '#who-we-serve' },
    { icon: Heart,        label: 'NGOs & Trusts',     desc: 'Non-profit financial management',    href: '#who-we-serve' },
  ],
};

const navLinks = [
  { label: 'About',          href: '#about' },
  { label: 'Services',       href: '#services',     dropdown: true },
  { label: 'Advisory',       href: '#advisory',     dropdown: true },
  { label: 'Who We Serve',   href: '#who-we-serve', dropdown: true },
  { label: 'Insights',       href: '#insights' },
  { label: 'Contact',        href: '#contact' },
];

function DropdownMenu({ label, onClose }) {
  const items = dropdowns[label];

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 z-50"
    >
      {/* Arrow pointer */}
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#121B2A] rotate-45 border-l border-t border-white/7 z-10" />

      <div className="relative bg-[#121B2A] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] border border-white/7 overflow-hidden">
        {/* Gold top bar */}
        <div className="h-[3px] bg-gradient-to-r from-[#C8A46A]/40 via-[#C8A46A] to-[#C8A46A]/40" />

        <div className="py-3 px-2 min-w-[220px]">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                onClose();
                const el = document.querySelector(item.href);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/[0.04] group transition-colors duration-150"
            >
              <div>
                <div className="text-[#F4F1EA] text-sm font-semibold group-hover:text-[#C8A46A] transition-colors">
                  {item.label}
                </div>
                <div className="text-[#AEB7C7] text-xs mt-0.5">{item.desc}</div>
              </div>
              <span className="opacity-0 group-hover:opacity-100 text-[#C8A46A] transition-opacity text-base leading-none ml-4">→</span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [activeDropdown, setActive] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(null);
  const timeoutRef                  = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openDropdown  = (label) => { clearTimeout(timeoutRef.current); setActive(label); };
  const closeDropdown = ()      => { timeoutRef.current = setTimeout(() => setActive(null), 120); };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    setActive(null);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0B1220]/96 backdrop-blur-xl shadow-[0_2px_24px_rgba(0,0,0,0.4)] border-b border-white/7'
            : 'bg-[#0B1220]/75 backdrop-blur-md'
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
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-lg bg-[#C8A46A] text-[#0B1220] shadow-[0_0_20px_rgba(200,164,106,0.35)] transition-all duration-300 group-hover:shadow-[0_0_28px_rgba(200,164,106,0.5)]`}>
              G
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg tracking-wide text-[#F4F1EA] transition-colors duration-300" style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: '0.02em' }}>
                Ginny <span className="text-[#C8A46A]">&amp;</span> Co.
              </span>
              <span className="text-[10px] font-medium tracking-[0.14em] uppercase text-[#AEB7C7]/55 transition-colors duration-300">
                Chartered Accountants
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-9" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => openDropdown(link.label)}
                  onMouseLeave={closeDropdown}
                >
                  <button
                    className={`flex items-center gap-2 text-[15px] font-medium tracking-wide transition-colors duration-200 relative group ${
                      scrolled ? 'text-[#F4F1EA]/85 hover:text-[#C8A46A]' : 'text-[#F4F1EA]/75 hover:text-[#C8A46A]'
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={13}
                      className={`opacity-60 transition-transform duration-200 mt-px ${activeDropdown === link.label ? 'rotate-180 opacity-100' : ''}`}
                    />
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C8A46A] transition-all duration-300 group-hover:w-full" />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <DropdownMenu
                        label={link.label}
                        onClose={() => setActive(null)}
                      />
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-[15px] font-medium tracking-wide transition-colors duration-200 relative group ${
                    scrolled ? 'text-[#F4F1EA]/85 hover:text-[#C8A46A]' : 'text-[#F4F1EA]/75 hover:text-[#C8A46A]'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C8A46A] transition-all duration-300 group-hover:w-full" />
                </a>
              )
            )}

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="ml-1 px-5 py-2.5 bg-[#C8A46A] text-[#0B1220] text-[15px] font-bold tracking-wide rounded-full hover:bg-[#d9b87a] hover:shadow-lg hover:shadow-[#C8A46A]/25 transition-all duration-200 hover:-translate-y-px"
            >
              Schedule Consultation
            </a>
          </nav>

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
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 z-40 bg-[#121B2A] border-b border-white/7 shadow-xl lg:hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="max-w-[1240px] mx-auto px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setMobileOpen(mobileOpen === link.label ? null : link.label)}
                        className="w-full flex items-center justify-between py-3.5 text-[#F4F1EA] font-semibold text-base border-b border-white/7"
                      >
                        {link.label}
                        <ChevronDown
                          size={16}
                          className={`text-[#A7B0C0] transition-transform duration-200 ${mobileOpen === link.label ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileOpen === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22 }}
                            className="overflow-hidden"
                          >
                            <div className="py-2 pl-3 flex flex-col gap-1">
                              {dropdowns[link.label].map((item) => (
                                <a
                                  key={item.label}
                                  href={item.href}
                                  onClick={(e) => handleNavClick(e, item.href)}
                                  className="flex items-center gap-3 py-2.5 text-[#A7B0C0] hover:text-[#C8A46A] transition-colors"
                                >
                                  <item.icon size={14} className="text-[#C8A46A] shrink-0" />
                                  <span className="text-sm font-medium">{item.label}</span>
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block py-3.5 text-[#F4F1EA] font-semibold text-base border-b border-white/7 hover:text-[#C8A46A] transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </div>
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
