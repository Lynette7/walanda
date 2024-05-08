import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./ExpenseF.css";
import { addexpense } from "./LoginExpSlice";
import LandingHeader from "../LandingTopHeader/LandingHeader";


function ExpenseForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [expense, setExpense] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    address: "",
    admin_id: 1,
  });

  const errors = useSelector((state) => state.expense.errors);
  const status = useSelector((state) => state.expense.status);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setExpense({ ...expense, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addexpense(expense, navigate));
    setExpense({
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      address: "",
      admin_id: 1,
    });
  }

  useEffect(() => {
    if (!errors) {
      setVisible(false);
      return;
    }

    setVisible(true);
    const timer = setInterval(() => {
      setVisible(false);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [errors]);
  return (
    <>
      <LandingHeader />
      <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
      <div className="expense-form-container">

        <form
          id="expense-signup"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="row-1">
            <div className="col-1">
              <label> Name </label> <br />
              <input
                type="text"
                className="expense-input"
                value={expense.username}
                name="username"
                onChange={handleChange}
              />
              {visible ? (
                errors.length > 0 ? (
                  <h3 className="signup-error">
                    {errors.find((error) => error.includes("Username"))}
                  </h3>
                ) : null
              ) : null}
            </div>
            <div className="col-1">
              <label> Email </label> <br />
              <input
                type="email"
                className="expense-input"
                value={expense.email}
                name="email"
                onChange={handleChange}
              />
              {visible ? (
                errors.length > 0 ? (
                  <h3 className="signup-error">
                    {errors.find((error) => error.includes("Email"))}
                  </h3>
                ) : null
              ) : null}
            </div>
          </div>
          <div className="row-2">
            <div className="col-1">
              <label> Address </label> <br />
              <input
                type="text"
                className="expense-input"
                value={expense.location}
                name="location"
                onChange={handleChange}
              />
              {visible ? (
                errors.length > 0 ? (
                  <h3 className="signup-error">
                    {errors.find((error) => error.includes("Location"))}
                  </h3>
                ) : null
              ) : null}
            </div>

          </div>
          <div className="row-3">
            <div className="col-1">
              <label> Password </label> <br />
              <input
                type="password"
                className="expense-input"
                autoComplete="current-password"
                value={expense.password}
                name="password"
                onChange={handleChange}
              />
              {visible ? (
                errors.length > 0 ? (
                  <h3 className="signup-error">
                    {errors.find((error) => error.includes("Password"))}
                  </h3>
                ) : null
              ) : null}
            </div>
            <div className="col-1">
              <label> Password Confirmation </label> <br />
              <input
                type="password"
                className="expense-input"
                autoComplete="current-password"
                value={expense.password_confirmation}
                name="password_confirmation"
                onChange={handleChange}
              />
              {visible ? (
                errors.length > 0 ? (
                  <h3 className="signup-error">
                    {errors.find((error) =>
                      error.includes("Password confirmation")
                    )}
                  </h3>
                ) : null
              ) : null}
            </div>
          </div>

          <div className="expense-submit-btn">
            <button>
              {status === "loading" ? "submitting..." : "submit"}
            </button>
          </div>
          <Link to="/expenseLogin">
            <h2>
              Already have an account ? <span className="sign-up">Login</span>
            </h2>
          </Link>
        </form>
      </div>
      <br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
    </>
  );
}

export default ExpenseForm;
