import React from "react";

import { Link } from "react-router-dom";

import "./LandingTop.css";

function LandingTop() {
  return (
    <>
      <div className="top-container">
        <div id="image-container">
          <img
            src="./images/im.png"
            alt="plumber with arrms crossed"
          />
        </div>
        <div id="start-section">
          <h2>
            Wala<span id="kazi">nda </span> <br />
            Splitting Expenses
          </h2>
          <Link to="/expenseLogin">
            <button id="get-started"> Get Started </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LandingTop;
