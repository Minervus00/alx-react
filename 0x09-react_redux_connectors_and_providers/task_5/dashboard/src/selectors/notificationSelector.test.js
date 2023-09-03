import { notificationReducer } from "../reducers/notificationReducer";
import { filterTypeSelected, getNotifications, getUnreadNotifications } from "./notificationSelector";

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

let state = notificationReducer(undefined, action);

it('filterTypeSelected works as expected', () => {
  const result = filterTypeSelected(state);
  expect(result).toBe('DEFAULT');
});

it('getNotifications returns a list of the message within the reducer', () => {
  const result = getNotifications(state);
  const expected = [
    {
      id: 1,
      type: "default",
      value: "New course available",
      isRead: false
    },
    {
      id: 2,
      type: "urgent",
      value: "New resume available",
      isRead: false
    },
    {
      id: 3,
      type: "urgent",
      value: "New data available",
      isRead: false
    }
  ];
  expect(result).toEqual(expected);
});

it('getUnreadNotifications return a list of the message within the reducer', () => {
  state = notificationReducer(state, {type: 'MARK_AS_READ', index: 2});
  const result = getUnreadNotifications(state);
  const expected = [
    {
      id: 1,
      type: "default",
      value: "New course available",
      isRead: false
    },
    {
      id: 3,
      type: "urgent",
      value: "New data available",
      isRead: false
    }
  ]
  expect(result).toEqual(expected);
});
