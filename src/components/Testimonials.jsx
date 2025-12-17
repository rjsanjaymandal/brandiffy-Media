import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CEO, TechFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    text: "Brandiffy transformed our online presence. Our lead generation increased by 300% in just 3 months. The team is professional, creative, and data-driven."
  },
  {
    id: 2,
    name: "David Chen",
    role: "Founder, GrowthRocket",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    text: "The best digital agency we've worked with. Their video production quality is unmatched, and the ad campaigns are delivering incredible ROI."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, UrbanNest",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
    text: "Professional, responsive, and incredibly talented. They understood our brand voice immediately and elevated it to a whole new level."
  },
  {
    id: 4,
    name: "Michael Chang",
    role: "COO, AlphaWave",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150",
    text: "We needed a complete rebrand and website overhaul. Brandiffy delivered beyond our expectations. Truly a top-tier agency."
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#002B6B] mb-4">What Our Clients Say</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">Don't just take our word for it.</p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-6 animate-scroll whitespace-nowrap py-4">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((item, idx) => (
            <div 
              key={`${item.id}-${idx}`}
              className="inline-block w-[85vw] md:w-[450px] bg-[#F0F7FF] p-6 md:p-8 rounded-3xl whitespace-normal flex-shrink-0 border border-blue-50 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(star => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6 italic">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-[#002B6B]">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
