import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Globe, TrendingUp, CheckCircle2 } from 'lucide-react';
import Hero3D from '../sections/Hero3D';
import { fadeInLeft } from '../animations/FramerVariants';

const Hero = () => {
  const trustItems = [
    { icon: Zap, label: '50+ Projects', color: 'text-amber-400' },
    { icon: TrendingUp, label: '₹10M+ Revenue', color: 'text-orange-400' },
    { icon: Shield, label: '99.9% Uptime', color: 'text-emerald-400' },
    { icon: Globe, label: '40+ Countries', color: 'text-sky-400' },
  ];

  const trustBadges = [
    { label: 'MSME Registered', sub: 'Govt. of India' },
    { label: '4.9/5 Client Rating', sub: '98% Satisfaction' },
    { label: 'Top Rated Agency', sub: 'Upwork Verified' },
    { label: 'Enterprise Grade', sub: 'Security & Compliance' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#030712] text-white pt-20">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-15 pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />

      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 blur-[120px] pointer-events-none rounded-full z-0" />

      {/* Hero Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
            className="z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold tracking-wide uppercase mb-6 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Serverless Architecture — Zero Monthly Hosting
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight text-white">
              Build Your Business Empire with{' '}
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                Zero Monthly Hosting
              </span>
            </h1>
            
            <p className="text-slate-400 text-base sm:text-lg mt-6 max-w-xl leading-relaxed font-normal">
              Launch a complete serverless marketplace with UPI/Razorpay integration, 
              WhatsApp billing, and 100ms load speed. No servers. No databases. 
              No monthly bills. Forever.
            </p>
            
            <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-slate-800/80">
              {trustItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                  <span className="text-xs sm:text-sm font-medium text-slate-300">{item.label}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4 mt-10">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all shadow-lg shadow-orange-500/25 flex items-center gap-2"
              >
                Start Serverless Journey <ArrowRight size={18} />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold text-sm transition-all backdrop-blur-md"
              >
                Explore Services
              </motion.button>
            </div>
          </motion.div>
          
          {/* Right Column: 3D Globe + Floating MSME Badges Grid */}
          <div className="relative w-full min-h-[450px] flex items-center justify-center">
            
            {/* Background 3D Sphere */}
            <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
              <Hero3D />
            </div>

            {/* Foreground MSME & Trust Badges Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 grid grid-cols-2 gap-4 w-full max-w-lg"
            >
              {trustBadges.map((item, index) => (
                <div 
                  key={index} 
                  className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-orange-500/50 transition-all duration-300 backdrop-blur-xl shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 mb-3 opacity-90" />
                    <p className="text-base font-bold text-white tracking-tight">{item.label}</p>
                    <p className="text-xs text-slate-400 mt-1">{item.sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;