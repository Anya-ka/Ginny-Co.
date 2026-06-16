import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Circle, MessageSquare } from 'lucide-react';

function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
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

const faqs = [
  {
    q: 'When should I register for GST?',
    a: 'GST registration is mandatory when your aggregate annual turnover exceeds ₹40 lakhs (₹20 lakhs for services). However, certain businesses — like those making inter-state supplies, e-commerce sellers, and casual taxable persons — must register regardless of turnover. We recommend early registration to build credibility with B2B clients.',
  },
  {
    q: 'What documents are required for income tax filing?',
    a: 'For individuals: PAN, Form 16 (for salaried), bank statements, investment proofs (80C, 80D), and property/capital gain documents if applicable. For businesses: balance sheet, P&L statement, bank statements, TDS certificates, and details of all income sources. Our team prepares a personalised checklist for each client.',
  },
  {
    q: 'How long does company registration take?',
    a: 'A Private Limited Company can typically be incorporated in 7–10 working days, subject to MCA processing times and document readiness. We handle the entire process — from name reservation to Certificate of Incorporation — ensuring no delays on our end.',
  },
  {
    q: 'Do you provide virtual consultations?',
    a: 'Yes. We offer virtual consultations via video call and phone for all our services. Our digital-first workflow means you can share documents securely, receive advice, and complete most compliance tasks without visiting our office. We serve clients across India.',
  },
  {
    q: 'What industries do you serve?',
    a: 'We serve a broad range of industries including technology, e-commerce, manufacturing, healthcare, real estate, education, hospitality, NGOs, and professional services. Our team has sector-specific expertise to provide relevant, practical advice — not generic solutions.',
  },
  {
    q: 'What is the difference between a statutory audit and a tax audit?',
    a: 'A statutory audit is mandated by the Companies Act for all companies, focusing on the fairness of financial statements. A tax audit under Section 44AB is required when business turnover exceeds ₹1 crore (or ₹10 crore for digital transactions), verifying compliance with income tax provisions. Both are important but serve distinct regulatory purposes.',
  },
];

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);

  return (
    <AnimatedSection delay={0.05 * index}>
      <div className={`border border-white/[0.06] rounded-2xl overflow-hidden transition-all duration-300 ${open ? 'border-[#C8A46A]/30 shadow-[0_4px_24px_rgba(200,164,106,0.07)]' : 'hover:border-white/[0.12]'}`}>
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-7 py-6 text-left group"
          aria-expanded={open}
        >
          <span className={`text-base font-medium pr-8 transition-colors duration-200 leading-snug ${open ? 'text-[#C8A46A]' : 'text-[#F5F1EA] group-hover:text-[#C8A46A]'}`}>
            {q}
          </span>
          <span className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 ${
            open
              ? 'border-[#C8A46A] bg-[#C8A46A] text-[#070B14]'
              : 'border-white/[0.1] text-[#A7B0C0] group-hover:border-[#C8A46A]/50 group-hover:text-[#C8A46A]'
          }`}>
            {open ? <Minus size={13} /> : <Plus size={13} />}
          </span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <p className="text-[#A7B0C0] text-sm leading-relaxed px-7 pb-7 pr-16">
                {a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 lg:py-32 bg-[#0B1220] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#C8A46A]/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative">
        <div className="grid lg:grid-cols-[380px_1fr] gap-16 lg:gap-24">

          {/* Left sticky panel */}
          <AnimatedSection className="lg:sticky lg:top-28 self-start">
            <div className="flex items-center gap-3 mb-6">
              <Circle size={9} className="text-[#C8A46A]" strokeWidth={3} />
              <span className="text-[#C8A46A] text-[11px] font-bold tracking-[0.2em] uppercase">FAQs</span>
            </div>
            <h2 className="font-heading text-5xl lg:text-6xl text-[#F5F1EA] leading-tight mb-6">
              Common Questions
            </h2>
            <p className="text-[#A7B0C0] text-base leading-relaxed mb-10">
              Can't find your answer here? Reach out and we'll respond within one business day.
            </p>

            {/* Contact prompt card */}
            <div className="bg-[#121B2A] border border-white/[0.07] rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#C8A46A]/10 border border-[#C8A46A]/20 flex items-center justify-center mb-4">
                <MessageSquare size={16} className="text-[#C8A46A]" />
              </div>
              <h4 className="font-heading text-xl text-[#F5F1EA] mb-2">Still have questions?</h4>
              <p className="text-[#A7B0C0] text-sm leading-relaxed mb-5">Our team is happy to walk you through anything specific to your situation.</p>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8A46A] text-[#0B1220] font-bold rounded-full text-sm hover:bg-[#d9b87a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(200,164,106,0.25)]"
              >
                Ask a Question
              </a>
            </div>
          </AnimatedSection>

          {/* Right — FAQ accordions */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
