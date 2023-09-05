import { getListCourses } from "./courseSelector";
import { courseReducer } from "../reducers/courseReducer";

it('getListCourses works properly', () => {
  const action = {
    type: 'FETCH_COURSE_SUCCESS',
    data: [
      {
        "id": "1",
        "name": "ES6",
        "credit": 60
      },
      {
        "id": "2",
        "name": "Webpack",
        "credit": 20
      },
    ],
  };
  const listCr = [
    {
      "id": "1",
      "name": "ES6",
      "credit": 60,
      isSelected: false,
    },
    {
      "id": "2",
      "name": "Webpack",
      "credit": 20,
      isSelected: false,
    },
  ];
  const state = courseReducer(undefined, action);
  expect(getListCourses(state)).toEqual(listCr);
});
