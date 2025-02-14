import React, { useState } from 'react';
import axios from 'axios';
import "./taskForm.css"
import { useNavigate } from 'react-router-dom';

const TaskForm = ({ setTaskList }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: 'Pending',
    priority: 'Low',
    dueDate: '',
    assignedTo: '',
  });

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!task.title || !task.description || !task.status || !task.priority || !task.dueDate || !task.assignedTo) {
      alert('All fields must be filled');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/task/addTask', task);
      if (response.status === 201) {
        if (setTaskList) {
          setTaskList((prevList) => [...prevList, response.data]);
        }
        setTask({
          title: '',
          description: '',
          status: 'Pending',
          priority: 'Low',
          dueDate: '',
          assignedTo: '',
        });
        navigate('/dashboard')
      }
    } catch (err) {
      console.error("Error in adding the data", err.response ? err.response.data : err.message);
    }
  };

  return (
   <div className="task-form-container">
     <form onSubmit={handleSubmit}>
      <h2>Create New Task</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
      </div>
      <div>
        <label>Status:</label>
        <select
          name="status"
          value={task.status}
          onChange={(e) => setTask({ ...task, status: e.target.value })}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div>
        <label>Priority:</label>
        <select
          name="priority"
          value={task.priority}
          onChange={(e) => setTask({ ...task, priority: e.target.value })}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div>
        <label>Due Date:</label>
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
        />
      </div>
      <div>
        <label>Assigned To:</label>
        <input
          type="text"
          name="assignedTo"
          value={task.assignedTo}
          onChange={(e) => setTask({ ...task, assignedTo: e.target.value })}
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
   </div>
  );
};

export default TaskForm;
