import { useState } from "react";

import '../styles/CyberSecurity.css';

const CyberSecurity = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="content-section">
      <h1>Cyber Security</h1>
      <p>
        In a digital landscape fraught with sophisticated threats, robust security is the bedrock of business continuity.
        Metavara Technologies provides comprehensive Cyber Security solutions designed to protect your assets, ensure compliance, and maintain the trust of your customers.
      </p>

      <h2>Holistic Threat Protection</h2>
      <p>
        We move beyond simple perimeter defense to a Zero Trust architecture. Our security framework ensures that every access request is authenticated, authorized, and encrypted, regardless of where it originates.
      </p>

      <div className="cyber-cards">

        <div
          className={`cyber-card ${hoveredCard === 1 ? "active" : ""}`}
          onMouseEnter={() => setHoveredCard(1)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* animated background glow */}
          <div className="card-glow"></div>

          {/* top icon area */}
          <div className="card-icon-wrap">
            <span className="card-icon">🛡️</span>
            <div className="card-icon-ring"></div>
          </div>

          {/* normal visible content */}
          <h3>Enterprise Security Strategy</h3>
          <p>From risk assessment to policy formulation, we build a roadmap for your vulnerabilities.</p>

          {/* overlay that slides up on hover */}
          <div className="card-overlay">
            <span className="overlay-icon">🛡️</span>
            <h3>Enterprise Security Strategy</h3>
            <p>
              We work with you to define a security posture that aligns with your business objectives. From risk assessment to policy formulation, we build a roadmap that addresses your specific vulnerabilities.
            </p>
          </div>
        </div>

        <div
          className={`cyber-card ${hoveredCard === 2 ? "active" : ""}`}
          onMouseEnter={() => setHoveredCard(2)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="card-glow"></div>
          <div className="card-icon-wrap">
            <span className="card-icon">🔍</span>
            <div className="card-icon-ring"></div>
          </div>
          <h3>Advanced Threat Detection & Response</h3>
          <p>We monitor your environment 24/7 to detect anomalies and potential breaches in real-time.</p>
          <div className="card-overlay">
            <span className="overlay-icon">🔍</span>
            <h3>Advanced Threat Detection & Response</h3>
            <p>
              Leveraging AI-driven security operations, we monitor your environment 24/7 to detect anomalies and potential breaches in real-time. Our rapid response protocols minimize impact and ensure quick recovery.
            </p>
          </div>
        </div>

        <div
          className={`cyber-card ${hoveredCard === 3 ? "active" : ""}`}
          onMouseEnter={() => setHoveredCard(3)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="card-glow"></div>
          <div className="card-icon-wrap">
            <span className="card-icon">☁️</span>
            <div className="card-icon-ring"></div>
          </div>
          <h3>Cloud & Application Security</h3>
          <p>We integrate security into the DevOps pipeline ensuring your cloud infrastructure is secure.</p>
          <div className="card-overlay">
            <span className="overlay-icon">☁️</span>
            <h3>Cloud & Application Security</h3>
            <p>
              Secure your digital transformation. We integrate security into the DevOps pipeline (DevSecOps), ensuring that your applications and cloud infrastructure are secure by design, not as an afterthought.
            </p>
          </div>
        </div>

        <div
          className={`cyber-card ${hoveredCard === 4 ? "active" : ""}`}
          onMouseEnter={() => setHoveredCard(4)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="card-glow"></div>
          <div className="card-icon-wrap">
            <span className="card-icon">📋</span>
            <div className="card-icon-ring"></div>
          </div>
          <h3>Compliance & Governance</h3>
          <p>Navigate GDPR, HIPAA, SOC 2 with confidence using our governance frameworks.</p>
          <div className="card-overlay">
            <span className="overlay-icon">📋</span>
            <h3>Compliance & Governance</h3>
            <p>
              Navigate the complex landscape of regulatory requirements (GDPR, HIPAA, SOC 2) with confidence. Our experts help you establish governance frameworks that ensure continuous compliance and audit readiness.
            </p>
          </div>
        </div>

      </div>

      <h2>Secure Your Future</h2>
      <p>
        With Metavara, security is an enabler, not a bottleneck. We empower you to innovate boldly, knowing that your organization is shielded by world-class protection.
      </p>
    </div>
  );
};

export default CyberSecurity;
