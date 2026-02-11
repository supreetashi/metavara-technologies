import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Welcome to Metavara Technologies</h1>
        <p>
          Metavara Technologies Private Limited is a next-generation IT services and solutions 
          company helping enterprises accelerate digital transformation through secure, scalable, 
          and AI-driven technologies.
        </p>
      </div>
    </div>
  );
};

export default Hero;
