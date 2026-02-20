
import React, { useEffect, useRef, useState } from 'react';
import '../styles/Pages.css';
import '../styles/Aiml.css';
import { FaBrain, FaRobot, FaChartLine, FaEye, FaShieldAlt } from 'react-icons/fa';

const services = [
  {
    id: 1,
    icon: <FaRobot />,
    color: '#1565c0',
    light: '#e8f0fe',
    tag: 'Generative AI',
    title: 'Generative AI & LLMs',
    desc: 'Stay ahead of the curve with our Generative AI solutions. We help businesses integrate Large Language Models (LLMs) to build smart assistants, content generation tools, and semantic search engines that revolutionize productivity.',
  },
  {
    id: 2,
    icon: <FaChartLine />,
    color: '#0277bd',
    light: '#e1f5fe',
    tag: 'Data Intelligence',
    title: 'Predictive Analytics',
    desc: 'Turn your data into actionable intelligence. Our predictive models help you forecast trends, optimize operations, and make data-driven decisions with confidence.',
  },
  {
    id: 3,
    icon: <FaEye />,
    color: '#006064',
    light: '#e0f7fa',
    tag: 'Vision & Language',
    title: 'Computer Vision & NLP',
    desc: 'From image recognition to natural language processing, we build systems that can see, read, and understand. Applied in quality control, automated customer support, and sophisticated document processing.',
  },
  {
    id: 4,
    icon: <FaShieldAlt />,
    color: '#1b5e20',
    light: '#e8f5e9',
    tag: 'Responsible AI',
    title: 'Ethical & Secure AI',
    desc: 'We are committed to building responsible AI. Our solutions are designed to be unbiased, transparent, and secure, ensuring that your AI adoption is ethical and compliant with regulations.',
  },
];


const useVisible = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
};

const Card = ({ item, index }) => {
  const [ref, visible] = useVisible();
  return (
    <div
      ref={ref}
      className={`aiml-card ${visible ? 'aiml-card-in' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
     
      <div className="aiml-card-strip" style={{ background: item.color }} />

      
      <div className="aiml-card-icon" style={{ background: item.light, color: item.color }}>
        {item.icon}
      </div>

      
      <div className="aiml-card-body">
        <span className="aiml-card-tag" style={{ color: item.color, background: item.light }}>
          {item.tag}
        </span>
        <h2 className="aiml-card-title">{item.title}</h2>
        <p className="aiml-card-desc">{item.desc}</p>
      </div>

      
      <div className="aiml-card-hover-bar" style={{ background: item.color }} />
    </div>
  );
};

const AIML = () => {
  const [heroRef, heroVisible] = useVisible();

  return (
    <div className="content-section aiml-page">

     
      <div ref={heroRef} className={`aiml-hero ${heroVisible ? 'aiml-hero-in' : ''}`}>

        <div className="aiml-hero-top">
          <div className="aiml-hero-icon-wrap">
            <FaBrain />
            <span className="aiml-ring aiml-ring-1" />
            <span className="aiml-ring aiml-ring-2" />
            <span className="aiml-ring aiml-ring-3" />
          </div>
          <div className="aiml-hero-text">
            <span className="aiml-label">Metavara Technologies</span>
            <h1>AI & <span className="aiml-accent">Machine Learning</span></h1>
            <p>
              Unlocking the power of data with robust Artificial Intelligence and Machine
              Learning solutions. Metavara Technologies empowers enterprises to automate
              processes, gain predictive insights, and create intelligent user experiences.
            </p>
          </div>
        </div>

        
        <div className="aiml-stats">
          {[['---+', 'AI Projects'], ['99%', 'Accuracy Rate'], ['24/7', 'AI Support'], ['5x', 'Faster Insights']].map(([val, lbl]) => (
            <div className="aiml-stat" key={lbl}>
              <strong>{val}</strong>
              <span>{lbl}</span>
            </div>
          ))}
        </div>
      </div>

      
      <div className="aiml-section-label">
        <span />
        <p>Our AI Capabilities</p>
        <span />
      </div>

      
      <div className="aiml-grid">
        {services.map((item, i) => (
          <Card key={item.id} item={item} index={i} />
        ))}
      </div>

    </div>
  );
};

export default AIML;
