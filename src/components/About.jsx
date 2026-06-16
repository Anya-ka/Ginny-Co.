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
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1828]/95 via-[#0B1220]/90 to-[#0B1220]/95 pointer-events-none -z-10" />
      {/* Gold ambient glow top-right */}
      <div className="absolute -top-20 right-0 w-[700px] h-[500px] bg-[#C8A46A]/8 rounded-full blur-[160px] pointer-events-none -z-10" />

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

            <p className="text-[#A7B0C0] text-base md:text-lg leading-relaxed mb-5">
              Founded with a commitment to clarity and integrity, Ginny &amp; Co. is a boutique chartered accountancy firm that helps businesses navigate taxation, audit, compliance, and advisory with confidence.
            </p>
            <p className="text-[#A7B0C0] text-base md:text-lg leading-relaxed mb-10">
              We combine deep technical expertise with practical business insight, working as an extension of your team—not just as advisors—to deliver outcomes that genuinely matter.
            </p>

            {/* Pillar Cards */}
            <div className="flex flex-col gap-4">
              {pillars.map((p, i) => (
                <AnimatedSection key={p.title} delay={0.1 + i * 0.08}>
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#C8A46A]/25 transition-colors duration-300">
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#C8A46A]/10 flex items-center justify-center mt-0.5">
                      <p.icon size={17} className="text-[#C8A46A]" />
                    </div>
                    <div>
                      <h4 className="text-[#F5F1EA] font-semibold mb-1 tracking-wide">{p.title}</h4>
                      <p className="text-[#A7B0C0] text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex items-center gap-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#C8A46A] text-[#0B1220] font-bold rounded-full hover:bg-[#d9b87a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(200,164,106,0.25)]"
              >
                Let's Talk
              </a>
              <a
                href="#services"
                className="text-sm font-semibold tracking-wide text-[#F5F1EA] uppercase hover:text-[#C8A46A] transition-colors duration-300 underline underline-offset-4 decoration-white/20 hover:decoration-[#C8A46A]/40"
              >
                Explore Services
              </a>
            </div>
          </AnimatedSection>

          {/* ── Right Column: Video Placeholder ── */}
          <AnimatedSection delay={0.2} className="relative lg:sticky lg:top-28">
            {/* Decorative offset frames */}
            <div className="absolute -top-5 -right-5 w-full h-full border border-white/[0.05] rounded-tl-[72px] rounded-br-[72px] rounded-tr-2xl rounded-bl-2xl pointer-events-none" />
            <div className="absolute -top-10 -right-10 w-full h-full border border-white/[0.025] rounded-tl-[72px] rounded-br-[72px] rounded-tr-2xl rounded-bl-2xl pointer-events-none" />

            <div className="relative aspect-[4/5] w-full rounded-tl-[72px] rounded-br-[72px] rounded-tr-2xl rounded-bl-2xl overflow-hidden bg-[#121B2A] shadow-[0_30px_80px_rgba(0,0,0,0.5)] group cursor-pointer border border-white/[0.07]">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80"
                alt="Ginny & Co. office"
                className="w-full h-full object-cover opacity-45 group-hover:opacity-35 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/95 via-[#0B1220]/30 to-transparent" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Pulse ring */}
                  <div className="absolute inset-0 rounded-full bg-[#C8A46A]/20 animate-ping scale-125 opacity-60" />
                  <div className="w-20 h-20 rounded-full bg-white/5 backdrop-blur-md border border-white/[0.12] flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-110">
                    <div className="w-13 h-13 w-[52px] h-[52px] rounded-full bg-[#C8A46A] flex items-center justify-center shadow-lg shadow-[#C8A46A]/40">
                      <Play size={20} fill="#0B1220" className="text-[#0B1220] ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white tracking-[0.2em] uppercase mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#C8A46A] animate-pulse" />
                  Our Story
                </div>
                <h4 className="font-heading text-3xl md:text-4xl text-white">Watch How We Work</h4>
                <p className="text-white/60 text-sm mt-2">A closer look at our firm and our people</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}