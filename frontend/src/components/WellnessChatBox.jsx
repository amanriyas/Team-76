import React, { useState, useRef } from "react";
import { Send } from "lucide-react"; // Import Send icon from lucide-react

const WellnessChatbox = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "WellnessBot",
      content: "Hello! How are you feeling today?",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "You",
      content: "Pretty good, just a bit stressed with everything going on.",
      time: "10:32 AM",
    },
    {
      id: 3,
      sender: "WellnessBot",
      content: "I understand. Would you like to do a quick breathing exercise?",
      time: "10:33 AM",
    },
    {
      id: 4,
      sender: "You",
      content: "Sure, I could use that. How do we start?",
      time: "10:34 AM",
    },
    {
      id: 5,
      sender: "WellnessBot",
      content:
        "Let's take a deep breath in... and out. Focus on your breath for a moment.",
      time: "10:35 AM",
    },
    {
      id: 6,
      sender: "You",
      content: "Thanks, that helped a little. I feel a bit more relaxed.",
      time: "10:37 AM",
    },
    {
      id: 7,
      sender: "WellnessBot",
      content:
        "Great to hear! Feel free to reach out if you need more support.",
      time: "10:38 AM",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const chatEndRef = useRef(null);
  const previousSessions = [
    {
      id: 1,
      title: "March 9, 2025 - Stress Relief",
      lastMessage: "Let's take a deep breath in... and out.",
      time: "10:35 AM",
    },
    {
      id: 2,
      title: "March 8, 2025 - Focus Tips",
      lastMessage: "Try the Pomodoro technique for better focus.",
      time: "9:20 AM",
    },
    {
      id: 3,
      title: "March 7, 2025 - Anxiety Management",
      lastMessage: "Would you like to try a mindfulness exercise?",
      time: "11:00 AM",
    },
  ];
  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    const newMsg = {
      id: messages.length + 1,
      sender: "You",
      content: newMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  // Hardcoded wellness-focused quick replies
  const quickReplies = [
    "I'm feeling anxious.",
    "I need a break.",
    "Let's do some breathing exercises.",
    "Can we talk more about stress?",
  ];
  return (
    <div className="w-[calc(95%-12rem)] h-[calc(95vh-5rem)] mt-20 mx-auto bg-[#9ec67f] rounded-lg shadow-lg overflow-hidden">
      <div className="flex h-full">
        {/* Sidebar for previous chat sessions */}
        <div className="w-1/4 bg-[#79A657] overflow-y-auto">
          <div className="p-3 bg-gray-200 m-3 rounded">
            <input
              type="text"
              className="w-full bg-transparent outline-none"
              placeholder="Search chats..."
            />
          </div>
          <div className="space-y-2 p-3">
            {previousSessions.map((session) => (
              <div
                key={session.id}
                className="cursor-pointer bg-gray-300 hover:bg-white p-3 rounded-lg"
              >
                <div className="font-bold text-sm">{session.title}</div>
                <div className="text-xs text-gray-600">
                  {session.lastMessage}
                </div>
                <div className="text-xs text-gray-400">{session.time}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Main chat area */}
        <div className="flex-1 flex flex-col">
          {/* Chat header */}
          <div className="bg-[#9ec67f] p-4 flex justify-between items-center shadow-sm">
            <div>
              <h2 className="text-xl font-bold">Wellness Chat</h2>
            </div>
            <button className="rounded-full bg-green-100 p-2 hover:bg-green-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>

          {/* Messages container */}
          <div className="flex-1 p-4 overflow-y-auto bg-white m-3 rounded-lg">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 ${
                  message.sender === "You" ? "text-right" : ""
                }`}
              >
                <div
                  className={`inline-block rounded-lg p-3 max-w-xs md:max-w-md ${
                    message.sender === "You"
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {message.sender !== "You" && (
                    <div className="font-bold mb-1">{message.sender}</div>
                  )}
                  <p>{message.content}</p>
                  <div className="text-xs mt-1 opacity-75">{message.time}</div>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Quick replies */}
          <div className="p-2 bg-gray-50 border-t border-gray-200 flex flex-wrap gap-2">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                className="py-1 px-3 rounded-full bg-gray-100 text-sm border border-gray-300 hover:bg-gray-200 transition-colors"
              >
                {reply}
              </button>
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
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnessChatbox;
