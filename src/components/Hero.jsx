import { motion } from 'framer-motion';
import { CalendarDays, Phone } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
});

const credibility = [
  'Taxation', 'Audit & Assurance', 'GST Compliance',
  'Business Advisory', 'Company Registration', 'Financial Planning',
];

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col bg-[#0F2747] overflow-hidden"
    >
      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#C7A46C]" />

      {/* Main hero content */}
      <div className="flex-1 flex items-center pt-20">
        <div className="max-w-[1240px] mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-160px)] py-16">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <motion.div {...fadeUp(0.1)}>
                <span className="inline-flex items-center gap-2 text-[#C7A46C] text-xs font-semibold tracking-[0.18em] uppercase mb-6">
                  <span className="w-8 h-px bg-[#C7A46C] inline-block" />
                  Chartered Accountants & Advisors
                </span>
              </motion.div>

              <motion.h1
                {...fadeUp(0.2)}
                className="font-playfair text-4xl sm:text-5xl lg:text-[3.4rem] text-white leading-[1.12] mb-6 tracking-tight"
              >
                Trusted Advisors for{' '}
                <span className="text-[#C7A46C] italic">Every Stage</span>{' '}
                of Your Business
              </motion.h1>

              <motion.p {...fadeUp(0.3)} className="text-white/65 text-lg leading-relaxed mb-10 max-w-lg">
                Ginny &amp; Co. partners with businesses and professionals to navigate taxation, 
                compliance, audit, and financial planning — with precision, clarity, and strategic insight.
              </motion.p>

              <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4">
                <button
                  onClick={() => handleScroll('#contact')}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C7A46C] text-white text-sm font-semibold tracking-wide rounded-sm hover:bg-[#b8912e] transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#C7A46C]/20"
                >
                  <CalendarDays size={16} />
                  Schedule Consultation
                </button>
                <button
                  onClick={() => handleScroll('#contact')}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 text-white text-sm font-semibold tracking-wide rounded-sm border border-white/25 hover:border-white/60 hover:bg-white/5 transition-all duration-200"
                >
                  <Phone size={16} />
                  Contact Us
                </button>
              </motion.div>

              {/* Trust badges */}
              <motion.div {...fadeUp(0.5)} className="mt-14 flex flex-col gap-3">
                <span className="text-white/30 text-xs tracking-widest uppercase font-medium">Recognised & Trusted</span>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {['ICAI Member', 'GST Practitioner', 'MCA Registered', 'ISO Compliant'].map((badge) => (
                    <span key={badge} className="text-white/50 text-xs font-medium tracking-wide flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#C7A46C] inline-block" />
                      {badge}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right — Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
              className="relative hidden lg:block"
            >
              {/* Gold frame accent */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-[#C7A46C]/20 rounded-sm" />

              {/* Image container */}
              <div className="relative rounded-sm overflow-hidden aspect-[4/5] bg-[#1a3560]">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Professional business advisory meeting"
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2747]/80 via-transparent to-transparent" />

                {/* Floating stat card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-sm border border-white/15 rounded-sm p-5"
                >
                  <div className="flex items-center justify-between">
                    {[
                      { num: '500+', label: 'Clients' },
                      { num: '15+', label: 'Years' },
                      { num: '20+', label: 'Industries' },
                    ].map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-[#C7A46C] text-2xl font-bold">{stat.num}</div>
                        <div className="text-white/60 text-xs mt-0.5 font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Credibility Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="border-t border-white/10 bg-white/[0.04]"
      >
        <div className="max-w-[1240px] mx-auto px-6 py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {credibility.map((item, i) => (
              <span key={i} className="flex items-center gap-2 text-white/45 text-xs font-medium tracking-[0.12em] uppercase">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-[#C7A46C]/40 hidden sm:inline-block" />}
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
