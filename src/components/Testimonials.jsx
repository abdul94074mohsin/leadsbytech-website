import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { fadeInUp } from '../animations/FramerVariants';

const testimonials = [
  {
    id: 1,
    name: 'Ahmed Al-Mansouri',
    title: 'Chief Executive Officer',
    company: 'Premium Real Estate Dubai',
    quote: 'LeadsByTech transformed our entire lead generation process. Our conversion rate increased by 35% within the first month. The quality of leads is exceptional.',
    rating: 5,
    avatar: 'A'
  },
  {
    id: 2,
    name: 'Neha Sharma',
    title: 'Marketing Director',
    company: 'EcommercePro India',
    quote: 'The data cleaning solution saved us thousands of dollars. Our bounce rate dropped from 45% to 7%. The team was responsive, professional, and delivered on time.',
    rating: 5,
    avatar: 'N'
  },
  {
    id: 3,
    name: 'Rajesh Patel',
    title: 'Founder',
    company: 'DataDash Analytics',
    quote: 'They delivered our SaaS platform on time, within budget, and with exceptional code quality. The entire codebase is clean, maintainable, and scales beautifully.',
    rating: 5,
    avatar: 'R'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="badge">Testimonials</span>
          <h2 className="section-title mt-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="section-subtitle mt-4">
            Real feedback from real businesses who trusted us with their digital transformation.
          </p>
        </motion.div>

        <div className="relative glass-card rounded-3xl p-10 md:p-14">
          <div className="absolute top-6 right-6 opacity-10">
            <Quote size={80} className="text-electric" />
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="text-center relative z-10"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-electric to-blueLight flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[currentIndex].avatar}
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-gray-400">
                    {testimonials[currentIndex].title} · {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-3 mt-10">
            <button
              onClick={prevSlide}
              className="p-2.5 rounded-xl glass hover:bg-white/10 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2.5 rounded-xl glass hover:bg-white/10 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-electric w-8' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;