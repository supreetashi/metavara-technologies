import React, { useEffect, useRef, useState } from "react";
import "../styles/Pages.css";
import { handleImageError } from "../utils/imageFallback";

function Hero({ badge, title, highlight, desc, heroImg }) {
  const fullTitle = [title, highlight].filter(Boolean).join(" ").trim();

  return (
    <div className="cs-hero">
      <img
        className="cs-hero-img"
        src={heroImg}
        alt={fullTitle || title}
        onError={handleImageError}
      />
      <div className="cs-hero-overlay" />
      <div className="cs-hero-content">
        {badge && (
          <div className="cs-hero-badge">
            <span className="cs-hero-badge-dot" />
            {badge}
          </div>
        )}
        <h1>
          {highlight ? (
            <span className="cs-highlight-wrap">
              <span className="cs-h-left" />
              <span className="cs-highlight">{fullTitle}</span>
              <span className="cs-h-right" />
            </span>
          ) : (
            title
          )}
        </h1>
        <p className="cs-hero-desc">{desc}</p>
      </div>
    </div>
  );
}

function useVisible(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [ref, visible];
}

function Card({ item, index }) {
  const [ref, visible] = useVisible();
  return (
    <div
      ref={ref}
      className={`cs-card ${visible ? "cs-card-in" : ""}`}
      style={{
        transitionDelay: `${index * 80}ms`,
        "--card-accent": item.accent || "#1565c0",
      }}
    >
      <div className="cs-card-image-wrap">
        <img
          src={item.img}
          alt={item.title}
          loading="lazy"
          onError={handleImageError}
        />
        <div className="cs-card-ring" />
        <div className="cs-card-icon-badge">{item.icon}</div>
      </div>
      <div className="cs-card-body">
        <div className="cs-card-tag">{item.tag}</div>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
      <div className="cs-card-bar" />
    </div>
  );
}

const Leadership = () => {
  const hero = {
    title: "Leadership",
    highlight: "At Metavara",
    desc: "Great technology is built by great people, but it is sustained by visionary leadership. At Metavara Technologies, our leadership team comprises industry veterans, strategists, and technologists who bring decades of combined experience from global Fortune 500 companies.",
    heroImg:
      "data:image/jpeg;base64,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",
  };

  const cards = [
    {
      accent: "#1565c0",
      icon: "🎯",
      tag: "Vision & Strategy",
      title: "Strategic Leadership",
      desc: "Our leadership team defines a clear strategic direction that aligns technology innovation with long-term business goals. We focus on building sustainable growth and delivering value to clients through forward-thinking leadership.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&fit=crop",
    },
    {
      accent: "#0277bd",
      icon: "🤝",
      tag: "People First",
      title: "Servant Leadership",
      desc: "We believe great leadership starts with serving people. By empowering teams, removing obstacles, and fostering collaboration, our leaders enable engineers and consultants to perform at their highest potential.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80&fit=crop",
    },
    {
      accent: "#00695c",
      icon: "📊",
      tag: "Data Driven",
      title: "Intelligent Decision Making",
      desc: "Our leadership approach combines experience with data-driven insights. By leveraging analytics and real-time information, we make informed decisions that drive innovation, efficiency, and business growth.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fit=crop",
    },
    {
      accent: "#c62828",
      icon: "🌱",
      tag: "People & Culture",
      title: "Empathy in Leadership",
      desc: "We foster a culture of trust, transparency, and respect. Our leaders prioritize employee well-being, encourage innovation, and ensure a healthy work-life balance that drives sustainable success.",
      img: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80&fit=crop",
    },
  ];

  return (
    <>
      <div className="cs-page">
        <Hero {...hero} />

        {cards && cards.length > 0 && (
          <>
            <div className="cs-section-label">
              <span />
              <p>What We Offer</p>
              <span />
            </div>
            <div className="cs-services-grid">
              {cards.map((item, i) => (
                <Card key={i} item={item} index={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Leadership;
