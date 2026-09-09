import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Code, ShoppingCart, Zap, Layers, Server } from 'lucide-react';

const services = [
  {
    title: 'Custom Website Development',
    icon: <Monitor size={32} className="text-electricBlue" />,
    desc: 'High-performance websites that convert visitors into customers. 100ms load speed, mobile-first, bilingual (Arabic/English).',
    features: ['Enterprise-grade security', 'SEO-optimized architecture', 'CMS integration for easy updates', '24/7 monitoring'],
    audience: 'Corporate groups, real estate agencies, educational institutes, healthcare providers.'
  },
  {
    title: 'Custom Software Development',
    icon: <Code size={32} className="text-gold" />,
    desc: 'Tailor-made CRM, ERP, School Management Systems, and SaaS products. Built exactly for your business operations.',
    features: ['Custom CRM & ERP', 'School Management Systems', 'SaaS product development', 'Legacy system migration'],
    audience: 'Businesses needing specialized software that doesn\'t exist in the market.'
  },
  {
    title: 'E-Commerce Platforms',
    icon: <ShoppingCart size={32} className="text-electricBlue" />,
    desc: 'Full-featured multi-vendor platforms with UPI/Razorpay integration, inventory management, and analytics.',
    features: ['Multi-vendor marketplace support', 'UPI / Razorpay / Stripe integration', 'B2B + B2C pricing engine', 'Serverless option: ₹0 monthly hosting'],
    audience: 'Retailers, wholesalers, distributors, and multi-vendor marketplaces.'
  },
  {
    title: 'B2B Automations & APIs',
    icon: <Zap size={32} className="text-gold" />,
    desc: 'Data scraping, API integrations, lead generation engines, and workflow automation.',
    features: ['300% lead increase', '85% error reduction', '20+ hours weekly saved', '60-minute response time'],
    audience: 'Real estate agencies, recruitment firms, marketing agencies.'
  },
  {
    title: 'Dynamic Web Applications',
    icon: <Layers size={32} className="text-electricBlue" />,
    desc: 'Interactive, data-driven applications with real-time features, user dashboards, and analytics.',
    features: ['Real-time updates', 'Role-based access control', 'Advanced reporting engines', 'Data visualization'],
    audience: 'SaaS startups, data-driven businesses, internal tools.'
  },
  {
    title: 'Serverless Marketplaces (NEW)',
    icon: <Server size={32} className="text-gold" />,
    desc: '₹0/month hosting. UPI/Razorpay integrated. Control everything from a Google Sheet on your phone.',
    features: ['WhatsApp invoices with 5% UAE VAT', 'Multi-warehouse tracking', '100ms load speed', 'Zero monthly hosting cost'],
    audience: 'Wholesale distributors, F&B suppliers, building material traders.'
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ServicesSection() {
  return (
    <section className="py-24 bg-darkNavy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-inter font-bold mb-4">Enterprise Solutions for Modern Business</h2>
          <p className="text-xl text-gray-400 font-space max-w-3xl mx-auto">
            We design and develop high-performance digital solutions that help businesses scale, automate, and dominate their markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
              }}
              className="bg-glass-gradient border border-glassBorder backdrop-blur-sm p-8 rounded-2xl hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all duration-300 flex flex-col h-full group"
            >
              <div className="mb-6 bg-navy/50 w-16 h-16 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-inter font-bold mb-3">{service.title}</h3>
              <p className="text-gray-300 font-space mb-6 flex-grow">{service.desc}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-bold text-electricBlue mb-2 uppercase tracking-wider">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feat, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-start">
                      <span className="text-gold mr-2">✓</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4 border-t border-glassBorder mt-auto">
                <p className="text-sm text-gray-400 italic">
                  <span className="font-semibold text-white not-italic">Who It's For:</span> {service.audience}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}