import React from "react";
import "./home.css"; // Import CSS specific to the Home component
import Header from "./Header";
import Services from "./services";
import AboutSection from "./aboutsection";
import { Link } from 'react-router-dom';

function Home() {
  return (
    
    <div className="home">
      {/* Include Header at the top */}
      <Header /> 
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to CostCraft</h1>
          <p className="hero-subtitle">
            Predict construction costs with precision and build smarter projects.
          </p>
          <Link className="hero-button" to="/" style={{textDecoration:"none"}}>Get Started</Link>
        </div>
      </section>

      <AboutSection />
      <Services />  
    </div>
  );
}

export default Home;
