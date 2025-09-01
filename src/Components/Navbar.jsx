import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiHotMeal } from "react-icons/gi";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import  "../Styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="contact-info">
          <span>
            <FaPhoneAlt /> (123) 456 -7890
          </span>
          <span>
            <FaEnvelope /> example@gmail.com
          </span>
        </div>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        {/* Logo */}
        <div className="logo1">
          <GiHotMeal className="logo1-icon" />
          <span className="logo1-text">Cuisine</span>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
        </button>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={() => setMenuOpen(false)}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>

          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <button className="buy-btn">Book A Table</button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
