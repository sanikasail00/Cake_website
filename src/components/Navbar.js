// src/components/Navbar.js
import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Cake Shop</h1>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#featured">Featured Cake</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
