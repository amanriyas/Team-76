import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../components/Dashboard.css";
import Dashboard from "../assets/Dashboard.png"

import RocketIcon from "/src/assets/Rockets.png";
import MedalIcon from "/src/assets/ph_medal-thin.png";
import BookmarkIcon from "/src/assets/vector.png"; 

const dashboardItems = [
  { id: 1, title: "Artificial Intelligence", icons: [RocketIcon, MedalIcon, BookmarkIcon] },
  { id: 2, title: "Operating Systems", icons: [RocketIcon, MedalIcon, BookmarkIcon] },
  { id: 3, title: "Security and Networks", icons: [RocketIcon, MedalIcon, BookmarkIcon] },
  { id: 4, title: "Data Structures", icons: [RocketIcon, MedalIcon, BookmarkIcon] },
];

const dashboardTooltips = ["Launch Module", "View Leaderboard", "Favorite Module"];

function DashboardPage() {
  const navigate = useNavigate();

  
  const handleRocketClick = (moduleTitle) => {
    navigate(`/modules?module=${encodeURIComponent(moduleTitle)}`);
  };

  
  const handleLeaderboardClick = () => {
    navigate("/leaderboard");
  };

  return (
    <div>
      <Header title="Dashboard" pageIcon={Dashboard}/>
      <Sidebar />
      <div className="dashboard-wrapper">
        <div className="dashboard-scroll-container">
          <div className="dashboard">
            {dashboardItems.map((item) => (
              <DashboardCard
                key={item.id}
                title={item.title}
                icons={item.icons}
                tooltips={dashboardTooltips}
                onRocketClick={() => handleRocketClick(item.title)}
                onLeaderboardClick={handleLeaderboardClick} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
