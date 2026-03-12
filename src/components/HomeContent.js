import React from "react";
import "../styles/HomeContent.css";
import { Link } from "react-router-dom";

const HomeContent = () => {
  return (
    <div className="home-content-wrapper">
      {/* Featured Insights Section */}
      {/* Featured Insights Section */}
      <section className="insights-section">
        <div className="section-header">
          <h2 className="section-title">Latest Thinking</h2>
          <a href="/blogs" className="view-all-link">
            View All Insights &rarr;
          </a>
        </div>

        <div className="insights-grid">
          {/* Insight Card 1 */}
          <div
            className="insight-card"
            style={{ cursor: "pointer" }}
            onClick={() =>
              window.open(
                "https://www.technologyreview.com/topic/artificial-intelligence",
                "_blank",
              )
            }
          >
            <div
              className="insight-image"
              style={{
                background: "linear-gradient(135deg, #1e293b, #334155)",
              }}
            >
              <span className="insight-type">Article</span>
            </div>
            <div className="insight-content">
              <span className="insight-date">Latest Analysis</span>
              <h3 className="insight-title">
                The Rise of Agentic AI: Beyond Chatbots
              </h3>
              <p className="insight-snippet">
                From reactive LLMs to autonomous agents: How the next generation
                of AI will plan, reason, and execute complex enterprise
                workflows without human intervention.
              </p>
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "#0ea5e9",
                  fontWeight: "600",
                  marginTop: "auto",
                }}
              >
                Read on MIT Tech Review &rarr;
              </span>
            </div>
          </div>

          {/* Insight Card 2 */}
          <div
            className="insight-card"
            style={{ cursor: "pointer" }}
            onClick={() =>
              window.open(
                "https://www.microsoft.com/en-us/research/blog/",
                "_blank",
              )
            }
          >
            <div
              className="insight-image"
              style={{
                background: "linear-gradient(135deg, #0f172a, #1e40af)",
              }}
            >
              <span className="insight-type">Tech Guide</span>
            </div>
            <div className="insight-content">
              <span className="insight-date">Technology Trends</span>
              <h3 className="insight-title">
                Small Language Models (SLMs): The Future of Edge AI
              </h3>
              <p className="insight-snippet">
                Why enterprises are shifting towards specialized, efficient, and
                privacy-focused SLMs running locally on devices, reducing cloud
                costs and latency.
              </p>
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "#0ea5e9",
                  fontWeight: "600",
                  marginTop: "auto",
                }}
              >
                Read on Microsoft Research &rarr;
              </span>
            </div>
          </div>

          {/* Insight Card 3 */}
          <div
            className="insight-card"
            style={{ cursor: "pointer" }}
            onClick={() =>
              window.open(
                "https://www.nature.com/subjects/quantum-information",
                "_blank",
              )
            }
          >
            <div
              className="insight-image"
              style={{
                background: "linear-gradient(135deg, #0e7490, #155e75)",
              }}
            >
              <span className="insight-type">Research</span>
            </div>
            <div className="insight-content">
              <span className="insight-date">Deep Dive</span>
              <h3 className="insight-title">
                Quantum Machine Learning: The Next Frontier
              </h3>
              <p className="insight-snippet">
                Exploring the convergence of quantum computing and neural
                networks. Are we ready for the exponential leap in processing
                power for complex optimization problems?
              </p>
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "#0ea5e9",
                  fontWeight: "600",
                  marginTop: "auto",
                }}
              >
                Read on Nature &rarr;
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Future of AI Banner */}
      <section className="ai-future-banner">
        <div className="ai-content">
          <span className="ai-tag">Metavara Intelligence</span>
          <h2 className="ai-title">Shaping the Cognitive Enterprise</h2>
          <p className="ai-description">
            We are entering an era where AI doesn't just assist—it reasons,
            predicts, and acts. Metavara is at the forefront of building
            autonomous systems that drive decision efficacy.
          </p>
          {/* <a href="/ai-ml" className="btn-outline" style={{borderColor: '#38bdf8', color: '#38bdf8'}}>Explore Our AI Solutions</a> */}
        </div>
      </section>

      {/* Services Preview */}
      <div className="cs-section">
        <div className="cs-section-header">
          <div className="cs-section-text">
            <span></span>
            <p>Our Services</p>
            <span></span>
          </div>

          <Link to="/services" className="cs-link">
  See More
</Link>

        </div>

        <div className="cs-service-grid">
          <Link to="/application-development" className="cs-card-link">
            <div className="cs-card cs-card-in">
              <div className="cs-card-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Enterprise Web Platforms"
                  loading="lazy"
                />
                 <div className="cs-card-overlay">
                <span className="cs-card-cta">See More</span>
              </div>
                <div className="cs-card-ring"></div>
                <div className="cs-card-icon-badge">🧑‍💻</div>
              </div>
              <div className="cs-card-body">
                <div className="cs-card-tag">Software</div>
                <h3>Application Development</h3>
                <p>
                  We create reliable and scalable applications tailored to
                  business needs. From design to deployment, we focus on
                  performance, security, and long-term maintainability.
                </p>
              </div>
              <div className="cs-card-bar"></div>
            </div>
          </Link>

          <Link to="/mobile-app-development" className="cs-card-link">
            <div className="cs-card cs-card-in">
              <div className="cs-card-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="API &amp; Microservices"
                  loading="lazy"
                />
                 <div className="cs-card-overlay">
                <span className="cs-card-cta">See More</span>
              </div>
                <div className="cs-card-ring"></div>
                <div className="cs-card-icon-badge">📱</div>
              </div>
              <div className="cs-card-body">
                <div className="cs-card-tag">Mobile</div>
                <h3>Mobile App Development</h3>
                <p>
                  We build powerful mobile experiences for modern users. Our
                  applications are designed for performance, scalability, and
                  seamless usability across Android and iOS platforms.
                </p>
              </div>
              <div className="cs-card-bar"></div>
            </div>
          </Link>

          <Link to="/cyber-security" className="cs-card-link">
            <div className="cs-card cs-card-in">
              <div className="cs-card-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Cloud-Native Development"
                  loading="lazy"
                />
                 <div className="cs-card-overlay">
                <span className="cs-card-cta">See More</span>
              </div>
                <div className="cs-card-ring"></div>
                <div className="cs-card-icon-badge">🔐</div>
              </div>
              <div className="cs-card-body">
                <div className="cs-card-tag">Customer Focus</div>
                <h3>Cyber Security</h3>
                <p>
                  We protect businesses through proactive security strategies.
                  We identify vulnerabilities, strengthen defenses, and
                  safeguard critical systems to ensure data integrity and
                  business continuity.
                </p>
              </div>
              <div className="cs-card-bar"></div>
            </div>
          </Link>
        </div>
      </div>


      {/* Upcoming Events Section */}
      <section className="events-section">
        <div className="events-container">
          <div className="section-header">
            <h2 className="section-title">Upcoming Events</h2>
            <span
              className="view-all-link"
              style={{ cursor: "default", color: "#64748b" }}
            >
              Stay Tuned
            </span>
          </div>

          <div className="event-row" style={{ borderBottom: "none" }}>
            <div
              className="event-details"
              style={{ textAlign: "center", width: "100%" }}
            >
              <h3>Events Coming Soon</h3>
              <p
                className="event-meta"
                style={{ justifyContent: "center", display: "flex" }}
              >
                We are planning exciting webinars and community meetups.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
