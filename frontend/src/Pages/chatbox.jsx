import React, { useState, useEffect, useRef } from "react";

const WellnessChatbox = () => {
  const [messages, setMessages] = useState([
    { text: "Let's find your study flow!", isUser: false },
    { text: "How do you feel today?", isUser: false },
  ]);
  const [inputValue, setInputValue] = useState("");
  const chatEndRef = useRef(null);
  const suggestionOptions = ["Stressed", "Not Good", "Great"];

  const responseMap = {
    stressed: "Taking deep breaths can help. Let's try a 5-minute meditation?",
    "not good": "I'm here to help. Maybe some calming music? 🎵",
    great: "Wonderful! Let's keep this momentum going! 🚀",
    default: "Try expressing your mood with words like 'Stressed', 'Not Good', or 'Great'",
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    setMessages((prev) => [...prev, { text: inputValue, isUser: true }]);

    const lowerCaseInput = inputValue.toLowerCase();
    const response = responseMap[lowerCaseInput] || responseMap.default;

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: response, isUser: false }]);
    }, 800);

    setInputValue("");
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setTimeout(() => {
      handleSend(new Event("submit")); // Auto-send after setting value
    }, 100);
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "16px",
        padding: "24px",
        width: "100%",
        maxWidth: "1200px",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
        margin: "auto",
      }}
    >
      {/* Chat Messages */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          marginBottom: "20px",
          padding: "15px",
          backgroundColor: "#f8f9fa",
          borderRadius: "12px",
          border: "1px solid #eee",
          fontSize: "18px",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              margin: "16px 0",
              display: "flex",
              justifyContent: msg.isUser ? "flex-end" : "flex-start",
            }}
          >
            <div
              style={{
                padding: "14px 22px",
                borderRadius: "20px",
                backgroundColor: msg.isUser ? "#79A657" : "#e9ecef",
                color: msg.isUser ? "white" : "#212529",
                maxWidth: "75%",
                fontSize: "18px",
                lineHeight: "1.6",
                boxShadow: msg.isUser
                  ? "0 2px 8px rgba(121,166,87,0.2)"
                  : "0 2px 8px rgba(0,0,0,0.05)",
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Suggestion Buttons */}
      <div
        style={{
          padding: "12px 0",
          borderTop: "1px solid #eee",
          borderBottom: "1px solid #eee",
          display: "flex",
          gap: "12px",
          marginBottom: "16px",
          alignItems: "center",
        }}
      >
        <span style={{ color: "#666", fontSize: "16px", marginRight: "12px" }}>
          Quick suggestions:
        </span>
        {suggestionOptions.map((option) => (
          <button
            key={option}
            onClick={() => handleSuggestionClick(option)}
            style={{
              padding: "8px 16px",
              borderRadius: "20px",
              backgroundColor: "#f0f4f8",
              color: "#79A657",
              border: "1px solid #79A657",
              cursor: "pointer",
              fontSize: "16px",
              transition: "all 0.2s",
              ":hover": {
                backgroundColor: "#79A657",
                color: "white",
              },
            }}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Input Box */}
      <form
        onSubmit={handleSend}
        style={{
          display: "flex",
          gap: "16px",
          paddingTop: "16px",
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your feeling..."
          style={{
            flex: 1,
            padding: "16px 22px",
            borderRadius: "30px",
            border: "2px solid #ddd",
            fontSize: "18px",
            outline: "none",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "16px 36px",
            borderRadius: "30px",
            backgroundColor: "#79A657",
            color: "white",
            border: "none",
            fontSize: "18px",
            cursor: "pointer",
            transition: "opacity 0.3s",
            ":hover": {
              opacity: 0.9,
            },
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default WellnessChatbox;