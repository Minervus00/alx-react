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
    if (this.props.listNotifications.length !== nextProps.listNotifications.length || this.props.displayDrawer !== nextProps.displayDrawer) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <>
        <div className={css(styles.menuItem)} onClick={ this.props.handleDisplayDrawer } id="menuItem">
          Your notifications
        </div>
        { this.props.displayDrawer &&
          <div className={css(styles.notifPanel)} id="Notifications">
            <button style={{ position: 'absolute', top: '7px', right: '5px', border: 'none', background: 'none' }}
            aria-label='Close'
            onClick={ this.props.handleHideDrawer }
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

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {console.log('open notif');},
  handleHideDrawer: () => console.log('Close button has been clicked'),
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

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
