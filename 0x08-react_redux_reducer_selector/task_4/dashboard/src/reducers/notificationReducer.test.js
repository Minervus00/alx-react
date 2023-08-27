import { notificationReducer, initialState } from "./notificationReducer";

it('the default state returned when an empty action is passsed', () => {
  expect(notificationReducer(undefined, {})).toEqual(initialState);
});

it('FETCH_NOTIFICATIONS_SUCCESS returns the data passed', () => {
  const expected = {
    filter: "DEFAULT",
    notifications: [
      {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available"
      },
      {
        id: 2,
        isRead: false,
        type: "urgent",
        value: "New resume available"
      },
      {
        id: 3,
        isRead: false,
        type: "urgent",
        value: "New data available"
      }
    ]
  };
  const action = {
    type: 'FETCH_NOTIFICATIONS_SUCCESS',
    data: [
      {
        id: 1,
        type: "default",
        value: "New course available"
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available"
      },
      {
        id: 3,
        type: "urgent",
        value: "New data available"
      }
    ]
  };
  expect(notificationReducer(undefined, action)).toEqual(expected);
});

it('MARK_AS_READ returns the data with the right item updated', () => {
  const state = {
    filter: "DEFAULT",
    notifications: [
      {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available"
      },
      {
        id: 2,
        isRead: false,
        type: "urgent",
        value: "New resume available"
      },
      {
        id: 3,
        isRead: false,
        type: "urgent",
        value: "New data available"
      }
    ]
  };
  const action = {type: 'MARK_AS_READ', index: 2};
  const newState = notificationReducer(state, action);
  expect(newState.notifications.filter(obj => obj.id == 2)[0].isRead).toEqual(true);
});

it('SET_TYPE_FILTER returns the data with the filter updated', () => {
  const state = {
    filter: "DEFAULT",
    notifications: [
      {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available"
      },
      {
        id: 2,
        isRead: false,
        type: "urgent",
        value: "New resume available"
      },
      {
        id: 3,
        isRead: false,
        type: "urgent",
        value: "New data available"
      }
    ]
  };
  const action = {type: 'SET_TYPE_FILTER', filter: 'URGENT'};
  const newState = notificationReducer(state, action);
  expect(newState.filter).toEqual('URGENT');
});
