import { motion } from 'framer-motion';

export default function Quote() {
  return (
    <section className="bg-[#F3F6FA] px-6 py-12 md:py-20 perspective-[2000px]">
      <div className="max-w-[1000px] mx-auto relative z-10">
        
        {/* Deep ambient glow behind the card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#0b1220]/8 rounded-[32px] blur-[100px] pointer-events-none -z-10" />

        <motion.div
          initial={{ opacity: 0, rotateX: 8, y: 30 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#FFFFFF] rounded-2xl md:rounded-[32px] p-10 md:p-16 text-center overflow-hidden
            border-t border-l border-[#0b1220]/10
            border-b-[6px] border-r-[4px] border-[#0b1220]/20
            shadow-[0_40px_80px_rgba(0,0,0,0.08),inset_0_2px_15px_rgba(11,18,32,0.03)]"
        >
          {/* Subtle Glow Inside */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#0b1220]/5 rounded-full blur-[80px] pointer-events-none" />
          
          {/* Decorative Quote Mark */}
          <span className="block text-[#0b1220]/15 font-heading text-8xl md:text-9xl leading-none absolute top-4 left-6 md:top-8 md:left-12 pointer-events-none select-none">
            "
          </span>

          <blockquote className="relative z-10 max-w-3xl mx-auto">
            <p className="text-[#111827] text-xl md:text-3xl lg:text-4xl leading-relaxed md:leading-tight tracking-tight mb-8 drop-shadow-md">
              "In the complex world of modern business, precision and trust are not just principles—they are the very foundation of enduring success."
            </p>
            <footer className="flex flex-col items-center gap-2">
              <div className="w-10 h-[2px] bg-[#0b1220] mb-2" />
              <cite className="text-[#0b1220] text-sm md:text-base font-bold tracking-[0.2em] uppercase not-italic drop-shadow-sm">
                Ginny & Co.
              </cite>
              <span className="text-[#475569] text-xs md:text-sm tracking-widest uppercase mt-1">
                Founding Philosophy
              </span>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
