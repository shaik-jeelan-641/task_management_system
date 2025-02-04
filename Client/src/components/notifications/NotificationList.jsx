import React, { useContext } from "react";
import NotificationContext from "../../context/NotificatioConrext";

const NotificationList = () => {
  const { notifications, markAllAsRead } = useContext(NotificationContext);

  return (
    <div className="notification-list">
      <h2>Notifications</h2>
      {notifications.length === 0 ? (
        <p>No new notifications</p>
      ) : (
        <ul>
          {notifications.map((notif, index) => (
            <li key={index}>{notif.message}</li>
          ))}
        </ul>
      )}
      <button onClick={markAllAsRead}>Mark All as Read</button>
    </div>
  );
};

export default NotificationList;
