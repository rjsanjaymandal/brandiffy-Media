import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
              <Link to="/portfolio" onClick={() => setIsOpen(false)} className="text-[#002B6B] font-medium">Portfolio</Link>
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

export default Navbar;
