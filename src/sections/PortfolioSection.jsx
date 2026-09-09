import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, 
  Database, 
  GraduationCap, 
  Globe, 
  Cpu, 
  Car, 
  Briefcase, 
  Receipt, 
  Monitor, 
  Rocket, 
  Utensils, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Al Wholesale',
    subtitle: "UAE's B2B Marketplace",
    category: 'E-Commerce',
    client: 'UAE-based F&B industry',
    challenge: 'No direct connection between suppliers and retailers. Manual order management. Difficulty in handling wholesale pricing and logistics.',
    solution: 'Built a multi-vendor marketplace with 100+ sellers, AI-powered sales optimization, logistics integration, and automated invoicing.',
    results: '100+ sellers onboarded, $500k+ annual revenue, 99.9% uptime, 60% reduction in manual order processing time.',
    icon: ShoppingBag,
    color: '#3B82F6'
  },
  {
    id: 2,
    title: 'LeadGenPro',
    subtitle: 'Apollo-like Lead Database',
    category: 'Automation',
    client: 'Dubai-based real estate agency',
    challenge: 'Manual lead entry from 8+ listing sites. 2-3 days response time to new leads. Low lead quality and high bounce rates.',
    solution: 'Automated extraction from 8+ platforms, data cleaning and validation pipeline, custom CRM with lead management, instant email and SMS notifications.',
    results: '300% lead volume increase, 60-minute response time (from 2-3 days), 35% higher conversion rate, 20+ hours weekly saved.',
    icon: Database,
    color: '#8B5CF6'
  },
  {
    id: 3,
    title: 'Smart School SaaS',
    subtitle: 'Complete School ERP',
    category: 'Software',
    client: 'Growing educational institution',
    challenge: 'Manual student record management across multiple spreadsheets. Fee collection and tracking was error-prone. Attendance tracking took hours every day.',
    solution: 'Complete student management module, automated fee collection with reminders and receipts, digital attendance system, advanced reporting and analytics dashboard, role-based access for staff, teachers, and parents.',
    results: '80% administrative efficiency gain, 100% fee collection accuracy, 90% time saved on attendance, 1,000+ students managed.',
    icon: GraduationCap,
    color: '#F59E0B'
  },
  {
    id: 4,
    title: 'Eco Choice Group',
    subtitle: 'Corporate Website',
    category: 'Websites',
    client: 'UAE-based food innovation hub',
    challenge: 'Outdated corporate website. No mobile optimization. Low engagement and lead generation.',
    solution: 'Complete corporate website redesign. Mobile-first, SEO-optimized, bilingual (English/Arabic), lead capture integration.',
    results: '200% increase in mobile traffic, 150% increase in lead generation, 95+ Google PageSpeed score.',
    icon: Globe,
    color: '#10B981'
  },
  {
    id: 5,
    title: 'Data Lead Gen',
    subtitle: 'Lead Generation Platform',
    category: 'Automation',
    client: 'India-based lead generation agency',
    challenge: 'Manual data extraction from multiple sources. Data quality issues. No centralized lead management.',
    solution: 'Automated extraction from 8+ platforms, data validation and enrichment pipeline, lead scoring and prioritization, CRM integration.',
    results: '300% lead increase, 95% data accuracy, 20+ hours weekly saved.',
    icon: Cpu,
    color: '#EC4899'
  },
  {
    id: 6,
    title: 'All Cars 365',
    subtitle: 'Multi-dealer Platform',
    category: 'E-Commerce',
    client: 'UAE-based automotive marketplace',
    challenge: 'No centralized platform for car dealers to list inventory. Manual lead management. Difficulty in tracking sales.',
    solution: 'Multi-dealer e-commerce platform with vendor dashboards, payment splitting, inventory management, and lead tracking.',
    results: '50+ dealers onboarded, $200k+ annual revenue, 40% reduction in lead response time.',
    icon: Car,
    color: '#3B82F6'
  },
  {
    id: 7,
    title: 'The IT Frnd',
    subtitle: 'IT Services Platform',
    category: 'Websites',
    client: 'India-based IT services company',
    challenge: 'No online presence. Manual service booking and management.',
    solution: 'Complete IT services platform with service booking, management, and client portal.',
    results: '100% online service booking, 50% reduction in administrative workload.',
    icon: Briefcase,
    color: '#6366F1'
  },
  {
    id: 8,
    title: 'Mahira Tax Solution',
    subtitle: 'Tax Services Website',
    category: 'Websites',
    client: 'India-based tax consultancy',
    challenge: 'No digital presence. Manual appointment booking.',
    solution: 'Tax and accounting services website with appointment booking, service listing, and client portal.',
    results: '200% increase in appointment bookings, 100% online service delivery.',
    icon: Receipt,
    color: '#14B8A6'
  },
  {
    id: 9,
    title: 'Shubham Computer Indore',
    subtitle: 'E-Commerce Landing Page',
    category: 'E-Commerce',
    client: 'India-based computer store',
    challenge: 'No online presence for product sales. Manual order management.',
    solution: 'WhatsApp-integrated e-commerce landing page for laptop sales. Automated order management via WhatsApp.',
    results: '300+ orders via WhatsApp, 40% reduction in manual order handling.',
    icon: Monitor,
    color: '#F97316'
  },
  {
    id: 10,
    title: 'Lead Universal',
    subtitle: 'Lead Generation SaaS',
    category: 'Software',
    client: 'India-based lead generation company',
    challenge: 'Manual lead mining and cleaning. No centralized platform.',
    solution: 'Lead generation platform with data mining, cleaning, and distribution.',
    results: '10-12 clients per day, $100-$400 per client, fully automated lead delivery.',
    icon: Rocket,
    color: '#8B5CF6'
  },
  {
    id: 11,
    title: 'Ummeed Academy',
    subtitle: 'Admission Landing Page',
    category: 'Websites',
    client: 'India-based computer training institute',
    challenge: 'No digital presence for admission enquiries.',
    solution: 'Admission landing page with enquiry form, course listing, and contact information.',
    results: '200% increase in admission enquiries.',
    icon: GraduationCap,
    color: '#06B6D4'
  },
  {
    id: 12,
    title: 'Al Rahi Meats',
    subtitle: 'Manufacturing Landing Page',
    category: 'Websites',
    client: 'UAE-based meat manufacturer',
    challenge: 'No digital presence for B2B buyers.',
    solution: 'Manufacturing landing page with product listing, ISO/HACCP certifications, and enquiry form.',
    results: '150% increase in B2B enquiries.',
    icon: Utensils,
    color: '#EF4444'
  }
];

