import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Tag } from 'lucide-react';

function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const posts = [
  {
    category: 'Taxation',
    title: 'Tax Saving Strategies for Businesses in FY 2024–25',
    excerpt:
      'A comprehensive guide to legal tax-saving opportunities — from Section 80C deductions to strategic expense planning — that every business should leverage.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80',
    readTime: '6 min read',
    date: 'Dec 2024',
  },
  {
    category: 'GST',
    title: 'The Complete GST Compliance Guide for Indian Businesses',
    excerpt:
      'From registration thresholds and filing deadlines to reconciliation and annual returns — everything you need to stay compliant under GST.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
    readTime: '8 min read',
    date: 'Nov 2024',
  },
  {
    category: 'Startup Finance',
    title: 'Financial Planning Essentials for Early-Stage Startups',
    excerpt:
      'Before you raise capital or scale your team, get your financial foundations right. We cover cap tables, burn rate, runway, and investor-ready reporting.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80',
    readTime: '7 min read',
    date: 'Oct 2024',
  },
];

export default function Insights() {
  return (
    <section id="insights" className="py-24 lg:py-32 bg-[#F9F7F2] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-[#4a3a6e]/8 blur-[120px] pointer-events-none" />
      <div className="max-w-[1240px] mx-auto px-6 relative">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <span className="inline-flex items-center gap-2 text-[#C8A46A] text-xs font-semibold tracking-[0.18em] uppercase mb-4">
            <span className="w-6 h-px bg-[#C8A46A]" />
            Our Thinking
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-heading text-4xl lg:text-5xl text-[#111827] leading-tight">
              Insights &amp; Resources
            </h2>
            <a
              href="#"
              className="text-[#C8A46A] text-sm font-semibold flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200"
            >
              View all articles <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="w-12 h-px bg-[#C8A46A] mt-6" />
        </AnimatedSection>

        {/* Blog cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <AnimatedSection key={post.title} delay={0.1 * i}>
              <article className="group bg-[#FFFFFF] rounded-[var(--radius-2xl)] overflow-hidden border border-black/[0.06] hover:border-[#C8A46A]/18 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full">
                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden bg-[#ECE7E0]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-[#C8A46A] text-xs font-semibold tracking-wide uppercase">
                      <Tag size={11} />
                      {post.category}
                    </span>
                    <span className="text-[#111827]/20">·</span>
                    <span className="text-[#475569]/90 text-xs">{post.readTime}</span>
                  </div>

                  <h3 className="font-heading text-xl text-[#111827] leading-snug mb-3 flex-1">
                    {post.title}
                  </h3>
                  <p className="text-[#475569]/90 text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-5 border-t border-black/[0.06]">
                    <span className="text-[#111827]/20 text-xs">{post.date}</span>
                    <span className="inline-flex items-center gap-1.5 text-[#C8A46A] text-xs font-semibold group-hover:gap-2.5 transition-all duration-200">
                      Read More <ArrowUpRight size={13} />
                    </span>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
