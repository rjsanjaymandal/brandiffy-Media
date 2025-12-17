import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    { id: 1, title: 'Neon Energy Drink', category: 'social', image: 'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?auto=format&fit=crop&q=80&w=800', desc: 'Viral TikTok campaign reaching 2M+ views.' },
    { id: 2, title: 'TechFlow SaaS', category: 'web', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', desc: 'Complete website redesign & SEO overhaul.' },
    { id: 3, title: 'Luxe Interiors', category: 'content', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800', desc: 'High-end architectural photography & reels.' },
    { id: 4, title: 'FitLife App', category: 'social', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800', desc: 'Influencer partnership program.' },
    { id: 5, title: 'Urban Coffee', category: 'content', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800', desc: 'Product photography & brand identity.' },
    { id: 6, title: 'Alpha Finance', category: 'web', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', desc: 'Fintech dashboard development.' },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-20 bg-[#F0F7FF] min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#002B6B] mb-6">Our Work</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We don't just promise results; we prove them. Explore our latest success stories.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'social', 'web', 'content'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat 
                  ? 'bg-[#0056D2] text-white shadow-lg shadow-blue-500/30' 
                  : 'bg-white text-slate-600 hover:bg-blue-50'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='wait'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002B6B]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium">View Case Study</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-[#0056D2] uppercase tracking-wider mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-[#002B6B] mb-2">{project.title}</h3>
                  <p className="text-slate-500 text-sm">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block p-10 bg-[#002B6B] rounded-3xl text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to be our next success story?</h3>
              <p className="text-blue-200 mb-8">Let's build something amazing together.</p>
              <Link to="/#contact" className="px-8 py-3 bg-white text-[#0056D2] rounded-full font-bold hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
                Start Project <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
