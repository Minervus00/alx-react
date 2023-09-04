import {
  MARK_AS_READ, SET_TYPE_FILTER,
  SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS
} from "./notificationActionTypes";

export function markAsAread(id) {
  return {
    type: MARK_AS_READ,
    id,
  };
}
export const boundMarkAsAread = (id) => dispatch(markAsAread(id));

export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter
  };
}
export const boundSetNotifFilter = (filter) => dispatch(setNotificationFilter(filter));

export function setLoadingState(loading) {
  return {
    type: SET_LOADING_STATE,
    loading
  };
}

export function setNotifications(data) {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data
  };
}

export function fetchNotifications() {
  return (dispatch) => {
    dispatch(setLoadingState(true));
    return fetch("http://localhost:8564/notifications.json")
      .then((res) => res.json())
      .then((json) => dispatch(setNotifications(json)))
      .catch((err) => {})
      .finally(() => dispatch(setLoadingState(false)));
  };
}
