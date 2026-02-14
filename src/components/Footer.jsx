import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        {/* Footer Links */}
        <div className="footer-links">
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
          <a href="#cookie">Cookie Policy</a>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
        </div>

        {/* Copyright */}
        <p className="footer-copy">
          © 2025 LearningPad. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
