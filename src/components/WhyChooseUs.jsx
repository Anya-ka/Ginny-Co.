import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { User, Lightbulb, Clock, MessageSquare, Cpu, Handshake } from 'lucide-react';

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

const features = [
  {
    icon: User,
    title: 'Personalized Attention',
    desc: 'Every client is assigned a dedicated advisor who understands your business deeply — not a rotating team.',
  },
  {
    icon: Lightbulb,
    title: 'Strategic Advisory',
    desc: 'We go beyond compliance to provide proactive insights that drive better financial and business decisions.',
  },
  {
    icon: Clock,
    title: 'Timely Compliance',
    desc: 'Never miss a deadline. Our structured compliance calendar ensures you are always ahead of regulatory timelines.',
  },
  {
    icon: MessageSquare,
    title: 'Transparent Communication',
    desc: 'Clear, jargon-free communication at every step. You always know where your finances stand.',
  },
  {
    icon: Cpu,
    title: 'Technology Driven',
    desc: 'We leverage modern accounting software and digital workflows to deliver faster, more accurate results.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnership',
    desc: 'We invest in understanding your business over the long term, growing as your needs evolve and scale.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-[#070B14] relative overflow-hidden">
      {/* Ambient glow top-right */}
      <div className="absolute top-0 right-0 w-[400px] h-[350px] rounded-full bg-[#4a3a6e]/8 blur-[120px] pointer-events-none" />
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-20">
          <span className="inline-flex items-center gap-2 text-[#C8A46A] text-xs font-semibold tracking-[0.18em] uppercase mb-4">
            <span className="w-6 h-px bg-[#C8A46A]" />
            Our Difference
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-heading text-4xl lg:text-5xl text-[#F5F1EA] max-w-lg leading-tight">
              Why Choose Ginny &amp; Co.
            </h2>
            <p className="text-[#A7B0C0]/90 text-base max-w-sm leading-relaxed">
              What sets us apart is not just what we do, but how we do it.
            </p>
          </div>
          <div className="w-12 h-px bg-[#C8A46A] mt-6" />
        </AnimatedSection>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={0.07 * i}>
              <div className="group bg-[#121B2A] rounded-[var(--radius-2xl)] p-8 hover:border-[#C8A46A]/20 hover:-translate-y-1 transition-all duration-300 cursor-default h-full border border-white/[0.06]">
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#C8A46A]/15 transition-colors duration-300">
                    <feature.icon size={18} className="text-[#A7B0C0]/90 group-hover:text-[#C8A46A] transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-[#F5F1EA] font-semibold text-base mb-2 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-[#A7B0C0]/90 text-sm leading-relaxed transition-colors duration-300">
                      {feature.desc}
                    </p>
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
