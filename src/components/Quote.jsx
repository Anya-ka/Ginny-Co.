import { motion } from 'framer-motion';

export default function Quote() {
  return (
    <section className="bg-[#0B1220] px-6 py-12 md:py-20 perspective-[2000px]">
      <div className="max-w-[1000px] mx-auto relative z-10">
        
        {/* Deep ambient glow behind the card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#C8A46A]/10 rounded-[32px] blur-[100px] pointer-events-none -z-10" />

        <motion.div
          initial={{ opacity: 0, rotateX: 8, y: 30 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#121B2A] rounded-2xl md:rounded-[32px] p-10 md:p-16 text-center overflow-hidden
            border-t border-l border-white/[0.1]
            border-b-[6px] border-r-[4px] border-[#070B14]
            shadow-[0_40px_80px_rgba(0,0,0,0.5),inset_0_2px_15px_rgba(255,255,255,0.02)]"
        >
          {/* Subtle Glow Inside */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#C8A46A]/5 rounded-full blur-[80px] pointer-events-none" />
          
          {/* Decorative Quote Mark */}
          <span className="block text-[#C8A46A]/20 font-heading text-8xl md:text-9xl leading-none absolute top-4 left-6 md:top-8 md:left-12 pointer-events-none select-none">
            "
          </span>

          <blockquote className="relative z-10 max-w-3xl mx-auto">
            <p className="text-[#F5F1EA] text-xl md:text-3xl lg:text-4xl leading-relaxed md:leading-tight tracking-tight mb-8 drop-shadow-md">
              "In the complex world of modern business, precision and trust are not just principles—they are the very foundation of enduring success."
            </p>
            <footer className="flex flex-col items-center gap-2">
              <div className="w-10 h-[2px] bg-[#C8A46A] mb-2" />
              <cite className="text-[#C8A46A] text-sm md:text-base font-bold tracking-[0.2em] uppercase not-italic drop-shadow-sm">
                Ginny & Co.
              </cite>
              <span className="text-[#A7B0C0] text-xs md:text-sm tracking-widest uppercase mt-1">
                Founding Philosophy
              </span>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
