import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../animations/FramerVariants';
import { 
  TrendingUp, Clock, Users, DollarSign, 
  BarChart3, Target, Zap, Shield
} from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Al Wholesale — UAE\'s B2B Marketplace',
      client: 'UAE-based F&B industry',
      industry: 'Wholesale Distribution / F&B',
      timeline: '8 Weeks',
      location: 'Dubai, UAE',
      challenge: 'No direct connection between suppliers and retailers. Manual order management. Difficulty in handling wholesale pricing and logistics.',
      solution: 'Built a multi-vendor marketplace with 100+ sellers, AI-powered sales optimization, logistics integration, and automated invoicing.',
      results: '100+ sellers onboarded, \$500k+ annual revenue, 99.9% uptime, 60% reduction in manual order processing time.',
      stats: [
        { icon: Users, label: '100+', desc: 'Sellers Onboarded' },
        { icon: DollarSign, label: '\$500k+', desc: 'Annual Revenue' },
        { icon: Shield, label: '99.9%', desc: 'System Uptime' },
        { icon: Clock, label: '60%', desc: 'Reduction in Manual Processing' }
      ],
      tech: 'React frontend, Google Apps Script backend, Google Sheets as database, WhatsApp automated billing'
    },
    {
      id: 2,
      title: 'LeadGenPro — Apollo-like Lead Database',
      client: 'Dubai-based real estate agency',
      industry: 'Real Estate / Lead Generation',
      timeline: '6 Weeks',
      location: 'Dubai, UAE',
      challenge: 'Manual lead entry from 8+ listing sites. 2-3 days response time. Low lead quality and high bounce rates.',
      solution: 'Automated extraction from 8+ platforms, data cleaning and validation pipeline, custom CRM with lead management.',
      results: '300% lead volume increase, 60-minute response time, 35% higher conversion rate, 20+ hours weekly saved.',
      stats: [
        { icon: TrendingUp, label: '300%', desc: 'Lead Volume Increase' },
        { icon: Clock, label: '60 min', desc: 'Response Time' },
        { icon: BarChart3, label: '35%', desc: 'Higher Conversion' },
        { icon: Users, label: '20+ hrs', desc: 'Weekly Saved' }
      ],
      tech: 'Python web scraping (Scrapy/BeautifulSoup), Django CRM, PostgreSQL, React frontend, AI-powered lead scoring'
    },
    {
      id: 3,
      title: 'Smart School SaaS — Complete School ERP',
      client: 'Growing educational institution',
      industry: 'Education / Administration',
      timeline: '10 Weeks',
      location: 'India',
      challenge: 'Manual student record management across spreadsheets. Error-prone fee collection. Hours spent on attendance tracking daily.',
      solution: 'Complete student management module, automated fee collection, digital attendance system, advanced reporting dashboard.',
      results: '80% administrative efficiency gain, 100% fee collection accuracy, 90% time saved on attendance, 1,000+ students managed.',
      stats: [
        { icon: Target, label: '80%', desc: 'Efficiency Gain' },
        { icon: Shield, label: '100%', desc: 'Fee Collection Accuracy' },
        { icon: Clock, label: '90%', desc: 'Time Saved on Attendance' },
        { icon: Users, label: '1,000+', desc: 'Students Managed' }
      ],
      tech: 'Django backend, PostgreSQL database, React frontend, Redis caching, Docker containerization'
    },
    {
      id: 4,
      title: 'E-Commerce Data Cleaning Pipeline',
      client: 'India-based e-commerce vendor',
      industry: 'E-Commerce / Data Management',
      timeline: '4 Weeks',
      location: 'India',
      challenge: '45% email bounce rate, high unsubscribe rates, spam complaints, duplicate and invalid customer entries.',
      solution: 'Automated data cleaning and validation pipeline. Deduplication, SMTP email validation, data normalization.',
      results: '85% bounce rate reduction, 28% CTR improvement, 45% campaign cost reduction, 3x better performance.',
      stats: [
        { icon: TrendingUp, label: '85%', desc: 'Bounce Rate Reduction' },
        { icon: BarChart3, label: '28%', desc: 'CTR Improvement' },
        { icon: DollarSign, label: '45%', desc: 'Campaign Cost Reduction' },
        { icon: Zap, label: '3x', desc: 'Better Performance' }
      ],
      tech: 'Python data pipeline, PostgreSQL database, SMTP email validation, automated data processing'
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
            <span className="text-electric font-semibold text-sm uppercase tracking-wider">Case Studies</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-2">
              Success Stories — <span className="gradient-text">Real Results</span>
            </h1>
            <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
              See how we've helped businesses transform their operations with custom software, automation, and web solutions.
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
              <p className="text-xs text-gray-400">Projects Completed</p>
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

      {/* Case Studies */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8"
          >
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                variants={fadeInUp}
                className="glass-card rounded-2xl p-8 hover:border-electric/30 transition"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold mb-2 gradient-text">{study.title}</h2>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <span>📍 {study.location}</span>
                      <span>🏢 {study.client}</span>
                      <span>📅 {study.timeline}</span>
                      <span>🏷️ {study.industry}</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-sm text-gray-300">The Challenge</h4>
                        <p className="text-sm text-gray-400">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-300">The Solution</h4>
                        <p className="text-sm text-gray-400">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-300">The Results</h4>
                        <p className="text-sm text-gray-400">{study.results}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-300">Tech/Architecture</h4>
                        <p className="text-sm text-gray-400">{study.tech}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-gray-300 mb-4">Key Stats</h4>
                    <div className="space-y-3">
                      {study.stats.map((stat, i) => (
                        <div key={i} className="glass-card rounded-xl p-3 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-electric/20 flex items-center justify-center flex-shrink-0">
                            <stat.icon className="w-4 h-4 text-electric" />
                          </div>
                          <div>
                            <p className="font-bold text-sm">{stat.label}</p>
                            <p className="text-xs text-gray-400">{stat.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="mt-4 text-sm font-medium text-electric hover:text-blue-400 transition flex items-center gap-1"
                    >
                      View Full Case Study →
                    </motion.button>
                  </div>
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

export default CaseStudiesPage;