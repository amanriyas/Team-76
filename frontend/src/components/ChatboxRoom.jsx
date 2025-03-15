import React, { useState } from 'react';

const ChatBoxRoom = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Jane', content: 'Hey there! How\'s the project coming along?', time: '10:32 AM' },
    { id: 2, sender: 'You', content: 'Pretty good! Just working on the final touches.', time: '10:35 AM' },
    { id: 3, sender: 'Jane', content: 'Great! Let me know if you need any help with anything.', time: '10:36 AM' }
  ]);
  
  const [chatRooms, setChatRooms] = useState([
    { id: 1, name: 'Project Alpha', lastMessage: 'Jane: Let me know if you need any help', time: '10:36 AM', unread: 0 },
    { id: 2, name: 'Marketing Team', lastMessage: 'Tom: I\'ll send the report tomorrow', time: '9:45 AM', unread: 2 },
    { id: 3, name: 'General', lastMessage: 'Sarah: Thanks everyone!', time: 'Yesterday', unread: 0 }
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  
  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    
    const newMsg = {
      id: messages.length + 1,
      sender: 'You',
      content: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMsg]);
    setNewMessage('');
  };
  
  return (
    <div className="w-[calc(95%-12rem)] h-[calc(95vh-5rem)] mt-20 mx-auto bg-[#9ec67f] rounded-lg shadow-lg overflow-hidden">
      <div className="flex h-full">
        {/* Sidebar for chat history */}
        <div className="w-1/4 bg-[#79A657] overflow-y-auto">
          <div className="p-3 bg-gray-200 m-3 rounded">
            <input 
              type="text" 
              className="w-full bg-transparent outline-none" 
              placeholder="Search chats..." 
            />
          </div>
          
          <div className="space-y-2 p-3">
            {chatRooms.map(room => (
              <div key={room.id} className="bg-gray-300 hover:bg-white rounded p-3 cursor-pointer">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-black">{room.name}</h3>
                  <span className="text-xs text-black">{room.time}</span>
                </div>
                <p className="text-sm text-black truncate">{room.lastMessage}</p>
                {room.unread > 0 && (
                  <span className="inline-block bg-red-500 text-white text-xs rounded-full px-2 py-1 mt-1">
                    {room.unread}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Main chat area */}
        <div className="flex-1 flex flex-col">
          {/* Chat header */}
          <div className="bg-[#9ec67f] p-4 flex justify-between items-center shadow-sm">
            <div>
              <h2 className="text-xl font-bold">Discussions</h2>
            </div>
            <button className="rounded-full bg-green-100 p-2 hover:bg-green-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
          
          {/* Messages container */}
          <div className="flex-1 p-4 overflow-y-auto bg-white m-3 rounded-lg">
            {messages.map(message => (
              <div 
                key={message.id} 
                className={`mb-4 ${message.sender === 'You' ? 'text-right' : ''}`}
              >
                <div 
                  className={`inline-block rounded-lg p-3 max-w-xs md:max-w-md ${
                    message.sender === 'You' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {message.sender !== 'You' && (
                    <div className="font-bold mb-1">{message.sender}</div>
                  )}
                  <p>{message.content}</p>
                  <div className="text-xs mt-1 opacity-75">{message.time}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Message input */}
          <div className="p-3 bg-gray-200 m-3 rounded-lg">
            <form onSubmit={sendMessage} className="flex">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 rounded-l-lg p-2 outline-none"
                placeholder="Type your message..."
              />
              <button 
                type="submit" 
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-lg"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBoxRoom;