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
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
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
    <section className="py-28 bg-[#f8f9fb]">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-20">
          <span className="inline-flex items-center gap-2 text-[#C7A46C] text-xs font-semibold tracking-[0.18em] uppercase mb-4">
            <span className="w-6 h-px bg-[#C7A46C]" />
            Our Difference
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-playfair text-4xl lg:text-5xl text-[#0F2747] max-w-lg leading-tight">
              Why Choose Ginny &amp; Co.
            </h2>
            <p className="text-gray-400 text-base max-w-sm leading-relaxed">
              What sets us apart is not just what we do, but how we do it.
            </p>
          </div>
          <div className="w-12 h-px bg-[#C7A46C] mt-6" />
        </AnimatedSection>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 rounded-sm overflow-hidden">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={0.07 * i}>
              <div className="group bg-white p-8 hover:bg-[#0F2747] transition-colors duration-300 cursor-default h-full">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 shrink-0 rounded-sm bg-[#0F2747]/5 flex items-center justify-center group-hover:bg-[#C7A46C]/15 transition-colors duration-300">
                    <feature.icon size={18} className="text-[#0F2747] group-hover:text-[#C7A46C] transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-[#0F2747] group-hover:text-white font-semibold text-base mb-2 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-white/50 text-sm leading-relaxed transition-colors duration-300">
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
