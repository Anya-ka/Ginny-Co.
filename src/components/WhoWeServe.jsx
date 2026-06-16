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
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=80',
    imagePosition: 'object-center',
  },
  {
    icon: Building,
    title: 'SMEs',
    desc: 'We help small and medium enterprises streamline compliance, manage taxes, and build the financial systems they need to scale.',
    tag: 'Growth Stage',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80',
    imagePosition: 'object-center',
  },
  {
    icon: Users,
    title: 'Family Businesses',
    desc: 'Trusted advisors for multi-generational businesses navigating succession, restructuring, and sustainable growth.',
    tag: 'Legacy',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&q=80',
    imagePosition: 'object-center',
  },
  {
    icon: UserCircle,
    title: 'Professionals',
    desc: 'Doctors, lawyers, consultants, and freelancers rely on us for smart tax planning and financial management.',
    tag: 'Individuals',
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=900&q=80',
    imagePosition: 'object-center',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Businesses',
    desc: 'Specialised GST, TCS, and compliance support for businesses operating across online marketplaces.',
    tag: 'Digital',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80',
    imagePosition: 'object-center',
  },
  {
    icon: Heart,
    title: 'NGOs & Trusts',
    desc: 'End-to-end financial and compliance management for non-profits, charitable trusts, and Section 8 companies.',
    tag: 'Non-Profit',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=900&q=80',
    imagePosition: 'object-center',
  },
];

const orbitPositions = [
  { x: '50%', y: '8%' },
  { x: '86%', y: '29%' },
  { x: '78%', y: '73%' },
  { x: '50%', y: '92%' },
  { x: '22%', y: '73%' },
  { x: '14%', y: '29%' },
];

const centerImage = 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1000&q=80';

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="py-24 lg:py-32 bg-[#121B2A] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_54%,rgba(200,164,106,0.13),transparent_34%),linear-gradient(135deg,rgba(7,11,20,0.42),transparent_38%,rgba(7,11,20,0.48))] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[640px] h-[720px] bg-[#C8A46A]/8 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute left-0 top-24 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-[#4a3a6e]/16 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 h-[260px] w-[760px] -translate-x-1/2 rounded-full bg-[#0B1220]/70 blur-[80px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative">
        {/* Header */}
        <AnimatedSection className="mb-14 lg:mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Circle size={9} className="text-[#C8A46A]" strokeWidth={3} />
            <span className="text-[#E2C17E] text-[11px] font-bold tracking-[0.2em] uppercase">Our Clients</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-heading text-5xl lg:text-7xl text-[#FFF8E8] leading-tight drop-shadow-[0_16px_34px_rgba(0,0,0,0.24)]">
              Who We Serve
            </h2>
            <p className="text-[#D7DEE8] text-lg max-w-sm leading-relaxed">
              We work with businesses and individuals at every stage of their journey — from first idea to lasting legacy.
            </p>
          </div>
        </AnimatedSection>

        {/* Orbital client map */}
        <AnimatedSection className="hidden lg:block" delay={0.08}>
          <div className="relative mx-auto h-[820px] max-w-[1130px]">
            <div className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#07101F]/35 shadow-[0_0_120px_rgba(200,164,106,0.08)]" />
            <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C8A46A]/35 shadow-[inset_0_0_90px_rgba(200,164,106,0.07),0_0_60px_rgba(200,164,106,0.08)]" />
            <div className="absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]" />
            <div className="absolute left-1/2 top-1/2 h-px w-[82%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C8A46A]/24 to-transparent" />
            <div className="absolute left-1/2 top-1/2 h-[82%] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#C8A46A]/24 to-transparent" />

            <div className="absolute left-1/2 top-1/2 z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-[#C8A46A]/45 bg-[#0B1220] shadow-[0_30px_90px_rgba(0,0,0,0.42),0_0_0_12px_rgba(200,164,106,0.045)]">
              <img
                src={centerImage}
                alt="Ginny & Co. advisory conversation"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07101F] via-[#0B1220]/72 to-[#0B1220]/16" />
              <div className="absolute inset-x-9 bottom-9 text-center">
                <span className="mx-auto mb-4 block h-2 w-16 rounded-full bg-[#C8A46A]" />
                <h3 className="font-heading text-4xl leading-tight text-[#FFF8E8] drop-shadow-[0_8px_18px_rgba(0,0,0,0.38)]">
                  Clients at Every Stage
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#F0F4FA]">
                  Practical guidance shaped around your journey.
                </p>
              </div>
            </div>

            {clients.map((client, i) => (
              <motion.div
                key={client.title}
                initial={{ opacity: 0, scale: 0.86 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.06 }}
                className="group absolute z-20 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 cursor-default overflow-hidden rounded-full border border-white/[0.1] bg-[#0B1220] text-center shadow-[0_26px_64px_rgba(0,0,0,0.38)] transition-all duration-300 hover:scale-[1.045] hover:border-[#C8A46A]/55 hover:shadow-[0_30px_80px_rgba(0,0,0,0.46),0_0_36px_rgba(200,164,106,0.13)]"
                style={{ left: orbitPositions[i].x, top: orbitPositions[i].y }}
              >
                <img
                  src={client.image}
                  alt={`${client.title} clients`}
                  className={`absolute inset-0 h-full w-full object-cover ${client.imagePosition} transition-transform duration-700 group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B16] via-[#0B1220]/74 to-[#0B1220]/8" />
                <div className="absolute inset-2 rounded-full border border-[#C8A46A]/16 transition-colors duration-300 group-hover:border-[#C8A46A]/40" />
                <div className="relative mx-auto mt-10 mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.14] bg-[#0B1220]/78 text-[#E2C17E] shadow-[0_12px_34px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-colors duration-300 group-hover:bg-[#C8A46A]/18">
                  <client.icon size={23} />
                </div>
                <h3 className="relative font-heading text-xl leading-tight text-[#FFF8E8] drop-shadow-[0_6px_14px_rgba(0,0,0,0.34)]">{client.title}</h3>
                <span className="relative mt-3 inline-flex rounded-full border border-white/[0.14] bg-white/[0.1] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#F0F4FA] backdrop-blur-sm">
                  {client.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid gap-5 lg:hidden">
          {clients.map((client, i) => (
            <AnimatedSection key={client.title} delay={0.07 * i}>
              <div className="group relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#0B1220]/95 shadow-[0_18px_48px_rgba(0,0,0,0.28)] transition-all duration-300 hover:border-[#C8A46A]/30">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={client.image}
                    alt={`${client.title} clients`}
                    className={`absolute inset-0 h-full w-full object-cover ${client.imagePosition} transition-transform duration-700 group-hover:scale-105`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/46 to-transparent" />
                  <div className="absolute bottom-4 left-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/[0.16] bg-[#0B1220]/78 shadow-[0_10px_30px_rgba(0,0,0,0.26)] backdrop-blur-sm">
                    <client.icon size={22} className="text-[#E2C17E]" />
                  </div>
                </div>
                <div className="p-6">
                  <div>
                    <span className="mb-2 inline-flex rounded-full border border-[#C8A46A]/20 bg-[#C8A46A]/8 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#E2C17E]">
                      {client.tag}
                    </span>
                    <h3 className="font-heading text-3xl leading-tight text-[#FFF8E8]">{client.title}</h3>
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-[#D7DEE8]">{client.desc}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold tracking-wide text-[#E2C17E]">
                    <span>Built for your needs</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
