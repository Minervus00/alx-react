import { notificationReducer, initialNotifState } from "./notificationReducer";
import { Map } from "immutable";

it('the default state returned when an empty action is passsed', () => {
  expect(notificationReducer(undefined, {})).toEqual(Map(initialNotifState));
});

it('FETCH_NOTIFICATIONS_SUCCESS returns the data passed', () => {
  const expected = {
    filter: "DEFAULT",
    loading: false,
    notifications: {
      '1': {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available"
      },
      '2': {
        id: 2,
        isRead: false,
        type: "urgent",
        value: "New resume available"
      },
      '3': {
        id: 3,
        isRead: false,
        type: "urgent",
        value: "New data available"
      }
    },
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
  const result = notificationReducer(undefined, action).toJS();
  expect(result).toEqual(expected);
});

it('MARK_AS_READ returns the data with the right item updated', () => {
  const state = {
    filter: "DEFAULT",
    notifications: {
      '1': {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available"
      },
      '2': {
        id: 2,
        isRead: false,
        type: "urgent",
        value: "New resume available"
      },
      '3': {
        id: 3,
        isRead: false,
        type: "urgent",
        value: "New data available"
      }
    }
  };
  const action = {type: 'MARK_AS_READ', index: 2};
  const newState = notificationReducer(state, action);
  expect(newState.notifications[2].isRead).toEqual(true);
});

it('SET_TYPE_FILTER returns the data with the filter updated', () => {
  const state = {
    filter: "DEFAULT",
    loading: false,
    notifications: {}
  };
  const action = {type: 'SET_TYPE_FILTER', filter: 'URGENT'};
  const newState = notificationReducer(state, action);
  expect(newState.filter).toEqual('URGENT');
});

it('SET_LOADING_STATE returns the data with loading updated', () => {
  const state = {
    filter: "DEFAULT",
    loading: false,
    notifications: {}
  };
  let action = {type: 'SET_LOADING_STATE', loading: true};
  let newState = notificationReducer(state, action);
  expect(newState.loading).toEqual(true);
  action = {type: 'SET_LOADING_STATE', loading: false};
  newState = notificationReducer(state, action);
  expect(newState.loading).toEqual(false);
});
