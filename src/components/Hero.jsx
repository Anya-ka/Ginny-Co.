import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Trusted CA Firm',
    description:
      'Strategic accounting, audit and advisory services built for growing businesses.',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1800&q=80',
  },

  {
    title: 'Company Incorporation',
    description:
      'End-to-end business incorporation and compliance support.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1800&q=80',
  },

  {
    title: 'Income Tax &\nInternational Taxation',
    description:
      'Tax planning, filing and cross-border advisory for modern businesses.',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1800&q=80',
  },

  {
    title: 'Accounting & Bookkeeping',
    description:
      'Reliable accounting systems for operational clarity.',
    image:
      'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1800&q=80',
  },

  {
    title: 'GST Advisory',
    description:
      'Registration, compliance, audits and GST optimization.',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1800&q=80',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.9,
    ease: [0.16, 1, 0.3, 1],
  },
};

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handleScroll = (id) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="hero"
      className="
           relative
           h-screen
           overflow-hidden
           bg-[#0B1220]
          "
    >

      {/* RIGHT IMAGE */}

      <div className="absolute right-0 top-0 w-[65%] h-full">

        <AnimatePresence mode="wait">

          <motion.img
            key={active}
            src={services[active].image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full object-cover"
          />

        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-black/45 to-black/75" />

      </div>

      {/* LEFT PANEL */}

      <div
        className="
relative
z-20
w-[42%]
h-full
px-10
md:pl-40
md:pr-12
flex
items-center
bg-gradient-to-r
from-[#06111F]
via-[#0B1D38]
to-[#143A72]
"
      >

        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeUp}
          className="max-w-[750px]"
        >

          <div className="relative h-[140px] md:h-[160px]">
            <AnimatePresence mode="wait">

              <motion.h1
                key={services[active].title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="
absolute
bottom-0
left-0
font-manrope
font-bold
text-[#F5F1EA]
text-6xl
md:text-[72px]
leading-[0.92]
tracking-[-0.04em]
max-w-[600px]
"
              >

                {services[active].title.split('\n').map((line, index) => (
                  <div
                    key={index}
                    className={line === '&' ? 'text-center' : ''}
                  >
                    {line}
                  </div>
                ))}

              </motion.h1>

            </AnimatePresence>
          </div>

          <div
            className="
w-[480px]
h-[6px]
bg-[#D4A75F]
mt-6
mb-8
"
          />

          <motion.p
            key={services[active].description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
text-[#D5DCE6]
leading-10
text-xl
max-w-[600px]
mb-8
"
          >

            {services[active].description}

          </motion.p>

          <div className="flex gap-8">

            <button
              onClick={() => handleScroll('#contact')}
              className="
px-10
py-5
bg-[#D4A75F]
text-[#07101F]
text-lg
font-semibold
rounded-full
shadow-lg
hover:scale-105
hover:bg-[#E0B777]
transition-all
duration-300
"
            >

              <div className="flex items-center gap-3">

                <CalendarDays size={20} />

                LET'S TALK

              </div>

            </button>

            <button
              onClick={() => handleScroll('#services')}
              className="
text-white
text-lg
font-medium
flex
items-center
gap-3
hover:gap-5
transition
"
            >

              Explore Services

              <ArrowRight size={22} />

            </button>

          </div>

        </motion.div>

      </div>

      {/* DIAGONAL */}
      <div
        className="
absolute
left-[38%]
top-0
h-full
w-[180px]
bg-[#17396D]
skew-x-[-10deg]
origin-top
z-10
"
      />

      {/* SERVICE CARDS */}

      <div
        className="
absolute
bottom-10
right-8
flex
gap-2
z-30
"
      >

        {services.map((item, index) => (

          <div
            key={index}
            onMouseEnter={() => setActive(index)}
            className={`
relative
cursor-pointer
overflow-hidden
transition-all
duration-500
h-[150px]

${active === index
                ? 'w-[300px]'
                : 'w-[150px]'
              }
`}
          >

            <img
              src={item.image}
              className="
absolute
inset-0
w-full
h-full
object-cover
"
            />

            <div
              className={`
absolute
inset-0

${active === index
                  ? 'bg-white'
                  : 'bg-black/45'
                }
`}
            />

            <div
              className="
relative
h-full
p-4
flex
items-end
"
            >

              <div
                className={`
text-sm
leading-6
uppercase
font-semibold

${active === index
                    ? 'text-black'
                    : 'text-white'
                  }
`}
              >

                {item.title}

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}