import { useState } from "react";
import "../styles/navbar.css";
import pursuitLogo from "../assets/pursuitlogo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" onClick={closeMenu}>
        <div className="nav-logo">
          <img src={pursuitLogo} alt="Pursuit Logo" />
          <h1 className="nav-title">Pursuit 2026</h1>
        </div>
      </NavLink>

      {/* Hamburger Icon */}
      <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/accomodation" onClick={closeMenu}>Accommodation</NavLink>
        </li>

        <li>
          <NavLink to="/workshops" onClick={closeMenu}>Workshops</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </li>

        {/* Mobile Actions (inside menu for mobile) */}
        <div className="nav-actions-mobile">
          <button className="neo-btn" onClick={closeMenu}>
            <NavLink to="/register">Register</NavLink>
          </button>
        </div>
      </ul>

      {/* Desktop Actions (hidden on mobile) */}
      <div className="nav-actions desktop-only">
        <button className="neo-btn">
          <NavLink to="/register">Register</NavLink>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
