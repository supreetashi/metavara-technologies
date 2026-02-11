
import React from "react";
import '../styles/support.css';




const ContactSupport = () => {

  const handleCall = () => {
    window.location.href = "tel:9538027892";
  };

  const handleEmail = () => {
    window.location.href = "mailto:mvt.hr@metavaratechnologies.com";
  };

  return (
    <section className="gallery">
      

  <h2 className="gallery-title">Support</h2>


      <div className="support-wrapper">

        <h1 className="heading">
          Need Assistance? We're Here To Help!
        </h1>

        
        <div className="support-card call">
          <div className="support-left">
            <span className="label">Toll-Free Number:</span>
            <span className="value">9538027892</span>
          </div>

          <button className="call-btn" onClick={handleCall}>
            Call Now
          </button>
        </div>

       
        <div className="support-card email">
          <div className="support-left">
            <span className="label email-text">Support Email:</span>
            <span className="value">mvt.hr@metavaratechnologies.com</span>
          </div>

          <button className="email-btn" onClick={handleEmail}>
            Send an Email
          </button>
        </div>

        <p className="timing">
        Our support team is available from <strong>9 AM to 9 PM</strong> to assist you.
        Feel free to reach out for any queries or help you need.
        </p>

      </div>

    </section>
  );
};

export default ContactSupport;


