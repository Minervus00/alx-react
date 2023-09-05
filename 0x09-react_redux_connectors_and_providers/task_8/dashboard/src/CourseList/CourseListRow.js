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
    return (
      <tr className={props.isChecked ? css(styles.rowChecked) : css(styles.defaultRow)}>
        <td style={{padding: '3px'}}>
          <input type='checkbox' onClick={() => props.onChangeRow(props.id, props.isChecked)}/>
          {props.textFirstCell}
        </td><td>{props.textSecondCell}</td>
      </tr>
    )
  }
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
  isChecked: false,
  onChangeRow: () => {},
};

CourseListRow.propTypes = {
  id: PropTypes.string,
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isChecked: PropTypes.bool,
  onChangeRow: PropTypes.func
};

const styles = StyleSheet.create({
  headerRow: {
    background: "#deb5b545"
  },
  defaultRow: {
    background: "#f5f5f5ab"
  },
  thStyle: {
    borderCollapse: 'collapse',
	  border: '1px black solid',
    padding: '3px',
  },
  rowChecked: {
    backgroundColor: "#e6e4e4",
  }
});

export default CourseListRow;
