import React, { useState } from "react";

// 9 total flashcards: 3 easy, 3 medium, 3 hard
const allFlashcards = [
  // Easy
  {
    id: 0,
    moduleName: "LI Artificial Intelligence",
    topic: "uncertainty",
    difficulty: "easy",
    question: "Easy Q1",
    answer: "Example Answer 1",
  },
  {
    id: 1,
    moduleName: "LI Artificial Intelligence",
    topic: "uncertainty",
    difficulty: "easy",
    question: "Easy Q2",
    answer: "Example Answer 2",
  },
  {
    id: 2,
    moduleName: "LI Artificial Intelligence",
    topic: "uncertainty",
    difficulty: "easy",
    question: "Easy Q3",
    answer: "Example Answer 3",
  },

  // Medium
  {
    id: 3,
    moduleName: "LI Artificial Intelligence",
    topic: "uncertainty",
    difficulty: "medium",
    question: "Medium Q1",
    answer: "Example Answer 1",
  },
  {
    id: 4,
    moduleName: "LI Artificial Intelligence",
    topic: "uncertainty",
    difficulty: "medium",
    question: "Medium Q2",
    answer: "Example Answer 2",
  },
  {
    id: 5,
    moduleName: "LI Artificial Intelligence",
    topic: "uncertainty",
    difficulty: "medium",
    question: "Medium Q3",
    answer: "Example Answer 3",
  },

  // Hard
  {
    id: 6,
    moduleName: "LI Artificial Intelligence",
    topic: "uncertainty",
    difficulty: "hard",
    question: "Hard Q1",
    answer: "Example Answer 1",
  },
  {
    id: 7,
    moduleName: "LI Artificial Intelligence",
    topic: "uncertainty",
    difficulty: "hard",
    question: "Hard Q2",
    answer: "Example Answer 2",
  },
  {
    id: 8,
    moduleName: "LI Artificial Intelligence",
    topic: "uncertainty",
    difficulty: "hard",
    question: "Hard Q3",
    answer: "Example Answer 3",
  },
];

const difficulties = ["easy", "medium", "hard"];

