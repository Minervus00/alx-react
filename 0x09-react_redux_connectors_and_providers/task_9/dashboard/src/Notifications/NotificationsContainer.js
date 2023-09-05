import React from "react";
import PropTypes from "prop-types";
import { fetchNotifications, markAsAread, setNotificationFilter } from "../actions/notificationActionCreators";
import { connect } from 'react-redux';
import { getUnreadNotificationsByType } from "../selectors/notificationSelector";
import Notifications from "./Notifications";

export class NotificationsContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    return (<Notifications {...this.props} />);
  }
}

NotificationsContainer.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {console.log('open notif');},
  handleHideDrawer: () => console.log('Close button has been clicked'),
  markNotificationAsRead: (id) => console.log(`Notification ${id} has been marked as read`),
  setNotificationFilter: () => {},
  fetchNotifications: () => {},
};

NotificationsContainer.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.array,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  setNotificationFilter: PropTypes.func,
  fetchNotifications: PropTypes.func,
};


export const mapStateToProps = (state) => {
  const unreadNotifs = getUnreadNotificationsByType(state);
  return {
    listNotifications: unreadNotifs,
  };
};

const mapDispatchToProps = {
  fetchNotifications,
  markNotificationAsRead: markAsAread,
  setNotificationFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);
