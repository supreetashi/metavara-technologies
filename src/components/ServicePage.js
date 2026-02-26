import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CoreServices.css';
import { handleImageError } from '../utils/imageFallback';

/* ── Intersection-observer hook ─────────────────────────────── */
function useVisible(threshold = 0.12) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return [ref, visible];
}

/* ── HERO ───────────────────────────────────────────────────── */
function Hero({ badge, title, highlight, desc, heroImg }) {
    const fullTitle = [title, highlight].filter(Boolean).join(' ').trim();

    return (
        <div className="cs-hero">
            <img className="cs-hero-img" src={heroImg} alt={fullTitle || title} onError={handleImageError} />
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

/* ── CARD ───────────────────────────────────────────────────── */
function Card({ item, index }) {
    const [ref, visible] = useVisible();
    return (
        <div
            ref={ref}
            className={`cs-card ${visible ? 'cs-card-in' : ''}`}
            style={{
                transitionDelay: `${index * 80}ms`,
                '--card-accent': item.accent || '#1565c0',
            }}
        >
            <div className="cs-card-image-wrap">
                <img src={item.img} alt={item.title} loading="lazy" onError={handleImageError} />
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

/* ── SPLIT ROW ──────────────────────────────────────────────── */
function SplitRow({ item, reverse }) {
    const [ref, visible] = useVisible();
    return (
        <div
            ref={ref}
            className={`cs-split-row ${visible ? 'cs-split-in' : ''} ${reverse ? 'cs-split-reverse' : ''}`}
        >
            <div className="cs-split-img-wrap">
                <img src={item.img} alt={item.title} loading="lazy" onError={handleImageError} />
                <div className="cs-split-border" />
            </div>
            <div className="cs-split-text">
                <div className="cs-eyebrow">{item.eyebrow}</div>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                {item.bullets && (
                    <ul>
                        {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                )}
            </div>
        </div>
    );
}

/* ── TECH CHIPS ─────────────────────────────────────────────── */
function TechSection({ title, chips }) {
    return (
        <div className="cs-tech-section">
            <h2 className="cs-section-title">{title}</h2>
            <div className="cs-tech-grid">
                {chips.map((c, i) => (
                    <div className="cs-tech-chip" key={i}>{c}</div>
                ))}
            </div>
        </div>
    );
}

/* ── WHY SECTION ────────────────────────────────────────────── */
function WhySection({ title, body }) {
    return (
        <div className="cs-why">
            <div className="cs-why-ring" />
            <div className="cs-why-ring" />
            <div className="cs-why-ring" />
            <div className="cs-why-inner">
                <div className="cs-why-eyebrow">Why Metavara</div>
                <h2>{title}</h2>
                <p>{body}</p>
                <Link to="/contact" className="cs-why-cta">Talk to an Expert</Link>
            </div>
        </div>
    );
}

/* ── ServicePage ────────────────────────────────────────────── */
const ServicePage = ({ config, midSection }) => {
    const { hero, cards, splits, techs, why } = config;

    return (
        <div className="cs-page">
            <Hero {...hero} />

            {cards && cards.length > 0 && (
                <>
                    <div className="cs-section-label">
                        <span /><p>What We Offer</p><span />
                    </div>
                    <div className="cs-services-grid">
                        {cards.map((item, i) => (
                            <Card key={i} item={item} index={i} />
                        ))}
                    </div>
                </>
            )}

            {midSection}

            {splits && splits.length > 0 && (
                <div className="cs-split-section">
                    {splits.map((item, i) => (
                        <SplitRow key={i} item={item} reverse={i % 2 === 1} />
                    ))}
                </div>
            )}

            {techs && <TechSection {...techs} />}
            {why && <WhySection {...why} />}
        </div>
    );
};

export default ServicePage;
