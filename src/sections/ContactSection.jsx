import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-24 bg-darkNavy relative z-10" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-inter font-bold text-white mb-4">Let's Build Something Great</h2>
          <p className="text-xl text-gray-400 font-space mb-6">Have a project in mind? Let's discuss how we can help you scale with enterprise-grade technology.</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-space text-gray-400">
            <span className="text-electricBlue">✦</span> 2 Hrs Average Response Time
            <span className="text-gold">✦</span> 98% Client Satisfaction
            <span className="text-electricBlue">✦</span> 24/7 Project Support
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Office */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-glass-gradient border border-glassBorder p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 border-b border-glassBorder pb-4">Quick Connect</h3>
              <ul className="space-y-6 text-gray-300 font-space">
                <li className="flex items-start">
                  <Mail className="text-electricBlue mr-4 mt-1" size={20} />
                  <div>
                    <strong className="block text-white">Email:</strong>
                    mueez.leadsbytech@gmail.com
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="text-gold mr-4 mt-1" size={20} />
                  <div>
                    <strong className="block text-white">Phone:</strong>
                    +91 9522 996 669
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="text-electricBlue mr-4 mt-1" size={20} />
                  <div>
                    <strong className="block text-white">Location:</strong>
                    Burhanpur, Madhya Pradesh, India 450331<br />
                    <span className="text-sm text-gray-400">Serving clients across the globe (Remote-first)</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="text-gold mr-4 mt-1" size={20} />
                  <div>
                    <strong className="block text-white">Working Hours:</strong>
                    Monday - Friday: 9:00 AM - 6:00 PM IST
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-navy border border-glassBorder p-6 rounded-2xl text-center">
              <h4 className="text-lg font-bold text-white mb-2">Prefer a Quick Call?</h4>
              <p className="text-gold font-bold text-xl">Call Us Now: +91 9522 996 669</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-navy border border-glassBorder p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-6 font-space">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name</label>
                <input type="text" className="w-full bg-darkNavy border border-glassBorder rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electricBlue focus:ring-1 focus:ring-electricBlue transition-all" placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
                <input type="email" className="w-full bg-darkNavy border border-glassBorder rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electricBlue transition-all" placeholder="Enter your email" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">What are you looking for?</label>
                <select className="w-full bg-darkNavy border border-glassBorder rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electricBlue transition-all appearance-none">
                  <option>Website Development</option>
                  <option>Custom Software</option>
                  <option>E-Commerce</option>
                  <option>B2B Automations</option>
                  <option>Serverless Marketplace</option>
                  <option>Tech Consulting</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
                <textarea rows="4" className="w-full bg-darkNavy border border-glassBorder rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electricBlue transition-all" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="button" className="w-full bg-electricBlue text-white font-bold rounded-lg py-4 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all">
                Send Message
              </button>
              <p className="text-xs text-center text-gray-500 mt-4">Your information is secure and never shared.</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}