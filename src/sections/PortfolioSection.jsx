import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Al Wholesale',
    subtitle: "UAE's B2B Marketplace",
    category: 'E-Commerce',
    client: 'UAE-based F&B industry',
    challenge: 'No direct connection between suppliers and retailers. Manual order management. Difficulty in handling wholesale pricing and logistics.',
    solution: 'Built a multi-vendor marketplace with 100+ sellers, AI-powered sales optimization, logistics integration, and automated invoicing.',
    results: '100+ sellers onboarded, $500k+ annual revenue, 99.9% uptime, 60% reduction in manual order processing time.'
  },
  {
    id: 2,
    title: 'LeadGenPro',
    subtitle: 'Apollo-like Lead Database',
    category: 'Automation',
    client: 'Dubai-based real estate agency',
    challenge: 'Manual lead entry from 8+ listing sites. 2-3 days response time to new leads. Low lead quality and high bounce rates.',
    solution: 'Automated extraction from 8+ platforms, data cleaning and validation pipeline, custom CRM with lead management, instant email and SMS notifications.',
    results: '300% lead volume increase, 60-minute response time (from 2-3 days), 35% higher conversion rate, 20+ hours weekly saved.'
  },
  {
    id: 3,
    title: 'Smart School SaaS',
    subtitle: 'Complete School ERP',
    category: 'Software',
    client: 'Growing educational institution',
    challenge: 'Manual student record management across multiple spreadsheets. Fee collection and tracking was error-prone. Attendance tracking took hours every day.',
    solution: 'Complete student management module, automated fee collection with reminders and receipts, digital attendance system, advanced reporting and analytics dashboard, role-based access for staff, teachers, and parents.',
    results: '80% administrative efficiency gain, 100% fee collection accuracy, 90% time saved on attendance, 1,000+ students managed.'
  },
  {
    id: 4,
    title: 'Eco Choice Group',
    subtitle: 'Corporate Website',
    category: 'Websites',
    client: 'UAE-based food innovation hub',
    challenge: 'Outdated corporate website. No mobile optimization. Low engagement and lead generation.',
    solution: 'Complete corporate website redesign. Mobile-first, SEO-optimized, bilingual (English/Arabic), lead capture integration.',
    results: '200% increase in mobile traffic, 150% increase in lead generation, 95+ Google PageSpeed score.'
  },
  {
    id: 5,
    title: 'Data Lead Gen',
    subtitle: 'Lead Generation Platform',
    category: 'Automation',
    client: 'India-based lead generation agency',
    challenge: 'Manual data extraction from multiple sources. Data quality issues. No centralized lead management.',
    solution: 'Automated extraction from 8+ platforms, data validation and enrichment pipeline, lead scoring and prioritization, CRM integration.',
    results: '300% lead increase, 95% data accuracy, 20+ hours weekly saved.'
  },
  {
    id: 6,
    title: 'All Cars 365',
    subtitle: 'Multi-dealer Platform',
    category: 'E-Commerce',
    client: 'UAE-based automotive marketplace',
    challenge: 'No centralized platform for car dealers to list inventory. Manual lead management. Difficulty in tracking sales.',
    solution: 'Multi-dealer e-commerce platform with vendor dashboards, payment splitting, inventory management, and lead tracking.',
    results: '50+ dealers onboarded, $200k+ annual revenue, 40% reduction in lead response time.'
  },
  {
    id: 7,
    title: 'The IT Frnd',
    subtitle: 'IT Services Platform',
    category: 'Websites',
    client: 'India-based IT services company',
    challenge: 'No online presence. Manual service booking and management.',
    solution: 'Complete IT services platform with service booking, management, and client portal.',
    results: '100% online service booking, 50% reduction in administrative workload.'
  },
  {
    id: 8,
    title: 'Mahira Tax Solution',
    subtitle: 'Tax Services Website',
    category: 'Websites',
    client: 'India-based tax consultancy',
    challenge: 'No digital presence. Manual appointment booking.',
    solution: 'Tax and accounting services website with appointment booking, service listing, and client portal.',
    results: '200% increase in appointment bookings, 100% online service delivery.'
  },
  {
    id: 9,
    title: 'Shubham Computer Indore',
    subtitle: 'E-Commerce Landing Page',
    category: 'E-Commerce',
    client: 'India-based computer store',
    challenge: 'No online presence for product sales. Manual order management.',
    solution: 'WhatsApp-integrated e-commerce landing page for laptop sales. Automated order management via WhatsApp.',
    results: '300+ orders via WhatsApp, 40% reduction in manual order handling.'
  },
  {
    id: 10,
    title: 'Lead Universal',
    subtitle: 'Lead Generation SaaS',
    category: 'Software',
    client: 'India-based lead generation company',
    challenge: 'Manual lead mining and cleaning. No centralized platform.',
    solution: 'Lead generation platform with data mining, cleaning, and distribution.',
    results: '10-12 clients per day, $100-$400 per client, fully automated lead delivery.'
  },
  {
    id: 11,
    title: 'Ummeed Academy',
    subtitle: 'Admission Landing Page',
    category: 'Websites',
    client: 'India-based computer training institute',
    challenge: 'No digital presence for admission enquiries.',
    solution: 'Admission landing page with enquiry form, course listing, and contact information.',
    results: '200% increase in admission enquiries.'
  },
  {
    id: 12,
    title: 'Al Rahi Meats',
    subtitle: 'Manufacturing Landing Page',
    category: 'Websites',
    client: 'UAE-based meat manufacturer',
    challenge: 'No digital presence for B2B buyers.',
    solution: 'Manufacturing landing page with product listing, ISO/HACCP certifications, and enquiry form.',
    results: '150% increase in B2B enquiries.'
  }
];

