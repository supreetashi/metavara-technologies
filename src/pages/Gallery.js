import React, { useState } from "react";
import "../styles/Gallery.css";

const images = [
  "/images/gallery/team1.jpeg",
  "/images/gallery/team2.jpeg",
  "/images/gallery/team3.jpeg",
  "/images/gallery/team4.jpeg",
  "/images/gallery/team5.jpeg",
  "/images/gallery/office1.jpeg",
  "/images/gallery/office2.jpeg"
];

const Gallery = () => {

  const [currentIndex, setCurrentIndex] = useState(null);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <><><div className="cs-hero">
          <img
              className="cs-hero-img"
              src="/images/gallery/team1.jpeg"
              alt="Gallery" />
          <div className="cs-hero-overlay"></div>

          <div className="cs-hero-content">
              <h1>
                  <span class="cs-highlight-wrap">
                      <span class="cs-h-left"></span>
                      <span class="cs-highlight">Life at Metavara</span>
                      <span class="cs-h-right"></span>
                  </span>
              </h1>
              <p className="cs-hero-desc">
                  <p>
                      Behind every great solution is a great team. Here’s a glimpse into the people and moments that power Metavara.
                  </p>

              </p>
          </div>
      </div>

      <div className="cs-section-label">
                  <span></span>
                  <p>Gallery</p>
                  <span></span>
              </div>

          <div className="gallery-page">

              <div className="outing-gallery">
                  {images.map((img, index) => (
                      <div
                          key={index}
                          className={`gallery-item ${index === 0 ? "hero" : ""}`}
                          onClick={() => setCurrentIndex(index)}
                      >
                          <img src={img} alt="Metavara team" />

                          <div className="gallery-overlay">
                              <span>View Photo</span>
                          </div>
                      </div>
                  ))}
              </div>

              {currentIndex !== null && (
                  <div
                      className="lightbox"
                      onClick={() => setCurrentIndex(null)}
                  >

                      <button className="nav prev" onClick={prevImage}>
                          ❮
                      </button>

                      <img
                          src={images[currentIndex]}
                          alt="Preview"
                          className="lightbox-img" />

                      <button className="nav next" onClick={nextImage}>
                          ❯
                      </button>

                  </div>
              )}

          </div></><div class="cs-why">
              <div class="cs-why-ring"></div>
              <div class="cs-why-ring"></div>
              <div class="cs-why-ring"></div>
              <div class="cs-why-inner">
                  <div class="cs-why-eyebrow">Join Our Team</div>
                  <h2>Build the Future With Us</h2>
                  <p>
                    At Metavara, we believe great ideas come from great people. We foster a
      culture of collaboration, continuous learning, and innovation where every
      team member has the opportunity to grow and make a meaningful impact.
      If you're passionate about solving real-world challenges and building
      technology that matters, we’d love to hear from you.
                  </p>
                  <a class="cs-why-cta" href="/contact">
                      Contact Us
                  </a>
              </div>
          </div></>
  );
};

export default Gallery;
