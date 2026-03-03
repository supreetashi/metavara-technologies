import React from 'react';
import ServicePage from '../components/ServicePage';

const config = {
    hero: {
        title: 'Program & Project',
        highlight: 'Management',
        desc: 'Executing complex initiatives requires precision, foresight, and disciplined management. Metavara provides comprehensive Program and Project Management services to ensure your strategic goals are met on time and within budget.',
        heroImg: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1800&q=90&fit=crop',
    },
    cards: [
        {
            accent: '#1565c0',
            icon: '🧭',
            tag: 'Strategy',
            title: 'Strategic Alignment',
            desc: 'We ensure that every project is aligned with your broader business objectives. Our program managers oversee multiple related projects to maximize benefits and control implementation across the organization.',
            img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&fit=crop',
        },
        {
            accent: '#c62828',
            icon: '⚠️',
            tag: 'Risk',
            title: 'Risk Management & Governance',
            desc: 'Proactive risk mitigation is at the core of our methodology. We establish robust governance frameworks to identify potential bottlenecks early and implement effective contingency plans before issues escalate.',
            img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80&fit=crop',
        },
        {
            accent: '#00695c',
            icon: '🏆',
            tag: 'Delivery',
            title: 'Delivery Excellence',
            desc: 'Using industry-standard methodologies (PMBOK, PRINCE2), we drive delivery excellence through rigorous planning, resource optimization, and crystal-clear communication channels that keep all stakeholders aligned.',
            img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&fit=crop',
        },
        {
            accent: '#6a1b9a',
            icon: '📊',
            tag: 'PMO',
            title: 'PMO Setup & Operations',
            desc: 'We help you establish and operate a world-class Project Management Office — from defining governance standards and templates to setting up reporting dashboards and portfolio management tools.',
            img: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80&fit=crop',
        },
    ],
    why: {
        title: 'Every Project, Delivered with Precision',
        body: 'Our project managers are more than administrators — they are leaders, problem-solvers, and strategic partners. We bring accountability and clarity to even the most complex multi-million dollar programs, ensuring your investments deliver real outcomes.',
    },
};

const ProgramProjectManagement = () => <ServicePage config={config} />;
export default ProgramProjectManagement;
