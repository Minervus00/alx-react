import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";

export function courseReducer(state = [], action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return action.data.map((courseObj) => {
        courseObj.isSelected = false;
        return courseObj
      });

    case SELECT_COURSE:
      return state.map((courseObj) => {
        if (courseObj.id === action.index) {
          courseObj.isSelected = true;
        }
        return courseObj;
      });

      case UNSELECT_COURSE:
        return state.map((courseObj) => {
          if (courseObj.id === action.index) {
            courseObj.isSelected = false;
          }
          return courseObj;
        });

    default:
      return state;
  }
}
