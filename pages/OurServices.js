import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CoreServices.css';
import { handleImageError } from '../utils/imageFallback';

const servicesList = [
  {
    path: '/digital-transformation',
    title: 'Digital Transformation',
    desc: 'Re-engineer enterprises from the inside out — modernising infrastructure, cultures, and capabilities.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80&fit=crop',
    icon: '🌐',
  },
  {
    path: '/it-consulting',
    title: 'IT Consulting',
    desc: 'Expert IT consulting to navigate the complexities of the digital world, optimize your IT landscape, and drive growth.',
    img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80&fit=crop',
    icon: '💼',
  },
  {
    path: '/cyber-security',
    title: 'Cyber Security',
    desc: 'Comprehensive security solutions designed to protect your assets, ensure compliance, and maintain trust.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80&fit=crop',
    icon: '🛡️',
  },
  {
    path: '/ai-ml',
    title: 'AI & Machine Learning',
    desc: 'Unlock the power of data to automate processes, gain predictive insights, and create intelligent experiences.',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80&fit=crop',
    icon: '🧠',
  },
  {
    path: '/application-development',
    title: 'Application Development',
    desc: 'Custom, scalable, and secure applications tailored to your business needs across the entire lifecycle.',
    img: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=600&q=80&fit=crop',
    icon: '💻',
  },
  {
    path: '/mobile-app-development',
    title: 'Mobile App Development',
    desc: 'Powerful iOS and Android solutions that engage users globally and drive measurable business outcomes.',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80&fit=crop',
    icon: '📱',
  },
  {
    path: '/program-project-management',
    title: 'Program & Project Mgmt',
    desc: 'Comprehensive management services to ensure your strategic goals are met on time and within budget.',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&fit=crop',
    icon: '📊',
  },
  {
    path: '/agile-services',
    title: 'Agile Services',
    desc: 'Embrace the Agile mindset to improve collaboration, speed, and quality throughout software delivery.',
    img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&q=80&fit=crop',
    icon: '🔄',
  },
];

const OurServices = () => {
  return (
    <div className="cs-page">
      <div className="cs-hero" style={{ minHeight: '400px' }}>
        <img
          className="cs-hero-img"
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1800&q=80&fit=crop"
          alt="Our Core Services"
          onError={handleImageError}
        />
        <div className="cs-hero-overlay" />
        <div className="cs-hero-content" style={{ paddingBottom: '40px' }}>
          <h1>
            Our{' '}
            <span className="cs-highlight-wrap">
              <span className="cs-h-left" />
              <span className="cs-highlight">Core Services</span>
              <span className="cs-h-right" />
            </span>
          </h1>
          <p className="cs-hero-desc">
            Explore our comprehensive suite of technology solutions designed to empower your business
            and drive sustainable digital transformation.
          </p>
        </div>
      </div>

      <div className="cs-section-label">
        <span /><p>Solutions Portfolio</p><span />
      </div>

      <div className="cs-services-grid">
        {servicesList.map((srv, i) => (
          <Link to={srv.path} key={i} style={{ textDecoration: 'none', display: 'flex' }}>
            <div className="cs-card cs-card-in" style={{ '--card-accent': '#1565c0', width: '100%' }}>
              <div className="cs-card-image-wrap">
                <img src={srv.img} alt={srv.title} loading="lazy" onError={handleImageError} />
                <div className="cs-card-ring" />
                <div className="cs-card-icon-badge">{srv.icon}</div>
              </div>
              <div className="cs-card-body">
                <h3>{srv.title}</h3>
                <p style={{ marginBottom: '20px' }}>{srv.desc}</p>
                <div style={{ marginTop: 'auto', color: '#1565c0', fontWeight: 'bold', fontSize: '0.9rem' }}>
                  Explore Service &rarr;
                </div>
              </div>
              <div className="cs-card-bar" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
