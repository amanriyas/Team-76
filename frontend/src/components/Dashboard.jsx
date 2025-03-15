import React from "react";
import DashboardCard from "./DashboardCard";
import ModulePage from "./ModulePage";
import DashboardIcon from "/src/assets/Dashboard.png";
import RocketIcon from "/src/assets/Rockets.png";
import MedalIcon from "/src/assets/ph_medal-thin.png";
import FavoritedIcon from "/src/assets/vector.png";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./Dashboard.css"; // import the CSS file to avoid issues

const dashboardItems = [
  { id: 1, title: "LI Artificial intelligence", icons: [RocketIcon, MedalIcon, FavoritedIcon] },
  { id: 2, title: "LI Operating systems", icons: [RocketIcon, MedalIcon, FavoritedIcon] },
  { id: 4, title: "LI Security and networks", icons: [RocketIcon, MedalIcon, FavoritedIcon] },
  { id: 5, title: "LI Data structures", icons: [RocketIcon, MedalIcon, FavoritedIcon] },
];
const dashboardTooltips = [
  "Launch Module", 
  "View Leaderboard", 
  "Remove from Dashboard", 
];
function Dashboard() {
  return (
    <div className="dashboard-container">
      <Header title="Dashboard" pageIcon={DashboardIcon} />
      <Sidebar />
      <div className="dashboard-wrapper">
        <div className="dashboard-scroll-container">
          <div className="dashboard">
            {dashboardItems.map((item) => (
              <DashboardCard key={item.id} title={item.title} icons={item.icons} tooltips={dashboardTooltips}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;