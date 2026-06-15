import { motion } from 'framer-motion';
import { CalendarDays, ArrowRight } from 'lucide-react';
import img from './img.png';

export default function Hero() {
  const handleScroll = (id) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="hero"
      className="relative w-full bg-[#0B1220] pt-24 pb-20 md:pb-28"
    >
      {/* ROTHSCHILD-STYLE INSET VISUAL FRAME */}
      <div className="max-w-[1440px] mx-auto px-8 relative z-0">
        <div className="relative h-[65vh] md:h-[80vh] w-full overflow-hidden">
          <img
            src="https://gustavconcept.com/cdn/shop/articles/QIC_SYD_Unispace_QIC_resized_2_copy.jpg?v=1691409476"
            alt="Financial Consulting and Accounting"
            className="w-full h-full object-cover"
          />
          {/* Soft overlay gradient for premium tone */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1220]/40 via-black/10 to-[#0B1220]/20" />
        </div>
      </div>

      {/* ROTHSCHILD-STYLE OVERLAPPING TEXT CARD (Shifted to the right) */}
      <div className="absolute bottom-15 left-0 md:left-12 lg:left-20 w-full md:w-[60%] lg:w-[50%] z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#F9F8F6] shadow-[0_20px_50px_rgba(0,0,0,0.15)] w-full pt-8 pb-10 px-6 md:pl-16 md:pr-24 rothschild-clip"
        >
          {/* Heading */}
          <h1
            className="font-bold text-[#0B1220] text-2xl md:text-[36px] lg:text-[40px] leading-[1.25] tracking-tight mb-5"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            A young boutique CA firm helping businesses build, grow and succeed.
          </h1>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-6 pt-5 border-t border-[#0B1220]/10">
            <button
              onClick={() => handleScroll('#contact')}
              className="px-7 py-3 bg-[#0B1220] text-[#F9F8F6] text-[14px] font-semibold tracking-wide hover:bg-[#C8A46A] hover:text-[#0B1220] transition-colors duration-300 shadow-md"
            >
              <div className="flex items-center gap-3">
                <CalendarDays size={16} />
                LET'S TALK
              </div>
            </button>

            <button
              onClick={() => handleScroll('#services')}
              className="text-[#0B1220] font-bold text-[14px] flex items-center gap-2 hover:gap-4 transition-all duration-300 group"
            >
              Explore Services
              <ArrowRight size={16} className="text-[#C8A46A] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

    </section>
  );
}