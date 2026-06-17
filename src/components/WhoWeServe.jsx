import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Rocket, Building, Users, UserCircle, ShoppingCart, Heart, Circle, ArrowRight, ChevronRight } from 'lucide-react';

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
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=80',
    stats: ['Seed to Series A', 'Cap Table Management', 'Investor Relations'],
  },
  {
    icon: Building,
    title: 'SMEs',
    desc: 'We help small and medium enterprises streamline compliance, manage taxes, and build the financial systems they need to scale.',
    tag: 'Growth Stage',
    image: 'https://img.magnific.com/free-photo/medium-shot-people-working-together_23-2150628001.jpg?semt=ais_hybrid&w=740&q=80',
    stats: ['Tax Optimization', 'Compliance Automation', 'Financial Systems'],
  },
  {
    icon: Users,
    title: 'Family Businesses',
    desc: 'Trusted advisors for multi-generational businesses navigating succession, restructuring, and sustainable growth.',
    tag: 'Legacy',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&q=80',
    stats: ['Succession Planning', 'Wealth Preservation', 'Governance'],
  },
  {
    icon: UserCircle,
    title: 'Professionals',
    desc: 'Doctors, lawyers, consultants, and freelancers rely on us for smart tax planning and financial management.',
    tag: 'Individuals',
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=900&q=80',
    stats: ['Tax Planning', 'Wealth Management', 'Compliance'],
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Businesses',
    desc: 'Specialised GST, TCS, and compliance support for businesses operating across online marketplaces.',
    tag: 'Digital',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80',
    stats: ['GST Compliance', 'TCS Management', 'Multi-platform'],
  },
  {
    icon: Heart,
    title: 'NGOs & Trusts',
    desc: 'End-to-end financial and compliance management for non-profits, charitable trusts, and Section 8 companies.',
    tag: 'Non-Profit',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=900&q=80',
    stats: ['FCRA Compliance', 'Audit Support', 'Fund Accounting'],
  },
];

export default function WhoWeServe() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeClient = clients[activeIndex];

  return (
    <section id="who-we-serve" className="py-24 lg:py-32 bg-[#FFFFFF] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[520px] h-[520px] rounded-full bg-[#C8A46A]/6 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-[#4a3a6e]/8 blur-[140px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative">
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Circle size={9} className="text-[#C8A46A]" strokeWidth={3} />
            <span className="text-[#C8A46A] text-[11px] font-bold tracking-[0.2em] uppercase">Our Clients</span>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="font-heading text-5xl md:text-6xl lg:text-[68px] text-[#111827] leading-tight mb-6">
                Who We Serve
              </h2>
              <p className="text-[#475569] text-lg leading-relaxed">
                We work with businesses and individuals at every stage of their journey — from first idea to lasting legacy.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] items-start">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-[40px] bg-[#0B1220] shadow-[0_40px_100px_rgba(0,0,0,0.15)]">
              <div className="relative h-[420px] lg:h-[500px] overflow-hidden">
                <img
                  src={activeClient.image}
                  alt={activeClient.title}
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C8A46A]/30 bg-[#C8A46A]/15 backdrop-blur-sm">
                      <activeClient.icon size={26} className="text-[#C8A46A]" />
                    </div>
                    <span className="inline-flex rounded-full border border-[#C8A46A]/30 bg-[#C8A46A]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8A46A]">
                      {activeClient.tag}
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-3xl lg:text-4xl text-[#F5F1EA] leading-tight mb-3">
                    {activeClient.title}
                  </h3>
                  
                  <p className="text-[#BFDBFE] text-sm leading-relaxed mb-4">
                    {activeClient.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {activeClient.stats.map((stat) => (
                      <span key={stat} className="px-3 py-1.5 rounded-full border border-white/20 bg-white/5 text-[#BFDBFE] text-xs">
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-4">
              {clients.map((client, index) => (
                <motion.button
                  key={client.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group relative w-full overflow-hidden rounded-3xl border p-6 text-left transition-all duration-300 ${
                    activeIndex === index
                      ? 'border-[#C8A46A] bg-[#C8A46A]/8 shadow-[0_20px_50px_rgba(200,164,106,0.15)]'
                      : 'border-[#E5E7EB] bg-white hover:border-[#C8A46A]/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 ${
                      activeIndex === index
                        ? 'border-[#C8A46A] bg-[#C8A46A]/20'
                        : 'border-[#E5E7EB] bg-[#F9F7F2] group-hover:border-[#C8A46A]/40'
                    }`}>
                      <client.icon size={26} className={activeIndex === index ? 'text-[#C8A46A]' : 'text-[#64748B] group-hover:text-[#C8A46A]'} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-heading text-xl leading-tight ${
                        activeIndex === index ? 'text-[#111827]' : 'text-[#475569] group-hover:text-[#111827]'
                      }`}>
                        {client.title}
                      </h3>
                      <span className={`text-[11px] font-bold uppercase tracking-[0.18em] ${
                        activeIndex === index ? 'text-[#C8A46A]' : 'text-[#9CA3AF] group-hover:text-[#C8A46A]'
                      }`}>
                        {client.tag}
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-16 text-center" delay={0.4}>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#111827] text-[#F9F7F2] font-semibold rounded-full hover:bg-[#C8A46A] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(200,164,106,0.3)]"
          >
            <span>Find Your Solution</span>
            <ArrowRight size={18} />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
