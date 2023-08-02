import React from "react";

function NotificationItem(props) {
  if (props.type && props.value) {
    return (<li data-notification-type={ props.type }>{props.value}</li>);
  } else if (props.html) {
    return (<li data-notification-type="urgent" dangerouslySetInnerHTML={{__html: props.html}}/>);
  }
}

export default NotificationItem;
