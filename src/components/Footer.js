import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn,FaXTwitter,FaFacebookF, FaInstagram} from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="modern-footer">
      <div className="modern-footer-content">
        <div className="footer-top-row">
          <div className="footer-col footer-col-brand">
            <div className="footer-logo-block">
              <img src="/metavara-logo.png" alt="Metavara Technologies" className="footer-logo-img" />
              <div className="footer-logo-text-group">
                <span className="footer-meta">META</span>
                <span className="footer-vara">VARA</span>
                <span className="footer-technologies">TECHNOLOGIES</span>
              </div>
            </div>
            <p className="footer-slogan">Empowering CyberNova IT services and consulting solutions.</p>
            <div className="footer-social-icons">
              <a href="https://www.linkedin.com/company/109353301/" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://x.com/" target="_blank" rel="noreferrer">
                <FaXTwitter />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61587819560688" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/metavaratechnologies/" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h3 className="footer-heading">Company</h3>
            <div className="footer-links-list">
              <Link to="/about">About</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/events">Events</Link>
            </div>
          </div>
          <div className="footer-col">
            <h3 className="footer-heading">Support</h3>
            <div className="footer-links-list">
              <Link to="/contact">Help Center</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms">Terms</Link>
            </div>
          </div>
          <div className="footer-col footer-col-contact">
            <h3 className="footer-heading">Contact</h3>
            {/* Contact Info */}
            {/* You can add contact info here */}
          </div>  
        </div>  
        {/* Footer Bottom Row */}
        {/* This section is typically used for copyright information */}
        {/* Example: */}
        {/* Copyright information */}
        {/* The copyright text is usually static and not dynamic */}
        {/* So we keep it simple and static in the footer component */}
        {/* If you want dynamic copyright year, you can use JavaScript Date object */}
        {/* But for simplicity, we keep it static here */}
        {/* If you want dynamic copyright year, uncomment the following line and remove the static one below */}
        {/* const currentYear = new Date().getFullYear(); */}

        {/* Static Copyright Text */}
        {/* If you want dynamic copyright year, uncomment the following line and remove the static one below */}
        {/* © {currentYear} Metavara Technologies Pvt Ltd. All rights reserved. */}

        {/* Static Copyright Text (Default) */}
        { /* © 2026 Metavara Technologies Pvt Ltd. All rights reserved. */ }
      </div>  
    </footer>  
  );
};

export default Footer;
