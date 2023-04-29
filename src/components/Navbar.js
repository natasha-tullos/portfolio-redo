import React from 'react';
import logo from '../logo.svg';

import '../styles/components/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} className="logo" alt="logo" />
      <ul className="nav-links">
        <li>
          <a href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;