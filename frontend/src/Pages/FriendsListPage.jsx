import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import './Profile.css';
import { UserContext } from '../components/UserContext'; 

function FriendsListPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { friends, handleBlock, handleAddFriend } = useContext(UserContext); 

  const handleAddFriendClick = () => {
    handleAddFriend(searchQuery);
    setSearchQuery('');
  };

  return (
    <div className="profile-layout">

      <Header title="Friends List" />
      <Sidebar />
      <div className="friends-container">
        
        <div className="green-container">

          <div style={{ width: '100%', marginBottom: '20px' }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search or add a friend"
              style={{
                padding: '12px',
                width: '100%',
                fontSize: '16px',
                borderRadius: '6px',
                border: '1px solid #ddd',
              }}
            />
            <button
              onClick={handleAddFriendClick}
              className="profile-button green-button"
              style={{ width: '100%', marginTop: '10px' }}
            >
              Add Friend
            </button>
          </div>

          <div className="scrollable-container">
            {friends.map((friend, index) => (
              <div key={index} className="friend-item">
                <span className="friend-name">{friend}</span>
                <div className="friend-actions">
                  <button
                    onClick={() => handleBlock(friend)}
                    className="block-button"
                  >
                    Block
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

export default FriendsListPage;