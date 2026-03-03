import React from 'react';
import ServicePage from '../components/ServicePage';

const config = {
  hero: {
    title: 'Cyber',
    highlight: 'Security',
    desc: 'In a digital landscape fraught with sophisticated threats, robust security is the bedrock of business continuity. Metavara provides comprehensive security solutions designed to protect your assets, ensure compliance, and maintain customer trust.',
    heroImg: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1800&q=90&fit=crop',
  },
  cards: [
    {
      accent: '#c62828',
      icon: '🛡️',
      tag: 'Strategy',
      title: 'Enterprise Security Strategy',
      desc: 'We work with you to define a security posture that aligns with your business objectives. From risk assessment to policy formulation, we build a roadmap that addresses your specific vulnerabilities.',
      img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80&fit=crop',
    },
    {
      accent: '#b71c1c',
      icon: '🔍',
      tag: 'Detection',
      title: 'Advanced Threat Detection & Response',
      desc: 'Leveraging AI-driven security operations, we monitor your environment 24/7 to detect anomalies and potential breaches in real-time. Our rapid response protocols minimize impact and ensure quick recovery.',
      img: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80&fit=crop',
    },
    {
      accent: '#1a237e',
      icon: '☁️',
      tag: 'Cloud Security',
      title: 'Cloud & Application Security',
      desc: 'Secure your digital transformation. We integrate security into the DevOps pipeline (DevSecOps), ensuring that your applications and cloud infrastructure are secure by design, not as an afterthought.',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&fit=crop',
    },
    {
      accent: '#1b5e20',
      icon: '📋',
      tag: 'Compliance',
      title: 'Compliance & Governance',
      desc: 'Navigate the complex landscape of regulatory requirements — GDPR, HIPAA, SOC 2, ISO 27001 — with confidence. Our experts help you establish governance frameworks that ensure continuous compliance and audit readiness.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&fit=crop',
    },
  ],
  why: {
    title: 'Security That Enables, Not Restricts',
    body: 'With Metavara, security is an enabler, not a bottleneck. We empower you to innovate boldly, knowing your organization is shielded by world-class protection. Secure your future — before it\'s threatened.',
  },
};

const CyberSecurity = () => <ServicePage config={config} />;
export default CyberSecurity;
