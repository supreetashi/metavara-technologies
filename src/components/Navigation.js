import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import '../styles/Navigation.css';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coreServicesOpen, setCoreServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.trim() !== "") {
      navigate(`/search?q=${searchText}`);
    }
  };

  return (
    <nav className="main-nav">
      <div className="nav-content">

        <div className="top-bar">
          <div className="logo">
            <span>Metavara Technologies</span>
          </div>

          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="search-input"
            />
<button type="submit" className="search-btn">
  <FontAwesomeIcon icon={faSearch} />
</button>

          </form>

          <button className="menu-toggle" onClick={toggleMobileMenu}>
            ☰
          </button>
        </div>

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>

          <li className="nav-item">
            <Link className={`nav-link ${isActive('/')}`} to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <span className="nav-link" onClick={() => setAboutOpen(!aboutOpen)}>
              About
            </span>
            <div className={`dropdown-menu ${aboutOpen ? 'show' : ''}`}>
              <Link className="dropdown-item" to="/about">About Metavara</Link>
              <Link className="dropdown-item" to="/leadership">Leadership</Link>
            </div>
          </li>

          <li className="nav-item">
            <span className="nav-link" onClick={() => setCoreServicesOpen(!coreServicesOpen)}>
              Core Services
            </span>
            <div className={`dropdown-menu ${coreServicesOpen ? 'show' : ''}`}>
              <Link className="dropdown-item" to="/digital-transformation">Digital Transformation</Link>
              <Link className="dropdown-item" to="/cyber-security">Cyber Security</Link>
              <Link className="dropdown-item" to="/it-consulting">IT Consulting</Link>
              <Link className="dropdown-item" to="/it-solutions">IT Solutions Provider</Link>
              <Link className="dropdown-item" to="/ai-solutions">AI-Based Solutions</Link>
            </div>
          </li>

          <li className="nav-item"><Link className="nav-link" to="/our-work">Our Work</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/industries">Industries</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/our-services">Our Services</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/our-people">Our People</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/our-clients">Our Clients</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/careers">Careers</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact">Contact Details</Link></li>

        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
