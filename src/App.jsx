import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ContactUs from "./components/ContactUs";
import HeroSection2 from './components/HeroSection2';
import Services from './components/Services';

const App = () => {
  return (
    <Router>
      <div className="hero-section-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>

        <HeroSection2/>
        <Services/>
        
        
      </div>
    </Router>
  );
}

export default App;
