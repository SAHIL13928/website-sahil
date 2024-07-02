//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="hero-section-background">
      <Navbar />
      <HeroSection />
      <Footer />

    </div>
  );
}

export default App;
