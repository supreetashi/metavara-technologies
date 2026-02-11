import React from 'react';
import '../styles/Pages.css';

const OurServices = () => {
  return (
    <div className="content-section">
      <h1>Our Services</h1>
      <div className="service-grid">
        <div className="service-card">
          <h3>Cyber Security</h3>
        </div>
        <div className="service-card">
          <h3>Agile</h3>
        </div>
        <div className="service-card">
          <h3>Program and Project Management</h3>
        </div>
        <div className="service-card">
          <h3>AI & ML</h3>
        </div>
        <div className="service-card">
          <h3>Application Development</h3>
        </div>
        <div className="service-card">
          <h3>Mobile Application Development</h3>
        </div>
        <div className="service-card">
          <h3>Digital Transformation</h3>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
