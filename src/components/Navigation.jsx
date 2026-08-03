import React from "react";
import "../components/Style/index.css";
import "../components/Style/nav.css";

function Navigation() {
  return (
    <nav className="top-navbar">
      <div className="nav-links">
        <a href="#about">#about-me</a>
        <a href="#projects">#projects</a>
        <a href="#skills">#skills</a>        
        <a href="#contact">#contact-me</a>
      </div>
      <div className="social-icons">
        <a
          href="https://github.com/pixabel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github fa-lg"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/isabel-feltman-443979171"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
