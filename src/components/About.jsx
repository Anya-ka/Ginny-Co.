import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play, Users, Briefcase, Award, TrendingUp } from 'lucide-react';

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

const stats = [
  { icon: Users, num: '500+', label: 'Clients Served', desc: 'Across India' },
  { icon: Briefcase, num: '20+', label: 'Industries', desc: 'Diversified expertise' },
  { icon: Award, num: '15+', label: 'Years Experience', desc: 'Deep domain knowledge' },
  { icon: TrendingUp, num: '98%', label: 'Client Retention', desc: 'Long-term partnerships' },
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#0B1220] relative overflow-hidden">
      {/* Soft ambient glow top-right */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-[#4a3a6e]/10 blur-[130px] pointer-events-none" />
      <div className="max-w-[1240px] mx-auto px-6 relative">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <h2 className="font-playfair text-4xl lg:text-5xl text-[#F5F1EA] mt-2">
            About Ginny &amp; Co.
          </h2>
        </AnimatedSection>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left — Video placeholder */}
          <AnimatedSection delay={0.1}>
            <div className="relative aspect-video bg-[#121B2A] rounded-[var(--radius-2xl)] overflow-hidden group cursor-pointer border border-white/7">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                alt="Ginny & Co. founding team"
                className="w-full h-full object-cover opacity-65 group-hover:opacity-75 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/55 to-transparent" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#C8A46A] flex items-center justify-center shadow-2xl shadow-[#C8A46A]/40 group-hover:scale-110 transition-transform duration-300">
                  <Play size={20} fill="white" className="text-white ml-1" />
                </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/80 text-sm font-medium">Watch Our Story</p>
                <p className="text-white/50 text-xs mt-0.5">2 min — Founder introduction</p>
              </div>

              {/* Gold corner accent */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#C8A46A]" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#C8A46A]" />
            </div>
          </AnimatedSection>

          {/* Right — Text */}
          <AnimatedSection delay={0.2} className="flex flex-col gap-8">
            <div>
              <div className="w-10 h-0.5 bg-[#C8A46A] mb-5" />
              <h3 className="font-playfair text-2xl text-[#F5F1EA] mb-4">
                Two Decades of Trusted Advisory
              </h3>
              <p className="text-[#A7B0C0] text-base leading-relaxed">
                Founded with a commitment to clarity and integrity, Ginny &amp; Co. has grown from
                a boutique practice into a full-service chartered accountancy firm serving businesses
                across sectors. We combine deep technical expertise with strategic business acumen.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 rounded-[var(--radius-2xl)] overflow-hidden">
              {[
                { title: 'Mission', text: 'To deliver precise, proactive financial guidance that empowers businesses to grow with confidence.' },
                { title: 'Vision', text: 'To be the most trusted advisory partner for Indian businesses — from startup to scale.' },
                { title: 'Values', text: 'Integrity, precision, client-centricity, and a commitment to long-term partnerships.' },
              ].map((item) => (
                <div key={item.title} className="bg-[#121B2A] rounded-[var(--radius-lg)] p-5 border border-white/7 hover:border-[#C8A46A]/20 transition-all duration-300">
                  <div className="text-[#C8A46A] text-xs font-bold tracking-widest uppercase mb-2">{item.title}</div>
                  <p className="text-[#AEB7C7] text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={0.1 * i}>
              <div className="bg-[#121B2A] rounded-[var(--radius-2xl)] p-8 text-center hover:border-[#C8A46A]/25 hover:shadow-[0_6px_28px_rgba(200,164,106,0.06)] hover:-translate-y-1 transition-all duration-300 cursor-default border border-white/7">
                <stat.icon
                  size={22}
                  className="mx-auto mb-4 text-[#C8A46A] transition-colors"
                />
                <div className="font-playfair text-4xl font-semibold text-[#F5F1EA] transition-colors mb-1">
                  {stat.num}
                </div>
                <div className="text-sm font-semibold text-[#F5F1EA] transition-colors mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#A7B0C0] transition-colors">
                  {stat.desc}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

