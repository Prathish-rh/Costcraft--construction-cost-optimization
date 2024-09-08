import React from "react";
import "./Header.css"; // Import CSS specific to the Header component

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Home" className="home-icon" /> {/* Placeholder for a home icon */}
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#calculator">Calculator</a></li>
        <li><a href="#bidsphere">Bidsphere</a></li>
        <li><a href="#schemes">Schemes</a></li>
        <li><a href="#engineers">Engineers</a></li>
        <li><button className="glow-on-hover">Sign Up</button></li>
      </ul>
    </nav>
  );
}

export default Header;

