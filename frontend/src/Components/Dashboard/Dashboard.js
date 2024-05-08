import React from "react";
import LandingHeader from "../LandingTopHeader/LandingHeader";
import SideBar from "./Components/Dashboard/SideBar";

function Dashboard() {
  return (
    <div className="landing-page">
      <LandingHeader />
      <SideBar />
    </div>
  );
}

export default Dashboard;
