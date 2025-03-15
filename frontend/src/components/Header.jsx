import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import Profile from "../assets/Profile.png";
import Pencil from "../assets/Pencil.png";



function Header({ title, pageIcon }) {
    const navigate = useNavigate(); 

    return (
        <header className="w-[calc(100%-12rem)] h-20 bg-white flex justify-start items-center px-5 py-2 fixed top-0 left-46 z-10 shadow-md">
            <div className="flex items-center gap-4 pl-5">
                {pageIcon && <img src={pageIcon} className="w-10 h-10" />}
                <h1 className="text-3xl font-bold text-[#110f0f] text-center">{title}</h1>
            </div>           
        </header>
    );
}

export default Header;
