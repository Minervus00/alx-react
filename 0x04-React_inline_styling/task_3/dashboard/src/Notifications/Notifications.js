import React from "react";
import PropTypes from "prop-types";
import close from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = (id) => {
      console.log(`Notification ${id} has been marked as read`);
    }
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.listNotifications.length < nextProps.listNotifications.length) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <>
        <div className={css(styles.menuItem)} id="menuItem">
          Your notifications
        </div>
        { this.props.displayDrawer &&
          <div className={css(styles.notifPanel)} id="Notifications">
            <button style={{ position: 'absolute', top: '7px', right: '5px', border: 'none', background: 'none' }}
            aria-label='Close'
            onClick={ () => console.log('Close button has been clicked') }
            >
              <img className={css(styles.buttonImg)} src={ close } alt='close-icon' />
            </button>
            {this.props.listNotifications.length === 0 && <p>No new notification for now</p>}
            {this.props.listNotifications.length > 0 &&
              <>
                <p>Here is the list of notifications</p>
                <ul className={css(styles.ulStyle)}>
                  {this.props.listNotifications.map((notif) => (
                    <NotificationItem 
                      key={notif.id}
                      id={notif.id}
                      type={notif.type}
                      value={notif.value}
                      html={notif.html}
                      markAsRead={this.markAsRead}
                    />
                  ))}
                </ul>
              </>
            }
          </div>
        }
      </>
    );
  }
}

Notifications.defaultProps = {displayDrawer: false, listNotifications: []};
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

const styles = StyleSheet.create({
  menuItem: {
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
  buttonImg: {
    transform: 'scale(0.5)'
  },
  notifPanel: {
    position: 'absolute',
    top: '35px',
    padding: '5px',
    right: '10px',
    border: 'dashed 2px red',
    fontSize: '18px',
    '@media (max-width: 900px)': {
      top: '0px',
      left: '0px',
      backgroundColor: 'white',
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
