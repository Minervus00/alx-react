import React from 'react';
import PropTypes from 'prop-types';

const headerStyle = {
  background: "#deb5b545"
};

const rowStyle = {
  background: "#f5f5f5ab"
};

function CourseListRow(props) {
  if (props.isHeader) {
    if (!props.textSecondCell) {
      return <tr style={headerStyle}><th colSpan="2">{props.textFirstCell}</th></tr>
    } else {
      return <tr style={headerStyle}><th>{props.textFirstCell}</th><th>{props.textSecondCell}</th></tr>
    }
  } else {
    return <tr style={rowStyle}><td>{props.textFirstCell}</td><td>{props.textSecondCell}</td></tr>
  }
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default CourseListRow;
