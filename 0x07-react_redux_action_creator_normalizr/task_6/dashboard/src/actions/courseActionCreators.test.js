import { selectCourse, unSelectCourse } from "./courseActionCreators"

it('Calling the acction creator selectCourse with 1 as argument', () => {
  const expected = { type: 'SELECT_COURSE', index: 1 };
  expect(selectCourse(1)).toEqual(expected);
});

it('Calling the acction creator unSelectCourse with 1 as argument', () => {
  const expected = { type: 'UNSELECT_COURSE', index: 1 };
  expect(unSelectCourse(1)).toEqual(expected);
});
