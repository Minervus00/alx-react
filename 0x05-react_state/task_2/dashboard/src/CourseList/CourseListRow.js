import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from "aphrodite";

function CourseListRow(props) {
  if (props.isHeader) {
    if (!props.textSecondCell) {
      return <tr className={css(styles.headerRow)}><th className={css(styles.thStyle)} colSpan="2">{props.textFirstCell}</th></tr>
    } else {
      return <tr className={css(styles.headerRow)}><th className={css(styles.thStyle)} style={{textAlign: 'left'}}>{props.textFirstCell}</th><th className={css(styles.thStyle)}>{props.textSecondCell}</th></tr>
    }
  } else {
    return <tr className={css(styles.defaultRow)}><td style={{padding: '3px'}}>{props.textFirstCell}</td><td>{props.textSecondCell}</td></tr>
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

const styles = StyleSheet.create({
  headerRow: {
    background: "#deb5b545"
  },
  defaultRow: {
    background: "#f5f5f5ab"
  },
  thStyle:{
    borderCollapse: 'collapse',
	  border: '1px black solid',
    padding: '3px',
  }
});

export default CourseListRow;
