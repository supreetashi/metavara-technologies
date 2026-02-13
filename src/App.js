import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Leadership from './pages/Leadership';
import DigitalTransformation from './pages/DigitalTransformation';
import CyberSecurity from './pages/CyberSecurity';
import ITConsulting from './pages/ITConsulting';
import ITSolutions from './pages/ITSolutions';
import AISolutions from './pages/AISolutions';
import OurWork from './pages/OurWork';
import Industries from './pages/Industries';
import OurServices from './pages/OurServices';
import OurPeople from './pages/OurPeople';
import OurClients from './pages/OurClients';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import SearchResults from './pages/SearchResults';

import './styles/index.css';
import Support from './pages/Support';
import Gallery from './pages/Gallery';

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";


// ScrollToTop component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/it-consulting" element={<ITConsulting />} />
          <Route path="/it-solutions" element={<ITSolutions />} />
          <Route path="/ai-solutions" element={<AISolutions />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/our-people" element={<OurPeople />} />
          <Route path="/our-clients" element={<OurClients />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          <Route path="/Gallery" element={<Gallery />} />

           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />


        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
