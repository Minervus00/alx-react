import React from "react";
import PropTypes from "prop-types";
import close from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import { StyleSheet, css } from "aphrodite";

export default function Notifications(props) {

  return (
    <>
      <div className={css(styles.menuItem)} onClick={ props.handleDisplayDrawer } id="menuItem">
        Your notifications
      </div>
      { props.displayDrawer &&
        <div className={css(styles.notifPanel)} id="Notifications">
          <button style={{ position: 'absolute', top: '7px', right: '5px', border: 'none', background: 'none' }}
          aria-label='Close'
          onClick={ props.handleHideDrawer }
          >
            <img className={css(styles.buttonImg)} src={ close } alt='close-icon' />
          </button>
          {props.listNotifications.length === 0 && <p>No new notification for now</p>}
          {props.listNotifications.length > 0 &&
            <>
              <p style={{marginBottom: '5px'}}>Here is the list of notifications</p>
              <p style={{marginTop: '0px'}}>
                <button
                  style={{margin: '5px', width: '30px', height:'20px', color: 'red'}}
                  onClick={() => props.setNotificationFilter('URGENT')}
                >!!</button>
                <button
                  style={{margin: '5px', width: '30px', height:'25px'}}
                  onClick={() => props.setNotificationFilter('DEFAULT')}
                >💠</button>
              </p>
              <ul className={css(styles.ulStyle)}>
                {props.listNotifications.map((notif) => 
                  <NotificationItem 
                    key={notif.guid}
                    id={notif.guid}
                    type={notif.type}
                    value={notif.value}
                    html={notif.html}
                    markAsRead={props.markNotificationAsRead}
                  />
                )}
              </ul>
            </>
          }
        </div>
      }
    </>
  );
}

const bounceAnim = {
  '0%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(5px)',
  },
};

const opacityAnim = {
  'from': {
    opacity: 0.5,
  },
  'to': {
    opacity: 1,
  }
};

const styles = StyleSheet.create({
  menuItem: {
    float: 'right',
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#fff8f8',
    ':hover': {
      cursor: 'pointer',
      animationName: [opacityAnim, bounceAnim],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3'
    }
  },
  buttonImg: {
    transform: 'scale(0.5)'
  },
  notifPanel: {
    backgroundColor: 'white',
    padding: '5px',
    position: 'absolute',
    top: '10px',
    right: '10px',
    border: 'dashed 2px red',
    fontSize: '18px',
    '@media (max-width: 900px)': {
      top: '0px',
      left: '0px',
      height: '100%',
      width: '100%',
      fontSize: '20px',
      padding: '0px',
      border: 'none'
    },
  },
  ulStyle: {
    '@media (max-width: 900px)': {
      paddingLeft: '0px',
    }
  },
});

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {console.log('open notif');},
  handleHideDrawer: () => console.log('Close button has been clicked'),
  markNotificationAsRead: (id) => console.log(`Notification ${id} has been marked as read`),
  setNotificationFilter: () => {},
  fetchNotifications: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.array,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  setNotificationFilter: PropTypes.func,
  fetchNotifications: PropTypes.func,
};
