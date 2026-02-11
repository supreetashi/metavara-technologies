import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coreServicesOpen, setCoreServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="main-nav">
      <div className="nav-content">
        <div style={{ position: 'relative' }}>
          <div className="logo">
            <span>Metavara Technologies</span>
          </div>
          <button className="menu-toggle" onClick={toggleMobileMenu}>
            ☰
          </button>
        </div>
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} id="navMenu">
          <li className="nav-item">
            <Link className={`nav-link ${isActive('/')}`} to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <span 
              className="nav-link" 
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              About
            </span>
            <div className={`dropdown-menu ${aboutOpen ? 'show' : ''}`}>
              <Link className={`dropdown-item ${isActive('/about')}`} to="/about">
                About Metavara
              </Link>
              <Link className={`dropdown-item ${isActive('/leadership')}`} to="/leadership">
                Leadership
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <span 
              className="nav-link" 
              onClick={() => setCoreServicesOpen(!coreServicesOpen)}
            >
              Core Services
            </span>
            <div className={`dropdown-menu ${coreServicesOpen ? 'show' : ''}`}>
              <Link className={`dropdown-item ${isActive('/digital-transformation')}`} to="/digital-transformation">
                Digital Transformation
              </Link>
              <Link className={`dropdown-item ${isActive('/cyber-security')}`} to="/cyber-security">
                Cyber Security
              </Link>
              <Link className={`dropdown-item ${isActive('/it-consulting')}`} to="/it-consulting">
                IT Consulting
              </Link>
              <Link className={`dropdown-item ${isActive('/it-solutions')}`} to="/it-solutions">
                IT Solutions Provider
              </Link>
              <Link className={`dropdown-item ${isActive('/ai-solutions')}`} to="/ai-solutions">
                AI-Based Solutions
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${isActive('/our-work')}`} to="/our-work">
              Our Work
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${isActive('/industries')}`} to="/industries">
              Industries
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${isActive('/our-services')}`} to="/our-services">
              Our Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${isActive('/our-people')}`} to="/our-people">
              Our People
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${isActive('/our-clients')}`} to="/our-clients">
              Our Clients
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${isActive('/careers')}`} to="/careers">
              Careers
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${isActive('/contact')}`} to="/contact">
              Contact Details
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
