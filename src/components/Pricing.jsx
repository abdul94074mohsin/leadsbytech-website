import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Crown, Sparkles } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../animations/FramerVariants';

const plans = [
  {
    name: 'Starter',
    price: '₹35,000',
    currency: 'INR',
    period: 'one-time',
    description: 'Perfect for small businesses and startups entering the digital space.',
    features: [
      'Custom Website or Marketplace',
      'WhatsApp Billing Integration',
      'UPI Payment Integration',
      'Google Sheets Control Panel',
      '100ms Load Speed Optimization',
      'Basic Support & Maintenance'
    ],
    recommended: false,
    color: '#3B82F6',
    badge: null
  },
  {
    name: 'Pro',
    price: '₹60,000',
    currency: 'INR',
    period: 'one-time',
    description: 'The sweet spot for growing businesses ready to scale.',
    features: [
      'Everything in Starter',
      'Multi-Warehouse Tracking',
      'Micro-CRM & Analytics',
      'QR Showroom Mapping',
      'Priority Support',
      '5% UAE VAT / GST Compliance'
    ],
    recommended: true,
    color: '#F59E0B',
    badge: 'Most Popular'
  },
  {
    name: 'Enterprise',
    price: '₹1,25,000',
    currency: 'INR',
    period: 'one-time',
    description: 'For large enterprises and multi-vendor marketplaces.',
    features: [
      'Everything in Pro',
      'Multi-Vendor Support',
      'PDF Catalogue Generator',
      'Thermal Receipt Printing',
      'Supplier Settlement Splitter',
      '24/7 Dedicated Support',
      'Custom Integrations'
    ],
    recommended: false,
    color: '#8B5CF6',
    badge: 'Best Value'
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="orb orb-1" />
        <div className="orb orb-3" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="badge">Pricing</span>
          <h2 className="section-title mt-4">
            Choose Your <span className="gradient-text">Package</span>
          </h2>
          <p className="section-subtitle mt-4">
            Flexible pricing for businesses of all sizes. All packages include ₹0 monthly hosting option.
          </p>
          <div className="inline-block mt-4 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium">
            Serverless — Zero Infrastructure Cost
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-8 items-start"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.02, 
                y: -6,
                transition: { duration: 0.3 }
              }}
              className={`glass-card rounded-3xl p-8 transition-all duration-300 relative ${
                plan.recommended 
                  ? 'border-electric/30 shadow-2xl shadow-electric/10' 
                  : 'hover:border-electric/20'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-electric to-blueLight text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg shadow-electric/30">
                  {plan.badge}
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-5xl font-display font-bold">{plan.price}</span>
                  <span className="text-gray-400 text-sm block mt-1">{plan.period} investment</span>
                </div>
                <p className="text-gray-400 text-sm mt-3">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-electric flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-3.5 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                  plan.recommended
                    ? 'bg-gradient-to-r from-electric to-blueLight hover:shadow-2xl hover:shadow-electric/30 text-white'
                    : 'glass hover:bg-white/10 border border-white/10 text-white'
                }`}
              >
                Get Started <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm mt-10"
        >
          Monthly Retainer: ₹3,000 · Security audits, backups, monitoring, and 2 hours of support
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;