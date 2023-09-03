import { markAsAread, setNotificationFilter, setLoadingState, setNotifications } from './notificationActionCreators';
import { NotificationTypeFilters } from './notificationActionTypes';

it('markAsAread action test', () => {
  const expected = {type: 'MARK_AS_READ', index: 1};
  expect(markAsAread(1)).toEqual(expected);
});

it('setNotificationFilter action test', () => {
  const expected = {type: 'SET_TYPE_FILTER', filter: 'DEFAULT'};
  expect(setNotificationFilter(NotificationTypeFilters.default)).toEqual(expected);
});

it('setLoadingState action test', () => {
  const expected = {type: 'SET_LOADING_STATE', loading: false};
  expect(setLoadingState(false)).toEqual(expected);
});

it('setNotifications action test', () => {
  const expected = {type: 'FETCH_NOTIFICATIONS_SUCCESS', data: []};
  expect(setNotifications([])).toEqual(expected);
});
