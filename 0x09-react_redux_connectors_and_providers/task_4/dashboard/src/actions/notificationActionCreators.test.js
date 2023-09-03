import { markAsAread, setNotificationFilter } from './notificationActionCreators';
import { NotificationTypeFilters } from './notificationActionTypes';

it('markAsAread action test', () => {
  const expected = {type: 'MARK_AS_READ', index: 1};
  expect(markAsAread(1)).toEqual(expected);
});

it('setNotificationFilter action test', () => {
  const expected = {type: 'SET_TYPE_FILTER', filter: 'DEFAULT'};
  expect(setNotificationFilter(NotificationTypeFilters.default)).toEqual(expected);
});
