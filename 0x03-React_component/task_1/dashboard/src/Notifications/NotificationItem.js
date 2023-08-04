import React from "react";
import PropTypes from "prop-types";

function NotificationItem(props) {
  if (props.html) {
    return (<li data-notification-type="urgent" dangerouslySetInnerHTML={props.html}/>);
  } else if (props.type && props.value) {
    return (<li data-notification-type={props.type}>{props.value}</li>);
  }
}

NotificationItem.defaultProps = {
  type: "default"
};

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string
};

export default NotificationItem;
