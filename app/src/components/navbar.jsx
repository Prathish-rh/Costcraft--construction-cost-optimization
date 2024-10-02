import React from "react";
import "./navbar.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // import the MUI icon

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Home" className="home-icon" />
        <span className="app-name">CostCraft</span>
      </div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Calculator</li>
        <li>Bidsphere</li>
        <li>Engineers</li>
        <li>
          <AccountCircleIcon className="profile-icon" />My Profile
        </li>
      </ul>
    </nav>
  );
}



export default Navbar;
