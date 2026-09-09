import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Github, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/5 py-16 px-4 bg-navy/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric to-blueLight flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-xl tracking-tight">
                  <span className="text-white">Leads</span>
                  <span className="gradient-text">ByTech</span>
                </span>
                <p className="text-[10px] text-gray-500 tracking-widest uppercase">Enterprise Solutions</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building high-performance digital platforms with zero-cost infrastructure. 
              Custom websites, enterprise software, and serverless marketplaces.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="p-2 rounded-xl glass hover:bg-white/10 transition-colors">
                <Github size={18} className="text-gray-400" />
              </a>
              <a href="#" className="p-2 rounded-xl glass hover:bg-white/10 transition-colors">
                <Twitter size={18} className="text-gray-400" />
              </a>
              <a href="#" className="p-2 rounded-xl glass hover:bg-white/10 transition-colors">
                <Linkedin size={18} className="text-gray-400" />
              </a>
              <a href="#" className="p-2 rounded-xl glass hover:bg-white/10 transition-colors">
                <Youtube size={18} className="text-gray-400" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm mb-5 text-gray-300">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-400 hover:text-electric transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Core Services */}
          <div>
            <h4 className="font-bold text-sm mb-5 text-gray-300">Core Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-electric transition cursor-pointer">Website Development</li>
              <li className="hover:text-electric transition cursor-pointer">Custom Software</li>
              <li className="hover:text-electric transition cursor-pointer">E-Commerce Platforms</li>
              <li className="hover:text-electric transition cursor-pointer">B2B Automations</li>
              <li className="hover:text-electric transition cursor-pointer">Serverless Marketplaces</li>
              <li className="hover:text-electric transition cursor-pointer">Tech Consulting</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-sm mb-5 text-gray-300">Connect With Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={16} className="text-electric flex-shrink-0" />
                <span>mueez.leadsbytech@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={16} className="text-electric flex-shrink-0" />
                <span>+91 9522 996 669</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin size={16} className="text-electric flex-shrink-0" />
                <span>Burhanpur, MP, India 450331</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 LeadsByTech. All rights reserved. MSME Registered · India</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-electric transition">Privacy Policy</a>
            <a href="#" className="hover:text-electric transition">Terms of Service</a>
            <a href="#" className="hover:text-electric transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;