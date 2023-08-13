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
        className={this.props.type === "urgent" ? css(styles.urgentColor, styles.small) : css(styles.defaultColor, styles.small)}
        />
      );
    } else if (this.props.type && this.props.value) {
      return (<li
        onClick={() => {this.props.markAsRead(this.props.id)}}
        data-notification-type={this.props.type}
        className={this.props.type === "urgent" ? css(styles.urgentColor, styles.small) : css(styles.defaultColor, styles.small)}
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
  },
  small: {
    '@media (max-width: 900px)': {
      width: '100%',
      fontSize: '20px',
      borderBottom: '1px black solid',
      listStyle: 'none',
      padding: '10px 8px'
    },
  }
});

export default React.memo(NotificationItem);
