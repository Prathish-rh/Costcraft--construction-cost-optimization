import React, { useState } from "react";
import "./Auth.css"; // Import the CSS file for styling
import logo from '../images/logo.png'; // Make sure the logo path is correct
import { FaEye, FaEyeSlash, FaArrowLeft } from "react-icons/fa"; // Import eye icons
import { useNavigate } from 'react-router-dom';


function Auth() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // This will navigate back to the previous page
  };

  // Placeholder sign-in function (to be replaced with real API logic)
  const signIn = async (email, password) => {
    // Add your real sign-in logic here, e.g., API call
    console.log("Signing in with:", { email, password });
    // Mock example:
    if (email === "user@example.com" && password === "password123") {
      navigate('/dashboard'); // Navigate to a dashboard or home page after sign-in
    } else {
      alert("Sign In Failed: Invalid credentials");
    }
  };

  // Placeholder sign-up function (to be replaced with real API logic)
  const signUp = async (email, password, confirmPassword) => {
    console.log("Signing up with:", { email, password, confirmPassword });
    if (password !== confirmPassword) {
      alert("Sign Up Failed: Passwords do not match");
    } else {
      alert("Account Created Successfully")
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setIsSignIn(true);
    }
  };
  

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignIn) {
      signIn(email, password); // Call the sign-in logic
    } else {
      signUp(email, password, confirmPassword); // Call the sign-up logic
    }
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
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="input-group password-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={passwordVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
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



