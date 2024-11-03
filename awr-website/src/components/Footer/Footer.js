import React from 'react';
import './Footer.css';

const Footer = () => {
  const quickLinks = ['Home', 'Courses', 'Resources', 'Community', 'Blog'];
  const connectLinks = ['Email', 'Twitter', 'LinkedIn', 'YouTube', 'Instagram'];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>AI with Roy</h3>
            <p>Empowering the next generation of AI engineers with comprehensive resources and community support.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              {connectLinks.map((link, index) => (
                <li key={index}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: info@aiwithroy.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 AI with Roy. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;