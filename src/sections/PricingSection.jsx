import React from 'react';
import { motion } from 'framer-motion';

const pricingTiers = [
  {
    name: 'Starter',
    price: '₹35,000 / AED 4,000 / $2,500',
    target: 'Small businesses, startups, local retailers',
    features: ['Custom Website or Marketplace', 'WhatsApp Billing', 'UPI Integration', 'Google Sheets Control', '100ms Load Speed', 'Basic Support'],
    recommended: false
  },
  {
    name: 'Pro',
    price: '₹60,000 / AED 7,000 / $4,000',
    target: 'Growing businesses, wholesalers, e-commerce brands',
    features: ['Everything in Starter', 'Multi-Warehouse Tracking', 'Micro-CRM & Analytics', 'QR Showroom Mapping', 'Priority Support', '5% UAE VAT / GST Compliance'],
    recommended: true
  },
  {
    name: 'Enterprise',
    price: '₹1,25,000 / AED 15,000 / $8,000',
    target: 'Large enterprises, multi-vendor marketplaces, distributors',
    features: ['Everything in Pro', 'Multi-Vendor Support', 'PDF Catalogue Generator', 'Thermal Receipt Printing', 'Supplier Settlement Splitter', '24/7 Dedicated Support', 'Custom Integrations'],
    recommended: false
  }
];

export default function PricingSection() {
  return (
    <section className="py-24 bg-darkNavy relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-inter font-bold text-white mb-4">Choose Your Package</h2>
          <p className="text-xl text-gray-400 font-space">Flexible pricing for businesses of all sizes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl flex flex-col h-full bg-navy border ${
                tier.recommended 
                ? 'border-electricBlue shadow-[0_0_30px_rgba(59,130,246,0.2)] scale-105 z-10' 
                : 'border-glassBorder hover:border-gray-500'
              } transition-all duration-300`}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-electricBlue text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-inter font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-sm text-gray-400 font-space mb-6 h-10">Best for: {tier.target}</p>
              
              <div className="mb-8">
                <span className="text-2xl font-bold text-gold">{tier.price}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <span className="text-electricBlue mr-3 mt-1">✓</span> {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-lg font-bold transition-all mt-auto ${
                tier.recommended
                ? 'bg-electricBlue text-white hover:bg-blue-600'
                : 'bg-glass-gradient border border-glassBorder text-white hover:bg-white/10'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="max-w-2xl mx-auto p-6 bg-glass-gradient border border-glassBorder rounded-xl text-center"
        >
          <h4 className="text-lg font-bold text-white mb-2">Monthly Retainer (All Packages)</h4>
          <p className="text-gold font-bold text-xl mb-2">₹3,000 | AED 300 | $50</p>
          <p className="text-sm text-gray-400 font-space">(Security audits, backups, monitoring, 2 hours support)</p>
        </motion.div>
      </div>
    </section>
  );
}