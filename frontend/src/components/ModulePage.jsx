import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import DashboardCard from "./DashboardCard";
import "./Dashboard.css";

import Rockets from "../assets/Rockets.png";
import Timer from "../assets/timer.png";
import FlashcardsIcon from "../assets/notes_broken.png"; 

function ModulePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const selectedModule = queryParams.get("module");

  const modules = {
    "Artificial Intelligence": [
      { id: 1, title: "Information Theory", icons: [Rockets, Timer, FlashcardsIcon] },
      { id: 2, title: "Uncertainty", icons: [Rockets, Timer, FlashcardsIcon] },
      { id: 3, title: "Likelihood Learning", icons: [Rockets, Timer, FlashcardsIcon] },
      { id: 4, title: "Certification of Learning", icons: [Rockets, Timer, FlashcardsIcon] },
    ],
    "Operating Systems": [
      { id: 1, title: "Process Management", icons: [Rockets, Timer, FlashcardsIcon] },
      { id: 2, title: "Memory Management", icons: [Rockets, Timer, FlashcardsIcon] },
      { id: 3, title: "File Systems", icons: [Rockets, Timer, FlashcardsIcon] },
    ],
  };

  const lessons = selectedModule ? modules[selectedModule] : [];
  

  const modulePageTooltips = ["Launch Lesson", "View Timer", "View Flashcards"];

  
  const handleRocketClick = (lessonTitle) => {
    navigate(`/lesson?lesson=${encodeURIComponent(lessonTitle)}`);
  };

 
  const handleFlashcardsClick = (lessonTitle) => {
    navigate(`/flashcards?lesson=${encodeURIComponent(lessonTitle)}`);
  };

  return (
    <div className="dashboard-container">
      <Header title={selectedModule || "Modules"} />
      <Sidebar />
      <div className="dashboard-wrapper">
        <div className="dashboard-scroll-container">
          <div className="dashboard">
            {modules[selectedModule]?.map((lesson) => (
              <DashboardCard
                key={lesson.id}
                title={lesson.title}
                icons={lesson.icons}
                tooltips={modulePageTooltips}
                onRocketClick={() => handleRocketClick(lesson.title)}
                onFlashcardsClick={() => handleFlashcardsClick(lesson.title)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModulePage;
