import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Home from './components/Landing/home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import NotificationList from './components/notifications/NotificationList';
import TaskForm from './components/Tasks/Taskform/TaskForm';


function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/form" element={<TaskForm setTaskList={setTaskList} />} />
        <Route path="/notify" element={<NotificationList />} />
      </Routes>
    </div>
  );
}

export default App;
