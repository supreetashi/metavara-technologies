import React from "react";
import "../styles/About.css";

const About = () => {
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
            <span class="cs-highlight-wrap">
              <span class="cs-h-left"></span>
              <span class="cs-highlight">About Metavara</span>
              <span class="cs-h-right"></span>
            </span>
          </h1>
          <p className="cs-hero-desc">
            Metavara Technologies Private Limited is a forward-thinking IT
            services and solutions provider headquartered in Bangalore, India.
            Born from a passion for innovation and a commitment to excellence,
            we help enterprises navigate digital transformation with secure,
            scalable, and intelligent technology solutions.
          </p>
        </div>
      </div>

      {/* <h2>Our Vision</h2>
      <p>
        We envision a future where technology is a seamless enabler of human potential. A future where businesses operate with
        unprecedented efficiency, where data empowers every decision, and where security is an inherent attribute of every digital interaction.
        At Metavara, we are building that future today.
      </p> */}
      {/* OUR VISION */}
<div className="cs-vision">
  <div className="cs-vision-container">
    <div className="cs-vision-grid">

      <div className="cs-vision-header">
        <h2>Our <br /> Vision</h2>
      </div>

      <div className="cs-vision-content">
        <p>
          We envision a future where technology is a seamless enabler of
          human potential. A future where businesses operate with
          unprecedented efficiency, where data empowers every decision,
          and where security is an inherent attribute of every digital interaction.
        </p>
        <p>
          At Metavara, we are building that future today.
        </p>
      </div>

    </div>
  </div>
</div>


{/* METAVARA DIFFERENCE */}
<div className="cs-vision cs-vision-alt">
  <div className="cs-vision-container">
    <div className="cs-vision-grid cs-vision-reverse">

      <div className="cs-vision-header">
        <h2>
          The Metavara Difference: <br />
          Human-Centric Innovation
        </h2>
      </div>

      <div className="cs-vision-content">
        <p>
          In an age dominated by automation, we believe the human element remains paramount.
          Technology should amplify human ingenuity — not replace it.
        </p>
        <p>
          Our vendor-agnostic, open-standard approach ensures freedom in tech —
          freedom to innovate, freedom to scale, and freedom to stay in control.
        </p>
      </div>

    </div>
  </div>
</div>

      <div className="cs-section-label">
        <span></span>
        <p>Our Core Values</p>
        <span></span>
      </div>

      <div className="cs-services-grid">
        <div className="cs-card cs-card-in">
          <div className="cs-card-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Enterprise Web Platforms"
              loading="lazy"
            />
            <div className="cs-card-ring"></div>
            <div className="cs-card-icon-badge">⚖️</div>
          </div>
          <div className="cs-card-body">
            <div className="cs-card-tag">Ethics</div>
            <h3>Integrity First</h3>
            <p>
              We build trust through transparency. We are honest in our
              assessments, clear in our communications, and unwavering in our
              ethical standards.
            </p>
          </div>
          <div className="cs-card-bar"></div>
        </div>
        <div className="cs-card cs-card-in">
          <div className="cs-card-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="API &amp; Microservices"
              loading="lazy"
            />
            <div className="cs-card-ring"></div>
            <div className="cs-card-icon-badge">🚀</div>
          </div>
          <div className="cs-card-body">
            <div className="cs-card-tag">Future-Driven</div>
            <h3>Relentless Innovation</h3>
            <p>
              "Good enough" is never enough. We constantly explore emerging
              technologies—from Generative AI to Quantum Computing—to keep our
              clients ahead of the curve.
            </p>
          </div>
          <div className="cs-card-bar"></div>
        </div>
        <div className="cs-card cs-card-in">
          <div className="cs-card-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Cloud-Native Development"
              loading="lazy"
            />
            <div className="cs-card-ring"></div>
            <div className="cs-card-icon-badge">🎯</div>
          </div>
          <div className="cs-card-body">
            <div className="cs-card-tag">Customer Focus</div>
            <h3>Client-Centricity</h3>
            <p>
              Your success is our success. We adhere to a "Client First"
              philosophy, tailoring every solution to your unique business
              context and goals.
            </p>
          </div>
          <div className="cs-card-bar"></div>
        </div>
        <div className="cs-card cs-card-in">
          <div className="cs-card-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Secure &amp; Compliant Apps"
              loading="lazy"
            />
            <div className="cs-card-ring"></div>
            <div className="cs-card-icon-badge">🤝</div>
          </div>
          <div className="cs-card-body">
            <div className="cs-card-tag">Teamwork</div>
            <h3>Collaboration</h3>
            <p>
              We believe in the power of partnership. We work as an extension of
              your team, fostering a culture of shared knowledge and mutual
              growth.
            </p>
          </div>
          <div className="cs-card-bar"></div>
        </div>
      </div>

      <div class="cs-why">
        <div class="cs-why-ring"></div>
        <div class="cs-why-ring"></div>
        <div class="cs-why-ring"></div>
        <div class="cs-why-inner">
          <div class="cs-why-eyebrow">Why Metavara</div>
          <h2>Global Reach, Local Expertise</h2>
          <p>
           While we operate with a global perspective, serving clients across
        continents, we maintain the agility and personalized attention of a
        boutique firm. Our diverse team brings together global best practices
        and local market insights, ensuring solutions that are compliant,
        culturally relevant, and legally sound.
          </p>
          <a class="cs-why-cta" href="/contact">
            Talk to an Expert
          </a>
        </div>
      </div>

      {/* <h2>Global Reach, Local Expertise</h2>
      <p>
        While we operate with a global perspective, serving clients across
        continents, we maintain the agility and personalized attention of a
        boutique firm. Our diverse team brings together global best practices
        and local market insights, ensuring solutions that are compliant,
        culturally relevant, and legally sound.
      </p> */}
    </div>
  );
};

export default About;
