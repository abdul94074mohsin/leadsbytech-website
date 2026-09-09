import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { fadeInUp } from '../animations/FramerVariants';

const faqs = [
  {
    question: 'Is ₹0 monthly hosting really possible?',
    answer: 'Yes. Our serverless architecture uses Google Apps Script and Google Sheets as the database — completely free. No servers, no databases, no monthly bills. Forever.'
  },
  {
    question: 'Do I need technical skills to manage my platform?',
    answer: 'No. You control everything from a Google Sheet on your phone. Update prices, stock, and products — your website updates in real-time. No developer needed.'
  },
  {
    question: 'Can I accept UPI payments?',
    answer: 'Yes. We integrate UPI QR codes (free) and Razorpay payment links (2% transaction fee). No monthly subscription fees.'
  },
  {
    question: 'Is Google Sheets secure as a database?',
    answer: 'Yes. Your data is stored on Google\'s world-class infrastructure with bank-grade encryption. Your public website is compiled and hosted on secure CDNs. No open server ports.'
  },
  {
    question: 'Can I switch to a traditional database later?',
    answer: 'Yes. Your React frontend remains 100% intact. We can hot-swap your backend from Google Sheets to PostgreSQL or MongoDB without interrupting your business.'
  },
  {
    question: 'Do you provide support after launch?',
    answer: 'Yes. We provide dedicated support, maintenance, and continuous improvement. The monthly retainer covers security audits, backups, monitoring, and 2 hours of support.'
  },
  {
    question: 'What if I\'m not satisfied with the platform?',
    answer: 'We offer a risk-free approach. Phase 1 (Catalog + Homepage) is delivered in 5 days. If you don\'t like the speed or design, you can cancel without paying.'
  },
  {
    question: 'How long does it take to build my platform?',
    answer: 'Starter: 2-3 weeks | Pro: 4-5 weeks | Enterprise: 6-8 weeks. Faster delivery is available for urgent projects.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="badge">FAQ</span>
          <h2 className="section-title mt-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle mt-4">
            Quick answers to the most common questions about our services and solutions.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-white/5 transition group"
              >
                <span className="font-medium text-base">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-1.5 rounded-lg bg-white/5 group-hover:bg-white/10 transition"
                >
                  <ChevronDown className="w-5 h-5 text-electric" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-300 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;