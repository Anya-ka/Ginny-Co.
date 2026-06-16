import { Globe, Share2, Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Global Advisory', href: '#advisory' },
  { label: 'Who We Serve', href: '#who-we-serve' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Taxation',
  'GST',
  'Audit',
  'Compliance',
  'Global Advisory',
  'Investor Readiness',
];

const socialLinks = [
  { icon: Globe, href: '#', label: 'LinkedIn' },
  { icon: Share2, href: '#', label: 'Twitter / X' },
  { icon: Globe, href: '#', label: 'Instagram' },
  { icon: Share2, href: '#', label: 'Facebook' },
];

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    window.location.hash = href;
  };

  return (
    <footer className="bg-[#070B14] text-[#F5F1EA]">
      {/* Main footer */}
      <div className="max-w-[1240px] mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.15fr_0.8fr_0.9fr_1fr] gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-11 h-11 bg-[#C8A46A] rounded-xl flex items-center justify-center font-bold text-[#0B1220] text-lg shadow-[0_0_20px_rgba(200,164,106,0.3)]">
                G
              </div>
              <div>
                <div className="font-heading font-bold text-[#F5F1EA] text-base tracking-wide" style={{ letterSpacing: '0.02em' }}>
                  Ginny <span className="text-[#C8A46A]">&amp;</span> Co.
                </div>
                <div className="text-[#A7B0C0]/70 text-[10px] tracking-[0.14em] uppercase">
                  Chartered Accountants
                </div>
              </div>
            </a>
            <p className="text-[#A7B0C0]/75 text-sm leading-relaxed mb-8">
              Chartered accountants and business advisors helping founders, SMEs, professionals, NGOs, and growing companies manage tax, compliance, audit, and advisory decisions with confidence.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-sm bg-white/5 flex items-center justify-center hover:bg-[#C8A46A] transition-colors duration-200 group"
                >
                  <Icon size={15} className="text-[#F5F1EA]/60 group-hover:text-[#F5F1EA] transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#F5F1EA] text-xs font-bold tracking-[0.16em] uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[#A7B0C0]/75 hover:text-[#C8A46A] text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-[#C8A46A]">→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#F5F1EA] text-xs font-bold tracking-[0.16em] uppercase mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, '#services')}
                    className="text-[#A7B0C0]/75 hover:text-[#C8A46A] text-sm transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#F5F1EA] text-xs font-bold tracking-[0.16em] uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919876543210" className="flex items-start gap-3 group">
                  <Phone size={14} className="text-[#C8A46A] mt-0.5 shrink-0" />
                  <span className="text-[#A7B0C0]/75 group-hover:text-[#D7DEE8] text-sm transition-colors">
                    +91 98765 43210
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@ginnyandco.in" className="flex items-start gap-3 group">
                  <Mail size={14} className="text-[#C8A46A] mt-0.5 shrink-0" />
                  <span className="text-[#A7B0C0]/75 group-hover:text-[#D7DEE8] text-sm transition-colors">
                    hello@ginnyandco.in
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#C8A46A] mt-0.5 shrink-0" />
                <span className="text-[#A7B0C0]/75 text-sm leading-relaxed">
                  12, Finance Park, Sector 18<br />
                  Noida, UP – 201301<br />
                  Virtual consultations across India
                </span>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-white/[0.06]">
              <p className="text-[#F5F1EA]/30 text-xs mb-3">Need clarity before you start?</p>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-flex rounded-full bg-[#C8A46A] px-5 py-2.5 text-sm font-bold text-[#070B14] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d9b87a]"
              >
                Request Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A46A]/20 to-transparent mx-6" />

      {/* Bottom bar */}
      <div className="max-w-[1240px] mx-auto px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[#F5F1EA]/30 text-xs">
          <p>© {new Date().getFullYear()} Ginny &amp; Co. Chartered Accountants. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy-policy" className="hover:text-[#F5F1EA]/50 transition-colors">Privacy Policy</a>
            <a href="#terms-of-service" className="hover:text-[#F5F1EA]/50 transition-colors">Terms of Service</a>
            <a href="#disclaimer" className="hover:text-[#F5F1EA]/50 transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
