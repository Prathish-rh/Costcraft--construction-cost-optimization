import React, { useState } from "react";
import "./Auth.css"; // Import the CSS file for styling
import logo from '../images/logo.png'; // Make sure the logo path is correct
import { FaEye, FaEyeSlash,FaArrowLeft } from "react-icons/fa"; // Import eye icons
import { useNavigate } from 'react-router-dom';


function Auth() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignIn) {
      console.log("Sign In logic here");
    } else {
      console.log("Sign Up logic here");
    }
  };

  const navigate = useNavigate();

const handleBack = () => {
  navigate(-1); // This will navigate back to the previous page
};


  return (
    <div className="auth-container">
      <div className="back-icon" onClick={handleBack}>
  <FaArrowLeft />
</div>

      <div className="auth-form-wrapper">
        <img src={logo} alt="CostCraft Logo" className="auth-logo" />
        <h2>{isSignIn ? "Sign In to CostCraft" : "Sign Up for CostCraft"}</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <div className="email-wrapper">  
            <input type="email" required />
            </div>
          </div>
          <div className="input-group password-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={passwordVisible ? "text" : "password"}
                required
              />
              <span
                className="eye-icon"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          {!isSignIn && (
            <div className="input-group">
              <label>Confirm Password</label>
              <div className="confirm-wrapper">  
              <input type="password" required />
              </div>
            </div>
          )}
          <button type="submit" className="auth-button">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <button
            type="button"
            className="toggle-button"
            onClick={() => setIsSignIn(!isSignIn)}
          >
            {isSignIn ? "Create an Account" : "Already have an account?"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Auth;



