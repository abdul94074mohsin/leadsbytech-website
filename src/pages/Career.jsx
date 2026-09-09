import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../animations/FramerVariants';
import { 
  Code, Layout, Database, PenTool, 
  TrendingUp, Globe, Users, Rocket,
  Award, Coffee, Zap, Gift
} from 'lucide-react';

const CareerPage = () => {
  const positions = [
    {
      icon: Code,
      title: 'Full-Stack Developer',
      type: 'Remote',
      desc: 'Build custom websites, software, and serverless marketplaces for global clients.',
      requirements: ['2+ years experience', 'React + Python/Django preferred'],
      color: '#3B82F6'
    },
    {
      icon: Layout,
      title: 'React / Frontend Developer',
      type: 'Remote',
      desc: 'Build high-performance, mobile-first interfaces for enterprise clients.',
      requirements: ['2+ years experience', 'React + Tailwind CSS preferred'],
      color: '#8B5CF6'
    },
    {
      icon: Database,
      title: 'Python Backend Developer',
      type: 'Remote',
      desc: 'Build custom software, automations, and APIs for global clients.',
      requirements: ['2+ years experience', 'Django + PostgreSQL preferred'],
      color: '#F59E0B'
    },
    {
      icon: PenTool,
      title: 'UI/UX Designer',
      type: 'Remote',
      desc: 'Design beautiful, user-friendly interfaces for websites and software.',
      requirements: ['2+ years experience', 'Figma + Adobe XD preferred'],
      color: '#34D399'
    },
    {
      icon: TrendingUp,
      title: 'Business Development Executive',
      type: 'Remote',
      desc: 'Generate leads, close deals, and grow LeadsByTech\'s client base.',
      requirements: ['2+ years experience in tech sales'],
      color: '#60A5FA'
    }
  ];

  const benefits = [
    { icon: Globe, label: 'Work on Global Projects', desc: 'Build platforms for clients in UAE, India, US, and Europe.' },
    { icon: Users, label: 'Remote-First Culture', desc: 'Work from anywhere. We\'re a distributed team.' },
    { icon: Rocket, label: 'Direct Access to Founder', desc: 'Work directly with Mueezur. No middle management.' },
    { icon: Award, label: 'Growth Opportunities', desc: 'Learn new technologies. Grow your career.' },
    { icon: Gift, label: 'Competitive Compensation', desc: 'Market-competitive salary + performance bonuses.' },
    { icon: Coffee, label: 'Flexible Hours', desc: 'Work when you\'re most productive.' }
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
            <span className="text-electric font-semibold text-sm uppercase tracking-wider">Careers</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-2">
              Join Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
              We're always looking for passionate developers, designers, and problem-solvers 
              to join our remote-first team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
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
              Open <span className="gradient-text">Positions</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {positions.map((position, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -5 }}
                className="glass-card rounded-2xl p-6 hover:border-electric/30 transition group relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                     style={{ background: `radial-gradient(circle at 50% 0%, ${position.color}15, transparent 70%)` }} 
                />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                       style={{ background: `${position.color}20` }}
                  >
                    <position.icon size={24} style={{ color: position.color }} />
                  </div>
                  <h3 className="text-lg font-bold">{position.title}</h3>
                  <span className="text-xs bg-electric/20 text-electric px-3 py-1 rounded-full inline-block mt-1">
                    {position.type}
                  </span>
                  <p className="text-gray-300 text-sm mt-3">{position.desc}</p>
                  <ul className="mt-3 space-y-1">
                    {position.requirements.map((req, i) => (
                      <li key={i} className="text-xs text-gray-400 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full" style={{ background: position.color }} />
                        {req}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 text-sm bg-electric text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
                  >
                    Apply Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
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
              Why Work With <span className="gradient-text">Us</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-card rounded-2xl p-6 text-center hover:border-electric/30 transition"
              >
                <div className="w-12 h-12 rounded-full bg-electric/20 flex items-center justify-center mx-auto mb-3">
                  <benefit.icon className="w-6 h-6 text-electric" />
                </div>
                <h4 className="font-bold text-lg">{benefit.label}</h4>
                <p className="text-gray-400 text-sm mt-1">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center glass-card rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-2xl font-display font-bold mb-4">
            How to <span className="gradient-text">Apply</span>
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            Send your resume and portfolio to:
          </p>
          <div className="bg-white/5 rounded-xl p-4 mb-4">
            <p className="text-electric font-medium">mueez.leadsbytech@gmail.com</p>
            <p className="text-gray-400 text-xs">Subject: Application for [Position Name]</p>
          </div>
          <p className="text-gray-400 text-sm">
            We'll review your application and get back to you within 2 business days.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default CareerPage;