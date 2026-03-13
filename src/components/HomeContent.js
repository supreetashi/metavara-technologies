import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/HomeContent.css";
import { fetchLatestAiNews } from "../utils/newsFeed";

const FEATURED_PERSPECTIVES = [
  {
    title: "The Rise of Agentic AI: Beyond Chatbots",
    snippet:
      "From reactive assistants to autonomous systems: how agentic AI is changing enterprise workflows and decision-making.",
    sourceLabel: "MIT Technology Review",
    sourceUrl: "https://www.technologyreview.com/topic/artificial-intelligence",
    type: "Perspective",
    date: "Editor Pick"
  },
  {
    title: "Small Language Models for Practical Enterprise AI",
    snippet:
      "Why focused, efficient models are becoming a stronger fit for cost-sensitive and privacy-first deployments.",
    sourceLabel: "Microsoft AI News",
    sourceUrl: "https://news.microsoft.com/source/topics/ai/",
    type: "Tech Guide",
    date: "Trend Watch"
  },
  {
    title: "AI Governance Maturity in 2026",
    snippet:
      "Enterprises are building governance, risk controls, and explainability into AI programs from day one.",
    sourceLabel: "NIST",
    sourceUrl: "https://www.nist.gov/artificial-intelligence",
    type: "Policy",
    date: "Latest Analysis"
  }
];

const LIVE_NEWS_FALLBACK = [
  {
    title: "Enterprise AI programs are prioritizing measurable ROI",
    link: "https://www.ibm.com/think/topics/artificial-intelligence",
    snippet: "Leaders are focusing on use cases tied directly to measurable business outcomes.",
    source: "IBM Think",
    date: "Recent"
  },
  {
    title: "AI governance remains a critical board-level focus",
    link: "https://www.unesco.org/en/artificial-intelligence/recommendation-ethics",
    snippet: "Organizations are building stronger controls for safety and accountability.",
    source: "UNESCO",
    date: "Recent"
  },
  {
    title: "AI-augmented engineering is accelerating delivery speed",
    link: "https://research.google/blog/",
    snippet: "Teams are using AI for coding, review, testing, and documentation workflows.",
    source: "Google Research",
    date: "Recent"
  }
];

const HomeContent = () => {
  const [liveNews, setLiveNews] = useState(LIVE_NEWS_FALLBACK);
  const [loadingNews, setLoadingNews] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const loadNews = async () => {
      try {
        const latest = await fetchLatestAiNews({ limit: 3, signal: controller.signal });
        setLiveNews(latest);
      } catch {
        setLiveNews(LIVE_NEWS_FALLBACK);
      } finally {
        setLoadingNews(false);
      }
    };

    loadNews();
    return () => controller.abort();
  }, []);

  return (
    <div className="home-content-wrapper">
      <section className="insights-section">
        <div className="section-header insights-head">
          <div>
            <h2 className="section-title">Insights and Perspectives</h2>
          </div>
          <Link to="/blogs" className="view-all-link">
            View All Insights &rarr;
          </Link>
        </div>

        <div className="insights-grid compact-insights-grid">
          {FEATURED_PERSPECTIVES.map((item) => (
            <article
              className="insight-card compact-insight-card"
              key={item.title}
              onClick={() => window.open(item.sourceUrl, "_blank", "noopener,noreferrer")}
            >
              <div className="insight-content">
                <span className="insight-type insight-type-inline">{item.type}</span>
                <span className="insight-date">{item.date}</span>
                <h3 className="insight-title">{item.title}</h3>
                <p className="insight-snippet">{item.snippet}</p>
                <span className="insight-readmore">Read on {item.sourceLabel} &rarr;</span>
              </div>
            </article>
          ))}
        </div>

        <div className="home-live-wrap">
          <div className="home-live-head">
            <h3>Latest AI Developments</h3>
            <p>{loadingNews ? "Updating..." : "Live"}</p>
          </div>
          <div className="insights-grid compact-live-grid">
            {liveNews.map((item) => (
              <article
                className="insight-card compact-insight-card"
                key={`${item.title}-${item.link}`}
                onClick={() => window.open(item.link, "_blank", "noopener,noreferrer")}
              >
                <div className="insight-content">
                  <span className="insight-type insight-type-inline">Live</span>
                  <span className="insight-date">{item.date}</span>
                  <h3 className="insight-title">{item.title}</h3>
                  <p className="insight-snippet">{item.snippet}</p>
                  <span className="insight-readmore">Source: {item.source} &rarr;</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1170&auto=format&fit=crop"
                  alt="Enterprise Web Platforms"
                  loading="lazy"
                />
                <div className="cs-card-overlay">
                  <span className="cs-card-cta">See More</span>
                </div>
                <div className="cs-card-ring"></div>
                <div className="cs-card-icon-badge">Dev</div>
              </div>
              <div className="cs-card-body">
                <div className="cs-card-tag">Software</div>
                <h3>Application Development</h3>
                <p>
                  We create reliable and scalable applications tailored to business needs, with
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
                  src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1632&auto=format&fit=crop"
                  alt="Mobile App Development"
                  loading="lazy"
                />
                <div className="cs-card-overlay">
                  <span className="cs-card-cta">See More</span>
                </div>
                <div className="cs-card-ring"></div>
                <div className="cs-card-icon-badge">Apps</div>
              </div>
              <div className="cs-card-body">
                <div className="cs-card-tag">Mobile</div>
                <h3>Mobile App Development</h3>
                <p>
                  We build powerful mobile experiences designed for performance, scalability, and
                  seamless usability across Android and iOS.
                </p>
              </div>
              <div className="cs-card-bar"></div>
            </div>
          </Link>

          <Link to="/cyber-security" className="cs-card-link">
            <div className="cs-card cs-card-in">
              <div className="cs-card-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1169&auto=format&fit=crop"
                  alt="Cyber Security"
                  loading="lazy"
                />
                <div className="cs-card-overlay">
                  <span className="cs-card-cta">See More</span>
                </div>
                <div className="cs-card-ring"></div>
                <div className="cs-card-icon-badge">Secure</div>
              </div>
              <div className="cs-card-body">
                <div className="cs-card-tag">Security</div>
                <h3>Cyber Security</h3>
                <p>
                  We protect businesses through proactive security strategies, stronger defenses,
                  and resilient systems for business continuity.
                </p>
              </div>
              <div className="cs-card-bar"></div>
            </div>
          </Link>
        </div>
      </div>

      <section className="events-section">
        <div className="events-container">
          <div className="section-header">
            <h2 className="section-title">Upcoming Events</h2>
            <span className="view-all-link" style={{ cursor: "default", color: "#64748b" }}>
              Stay Tuned
            </span>
          </div>

          <div className="event-row" style={{ borderBottom: "none" }}>
            <div className="event-details" style={{ textAlign: "center", width: "100%" }}>
              <h3>Events Coming Soon</h3>
              <p className="event-meta" style={{ justifyContent: "center", display: "flex" }}>
                We are planning exciting webinars and community meetups.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ai-future-banner">
        <div className="ai-content">
          <span className="ai-tag">Metavara Intelligence</span>
          <h2 className="ai-title">Shaping the Cognitive Enterprise</h2>
          <p className="ai-description">
            We are entering an era where AI does not just assist. It reasons, predicts, and acts.
            Metavara is focused on building systems that improve real decision outcomes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
