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
    <section id="who-we-serve" className="py-28 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-20">
          <span className="inline-flex items-center gap-2 text-[#C7A46C] text-xs font-semibold tracking-[0.18em] uppercase mb-4">
            <span className="w-6 h-px bg-[#C7A46C]" />
            Our Clients
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-playfair text-4xl lg:text-5xl text-[#0F2747] max-w-md leading-tight">
              Who We Serve
            </h2>
            <p className="text-gray-400 text-base max-w-sm leading-relaxed">
              We work with businesses and individuals at every stage of their journey.
            </p>
          </div>
          <div className="w-12 h-px bg-[#C7A46C] mt-6" />
        </AnimatedSection>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, i) => (
            <AnimatedSection key={client.title} delay={0.08 * i}>
              <div className="group relative p-8 bg-[#f8f9fb] rounded-sm hover:bg-[#0F2747] transition-all duration-400 cursor-default overflow-hidden">
                {/* Gold corner accent on hover */}
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-[#C7A46C] group-hover:w-full transition-all duration-500" />

                <div className="w-12 h-12 rounded-sm bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#C7A46C]/10 transition-colors duration-300">
                  <client.icon
                    size={22}
                    className="text-[#0F2747] group-hover:text-[#C7A46C] transition-colors duration-300"
                  />
                </div>
                <h3 className="text-[#0F2747] group-hover:text-white font-bold text-lg mb-3 transition-colors duration-300">
                  {client.title}
                </h3>
                <p className="text-gray-400 group-hover:text-white/50 text-sm leading-relaxed transition-colors duration-300">
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
