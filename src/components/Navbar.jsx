import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Calculator, Search, ShieldCheck, Receipt, Building2, Rocket, Users, UserCircle, ShoppingCart, Heart, BarChart3, Handshake } from 'lucide-react';

const dropdowns = {
  Services: [
    { icon: Calculator, label: 'Taxation', desc: 'Income tax, planning & advisory', href: '#services' },
    { icon: Receipt, label: 'GST', desc: 'Registration, filing & compliance', href: '#services' },
    { icon: Search, label: 'Audit', desc: 'Statutory, internal & tax audit', href: '#services' },
    { icon: ShieldCheck, label: 'Compliance', desc: 'Regulatory & corporate filings', href: '#services' },
  ],
  Advisory: [
    { icon: BarChart3, label: 'Business Strategy', desc: 'Growth & profitability planning', href: '#advisory' },
    { icon: Building2, label: 'Financial Advisory', desc: 'Budgeting & cash flow optimisation', href: '#advisory' },
    { icon: Handshake, label: 'Debt & Banking', desc: 'Structuring debt facilities', href: '#advisory' },
  ],
  'Who We Serve': [
    { icon: Rocket, label: 'Startups', desc: 'From incorporation to scale', href: '#who-we-serve' },
    { icon: Building2, label: 'SMEs', desc: 'Compliance & tax for businesses', href: '#who-we-serve' },
    { icon: Users, label: 'Family Businesses', desc: 'Succession & restructuring', href: '#who-we-serve' },
    { icon: UserCircle, label: 'Professionals', desc: 'Doctors, lawyers, freelancers', href: '#who-we-serve' },
    { icon: ShoppingCart, label: 'E-commerce', desc: 'GST, TCS & marketplace compliance', href: '#who-we-serve' },
    { icon: Heart, label: 'NGOs & Trusts', desc: 'Non-profit financial management', href: '#who-we-serve' },
  ],
};

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services', dropdown: true },
  { label: 'Advisory', href: '#advisory', dropdown: true },
  { label: 'Who We Serve', href: '#who-we-serve', dropdown: true },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
];

function MegaMenu({ label, onClose }) {
  const items = dropdowns[label];
  const cols = items.length <= 4 ? 4 : items.length <= 6 ? 3 : 4;

  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 right-0 top-20 z-40 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
    >
      {/* Gold accent bar */}
      <div className="h-[3px] bg-[#C8A46A]" />

      <div className="max-w-[1440px] mx-auto px-12 py-10">
        {/* Header */}
        <a
          href={items[0]?.href || '#'}
          onClick={(e) => {
            e.preventDefault();
            onClose();
            const el = document.querySelector(items[0]?.href || '#');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-3 mb-8 group"
        >
          <span className="text-[#0B1220] text-2xl font-bold tracking-tight">
            {label}
          </span>
          <span className="text-[#0B1220] text-xl group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </a>

        {/* Items grid */}
        <div
          className="grid gap-x-12 gap-y-5"
          style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
        >
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
              className="text-[#0B1220] text-[15px] font-medium hover:text-[#C8A46A] transition-colors duration-200 py-1"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActive] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openDropdown = (label) => { clearTimeout(timeoutRef.current); setActive(label); };
  const closeDropdown = () => { timeoutRef.current = setTimeout(() => setActive(null), 120); };

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-[#0B1220]/96 backdrop-blur-xl shadow-[0_2px_24px_rgba(0,0,0,0.4)] border-b border-white/7'
          : 'bg-[#0B1220]/75 backdrop-blur-md'
          }`}
        role="banner"
      >
        <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group"
            aria-label="Ginny & Co. Home"
          >
            <div className="w-14 h-14 rounded-full overflow-hidden bg-white shadow-lg flex items-center justify-center">
              <img
                src="https://www.practive.in/wp-content/uploads/2023/11/ca-new-logo.jpg"
                alt="CA Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-2xl tracking-wide text-[#F4F1EA] transition-colors duration-300" style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: '0.02em' }}>
                Ginny & Co.
              </span>
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#AEB7C7]/70 transition-colors duration-300">
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
                    className={`flex items-center gap-2 text-[17px] font-semibold tracking-wide transition-colors duration-200 relative group ${scrolled ? 'text-[#F4F1EA]/90 hover:text-[#C8A46A]' : 'text-[#F4F1EA]/80 hover:text-[#C8A46A]'
                      }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={13}
                      className={`opacity-60 transition-transform duration-200 mt-px ${activeDropdown === link.label ? 'rotate-180 opacity-100' : ''}`}
                    />
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C8A46A] transition-all duration-300 group-hover:w-full" />
                  </button>

                  {/* Hover bridge to mega menu */}
                  {activeDropdown === link.label && (
                    <div className="absolute top-full left-0 w-full h-8" />
                  )}

                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <MegaMenu
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
                  className={`text-[17px] font-semibold tracking-wide transition-colors duration-200 relative group ${scrolled ? 'text-[#F4F1EA]/90 hover:text-[#C8A46A]' : 'text-[#F4F1EA]/80 hover:text-[#C8A46A]'
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
              className="ml-1 px-6 py-3 bg-[#C8A46A] text-[#0B1220] text-[16px] font-bold tracking-wide rounded-full hover:bg-[#d9b87a] hover:shadow-lg hover:shadow-[#C8A46A]/25 transition-all duration-200 hover:-translate-y-px"
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
            <div className="max-w-[1440px] mx-auto px-6 py-5 flex flex-col gap-1">
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
