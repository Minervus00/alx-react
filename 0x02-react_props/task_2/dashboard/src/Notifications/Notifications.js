import React from "react";
import close from "../assets/close-icon.png";
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
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li
          dangerouslySetInnerHTML={{__html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
}

export default Notifications;
