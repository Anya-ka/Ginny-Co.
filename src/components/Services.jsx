import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calculator, ShieldCheck, Receipt, Search, Circle, ArrowRight } from 'lucide-react';

function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ServiceCard({ icon: Icon, name, desc, image, highlight, delay }) {
  return (
    <AnimatedSection delay={delay}>
      <div className="group relative overflow-hidden rounded-[34px] border border-white/20 bg-[#0B1220]/95 shadow-[0_28px_70px_rgba(0,0,0,0.6),0_0_60px_rgba(200,164,106,0.1)] transition-all duration-500 hover:-translate-y-3 hover:scale-[1.01] hover:border-white/40 hover:shadow-[0_30px_100px_rgba(0,0,0,0.8),0_0_80px_rgba(200,164,106,0.2)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C8A46A]/10 via-transparent to-[#0B1220]/20 blur-[40px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
        <div className="relative h-64 overflow-hidden rounded-t-[34px] border-b border-white/10">
          <img
            src={image}
            alt={name}
            className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-700 ease-out brightness-110 group-hover:scale-105 group-hover:brightness-130"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/50 via-[#0B1220]/15 to-transparent" />
          <div className="absolute inset-x-6 top-6 h-1 rounded-full bg-white/20 opacity-60" />
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
            <div className="rounded-2xl bg-[#0B1220]/60 border border-[#C8A46A]/40 px-3 py-2 backdrop-blur-sm shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
              <Icon size={18} className="text-[#C8A46A]" />
            </div>
            <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#F5F1EA] shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
              {highlight}
            </span>
          </div>
        </div>
        <div className="p-6 border border-white/10 rounded-b-[34px] bg-[#0B1220]/80">
          <h4 className="font-heading text-2xl text-[#F5F1EA] mb-4 tracking-tight">{name}</h4>
          <p className="text-[#BFDBFE] text-sm leading-relaxed mb-5">{desc}</p>
          <ul className="space-y-3">
            {serviceHighlights[name]?.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#BFDBFE] text-sm leading-relaxed">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#C8A46A] shadow-[0_0_10px_rgba(200,164,106,0.6)] flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
}

const serviceHighlights = {
  Taxation: ['Income Tax filing & advisory', 'Tax planning for growth', 'Corporate & individual support'],
  GST: ['Registration & onboarding', 'GSTR filing accuracy', 'Compliance monitoring'],
  Audit: ['Statutory audit assurance', 'Internal control reviews', 'Tax audit readiness'],
  Compliance: ['Regulatory filings', 'ROC and MCA support', 'Ongoing compliance calendar'],
};

const serviceCategories = [
  {
    id: 'taxation',
    label: 'Taxation',
    icon: Calculator,
    description: 'End-to-end tax solutions for businesses and individuals.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80',
    highlight: 'Tax Strategy',
  },
  {
    id: 'gst',
    label: 'GST',
    icon: Receipt,
    description: 'Complete GST lifecycle management from registration to compliance.',
    image: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?w=1200&q=80',
    highlight: 'Compliance First',
  },
  {
    id: 'audit',
    label: 'Audit',
    icon: Search,
    description: 'Independent and thorough audit services for credibility and control.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80',
    highlight: 'Trusted Assurance',
  },
  {
    id: 'compliance',
    label: 'Compliance',
    icon: ShieldCheck,
    description: 'Stay ahead of regulatory requirements with our compliance support.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80',
    highlight: 'Risk Management',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#FFFFFF] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[520px] h-[520px] rounded-full bg-[#C8A46A]/6 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-[#4a3a6e]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative">
        <AnimatedSection className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <Circle size={9} className="text-[#C8A46A]" strokeWidth={3} />
            <span className="text-[#C8A46A] text-[11px] font-bold tracking-[0.2em] uppercase">What We Do</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-[68px] text-[#111827] leading-tight mb-4">
                Our Services
              </h2>
              <p className="text-[#475569] text-lg max-w-xl leading-relaxed">
                Comprehensive financial and compliance services, built for modern businesses at every stage of growth.
              </p>
            </div>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="shrink-0 inline-flex items-center gap-2 px-8 py-3.5 bg-[#C8A46A] text-[#111827] font-bold rounded-full hover:bg-[#d9b87a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(200,164,106,0.25)] text-sm"
            >
              Get a Consultation
              <ArrowRight size={15} />
            </a>
          </div>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr]">
          <div className="grid gap-8">
            <ServiceCard
              key={serviceCategories[2].id}
              icon={serviceCategories[2].icon}
              name={serviceCategories[2].label}
              desc={serviceCategories[2].description}
              image={serviceCategories[2].image}
              highlight={serviceCategories[2].highlight}
              delay={0.08 * 2}
            />
            <ServiceCard
              key={serviceCategories[0].id}
              icon={serviceCategories[0].icon}
              name={serviceCategories[0].label}
              desc={serviceCategories[0].description}
              image={serviceCategories[0].image}
              highlight={serviceCategories[0].highlight}
              delay={0.08 * 0}
            />
          </div>

          <div className="grid gap-8">
            <ServiceCard
              key={serviceCategories[1].id}
              icon={serviceCategories[1].icon}
              name={serviceCategories[1].label}
              desc={serviceCategories[1].description}
              image={serviceCategories[1].image}
              highlight={serviceCategories[1].highlight}
              delay={0.08 * 1}
            />
            <ServiceCard
              key={serviceCategories[3].id}
              icon={serviceCategories[3].icon}
              name={serviceCategories[3].label}
              desc={serviceCategories[3].description}
              image={serviceCategories[3].image}
              highlight={serviceCategories[3].highlight}
              delay={0.08 * 3}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
