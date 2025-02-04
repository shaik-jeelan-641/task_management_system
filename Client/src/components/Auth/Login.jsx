import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from 'axios';
import { FaFacebook, FaGoogle, FaLinkedin, FaEye, FaEyeSlash } from 'react-icons/fa'; // Import the icons

function Login() {
  const [formData , setFormData] = useState({
    email:"",
    password:"",
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e)=> {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", formData);
      const { token, username } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("name", username);
      navigate("/dashboard"); 
    } catch (error) {
      console.error("Login error:", error.response ? error.response.data : error.message);
      alert("Invalid credentials");
    }
  }

  return (
    <div className='login-background-container'>
      <div className="login-container">
        <div className="login-box">
          <h1>Login</h1>
          <form action="" onSubmit={handleLogin}>
            <div className='user'>
              <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Username/Email address" 
                value={formData.email} 
                onChange={handleInputChange} 
              />
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <i
                  className="password-toggle-icon"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </i>
              </div>
            </div>
            <button className="login-button" type='submit'>Login</button>
          </form>

          <div className="login-group">
            <div>
              <p>Forgot Password?</p>
            </div>
          </div>
          <div className='signup-account'>
            <p>Don't have an account? <Link to="/signup"><span>SignUp</span></Link></p>
          </div>

          <p className="or-Login-text">or Login with:</p>
          <div className="social-icons" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <FaFacebook size={30} style={{ cursor: 'pointer' }} />
            <FaGoogle size={30} style={{ cursor: 'pointer' }} />
            <FaLinkedin size={30} style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </div>
      <div className="animated-text">
        <h1>Making the task more Exciting
          Stay On Track, Achieve Your Best!
        </h1>
      </div>
    </div>
  );
}

export default Login;
