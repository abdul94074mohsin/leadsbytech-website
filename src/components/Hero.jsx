import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Globe, TrendingUp, CheckCircle } from 'lucide-react';
import Hero3D from '../sections/Hero3D';
import { fadeInUp, fadeInLeft } from '../animations/FramerVariants';

const Hero = () => {
  const trustItems = [
    { icon: Zap, label: '50+ Projects', color: 'text-electric' },
    { icon: TrendingUp, label: '₹10M+ Revenue', color: 'text-gold' },
    { icon: Shield, label: '99.9% Uptime', color: 'text-green-400' },
    { icon: Globe, label: '40+ Countries', color: 'text-blue-300' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Hero3D />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-transparent to-navy/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 border border-electric/20 text-electric text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
              Serverless Architecture — Zero Monthly Hosting
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight">
              Build Your Business Empire with{' '}
              <span className="gradient-text">Zero Monthly Hosting</span>
            </h1>
            
            <p className="text-gray-300 text-lg mt-6 max-w-lg leading-relaxed">
              Launch a complete serverless marketplace with UPI/Razorpay integration, 
              WhatsApp billing, and 100ms load speed. No servers. No databases. 
              No monthly bills. Forever.
            </p>
            
            {/* Trust Bar */}
            <div className="flex flex-wrap gap-6 mt-8">
              {trustItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                  <span className="text-sm text-gray-300">{item.label}</span>
                </motion.div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Serverless Journey <ArrowRight size={18} />
              </motion.button>
              <motion.button 
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
              </motion.button>
            </div>
          </motion.div>
          
          {/* Right side - Trust badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              { label: 'MSME Registered', sub: 'Govt. of India' },
              { label: '4.9/5 Client Rating', sub: '98% Satisfaction' },
              { label: 'Top Rated Agency', sub: 'Upwork Verified' },
              { label: 'Enterprise Grade', sub: 'Security & Compliance' },
            ].map((item, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 text-center border border-white/5 hover:border-electric/20 transition">
                <p className="text-sm font-bold text-white">{item.label}</p>
                <p className="text-xs text-gray-400 mt-1">{item.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;