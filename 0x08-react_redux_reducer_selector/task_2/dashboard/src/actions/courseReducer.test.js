import { courseReducer } from "./courseReducer";

it('the default state returns an empty array', () => {
  expect(courseReducer(undefined, [])).toEqual([]);
});

it('FETCH_COURSE_SUCCESS returns the data passed', () => {
  const expected = [
    {
      id: 1,
      name: "ES6",
      isSelected: false,
      credit: 60
    },
    {
      id: 2,
      name: "Webpack",
      isSelected: false,
      credit: 20
    },
    {
      id: 3,
      name: "React",
      isSelected: false,
      credit: 40
    }
  ];
  const action = {
    type: 'FETCH_COURSE_SUCCESS',
    data: [
      {
        id: 1,
        name: "ES6",
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20
      },
      {
        id: 3,
        name: "React",
        credit: 40
      }
    ]
  };
  expect(courseReducer(undefined, action)).toEqual(expected);
});

it('SELECT_COURSE returns the data with the right item updated', () => {
  const state = [
    {
      id: 1,
      name: "ES6",
      isSelected: false,
      credit: 60
    },
    {
      id: 2,
      name: "Webpack",
      isSelected: false,
      credit: 20
    },
    {
      id: 3,
      name: "React",
      isSelected: false,
      credit: 40
    }
  ];
  const action = {type: 'SELECT_COURSE', index: 2};
  const newState = courseReducer(state, action);
  expect(newState.filter(obj => obj.id == 2)[0].isSelected).toEqual(true);
});

it('UNSELECT_COURSE returns the data with the right item updated', () => {
  const state = [
    {
      id: 1,
      name: "ES6",
      isSelected: false,
      credit: 60
    },
    {
      id: 2,
      name: "Webpack",
      isSelected: true,
      credit: 20
    },
    {
      id: 3,
      name: "React",
      isSelected: false,
      credit: 40
    }
  ];
  const action = {type: 'UNSELECT_COURSE', index: 2};
  const newState = courseReducer(state, action);
  expect(newState.filter(obj => obj.id == 2)[0].isSelected).toEqual(false);
});
