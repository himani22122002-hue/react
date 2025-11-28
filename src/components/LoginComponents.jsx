import React, { useState } from "react";
import { LoginAPI } from "../api/AuthAPI";
import LinkedinLogo from "../assets/campuslynk.png";
import GoogleButton from 'react-google-button';
//import GoogleLogo from "../assets/googlelogo.png"; 
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";

const LoginComponent = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      // Ensure loginAPI is correctly imported and defined
      const res = await LoginAPI(credentials.email, credentials.password);
      toast.success('Signed In to Campuslynk!');
      //console.log('Login successful:', res.data);
      // You can redirect the user or update state here upon success
    } catch (err) {
      toast.error('Login failed:', err);
      //console.error('Login failed:', err);
      // Handle login error (e.g., show an error message)
    }
  };

  return (
    <div className="login-wrapper">
      {/* Apply the class directly to the img tag */}
      <div className="logo-container"> 
        <img src={LinkedinLogo} alt="Campus Lynk Logo" className="campus-logo"/> 
      </div>
      
      <h1 className="heading">Sign in</h1>
      <p className="sub-heading">Stay updated on your professional world</p>

      <div className="auth-inputs">
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="email"
            placeholder="Email or Phone"
            className="common-input"
            onChange={handleInputChange}
            value={credentials.email}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="common-input"
            onChange={handleInputChange}
            value={credentials.password}
          />
          <a href="#" className="forgot-password">
            Forgot password?
          </a>
          <button className="login-btn" type="submit">
            Sign in
          </button>
        </form>
      </div>

      <div className="divider">
        <span>or</span>
      </div>

      <div className="google-btn">
        <GoogleButton
          className="button"
          onClick={() => { 
            console.log('Google button clicked') 
          }}
        />
        <p className="go-to-signup">New to CampusLynk? <span className="join-now">Join now</span></p>
      </div>
    </div>
  );
};

export default LoginComponent;