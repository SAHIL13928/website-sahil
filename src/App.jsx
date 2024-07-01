//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="hero-section-background">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
