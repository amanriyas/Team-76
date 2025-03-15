import React from "react";
import { useTheme } from "./ThemeProvider"; 
import { FaMoon, FaSun } from "react-icons/fa"; 

export const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div
      onClick={toggleDarkMode}
      className="flex items-center px-4 py-4 rounded-lg hover:bg-[#ffffff33] transition-all cursor-pointer"
    >
      {darkMode ? (
        <FaSun className="w-6 h-6 mr-3" />
      ) : (
        <FaMoon className="w-6 h-6 mr-3" />
      )}
      <span className="text-[16px] font-semibold">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </span>
    </div>
  );
};