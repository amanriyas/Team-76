import React, { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react"; // Import Send icon from lucide-react

const StudyChatbox = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'StudyBot', content: 'Hello! What study technique are you interested in today?', time: '5:00 PM' },
    { id: 2, sender: 'StudyBot', content: 'Here is a sample study plan for you!', time: '5:05 PM' },
    { id: 3, sender: 'StudyBot', content: `Sample Study Plan:\n\n1. 9:00 AM - Pomodoro Session 1:\n   - Focus on a study task for 25 minutes.\n2. 9:30 AM - Break (5 minutes):\n   - Take a short break. Hydrate, stretch.\n3. 9:35 AM - Pomodoro Session 2:\n   - Study the same task for another 25 minutes.\n4. 10:05 AM - Break (15 minutes):\n   - Longer break. Relax and recharge.\n5. 10:20 AM - Note-Taking Session (25 minutes):\n   - Use the Cornell Method for structured notes.`, time: '5:10 PM' },
    { id: 4, sender: 'You', content: 'That sounds great! I will try that. Thanks!', time: '5:15 PM' },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const chatEndRef = useRef(null);

  const previousSessions = [
    { id: 1, title: "March 11, 2025 - Focus Techniques", lastMessage: "Try the Pomodoro technique for better focus.", time: "5:00 PM" },
    { id: 2, title: "March 10, 2025 - Memory Retention", lastMessage: "Use active recall and spaced repetition.", time: "10:20 AM" },
    { id: 3, title: "March 9, 2025 - Effective Note-Taking", lastMessage: "Try the Cornell Method for structured notes.", time: "11:00 AM" }
  ];

  const quickReplies = [
    "Tell me about active recall.",
    "How can I avoid distractions?",
    "What’s the best way to take notes?",
    "Any memory improvement tips?"
  ];

  // Auto-scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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

  const handleQuickReply = (message) => {
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        sender: "You",
        content: message,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(e);
    }
  };

  return (
    <div className="w-[calc(95%-12rem)] h-[calc(95vh-5rem)] mt-20 mx-auto bg-[#f8f9fa] rounded-lg shadow-xl overflow-hidden">
      <div className="flex h-full">
        {/* Sidebar for previous study sessions */}
        <div className="w-1/4 bg-[#79A657] overflow-y-auto">
          <div className="p-3 bg-gray-200 m-3 rounded-lg">
            <input
              type="text"
              className="w-full bg-transparent outline-none text-sm p-2 border border-[#ccc] rounded-lg"
              placeholder="Search study sessions..."
            />
          </div>

          <div className="space-y-2 p-3">
            {previousSessions.map(session => (
              <div
                key={session.id}
                className="cursor-pointer bg-gray-300 hover:bg-white p-3 rounded-lg"
              >
                <div className="font-bold text-sm">{session.title}</div>
                <div className="text-xs text-gray-600">{session.lastMessage}</div>
                <div className="text-xs text-gray-400">{session.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main chat area */}
        <div className="flex-1 flex flex-col">
          {/* Chat header */}
          <div className="bg-[#79A657] p-4 flex justify-between items-center shadow-md rounded-t-lg">
            <h2 className="text-xl font-bold text-white">Studyo Mentor Chat</h2>
          </div>

          {/* Messages container */}
          <div className="flex-1 p-4 overflow-y-auto bg-white m-3 rounded-lg shadow-lg">
            {messages.map(message => (
              <div
                key={message.id}
                className={`mb-4 ${message.sender === 'You' ? 'text-right' : ''}`}
              >
                <div
                  className={`inline-block rounded-xl p-6 max-w-[80%] md:max-w-[70%] ${message.sender === 'You' ? 'bg-[#79A657] text-white' : 'bg-[#e9ecef] text-[#333]'}`}
                  style={{ whiteSpace: 'pre-wrap' }}
                >
                  {message.sender !== 'You' && <div className="font-bold mb-1">{message.sender}</div>}
                  <p>{message.content}</p>
                  <div className="text-xs mt-1 opacity-75">{message.time}</div>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Quick replies */}
          <div className="p-3 bg-gray-50 border-t border-gray-200 flex flex-wrap gap-2">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                onClick={() => handleQuickReply(reply)}
                className="py-1 px-3 rounded-lg bg-[#f1f8f3] text-sm text-[#79A657] border border-[#79A657] hover:bg-[#e0f7e1] transition-colors"
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Message input */}
          <div className="p-3 bg-white m-3 rounded-lg">
            <form onSubmit={sendMessage} className="flex">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                className="flex-1 rounded-l-lg p-2 outline-none text-sm border border-[#ccc]"
                placeholder="Type your message..."
              />
              <button
                type="submit"
                className="bg-[#79A657] hover:bg-[#68a457] text-white px-4 py-2 rounded-r-lg"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyChatbox;
