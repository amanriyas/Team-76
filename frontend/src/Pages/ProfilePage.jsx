import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaCog, FaBell, FaQuestionCircle, FaUserFriends, FaBan } from 'react-icons/fa'; // Icons
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import './Profile.css'; 
import Profile from "../assets/Profile.png"

export default function ProfilePage() {
  return (
    <div className="profile-layout">
      <Header title="Profile" pageIcon={Profile} />
      <Sidebar />
      <div className="profile-container">
        <div className="green-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="profile-picture">
            <FaUserCircle size={100} /> 
          </div>

          <div className="profile-actions" style={{ marginBottom: '20px' }}>
            <Link to="/friends">
              <button className="profile-button green-button" style={{ display: 'flex', alignItems: 'center' }}>
                <FaUserFriends style={{ marginRight: '8px' }} /> 
                Friendships
              </button>
            </Link>
            <Link to="/block">
              <button className="profile-button green-button" style={{ display: 'flex', alignItems: 'center' }}>
                <FaBan style={{ marginRight: '8px' }} />
                Block List
              </button>
            </Link>
          </div>

          {/* user information  */}
          <div className="profile-info">
            <input type="text" value="John Smith Doe" readOnly className="profile-input" />
            <input type="password" value="********" readOnly className="profile-input" /> 
            <input type="text" value="JSD123@student.bham.ac.uk" readOnly className="profile-input" />
            <input type="text" value="MSC COMPUTER SCIENCE" readOnly className="profile-input" />
          </div>

          {/* sign out */}
          <div className="profile-actions">
            <Link to = "/login">
            <button className="sign-out-button">Sign Out</button>
            </Link>
          </div>

          {/* setting , notifications, help icons */}
          <div className="profile-icons">
            <FaCog className="icon" title="Settings" />
            <FaBell className="icon" title="Notifications" />
            <FaQuestionCircle className="icon" title="Help" />
          </div>
        </div>
      </div>
    </div>
  );
}