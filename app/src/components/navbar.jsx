import React from "react";
import "./navbar.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // import the MUI icon
import { Link, useLocation } from "react-router-dom"; // Assuming you are using react-router

function Navbar() {
  const location = useLocation(); // Determine the current route

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Home" className="home-icon" />
        <span className="app-name">CostCraft</span>
      </div>
      <ul className="navbar-links">
        {/* Adding active class dynamically based on the current route */}
        <li className={location.pathname === '/dashboard' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/calculator' ? 'active' : ''}>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li className={location.pathname === '/bidsphere' ? 'active' : ''}>
          <Link to="/bidsphere">Bidsphere</Link>
        </li>
        <li className={location.pathname === '/engineers' ? 'active' : ''}>
          <Link to="/engineers">Engineers</Link>
        </li>
        <li>
          <div className="profile-container">
            <AccountCircleIcon className="profile-icon" />
            <span>My Profile</span>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
