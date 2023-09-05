import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "./courseActionTypes";

export function selectCourse(id) {
  return { type: SELECT_COURSE, id };
}

export function unSelectCourse(id) {
  return { type: UNSELECT_COURSE, id };
}

export function setCourses(data) {
  return { type: FETCH_COURSE_SUCCESS, data };
}

export function fetchCourses() {
  return (dispatch) => {
    return fetch("http://localhost:8564/courses.json")
      .then((res) => res.json())
      .then((json) => dispatch(setCourses(json)))
      .catch((err) => {});
  };
}

export const boundSelectCourse = (id) => dispatch(selectCourse(id));
export const boundUnselectCourse = (id) => dispatch(unSelectCourse(id));
