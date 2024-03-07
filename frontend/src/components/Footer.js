import React from 'react';
import '../CSS/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>© 2024 AL-Ansari Foundation. All rights reserved.</p>
          <ul className="footer-links">
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Terms of Service</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;