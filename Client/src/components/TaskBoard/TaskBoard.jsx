import React from "react";
import { FaPlus } from "react-icons/fa";
import "./taskBoard.css"; 

const TaskBoard = () => {
  const tasks = {
    todo: [
      { title: "Design new dashboard layout", label: "Design", details: "Create wireframes and mockups", due: "Due in 3 days" },
      { title: "API Integration", label: "Development", details: "Implement REST API for authentication", due: "Due in 5 days" }
    ],
    inProgress: [
      { title: "User Testing", label: "Testing", details: "Conduct user testing sessions", due: "Due tomorrow" }
    ],
    completed: [
      { title: "Setup Project Structure", label: "Setup", details: "Initialize repository", due: "Completed" }
    ]
  };

  return (
    <div className="task-board">
      <div className="header1">
        <h1>Task Board</h1>
        <button className="add-task-btn">
          <FaPlus /> Add Task
        </button>
      </div>

      <div className="board">
        {Object.entries(tasks).map(([category, taskList]) => (
          <div className="column" key={category}>
            <h2>{category.replace(/([A-Z])/g, " $1").trim()} <span>{taskList.length}</span></h2>
            {taskList.map((task, index) => (
              <div className="task-card" key={index}>
                <h3>{task.title} <span className={`label ${task.label.toLowerCase()}`}>{task.label}</span></h3>
                <p>{task.details}</p>
                <p className="due-date">{task.due}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
