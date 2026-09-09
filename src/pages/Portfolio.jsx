import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../animations/FramerVariants';
import { 
  Globe, Code, ShoppingBag, Bot, Layout, 
  TrendingUp, Users, DollarSign, Clock, Zap
} from 'lucide-react';

const PortfolioPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Al Wholesale',
      category: 'E-Commerce',
      desc: 'UAE\'s B2B Marketplace with 100+ sellers',
      stats: '₹500k+ Annual Revenue',
      image: '🛒',
      color: '#3B82F6',
      details: 'Multi-vendor marketplace with AI-powered sales optimization'
    },
    {
      id: 2,
      title: 'LeadGenPro',
      category: 'Software',
      desc: 'Apollo-like lead database for real estate',
      stats: '300% Lead Increase',
      image: '📊',
      color: '#8B5CF6',
      details: 'Automated lead extraction from 8+ platforms'
    },
    {
      id: 3,
      title: 'Smart School SaaS',
      category: 'Software',
      desc: 'Complete School ERP for 1,000+ students',
      stats: '80% Efficiency Gain',
      image: '🏫',
      color: '#F59E0B',
      details: 'Complete student management with automated fee collection'
    },
    {
      id: 4,
      title: 'Eco Choice Group',
      category: 'Websites',
      desc: 'Corporate website for food innovation hub',
      stats: '200% Mobile Traffic Increase',
      image: '🌿',
      color: '#34D399',
      details: 'Mobile-first, SEO-optimized bilingual website'
    },
    {
      id: 5,
      title: 'All Cars 365',
      category: 'E-Commerce',
      desc: 'Multi-dealer automotive marketplace',
      stats: '50+ Dealers Onboarded',
      image: '🚗',
      color: '#60A5FA',
      details: 'Multi-dealer platform with payment splitting'
    },
    {
      id: 6,
      title: 'Data Lead Gen',
      category: 'Automation',
      desc: 'Lead generation platform with 95% accuracy',
      stats: '₹400+ per client',
      image: '📈',
      color: '#F472B6',
      details: 'Automated data extraction from 8+ platforms'
    },
    {
      id: 7,
      title: 'The IT Frnd',
      category: 'Websites',
      desc: 'IT services platform with service booking',
      stats: '100% Online Booking',
      image: '💻',
      color: '#3B82F6',
      details: 'Complete IT services platform with client portal'
    },
    {
      id: 8,
      title: 'Mahira Tax Solution',
      category: 'Websites',
      desc: 'Tax services website with appointment booking',
      stats: '200% Appointment Increase',
      image: '📋',
      color: '#8B5CF6',
      details: 'Tax and accounting services with online booking'
    },
    {
      id: 9,
      title: 'Shubham Computer Indore',
      category: 'E-Commerce',
      desc: 'E-commerce landing page for laptop sales',
      stats: '300+ Orders via WhatsApp',
      image: '💻',
      color: '#F59E0B',
      details: 'WhatsApp-integrated e-commerce landing page'
    }
  ];

  const categories = ['All', 'Websites', 'Software', 'E-Commerce', 'Automation'];

  return (
    <div className="min-h-screen bg-navy text-white pt-20">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center"
          >
            <span className="text-electric font-semibold text-sm uppercase tracking-wider">Portfolio</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-2">
              Our Work — Projects That <span className="gradient-text">Deliver Results</span>
            </h1>
            <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
              Explore our portfolio of successful projects — from websites and software to e-commerce and automation solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="px-4 -mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-card rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-electric">50+</p>
              <p className="text-xs text-gray-400">Projects Delivered</p>
            </div>
            <div className="glass-card rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-gold">98%</p>
              <p className="text-xs text-gray-400">Client Satisfaction</p>
            </div>
            <div className="glass-card rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-blueLight">40+</p>
              <p className="text-xs text-gray-400">Industries Served</p>
            </div>
            <div className="glass-card rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-green-400">₹10M+</p>
              <p className="text-xs text-gray-400">Client Revenue Generated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -8 }}
                className="glass-card rounded-2xl p-6 hover:border-electric/30 transition group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                     style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}15, transparent 70%)` }} 
                />
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{project.image}</div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-xs text-electric font-medium">{project.category}</span>
                  <p className="text-gray-300 text-sm mt-2">{project.desc}</p>
                  <p className="text-xs text-gold mt-2 font-semibold">{project.stats}</p>
                  <p className="text-xs text-gray-400 mt-1">{project.details}</p>
                  <motion.button 
                    className="mt-3 text-sm font-medium text-electric hover:text-blue-400 transition-colors flex items-center gap-1"
                    whileHover={{ x: 5 }}
                  >
                    View Case Study →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center glass-card rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-display font-bold mb-4">
            Ready to Achieve Similar <span className="gradient-text">Results?</span>
          </h2>
          <p className="text-gray-300 mb-6">
            Let's discuss how we can help you grow, automate, and scale your business.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default PortfolioPage;