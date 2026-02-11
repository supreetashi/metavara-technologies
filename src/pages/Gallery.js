import React from "react";
import '../styles/Gallery.css';
const Gallery = () => {
  const images = [
    "https://media.licdn.com/dms/image/v2/D5622AQE5hYihukpMAg/feedshare-shrink_800/B56ZuquI3bHgAg-/0/1768095780579?e=2147483647&v=beta&t=lORX3XHDAp1mqYl4qcn6q6MaM3sueG6VAbkE9LuwY1g",
    "https://media.licdn.com/dms/image/v2/D5622AQEd-s-yQW3tFA/feedshare-shrink_800/B56ZuquIqEIUAk-/0/1768095779726?e=2147483647&v=beta&t=k_ge45pKTldaPWMn8DQzCY0oQBb5qL9T6EVNQ0vsyC4",
    "https://media.licdn.com/dms/image/v2/D5622AQE5yY5akI65vQ/feedshare-shrink_800/B56ZunR5iEJAAg-/0/1768038046078?e=2147483647&v=beta&t=miunyKDbABQY9QBYxM6bbhEpB07jZ0r2aSHmTVg-Doo",
    
    "https://media.licdn.com/dms/image/v2/D5622AQE5yY5akI65vQ/feedshare-shrink_800/B56ZunR5iEJAAg-/0/1768038046078?e=2147483647&v=beta&t=miunyKDbABQY9QBYxM6bbhEpB07jZ0r2aSHmTVg-Doo",
    
  ];

  return (
    <section className="gallery">
      <h1 className="gallery-title">Our Gallery</h1>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-card" key={index}>
            <img src={img} alt="gallery" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
