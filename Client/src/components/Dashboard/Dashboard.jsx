import { 
  FaBars, FaHome, FaTasks, FaInbox, FaChartLine, FaFolderOpen, 
  FaBullseye, FaUserFriends, FaPlus, FaQuestionCircle, FaStar, 
  FaRegFileAlt, FaList, FaColumns, FaRegCalendarAlt, FaChartBar, 
  FaUsers, FaComments, FaPaperclip, FaCogs, FaUser, FaSignOutAlt, 
  FaUserCog 
} from "react-icons/fa";
import { IoMdAddCircleOutline, IoMdMore } from "react-icons/io";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Dashboard.css";
import { useNavigate, useParams } from "react-router-dom";
import TaskList from "../Tasks/TaskList/TaskList";
import Display from "../Display/Display";
import Calender from "../Calender/Calender";
import TaskBoard from "../TaskBoard/TaskBoard";
import { Avatar } from "@mui/material"; 
import { useProject } from "../../context/projectContext"; 

function Dashboard({ id }) {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [profileMenuVisible, setProfileMenuVisible] = useState(false);
  const [createDropdownVisible, setCreateDropdownVisible] = useState(false);
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('');
  const profileRef = useRef(null);
  const navigate = useNavigate();
  const [taskList, setTaskList] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');

  const { projectName } = useProject();

  useEffect(() => {
    if (!id) return;

    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get(`http://localhost:5000/api/auth/getUser/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.data) {
          setUsername(response.data.username || "User");
          setAvatar(response.data.avatar || "");
        }
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, [id]);

  const handleDeleteTask = (index) => {
    const newTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(newTaskList);
  };

  const handleEditTask = (index) => {
    const taskToEdit = taskList[index];
    alert(`Edit task: ${taskToEdit.title}`);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <FaBars className="icon" onClick={() => setSidebarVisible(!sidebarVisible)} />
          <button className="create-btn" onClick={() => setCreateDropdownVisible(!createDropdownVisible)}>
            <IoMdAddCircleOutline className="icon" />
            <span>Create</span>
          </button>
          {createDropdownVisible && (
            <div className="create-dropdown">
              <ul>
                <li onClick={() => navigate('/form')}>
                  <FaTasks className="dropdown-icon" /> Task
                </li>
                <li onClick={() => navigate("/projectForm")}>
                  <FaFolderOpen className="dropdown-icon" /> Project
                </li>
                <li onClick={() => alert("Create Goal")}>
                  <FaBullseye className="dropdown-icon" /> Goal
                </li>
              </ul>
            </div>
          )}
        </div>
        <input type="text" placeholder="Search" className="search-input" />
        <div className="nav-right">
          <span className="trial-text">30 days left in trial</span>
          <button className="billing-btn">Add billing info</button>
          <FaQuestionCircle className="icon" />
          <div className="profile-icon" onClick={() => setProfileMenuVisible(!profileMenuVisible)}>
            {avatar ? (
              <Avatar src={avatar} alt="Avatar" className="avatar-img" />
            ) : (
              <Avatar>{username.charAt(0)}</Avatar>
            )}
          </div>
        </div>
      </nav>

      {profileMenuVisible && (
        <div className="profile-menu" ref={profileRef}>
          <span className="trial-info">28 days left in trial.</span>
          <div className="profile-header">
            <div className="profile-avatar">
              {avatar ? (
                <Avatar src={avatar} alt="Avatar" className="avatar-img" />
              ) : (
                <Avatar>{username.charAt(1)}</Avatar>
              )}
            </div>
            <div>
              <h3 style={{ marginBottom: "2px" }}>My workspace <span className="status-dot">•</span></h3>
              <p>{username}</p>
            </div>
          </div>
          <ul>
            <li><FaCogs className="myprofile-icon" /> Admin console</li>
            <li><FaPlus className="myprofile-icon" /> New workspace</li>
            <li><FaUserFriends className="myprofile-icon" /> Invite to Asana</li>
            <li><FaUser className="myprofile-icon" /> Profile</li>
            <li><FaUserCog className="myprofile-icon" /> Settings</li>
            <li><FaPlus className="myprofile-icon" /> Add another account</li>
            <div className="under-line"></div>
            <li onClick={Logout}><FaSignOutAlt className="myprofile-icon" /> Log out</li>
          </ul>
        </div>
      )}

      <div className="project-plan">
        <div className="header">
          <h1><FaRegFileAlt /> 
           {projectName ? ` ${projectName}` : "Dashboard"}
          </h1>
          <FaStar className="icon-btn" />
          <button className="status-btn">Set status</button>
        </div>
        <div className="nav">
          {['overview', 'list', 'board', 'timeline', 'dashboard', 'calendar', 'workflow', 'messages', 'files'].map((tab) => (
            <span 
              key={tab}
              onClick={() => handleTabClick(tab)} 
              className={activeTab === tab ? "active" : ""}
            >
              {tab === 'overview' && <FaRegFileAlt />}
              {tab === 'list' && <FaList />}
              {tab === 'board' && <FaColumns />}
              {tab === 'timeline' && <FaRegCalendarAlt />}
              {tab === 'dashboard' && <FaChartBar />}
              {tab === 'calendar' && <FaRegCalendarAlt />}
              {tab === 'workflow' && <FaUsers />}
              {tab === 'messages' && <FaComments />}
              {tab === 'files' && <FaPaperclip />}
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </span>
          ))}
        </div>
        <div className="actions">
          <div className="avatar">
            {avatar ? (
              <Avatar src={avatar} alt="Avatar" className="avatar-img" />
            ) : (
              <Avatar>{username.charAt(1)}</Avatar>
            )}
          </div>
          <button className="share-btn">Share</button>
          <button className="customize-btn">Customize</button>
          <IoMdMore className="icon-btn" />
        </div>
      </div>

      <div className="tab-content">
        {activeTab === "overview" && <Overview />}
        {activeTab === "list" && <TaskList />}
        {activeTab === "board" && <TaskBoard />}
        {activeTab === "timeline" && <Timeline />}
        {activeTab === "dashboard" && <Display />}
        {activeTab === "calendar" && <Calender />}
        {activeTab === "workflow" && <Workflow />}
        {activeTab === "messages" && <Messages />}
        {activeTab === "files" && <Files />}
      </div>

      {sidebarVisible && (
        <div className="sidebar">
          <ul>
            <li><FaHome className="icon" /> Home</li>
            <li><FaTasks className="icon" /> My tasks</li>
            <li><FaInbox className="icon" /> Inbox</li>
            <li style={{ gap: "80px" }}>Insights <FaPlus className="icon" /></li>
            <li><FaChartLine className="icon" /> Reporting</li>
            <li><FaFolderOpen className="icon" /> Portfolios</li>
            <li><FaBullseye className="icon" /> Goals</li>
            <li style={{ gap: "80px" }}>Projects <FaPlus className="icon" /></li>
            <li className="highlighted"><FaUsers className="icon" /> Cross-functional project</li>
            <li>Team</li>
            <li><FaUserFriends className="icon" /> My workspace</li>
          </ul>
          <button className="invite-btn"><FaUserFriends className="icon" /> Invite teammates</button>
        </div>
      )}
    </>
  );
}

function Overview() {
  return <div><h2>Overview Section</h2></div>;
}

function TaskBoardView() {
  return <div><h2>Task Board</h2></div>;
}

function Timeline() {
  return <div><h2>Timeline View</h2></div>;
}

function DashboardView() {
  return <div><h2>Dashboard View</h2></div>;
}

function Calendar() {
  return <div><h2>Calendar View</h2></div>;
}

function Workflow() {
  return <div><h2>Workflow View</h2></div>;
}

function Messages() {
  return <div><h2>Messages View</h2></div>;
}

function Files() {
  return <div><h2>Files View</h2></div>;
}

export default Dashboard;
