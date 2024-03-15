import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Team Members</h4>
          <h4>Abhay Singh</h4>
          <h4>Yash Patel</h4>
          <h4>Shiromani kumar</h4>
          
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: contact@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>Stay connected on social media:</p>
          {/* Add your social media icons or links here */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your E-Commerce App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
