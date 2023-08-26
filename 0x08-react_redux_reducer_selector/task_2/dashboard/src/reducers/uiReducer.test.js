import { initialState, uiReducer } from './uiReducer';
import {selectCourse} from '../actions/courseActionCreators';
import {displayNotificationDrawer} from '../actions/uiActionCreators';

it('uiReducer works well when no action passed', () => {
  expect(uiReducer(undefined, {}).toJS()).toEqual(initialState);
});

it('uiReducer works well when SELECT_COURSE is passed', () => {
  expect(uiReducer(initialState, selectCourse(0)).toJS()).toEqual(initialState);
});

it('uiReducer works well when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
  expect(uiReducer(initialState, displayNotificationDrawer()).toJS().isNotificationDrawerVisible).toEqual(true);
});
