import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
// import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  function logout() {
    setActive(true);
    localStorage.removeItem("expense");
    localStorage.removeItem("profileId");
    navigate("/expenseLogin");
  }

  // const expense = useSelector((state) => state.expense.expense);

  return (
    <div className="header">
      <Link to="/">
        <h2>
          Wala<span id="kazi-header">nda</span>
        </h2>
      </Link>

      <nav>
        <ul>
          <Link to="/jobs">
            <li> Find Jobs </li>
          </Link>

          <Link to="/applied/jobs">
            <li> My Jobs </li>
          </Link>

          <Link to="/myreviews">
            <li> View Reviews </li>
          </Link>

          <Link to="/expenseProfile">
            <li>
              <FontAwesomeIcon icon={faUser} id="profile" />
            </li>
          </Link>

          <li
            className="customer-logout-btn"
            id={active ? "active-btn" : ""}
            onClick={logout}
          >
            Log Out
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
