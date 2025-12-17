import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Careers from './pages/Careers';

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
