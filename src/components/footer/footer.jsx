import React from 'react';
import './footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container row">
        <div className="footer-section col-lg-3">
          <h4>Usage</h4>
          <ul>
            <li>Learning and Development</li>
            <li>Marketing Teams</li>
            <li>Personalized videos</li>
            <li>Onboarding</li>
            <li>Customer Service</li>
            <li>Templates</li>
          </ul>
        </div>
        <div className="footer-section col-lg-3">
          <h4>Feature</h4>
          <ul>
            <li>AI Avatars</li>
            <li>Voice Cloning</li>
            <li>Interactive Videos</li>
            <li>Video Recommendations</li>
          </ul>
        </div>
        <div className="footer-section col-lg-3">
          <h4>Resource</h4>
          <ul>
            <li>Blogs</li>
            <li>Support</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="footer-section col-lg-3">
          <h4>Company</h4>
          <ul>
            <li>About us</li>
            <li>Contact</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 Unscript</p>
        <div className="social-icons">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