const categories = ['All Projects', 'Websites', 'Software', 'E-Commerce', 'Automation'];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filteredProjects = projects.filter(project => 
    activeFilter === 'All Projects' ? true : project.category === activeFilter
  );

  return (
    <section className="py-24 bg-navy relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-inter font-bold text-white mb-6">Our Work - Projects That Deliver Results</h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-space text-gray-400 mb-8">
            <span className="text-gold">✦</span> 50+ Projects Delivered
            <span className="text-electricBlue">✦</span> 98% Client Satisfaction
            <span className="text-gold">✦</span> 40+ Industries Served
            <span className="text-electricBlue">✦</span> $10M+ Client Revenue Generated
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-space transition-all duration-300 ${
                  activeFilter === category 
                  ? 'bg-electricBlue text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                  : 'bg-glass-gradient border border-glassBorder text-gray-300 hover:text-white hover:border-electricBlue'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-darkNavy border border-glassBorder rounded-2xl p-6 hover:scale-[1.02] hover:border-electricBlue transition-all duration-300 group flex flex-col h-full"
              >
                <div className="mb-4">
                  <span className="text-xs font-bold text-electricBlue uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-2xl font-inter font-bold text-white mt-2 group-hover:text-gold transition-colors">{project.title}</h3>
                  <p className="text-sm text-gray-400 font-space">{project.subtitle}</p>
                </div>
                
                <div className="space-y-4 mb-6 flex-grow text-sm text-gray-300">
                  <p><strong className="text-white">Client:</strong> {project.client}</p>
                  <p><strong className="text-white">Challenge:</strong> {project.challenge}</p>
                  <p><strong className="text-white">Solution:</strong> {project.solution}</p>
                  <p className="p-3 bg-glass-gradient rounded-lg border border-glassBorder text-gold">
                    <strong>Results:</strong> {project.results}
                  </p>
                </div>

                <button className="mt-auto w-full py-3 bg-transparent border border-glassBorder text-white rounded-lg hover:bg-electricBlue hover:border-electricBlue transition-all font-semibold">
                  View Case Study
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}