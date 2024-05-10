import React from "react";
import { Link } from "react-router-dom";
import "./LandingHeader.css";

function LandingHeader() {
  return (
    <header className="landing-header">
      <Link to="/">
        <h2 className="kazi-header">
          Wala
          <span>nda</span>
        </h2>
      </Link>

      <nav>
        <ul>
          <Link to="/expenseLogin">
            <li className=" landing-login "> login </li>
          </Link>
          {/* <Link to="/expenseSignUp">
            <li className="landing-signup"> Sign Up </li>
          </Link> */}
        </ul>
      </nav>
    </header>
  );
}

export default LandingHeader;
