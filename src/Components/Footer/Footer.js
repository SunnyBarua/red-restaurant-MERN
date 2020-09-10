import React from "react";
import "./Footer.css";
import Logo from "../../Images/logo2.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__left">
          <img src={Logo} />
        </div>
        <div className="footer__right">
          <div className="footer__right__firstPortion">
            <ul>
              <li>About Outline food</li>
              <li>Read our blog</li>
              <li>Sign up to deliver</li>
              <li>Add your restaurant</li>
            </ul>
          </div>
          <div className="footer__right__secondPortion">
            <ul>
              <li>Get help</li>
              <li>Read FAQs</li>
              <li>View all cities</li>
              <li>Restaurants near me</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom__firstPortion">
          Copyright @2020 Red-Restaurant ||Developed By Sunny
        </div>
        <div className="footer__bottom__secondPortion">
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Pricing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
