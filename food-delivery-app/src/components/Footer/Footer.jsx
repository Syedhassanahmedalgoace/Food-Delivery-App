import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo-here" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat ea
            nesciunt, natus dicta ratione perferendis? Officia reprehenderit, ut
            nobis quibusdam autem quia, doloribus dicta animi saepe laborum
            fugiat sed eos. Autem iste id ratione, animi, perspiciatis harum
            veritatis, consectetur a dolor tempore quis! Placeat quos
            repudiandae praesentium distinctio beatae laboriosam quae nostrum
            voluptatum ducimus blanditiis.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="facebook-icon-here" />
            <img src={assets.twitter_icon} alt="twitter-icon-here" />
            <img src={assets.linkedin_icon} alt="linkdin-icon-here" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+1-254-541-658-4</li>
            <li>contact.tomato@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copywrite">
        Copyright 2025 Tomato.com - All Rights are Reserved
      </p>
    </div>
  );
};

export default Footer;
