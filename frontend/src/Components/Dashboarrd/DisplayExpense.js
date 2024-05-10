
import React from "react";
// import LandingHeader from "../LandingTopHeader/LandingHeader";
import SideBar from "./SideBar";
// import Home from "./Home";
import OpenExpenses from "./OpenExpenses";
// import CreateExpense from "./CreateExpense";




function DisplayExpense() {
  return (
    <div className="landing-page" style={{ display: "flex" }}>
      <SideBar />
      {/* <CreateExpense /> */}
      <OpenExpenses />
    </div>
  );
}

export default DisplayExpense;

