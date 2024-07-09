
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./pages/contactUs/ContactUs";
import Home from './components/Home';

import Pages from "./routes/Pages";


const App = () => {
  return (
    <Router>
      <div className="hero-section-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/*" element={<Pages />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
