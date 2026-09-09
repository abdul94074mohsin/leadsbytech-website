import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Code, ShoppingBag, Bot, Layout, 
  Cloud, ArrowRight, Shield, Zap, TrendingUp, Users
} from 'lucide-react';
import { fadeInUp, staggerContainer } from '../animations/FramerVariants';

const services = [
  {
    icon: Globe,
    title: 'Custom Website Development',
    desc: 'High-performance websites with 100ms load speed, mobile-first, and bilingual support.',
    features: ['Enterprise-grade security', 'SEO-optimized architecture', 'CMS integration', '24/7 monitoring'],
    color: '#3B82F6',
    stat: '100ms Load Speed'
  },
  {
    icon: Code,
    title: 'Custom Software Development',
    desc: 'Tailor-made CRM, ERP, School Management Systems, and SaaS products.',
    features: ['Custom CRM & ERP', 'School systems', 'SaaS development', 'Legacy migration'],
    color: '#8B5CF6',
    stat: '100% Custom Built'
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce Platforms',
    desc: 'Full-featured multi-vendor platforms with UPI/Razorpay integration.',
    features: ['Multi-vendor support', 'UPI/Razorpay/Stripe', 'B2B+B2C pricing', 'Serverless option'],
    color: '#F59E0B',
    stat: '₹0 Monthly Hosting'
  },
  {
    icon: Bot,
    title: 'B2B Automations & APIs',
    desc: 'Data scraping, API integrations, lead generation engines, and workflow automation.',
    features: ['300% lead increase', '85% error reduction', '20+ hrs saved', '60-min response'],
    color: '#34D399',
    stat: '300% Lead Increase'
  },
  {
    icon: Layout,
    title: 'Dynamic Web Applications',
    desc: 'Interactive, data-driven applications with real-time features and dashboards.',
    features: ['Real-time updates', 'Role-based access', 'Advanced reporting', 'Data visualization'],
    color: '#60A5FA',
    stat: 'Real-time Analytics'
  },
  {
    icon: Cloud,
    title: 'Serverless Marketplaces',
    desc: '₹0/month hosting with UPI/Razorpay integration. Control everything from Google Sheets.',
    features: ['WhatsApp invoices', 'Multi-warehouse', '100ms load speed', 'Zero hosting cost'],
    color: '#F472B6',
    stat: 'Zero Infrastructure Cost'
  }
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="badge">What We Build</span>
          <h2 className="section-title mt-4">
            Enterprise Solutions for <span className="gradient-text">Modern Business</span>
          </h2>
          <p className="section-subtitle mt-4">
            We design and develop high-performance digital solutions that help businesses 
            scale, automate, and dominate their markets.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.02, 
                y: -6,
                transition: { duration: 0.3 }
              }}
              className="glass-card rounded-2xl p-8 hover:border-electric/30 transition-all duration-300 group relative overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                   style={{ background: `radial-gradient(circle at 50% 0%, ${service.color}15, transparent 70%)` }} 
              />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                     style={{ background: `${service.color}20` }}
                >
                  <service.icon size={26} style={{ color: service.color }} />
                </div>
                
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/5">
                    {service.stat}
                  </span>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{service.desc}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: service.color }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <motion.button 
                  className="mt-5 text-sm font-medium text-electric hover:text-blue-400 transition-colors flex items-center gap-1.5 group/btn"
                  whileHover={{ x: 6 }}
                >
                  Learn More <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;