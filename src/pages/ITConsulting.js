import React from "react";
import "../styles/ITConsulting.css";

import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";

import { FaLaptopCode, FaProjectDiagram, FaChartLine, FaCogs } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Strategic Technology Planning",
    description:
      "We partner with your leadership to define a clear, actionable technology roadmap. By assessing your current capabilities and future goals, we identify the right technologies to invest in, ensuring maximum ROI and competitive advantage.",
    image: img2, // swapped
    icon: <FaLaptopCode />, // keep original icon
  },
  {
    id: 2,
    title: "Enterprise Architecture",
    description:
      "Build a foundation for scalability. Our architects design robust, flexible enterprise systems that break down silos and facilitate seamless information flow across your organization.",
    image: img1, // swapped
    icon: <FaProjectDiagram />, // keep original icon
  },
  {
    id: 3,
    title: "IT Optimization & Cost Reduction",
    description:
      "Do more with less. We analyze your IT spend and infrastructure to identify inefficiencies. Through consolidation, modernization, and strategic sourcing, we help you reduce operational costs while improving performance.",
    image: img3,
    icon: <FaChartLine />,
  },
  {
    id: 4,
    title: "Delivery Governance & PMO",
    description:
      "Ensure project success with our rigorous governance frameworks. We help you establish a Project Management Office (PMO) that standardizes processes, manages risks, and ensures that IT initiatives are delivered on time and within budget.",
    image: img4,
    icon: <FaCogs />,
  },
];

const ITConsulting = () => {
  return (
    <section className="consulting-wrapper">
      <div className="consulting-header">
        <h2>IT Consulting</h2>
        <div className="header-line"></div>
        <p className="header-description">
          Aligning technology with business strategy is critical for success. Metavara Technologies offers expert IT Consulting services to help you navigate the complexities of the digital world, optimize your IT landscape, and drive sustainable growth.
        </p>
      </div>


      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-left">
              <img src={service.image} alt={service.title} />
            </div>

            <div className="service-right">
              <div className="icon-title-wrapper">
                <div className="service-icon">{service.icon}</div>
                <div className="service-title">{service.title}</div>
              </div>
              <div className="service-description">{service.description}</div>
            </div>
          </div>
        ))}
      </div>

      {/* WHY CHOOSE SECTION */}
      <div className="why-choose-section">
        <h2 className="why-title">Why Choose Metavara Consulting?</h2>
        <div className="why-content">
          <p>
            Our consultants are seasoned veterans with deep domain expertise.
            We don't just offer advice; we work alongside your teams to implement
            solutions and transfer knowledge, building your internal capabilities
            for the long term.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ITConsulting;
