import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../animations/FramerVariants';
import { 
  Globe, Code, ShoppingBag, Bot, Layout, 
  Cloud, Database, CreditCard, MapPin, 
  MessageSquare, BarChart3, Headphones
} from 'lucide-react';

const ServicesPage = () => {
  const coreServices = [
    {
      icon: Globe,
      title: 'Custom Website Development',
      desc: 'High-performance websites that convert visitors into customers. 100ms load speed, mobile-first, bilingual support.',
      features: ['Enterprise-grade security', 'SEO-optimized architecture', 'CMS integration', '24/7 monitoring'],
      color: '#3B82F6'
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      desc: 'Tailor-made CRM, ERP, School Management Systems, and SaaS products built exactly for your business.',
      features: ['Custom CRM & ERP', 'School Management Systems', 'SaaS product development', 'Legacy migration'],
      color: '#8B5CF6'
    },
    {
      icon: ShoppingBag,
      title: 'E-Commerce Platforms',
      desc: 'Full-featured multi-vendor platforms with UPI/Razorpay integration and inventory management.',
      features: ['Multi-vendor support', 'UPI/Razorpay/Stripe', 'B2B+B2C pricing', 'Serverless option'],
      color: '#F59E0B'
    },
    {
      icon: Bot,
      title: 'B2B Automations & APIs',
      desc: 'Data scraping, API integrations, lead generation engines, and workflow automation.',
      features: ['300% lead increase', '85% error reduction', '20+ hrs saved', '60-min response'],
      color: '#34D399'
    },
    {
      icon: Layout,
      title: 'Dynamic Web Applications',
      desc: 'Interactive, data-driven applications with real-time features, dashboards, and analytics.',
      features: ['Real-time updates', 'Role-based access', 'Advanced reporting', 'Data visualization'],
      color: '#60A5FA'
    },
    {
      icon: Headphones,
      title: 'Tech Consulting & Architecture',
      desc: 'Strategic technology consulting, system architecture design, and digital transformation guidance.',
      features: ['Digital transformation', 'Scalability planning', 'Security audits', 'Compliance checks'],
      color: '#F472B6'
    }
  ];

  const serverlessServices = [
    {
      icon: Cloud,
      title: 'Zero-Cost Serverless Marketplace',
      desc: 'Complete headless e-commerce platform with ₹0 hosting — lifetime.',
      features: ['B2B+B2C hybrid', 'WhatsApp invoicing', 'Google Sheets control', 'Multi-warehouse'],
      color: '#3B82F6',
      badge: 'FLAGSHIP'
    },
    {
      icon: Globe,
      title: 'Headless B2B+B2C Engine',
      desc: 'One website that automatically switches between retail and wholesale pricing.',
      features: ['Auto price switching', 'No separate sites', 'Quantity-based pricing'],
      color: '#8B5CF6'
    },
    {
      icon: CreditCard,
      title: 'UPI/Razorpay Integration',
      desc: 'Complete payment system — no monthly gateway fees.',
      features: ['UPI QR generation', 'Razorpay links', 'Automated confirmation'],
      color: '#F59E0B'
    },
    {
      icon: MapPin,
      title: 'Multi-Warehouse Inventory Router',
      desc: 'Real-time stock tracking across multiple warehouses and retail outlets.',
      features: ['Unlimited warehouses', 'Real-time visibility', 'Low stock alerts'],
      color: '#34D399'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Billing & VAT/GST',
      desc: 'Automated invoice generation with tax compliance sent to WhatsApp.',
      features: ['5% UAE VAT', 'India GST', 'Unique invoice IDs', 'Automated tax calc'],
      color: '#60A5FA'
    },
    {
      icon: BarChart3,
      title: 'Serverless Micro-CRM',
      desc: 'Real-time dashboard showing top customers, order frequency, and lifetime value.',
      features: ['Customer tracking', 'Lifetime value calc', 'Revenue analytics', 'No manual reporting'],
      color: '#F472B6'
    }
  ];

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
            <span className="text-electric font-semibold text-sm uppercase tracking-wider">Services</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-2">
              Enterprise Solutions for <span className="gradient-text">Modern Business</span>
            </h1>
            <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
              We design and develop high-performance digital solutions that help businesses 
              scale, automate, and dominate their markets — with ₹0/month hosting options available.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Core Digital <span className="gradient-text">Services</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -5 }}
                className="glass-card rounded-2xl p-6 hover:border-electric/30 transition group relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                     style={{ background: `radial-gradient(circle at 50% 0%, ${service.color}15, transparent 70%)` }} 
                />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                       style={{ background: `${service.color}20` }}
                  >
                    <service.icon size={24} style={{ color: service.color }} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{service.desc}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-xs text-gray-400 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full" style={{ background: service.color }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Serverless Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">New</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Serverless E-Commerce <span className="gradient-text">Services</span>
            </h2>
            <p className="text-gray-300 mt-2">₹0 hosting — forever</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {serverlessServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -5 }}
                className="glass-card rounded-2xl p-6 hover:border-gold/30 transition group relative overflow-hidden"
              >
                {service.badge && (
                  <div className="absolute top-3 right-3 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                    {service.badge}
                  </div>
                )}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                       style={{ background: `${service.color}20` }}
                  >
                    <service.icon size={24} style={{ color: service.color }} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{service.desc}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-xs text-gray-400 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full" style={{ background: service.color }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Summary */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="glass-card rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-center mb-6 gradient-text">Pricing Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span>Custom Website Development</span>
                <span className="text-electric font-semibold">₹35,000 - 60,000</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span>Custom Software Development</span>
                <span className="text-electric font-semibold">₹80,000 - 1,50,000</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span>E-Commerce Platforms</span>
                <span className="text-electric font-semibold">₹1,00,000 - 2,50,000</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span>B2B Automations</span>
                <span className="text-electric font-semibold">₹50,000 - 1,00,000</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span>Dynamic Web Applications</span>
                <span className="text-electric font-semibold">₹70,000 - 1,50,000</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-gold font-bold">Serverless Starter</span>
                <span className="text-gold font-bold">₹35,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gold font-bold">Serverless Pro</span>
                <span className="text-gold font-bold">₹60,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gold font-bold">Serverless Enterprise</span>
                <span className="text-gold font-bold">₹1,25,000</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;