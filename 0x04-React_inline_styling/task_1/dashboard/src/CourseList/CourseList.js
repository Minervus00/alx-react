import React from "react";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import './CourseList.css';

function CourseList(props) {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses"/>
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit"/>
      </thead>
      <tbody>
        {props.listCourses.length === 0 && <tr><td colSpan="2" style={{textAlign: 'center'}}>No course available yet</td></tr>}
        {props.listCourses.map((course) => (
          <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit}/>
        ))}
      </tbody>
    </table>
  );
}

CourseList.defaultProps = {listCourses: []};
CourseList.propTypes = {listCourses: PropTypes.arrayOf(CourseShape)};

const styles = StyleSheet.create({});

export default CourseList;
