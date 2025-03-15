import { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => setTime((prev) => prev - 1), 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100 text-green-900">
      <div className="w-96 p-6 rounded-2xl shadow-lg bg-white">
        {/* Header with new color and larger font */}
        <h1 className="text-4xl font-extrabold text-[#79A657]">Pomodoro Timer</h1>

        {/* Timer text with custom green color and bolder color for the countdown */}
        <p className="text-6xl my-4 font-mono text-[#F9A657CC]">
          {`${Math.floor(time / 60)}`.padStart(2, "0")}:
          {`${time % 60}`.padStart(2, "0")}
        </p>

        {/* Buttons for controlling the timer */}
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl"
            title="Start/Pause Timer"
          >
            {isRunning ? "Pause" : "Start"}
          </button>
          <button
            onClick={() => setTime(25 * 60)}
            className="bg-gray-300 hover:bg-gray-400 text-green-900 px-4 py-2 rounded-xl"
            title="Reset Timer"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
