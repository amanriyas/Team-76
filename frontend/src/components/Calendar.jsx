import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const MyCalendar = ({ selectedDate, setSelectedDate }) => {
  const [events, setEvents] = useState({
    "2025-08-17": ["Study Session", "Team Meeting"],
    "2025-08-20": ["Project Deadline"],
    "2025-03-11": ["Review Notes", "Practice Problems"],
  });

  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState(selectedDate);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setEventDate(date);
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    if (eventName) {
      const dateKey = eventDate.toISOString().split("T")[0];
      setEvents((prev) => ({
        ...prev,
        [dateKey]: [...(prev[dateKey] || []), eventName],
      }));
      setEventName("");
    }
  };

  const handleEventDelete = (eventToDelete) => {
    const dateKey = selectedDate.toISOString().split("T")[0];
    setEvents((prev) => {
      const updatedEvents = prev[dateKey]?.filter(
        (event) => event !== eventToDelete
      );
      return updatedEvents.length > 0
        ? { ...prev, [dateKey]: updatedEvents }
        : Object.fromEntries(Object.entries(prev).filter(([key]) => key !== dateKey));
    });
  };

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const dateKey = date.toISOString().split("T")[0];
      return events[dateKey]?.length > 0 ? (
        <div className="flex justify-center">
          <div className="w-2 h-2 bg-green-600 rounded-full mt-1"></div>
        </div>
      ) : null;
    }
  };

  const dateKey = selectedDate.toISOString().split("T")[0];
  const currentEvents = events[dateKey] || [];

  return (
    <div className="flex justify-center items-center min-h-screen mt-16 px-6 mx-auto w-5xl">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-7xl p-8 border border-green-300">
        <h3 className="text-green-700 font-bold text-2xl mb-6 text-center">
          📅 Event Calendar
        </h3>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Calendar Section */}
          <div className="flex-1">
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              tileContent={tileContent}
              className="w-full shadow-md rounded-md border border-green-400"
            />
          </div>

          {/* Events Section */}
          <div className="flex-1">
            <div className="bg-green-50 p-5 rounded-md border border-green-300">
              <h4 className="text-green-700 font-semibold text-lg">
                Events on {selectedDate.toDateString()}:
              </h4>
              {currentEvents.length === 0 ? (
                <p className="text-gray-600">No events scheduled for this day</p>
              ) : (
                <ul className="mt-2 text-green-800">
                  {currentEvents.map((event, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center bg-white px-3 py-2 my-1 rounded-md shadow-sm border border-green-200"
                    >
                      {event}
                      <button
                        onClick={() => handleEventDelete(event)}
                        className=" text-white px-2 py-1 rounded text-sm hover:bg-red-600 transition-all"
                      >
                        ❌
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Event Form */}
            <div className="mt-6">
              <h4 className="text-green-700 font-semibold text-lg">
                Create an Event
              </h4>
              <form onSubmit={handleEventSubmit} className="mt-2">
                <input
                  type="text"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  placeholder="Event Name"
                  required
                  className="p-2 border border-green-400 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="submit"
                  className="mt-3 p-2 bg-green-600 text-white rounded-md w-full hover:bg-green-700 transition-all"
                >
                  Add Event
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
