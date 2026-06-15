import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, ArrowRight } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28, filter: 'blur(4px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
});

// 6 images — duplicated for seamless loop
const heroImages = [
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80',
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80',
  'https://images.unsplash.com/photo-1560472355-536de3962603?w=1200&q=80',
];

export default function Hero() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const el = typewriterRef.current;
    if (!el) return;
    const timer = setTimeout(() => el.classList.add('typewriter-done'), 4100);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden bg-[#0B1220]">

      {/* ── Sliding image strip ── */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-slide-track h-full">
          {[...heroImages, ...heroImages].map((src, i) => (
            <div
              key={i}
              className="relative shrink-0 h-full"
              style={{ width: 'calc(100% / 6)' }}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
                loading={i < 2 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        {/* Dark overlay — slightly lifted, not pure black */}
        <div className="absolute inset-0 bg-[#0B1220]/70" />
        {/* Violet ambient glow bottom-left */}
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#4a3a6e]/18 blur-[140px] pointer-events-none" />
        {/* Warm gold tint top-right */}
        <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-[#C8A46A]/6 blur-[120px] pointer-events-none" />
      </div>

      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A46A] to-transparent z-10" />

      {/* ── Centered content ── */}
      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 z-10">

        {/* Eyebrow */}
    

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.18)}
          className="font-playfair text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] text-[#F5F1EA] leading-[1.06] tracking-tight mb-5 max-w-5xl"
        >
          Trusted Advisors for{' '}
          <em className="not-italic gradient-gold">Every Stage</em>
          <br className="hidden sm:block" />
          {' '}of Your Business
        </motion.h1>

        {/* Typewriter */}
        <motion.div {...fadeUp(0.5)} className="mb-6 h-7 flex items-center justify-center">
          <span ref={typewriterRef} className="typewriter text-[#A7B0C0] text-base font-medium">
            Taxation · Compliance · Audit · Financial Planning · Business Advisory
          </span>
        </motion.div>

        {/* Description */}
        <motion.p {...fadeUp(0.3)} className="text-[#A7B0C0] text-base sm:text-lg leading-relaxed max-w-2xl mb-10">
          Ginny &amp; Co. partners with businesses and professionals to navigate complex
          financial landscapes — with precision, clarity, and strategic insight.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.38)} className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => handleScroll('#contact')}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#C8A46A] text-[#070B14] text-sm font-bold rounded-full hover:bg-[#e0b87a] hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#C8A46A]/25 transition-all duration-200"
          >
            <CalendarDays size={15} />
            Schedule Consultation
          </button>
          <button
            onClick={() => handleScroll('#services')}
            className="inline-flex items-center gap-2 text-[#F5F1EA]/75 text-sm font-semibold hover:text-[#F5F1EA] hover:gap-3 transition-all duration-200 group"
          >
            Explore Services
            <span className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center group-hover:bg-white/8 group-hover:border-white/30 transition-all duration-200">
              <ArrowRight size={13} />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0B1220] to-transparent z-10" />
    </section>
  );
}
