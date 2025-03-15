import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import Logo from "../assets/Logo.png";
import Dashboard from "../assets/Dashboard.png";
import Pencil from "../assets/Pencil.png";
import Study_Room from "../assets/Study_Room.png";
import Calendar from "../assets/Calendar.png";
import Wellness from "../assets/Wellness.png";
import Profile from "../assets/Profile.png";
import Flashcards from "../assets/notes_broken.png";
import Leaderboard from "../assets/ph_medal-thin.png"

const menuItems = [
  { icon: Profile, text: "Profile", path: "/profile" },
  { icon: Dashboard, text: "Dashboard", path: "/dashboard" },
  { icon: Pencil, text: "Techniques", path: "/techniques" },
  { icon: Study_Room, text: "Rooms", path: "/studyroom" },
  { icon: Calendar, text: "Calendar", path: "/calendar" },
  { icon: Wellness, text: "Wellness", path: "/wellness" },
  { icon: Flashcards, text: "Flashcards", path: "/flashcards"},
  { icon: Leaderboard, text: "Leaderboard", path: "/leaderboard"}
];


const Sidebar = () => {
  const location = useLocation(); 
  const specialPages = ["/flashcards", "/dashboard","/modules","/profile", "/friends","/block"];
  const isSpecialPage = specialPages.includes(location.pathname) 

  return (
    <div
      className={`w-46 h-full p-4 bg-gray-300 rounded-tr-3xl rounded-br-3xl overflow-y-auto transition-all 
        ${isSpecialPage ? "fixed left-0 top-0 z-10" : ""}`}
    >
      {/* Logo Section */}
      <div className="flex justify-center mb-6 p-3 rounded-lg">
        <img src={Logo} alt="logo" className="w-24 h-24 hover:scale-105 transition-transform" />
      </div>


      {/* Menu Items */}
      <ul className="flex flex-col gap-2 w-full">
        {menuItems.map((item, index) => (
          <li key={index} className="w-full">
            <Link
              to={item.path}
              className="flex items-center w-full px-4 py-2 rounded-lg hover:bg-opacity-20 hover:bg-white transition-all cursor-pointer"
            >
              <img src={item.icon} alt={item.text} className="w-6 h-6 mr-3" />
              <span className="text-[15px] font-medium text-bold">{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;