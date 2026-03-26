import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  
  return (
   
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="logo">BrandName</NavLink>
        <ul className={isMobileMenuOpen ? "nav-links-mobile" : "nav-links"}>
          {/* Use NavLink for routing and automatic active class styling */}
          <li><NavLink to="/" onClick={toggleMobileMenu}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={toggleMobileMenu}>About</NavLink></li>
        </ul>
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>☰</div>
      </div>
    </nav>
  );
};
export default Navbar;
