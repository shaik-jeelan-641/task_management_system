import React from "react";
import { FaClipboard, FaClock, FaCheck, FaExclamationCircle } from "react-icons/fa";
import "./taskSummary.css";

const TaskSummary = () => {
 
  const tasks = [
    {
      title: "Total tasks",
      count: 248,
      info: "↑ 12% from last month",
      icon: <FaClipboard className="icon" />,
    },
    {
      title: "In progress",
      count: 45,
      info: "Active tasks",
      icon: <FaClock className="icon" id="one" />,
    },
    {
      title: "Completed",
      count: 121,
      info: "↑ 8% completion rate",
      icon: <FaCheck className="icon" id="two" />,
    },
    {
      title: "Overdue",
      count: 82,
      info: "Needs attention",
      icon: <FaExclamationCircle className="icon" id="three" />,
    },
  ];

  return (
    <div className="task-flow">
      <h2>Task Flow</h2>
      <div className="task-progress">
        {tasks.map((task, index) => (
          <div className="main-div" key={index}>
            {task.title}
            <div className="text">
              <h3>{task.count}</h3>
              <p>{task.info}</p>
            </div>
            <div>{task.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskSummary;
