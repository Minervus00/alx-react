import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, css} from "aphrodite";

class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.html) {
      return (<li 
        onClick={() => {this.props.markAsRead(this.props.id)}}
        data-notification-type={this.props.type}
        dangerouslySetInnerHTML={this.props.html} 
        className={this.props.type === "urgent" ? css(styles.urgentColor) : css(styles.defaultColor)}
        />
      );
    } else if (this.props.type && this.props.value) {
      return (<li
        onClick={() => {this.props.markAsRead(this.props.id)}}
        data-notification-type={this.props.type}
        className={this.props.type === "urgent" ? css(styles.urgentColor) : css(styles.defaultColor)}
        >
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

const styles = StyleSheet.create({
  urgentColor: {
    color: 'red'
  },
  defaultColor: {
    color: 'blue'
  }
});

export default React.memo(NotificationItem);
