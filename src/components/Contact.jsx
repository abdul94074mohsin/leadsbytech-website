import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Clock, MessageSquare, Calendar, Video, CheckCircle } from 'lucide-react';
import { fadeInUp } from '../animations/FramerVariants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', service: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'mueez.leadsbytech@gmail.com', href: 'mailto:mueez.leadsbytech@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9522 996 669', href: 'tel:+919522996669' },
    { icon: MapPin, label: 'Location', value: 'Burhanpur, MP, India 450331', href: '#' },
    { icon: Clock, label: 'Working Hours', value: 'Mon-Fri: 9AM - 6PM IST', href: '#' },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="orb orb-2" />
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
          <span className="badge">Contact</span>
          <h2 className="section-title mt-4">
            Let's Build Something <span className="gradient-text">Great</span>
          </h2>
          <p className="section-subtitle mt-4">
            Have a project in mind? Let's discuss how we can help you scale with enterprise-grade technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Form - takes 3 columns */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-xl font-bold text-green-400">Message Sent!</h4>
                  <p className="text-gray-400 text-sm mt-2">We'll get back to you within 2 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-electric focus:outline-none transition text-white placeholder-gray-500"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-electric focus:outline-none transition text-white placeholder-gray-500"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Service</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-electric focus:outline-none transition text-white"
                    >
                      <option value="">Select a service</option>
                      <option value="website">Website Development</option>
                      <option value="software">Custom Software</option>
                      <option value="ecommerce">E-Commerce Platforms</option>
                      <option value="automation">B2B Automations</option>
                      <option value="serverless">Serverless Marketplace</option>
                      <option value="consulting">Tech Consulting</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                    <textarea
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-electric focus:outline-none transition text-white placeholder-gray-500 resize-none"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="w-full btn-primary justify-center py-4"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send size={18} />
                  </motion.button>
                  <p className="text-xs text-center text-gray-500 mt-2">
                    Your information is secure and never shared.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info - takes 2 columns */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-6">Quick Connect</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-electric/10 flex items-center justify-center flex-shrink-0 group-hover:bg-electric/20 transition">
                      <info.icon className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">{info.label}</p>
                      <p className="text-sm font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <h4 className="font-bold mb-4">Quick Connect Options</h4>
              <div className="space-y-3">
                {[
                  { icon: Calendar, label: 'Schedule a Call', desc: 'Book a meeting directly' },
                  { icon: MessageSquare, label: 'WhatsApp Chat', desc: 'Instant messaging' },
                  { icon: Video, label: 'Teams Call', desc: 'Voice or video call' },
                  { icon: Mail, label: 'Email Us', desc: 'Response within 2 hours' },
                ].map((option, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition">
                    <option.icon className="w-4 h-4 text-electric" />
                    <div>
                      <p className="text-sm font-medium">{option.label}</p>
                      <p className="text-xs text-gray-500">{option.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8 text-center">
              <h4 className="font-bold mb-2">Prefer a Quick Call?</h4>
              <p className="text-gray-400 text-sm">
                Available Monday to Friday, 9 AM - 6 PM IST.
              </p>
              <a href="tel:+919522996669" className="inline-block mt-4 text-electric font-semibold hover:text-blue-400 transition">
                +91 9522 996 669
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;