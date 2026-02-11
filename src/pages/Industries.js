import React from 'react';
import '../styles/Pages.css';

const Industries = () => {
  return (
    <div className="content-section">
      <h1>Industries</h1>
      <p>At Metavara, we specialize in delivering cutting-edge solutions in:</p>
      <div className="service-grid">
        <div className="service-card">
          <h3>Cyber Security</h3>
          <p>Protecting your business with advanced, reliable security frameworks</p>
        </div>
        <div className="service-card">
          <h3>AI Tools</h3>
          <p>Harnessing the power of artificial intelligence to transform operations and decision-making</p>
        </div>
        <div className="service-card">
          <h3>Digital Transformation</h3>
          <p>Enabling seamless modernization of processes for enhanced efficiency and growth</p>
        </div>
      </div>
      <div className="cta-box">
        <h3>Ready to elevate your business with unstoppable technology?</h3>
        <p>Connect with us to explore how we can partner for your success!</p>
      </div>
    </div>
  );
};

export default Industries;
