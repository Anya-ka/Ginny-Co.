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
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <span className="inline-flex items-center gap-2 text-[#C7A46C] text-xs font-semibold tracking-[0.18em] uppercase mb-4">
            <span className="w-6 h-px bg-[#C7A46C]" />
            Get In Touch
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl text-[#0F2747] leading-tight">
            Contact Us
          </h2>
          <div className="w-12 h-px bg-[#C7A46C] mt-6" />
        </AnimatedSection>

        <div className="grid lg:grid-cols-[380px_1fr] gap-16">
          {/* Left — Contact info */}
          <AnimatedSection delay={0.1} className="space-y-1">
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              Whether you have a question or are ready to get started, our team is here to help.
            </p>

            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-start gap-4 py-5 border-b border-gray-50 last:border-0">
                <div className="w-10 h-10 shrink-0 rounded-sm bg-[#0F2747]/5 flex items-center justify-center">
                  <info.icon size={17} className="text-[#C7A46C]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-1">
                    {info.label}
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-[#0F2747] font-medium text-sm hover:text-[#C7A46C] transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-[#0F2747] font-medium text-sm">{info.value}</div>
                  )}
                  <div className="text-gray-400 text-xs mt-0.5">{info.sub}</div>
                </div>
              </div>
            ))}
          </AnimatedSection>

          {/* Right — Form */}
          <AnimatedSection delay={0.2}>
            <div className="bg-[#f8f9fb] rounded-sm p-8 lg:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full min-h-[300px] text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[#C7A46C]/15 flex items-center justify-center mb-5">
                    <Send size={22} className="text-[#C7A46C]" />
                  </div>
                  <h3 className="font-playfair text-2xl text-[#0F2747] mb-2">Message Sent</h3>
                  <p className="text-gray-400 text-sm max-w-sm">
                    Thank you for reaching out. We'll get back to you within one business day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 tracking-wider uppercase mb-2" htmlFor="name">
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
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm text-[#0F2747] placeholder-gray-300 focus:outline-none focus:border-[#C7A46C] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 tracking-wider uppercase mb-2" htmlFor="email">
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
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm text-[#0F2747] placeholder-gray-300 focus:outline-none focus:border-[#C7A46C] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 tracking-wider uppercase mb-2" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm text-[#0F2747] placeholder-gray-300 focus:outline-none focus:border-[#C7A46C] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 tracking-wider uppercase mb-2" htmlFor="service">
                        Service Required
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm text-[#0F2747] focus:outline-none focus:border-[#C7A46C] transition-colors appearance-none"
                        >
                          <option value="">Select a service</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 tracking-wider uppercase mb-2" htmlFor="message">
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
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm text-[#0F2747] placeholder-gray-300 focus:outline-none focus:border-[#C7A46C] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#0F2747] text-white text-sm font-semibold tracking-wide rounded-sm hover:bg-[#1a3a6e] transition-colors duration-200 flex items-center justify-center gap-2.5"
                  >
                    <Send size={15} />
                    Request Consultation
                  </button>

                  <p className="text-gray-400 text-xs text-center leading-relaxed">
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
