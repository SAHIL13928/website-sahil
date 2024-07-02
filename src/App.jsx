//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="hero-section-background">
      <Navbar />
      <HeroSection />
      <Footer />
      <Chat />
    </div>
  );
}

export default App;
