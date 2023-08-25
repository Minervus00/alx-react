import {
  LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE
} from "./uiActionTypes";

export function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password }
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}

export function loginSuccess() {
  return {type: LOGIN_SUCCESS};
}

export function loginFailure() {
  return {type: LOGIN_FAILURE};
}

export function loginRequest(email, password) {
  boundLogin(email, password);
  const response = fetch('http://localhost:8585/login-success.json')
  .then((response) => {
    if (response.ok) {
      dispatch(loginSuccess());
    } else {
      throw new Error('Fetching failed');
    }
  })
  .catch((err) => dispatch(loginFailure()));

  return response;
}

export const boundLogin = (email, password) => dispatch(login(email, password));
export const boundLogout = () => dispatch(logout());
export const boundDisplayNotifDrawer = () => dispatch(displayNotificationDrawer());
export const boundHideNotifDrawer = () => dispatch(hideNotificationDrawer());
