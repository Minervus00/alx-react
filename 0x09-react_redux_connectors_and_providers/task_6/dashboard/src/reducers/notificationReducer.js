import {
  FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ,
  SET_TYPE_FILTER, SET_LOADING_STATE
} from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notifications";
import { Map, set, setIn } from "immutable";

export const initialNotifState = {
  notifications: {},
  filter: 'DEFAULT',
  loading: false
};

export function notificationReducer(state = Map(initialNotifState), action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normlizdData = notificationsNormalizer(action.data);
      Object.keys(normlizdData.notifications).map(key => {
        normlizdData.notifications[key].isRead = false;
      });
      return state.mergeDeep(normlizdData);

    case MARK_AS_READ:
      return setIn(state, ['notifications', action.index.toString(), 'isRead'], true);

    case SET_TYPE_FILTER:
      return set(state, ['filter'], action.filter);
    
    case SET_LOADING_STATE:
      return set(state, ['loading'], action.loading);

    default:
      return state;
  }
}
