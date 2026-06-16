import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FileText, Calculator, ShieldCheck, ClipboardList,
  Receipt, Building2, Search, BarChart3, Scale, FileCog, FileCheck, Landmark, Circle, ArrowRight,
} from 'lucide-react';

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

const serviceCategories = [
  {
    id: 'taxation',
    label: 'Taxation',
    icon: Calculator,
    description: 'End-to-end tax solutions for businesses and individuals.',
    color: 'from-[#C8A46A]/20 to-[#C8A46A]/5',
    services: [
      { icon: FileText, name: 'Income Tax', desc: 'Filing, assessment, and planning for individuals & corporates.' },
      { icon: BarChart3, name: 'Tax Planning', desc: 'Strategic tax structuring to optimise your tax burden legally.' },
      { icon: Scale, name: 'Tax Advisory', desc: 'Expert guidance on tax implications for transactions and decisions.' },
    ],
  },
  {
    id: 'gst',
    label: 'GST',
    icon: Receipt,
    description: 'Complete GST lifecycle management from registration to compliance.',
    color: 'from-[#5B8FCC]/20 to-[#5B8FCC]/5',
    services: [
      { icon: ClipboardList, name: 'GST Registration', desc: 'Seamless registration across all categories and business types.' },
      { icon: FileCog, name: 'GST Filing', desc: 'Timely and accurate filing of GSTR-1, GSTR-3B, and annual returns.' },
      { icon: ShieldCheck, name: 'GST Compliance', desc: 'Ongoing advisory to maintain error-free GST compliance.' },
    ],
  },
  {
    id: 'audit',
    label: 'Audit',
    icon: Search,
    description: 'Independent and thorough audit services for credibility and control.',
    color: 'from-[#7E69AB]/20 to-[#7E69AB]/5',
    services: [
      { icon: Building2, name: 'Statutory Audit', desc: 'Mandatory audits conducted with rigour under the Companies Act.' },
      { icon: FileCheck, name: 'Internal Audit', desc: 'Process audits to strengthen internal controls and risk management.' },
      { icon: Landmark, name: 'Tax Audit', desc: 'Section 44AB tax audits completed accurately and on time.' },
    ],
  },
  {
    id: 'compliance',
    label: 'Compliance',
    icon: ShieldCheck,
    description: 'Stay ahead of regulatory requirements with our compliance support.',
    color: 'from-[#4A8C6E]/20 to-[#4A8C6E]/5',
    services: [
      { icon: Scale, name: 'Regulatory Compliance', desc: 'FEMA, RBI, and sector-specific regulatory compliance support.' },
      { icon: Building2, name: 'Corporate Filings', desc: 'ROC filings, annual returns, and MCA compliance management.' },
      { icon: FileText, name: 'Business Compliance', desc: 'Comprehensive compliance calendar management for your business.' },
    ],
  },
];

function ServiceCard({ icon: Icon, name, desc, delay }) {
  return (
    <AnimatedSection delay={delay}>
      <div className="group relative p-6 bg-[#0B1220] border border-white/[0.06] rounded-2xl hover:border-[#C8A46A]/30 hover:shadow-[0_8px_40px_rgba(200,164,106,0.08)] hover:-translate-y-1.5 transition-all duration-300 cursor-default overflow-hidden">
        {/* Subtle corner glow on hover */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-[#C8A46A]/0 group-hover:bg-[#C8A46A]/5 rounded-full blur-2xl transition-all duration-500 -translate-y-1/2 translate-x-1/2" />
        <div className="w-11 h-11 rounded-xl bg-[#C8A46A]/8 border border-[#C8A46A]/15 flex items-center justify-center mb-5 group-hover:bg-[#C8A46A]/15 group-hover:border-[#C8A46A]/30 transition-all duration-300">
          <Icon size={18} className="text-[#C8A46A]" />
        </div>
        <h4 className="text-[#F5F1EA] font-semibold text-base mb-2">{name}</h4>
        <p className="text-[#A7B0C0] text-sm leading-relaxed">{desc}</p>
        <div className="mt-4 flex items-center gap-1 text-[#C8A46A]/0 group-hover:text-[#C8A46A]/80 text-xs font-semibold tracking-wide transition-all duration-300">
          <span>Learn more</span>
          <ArrowRight size={12} />
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#121B2A] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#C8A46A]/4 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#4a3a6e]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative">

        {/* Section header */}
        <AnimatedSection className="mb-20">
          {/* Eyebrow — matching the About Us element the user referenced */}
          <div className="flex items-center gap-3 mb-6">
            <Circle size={9} className="text-[#C8A46A]" strokeWidth={3} />
            <span className="text-[#C8A46A] text-[11px] font-bold tracking-[0.2em] uppercase">What We Do</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="font-heading text-5xl lg:text-6xl text-[#F5F1EA] leading-tight mb-4">
                Our Services
              </h2>
              <p className="text-[#A7B0C0] text-lg max-w-xl leading-relaxed">
                Comprehensive financial and compliance services, built for modern businesses at every stage of growth.
              </p>
            </div>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 border border-[#C8A46A]/40 text-[#C8A46A] font-semibold rounded-full hover:bg-[#C8A46A] hover:text-[#0B1220] transition-all duration-300 text-sm"
            >
              Get a Consultation
              <ArrowRight size={15} />
            </a>
          </div>
        </AnimatedSection>

        {/* Service categories */}
        <div className="space-y-20">
          {serviceCategories.map((category, ci) => (
            <AnimatedSection key={category.id} delay={0.05}>
              <div className={`relative rounded-3xl overflow-hidden border border-white/[0.05] bg-gradient-to-br ${category.color} p-8 lg:p-10`}>
                {/* Category label strip */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#121B2A]/80 border border-white/[0.08] flex items-center justify-center">
                      <category.icon size={20} className="text-[#C8A46A]" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl text-[#F5F1EA]">{category.label}</h3>
                      <p className="text-[#A7B0C0] text-sm">{category.description}</p>
                    </div>
                  </div>
                  <span className="shrink-0 text-[10px] font-bold tracking-widest text-[#C8A46A] uppercase border border-[#C8A46A]/25 rounded-full px-4 py-1.5">
                    {category.services.length} Services
                  </span>
                </div>

                {/* Service cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.services.map((service, si) => (
                    <ServiceCard
                      key={service.name}
                      {...service}
                      delay={0.06 * si}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
