import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import './Profile.css';
import { UserContext } from '../components/UserContext'; 

function BlockListPage() {
  const navigate = useNavigate();
  const { blockedUsers, handleUnblock } = useContext(UserContext); 

  return (
    <div className="profile-layout">
      <Header title="Block List" />
      <Sidebar />
      <div className="block-container">
        <div className="green-container">
          <div className="scrollable-container">
            {blockedUsers.map((user, index) => (
              <div key={index} className="friend-item">
                <span className="friend-name">{user}</span>
                <div className="friend-actions">
                  <button
                    onClick={() => handleUnblock(user)}
                    className="remove-button"
                  >
                    Unblock
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockListPage;