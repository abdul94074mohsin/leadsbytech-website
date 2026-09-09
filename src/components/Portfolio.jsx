import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../animations/FramerVariants';
import { ArrowRight, TrendingUp, Users, Clock, Zap } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Al Wholesale',
    category: 'E-Commerce',
    desc: 'UAE\'s leading B2B Marketplace with 100+ sellers',
    stats: '₹500k+ Annual Revenue',
    icon: '🛒',
    color: '#3B82F6',
    details: 'Multi-vendor marketplace with AI-powered sales optimization'
  },
  {
    id: 2,
    title: 'LeadGenPro',
    category: 'Software',
    desc: 'Apollo-like lead database for real estate agencies',
    stats: '300% Lead Increase',
    icon: '📊',
    color: '#8B5CF6',
    details: 'Automated lead extraction from 8+ platforms'
  },
  {
    id: 3,
    title: 'Smart School SaaS',
    category: 'Software',
    desc: 'Complete School ERP for 1,000+ students',
    stats: '80% Efficiency Gain',
    icon: '🏫',
    color: '#F59E0B',
    details: 'Complete student management with automated fee collection'
  },
  {
    id: 4,
    title: 'Eco Choice Group',
    category: 'Websites',
    desc: 'Corporate website for food innovation hub',
    stats: '200% Mobile Traffic Increase',
    icon: '🌿',
    color: '#34D399',
    details: 'Mobile-first, SEO-optimized bilingual website'
  },
  {
    id: 5,
    title: 'All Cars 365',
    category: 'E-Commerce',
    desc: 'Multi-dealer automotive marketplace',
    stats: '50+ Dealers Onboarded',
    icon: '🚗',
    color: '#60A5FA',
    details: 'Multi-dealer platform with payment splitting'
  },
  {
    id: 6,
    title: 'Data Lead Gen',
    category: 'Automation',
    desc: 'Lead generation platform with 95% accuracy',
    stats: '₹400+ per client',
    icon: '📈',
    color: '#F472B6',
    details: 'Automated data extraction from 8+ platforms'
  }
];

const categories = ['All', 'Websites', 'Software', 'E-Commerce', 'Automation'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="badge">Our Work</span>
          <h2 className="section-title mt-4">
            Projects That <span className="gradient-text">Deliver Results</span>
          </h2>
          <p className="section-subtitle mt-4">
            Explore our portfolio of successful projects — from websites and software to e-commerce and automation solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat 
                  ? 'bg-electric text-white shadow-lg shadow-electric/30' 
                  : 'glass hover:bg-white/10 text-gray-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 20 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.03, 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="glass-card rounded-2xl p-6 hover:border-electric/30 transition-all duration-300 group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                     style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}15, transparent 70%)` }} 
                />
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{project.icon}</div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-xs text-electric font-medium">{project.category}</span>
                  <p className="text-gray-300 text-sm mt-2">{project.desc}</p>
                  <p className="text-sm text-gold mt-2 font-semibold">{project.stats}</p>
                  <p className="text-xs text-gray-400 mt-1">{project.details}</p>
                  <motion.button 
                    className="mt-4 text-sm font-medium text-electric hover:text-blue-400 transition-colors flex items-center gap-1.5"
                    whileHover={{ x: 5 }}
                  >
                    View Case Study <ArrowRight size={14} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;