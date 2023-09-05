import { selectCourse, unSelectCourse, setCourses } from "./courseActionCreators"

it('Calling the action creator selectCourse with 1 as argument', () => {
  const expected = { type: 'SELECT_COURSE', id: 1 };
  expect(selectCourse(1)).toEqual(expected);
});

it('Calling the action creator unSelectCourse with 1 as argument', () => {
  const expected = { type: 'UNSELECT_COURSE', id: 1 };
  expect(unSelectCourse(1)).toEqual(expected);
});

it('Calling the action creator unSelectCourse with 1 as argument', () => {
  const expected = { type: 'FETCH_COURSE_SUCCESS', data: [] };
  expect(setCourses([])).toEqual(expected);
});
