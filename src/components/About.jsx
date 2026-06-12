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
    <section id="about" className="py-28 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <span className="inline-flex items-center gap-2 text-[#C7A46C] text-xs font-semibold tracking-[0.18em] uppercase mb-4">
            <span className="w-6 h-px bg-[#C7A46C]" />
            Our Story
            <span className="w-6 h-px bg-[#C7A46C]" />
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl text-[#0F2747] mt-2">
            About Ginny &amp; Co.
          </h2>
        </AnimatedSection>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left — Video placeholder */}
          <AnimatedSection delay={0.1}>
            <div className="relative aspect-video bg-[#0F2747] rounded-sm overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                alt="Ginny & Co. founding team"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2747]/70 to-transparent" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#C7A46C] flex items-center justify-center shadow-2xl shadow-[#C7A46C]/40 group-hover:scale-110 transition-transform duration-300">
                  <Play size={20} fill="white" className="text-white ml-1" />
                </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/80 text-sm font-medium">Watch Our Story</p>
                <p className="text-white/50 text-xs mt-0.5">2 min — Founder introduction</p>
              </div>

              {/* Gold corner accent */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#C7A46C]" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#C7A46C]" />
            </div>
          </AnimatedSection>

          {/* Right — Text */}
          <AnimatedSection delay={0.2} className="flex flex-col gap-8">
            <div>
              <div className="w-10 h-0.5 bg-[#C7A46C] mb-5" />
              <h3 className="font-playfair text-2xl text-[#0F2747] mb-4">
                Two Decades of Trusted Advisory
              </h3>
              <p className="text-gray-500 text-base leading-relaxed">
                Founded with a commitment to clarity and integrity, Ginny &amp; Co. has grown from 
                a boutique practice into a full-service chartered accountancy firm serving businesses 
                across sectors. We combine deep technical expertise with strategic business acumen.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-px bg-gray-100 rounded-sm overflow-hidden">
              {[
                { title: 'Mission', text: 'To deliver precise, proactive financial guidance that empowers businesses to grow with confidence.' },
                { title: 'Vision', text: 'To be the most trusted advisory partner for Indian businesses — from startup to scale.' },
                { title: 'Values', text: 'Integrity, precision, client-centricity, and a commitment to long-term partnerships.' },
              ].map((item) => (
                <div key={item.title} className="bg-white p-5">
                  <div className="text-[#C7A46C] text-xs font-bold tracking-widest uppercase mb-2">{item.title}</div>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 rounded-sm overflow-hidden">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={0.1 * i}>
              <div className="bg-white p-8 text-center hover:bg-[#0F2747] group transition-colors duration-300 cursor-default">
                <stat.icon
                  size={22}
                  className="mx-auto mb-4 text-[#C7A46C] group-hover:text-[#C7A46C] transition-colors"
                />
                <div className="font-playfair text-4xl font-semibold text-[#0F2747] group-hover:text-white transition-colors mb-1">
                  {stat.num}
                </div>
                <div className="text-sm font-semibold text-[#0F2747] group-hover:text-white/90 transition-colors mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-400 group-hover:text-white/50 transition-colors">
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
