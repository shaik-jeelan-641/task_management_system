import React from "react";
import { FaPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Calender.css"; // Dark Mode CSS

const Calendar = () => {
  const events = {
    1: ["9:00 AM Meeting"],
    2: ["Design Review"],
    4: ["Project Deadline"],
    8: ["Team Sync"],
    10: ["Sprint Planning", "Code Review"]
  };

  return (
    <div className="calendar-container">
      <div className="header">
        <h1>October 2023</h1>
        <button className="add-event-btn">
          <FaPlus /> Add Event
        </button>
      </div>

      <div className="calendar-nav">
        <div>
          <button><FaChevronLeft /></button>
          <button><FaChevronRight /></button>
        </div>
        <div className="view-options">
          <button className="active">Month</button>
          <button>Week</button>
          <button>Day</button>
        </div>
      </div>

      <div className="calendar">
        {[...Array(14)].map((_, index) => {
          const date = index === 0 ? 30 : index;
          return (
            <div className="day" key={index}>
              <div className="date">{date}</div>
              {events[date] && events[date].map((event, i) => (
                <div className="event" key={i}>{event}</div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
