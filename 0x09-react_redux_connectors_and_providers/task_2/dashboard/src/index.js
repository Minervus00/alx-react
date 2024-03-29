import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App/App';
import { Map } from 'immutable';
import thunk from 'redux-thunk';
import { uiReducer, initialState } from './reducers/uiReducer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(uiReducer, Map(initialState), applyMiddleware(thunk));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
