import React from "react";

function DashboardCard({ title, icons, onRocketClick, onLeaderboardClick, onFlashcardsClick, tooltips }) {
  return (
    <div className="dashboard-card">
      <h2 className="card-title">{title}</h2> 
      <div className="icons">
        {icons.map((icon, index) => (
          <div key={index} className="icon-container" data-tooltip={tooltips ? tooltips[index] : "Action"}>
            <button
              className="icon-button"
              onClick={() => {
                if (index === 0 && onRocketClick) onRocketClick(); 
                if (index === 1 && onLeaderboardClick) onLeaderboardClick(); 
                if (index === 2 && onFlashcardsClick) onFlashcardsClick(); 
              }}
            >
              <img src={icon} alt={`icon-${index}`} className="card-icon" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardCard;
