import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/FacultyLogin.css";
import logo from "../assets/niis.logo.png";


function FacultyLogin() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  return (

    <div className="login-page">

      <div className="login-card">

        {/* Left Side */}

        <div className="login-left">

          <img
            src={logo}
            alt="NIIS Logo"
            className="login-logo"
          />

          <h1>Welcome Back</h1>

          <p>
            Attendance Management System
          </p>

          <span>
            NIIS Institute of Business Administration
          </span>

        </div>

        {/* Right Side */}

        <div className="login-right">

          <h2>Faculty Login</h2>

          <p className="login-text">
            Sign in to continue
          </p>

          <div className="input-group">

            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
            />

          </div>

          <div className="input-group">

            <label>Password</label>

            <div className="password-box">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />

              <button
                type="button"
                className="show-btn"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>

          </div>
          <button
            className="login-btn"
            onClick={() => navigate("/attendance")}
          >
            Sign In
          </button>

          <p className="login-footer">
            © 2026 NIIS Institute of Business Administration
          </p>

        </div>

      </div>

    </div>

  );
}

export default FacultyLogin;