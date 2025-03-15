import React, { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import StudyChatBox from "../components/chatbox.jsx";
import Pencil from "../assets/Pencil.png"




const StudyChatbox = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, { sender: "User", message: userMessage }]);
    setUserMessage("");
  };

  return (
    <>
    <Sidebar/>
    <Header title="Studyo Mentor" pageIcon={Pencil} />
    <StudyChatBox messages={messages} userMessage={userMessage} setUserMessage={setUserMessage} handleSendMessage={handleSendMessage} />
    </>
  );
};
 


export default StudyChatbox;
