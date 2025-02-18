import { assets } from "../../assets/frontend_assets/assets";
import "./footer.css";

const Footer = () => {
  return (
    <div id="footer" className="footer-container">
      <div className="footer-subcontainer">
        <div className="footer-left-content">
          <img src={assets.logo} alt="" />
          <p>
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-center-content">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-right-content">
          <h2>Get in touch</h2>
          <ul>
            <li>+1-234-567-890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 @ tomato.com -All right Reserved.
      </p>
    </div>
  );
};
export default Footer;
