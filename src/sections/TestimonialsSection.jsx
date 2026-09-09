import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "LeadsByTech transformed our entire lead generation process. Our conversion rate increased by 35% within the first month. The quality of leads is exceptional.",
    name: "Ahmed Al-Mansouri",
    role: "CEO, Premium Real Estate Dubai",
    stats: "300% Lead Increase"
  },
  {
    quote: "The data cleaning solution saved us thousands of dollars. Our bounce rate dropped from 45% to 7%. The team was responsive, professional, and delivered on time.",
    name: "Neha Sharma",
    role: "Marketing Director, EcommercePro India",
    stats: "85% Bounce Reduction"
  },
  {
    quote: "They delivered our SaaS platform on time, within budget, and with exceptional code quality. The entire codebase is clean, maintainable, and scales beautifully.",
    name: "Rajesh Patel",
    role: "Founder, DataDash Analytics",
    stats: "$500k+ Annual Revenue"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-lightBg dark:bg-navy transition-colors relative overflow-hidden">
      <div className="absolute inset-0 bg-electricBlue/5 dark:bg-electricBlue/10 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-inter font-extrabold text-gray-900 dark:text-white mb-4">Client Success</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-space">See how we've helped businesses transform their operations.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="glass-panel p-10 md:p-14 rounded-3xl text-center relative glow-on-hover cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.x > 50) prev();
                else if (offset.x < -50) next();
              }}
            >
              <Quote size={60} className="mx-auto text-electricBlue/20 dark:text-gold/20 mb-6" />
              <p className="text-xl md:text-3xl text-gray-800 dark:text-gray-200 font-space font-medium leading-relaxed mb-10">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="inline-block bg-electricBlue text-white px-6 py-2 rounded-full font-bold text-sm mb-6 shadow-lg">
                {testimonials[currentIndex].stats}
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-gray-900 dark:text-white">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-600 dark:text-gray-400 font-space">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center gap-6 mt-10">
            <button onClick={prev} className="p-4 rounded-full bg-white dark:bg-darkNavy border border-gray-200 dark:border-glassBorder text-gray-900 dark:text-white hover:scale-110 hover:border-electricBlue transition-all shadow-lg">
              <ChevronLeft size={24} />
            </button>
            <button onClick={next} className="p-4 rounded-full bg-white dark:bg-darkNavy border border-gray-200 dark:border-glassBorder text-gray-900 dark:text-white hover:scale-110 hover:border-electricBlue transition-all shadow-lg">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}