import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, ChevronDown } from 'lucide-react';

function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98765 43210',
    sub: 'Mon–Sat, 9 AM–7 PM',
    href: 'tel:+919876543210',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@ginnyandco.in',
    sub: 'We reply within 24 hours',
    href: 'mailto:hello@ginnyandco.in',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '12, Finance Park, Sector 18',
    sub: 'Noida, Uttar Pradesh – 201301',
    href: '#map',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon–Fri: 9 AM – 7 PM',
    sub: 'Saturday: 10 AM – 4 PM',
  },
];

const services = [
  'Income Tax Filing',
  'GST Registration & Filing',
  'Statutory / Tax Audit',
  'Company Registration',
  'Business Advisory',
  'Financial Planning',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-32 bg-[#121B2A]">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <span className="inline-flex items-center gap-2 text-[#C8A46A] text-xs font-semibold tracking-[0.18em] uppercase mb-4">
            <span className="w-6 h-px bg-[#C8A46A]" />
            Get In Touch
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl text-[#F5F1EA] leading-tight">
            Contact Us
          </h2>
          <div className="w-12 h-px bg-[#C8A46A] mt-6" />
        </AnimatedSection>

        <div className="grid lg:grid-cols-[380px_1fr] gap-16">
          {/* Left — Contact info */}
          <AnimatedSection delay={0.1} className="space-y-1">
            <p className="text-[#A7B0C0] text-base leading-relaxed mb-10">
              Whether you have a question or are ready to get started, our team is here to help.
            </p>

            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-start gap-4 py-5 border-b border-white/8 last:border-0">
                <div className="w-10 h-10 shrink-0 rounded-sm bg-white/5 flex items-center justify-center">
                  <info.icon size={17} className="text-[#C8A46A]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#A7B0C0] tracking-wider uppercase mb-1">
                    {info.label}
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-[#F5F1EA] font-medium text-sm hover:text-[#C8A46A] transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-[#F5F1EA] font-medium text-sm">{info.value}</div>
                  )}
                  <div className="text-[#A7B0C0] text-xs mt-0.5">{info.sub}</div>
                </div>
              </div>
            ))}
          </AnimatedSection>

          {/* Right — Form */}
          <AnimatedSection delay={0.2}>
            <div className="bg-[#172338] rounded-[var(--radius-2xl)] p-8 lg:p-10 border border-white/7">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full min-h-[300px] text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[#C8A46A]/15 flex items-center justify-center mb-5">
                    <Send size={22} className="text-[#C8A46A]" />
                  </div>
                  <h3 className="font-playfair text-2xl text-[#F5F1EA] mb-2">Message Sent</h3>
                  <p className="text-[#A7B0C0] text-sm max-w-sm">
                    Thank you for reaching out. We'll get back to you within one business day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#A7B0C0] tracking-wider uppercase mb-2" htmlFor="name">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 bg-[#070B14] border border-white/8 rounded-xl text-sm text-[#F5F1EA] placeholder-white/25 focus:outline-none focus:border-[#C8A46A] focus:ring-2 focus:ring-[#C8A46A]/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#A7B0C0] tracking-wider uppercase mb-2" htmlFor="email">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 bg-[#070B14] border border-white/8 rounded-xl text-sm text-[#F5F1EA] placeholder-white/25 focus:outline-none focus:border-[#C8A46A] focus:ring-2 focus:ring-[#C8A46A]/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#A7B0C0] tracking-wider uppercase mb-2" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 bg-[#070B14] border border-white/8 rounded-xl text-sm text-[#F5F1EA] placeholder-white/25 focus:outline-none focus:border-[#C8A46A] focus:ring-2 focus:ring-[#C8A46A]/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#A7B0C0] tracking-wider uppercase mb-2" htmlFor="service">
                        Service Required
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#070B14] border border-white/8 rounded-xl text-sm text-[#F5F1EA] focus:outline-none focus:border-[#C8A46A] focus:ring-2 focus:ring-[#C8A46A]/10 transition-all appearance-none"
                        >
                          <option value="">Select a service</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#A7B0C0] pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#A7B0C0] tracking-wider uppercase mb-2" htmlFor="message">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      className="w-full px-4 py-3 bg-[#070B14] border border-white/8 rounded-xl text-sm text-[#F5F1EA] placeholder-white/25 focus:outline-none focus:border-[#C8A46A] focus:ring-2 focus:ring-[#C8A46A]/10 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#C8A46A] text-[#070B14] text-sm font-bold tracking-wide rounded-xl hover:bg-[#e0b87a] hover:shadow-lg hover:shadow-[#C8A46A]/20 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2.5"
                  >
                    <Send size={15} />
                    Request Consultation
                  </button>

                  <p className="text-[#A7B0C0] text-xs text-center leading-relaxed">
                    By submitting, you agree to our Privacy Policy. We'll reach out within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
