import React from "react";
import PropTypes from "prop-types";

class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.html) {
      return (<li 
        onClick={() => {this.props.markAsRead(this.props.id)}}
        data-notification-type="urgent"
        dangerouslySetInnerHTML={this.props.html} 
        />
      );
    } else if (this.props.type && this.props.value) {
      return (<li
        onClick={() => {this.props.markAsRead(this.props.id)}}
        data-notification-type={this.props.type}>
          {this.props.value}
        </li>
      );
    }
  }
}

NotificationItem.defaultProps = {
  id: 0,
  markAsRead: () => {},
  type: "default"
};

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number
};

export default React.memo(NotificationItem);
