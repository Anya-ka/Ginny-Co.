import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FileText, Calculator, ShieldCheck, ClipboardList,
  Receipt, Building2, Search, BarChart3, Scale, FileCog, FileCheck, Landmark,
} from 'lucide-react';

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

const serviceCategories = [
  {
    id: 'taxation',
    label: 'Taxation',
    icon: Calculator,
    description: 'End-to-end tax solutions for businesses and individuals.',
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
      <div className="group p-6 bg-[#0B1220] border border-white/7 rounded-2xl hover:border-[#C8A46A]/20 hover:shadow-[0_6px_32px_rgba(200,164,106,0.06)] hover:-translate-y-1 transition-all duration-300 cursor-default">
        <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-[#C8A46A]/10 transition-colors duration-300">
          <Icon size={19} className="text-[#AEB7C7] group-hover:text-[#C8A46A] transition-colors duration-300" />
        </div>
        <h4 className="text-[#F4F1EA] font-semibold text-base mb-2">{name}</h4>
        <p className="text-[#AEB7C7] text-sm leading-relaxed">{desc}</p>
      </div>
    </AnimatedSection>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#121B2A] relative overflow-hidden">
      {/* Ambient glow left */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#4a3a6e]/8 blur-[120px] pointer-events-none" />
      <div className="max-w-[1240px] mx-auto px-6 relative">
        {/* Header */}
        <AnimatedSection className="mb-20">
          <span className="inline-flex items-center gap-2 text-[#C8A46A] text-xs font-semibold tracking-[0.18em] uppercase mb-4">
            <span className="w-6 h-px bg-[#C8A46A]" />
            What We Do
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-playfair text-4xl lg:text-5xl text-[#F5F1EA] max-w-lg leading-tight">
              Advisory Solutions
            </h2>
            <p className="text-[#A7B0C0] text-base max-w-sm leading-relaxed">
              Comprehensive financial and compliance services built for modern businesses.
            </p>
          </div>
          <div className="w-12 h-px bg-[#C8A46A] mt-6" />
        </AnimatedSection>

        {/* Service categories */}
        <div className="space-y-16">
          {serviceCategories.map((category) => (
            <div key={category.id}>
              {/* Category header */}
              <AnimatedSection delay={0.05}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-11 h-11 rounded-xl bg-[#C8A46A]/10 border border-[#C8A46A]/20 flex items-center justify-center">
                    <category.icon size={18} className="text-[#C8A46A]" />
                  </div>
                  <div>
                    <h3 className="text-[#F5F1EA] font-bold text-lg tracking-wide">{category.label}</h3>
                    <p className="text-[#A7B0C0] text-sm">{category.description}</p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Service cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.services.map((service, si) => (
                  <ServiceCard
                    key={service.name}
                    {...service}
                    delay={0.08 * si}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
