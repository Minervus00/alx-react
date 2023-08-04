import React from "react";
import PropTypes from "prop-types";
import close from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import "./Notifications.css";

function Notifications(props) {
  return (
    <>
      <div className="menuItem">
        Your notifications
      </div>
      { props.displayDrawer &&
        <div className="Notifications">
          <button style={{ position: 'absolute', top: '7px', right: '5px', border: 'none', background: 'none' }}
          aria-label='Close'
          onClick={ () => console.log('Close button has been clicked') } >
            <img src={ close } alt='close-icon' />
          </button>
          {props.listNotifications.length === 0 && <p>No new notification for now</p>}
          {props.listNotifications.length > 0 &&
            <>
              <p>Here is the list of notifications</p>
              <ul>
                  {props.listNotifications.map((notif) => (
                    <NotificationItem key={notif.id} type={notif.type} value={notif.value} html={notif.html} />
                  ))}
              </ul>
            </>
          }
        </div>
      }
    </>
  );
}

Notifications.defaultProps = {displayDrawer: false, listNotifications: []};
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

export default Notifications;
