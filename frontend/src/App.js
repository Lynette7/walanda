import React from "react";
import LandingPage from "./Components/landingPage/LandingPage";
import LoginExpForm from "./Components/expense/LoginExpForm";
import { Route, Routes } from "react-router-dom";
import ExpenseContainer from "./Components/expense/expenseContainers/ExpenseContainer";
import LoginForm from "./Components/login/LoginForm";
import ResetPassword from "./Components/resetPassword/ResetPassword";
import ExpenseSplitSlice from "./Components/expenseSplit/ExpenseSpliit";
import Alert from "./Components/Alert/Alert";
import Footer from "./Components/Footer/Footer";
import Dashboard from "./Components/Dashboard/Dashboard";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/expenseSignup" element={<LoginExpForm />} />
        <Route path="/passwordReset/form" element={<ResetPassword />} />
        <Route path="/expenseLogin" element={<LoginForm />} />
        <Route path="/expenseProfiles" element={<ExpenseContainer />} />
        <Route path="/expenseProfile" element={<ExpenseSplitSlice />} />
        <Route path="/expense/alert" element={<Alert />} />
        <Route path="/dashboard" element={<Dashboard />} />


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
