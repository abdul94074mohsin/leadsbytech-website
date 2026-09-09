import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../animations/FramerVariants';
import { 
  ShoppingBag, 
  Database, 
  GraduationCap, 
  Globe, 
  Car, 
  TrendingUp, 
  ArrowRight 
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Al Wholesale',
    category: 'E-Commerce',
    desc: "UAE's leading B2B Marketplace with 100+ sellers",
    stats: '₹500k+ Annual Revenue',
    icon: ShoppingBag,
    color: '#3B82F6',
    details: 'Multi-vendor marketplace with AI-powered sales optimization'
  },
  {
    id: 2,
    title: 'LeadGenPro',
    category: 'Software',
    desc: 'Apollo-like lead database for real estate agencies',
    stats: '300% Lead Increase',
    icon: Database,
    color: '#8B5CF6',
    details: 'Automated lead extraction from 8+ platforms'
  },
  {
    id: 3,
    title: 'Smart School SaaS',
    category: 'Software',
    desc: 'Complete School ERP for 1,000+ students',
    stats: '80% Efficiency Gain',
    icon: GraduationCap,
    color: '#F59E0B',
    details: 'Complete student management with automated fee collection'
  },
  {
    id: 4,
    title: 'Eco Choice Group',
    category: 'Websites',
    desc: 'Corporate website for food innovation hub',
    stats: '200% Mobile Traffic Increase',
    icon: Globe,
    color: '#34D399',
    details: 'Mobile-first, SEO-optimized bilingual website'
  },
  {
    id: 5,
    title: 'All Cars 365',
    category: 'E-Commerce',
    desc: 'Multi-dealer automotive marketplace',
    stats: '50+ Dealers Onboarded',
    icon: Car,
    color: '#60A5FA',
    details: 'Multi-dealer platform with payment splitting'
  },
  {
    id: 6,
    title: 'Data Lead Gen',
    category: 'Automation',
    desc: 'Lead generation platform with 95% accuracy',
    stats: '₹400+ per client',
    icon: TrendingUp,
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
    <section id="portfolio" className="py-24 px-4 bg-[#0B0F17]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
            Projects That <span className="text-blue-500">Deliver Results</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-2xl mx-auto">
            Explore our portfolio of successful projects — from websites and software to e-commerce and automation solutions.
          </p>
        </motion.div>

        {/* Fixed Dark Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 border border-blue-500' 
                    : 'bg-[#182238] text-gray-300 border border-slate-700/60 hover:bg-slate-800 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            );
          })}
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
            {filteredProjects.map((project) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-[#131B2E] border border-gray-800/80 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col justify-between"
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}, transparent 70%)` }} 
                  />
                  <div className="relative z-10">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300"
                      style={{ backgroundColor: `${project.color}18`, color: project.color }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className="text-xs text-blue-400 font-medium">{project.category}</span>
                    <p className="text-gray-300 text-sm mt-2">{project.desc}</p>
                    <p className="text-sm text-amber-400 mt-2 font-semibold">{project.stats}</p>
                    <p className="text-xs text-gray-400 mt-1">{project.details}</p>
                  </div>

                  <motion.button 
                    className="mt-6 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1.5 relative z-10"
                    whileHover={{ x: 5 }}
                  >
                    View Case Study <ArrowRight size={14} />
                  </motion.button>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;