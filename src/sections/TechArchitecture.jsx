import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, ServerOff, Calculator, Map, MessageCircle } from 'lucide-react';

const features = [
  {
    title: '100ms Load Speed',
    desc: 'Our React-based frontend loads in under 100ms faster than 95% of websites. Your customers won\'t wait.',
    icon: <Zap size={24} className="text-gold" />
  },
  {
    title: '99.9% System Uptime',
    desc: 'Enterprise-grade reliability. Your platform stays online when you need it most.',
    icon: <ShieldCheck size={24} className="text-electricBlue" />
  },
  {
    title: '₹0/AED 0/$0 Monthly Hosting (Serverless)',
    desc: 'No servers. No databases. No monthly bills. Your infrastructure cost is zero forever.',
    icon: <ServerOff size={24} className="text-gold" />
  },
  {
    title: '5% UAE VAT & GST Automated',
    desc: 'Automatic tax calculation and compliance for UAE and Indian businesses.',
    icon: <Calculator size={24} className="text-electricBlue" />
  },
  {
    title: 'Multi-Warehouse Tracking',
    desc: 'Real-time stock visibility across unlimited warehouses all from one dashboard.',
    icon: <Map size={24} className="text-gold" />
  },
  {
    title: 'WhatsApp Automated Invoicing',
    desc: 'Invoices with tax compliance sent directly to your customer\'s WhatsApp.',
    icon: <MessageCircle size={24} className="text-electricBlue" />
  }
];

export default function TechArchitecture() {
  return (
    <section className="py-24 bg-navy relative z-10 border-t border-glassBorder">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-inter font-bold text-white mb-4">The Architecture That Powers Your Success</h2>
          <p className="text-xl text-gray-400 font-space">Battle-tested infrastructure that delivers speed, security, and scalability.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-glass-gradient border border-glassBorder rounded-xl p-6 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:border-electricBlue transition-all"
            >
              <div className="mb-4 bg-darkNavy w-12 h-12 rounded-lg flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 font-space">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}