
import "../styles/Footer.css";
import { Link, useLocation } from 'react-router-dom';



import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <img
            src="https://github.com/karnamsreevidya/metavara/blob/main/static/images/metavara-logo.png?raw=true"
            alt="Metavara Technologies"
            className="footer-logo"
          />
          <h2 className="brand-name">Metavara Technologies</h2>
          <p className="tagline">
            <h3>Empowering CyberNov</h3>
            IT Services and IT Consulting
          </p>

          <div className="social-icons">
            <a href="https://www.linkedin.com/company/metavara-technologies-090934386/" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
          <a href=" https://www.facebook.com/profile.php?id=61587819560688" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>

          <a href="https://x.com/home" target="_blank" rel="noreferrer">
            <FaXTwitter />
          </a>

          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
          <a href=" https://www.instagram.com/metavaratechnologies/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
            
          </div>
        </div>

        
        <div className="footer-column">
          <h3>Address</h3>
          <p>
            HNO01 SRIMAN NILAYA MEENAKSHI LAYOUT
            SIDDAPURA Bangalore, Karnataka 560066
            India
          </p>  
<br />   
         <div className="contact-info">
          <a href="tel:+919538027892" className="footer-link">
    9538027892
  </a>
      <br />     
  <a href="mailto:mvt.hr@metavaratechnologies.com" className="footer-link">
     mvt.hr@metavaratechnologies.com
  </a>
</div>
        </div>
        <div className="About-us">
          <h3>About us</h3>
          <p><Link to="/about">About Us</Link></p>
          <p><Link to="/careers">Careers</Link></p> 


          <h3 className="service-title">Our Service</h3>
          <p><Link to="/our-services">Services</Link></p>
         
        </div>

        <div className="quick-Links">
          <h3>Quick Links</h3>
          <p><Link to="/support">Support</Link></p>
           <p><Link to="/Gallery">Gallery</Link></p>
          
        </div>
      </div>

      <div className="footer-bottom">
        <p> © 2026 Metavara Technologies Pvt Ltd - All Rights Reserved. </p>
        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link> 
          <Link to="/terms-of-use">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
