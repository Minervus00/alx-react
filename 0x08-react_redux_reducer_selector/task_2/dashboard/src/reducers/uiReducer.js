import { 
  LOGOUT, DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER, LOGIN_FAILURE, LOGIN_SUCCESS
} from "../actions/uiActionTypes";
import { Map } from 'immutable';

export const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
};

export function uiReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return Map(state).set('isNotificationDrawerVisible', true);

    case HIDE_NOTIFICATION_DRAWER:
      return Map(state).set('isNotificationDrawerVisible', false);

    case LOGIN_SUCCESS:
      return Map(state).set('isUserLoggedIn', true);

    case LOGIN_FAILURE:
    case LOGOUT:
      return Map(state).set('isUserLoggedIn', false);

    default:
      return Map(state);
  }
}
