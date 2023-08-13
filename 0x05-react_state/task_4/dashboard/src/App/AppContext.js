import React from 'react';

export const user = {email: 'Stufffff', password: '', isLoggedIn: true};
export const logOut = () => {user.isLoggedIn = false};
export const AppContext = React.createContext({
  user,
  logOut
});
