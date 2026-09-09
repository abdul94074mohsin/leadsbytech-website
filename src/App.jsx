import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/Services';
import PortfolioPage from './pages/Portfolio';
import BlogPage from './pages/Blog';
import ContactPage from './pages/Contact';
import CareerPage from './pages/Career';
import CaseStudiesPage from './pages/CaseStudies';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
      </Routes>
    </Router>
  );
}

export default App;