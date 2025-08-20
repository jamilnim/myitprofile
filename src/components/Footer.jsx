import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>© 2025 Your Name</p>
      </div>

      <div className="footer-right">
        <ul className="footer-nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#blogs">Blogs</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#docs">Documents</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
