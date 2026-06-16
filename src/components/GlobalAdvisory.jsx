import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Circle, Globe, BarChart3, ShieldCheck, Briefcase, Layers } from 'lucide-react';

function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const advisoryItems = [
  {
    icon: Globe,
    title: 'Business Strategy & Growth',
    desc: 'Helping businesses scale sustainably and improve profitability through data-driven strategy, market expansion, and operational excellence.',
    index: '01',
  },
  {
    icon: BarChart3,
    title: 'Financial Advisory',
    desc: 'Supporting financial planning, budgeting, and cash flow optimisation to build resilient, future-ready businesses.',
    index: '02',
  },
  {
    icon: Briefcase,
    title: 'Fundraising & Investor Readiness',
    desc: 'Preparing businesses for investment rounds — from financial modelling and pitch decks to due diligence readiness.',
    index: '03',
  },
  {
    icon: Layers,
    title: 'Debt & Banking Advisory',
    desc: 'Structuring and negotiating debt facilities with banks and financial institutions to optimise capital costs.',
    index: '04',
  },
  {
    icon: ShieldCheck,
    title: 'Risk & Compliance Advisory',
    desc: 'Identifying, assessing, and mitigating business risks while ensuring full regulatory compliance.',
    index: '05',
  },
  {
    icon: Globe,
    title: 'Management Reporting & MIS',
    desc: 'Designing and implementing Management Information Systems that give leadership real-time visibility into business performance.',
    index: '06',
  },
];

const cardImages = [
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80',
  'https://www.consultedge.global/insights/wp-content/uploads/2024/07/FC-for-Finance.jpg',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
];

export default function GlobalAdvisory() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const activeIndex = hoveredIndex ?? 0;
  const activeItem = advisoryItems[activeIndex];

  return (
    <section id="advisory" className="py-24 lg:py-32 bg-[#0B1220] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 18% 15%, rgba(200,164,106,0.16) 0, transparent 22%), radial-gradient(circle at 78% 12%, rgba(255,255,255,0.08) 0, transparent 20%), linear-gradient(135deg, rgba(18,27,42,0.9), rgba(7,11,20,0.95))',
        }}
      />
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#C8A46A]/10 to-transparent pointer-events-none" />
      <div className="absolute right-10 top-16 w-96 h-96 rounded-full bg-[#C8A46A]/9 blur-[150px] pointer-events-none" />
      <div className="absolute left-0 bottom-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#4a3a6e]/14 blur-[150px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] items-start">
          <AnimatedSection className="space-y-7 lg:sticky lg:top-24">
            <div className="flex items-center gap-3 mb-6">
            <Circle size={9} className="text-[#C8A46A]" strokeWidth={3} />
            <span className="text-[#C8A46A] text-[11px] font-bold tracking-[0.2em] uppercase">Strategic Advisory</span>
          </div>
            <div className="space-y-5">
              <h2 className="font-heading text-5xl lg:text-[68px] text-[#F5F1EA] leading-[1.04] tracking-tight drop-shadow-[0_16px_34px_rgba(0,0,0,0.25)]">
                Global Advisory
              </h2>
              <p className="text-[#BFDBFE] text-lg max-w-xl leading-relaxed">
                Bring confidence to every major decision with high-impact advisory that blends strategy, finance, and compliance into one unified growth engine.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[34px] border border-black/[0.08] bg-[#F9F7F2]/95 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
  <div className="relative h-72 overflow-hidden">
    <img
      src={cardImages[activeIndex]}
      alt={activeItem.title}
      className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-500"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-transparent" />

    <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C8A46A]/20 bg-[#F9F7F2]/90 text-[#C8A46A] shadow-[0_12px_30px_rgba(0,0,0,0.08)] backdrop-blur-sm">
      <activeItem.icon size={23} />
    </div>

    <div className="absolute bottom-6 left-6 right-6">
      <span className="mb-3 inline-flex rounded-full border border-[#C8A46A]/20 bg-[#C8A46A]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#C8A46A]">
        Focus {activeItem.index}
      </span>

      <h3 className="font-heading text-3xl text-white leading-tight">
        {activeItem.title}
      </h3>
    </div>
  </div>

  <div className="p-6 bg-[#F9F7F2]/95">
    <p className="text-[#475569] text-sm leading-relaxed">
      {activeItem.desc}
    </p>

    <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-black/[0.08] bg-black/[0.03]">
      {[
        ['360°', 'Advisory'],
        ['6', 'Focus Areas'],
        ['1:1', 'Partner Led'],
      ].map(([value, label]) => (
        <div
          key={label}
          className="bg-white p-4 text-center border border-black/[0.06]"
        >
          <div className="font-heading text-2xl text-[#111827]">
            {value}
          </div>

          <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#475569]">
            {label}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Trusted Expertise', 'Complex corporate finance translated into clear, board-ready decisions.'],
                ['Hands-on Execution', 'Advisory that stays close to implementation, reporting, and follow-through.'],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-3xl border border-white/20 bg-[#0B1220]/40 p-5 shadow-[0_18px_44px_rgba(0,0,0,0.4)]">
                  <span className="text-[#C8A46A] text-xs uppercase tracking-[0.22em] font-semibold">{title}</span>
                  <p className="mt-3 text-[#BFDBFE] text-sm leading-relaxed">{copy}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid gap-5 sm:grid-cols-2">
              {advisoryItems.map((item, index) => (
                <motion.button
  key={item.index}
  type="button"
  onMouseEnter={() => setHoveredIndex(index)}
  onMouseLeave={() => setHoveredIndex(null)}
  className="group relative overflow-hidden rounded-[30px] border border-black/[0.08] bg-[#F9F7F2]/95 text-left shadow-[0_20px_45px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-black/[0.12]"
>
  <div className="relative h-40 overflow-hidden rounded-t-[30px]">
    <img
      src={cardImages[index]}
      alt={item.title}
      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

    <div className="absolute inset-x-6 top-6 flex items-center justify-between">
      <span className="rounded-full bg-[#C8A46A]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A46A] border border-[#C8A46A]/20">
        {item.index}
      </span>

      <div className="rounded-2xl bg-[#C8A46A]/10 border border-[#C8A46A]/20 p-3 text-[#C8A46A] shadow-[0_12px_24px_rgba(0,0,0,0.08)]">
        <item.icon size={18} />
      </div>
    </div>
  </div>

  <div className="p-5 bg-[#F9F7F2]/95 rounded-b-[30px]">
    <h3 className="font-heading text-xl text-[#111827] leading-snug mb-3">
      {item.title}
    </h3>

    <p className="text-[#475569] text-sm leading-relaxed mb-6">
      {item.desc}
    </p>
  </div>
</motion.button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
