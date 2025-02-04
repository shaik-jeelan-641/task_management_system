import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./taskList.css"

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null); // State for editing a task
  const [showModal, setShowModal] = useState(false); // Modal visibility state

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/task/getTasks');
      setTasks(response.data);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/api/task/deleteTask/${taskId}`);
      setTasks(tasks.filter((task) => task._id !== taskId)); 
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  const handleEdit = (task) => {
    setEditTask(task); 
    setShowModal(true); 
  };

  const handleUpdate = async (updatedTask) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/task/updateTask/${updatedTask._id}`, updatedTask);
      setTasks(tasks.map((task) => (task._id === updatedTask._id ? response.data : task))); // Update task in the list
      setShowModal(false); // Close the modal after update
      setEditTask(null); // Reset the edit task state
    } catch (err) {
      console.error('Error updating task:', err);
    }
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal without making changes
    setEditTask(null); // Reset the edit task state
  };

  return (
    <div className="task-list-container">
      <h2>Task List</h2>
      {tasks.length > 0 ? (
        <table className="task-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Due Date</th>
              <th>Assigned To</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task._id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.status}</td>
                <td>{task.priority}</td>
                <td>{new Date(task.dueDate).toLocaleDateString()}</td>
                <td>{task.assignedTo}</td>
                <td>
                  <button onClick={() => handleEdit(task)} className="edit-btn">Edit</button>
                  <button onClick={() => handleDelete(task._id)} className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No tasks available.</p>
      )}

      {showModal && editTask && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Task</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdate(editTask);
              }}
            >
              <input
                type="text"
                value={editTask.title}
                onChange={(e) => setEditTask({ ...editTask, title: e.target.value })}
                placeholder="Title"
              />
              <input
                type="text"
                value={editTask.description}
                onChange={(e) => setEditTask({ ...editTask, description: e.target.value })}
                placeholder="Description"
              />
              <select
                value={editTask.status}
                onChange={(e) => setEditTask({ ...editTask, status: e.target.value })}
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
              <select
                value={editTask.priority}
                onChange={(e) => setEditTask({ ...editTask, priority: e.target.value })}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
              <input
                type="date"
                value={editTask.dueDate}
                onChange={(e) => setEditTask({ ...editTask, dueDate: e.target.value })}
              />
              <input
                type="text"
                value={editTask.assignedTo}
                onChange={(e) => setEditTask({ ...editTask, assignedTo: e.target.value })}
                placeholder="Assigned To"
              />
              <button type="submit">Update Task</button>
            </form>
            <button onClick={closeModal} id="close-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;
