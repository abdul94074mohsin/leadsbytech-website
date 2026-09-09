import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../animations/FramerVariants';
import { Calendar, Clock, User, Tag, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: 'Building a Complete School ERP Management System with Django',
      excerpt: 'Learn how we built a comprehensive School ERP system that manages 1,000+ students, automates fee collection, digitizes attendance, and generates real-time reports.',
      date: 'March 15, 2025',
      readTime: '12 min read',
      author: 'Mueezur Rehman',
      categories: ['Software Development', 'Education', 'ERP'],
      image: '🏫'
    },
    {
      id: 2,
      title: 'Automating E-Commerce Inventory Management with Python',
      excerpt: 'Discover how we built an automated inventory sync system that connects Amazon, Shopify, and warehouse systems — reducing errors by 85% and saving 20+ hours per week.',
      date: 'March 10, 2025',
      readTime: '10 min read',
      author: 'Mueezur Rehman',
      categories: ['E-Commerce', 'Automation', 'Python'],
      image: '📦'
    },
    {
      id: 3,
      title: 'Building a B2B Lead Generation Engine with Web Scraping & AI',
      excerpt: 'Step-by-step guide on building an automated lead generation system that extracts, validates, and enriches B2B leads from 8+ platforms — delivering 300% more leads.',
      date: 'March 5, 2025',
      readTime: '14 min read',
      author: 'Mueezur Rehman',
      categories: ['Automation', 'Lead Generation', 'AI'],
      image: '🎯'
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
            <span className="text-electric font-semibold text-sm uppercase tracking-wider">Blog</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-2">
              Tech Insights & <span className="gradient-text">Guides</span>
            </h1>
            <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
              Expert articles on web development, software engineering, automation, and scaling businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8"
          >
            {posts.map((post) => (
              <motion.div
                key={post.id}
                variants={fadeInUp}
                whileHover={{ scale: 1.01, y: -5 }}
                className="glass-card rounded-2xl p-8 hover:border-electric/30 transition cursor-pointer"
              >
                <div className="flex items-start gap-6">
                  <div className="text-5xl">{post.image}</div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3 hover:text-electric transition">
                      {post.title}
                    </h2>
                    <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={14} /> {post.author}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.categories.map((cat, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-electric/20 text-electric">
                          {cat}
                        </span>
                      ))}
                    </div>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-sm font-medium text-electric hover:text-blue-400 transition flex items-center gap-1"
                    >
                      Read Full Article <ArrowRight size={16} />
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
          <h2 className="text-2xl font-display font-bold mb-4">
            Want to Contribute to Our <span className="gradient-text">Blog?</span>
          </h2>
          <p className="text-gray-300 text-sm">
            Share your insights with our community. Contact us to submit your article.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default BlogPage;