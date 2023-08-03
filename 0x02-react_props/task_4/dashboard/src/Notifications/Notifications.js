import React from "react";
import PropTypes from "prop-types";
import close from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils.js";
import "./Notifications.css";

function Notifications(props) {
  return (
    <>
      <div className="menuItem">
        Your notifications
      </div>
      { props.displayDrawer &&
        <div className="Notifications">
          <button style={{ position: 'absolute', top: '10px', right: '5px', border: 'none', background: 'none' }}
          aria-label='Close'
          onClick={ () => console.log('Close button has been clicked') } >
            <img src={ close } alt='close-icon' />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
              <NotificationItem type='default' value='New course available' />
              <NotificationItem type='urgent' value='New resume available' />
              <NotificationItem html={{__html: getLatestNotification()}} />
          </ul>
        </div>
      }
    </>
  );
}

Notifications.defaultProps = {displayDrawer: false};
Notifications.propTypes = {displayDrawer: PropTypes.bool};

export default Notifications;
