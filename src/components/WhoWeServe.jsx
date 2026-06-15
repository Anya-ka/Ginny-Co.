import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Rocket, Building, Users, UserCircle, ShoppingCart, Heart } from 'lucide-react';

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

const clients = [
  {
    icon: Rocket,
    title: 'Startups',
    desc: 'From incorporation to investor readiness, we guide startups through every financial milestone with agile, growth-focused support.',
  },
  {
    icon: Building,
    title: 'SMEs',
    desc: 'We help small and medium enterprises streamline compliance, manage taxes, and build the financial systems they need to scale.',
  },
  {
    icon: Users,
    title: 'Family Businesses',
    desc: 'Trusted advisors for multi-generational businesses navigating succession, restructuring, and sustainable growth.',
  },
  {
    icon: UserCircle,
    title: 'Professionals',
    desc: 'Doctors, lawyers, consultants, and freelancers rely on us for smart tax planning and financial management.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Businesses',
    desc: 'Specialised GST, TCS, and compliance support for businesses operating across online marketplaces.',
  },
  {
    icon: Heart,
    title: 'NGOs & Trusts',
    desc: 'End-to-end financial and compliance management for non-profits, charitable trusts, and Section 8 companies.',
  },
];

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="py-32 bg-[#121B2A]">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-20">
          <span className="inline-flex items-center gap-2 text-[#C8A46A] text-xs font-semibold tracking-[0.18em] uppercase mb-4">
            <span className="w-6 h-px bg-[#C8A46A]" />
            Our Clients
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-playfair text-4xl lg:text-5xl text-[#F5F1EA] max-w-md leading-tight">
              Who We Serve
            </h2>
            <p className="text-[#A7B0C0] text-base max-w-sm leading-relaxed">
              We work with businesses and individuals at every stage of their journey.
            </p>
          </div>
          <div className="w-12 h-px bg-[#C8A46A] mt-6" />
        </AnimatedSection>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {clients.map((client, i) => (
            <AnimatedSection key={client.title} delay={0.08 * i}>
              <div className="group relative p-8 bg-[#172338] rounded-[var(--radius-2xl)] hover:border-[#C8A46A]/20 hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden border border-white/7 hover:shadow-[0_4px_24px_rgba(200,164,106,0.05)]">
                {/* Gold top border on hover */}
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C8A46A] to-[#e8c98a] group-hover:w-full transition-all duration-500" />

                <div className="w-12 h-12 rounded-xl bg-white/6 flex items-center justify-center mb-6 group-hover:bg-[#C8A46A]/15 transition-colors duration-300">
                  <client.icon
                    size={22}
                    className="text-[#A7B0C0] group-hover:text-[#C8A46A] transition-colors duration-300"
                  />
                </div>
                <h3 className="text-[#F5F1EA] font-bold text-lg mb-3 transition-colors duration-300">
                  {client.title}
                </h3>
                <p className="text-[#A7B0C0] text-sm leading-relaxed transition-colors duration-300">
                  {client.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
