import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from 'axios';

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
      navigate("/"); 
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
                className={showPassword ? "bi bi-eye" : "bi bi-eye-slash"}
                id="togglePassword"
                onClick={togglePasswordVisibility}
              ></i>
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
          <div className="social-icons">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-google"></i>
            <i className="bi bi-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
