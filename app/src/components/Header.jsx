import React from "react";
import "./Header.css";
import { useNavigate,Link } from 'react-router-dom';

function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/auth'); // Navigates to the Auth component (Sign Up page)
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Home" className="home-icon" /> 
        <span className="app-name">CostCraft</span>
      </div>
      <ul className="navbar-links">
        <li >Home</li>
        <li onClick={() => scrollToSection("services")}>Services</li>
        <li>
          <Link to="/scheme" style={{ textDecoration: "none", color: "inherit" }}>
            Schemes
          </Link>
        </li>
        <li onClick={() => scrollToSection("aboutsection")}>About Us</li>
        <button className="glow-on-hover" onClick={handleSignUpClick} >Sign Up</button>
      </ul>
    </nav>
  );
}

export default Header;


