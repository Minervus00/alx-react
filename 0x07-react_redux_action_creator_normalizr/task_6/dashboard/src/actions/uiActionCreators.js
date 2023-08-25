import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

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

export const boundLogin = (email, password) => dispatch(login(email, password));
export const boundLogout = () => dispatch(logout());
export const boundDisplayNotifDrawer = () => dispatch(displayNotificationDrawer());
export const boundHideNotifDrawer = () => dispatch(hideNotificationDrawer());
