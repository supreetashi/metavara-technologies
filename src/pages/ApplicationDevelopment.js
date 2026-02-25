import React, { useState } from "react";
import { FaReact, FaAngular, FaVuejs, FaNodeJs, FaJava, FaDatabase, FaCloud, FaAws, FaMicrosoft } from "react-icons/fa";
import { SiNextdotjs, SiSpringboot, SiMongodb, SiPostgresql, SiMysql, SiRedis, SiGooglecloud } from "react-icons/si";
import "../styles/ApplicationDevelopment.css";

const techData = {
    frontend: {
        title: "Frontend", icon: <FaReact />,
        description: "We build responsive and high-performance user interfaces using modern frameworks.",
        technologies: [{ name: "React", icon: <FaReact /> }, { name: "Angular", icon: <FaAngular /> }, { name: "Vue.js", icon: <FaVuejs /> }, { name: "Next.js", icon: <SiNextdotjs /> }],
    },
    backend: {
        title: "Backend", icon: <FaNodeJs />,
        description: "We develop secure and scalable backend architectures and APIs.",
        technologies: [{ name: "Node.js", icon: <FaNodeJs /> }, { name: "Spring Boot", icon: <SiSpringboot /> }, { name: "Java", icon: <FaJava /> }],
    },
    database: {
        title: "Database", icon: <FaDatabase />,
        description: "Optimized data management solutions built for performance and scalability.",
        technologies: [{ name: "MongoDB", icon: <SiMongodb /> }, { name: "PostgreSQL", icon: <SiPostgresql /> }, { name: "MySQL", icon: <SiMysql /> }, { name: "Redis", icon: <SiRedis /> }],
    },
    cloud: {
        title: "Cloud", icon: <FaCloud />,
        description: "Secure and scalable cloud infrastructure solutions.",
        technologies: [{ name: "AWS", icon: <FaAws /> }, { name: "Azure", icon: <FaMicrosoft /> }, { name: "Google Cloud", icon: <SiGooglecloud /> }],
    },
};

const InfoCard = ({ cls, title, p1, p2 }) => (
    <section className={`${cls}-section`}>
        <div className={`${cls}-card`}>
            <h2>{title}</h2>
            <div className="description-box"><p>{p1}</p><p>{p2}</p></div>
        </div>
    </section>
);

const ApplicationDevelopment = () => {
    const [activeTech, setActiveTech] = useState("frontend");
    const [animKey, setAnimKey] = useState(0);
    const active = techData[activeTech];

    const handleTechChange = (key) => { setActiveTech(key); setAnimKey(k => k + 1); };

    return (
        <div className="content-section">

            <section className="hero-section">
                <div className="hero-label">Our Services</div>
                <h1 className="main-title">Application Development</h1>
                <p className="hero-description">
                    At Metavara Technologies, we build robust, scalable, and secure applications tailored to your business needs. Our application development services cover the entire lifecycle, from concept to deployment and maintenance.
                </p>
            </section>

            <InfoCard
                cls="custom" title="Custom Software Solutions"
                p1="We design and develop tailor-made software solutions that align perfectly with your business objectives. From enterprise-grade platforms and SaaS applications to internal management systems, our solutions are built using clean architecture principles and scalable design patterns."
                p2="Our development approach focuses on performance, security, and long-term maintainability. We ensure seamless system integrations, optimized workflows, and future-ready scalability so your software evolves as your business grows."
            />

            <section className="tech-section">
                <h2 className="section-title">Modern Tech Stack</h2>
                <div className="tech-grid">
                    {Object.entries(techData).map(([key, { icon, title }]) => (
                        <div key={key} className={`tech-card ${activeTech === key ? "active" : ""}`} onClick={() => handleTechChange(key)}>
                            <div className="tech-icon">{icon}</div>
                            <h3>{title}</h3>
                        </div>
                    ))}
                </div>

                <div key={animKey} className="tech-detail-card slide-in">
                    <h3>{active.title}</h3>
                    <p>{active.description}</p>
                    <div className="tech-icons-list">
                        {active.technologies.map((tech, i) => (
                            <div key={i} className="single-tech fade-up" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                                <div className="single-tech-icon">{tech.icon}</div>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <InfoCard
                cls="api" title="API Integration & Microservices"
                p1="We architect scalable microservices ecosystems that enable modular application development and independent service deployment. Our APIs are designed for high availability, strong security standards, and seamless third-party integrations."
                p2="Whether integrating payment gateways, enterprise systems, cloud services, or external data providers, we ensure reliable communication, optimized performance, and future-ready infrastructure built for distributed environments."
            />

        </div>
    );
};

export default ApplicationDevelopment;