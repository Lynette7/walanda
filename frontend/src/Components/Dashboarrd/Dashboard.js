
import React from "react";
// import LandingHeader from "../LandingTopHeader/LandingHeader";
import SideBar from "./SideBar";
import Home from "./Home";
import CreateExpense from "./CreateExpense";




function Dashboard() {
  return (
    <div className="landing-page" style={{ display: "flex" }}>
      <SideBar />
      {/* <CreateExpense /> */}
      <Home />
    </div>
  );
}

export default Dashboard;

