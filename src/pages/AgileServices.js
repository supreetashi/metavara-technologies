import React from 'react';
import ServicePage from '../components/ServicePage';

const config = {
    hero: {
        title: 'Agile',
        highlight: 'Services',
        desc: 'Adapt to change faster and deliver value continuously. Metavara helps organizations embrace the Agile mindset to improve collaboration, speed, and quality — transforming how software and solutions are built and shipped.',
        heroImg: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1800&q=90&fit=crop',
    },
    cards: [
        {
            accent: '#1565c0',
            icon: '🔄',
            tag: 'Transformation',
            title: 'Agile Transformation',
            desc: 'Transitioning from waterfall to Agile is a cultural shift as much as a process change. We guide your teams through this transformation, establishing Scrum or Kanban frameworks that fit your specific organizational needs.',
            img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&fit=crop',
        },
        {
            accent: '#00695c',
            icon: '🚀',
            tag: 'DevOps',
            title: 'DevOps Integration',
            desc: 'Agile and DevOps go hand-in-hand. We integrate development and operations to shorten the system development life cycle, enabling continuous delivery with high software quality and automated pipelines.',
            img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80&fit=crop',
        },
        {
            accent: '#6a1b9a',
            icon: '🎓',
            tag: 'Coaching',
            title: 'Coaching & Training',
            desc: 'Our certified Agile coaches provide hands-on training and mentorship to your teams, ensuring they understand Agile principles and can apply them effectively to drive project success and continuous learning.',
            img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80&fit=crop',
        },
        {
            accent: '#e65100',
            icon: '📐',
            tag: 'Scaling',
            title: 'Scaled Agile (SAFe)',
            desc: 'For large enterprises, we implement the Scaled Agile Framework (SAFe) to align multiple Agile teams around shared objectives, enabling synchronized delivery at enterprise scale without sacrificing agility.',
            img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&fit=crop',
        },
    ],
    why: {
        title: 'Move Fast. Build Right. Deliver Value.',
        body: 'Agile is not a process — it is a mindset. Metavara helps your organization truly internalize Agile values, not just adopt its ceremonies. The result is a culture of continuous improvement, collaboration, and relentless focus on delivering value to your customers.',
    },
};

const AgileServices = () => <ServicePage config={config} />;
export default AgileServices;
