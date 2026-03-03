import React from 'react';
import ServicePage from '../components/ServicePage';

const config = {
  hero: {
    title: 'AI &',
    highlight: 'Machine Learning',
    desc: 'Unlocking the power of data with robust Artificial Intelligence and Machine Learning solutions. Metavara empowers enterprises to automate processes, gain predictive insights, and create intelligent user experiences.',
    heroImg: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1800&q=90&fit=crop',
  },
  cards: [
    {
      accent: '#1565c0',
      icon: '🤖',
      tag: 'Generative AI',
      title: 'Generative AI & LLMs',
      desc: 'Stay ahead of the curve with our Generative AI solutions. We integrate Large Language Models (LLMs) to build smart assistants, content generation tools, and semantic search engines that revolutionize productivity.',
      img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80&fit=crop',
    },
    {
      accent: '#0277bd',
      icon: '📈',
      tag: 'Data Intelligence',
      title: 'Predictive Analytics',
      desc: 'Turn your data into actionable intelligence. Our predictive models help you forecast trends, optimize operations, and make data-driven decisions with confidence using advanced ML algorithms.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fit=crop',
    },
    {
      accent: '#006064',
      icon: '👁️',
      tag: 'Vision & Language',
      title: 'Computer Vision & NLP',
      desc: 'From image recognition to natural language processing, we build systems that can see, read, and understand. Applied in quality control, automated customer support, and sophisticated document processing.',
      img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80&fit=crop',
    },
    {
      accent: '#1b5e20',
      icon: '⚖️',
      tag: 'Responsible AI',
      title: 'Ethical & Secure AI',
      desc: 'We are committed to building responsible AI. Our solutions are designed to be unbiased, transparent, and secure, ensuring that your AI adoption is ethical and compliant with global regulations.',
      img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&fit=crop',
    },
  ],
  why: {
    title: 'Intelligent Systems. Measurable ROI.',
    body: 'Our AI team combines data scientists, ML engineers, and domain experts. We bridge the gap between AI research and business impact, ensuring every model we build delivers real, measurable value to your organization.',
  },
};

const AIML = () => <ServicePage config={config} />;
export default AIML;
