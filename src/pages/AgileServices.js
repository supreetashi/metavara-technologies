import React from 'react';
import '../styles/AgileServices.css';
import { FaSyncAlt, FaLayerGroup, FaUserGraduate } from 'react-icons/fa';

const services = [
    {
        icon: <FaSyncAlt />,
        title: "Agile Transformation",
        tag: "Framework Design",
        description: "Transitioning from waterfall to Agile is a cultural shift. We guide your teams through this transformation, establishing Scrum or Kanban frameworks that fit your specific organizational needs.",
    },
    {
        icon: <FaLayerGroup />,
        title: "DevOps Integration",
        tag: "Continuous Delivery",
        description: "Agile and DevOps go hand-in-hand. We integrate development and operations to shorten the system development life cycle, enabling continuous delivery with high software quality.",
    },
    {
        icon: <FaUserGraduate />,
        title: "Coaching & Training",
        tag: "Team Enablement",
        description: "Our certified Agile coaches provide hands-on training and mentorship to your teams, ensuring they understand Agile principles and can apply them effectively to drive project success.",
    },
];

const AgileServices = () => {
    return (
        <div className="page-wrapper">

            {/* Hero */}
            <section className="page-hero">
                <div className="hero-label">Our Capabilities</div>
                <h1 className="page-title">Agile Services</h1>
                <div className="hero-divider" />
                <p className="page-subtitle">
                    At Metavara Technologies, we build robust, scalable, and secure applications tailored to your business needs. Our application development services cover the entire lifecycle, from concept to deployment and maintenance.
                </p>
                
                
            </section>

            {/* Services */}
            <section className="services-grid">
                {services.map((s, i) => (
                    <div key={i} className="service-card" style={{ animationDelay: `${0.1 + i * 0.15}s` }}>
                        <div className="card-top">
                            <div className="card-icon">{s.icon}</div>
                            <span className="card-tag">{s.tag}</span>
                        </div>
                        <h2 className="card-title">{s.title}</h2>
                        <p className="card-desc">{s.description}</p>
                        <div className="card-footer">
                            <span className="card-index">0{i + 1}</span>
                        </div>
                    </div>
                ))}
            </section>

        </div>
    );
};

export default AgileServices;