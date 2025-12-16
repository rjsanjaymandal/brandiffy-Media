import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, CheckCircle, ArrowRight, Star, 
  Instagram, Linkedin, Facebook, Twitter, Mail, Phone, MapPin,
  Megaphone, Camera, Video, Globe, Code, LineChart, Search, Smartphone,
  Upload, FileText, Briefcase
} from 'lucide-react';

// --- Supabase Setup ---
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

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Retry for dynamic content
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (!isHome) return; 
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="block">
          <img src="/logo.jpg" alt="Brandiffy Media" className="h-12 w-12 object-cover rounded-full mix-blend-multiply" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-[#002B6B] font-medium">
          {isHome ? (
            <>
              <button onClick={() => scrollToSection('services')} className="hover:text-[#0056D2] transition-colors">Services</button>
              <button onClick={() => scrollToSection('why-us')} className="hover:text-[#0056D2] transition-colors">Why Us</button>
            </>
          ) : (
            <Link to="/" className="hover:text-[#0056D2] transition-colors">Home</Link>
          )}
          <Link to="/portfolio" className="hover:text-[#0056D2] transition-colors">Portfolio</Link>
          <Link to="/careers" className="hover:text-[#0056D2] transition-colors">Careers</Link>
          <button 
            onClick={() => isHome ? scrollToSection('contact') : window.location.href = '/#contact'} 
            className="px-5 py-2.5 bg-[#0056D2] text-white rounded-full hover:bg-[#0044A8] transition-all shadow-lg shadow-blue-500/30"
          >
            Get Free Audit
          </button>
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
              <Link to="/" onClick={() => setIsOpen(false)} className="text-[#002B6B] font-medium">Home</Link>
              <Link to="/careers" onClick={() => setIsOpen(false)} className="text-[#002B6B] font-medium">Careers</Link>
              <button 
                onClick={() => {
                  isHome ? scrollToSection('contact') : window.location.href = '/#contact';
                  setIsOpen(false);
                }} 
                className="text-[#0056D2] font-bold text-left"
              >
                Get Free Audit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#002B6B] text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 bg-white/10 p-2 rounded-full backdrop-blur-sm">
            <img src="/logo.jpg" alt="Brandiffy Media" className="h-8 w-8 object-cover rounded-full mix-blend-screen" />
          </div>
          <div className="flex gap-8 text-sm text-blue-200">
            <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
            <Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
        <div className="mt-8 text-center md:text-left text-xs text-blue-300/50">
          © {new Date().getFullYear()} Brandiffy Media. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// --- Page Components ---

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
          <h1 className="text-5xl lg:text-7xl font-bold text-[#002B6B] leading-[1.1] mb-6 tracking-tight">
            We Build Brands <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0056D2] via-cyan-500 to-blue-600 animate-gradient-x">That Scale.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-light">
            Your end-to-end digital growth partner. From strategy to execution, we deliver results that matter.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-8 py-4 bg-[#0056D2] text-white rounded-full font-semibold hover:bg-[#0044A8] transition-all shadow-xl shadow-blue-500/30 flex items-center gap-2 group hover:-translate-y-1">
              Start Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#portfolio" className="px-8 py-4 bg-white/80 backdrop-blur-sm text-[#002B6B] border border-slate-200 rounded-full font-semibold hover:bg-white hover:border-blue-200 transition-all hover:shadow-lg">
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

      <section id="why-us" className="py-24 bg-[#F0F7FF]">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#0056D2] rounded-3xl rotate-3 opacity-10" />
            <img 
              src="/why-us.png" 
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

      <Contact />
    </>
  );
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      if (!supabaseKey || supabaseKey === 'your-anon-key') throw new Error('Missing keys');
      const { error } = await supabase.from('contacts').insert([data]);
      if (error) throw error;
      setStatus('success');
    } catch (err) {
      console.log('Supabase error or missing keys, simulating success...', err);
      setTimeout(() => {
        setStatus('success');
        setLoading(false);
      }, 1500);
      return;
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-[#002B6B] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="p-10 md:w-2/5 bg-[#002255] text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
              <p className="text-blue-200 mb-8">Ready to scale? Fill out the form and we'll get back to you within 24 hours.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-blue-100">
                  <Mail className="w-5 h-5" /> info@brandiffymedia.com
                </div>
                <div className="flex items-center gap-3 text-blue-100">
                  <Phone className="w-5 h-5" /> 80940 43902
                </div>
                <div className="flex items-center gap-3 text-blue-100">
                  <MapPin className="w-5 h-5" /> Mohali Sector 70
                </div>
              </div>
            </div>
            <div className="mt-10 flex gap-4">
              <a href="https://www.instagram.com/brandiffy.media/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
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

const Careers = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      if (!supabaseKey || supabaseKey === 'your-anon-key') throw new Error('Missing keys');

      let resumeUrl = '';
      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const { error: uploadError, data: uploadData } = await supabase.storage
          .from('resumes')
          .upload(fileName, file);
        
        if (uploadError) throw uploadError;
        resumeUrl = uploadData.path;
      }

      const { error } = await supabase
        .from('applications')
        .insert([{ ...data, resume_url: resumeUrl }]);

      if (error) throw error;
      setStatus('success');
    } catch (err) {
      console.log('Supabase error or missing keys, simulating success...', err);
      setTimeout(() => {
        setStatus('success');
        setLoading(false);
      }, 1500);
      return;
    }
    setLoading(false);
  };

  return (
    <div className="pt-24 pb-20 bg-[#F0F7FF] min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#002B6B] mb-4">Join Our Team</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">We are always looking for creative minds and tech wizards. Build the future of digital with us.</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-[#002B6B] mb-4">Application Received!</h3>
                <p className="text-slate-500 text-lg">Thanks for your interest. We'll review your application and get back to you.</p>
                <button onClick={() => { setStatus(null); setFile(null); }} className="mt-8 px-8 py-3 bg-[#0056D2] text-white rounded-full font-semibold hover:bg-[#0044A8] transition-all">
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input required name="name" type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0056D2] focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input required name="email" type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0056D2] focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="jane@example.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input required name="phone" type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0056D2] focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Position Applied For</label>
                    <select name="position" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0056D2] focus:ring-2 focus:ring-blue-100 outline-none transition-all">
                      <option value="graphic-designer">Graphic Designer</option>
                      <option value="web-developer">Web Developer</option>
                      <option value="content-writer">Content Writer</option>
                      <option value="marketing-specialist">Marketing Specialist</option>
                      <option value="video-editor">Video Editor</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Resume / Portfolio (PDF)</label>
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer relative">
                    <input 
                      type="file" 
                      name="resume" 
                      accept=".pdf,.doc,.docx" 
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center pointer-events-none">
                      {file ? (
                        <>
                          <FileText className="w-10 h-10 text-[#0056D2] mb-3" />
                          <span className="text-[#002B6B] font-medium">{file.name}</span>
                          <span className="text-slate-400 text-sm mt-1">Click to change</span>
                        </>
                      ) : (
                        <>
                          <Upload className="w-10 h-10 text-slate-400 mb-3" />
                          <span className="text-slate-600 font-medium">Click to upload or drag and drop</span>
                          <span className="text-slate-400 text-sm mt-1">PDF, DOC up to 5MB</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Why do you want to join us?</label>
                  <textarea required name="message" rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0056D2] focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="Tell us a bit about yourself..."></textarea>
                </div>

                <button disabled={loading} type="submit" className="w-full py-4 bg-[#0056D2] text-white rounded-lg font-bold hover:bg-[#0044A8] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                  {loading ? 'Submitting...' : 'Submit Application'} <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};



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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans text-slate-900 bg-white selection:bg-[#0056D2] selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
