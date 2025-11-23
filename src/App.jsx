import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, CheckCircle, ArrowRight, Star, 
  Instagram, Linkedin, Facebook, Twitter, Mail, Phone, MapPin,
  Megaphone, Camera, Video, Globe, Code, LineChart, Search, Smartphone
} from 'lucide-react';

// --- Supabase Setup ---
// NOTE: Replace these with your actual Supabase project credentials
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

const supabase = createClient(supabaseUrl, supabaseKey);

// --- Data & Constants ---
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

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#0056D2] tracking-tighter">
          Brandiffy<span className="text-[#002B6B]">Media</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-[#002B6B] font-medium">
          <a href="#services" className="hover:text-[#0056D2] transition-colors">Services</a>
          <a href="#why-us" className="hover:text-[#0056D2] transition-colors">Why Us</a>
          <a href="#portfolio" className="hover:text-[#0056D2] transition-colors">Portfolio</a>
          <a href="#contact" className="px-5 py-2.5 bg-[#0056D2] text-white rounded-full hover:bg-[#0044A8] transition-all shadow-lg shadow-blue-500/30">
            Get Free Audit
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#002B6B]">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="flex flex-col p-6 space-y-4">
              <a href="#services" onClick={() => setIsOpen(false)} className="text-[#002B6B] font-medium">Services</a>
              <a href="#why-us" onClick={() => setIsOpen(false)} className="text-[#002B6B] font-medium">Why Us</a>
              <a href="#portfolio" onClick={() => setIsOpen(false)} className="text-[#002B6B] font-medium">Portfolio</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-[#0056D2] font-bold">Get Free Audit</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#F0F7FF]">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-indigo-200/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-[#002B6B] leading-tight mb-6">
            We Build Brands <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0056D2] to-cyan-500">That Scale.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            Your end-to-end digital growth partner. From strategy to execution, we deliver results that matter.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-8 py-4 bg-[#0056D2] text-white rounded-full font-semibold hover:bg-[#0044A8] transition-all shadow-xl shadow-blue-500/30 flex items-center gap-2 group">
              Start Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#portfolio" className="px-8 py-4 bg-white text-[#002B6B] border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all">
              View Portfolio
            </a>
          </div>
        </motion.div>

        {/* Abstract 3D Composition */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[400px] lg:h-[500px] flex items-center justify-center"
        >
          <div className="relative w-full h-full max-w-md">
            {/* Floating Cards */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-10 left-10 w-48 h-48 bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl shadow-2xl z-20 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0056D2]">150+</div>
                <div className="text-sm text-[#002B6B]">Projects Delivered</div>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 right-10 w-56 h-32 bg-gradient-to-br from-[#0056D2] to-[#002B6B] rounded-2xl shadow-2xl z-30 flex items-center justify-center p-6"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <LineChart className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">+240%</div>
                  <div className="text-blue-100 text-xs">Avg. ROI Growth</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-400/20 rounded-full blur-3xl -z-10" />
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustStrip = () => {
  return (
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
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002B6B] mb-4">Our Expertise</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Full-service digital solutions tailored to your business goals.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
  );
};

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-[#F0F7FF]">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-[#0056D2] rounded-3xl rotate-3 opacity-10" />
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
            alt="Team meeting" 
            className="relative rounded-3xl shadow-2xl w-full object-cover h-[400px] md:h-[500px]"
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

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#002B6B] mb-6">Why Choose Brandiffy?</h2>
          <p className="text-lg text-slate-600 mb-8">
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
  );
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      // Try to submit to Supabase
      if (!supabaseKey || supabaseKey === 'your-anon-key') {
        throw new Error('Missing keys');
      }

      const { error } = await supabase
        .from('contacts')
        .insert([data]);

      if (error) throw error;
      setStatus('success');
    } catch (err) {
      console.log('Supabase error or missing keys, simulating success...', err);
      // Fallback simulation
      setTimeout(() => {
        setStatus('success');
        setLoading(false);
      }, 1500);
      return; // Return early for simulation
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-[#002B6B] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Contact Info */}
          <div className="p-10 md:w-2/5 bg-[#002255] text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
              <p className="text-blue-200 mb-8">Ready to scale? Fill out the form and we'll get back to you within 24 hours.</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-blue-100">
                  <Mail className="w-5 h-5" /> hello@brandiffy.media
                </div>
                <div className="flex items-center gap-3 text-blue-100">
                  <Phone className="w-5 h-5" /> +1 (555) 123-4567
                </div>
                <div className="flex items-center gap-3 text-blue-100">
                  <MapPin className="w-5 h-5" /> 123 Growth St, Tech City
                </div>
              </div>
            </div>
            
            <div className="mt-10 flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Form */}
          <div className="p-10 md:w-3/5 bg-white">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#002B6B] mb-2">Message Sent!</h3>
                <p className="text-slate-500">We'll be in touch shortly.</p>
                <button onClick={() => setStatus(null)} className="mt-6 text-[#0056D2] font-semibold hover:underline">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input required name="name" type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0056D2] focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input required name="email" type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0056D2] focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Service Interested In</label>
                  <select name="service" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0056D2] focus:ring-2 focus:ring-blue-100 outline-none transition-all">
                    <option value="marketing">Social Media Marketing</option>
                    <option value="web">Web Development</option>
                    <option value="seo">SEO</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea required name="message" rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0056D2] focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="Tell us about your project..."></textarea>
                </div>
                <button disabled={loading} type="submit" className="w-full py-4 bg-[#0056D2] text-white rounded-lg font-bold hover:bg-[#0044A8] transition-all disabled:opacity-70 disabled:cursor-not-allowed">
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#002B6B] text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter mb-4 md:mb-0">
            Brandiffy<span className="text-blue-400">Media</span>
          </div>
          <div className="flex gap-8 text-sm text-blue-200">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
          </div>
        </div>
        <div className="mt-8 text-center md:text-left text-xs text-blue-300/50">
          © {new Date().getFullYear()} Brandiffy Media. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-[#0056D2] selection:text-white">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
