import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import { Map, setIn } from 'immutable';
import { coursesNormalizer } from "../schema/courses";

export const initialCourseState = [];

export function courseReducer(state = Map(initialCourseState), action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const normlizdData = coursesNormalizer(action.data);
      Object.keys(normlizdData).map(id => {
        normlizdData[id].isSelected = false;
      })
      return state.merge(normlizdData);

    case SELECT_COURSE:
      return setIn(state, [action.index.toString(), 'isSelected'], true);

    case UNSELECT_COURSE:
      return setIn(state, [action.index.toString(), 'isSelected'], false);

    default:
      return state;
  }
}
