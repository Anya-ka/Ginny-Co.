import { Globe, Share2, Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Global Advisory', href: '#advisory' },
  { label: 'Who We Serve', href: '#who-we-serve' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Taxation & Tax Planning',
  'GST Registration & Filing',
  'Statutory Audit',
  'Company Registration',
  'Business Advisory',
  'Financial Planning',
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
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071628] text-white">
      {/* Main footer */}
      <div className="max-w-[1240px] mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-10 bg-[#C7A46C] rounded-sm flex items-center justify-center font-bold text-white text-lg">
                G
              </div>
              <div>
                <div className="font-semibold text-white text-sm tracking-wide">
                  Ginny <span className="text-[#C7A46C]">&amp;</span> Co.
                </div>
                <div className="text-white/30 text-[10px] tracking-[0.12em] uppercase">
                  Chartered Accountants
                </div>
              </div>
            </a>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Trusted chartered accountants and business advisors helping businesses 
              navigate taxation, compliance, and growth across India.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-sm bg-white/5 flex items-center justify-center hover:bg-[#C7A46C] transition-colors duration-200"
                >
                  <Icon size={15} className="text-white/60 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-[0.16em] uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/40 hover:text-[#C7A46C] text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-[#C7A46C]">→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-[0.16em] uppercase mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, '#services')}
                    className="text-white/40 hover:text-[#C7A46C] text-sm transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-[0.16em] uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919876543210" className="flex items-start gap-3 group">
                  <Phone size={14} className="text-[#C7A46C] mt-0.5 shrink-0" />
                  <span className="text-white/40 group-hover:text-white/70 text-sm transition-colors">
                    +91 98765 43210
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@ginnyandco.in" className="flex items-start gap-3 group">
                  <Mail size={14} className="text-[#C7A46C] mt-0.5 shrink-0" />
                  <span className="text-white/40 group-hover:text-white/70 text-sm transition-colors">
                    hello@ginnyandco.in
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#C7A46C] mt-0.5 shrink-0" />
                <span className="text-white/40 text-sm leading-relaxed">
                  12, Finance Park, Sector 18<br />
                  Noida, UP – 201301
                </span>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-white/25 text-xs mb-3">ICAI Membership No.</p>
              <p className="text-white/50 text-sm font-mono">123456</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C7A46C]/20 to-transparent mx-6" />

      {/* Bottom bar */}
      <div className="max-w-[1240px] mx-auto px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/25 text-xs">
          <p>© {new Date().getFullYear()} Ginny &amp; Co. Chartered Accountants. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/50 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/50 transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
