import {
  MARK_AS_READ, SET_TYPE_FILTER,
  SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS
} from "./notificationActionTypes";

export function markAsAread(index) {
  return {
    type: MARK_AS_READ,
    index
  };
}

export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter
  };
}

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

export const boundMarkAsAread = index => dispatchEvent(markAsAread(index));
export const boundSetNotifFilter = filter => dispatchEvent(setNotificationFilter(filter));
