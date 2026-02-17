// Notifications page showing alert cards

import React from "react";
import "./Notifications.css";

function Notifications() {

  // Fake notifications data
  const alerts = [
    { id: 1, message: "New product added successfully", time: "2 min ago" },
    { id: 2, message: "Stock running low on Smart Watch", time: "10 min ago" },
    { id: 3, message: "User profile updated", time: "30 min ago" },
    { id: 4, message: "New order received", time: "1 hour ago" },
  ];

  return (
    <div className="notifications-container">
      <h1 className="notifications-title">Notifications</h1>

      {/* Alert list */}
      <div className="alerts-list">
        {alerts.map((alert) => (
          <div key={alert.id} className="alert-card">

            <p>{alert.message}</p>
            <span>{alert.time}</span>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
