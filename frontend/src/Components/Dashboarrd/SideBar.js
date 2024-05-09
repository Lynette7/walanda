import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './SideBar.css';
// import './dash.js';

function SideBar() {

  const [expenses, setExpenses] = useState([]);
  const [isCreatedExpensesOpen, setIsCreatedExpensesOpen] = useState(false);

  // Function to fetch expenses from the backend
  const fetchExpenses = () => {
    // Mock data for demonstration (replace with actual API call)
    const mockExpenses = [
      { id: 1, title: 'Expense 1', amount: 100, date: '2024-05-09' },
      { id: 2, title: 'Expense 2', amount: 150, date: '2024-05-10' },
      { id: 3, title: 'Expense 3', amount: 200, date: '2024-05-11' },
    ];
    setExpenses(mockExpenses);
  };

  // // Function to fetch expenses from the backend (replace with actual API call)
  // const fetchExpenses = async () => {
  //   try {
  //     const response = await fetch('your-api-endpoint'); // Replace with your API endpoint
  //     const data = await response.json();
  //     setExpenses(data);
  //   } catch (error) {
  //     console.error('Error fetching expenses:', error);
  //     // Handle errors appropriately (e.g., display error message to user)
  //   }
  // };

  // Fetch expenses when the component mounts or when "Created Expenses" is clicked
  useEffect(() => {
    fetchExpenses();
  }, [isCreatedExpensesOpen]); // Dependency array ensures fetch on open

  const handleCreatedExpensesClick = () => {
    setIsCreatedExpensesOpen(!isCreatedExpensesOpen);
  };

  return (

    <><header>

      <div class="logosec">
      <Link to="/">
        <h2 className="kazi-header">
          Wala
          <span>nda</span>
        </h2>
      </Link>
      <img src="frontend/public/images/30.png"
          class="icn menuicn"
          id="menuicn"
          alt="menu-icon" />
      </div>

      <div class="searchbar">
        <input type="text"
          placeholder="Search" />
        <div class="searchbtn">
          <img src="frontend/public/images/28.png"
            class="icn srchicn"
            alt="search-icon" />
        </div>
      </div>

      <div class="message">
        <div class="circle"></div>
        <img src="frontend/public/images/8.png"
          class="icn"
          alt="" />
        <div class="dp">
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
            class="dpicn"
            alt="dp" />
        </div>
      </div>

    </header>

    <div class="main-container">
        <div class="navcontainer">
          <nav class="nav">
            <div class="nav-upper-options">
              <div class="nav-option option1">
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
                  class="nav-img"
                  alt="dashboard" />
                <h3> Dashboard</h3>
              </div>


              <div className={`nav-option option2 ${isCreatedExpensesOpen ? 'active' : ''}`} onClick={handleCreatedExpensesClick}>
                <img src="frontend/public/images/5.png" className="nav-img" alt="articles" />
                <h3>Created Expenses</h3>
                {isCreatedExpensesOpen && (
                  <div className="created-expenses-container">
                    {expenses.map((expense) => (
                      <div className="expense-card" key={expense.id}>
                        <p className="card-title">{expense.title}</p>
                        <p className="card-details">
                          Amount: {expense.amount} | Date: {expense.date}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div class="nav-option option3" onClick={handleCreatedExpensesClick}>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
                  class="nav-img"
                  alt="report" />
                <h3> Closed Expenses</h3>
              </div>

              <div class="nav-option option6">
                <img src="frontend/public/images/4.png"
                  class="nav-img"
                  alt="settings" />
                <h3> Settings</h3>
              </div>

              <div class="nav-option logout">
                <img src="frontend/public/images/7.png"
                  class="nav-img"
                  alt="logout" />
                <h3>Logout</h3>
              </div>

            </div>
          </nav>
        </div>
        </div>
        {/* Render list of expense cards
      <div className="expense-list">
        {expenses.map(expense => (
          <ExpenseCard key={expense.id} expense={expense} />
        ))}
      </div> */}

        </>

        )
      }
export default SideBar;