const categories = ['All Projects', 'Websites', 'Software', 'E-Commerce', 'Automation'];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filteredProjects = projects.filter(project => 
    activeFilter === 'All Projects' ? true : project.category === activeFilter
  );

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0B0F17] transition-colors duration-300 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/50 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Our Work
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Projects That <span className="text-blue-600 dark:text-blue-400">Deliver Results</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-600 dark:text-gray-400 mb-10">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-blue-500" /> 50+ Projects Delivered</span>
            <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-blue-500" /> 98% Client Satisfaction</span>
            <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-blue-500" /> 40+ Industries Served</span>
            <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-blue-500" /> $10M+ Client Revenue</span>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeFilter === category 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 dark:bg-blue-500' 
                  : 'bg-white dark:bg-gray-800/60 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700/60 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-[#131B2E] border border-gray-200/80 dark:border-gray-800/80 rounded-2xl p-6 shadow-sm hover:shadow-xl dark:shadow-none hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
                >
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"
                    style={{ backgroundColor: project.color }}
                  />

                  <div className="mb-5 relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300"
                        style={{ backgroundColor: `${project.color}15`, color: project.color }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>
                  
                  <div className="space-y-3 mb-6 flex-grow text-xs leading-relaxed text-gray-600 dark:text-gray-300 relative z-10">
                    <p><strong className="text-gray-900 dark:text-white font-semibold">Client:</strong> {project.client}</p>
                    <p><strong className="text-gray-900 dark:text-white font-semibold">Challenge:</strong> {project.challenge}</p>
                    <p><strong className="text-gray-900 dark:text-white font-semibold">Solution:</strong> {project.solution}</p>
                    
                    <div className="p-3 mt-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 font-medium">
                      <strong className="block text-amber-800 dark:text-amber-200 mb-0.5">Results:</strong> {project.results}
                    </div>
                  </div>

                  <button className="mt-auto w-full py-2.5 px-4 bg-gray-50 dark:bg-gray-800/50 hover:bg-blue-600 dark:hover:bg-blue-600 text-gray-700 dark:text-gray-200 hover:text-white dark:hover:text-white border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-600 rounded-xl transition-all duration-300 font-medium text-xs flex items-center justify-center gap-2 group/btn">
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}