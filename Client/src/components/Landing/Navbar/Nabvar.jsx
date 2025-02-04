import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';
import './navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(null);
    const navigate= useNavigate()
    const toggleDropdown = (menu) => {
        setIsMenuOpen(isMenuOpen === menu ? null : menu);
    }

  return (
    <div className="Navbar">
      <section className="nav-items">
        <ul>
          <li><h1>Task Master</h1></li>
          <li className="dropdown" onClick={() => toggleDropdown('product')}>
            <Link to="#" className="navLinks">Product</Link>
            {isMenuOpen === 'product' && (
              <div className="dropdown-menu">
                <div className="box-1">
                  <div className="platform">
                    <h4>Platform</h4>
                    <ul>
                <li><Link to="#" className="navLinks">Feature 1</Link></li>
                <li><Link to="#" className="navLinks">Feature 2</Link></li>
                <li><Link to="#" className="navLinks">Feature 3</Link></li>
              </ul>
                  </div>
                   <div className="platform">
                    <h4>Capabilites</h4>
                    <ul>
                <li><Link to="#" className="navLinks">Feature 1</Link></li>
                <li><Link to="#" className="navLinks">Feature 2</Link></li>
                <li><Link to="#" className="navLinks">Feature 3</Link></li>
              </ul>
                 <ul>
                <li><Link to="#" className="navLinks">Feature 1</Link></li>
                <li><Link to="#" className="navLinks">Feature 2</Link></li>
                <li><Link to="#" className="navLinks">Feature 3</Link></li>
              </ul>
              
                  </div>
                  <div className="box-2">
                    <h4>All Plans</h4>
                      <ul>
                <li><Link to="#" className="navLinks">Feature 1</Link></li>
                <li><Link to="#" className="navLinks">Feature 2</Link></li>
                <li><Link to="#" className="navLinks">Feature 3</Link></li>
              </ul>
                  </div>
                  
                </div>
              </div>
            )}
          </li>
          <li className="dropdown" onClick={() => toggleDropdown('solutions')}>
            <Link to="#" className="navLinks">Solutions</Link>
            {isMenuOpen === 'solutions' && (
            <div className="dropdown-menu">
                <div className="box-1">
                  <div className="platform">
                    <h4>Platform</h4>
                    <ul>
                <li><Link to="#" className="navLinks">Feature 1</Link></li>
                <li><Link to="#" className="navLinks">Feature 2</Link></li>
                <li><Link to="#" className="navLinks">Feature 3</Link></li>
              </ul>
                  </div>
                   <div className="platform">
                    <h4>Capabilites</h4>
                    <ul>
                <li><Link to="#" className="navLinks">Feature 1</Link></li>
                <li><Link to="#" className="navLinks">Feature 2</Link></li>
                <li><Link to="#" className="navLinks">Feature 3</Link></li>
              </ul>
                 <ul>
                <li><Link to="#" className="navLinks">Feature 1</Link></li>
                <li><Link to="#" className="navLinks">Feature 2</Link></li>
                <li><Link to="#" className="navLinks">Feature 3</Link></li>
              </ul>
              
                  </div>
                  <div className="box-2">
                    <h4>All Plans</h4>
                      <ul>
                <li><Link to="#" className="navLinks">Feature 1</Link></li>
                <li><Link to="#" className="navLinks">Feature 2</Link></li>
                <li><Link to="#" className="navLinks">Feature 3</Link></li>
              </ul>
                  </div>
                  
                </div>
              </div>
            )}
          </li>
          <li className="dropdown" onClick={() => toggleDropdown('resources')}>
            <Link to="#" className="navLinks">Resources</Link>
            {isMenuOpen === 'resources' && (
             <div className="dropdown-menu">
                <div className="box-1">
                  <div className="platform">
                    <h4>Platform</h4>
                    <ul>
                <li><Link to="#" className="navLinks">Feature 1</Link></li>
                <li><Link to="#" className="navLinks">Feature 2</Link></li>
                <li><Link to="#" className="navLinks">Feature 3</Link></li>
              </ul>
                  </div>
                   <div className="cap-section">
                    <h4>Capabilites</h4>
                   <div className="ul1">
                     <ul>
                <li><Link to="#" className="navLinks">Feature 1</Link></li>
                <li><Link to="#" className="navLinks">Feature 2</Link></li>
                <li><Link to="#" className="navLinks">Feature 3</Link></li>
              </ul>
                   </div>
                 <div className="ul2">
                  <ul>
                <li><Link to="#" className="navLinks">Feature 1</Link></li>
                <li><Link to="#" className="navLinks">Feature 2</Link></li>
                <li><Link to="#" className="navLinks">Feature 3</Link></li>
              </ul>
                 </div>
              
                  </div>
                  <div className="box-2">
                    <h4>All Plans</h4>
                    <ul>
                <li><Link to="#" className="navLinks">Feature 1</Link></li>
                <li><Link to="#" className="navLinks">Feature 2</Link></li>
                <li><Link to="#" className="navLinks">Feature 3</Link></li>
              </ul>
                  </div>
                  
                </div>
              </div>
            )}
          </li>
          <li><Link to="" className="navLinks">Enterprise</Link></li>
          <li><Link to="" className="navLinks">Pricing</Link></li>
        </ul>
      </section>
      <section className="nav-Button">
        <ul>
          <li id="website"><LanguageIcon /></li>
          <li>|</li>
          <li><Link className="navLinks">Contact Us</Link></li>
          <li><Link className="navLinks" to="/login">Log In</Link></li>
          <li><button onClick={()=>{navigate('/signup')}}>Get Started</button></li>
        </ul>
      </section>
    </div>
  );
};

export default Navbar;