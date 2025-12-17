import React from 'react';
import { Link } from 'react-router-dom';

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

export default Footer;
