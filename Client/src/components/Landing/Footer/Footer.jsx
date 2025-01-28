import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Task Management System</h3>
        <p>
          Simplify your workflow and boost your productivity. Stay organized, collaborate, and get things done.
        </p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Task Management System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
