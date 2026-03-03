import React from 'react';
import ServicePage from '../components/ServicePage';

const config = {
  hero: {
    title: 'IT',
    highlight: 'Consulting',
    desc: 'Aligning technology with business strategy is critical for success. Metavara delivers expert IT consulting to navigate the complexities of the digital world, optimize your IT landscape, and drive sustainable growth.',
    heroImg: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1800&q=90&fit=crop',
  },
  cards: [
    {
      accent: '#1565c0',
      icon: '🗺️',
      tag: 'Strategy',
      title: 'Strategic Technology Planning',
      desc: 'We partner with your leadership to define a clear, actionable technology roadmap. By assessing your current capabilities and future goals, we identify the right technologies to invest in, ensuring maximum ROI and competitive advantage.',
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&fit=crop',
    },
    {
      accent: '#0277bd',
      icon: '🏗️',
      tag: 'Architecture',
      title: 'Enterprise Architecture',
      desc: 'Build a foundation for scalability. Our architects design robust, flexible enterprise systems that break down silos and facilitate seamless information flow across your organization.',
      img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80&fit=crop',
    },
    {
      accent: '#00695c',
      icon: '📉',
      tag: 'Optimization',
      title: 'IT Optimization & Cost Reduction',
      desc: 'Do more with less. We analyze your IT spend and infrastructure to identify inefficiencies. Through consolidation, modernization, and strategic sourcing, we help you reduce operational costs while improving performance.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fit=crop',
    },
    {
      accent: '#6a1b9a',
      icon: '🎯',
      tag: 'Governance',
      title: 'Delivery Governance & PMO',
      desc: 'Ensure project success with our rigorous governance frameworks. We help you establish a Project Management Office (PMO) that standardizes processes, manages risks, and ensures IT initiatives are delivered on time and within budget.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&fit=crop',
    },
  ],
  why: {
    title: 'Your Technology, Our Expertise',
    body: 'Metavara brings both strategic foresight and hands-on execution. We become an extension of your team — deeply committed to your outcomes, not just the engagement. Our client-first culture means we measure success by your success.',
  },
};

const ITConsulting = () => <ServicePage config={config} />;
export default ITConsulting;
