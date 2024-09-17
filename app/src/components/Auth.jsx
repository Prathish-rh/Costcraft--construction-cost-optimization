import React, { useState } from "react";
import "./Auth.css";

function Auth() {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignIn) {
      console.log("Sign In logic here");
    } else {
      console.log("Sign Up logic here");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        <h2>{isSignIn ? "Sign In to CostCraft" : "Sign Up for CostCraft"}</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input type="email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" required />
          </div>
          {!isSignIn && (
            <div className="input-group">
              <label>Confirm Password</label>
              <input type="password" required />
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


