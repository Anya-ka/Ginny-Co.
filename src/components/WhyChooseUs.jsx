import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { User, Lightbulb, Clock, MessageSquare, Cpu, Handshake, Circle } from 'lucide-react';

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
    number: '01',
  },
  {
    icon: Lightbulb,
    title: 'Strategic Advisory',
    desc: 'We go beyond compliance to provide proactive insights that drive better financial and business decisions.',
    number: '02',
  },
  {
    icon: Clock,
    title: 'Timely Compliance',
    desc: 'Never miss a deadline. Our structured compliance calendar ensures you are always ahead of regulatory timelines.',
    number: '03',
  },
  {
    icon: MessageSquare,
    title: 'Transparent Communication',
    desc: 'Clear, jargon-free communication at every step. You always know where your finances stand.',
    number: '04',
  },
  {
    icon: Cpu,
    title: 'Technology Driven',
    desc: 'We leverage modern accounting software and digital workflows to deliver faster, more accurate results.',
    number: '05',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnership',
    desc: 'We invest in understanding your business over the long term, growing as your needs evolve and scale.',
    number: '06',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-[#070B14] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] rounded-full bg-[#C8A46A]/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#4a3a6e]/8 blur-[140px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative">
        {/* Header */}
        <AnimatedSection className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <Circle size={9} className="text-[#C8A46A]" strokeWidth={3} />
            <span className="text-[#C8A46A] text-[11px] font-bold tracking-[0.2em] uppercase">Our Difference</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-heading text-5xl lg:text-6xl text-[#F5F1EA] leading-tight">
              Why Choose<br />Ginny &amp; Co.
            </h2>
            <p className="text-[#A7B0C0] text-lg max-w-sm leading-relaxed">
              What sets us apart is not just what we do, but how we do it — every step of the way.
            </p>
          </div>
        </AnimatedSection>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-3xl overflow-hidden border border-white/[0.06]">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={0.06 * i}>
              <div className="group relative bg-[#070B14] p-8 lg:p-10 hover:bg-[#0D1525] transition-colors duration-300 cursor-default h-full overflow-hidden">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C8A46A]/0 to-[#C8A46A]/0 group-hover:from-[#C8A46A]/4 group-hover:to-transparent transition-all duration-500" />

                {/* Faint number watermark */}
                <div className="absolute top-4 right-6 font-heading text-7xl text-white/[0.03] select-none pointer-events-none">
                  {feature.number}
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#C8A46A]/8 border border-[#C8A46A]/15 flex items-center justify-center mb-6 group-hover:bg-[#C8A46A]/15 group-hover:border-[#C8A46A]/30 transition-all duration-300">
                    <feature.icon size={20} className="text-[#C8A46A]" />
                  </div>
                  <h3 className="font-heading text-xl text-[#F5F1EA] mb-3">{feature.title}</h3>
                  <p className="text-[#A7B0C0] text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
