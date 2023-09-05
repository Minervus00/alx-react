import { initialUiState, uiReducer } from './uiReducer';
import { selectCourse } from '../actions/courseActionCreators';
import { displayNotificationDrawer, login } from '../actions/uiActionCreators';
import { Map } from 'immutable';

it('uiReducer works well when no action passed', () => {
  expect(uiReducer(undefined, {}).toJS()).toEqual(initialUiState);
});

it('uiReducer works well when SELECT_COURSE is passed', () => {
  expect(uiReducer(Map(initialUiState), selectCourse(0)).toJS()).toEqual(initialUiState);
});

it('uiReducer works well when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
  expect(uiReducer(Map(initialUiState), displayNotificationDrawer()).toJS().isNotificationDrawerVisible).toEqual(true);
});

it('uiReducer works well when LOGIN is passed', () => {
  const expected = {
    email: 'jason.hayes@ftw.com',
    password: 'Br4V01',
  };
  expect(uiReducer(Map(initialUiState), login('jason.hayes@ftw.com', 'Br4V01')).toJS().user).toEqual(expected);
});
