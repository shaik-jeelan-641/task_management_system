import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import axios from "axios";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { HiEye, HiEyeOff } from "react-icons/hi";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
      console.log('User created successfully:', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Signup error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className='signup-background-container'>
      <div className="signup-container">
        <div className="signup-box">
          <h1>SignUp</h1>
          <form action="" onSubmit={handleSignup}>
            <div className='user'>
              <input 
                type="text" 
                name="username" 
                id="username" 
                placeholder="Username"
                value={formData.username} 
                onChange={handleInputChange} 
              />
              <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Email address" 
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
                >
                  {showPassword ? <HiEye /> : <HiEyeOff />}
                </i>
              </div>
            </div>
            <button className="signup-button" type='submit'>SIGN UP</button>
            <div className="checkbox-group">
              <p>Already Have an Account: </p>
              <Link to="/login"><p>Login/SignIn</p></Link>
            </div>
          </form>
          <p className="or-text">or sign up with:</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaGoogle />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
