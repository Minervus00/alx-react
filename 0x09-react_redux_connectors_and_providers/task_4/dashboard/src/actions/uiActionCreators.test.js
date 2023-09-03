import {
  login, logout, displayNotificationDrawer, hideNotificationDrawer,
  loginRequest, loginSuccess, loginFailure
} from "./uiActionCreators";
// import configureStore from 'redux-mock-store';
// import {thunk} from 'redux-thunk';
// import { fetchMock } from 'fetch-mock';
// const fetch = require("node-fetch");

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

// it('if the API returns the right response, the store received two actions LOGIN and LOGING_SUCCESS', () => {
//   global.fetch = fetch;
//   const mockstore = configureStore([thunk]);
//   const initialState = {};
//   const store = mockstore(initialState);
//   const fetch_mock = fetchMock.mock('http://localhost:8564/login-success.json', 200);

//   return store.dispatch(uiActionCreators.loginRequest('test@test', 'test'))
//   .then(() => {
//     const actions = store.getActions()
//     console.log(actions);
//     expect(actions[0]).toEqual(login('test@test', 'test'));
//     expect(actions[1]).toEqual(loginSuccess());
//     fetch_mock.reset();
//   });
// });

// it('if the API query fails, the store received two actions LOGIN and LOGIN_FAILURE', () => {
//   global.fetch = fetch;
//   const mockstore = configureStore([thunk]);
//   const initialState = {};
//   const store = mockstore(initialState);
//   const fetch_mock = fetchMock.mock('http://localhost:8564/login-success.json', 500);

//   return store.dispatch(uiActionCreators.loginRequest('test@test', 'test'))
//   .then(() => {
//     const actions = store.getActions()
//     console.log(actions);
//     expect(actions[0]).toEqual(login('test@test', 'test'));
//     expect(actions[1]).toEqual(loginFailure());
//     fetch_mock.reset();
//   });
// });
