import React from "react";
import "./navbar.css";

function Header() {

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Home" className="home-icon" />
        <span className="app-name">CostCraft</span>
      </div>
      <ul className="navbar-links">
        <li >Home</li>
        <li >Services</li>
        <li >Schemes</li>
        <li >About Us</li>
        <li>Bidsphere</li>
        <li>Engineers</li>
        <li>
          <img src="/profile-icon.png" alt="Profile" className="profile-icon" />
        </li>
      </ul>
    </nav>
  );
}

export default Header;
