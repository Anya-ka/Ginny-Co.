import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Rocket, Building, Users, UserCircle, ShoppingCart, Heart, Circle, ArrowRight } from 'lucide-react';

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

const clients = [
  {
    icon: Rocket,
    title: 'Startups',
    desc: 'From incorporation to investor readiness, we guide startups through every financial milestone with agile, growth-focused support.',
    tag: 'Early Stage',
  },
  {
    icon: Building,
    title: 'SMEs',
    desc: 'We help small and medium enterprises streamline compliance, manage taxes, and build the financial systems they need to scale.',
    tag: 'Growth Stage',
  },
  {
    icon: Users,
    title: 'Family Businesses',
    desc: 'Trusted advisors for multi-generational businesses navigating succession, restructuring, and sustainable growth.',
    tag: 'Legacy',
  },
  {
    icon: UserCircle,
    title: 'Professionals',
    desc: 'Doctors, lawyers, consultants, and freelancers rely on us for smart tax planning and financial management.',
    tag: 'Individuals',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Businesses',
    desc: 'Specialised GST, TCS, and compliance support for businesses operating across online marketplaces.',
    tag: 'Digital',
  },
  {
    icon: Heart,
    title: 'NGOs & Trusts',
    desc: 'End-to-end financial and compliance management for non-profits, charitable trusts, and Section 8 companies.',
    tag: 'Non-Profit',
  },
];

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="py-24 lg:py-32 bg-[#121B2A] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[600px] bg-[#C8A46A]/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Circle size={9} className="text-[#C8A46A]" strokeWidth={3} />
            <span className="text-[#C8A46A] text-[11px] font-bold tracking-[0.2em] uppercase">Our Clients</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-heading text-5xl lg:text-6xl text-[#F5F1EA] leading-tight">
              Who We Serve
            </h2>
            <p className="text-[#A7B0C0] text-lg max-w-sm leading-relaxed">
              We work with businesses and individuals at every stage of their journey — from first idea to lasting legacy.
            </p>
          </div>
        </AnimatedSection>

        {/* Client cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {clients.map((client, i) => (
            <AnimatedSection key={client.title} delay={0.07 * i}>
              <div className="group relative p-8 bg-[#0B1220] rounded-2xl border border-white/[0.06] hover:border-[#C8A46A]/25 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 cursor-default overflow-hidden h-full flex flex-col">
                {/* Gold sweep animation on hover */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#C8A46A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#C8A46A]/8 border border-[#C8A46A]/15 flex items-center justify-center group-hover:bg-[#C8A46A]/15 group-hover:border-[#C8A46A]/30 transition-all duration-300">
                    <client.icon size={20} className="text-[#C8A46A]" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-[#A7B0C0] uppercase border border-white/[0.08] rounded-full px-3 py-1">
                    {client.tag}
                  </span>
                </div>

                <h3 className="font-heading text-2xl text-[#F5F1EA] mb-3">{client.title}</h3>
                <p className="text-[#A7B0C0] text-sm leading-relaxed flex-1">{client.desc}</p>

                <div className="mt-6 pt-5 border-t border-white/[0.05] flex items-center gap-1.5 text-[#C8A46A]/0 group-hover:text-[#C8A46A]/70 text-xs font-semibold tracking-wide transition-all duration-300">
                  <span>Learn how we help</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
