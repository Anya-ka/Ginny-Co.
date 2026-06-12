import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Clock, Calendar } from 'lucide-react';

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

export default function Map() {
  return (
    <section id="map" className="py-28 bg-[#f8f9fb]">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-14">
          <span className="inline-flex items-center gap-2 text-[#C7A46C] text-xs font-semibold tracking-[0.18em] uppercase mb-4">
            <span className="w-6 h-px bg-[#C7A46C]" />
            Location
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl text-[#0F2747] leading-tight">
            Visit Our Office
          </h2>
          <div className="w-12 h-px bg-[#C7A46C] mt-6" />
        </AnimatedSection>

        <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">
          {/* Map embed */}
          <AnimatedSection delay={0.1}>
            <div className="relative rounded-sm overflow-hidden bg-gray-200 h-[420px] border border-gray-100 shadow-sm">
              <iframe
                title="Ginny & Co. Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0740905372!2d77.32004731508394!3d28.62722298241853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sSector%2018%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-[1.1]"
              />
              {/* Map overlay pin card */}
              <div className="absolute bottom-5 left-5 bg-white rounded-sm px-4 py-3 shadow-md flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-[#C7A46C] flex items-center justify-center">
                  <MapPin size={15} className="text-white" />
                </div>
                <div>
                  <div className="text-[#0F2747] font-semibold text-sm">Ginny &amp; Co.</div>
                  <div className="text-gray-400 text-xs">Sector 18, Noida</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Info card */}
          <AnimatedSection delay={0.2}>
            <div className="bg-[#0F2747] rounded-sm p-8 space-y-6">
              <div>
                <div className="w-8 h-0.5 bg-[#C7A46C] mb-4" />
                <h3 className="font-playfair text-2xl text-white mb-1">Ginny &amp; Co.</h3>
                <p className="text-white/40 text-sm">Chartered Accountants</p>
              </div>

              <div className="space-y-5 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 shrink-0 rounded-sm bg-white/10 flex items-center justify-center">
                    <MapPin size={15} className="text-[#C7A46C]" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs font-semibold tracking-wider uppercase mb-1">Address</div>
                    <div className="text-white text-sm leading-relaxed">
                      12, Finance Park, Sector 18<br />
                      Noida, Uttar Pradesh – 201301
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 shrink-0 rounded-sm bg-white/10 flex items-center justify-center">
                    <Clock size={15} className="text-[#C7A46C]" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs font-semibold tracking-wider uppercase mb-1">Office Hours</div>
                    <div className="text-white text-sm leading-relaxed">
                      Monday – Friday: 9 AM – 7 PM<br />
                      Saturday: 10 AM – 4 PM
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 shrink-0 rounded-sm bg-white/10 flex items-center justify-center">
                    <Calendar size={15} className="text-[#C7A46C]" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs font-semibold tracking-wider uppercase mb-1">Consultation</div>
                    <div className="text-white text-sm leading-relaxed">
                      By appointment only<br />
                      In-person &amp; Virtual available
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block mt-2 text-center py-3 bg-[#C7A46C] text-white text-sm font-semibold rounded-sm hover:bg-[#b8912e] transition-colors"
              >
                Book an Appointment
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
