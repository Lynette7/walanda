import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { addlogin } from "../expense/LoginExpSlice";
import LandingHeader from "../LandingTopHeader/LandingHeader";
import { ethers } from "ethers";
// import { Dashboard } from "@mui/icons-material";
// import Dashboard from "../../pages/Dashboard";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const errors = useSelector((state) => state.expense.errors);
  const [visible, setVisible] = useState(false);
  const [connected,setConnected] = useState('');

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setLogin({
      ...login,
      [name]: value,
    });
  }

  useEffect(() => {
    if (!errors) {
      setVisible(false);
    }
    setVisible(true);
    const timer = setInterval(() => {
      setVisible(false);
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [errors]);

  async function connectMetamask() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      try {
        // Request account access if needed
        let accounts=await window.ethereum.request({ method: "eth_requestAccounts" });
        // Accounts now exposed
        console.log("Connected to Metamask!");
        setConnected(accounts[0])
        // Additional logic after connecting to Metamask, e.g., get account details
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Metamask not detected");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addlogin(login, () => {
      navigate.push("/dashboard");
    }));
  }

  return (
    <>
      <LandingHeader />
      <div className="login-form-container">
        <form id="login-form" onSubmit={handleSubmit}>
          <h1 className="extra">Login</h1>
          <div className="login-btn">
            {connected ? (
              <p>Connected Address :{connected}</p>
            ):(
              <button onClick={connectMetamask}>Connect with Metamask</button>

            )}
          </div>
          <Link to="/expenseSignUp">
            <h2>
              Do not have an account? <span className="sign-up">Sign Up</span>
            </h2>
          </Link>
        </form>
      </div>
    </>
  );
}


export default LoginForm;


{/* <div className="row">
            <div className="rows">
              <label> username </label> <br />
              <input
                type="text"
                className="login-input"
                value={login.username}
                name="username"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="rows">
              <label> Password </label> <br />
              <input
                type="password"
                className="login-input"
                autoComplete="password"
                value={login.password}
                name="password"
                onChange={handleChange}
              />
              {visible ? (
                errors.length > 0 ? (
                  <h3 className="login-errors">
                    {errors.find((error) => error.includes("Invalid"))}
                  </h3>
                ) : null
              ) : null}
            </div>
          </div> */}
