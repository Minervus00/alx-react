import React from "react";
import CourseListRow from "./CourseListRow";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { fetchCourses, selectCourse, unSelectCourse } from "../actions/courseActionCreators";
import { getListCourses } from "../selectors/courseSelector";
import { connect } from 'react-redux';

export class CourseList extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeRow = this.onChangeRow.bind(this);
  }

  componentDidMount() {
    this.props.fetchCourses();
  }

  onChangeRow = (id, checked) => {
    if (!checked) {
      return this.props.selectCourse(id);
    }
    return this.props.unSelectCourse(id);
  }

  render() {
    return (
      <table className={css(styles.tableStyle)}>
        <thead>
          <CourseListRow isHeader={true} textFirstCell="Available courses"/>
          <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit"/>
        </thead>
        <tbody>
          {this.props.listCourses.length === 0 && <tr><td colSpan="2" style={{textAlign: 'center'}}>No course available yet</td></tr>}
          {this.props.listCourses.length > 0 &&
            this.props.listCourses.map((course) => (
              <CourseListRow
                key={course.id}
                id={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
                isChecked={course.isSelected}
                onChangeRow={this.onChangeRow}
              />
            ))
          }
        </tbody>
      </table>
    );
  }
}

const styles = StyleSheet.create({
  tableStyle: {
    borderCollapse: 'collapse',
	  border: '1px black solid',
    width: '90%',
	  fontWeight: 'normal'
  }
});

CourseList.defaultProps = {listCourses: []};
CourseList.propTypes = {listCourses: PropTypes.arrayOf(PropTypes.object)};

export const mapStateToProps = (state) => {
  const crs = getListCourses(state);
  return {
    listCourses: crs,
  };
};

const mapDispatchToProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
