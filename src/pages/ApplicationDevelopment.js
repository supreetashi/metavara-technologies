import React from 'react';
import ServicePage from '../components/ServicePage';

const config = {
    hero: {
        title: 'Application',
        highlight: 'Development',
        desc: 'We build robust, scalable, and secure applications tailored to your business needs — covering the entire lifecycle from concept to deployment and continuous maintenance.',
        heroImg: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=1800&q=90&fit=crop',
    },
    cards: [
        {
            accent: '#1565c0',
            icon: '🖥️',
            tag: 'Web Applications',
            title: 'Enterprise Web Platforms',
            desc: 'We specialize in creating bespoke enterprise-grade web platforms that drive efficiency and innovation. From complex ERP systems to customer portals, our solutions are built to scale.',
            img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80&fit=crop',
        },
        {
            accent: '#0277bd',
            icon: '🔌',
            tag: 'Integration',
            title: 'API & Microservices',
            desc: 'We architect scalable microservices and seamless API integrations to ensure your systems communicate efficiently, with modularity that makes your application easier to maintain and extend.',
            img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&fit=crop',
        },
        {
            accent: '#00695c',
            icon: '☁️',
            tag: 'Cloud-Native',
            title: 'Cloud-Native Development',
            desc: 'We leverage AWS, Azure, and GCP to build applications that are elastic, resilient, and cost-optimized. Containerized with Docker, orchestrated by Kubernetes — future-proof by design.',
            img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80&fit=crop',
        },
        {
            accent: '#c62828',
            icon: '🔒',
            tag: 'Security-First',
            title: 'Secure & Compliant Apps',
            desc: 'Security is baked into every line of code. We follow OWASP standards, implement secure auth flows, and ensure your application meets GDPR, HIPAA, and SOC 2 compliance requirements.',
            img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80&fit=crop',
        },

    ]
};

const ApplicationDevelopment = () => <ServicePage config={config} />;
export default ApplicationDevelopment;
