import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER  } from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notifications";
import { Map, set, setIn } from "immutable";

export const initialNotifState = {
  notifications: [],
  filter: 'DEFAULT',
}

export function notificationReducer(state = Map(initialNotifState), action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normlizdData = notificationsNormalizer(action.data)
      Object.keys(normlizdData).map(id => {
        normlizdData[id].isRead = false;
      })
      return state.merge({notifications: normlizdData});

    case MARK_AS_READ:
      return setIn(state, ['notifications', action.index.toString(), 'isRead'], true);

    case SET_TYPE_FILTER:
      return set(state, ['filter'], action.filter);

    default:
      return state;
  }
}
