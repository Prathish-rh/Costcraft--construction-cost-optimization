// src/components/ServicesSection.js
import React from "react";
import "./services.css";

function Services() {
  return (
    <section className="services-section">
      <h2 style={{color:"white"}}>Our Services</h2>
      <div className="services-container">
        <div className="service-item">
          <h3>Cost Calculator</h3>
          <p>Accurate cost estimations for any construction project.</p>
        </div>
        <div className="service-item">
          <h3>Bidsphere</h3>
          <p>Connect with top engineers and bid on projects efficiently.</p>
        </div>
        <div className="service-item">
          <h3>Engineers Network</h3>
          <p>Join our network of professional engineers.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
