import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  {
    question: "Do you work with startups?",
    answer: "Absolutely! We love helping startups scale. We have specific packages designed for early-stage growth."
  },
  {
    question: "What is your typical turnaround time?",
    answer: "It depends on the scope. A standard website takes 2-4 weeks, while a full branding package takes 3-5 weeks. Social media plans are ongoing."
  },
  {
    question: "Do you offer custom packages?",
    answer: "Yes. We understand every business is unique. We'll audit your current state and propose a custom strategy effectively tailored to your goals."
  },
  {
    question: "How do you measure success?",
    answer: "ROI, Leads, Conversions, and Brand Sentiment. We provide detailed monthly reports so you can see exactly where your money is going."
  },
  {
    question: "Can you handle international clients?",
    answer: "Yes, we work with clients globally. Our team is accustomed to working across different time zones."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-[#F0F7FF]">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002B6B] mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">Common questions about our services and process.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-bold text-[#002B6B] text-lg">{faq.question}</span>
                {openIndex === i ? <Minus className="text-[#0056D2]" /> : <Plus className="text-[#002B6B]" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
