import React from "react";
import close from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils.js";
import "./Notifications.css";

function Notifications() {
  return (
    <div className="Notifications">
      <button style={{ position: 'absolute', top: '20px', right: '10px', border: 'none', background: 'none' }}
      aria-label='Close'
      onClick={ () => console.log('Close button has been clicked') } >
        <img src={ close } alt='close-icon' />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
          <NotificationItem type='default' value='New course available' />
          <NotificationItem type='urgent' value='New resume available' />
          <NotificationItem html={getLatestNotification()} />
      </ul>
    </div>
  );
}

export default Notifications;
