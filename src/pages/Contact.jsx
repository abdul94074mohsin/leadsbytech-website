import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/FramerVariants';
import { 
  Send, Mail, Phone, MapPin, Clock, 
  MessageSquare, Video, Calendar, CheckCircle,
  Shield, Award, Zap
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you! We\'ll get back to you within 2 hours.');
      setFormData({ name: '', email: '', service: '', message: '' });
    }, 1500);
  };

  const trustSignals = [
    { icon: Clock, label: '2 Hrs Average Response Time' },
    { icon: Award, label: '98% Client Satisfaction' },
    { icon: Shield, label: '24/7 Project Support' }
  ];

  return (
    <div className="min-h-screen bg-navy text-white pt-20">
      {/* Hero */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center"
          >
            <span className="text-electric font-semibold text-sm uppercase tracking-wider">Contact</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-2">
              Let's Build Something <span className="gradient-text">Great</span>
            </h1>
            <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can help you scale with enterprise-grade technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {trustSignals.map((signal, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                className="glass-card rounded-xl p-4 text-center"
              >
                <signal.icon className="w-6 h-6 text-electric mx-auto mb-2" />
                <span className="text-sm font-medium">{signal.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-electric focus:outline-none transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-electric focus:outline-none transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">What are you looking for?</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-electric focus:outline-none transition"
                    >
                      <option value="">Select a service</option>
                      <option value="website">Website Development</option>
                      <option value="software">Custom Software</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="automation">B2B Automations</option>
                      <option value="serverless">Serverless Marketplace</option>
                      <option value="consulting">Tech Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-electric focus:outline-none transition"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="w-full btn-primary justify-center"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send size={18} />
                  </motion.button>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Your information is secure and never shared.
                  </p>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Quick Connect</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-electric/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-medium break-all">mueez.leadsbytech@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-electric/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="font-medium">+91 9522 996 669</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-electric/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="font-medium">Burhanpur, MP, India 450331</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-electric/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Working Hours</p>
                      <p className="font-medium">Mon-Fri: 9AM - 6PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8">
                <h4 className="font-bold mb-4">Quick Connect Options</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-4 h-4 text-electric" />
                    <span>Schedule a Call — Book a meeting directly</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MessageSquare className="w-4 h-4 text-electric" />
                    <span>WhatsApp Chat — Instant messaging</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Video className="w-4 h-4 text-electric" />
                    <span>Teams Call — Voice or video call</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-electric" />
                    <span>Email Us — We'll respond within 2 hours</span>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8 text-center">
                <h4 className="font-bold mb-2">📞 Prefer a Quick Call?</h4>
                <p className="text-gray-300 text-sm">
                  We're available Monday to Friday, 9 AM - 6 PM IST.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="mt-4 text-electric font-semibold hover:text-blue-400 transition"
                >
                  Call Us Now: +91 9522 996 669
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;