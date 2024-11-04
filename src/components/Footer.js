import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo-section">
        <h1>Furniture</h1>
        <div className="footer-socials">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
        <p>© 2024 All Rights Reserved</p>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h3>Products</h3>
          <ul>
            <li>Sofa</li>
            <li>Table</li>
            <li>Chair</li>
            <li>Bed</li>
            <li>Lamp</li>
            <li>Decoration</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>About Us</h3>
          <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p>Lorem Ipsum has been the industry's standard dummy text.</p>
        </div>
        <div className="footer-column">
          <h3>Contact Information</h3>
          <p>Furniture@Gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
