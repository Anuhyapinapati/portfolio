import React from "react";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left - Logo / Name */}
        <div className="footer-logo">
          <h2>Anuhya Pinapati</h2>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Middle - Navigation */}
        <div className="footer-nav">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#landing">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Right - Social Media */}
        <div className="footer-social">
          <h4>Follow Me</h4>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
