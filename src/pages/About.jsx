import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../animations/FramerVariants';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { 
  Target, Eye, Zap, BarChart3, Lock, Lightbulb,
  Star, Shield, Globe, Users, Award, CheckCircle,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Zap,
      title: 'Precision over Volume',
      desc: 'We write clean, enterprise-grade code meant to scale — not cheap drag-and-drop templates.'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Execution',
      desc: 'Every line of code is optimized for speed, security, and measurable business outcomes.'
    },
    {
      icon: Lock,
      title: 'Absolute Transparency',
      desc: 'From the first wireframe to final deployment, our clients own their architecture.'
    },
    {
      icon: Lightbulb,
      title: 'Relentless Innovation',
      desc: 'We constantly evolve with technology to deliver cutting-edge solutions that stay ahead.'
    }
  ];

  const achievements = [
    { icon: Star, label: '#1 Top Rated Agency', desc: 'Upwork Top Rated with 100% job success score' },
    { icon: Shield, label: 'MSME Govt. of India', desc: 'Udyam Registration verified — trusted consultancy' },
    { icon: Globe, label: '40+ Countries Served', desc: 'UAE, India, US, Europe, and more' },
    { icon: Users, label: '50+ Projects Delivered', desc: 'Enterprise-grade projects with 98% satisfaction' }
  ];

  const testimonials = [
    {
      quote: 'LeadsByTech transformed our entire lead generation process. Our conversion rate increased by 35% within the first month.',
      name: 'Ahmed Al-Mansouri',
      title: 'CEO, Premium Real Estate Dubai'
    },
    {
      quote: 'The data cleaning solution saved us thousands of dollars. Our bounce rate dropped from 45% to 7%.',
      name: 'Neha Sharma',
      title: 'Marketing Director, EcommercePro India'
    },
    {
      quote: 'They delivered our SaaS platform on time, within budget, and with exceptional code quality.',
      name: 'Rajesh Patel',
      title: 'Founder, DataDash Analytics'
    }
  ];

  return (
    <div className="min-h-screen bg-navy text-white overflow-hidden">
      <Navbar />
      
      <main className="relative z-10 pt-20">
        {/* Hero */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-center"
            >
              <span className="badge">About Us</span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mt-4">
                Engineers of <span className="gradient-text">Digital Growth</span>
              </h1>
              <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
                We build high-performance websites, enterprise software, and automation solutions 
                that help businesses scale globally.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="glass-card rounded-3xl p-10 md:p-14"
            >
              <h2 className="text-3xl font-display font-bold mb-6 gradient-text">Our Story</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                LeadsByTech was founded in 2021 with a single mission: to bridge the gap between raw data 
                and actionable business intelligence through cutting-edge software architecture.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With over 5 years of enterprise development experience, we've architected systems that 
                process millions of data points, serve thousands of concurrent users, and generate 
                measurable ROI for B2B enterprises across the globe.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                className="glass-card rounded-3xl p-10"
              >
                <div className="w-14 h-14 rounded-xl bg-electric/20 flex items-center justify-center mb-5">
                  <Target className="w-7 h-7 text-electric" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To architect high-performance, scalable, and secure digital infrastructures that 
                  transform complex business challenges into automated, ROI-driven systems.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                className="glass-card rounded-3xl p-10"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mb-5">
                  <Eye className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To emerge as the most trusted, MSME-recognized technology partner globally, 
                  bridging the gap between raw data and actionable business intelligence.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <span className="badge">Core Values</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-4">
                What Drives <span className="gradient-text">Us</span>
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="glass-card rounded-2xl p-8 hover:border-electric/30 transition group"
                >
                  <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mb-4 group-hover:bg-electric/20 transition">
                    <value.icon className="w-6 h-6 text-electric" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <span className="badge">Achievements</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-4">
                Our <span className="gradient-text">Track Record</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  className="glass-card rounded-2xl p-6 text-center hover:border-electric/20 transition"
                >
                  <div className="w-12 h-12 rounded-full bg-electric/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-electric" />
                  </div>
                  <h4 className="font-bold text-sm">{item.label}</h4>
                  <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="glass-card rounded-3xl p-10 md:p-14"
            >
              <h2 className="text-3xl font-display font-bold mb-8 gradient-text text-center">
                What Our Clients Say
              </h2>
              <div className="space-y-8">
                {testimonials.map((t, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="border-b border-white/5 last:border-0 pb-6 last:pb-0"
                  >
                    <p className="text-gray-300 italic leading-relaxed">"{t.quote}"</p>
                    <p className="text-sm font-medium mt-3 text-electric">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.title}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Founder Note */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="glass-card rounded-3xl p-10 md:p-14 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-3xl font-display font-bold mb-6 gradient-text">Founder's Note</h2>
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric to-blueLight flex items-center justify-center text-white font-bold text-xl">
                    MR
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Mueezur Rehman</h4>
                    <p className="text-sm text-gray-400">Founder & Lead Architect</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I founded LeadsByTech with a single mission: to build high-performance digital 
                  solutions that help businesses scale and automate their operations.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  With over 5 years of enterprise development experience, I've architected websites, 
                  software systems, and automation pipelines that generate measurable ROI for 
                  businesses across the globe.
                </p>
              </div>
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
            className="max-w-3xl mx-auto text-center glass-card rounded-3xl p-10 md:p-14"
          >
            <h2 className="text-3xl font-display font-bold mb-4">
              Ready to Build Something <span className="gradient-text">Great?</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Let's discuss how we can help you scale with enterprise-grade technology.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Start a Conversation <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About; 