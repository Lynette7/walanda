import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-style">
      <h2>
        Wala<span id="kazi-footer">nda </span>
      </h2>
      <span id="copy-right"> CopyRight @2024 </span>
      <div className="social-icons">
        <FontAwesomeIcon icon={faFacebook} className="social-icon" />
        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
        <FontAwesomeIcon icon={faInstagram} className="social-icon" />
      </div>
    </footer>
  );
}
