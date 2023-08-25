import {
  login, logout, displayNotificationDrawer, hideNotificationDrawer,
  loginRequest, loginSuccess, loginFailure
} from "./uiActionCreators";

it('login test', () => {
  const expected = {
    type: 'LOGIN',
    user: {
      email: 'Zuky Musk',
      password: 'Bravo1_Hayes'
    }
  };
  expect(login('Zuky Musk', 'Bravo1_Hayes')).toEqual(expected);
});

it('logout test', () => {
  const expected = {type: 'LOGOUT'};
  expect(logout()).toEqual(expected);
});

it('displayNotificationDrawer test', () => {
  const expected = {type: 'DISPLAY_NOTIFICATION_DRAWER'};
  expect(displayNotificationDrawer()).toEqual(expected);
});

it('hideDisplayNotification test', () => {
  const expected = {type: 'HIDE_NOTIFICATION_DRAWER'};
  expect(hideNotificationDrawer()).toEqual(expected);
});

it('if the API returns the right response, the store received two actions LOGIN and LOGING_SUCCESS', () => {

});

it('if the API query fails, the store received two actions LOGIN and LOGIN_FAILURE', () => {

});
