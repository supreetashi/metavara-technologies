import React from "react";
import { Link } from "react-router-dom";

const ServicesPreview = () => {
  return (
    <div className="cs-page">
      {/* <h1>About Metavara</h1> */}

      <div className="cs-hero">
        <img
          className="cs-hero-img"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="About Us"
        />
        <div className="cs-hero-overlay"></div>

        <div className="cs-hero-content">
          <h1>
            <span className="cs-highlight-wrap">
              <span className="cs-h-left"></span>
              <span className="cs-highlight">Our Services</span>
              <span className="cs-h-right"></span>
            </span>
          </h1>
          <p className="cs-hero-desc">
            Helping organizations innovate, transform, and scale through
            technology, strategic expertise, and Agile practices. Empowering
            businesses to unlock new opportunities and achieve sustainable
            growth.
          </p>
        </div>
      </div>

      <div className="cs-section-label">
        <span></span>
        <p>What We Offer</p>
        <span></span>
      </div>

      <div className="cs-services-grid">
        <Link to="/application-development" className="cs-card-link">
          <div className="cs-card cs-card-in">
            <div className="cs-card-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=1800&q=90&fit=crop"
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
              <br />
            </div>
            <div className="cs-card-bar"></div>
          </div>
        </Link>

        <Link to="/mobile-app-development" className="cs-card-link">
          <div className="cs-card cs-card-in">
            <div className="cs-card-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1800&q=90&fit=crop"
                alt="Enterprise Web Platforms"
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
              <br />
            </div>
            <div className="cs-card-bar"></div>
          </div>
        </Link>
        <Link to="/cyber-security" className="cs-card-link">
          <div className="cs-card cs-card-in">
            <div className="cs-card-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1800&q=90&fit=crop"
                alt="Enterprise Web Platforms"
                loading="lazy"
              />
              <div className="cs-card-overlay">
                <span className="cs-card-cta">See More</span>
              </div>
              <div className="cs-card-ring"></div>
              <div className="cs-card-icon-badge">🔐</div>
            </div>
            <div className="cs-card-body">
              <div className="cs-card-tag">Security</div>
              <h3>Cyber Security</h3>
              <p>
                We protect businesses through proactive security strategies. We
                identify vulnerabilities, strengthen defenses, and safeguard
                critical systems to ensure data integrity and business
                continuity.
              </p>
              <br />
            </div>
            <div className="cs-card-bar"></div>
          </div>
        </Link>
        <Link to="/ai-ml" className="cs-card-link">
          <div className="cs-card cs-card-in">
            <div className="cs-card-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1800&q=90&fit=crop"
                alt="Enterprise Web Platforms"
                loading="lazy"
              />
              <div className="cs-card-overlay">
                <span className="cs-card-cta">See More</span>
              </div>
              <div className="cs-card-ring"></div>
              <div className="cs-card-icon-badge">🤖</div>
            </div>
            <div className="cs-card-body">
              <div className="cs-card-tag">Artificial Intelligencen</div>
              <h3>Ai & Ml</h3>
              <p>
                We help organizations unlock insights through intelligent
                technologies. Our AI and machine learning solutions automate
                processes, enhance decision-making, and drive innovation.
              </p>
              <br />
            </div>
            <div className="cs-card-bar"></div>
          </div>
        </Link>

        <Link to="/digital-transformation" className="cs-card-link">
          <div className="cs-card cs-card-in">
            <div className="cs-card-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80&fit=crop"
                alt="Enterprise Web Platforms"
                loading="lazy"
              />
              <div className="cs-card-overlay">
                <span className="cs-card-cta">See More</span>
              </div>
              <div className="cs-card-ring"></div>
              <div className="cs-card-icon-badge">🚀</div>
            </div>
            <div className="cs-card-body">
              <div className="cs-card-tag">Innovation</div>
              <h3>Digital Transformation</h3>
              <p>
                We help businesses modernize their operations and embrace
                digital innovation. Our solutions streamline processes, improve
                efficiency, and enable organizations to adapt to changing
                markets.
              </p>
              <br />
            </div>
            <div className="cs-card-bar"></div>
          </div>
        </Link>
        <Link to="/it-consulting" className="cs-card-link">
          <div className="cs-card cs-card-in">
            <div className="cs-card-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1800&q=90&fit=crop"
                alt="Enterprise Web Platforms"
                loading="lazy"
              />
              <div className="cs-card-overlay">
                <span className="cs-card-cta">See More</span>
              </div>
              <div className="cs-card-ring"></div>
              <div className="cs-card-icon-badge">💡</div>
            </div>
            <div className="cs-card-body">
              <div className="cs-card-tag">Advisory</div>
              <h3>It Consulting</h3>
              <p>
                We guide organizations through complex technology decisions. Our
                consulting services align business goals with the right
                strategies, tools, and digital solutions.
              </p>
              <br />
            </div>
            <div className="cs-card-bar"></div>
          </div>
        </Link>
        <Link to="/program-project-management" className="cs-card-link">
          <div className="cs-card cs-card-in">
            <div className="cs-card-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1800&q=90&fit=crop"
                alt="Enterprise Web Platforms"
                loading="lazy"
              />
              <div className="cs-card-overlay">
                <span className="cs-card-cta">See More</span>
              </div>
              <div className="cs-card-ring"></div>
              <div className="cs-card-icon-badge">📋</div>
            </div>
            <div className="cs-card-body">
              <div className="cs-card-tag">Execution</div>
              <h3>Program Project Management</h3>
              <p>
                We ensure successful delivery of complex initiatives through
                structured planning and execution. Our approach focuses on
                efficiency, transparency, and measurable outcomes.
              </p>
              <br />
            </div>
            <div className="cs-card-bar"></div>
          </div>
        </Link>
        <Link to="/agile-services" className="cs-card-link">
          <div className="cs-card cs-card-in">
            <div className="cs-card-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1800&q=90&fit=crop"
                alt="Enterprise Web Platforms"
                loading="lazy"
              />
              <div className="cs-card-overlay">
                <span className="cs-card-cta">See More</span>
              </div>
              <div className="cs-card-ring"></div>
              <div className="cs-card-icon-badge">🔄</div>
            </div>
            <div className="cs-card-body">
              <div className="cs-card-tag">Agile</div>
              <h3>Agile Services</h3>
              <p>
                We help teams adopt Agile practices to improve collaboration and
                delivery speed. Our frameworks enable organizations to adapt
                quickly and deliver continuous value.
              </p>
              <br />
            </div>
            <div className="cs-card-bar"></div>
          </div>
        </Link>
      </div>

      <div className="cs-why">
        <div className="cs-why-ring"></div>
        <div className="cs-why-ring"></div>
        <div className="cs-why-ring"></div>

        <div className="cs-why-inner">
          <div className="cs-why-eyebrow">Why Our Services</div>

          <h2>Solutions Built for Modern Businesses</h2>

          <p>
            At Metavara Technologies, we combine deep technical expertise with
            industry best practices to deliver scalable and future-ready
            solutions. From Application Development and Cyber Security to AI,
            Agile, and Digital Transformation, our services are designed to help
            organizations innovate faster, operate efficiently, and stay
            competitive in a rapidly evolving digital world.
          </p>

          <Link className="cs-why-cta" to="/contact">
            Discuss Your Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPreview;
