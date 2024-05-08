import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

function SideBar() {
  return (
    <div className="sidebar">
      <h2>Walanda</h2>
      <ul>
        <li>
          <Link to="/created-expense">Created Expense</Link>
        </li>
        <li>
          <Link to="/closed-expense">Closed Expense</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
