import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, LineChart, Code, Smartphone, CheckCircle, Megaphone, Star, Camera, Video, Globe, Search } from 'lucide-react';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Team from '../components/Team';

// --- Data ---
const SERVICES = [
  { id: 1, title: 'Social Media Marketing', icon: <Megaphone className="w-6 h-6" />, desc: 'Strategic growth on Instagram, LinkedIn & Twitter.' },
  { id: 2, title: 'Influencer Marketing', icon: <Star className="w-6 h-6" />, desc: 'Connect with top creators to amplify your brand.' },
  { id: 3, title: 'Pro Shoots/Production', icon: <Camera className="w-6 h-6" />, desc: 'High-quality photography & video production.' },
  { id: 4, title: 'Content Creation', icon: <Video className="w-6 h-6" />, desc: 'Engaging reels, posts, and stories that convert.' },
  { id: 5, title: 'Paid Ads (Meta/Google)', icon: <LineChart className="w-6 h-6" />, desc: 'ROI-focused ad campaigns for maximum reach.' },
  { id: 6, title: 'SEO Optimization', icon: <Search className="w-6 h-6" />, desc: 'Rank higher on Google and drive organic traffic.' },
  { id: 7, title: 'Web Development', icon: <Globe className="w-6 h-6" />, desc: 'Fast, responsive, and stunning websites.' },
  { id: 8, title: 'Software Development', icon: <Code className="w-6 h-6" />, desc: 'Custom software solutions for your business.' },
];

const TRUSTED_BRANDS = ['TechFlow', 'UrbanNest', 'GrowthRocket', 'PixelPerfect', 'AlphaWave', 'BlueSky'];

const Home = () => {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#F0F7FF]">
      {/* Background Grid & Blobs */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-blue-200/40 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-indigo-200/40 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-2 bg-blue-100/50 rounded-full text-[#0056D2] font-semibold text-sm mb-6 border border-blue-200/50 backdrop-blur-sm">
            🚀 Elevate Your Digital Presence
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#002B6B] leading-[1.1] mb-6 tracking-tight">
            We Build Brands <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0056D2] via-cyan-500 to-blue-600 animate-gradient-x">That Scale.</span>
          </h1>
          <p className="text-base md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed font-light">
            Your end-to-end digital growth partner. From strategy to execution, we deliver results that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="px-8 py-4 bg-[#0056D2] text-white rounded-full font-semibold hover:bg-[#0044A8] transition-all shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2 group hover:-translate-y-1 w-full sm:w-auto">
              Start Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/portfolio" className="px-8 py-4 bg-white/80 backdrop-blur-sm text-[#002B6B] border border-slate-200 rounded-full font-semibold hover:bg-white hover:border-blue-200 transition-all hover:shadow-lg flex items-center justify-center w-full sm:w-auto">
              View Portfolio
            </a>
          </div>
        </motion.div>

        {/* Abstract 3D Composition */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[400px] lg:h-[500px] flex items-center justify-center perspective-1000"
        >
          <div className="relative w-full h-full max-w-md">
            {/* Main Glass Card */}
            <motion.div 
              animate={{ y: [0, -15, 0], rotateX: [0, 5, 0], rotateY: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute top-10 left-10 w-64 h-64 bg-white/10 backdrop-blur-md border border-white/40 rounded-3xl shadow-2xl z-20 flex flex-col items-center justify-center overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50" />
              <div className="relative z-10 text-center p-6">
                <div className="text-5xl font-bold text-[#0056D2] mb-2">150+</div>
                <div className="text-sm font-medium text-[#002B6B] uppercase tracking-wider">Projects Delivered</div>
              </div>
            </motion.div>
            
            {/* Secondary Card */}
            <motion.div 
              animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 right-0 w-64 h-40 bg-gradient-to-br from-[#0056D2] to-[#002B6B] rounded-3xl shadow-2xl z-30 flex items-center justify-center p-6 border border-white/10"
            >
              <div className="flex items-center gap-5">
                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                  <LineChart className="text-white w-8 h-8" />
                </div>
                <div>
                  <div className="text-white font-bold text-2xl">+240%</div>
                  <div className="text-blue-100 text-xs font-medium uppercase tracking-wide">Avg. ROI Growth</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-0 right-10 bg-white p-3 rounded-2xl shadow-lg z-10"
            >
              <Code className="w-6 h-6 text-cyan-500" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-10 left-0 bg-white p-3 rounded-2xl shadow-lg z-40"
            >
              <Smartphone className="w-6 h-6 text-purple-500" />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-400/20 rounded-full blur-[80px] -z-10 mix-blend-multiply" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/20 rounded-full blur-[60px]" />
          </div>
        </motion.div>
      </div>
    </section>

      <div className="py-10 border-y border-slate-100 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">Trusted by 50+ Brands</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {TRUSTED_BRANDS.map((brand, i) => (
              <span key={i} className="text-xl font-bold text-slate-700">{brand}</span>
            ))}
          </div>
        </div>
      </div>

      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B6B] mb-4">Our Expertise</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Full-service digital solutions tailored to your business goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100 group"
              >
                <div className="w-12 h-12 bg-blue-100 text-[#0056D2] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0056D2] group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-[#002B6B] mb-2">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="py-16 md:py-24 bg-[#F0F7FF]">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-[#0056D2] rounded-3xl rotate-3 opacity-10" />
            <img 
              src="/why-us.png" 
              alt="Team meeting" 
              className="relative rounded-3xl shadow-2xl w-full object-cover h-[300px] md:h-[500px]"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />
                  ))}
                </div>
                <span className="text-sm font-bold text-[#002B6B]">Expert Team</span>
              </div>
              <p className="text-xs text-slate-500">Dedicated specialists for every aspect of your growth.</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B6B] mb-6">Why Choose Brandiffy?</h2>
            <p className="text-base md:text-lg text-slate-600 mb-8">
              We don't just deliver services; we deliver measurable growth. Our in-house team ensures quality, speed, and consistency across all channels.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'In-House Production', desc: 'No outsourcing. We control the quality from start to finish.' },
                { title: 'Data-Driven Strategy', desc: 'Decisions backed by analytics, not guesswork.' },
                { title: 'Transparent Reporting', desc: 'Real-time dashboards so you always know your ROI.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle className="w-6 h-6 text-[#0056D2]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#002B6B]">{item.title}</h4>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      
      


      <FAQ />

      <Contact />
    </>
  );
};

export default Home;
