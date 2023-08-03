import React from "react";
import PropTypes from "prop-types";
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from "../CourseList/CourseList";
import "./App.css";
import '../Header/Header.css';
import '../Footer/Footer.css';
import '../Login/Login.css';

function App(props) {
  return (
    <>
      <div id="root-notifications">
        <Notifications />
      </div>

      <div className='App'>
        <div className='App-header'>
          <Header />
        </div>

        <div className="App-body">
          {props.isLoggedIn ? <CourseList /> : <Login />}
        </div>

        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

App.defaultProps = {
  isLoggedIn: false
};

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default App;
