import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const TEAM = [
  {
    name: "Alex Morgan",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Jessica Park",
    role: "Head of Marketing",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Ryan Carter",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Maya Patel",
    role: "Social Media Strategist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
  }
];

const Team = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002B6B] mb-4">Meet The Team</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">The creative minds behind the magic.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, i) => (
            <div key={i} className="group text-center">
              <div className="relative mb-6 inline-block">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-50 mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-2 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-2 rounded-full shadow-md">
                   <Linkedin className="w-4 h-4 text-[#0056D2]" />
                   <Twitter className="w-4 h-4 text-sky-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#002B6B]">{member.name}</h3>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
