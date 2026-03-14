import React, { useEffect, useState } from "react";
import "../styles/Pages.css";
import "../styles/BlogStyles.css";
import { fetchLatestAiNews } from "../utils/newsFeed";

const FEATURED_INSIGHTS = [
  {
    id: 1,
    title: "The Rise of Agentic AI: Beyond Chatbots",
    category: "Perspective",
    date: "Editor Pick",
    summary:
      "From reactive assistants to autonomous systems: how agentic AI is changing enterprise workflows and decision-making.",
    source: "MIT Technology Review",
    link: "https://www.technologyreview.com/topic/artificial-intelligence"
  },
  {
    id: 2,
    title: "Small Language Models for Practical Enterprise AI",
    category: "Tech Guide",
    date: "Trend Watch",
    summary:
      "Why focused, efficient models are becoming a stronger fit for cost-sensitive and privacy-first deployments.",
    source: "Microsoft AI News",
    link: "https://news.microsoft.com/source/topics/ai/"
  },
  {
    id: 3,
    title: "AI Governance Maturity in 2026",
    category: "Policy",
    date: "Latest Analysis",
    summary:
      "Enterprises are building governance, risk controls, and explainability into AI programs from day one.",
    source: "NIST",
    link: "https://www.nist.gov/artificial-intelligence"
  }
];

const FALLBACK_NEWS = [
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
    snippet: "Organizations are building stronger controls for safety, transparency, and accountability.",
    source: "UNESCO",
    date: "Recent"
  },
  {
    title: "AI-augmented engineering is accelerating delivery speed",
    link: "https://research.google/blog/",
    snippet: "Teams are increasingly using AI for coding, review, testing, and documentation workflows.",
    source: "Google Research",
    date: "Recent"
  }
];

const Blogs = () => {
  const [liveNews, setLiveNews] = useState(FALLBACK_NEWS);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState("");
  const featured = FEATURED_INSIGHTS[0];
  const supporting = FEATURED_INSIGHTS.slice(1);

  useEffect(() => {
    const controller = new AbortController();
    const loadNews = async () => {
      try {
        const latest = await fetchLatestAiNews({ limit: 6, signal: controller.signal });
        setLiveNews(latest);
        setLastUpdated(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
      } catch {
        setLiveNews(FALLBACK_NEWS);
        setLastUpdated(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
      } finally {
        setLoading(false);
      }
    };

    loadNews();
    return () => controller.abort();
  }, []);

  return (
    <div className="content-section">
      <div className="blogs-hero">
        <h1>Insights & Perspectives</h1>
        <p className="clients-intro">
          Deep dives, strategic viewpoints, and live updates on AI and digital trends shaping modern business.
        </p>
      </div>

      <section className="blogs-live-news">
        <div className="blogs-section-head blogs-live-head">
          <h2>Latest AI Developments</h2>
          <p>{loading ? "Loading live feed..." : `Updated at ${lastUpdated}`}</p>
        </div>

        <div className="blog-grid">
          {liveNews.map((item) => (
            <article
              key={`${item.title}-${item.link}`}
              className="blog-card"
              onClick={() => window.open(item.link, "_blank", "noopener,noreferrer")}
            >
              <div className="blog-content">
                <span className="blog-category-inline">Live</span>
                <span className="blog-date">{item.date}</span>
                <h2 className="blog-title">{item.title}</h2>
                <p className="blog-summary">{item.snippet}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-more-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  Source: {item.source} &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="blogs-featured">
        <div className="blogs-section-head">
          <h2>Featured Perspectives</h2>
        </div>

        <div className="blog-feature-layout">
          <article
            className="blog-card blog-card-featured"
            onClick={() => window.open(featured.link, "_blank", "noopener,noreferrer")}
          >
            <div className="blog-content">
              <span className="blog-category-inline">{featured.category}</span>
              <span className="blog-date">{featured.date}</span>
              <h2 className="blog-title">{featured.title}</h2>
              <p className="blog-summary">{featured.summary}</p>
              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more-btn"
                onClick={(e) => e.stopPropagation()}
              >
                Read on {featured.source} &rarr;
              </a>
            </div>
          </article>

          <div className="blog-side-list">
            {supporting.map((blog) => (
              <article
                key={blog.id}
                className="blog-card blog-card-compact"
                onClick={() => window.open(blog.link, "_blank", "noopener,noreferrer")}
              >
                <div className="blog-content">
                  <span className="blog-category-inline">{blog.category}</span>
                  <span className="blog-date">{blog.date}</span>
                  <h2 className="blog-title">{blog.title}</h2>
                  <p className="blog-summary">{blog.summary}</p>
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Read on {blog.source} &rarr;
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
