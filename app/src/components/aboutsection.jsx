import React from "react";
import "./aboutsection.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"; // Import social media icons

function AboutSection() {
  return (
    <section className="about-section">
      <h2>Contact Us</h2>
      <p>
        We at CostCraft are here to help you reduce expenses through strategic bidding. 
        If you have any questions or would like to learn more about how we can assist you, 
        please reach out to us.
      </p>
      <div className="contact-info">
        <h3>Get in Touch</h3>
        <p>Email: support@costcraft.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
      <div className="social-media">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