export default function Flashcards() {
  const [onMainPage, setOnMainPage] = useState(true);
  const [selectedDifficulty, setSelectedDifficulty] = useState("easy");
  const [showDropdown, setShowDropdown] = useState(false);
  const filteredFlashcards = allFlashcards.filter(
    (card) => card.difficulty === selectedDifficulty
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  let progress = 0;
  if (filteredFlashcards.length > 1) {
    progress =
      currentIndex === 0
        ? 0
        : (currentIndex / (filteredFlashcards.length - 1)) * 100;
  }

  const handlePrevNext = (direction) => {
    setShowAnswer(false);
    if (direction === "prev") {
      setCurrentIndex((prev) =>
        prev === 0 ? filteredFlashcards.length - 1 : prev - 1
      );
    } else {
      setCurrentIndex((prev) =>
        prev === filteredFlashcards.length - 1 ? 0 : prev + 1
      );
    }
  };

  if (filteredFlashcards.length === 0) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center p-4 mt-24 ml-52">
        <p className="mb-4 text-xl">No flashcards found for difficulty "{selectedDifficulty}"</p>
        <button
          onClick={() => setOnMainPage(true)}
          className="bg-[#9ec67f] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
        >
          Go Back
        </button>
      </div>
    );
  }

  const currentCard = filteredFlashcards[currentIndex];

  /****************************************************
   * PAGE 1: MAIN SUBJECT PAGE
   ****************************************************/
  if (onMainPage) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center p-8 mt-24 ml-52">
        <div className="relative max-w-6xl w-full bg-[#79A657]/40 rounded-2xl p-8 flex flex-col justify-between max-h-[80vh] overflow-auto">
          <button
            onClick={() => alert("Subject selection not implemented.")}
            className="absolute top-6 left-6 bg-[#79A657] text-white px-4 py-2 rounded-full hover:bg-[#79A657]/80 hover:scale-105 transition-all"
          >
            Choose Subject
          </button>

          <button
            onClick={() => alert("Create new flashcard not implemented.")}
            className="absolute top-6 right-6 bg-[#79A657] text-white px-4 py-2 rounded-full hover:bg-[#79A657]/80 hover:scale-105 transition-all"
          >
            + New Flashcard
          </button>

          <div className="absolute top-32 right-6">
            <div
              className="bg-[#79A657] text-white px-4 py-3 rounded-full hover:scale-105 transition-transform cursor-pointer"
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              Difficulty: {selectedDifficulty}
            </div>
            {showDropdown && (
              <div className="mt-2 bg-white rounded shadow-lg">
                {difficulties.map((diff) => (
                  <div
                    key={diff}
                    onClick={() => {
                      setSelectedDifficulty(diff);
                      setShowDropdown(false);
                      setCurrentIndex(0);
                      setShowAnswer(false);
                    }}
                    className={`px-4 py-2 cursor-pointer hover:bg-[#79A657]/20 ${selectedDifficulty === diff ? "bg-[#79A657]/10" : ""}`}
                  >
                    {diff}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center justify-center h-72">
            <h2 className="text-4xl font-bold text-center">{currentCard.moduleName}</h2>
          </div>

          <button
            onClick={() => {
              setOnMainPage(false);
              setCurrentIndex(0);
              setShowAnswer(false);
            }}
            className="mt-6 block mx-auto bg-[#79A657] text-white px-8 py-3 rounded-full hover:bg-[#79A657]/80 hover:scale-105 transition-all"
          >
            Start Studying
          </button>
        </div>
      </div>
    );
  }

  /****************************************************
   * PAGE 2: STUDY PAGE (NO FLIP, JUST TOGGLE Q/A)
   ****************************************************/
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-between p-8 mt-24 ml-52">
      {/* Navigation buttons in a single div with top padding */}
      <div className="w-full max-w-6xl flex justify-between items-center pt-4 mb-8">
        <button
          onClick={() => {
            setOnMainPage(true);
            setCurrentIndex(0);
            setShowAnswer(false);
          }}
          className="bg-[#79A657] text-white px-4 py-2 rounded-full hover:bg-[#79A657]/80 hover:scale-105 transition-all"
        >
          &larr; Back to Main
        </button>
        
        <div className="flex gap-6">
          <button
            onClick={() => handlePrevNext("prev")}
            className="px-6 py-3 rounded-full bg-[#79A657] text-white font-semibold transition-transform duration-300 hover:scale-110"
          >
            &lt; Prev
          </button>
          <button
            onClick={() => handlePrevNext("next")}
            className="px-6 py-3 rounded-full bg-[#79A657] text-white font-semibold transition-transform duration-300 hover:scale-110"
          >
            Next &gt;
          </button>
        </div>
      </div>

      <div className="w-full max-w-6xl mb-8">
        <div className="bg-gray-300 h-3 rounded">
          <div
            className="bg-[#79A657] h-3 rounded transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="max-w-6xl w-full bg-[#79A657]/20 rounded-3xl p-8 flex flex-col justify-between max-h-[60vh] overflow-auto">
        <div className="text-xl font-bold text-center mb-4">{currentCard.topic}</div>

        <div className="flex items-center justify-center text-center text-xl h-48">
          {showAnswer ? currentCard.answer : currentCard.question}
        </div>

        <hr className="border-black mt-4 mb-4" />
        <div className="flex justify-between items-center">
          <div className="font-medium capitalize">{currentCard.difficulty}</div>
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="bg-transparent text-black px-6 py-2 rounded-xl transition-transform duration-200 hover:scale-105 hover:bg-black/10"
          >
            {showAnswer ? "Hide Answer" : "Reveal Answer"}
          </button>
        </div>
      </div>
    </div>
  );
}