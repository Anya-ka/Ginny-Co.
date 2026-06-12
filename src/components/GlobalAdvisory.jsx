import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const advisoryItems = [
  {
    title: 'Business Strategy & Growth',
    desc: 'Helping businesses scale sustainably and improve profitability through data-driven strategy, market expansion, and operational excellence.',
    index: '01',
  },
  {
    title: 'Financial Advisory',
    desc: 'Supporting financial planning, budgeting, and cash flow optimisation to build resilient, future-ready businesses.',
    index: '02',
  },
  {
    title: 'Fundraising & Investor Readiness',
    desc: 'Preparing businesses for investment rounds — from financial modelling and pitch decks to due diligence readiness.',
    index: '03',
  },
  {
    title: 'Debt & Banking Advisory',
    desc: 'Structuring and negotiating debt facilities with banks and financial institutions to optimise capital costs.',
    index: '04',
  },
  {
    title: 'Risk & Compliance Advisory',
    desc: 'Identifying, assessing, and mitigating business risks while ensuring full regulatory compliance.',
    index: '05',
  },
  {
    title: 'Management Reporting & MIS',
    desc: 'Designing and implementing Management Information Systems that give leadership real-time visibility into business performance.',
    index: '06',
  },
];

export default function GlobalAdvisory() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="advisory" className="py-28 bg-[#091d3a] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C7A46C 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Gold top border */}
      <div className="absolute top-0 left-0 w-24 h-px bg-gradient-to-r from-[#C7A46C] to-transparent" />

      <div className="max-w-[1240px] mx-auto px-6 relative">
        {/* Header */}
        <AnimatedSection className="mb-20">
          <span className="text-[#C7A46C] text-xs font-semibold tracking-[0.2em] uppercase block mb-6">
            Strategic Services
          </span>
          <h2 className="font-playfair text-5xl lg:text-7xl text-white leading-none tracking-tight mb-6">
            Global
            <br />
            <span className="text-[#C7A46C]">Advisory</span>
          </h2>
          <p className="text-white/40 text-base max-w-md leading-relaxed">
            Strategic advisory services designed to accelerate business growth and navigate 
            complex financial landscapes.
          </p>
        </AnimatedSection>

        {/* Advisory list */}
        <div className="border-t border-white/10">
          {advisoryItems.map((item, i) => (
            <AnimatedSection key={item.title} delay={0.06 * i}>
              <div
                className="group border-b border-white/10 relative cursor-default"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Hover background */}
                <motion.div
                  initial={false}
                  animate={{ opacity: hoveredIndex === i ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-white/[0.03] pointer-events-none"
                />

                <div className="flex items-center justify-between py-7 px-2 lg:px-4 gap-8">
                  {/* Left */}
                  <div className="flex items-center gap-6 min-w-0">
                    <span className="text-[#C7A46C]/40 text-xs font-mono tracking-widest shrink-0 hidden sm:block">
                      {item.index}
                    </span>
                    <motion.h3
                      animate={{
                        color: hoveredIndex === i ? '#C7A46C' : '#ffffff',
                      }}
                      transition={{ duration: 0.2 }}
                      className="font-playfair text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-tight"
                    >
                      {item.title}
                    </motion.h3>
                  </div>

                  {/* Right — Arrow + Description */}
                  <div className="flex items-center gap-6">
                    <AnimatePresence>
                      {hoveredIndex === i && (
                        <motion.p
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          transition={{ duration: 0.25 }}
                          className="text-white/50 text-sm leading-relaxed max-w-sm text-right hidden lg:block"
                        >
                          {item.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    <motion.div
                      animate={{
                        x: hoveredIndex === i ? 4 : 0,
                        color: hoveredIndex === i ? '#C7A46C' : 'rgba(255,255,255,0.3)',
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowUpRight size={22} />
                    </motion.div>
                  </div>
                </div>

                {/* Mobile desc (below item) */}
                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden lg:hidden"
                    >
                      <p className="text-white/40 text-sm leading-relaxed px-2 pb-5">
                        {item.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
