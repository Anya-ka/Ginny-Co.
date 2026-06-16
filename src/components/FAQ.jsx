import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

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
    <AnimatedSection delay={0.06 * index}>
      <div className={`border-b border-white/[0.06] last:border-0`}>
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-5 text-left group"
          aria-expanded={open}
        >
          <span className={`text-base font-medium pr-8 transition-colors duration-200 ${open ? 'text-[#C8A46A]' : 'text-[#F5F1EA] group-hover:text-[#C8A46A]'}`}>
            {q}
          </span>
          <span className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 ${
            open
              ? 'border-[#C8A46A] bg-[#C8A46A] text-[#070B14] shadow-md shadow-[#C8A46A]/30'
              : 'border-white/[0.06] text-[#A7B0C0]/90 group-hover:border-[#C8A46A] group-hover:text-[#C8A46A]'
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
              <p className="text-[#A7B0C0]/90 text-sm leading-relaxed pb-6 pr-12">
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
    <section className="py-24 lg:py-32 bg-[#121B2A]">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid lg:grid-cols-[340px_1fr] gap-20">
          {/* Left */}
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 text-[#C8A46A] text-xs font-semibold tracking-[0.18em] uppercase mb-4">
              <span className="w-6 h-px bg-[#C8A46A]" />
              FAQs
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl text-[#F5F1EA] leading-tight mb-6">
              Common Questions
            </h2>
            <p className="text-[#A7B0C0]/90 text-sm leading-relaxed mb-8">
              Can't find your answer here? Reach out and we'll respond within one business day.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-[#C8A46A] text-sm font-semibold border-b border-[#C8A46A]/30 pb-0.5 hover:border-[#C8A46A] transition-colors"
            >
              Ask a question →
            </a>
          </AnimatedSection>

          {/* Right */}
          <div className="divide-y divide-white/8">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
