import { Link } from "react-router-dom";
import { Mail, Instagram } from "lucide-react";
import markazLogo from "@/assets/markaz-logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container" id="find-us">
      <div className="footer-content">
        {/* Left Section - Logo and Tagline */}
        <div className="footer-section footer-brand">
          <Link to="/" style={{ width: "fit-content" }}>
            <img src={markazLogo} alt="Markaz Logo" className="footer-logo" />
          </Link>
          <p className="footer-tagline">
            Connecting communities through events and experiences.
          </p>
          <p className="footer-copyright">
            © 2025 Markaz. All rights reserved.
          </p>
        </div>

        {/* Legal Section */}
        <div className="footer-section footer-nav">
          <p className="footer-heading">Legal</p>
          <div className="footer-links">
            <Link to="/terms-of-service" className="footer-link">
              Terms of Service
            </Link>
            <Link to="/privacy-policy" className="footer-link">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Get in Touch Section */}
        <div className="footer-section footer-contact">
          <p className="footer-heading">Get in Touch</p>
          <div className="contact-info">
            <a href="mailto:info@markazapp.com" className="contact-link">
              <Mail className="contact-icon" size={20} />
              <p className="contact-text">info@markazapp.com</p>
            </a>
            <a
              href="https://www.instagram.com/getmarkaz"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <Instagram className="contact-icon" size={20} />
              <p className="contact-text">@getmarkaz</p>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="footer-copyright">Made with 💚 by the Markaz Team</p>
      </div>
    </footer>
  );
};

export default Footer;
