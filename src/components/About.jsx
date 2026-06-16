import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play, Circle, Shield, Target, Handshake } from 'lucide-react';

function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    desc: 'Deliver precise, proactive financial guidance that empowers businesses to grow with confidence and clarity.',
  },
  {
    icon: Shield,
    title: 'Our Vision',
    desc: 'Be the most trusted advisory partner for Indian businesses — from early-stage startup to established enterprise.',
  },
  {
    icon: Handshake,
    title: 'Our Values',
    desc: 'Integrity, precision, and long-term partnerships built on transparency and genuine client success.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#0B1220] py-24 lg:py-32">

      {/* Textured Background Image */}
      <div
        className="absolute inset-0 pointer-events-none -z-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2000')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 0.07,
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1220]/95 via-[#1a2a4a]/90 to-[#0B1220]/95 pointer-events-none -z-10" />
      {/* Blue ambient glow top-right */}
      <div className="absolute -top-20 right-0 w-[700px] h-[500px] bg-[#0b1220]/20 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-[1240px] px-6">

        {/* Top two-column layout */}
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-20 items-start">

          {/* ── Left Column ── */}
          <AnimatedSection className="flex flex-col">
            <div className="flex items-center gap-3 mb-7">
              <Circle size={9} className="text-[#C8A46A]" strokeWidth={3} />
              <span className="text-[#C8A46A] text-[11px] font-bold tracking-[0.2em] uppercase">Who We Are</span>
            </div>

            <h2 className="font-heading text-5xl md:text-6xl lg:text-[68px] text-[#F5F1EA] leading-[1.04] tracking-tight mb-7">
              About Ginny &amp; Co.
            </h2>

            <p className="text-[#BFDBFE] text-base md:text-lg leading-relaxed mb-5">
              Founded with a commitment to clarity and integrity, Ginny &amp; Co. is a boutique chartered accountancy firm that helps businesses navigate taxation, audit, compliance, and advisory with confidence.
            </p>
            <p className="text-[#BFDBFE] text-base md:text-lg leading-relaxed mb-10">
              We combine deep technical expertise with practical business insight, working as an extension of your team—not just as advisors—to deliver outcomes that genuinely matter.
            </p>

            {/* Pillar Cards */}
            <div className="flex flex-col gap-6">
              {pillars.map((p, i) => (
                <AnimatedSection key={p.title} delay={0.1 + i * 0.08}>
                  <div className="group relative flex items-start gap-6 p-8 rounded-3xl bg-[#F9F7F2] border border-black/[0.08] hover:border-[#C8A46A]/30 transition-all duration-300 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                    {/* Subtle background glow */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#0b1220]/20 via-transparent to-[#0b1220]/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Icon Container */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#C8A46A]/20 to-[#C8A46A]/10 flex items-center justify-center relative z-10 border border-[#C8A46A]/30 group-hover:border-[#C8A46A]/60 transition-colors duration-300">
                      <p.icon size={24} className="text-[#C8A46A]" />
                    </div>
                    
                    <div className="relative z-10">
                      <h4 className="text-[#111827] font-semibold mb-2 tracking-wide text-lg">{p.title}</h4>
                      <p className="text-[#475569] text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex items-center gap-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#C8A46A] text-[#111827] font-bold rounded-full hover:bg-[#d9b87a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(200,164,106,0.25)]"
              >
                Let's Talk
              </a>
              <a
                href="#services"
                className="text-sm font-semibold tracking-wide text-[#BFDBFE] uppercase hover:text-[#C8A46A] transition-colors duration-300 underline underline-offset-4 decoration-[#C8A46A]/40 hover:decoration-[#C8A46A]"
              >
                Explore Services
              </a>
            </div>
          </AnimatedSection>

          {/* ── Right Column: Video Placeholder ── */}
          <AnimatedSection delay={0.2} className="relative lg:sticky lg:top-24">
            {/* Decorative offset frames */}
            <div className="absolute -top-5 -right-5 w-full h-full border border-[#0b1220]/30 rounded-tl-[72px] rounded-br-[72px] rounded-tr-2xl rounded-bl-2xl pointer-events-none" />
            <div className="absolute -top-10 -right-10 w-full h-full border border-[#0b1220]/15 rounded-tl-[72px] rounded-br-[72px] rounded-tr-2xl rounded-bl-2xl pointer-events-none" />

            <div className="relative aspect-[10/12] w-full rounded-tl-[72px] rounded-br-[72px] rounded-tr-2xl rounded-bl-2xl overflow-hidden bg-[#0B1220] shadow-[0_30px_80px_rgba(0,0,0,0.8)] group cursor-pointer border border-[#0b1220]/60">
              <img
                src="https://images.unsplash.com/photo-1522199710521-72d69614c702?w=1200&q=80"
                alt="Team collaborating in office"
                className="w-full h-full object-cover opacity-85 group-hover:opacity-70 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/90 via-[#0B1220]/40 to-transparent" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Pulse ring */}
                  <div className="absolute inset-0 rounded-full bg-[#0b1220]/40 animate-ping scale-125 opacity-60" />
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-[#0b1220]/40 flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-110">
                    <div className="w-13 h-13 w-[52px] h-[52px] rounded-full bg-[#0b1220] flex items-center justify-center shadow-lg shadow-[#0b1220]/60">
                      <Play size={20} fill="#F5F1EA" className="text-[#F5F1EA] ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0b1220]/40 backdrop-blur-md border border-[#0b1220]/60 text-[10px] font-bold text-[#BFDBFE] tracking-[0.2em] uppercase mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#0b1220] animate-pulse" />
                  Our Story
                </div>
                <h4 className="font-heading text-3xl md:text-4xl text-[#F5F1EA]">Watch How We Work</h4>
                <p className="text-[#BFDBFE]/60 text-sm mt-2">A closer look at our firm and our people</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}