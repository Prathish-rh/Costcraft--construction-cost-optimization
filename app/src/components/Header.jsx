import React from "react";
import "./Header.css"; 

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Home" className="home-icon" /> 
        <span className="app-name">CostCraft</span>
      </div>
      <ul className="navbar-links">
      <a href="#home"><li>Home</li></a>
      <a href="#services"><li>Services</li></a>
      <a href="#schemes"><li>Schemes</li></a>
      <button className="glow-on-hover"><li>Sign Up</li></button>
      </ul>
    </nav>
  );
}

export default Header;

